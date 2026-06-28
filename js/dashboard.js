document.addEventListener('DOMContentLoaded', () => {
    // Sync XP Score from localStorage
    const syncXP = () => {
        let xp = localStorage.getItem('rolepilot_xp');
        if (!xp) {
            xp = '4250';
            localStorage.setItem('rolepilot_xp', '4250');
        }
        const headerXpEl = document.getElementById('header-xp');
        if (headerXpEl) {
            headerXpEl.textContent = `XP: ${parseInt(xp).toLocaleString()} • Master Tier`;
        }
    };
    syncXP();

    // 1. Theme Toggling (using the exact logic requested from login.html / theme.js)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    // Set initial icon state based on theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (themeToggleBtn) {
        themeToggleBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
        
        themeToggleBtn.addEventListener('click', () => {
            const isLight = root.classList.toggle('light-theme');
            const newTheme = isLight ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
        });
    }

    // 2. Profile Dropdown Toggle
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileDropdown.contains(e.target) && e.target !== profileTrigger) {
                profileDropdown.classList.remove('show');
            }
        });
    }

    // 3. Mobile Hamburger Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const appHeader = document.querySelector('.app-header');
    
    if (mobileMenuBtn && appHeader) {
        mobileMenuBtn.addEventListener('click', () => {
            appHeader.classList.toggle('mobile-nav-active');
            const icon = mobileMenuBtn.querySelector('i');
            if (appHeader.classList.contains('mobile-nav-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 4. Session History Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // 5. TruGen AI Live Mentor Widget Collapse/Expand
    const trugenWidget = document.getElementById('trugen-widget');
    const trugenCollapseBtn = document.getElementById('trugen-collapse-btn');
    
    if (trugenWidget) {
        // Toggle from the top button
        if (trugenCollapseBtn) {
            trugenCollapseBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent triggering widget click
                trugenWidget.classList.add('collapsed');
            });
        }
        
        // Expand when clicking the collapsed widget
        trugenWidget.addEventListener('click', (e) => {
            if (trugenWidget.classList.contains('collapsed')) {
                trugenWidget.classList.remove('collapsed');
            }
        });
        
        // Prevent inputs from collapsing/expanding accidentally
        const widgetFooter = trugenWidget.querySelector('.widget-footer');
        if (widgetFooter) {
            widgetFooter.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }

    // 6. Supabase Initialization Hook
    const initSupabaseSession = async () => {
        try {
            const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            
            const { data: { session }, error } = await db.auth.getSession();
            if (error || !session) {
                window.location.href = 'login.html';
                return;
            }
            
            // Fetch profile data
            const { data: profile } = await db
                .from('profiles')
                .select('username, avatar_url, full_name, target_role, experience_level')
                .eq('id', session.user.id)
                .maybeSingle();

            if (!profile || !profile.username || !profile.avatar_url || !profile.target_role || !profile.experience_level) {
                window.location.href = 'form.html';
                return;
            }
            
            // Populate user details:
            const fullName = profile.full_name || session.user.user_metadata?.full_name || "User";
            const firstName = fullName.split(' ')[0];
            const initials = fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            
            const firstnameEl = document.getElementById('user-firstname');
            if (firstnameEl) firstnameEl.textContent = firstName;
            
            const triggerEl = document.getElementById('profile-trigger');
            if (triggerEl) {
                // If avatar URL is a dicebear link or custom image
                if (profile.avatar_url && profile.avatar_url !== 'custom_placeholder') {
                    triggerEl.innerHTML = `<img src="${profile.avatar_url}" style="width:100%; height:100%; border-radius:50%; object-fit:contain;" alt="${firstName}">`;
                } else {
                    triggerEl.textContent = initials;
                }
            }
            
            const subtitleEl = document.getElementById('greeting-subtitle');
            if (subtitleEl) {
                subtitleEl.innerHTML = `Target Role: ${profile.target_role} &bull; Current Level: ${profile.experience_level.charAt(0).toUpperCase() + profile.experience_level.slice(1)}`;
            }

            // Handle Logout
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    await db.auth.signOut();
                    window.location.href = 'index.html';
                });
            }
            
            console.log("Supabase session successfully initialized.");
        } catch (err) {
            console.error("Supabase Init Error:", err);
            window.location.href = 'login.html';
        }
    };
    
    initSupabaseSession();
});
