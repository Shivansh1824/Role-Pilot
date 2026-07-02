import { getSupabaseClient } from './supabase-client.js';

document.addEventListener('DOMContentLoaded', async () => {
    let db = null;
    let user = null;

    try {
        db = await getSupabaseClient();
        const { data: userData, error: authError } = await db.auth.getUser();
        
        if (authError || !userData || !userData.user) {
            window.location.href = 'index.html';
            return;
        }
        user = userData.user;
    } catch (e) {
        window.location.href = 'index.html';
        return;
    }

    // Set up logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await db.auth.signOut();
            window.location.href = 'index.html';
        });
    }

    // Dropdown toggle
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
            if (!profileTrigger.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });
    }

    // Mock candidates for hackathon presentation
    const mockCandidates = [
        {
            name: 'Alex K.',
            role: 'Senior AI Engineer',
            match: 98,
            codingScore: '95/100',
            codingLevel: 'O(N) Optimal',
            behavior: 'Highly Reliable',
            behaviorScore: '99%',
            reasoning: 'Exceptional match for Vector Search and RAG. Perfect coding assessment score in Python algorithms.',
            tags: ['Vector Search', 'Python', 'RAG']
        },
        {
            name: 'Priya S.',
            role: 'Machine Learning Engineer',
            match: 94,
            codingScore: '92/100',
            codingLevel: 'Highly Optimized',
            behavior: 'Reliable',
            behaviorScore: '95%',
            reasoning: 'Strong NLP background and deep learning frameworks. Clean code architecture.',
            tags: ['PyTorch', 'NLP', 'Transformers']
        },
        {
            name: 'Jordan M.',
            role: 'Backend & AI Developer',
            match: 89,
            codingScore: '85/100',
            codingLevel: 'Standard',
            behavior: 'Solid',
            behaviorScore: '88%',
            reasoning: 'Good integration skills with LLM APIs and solid database architecture design.',
            tags: ['OpenAI API', 'Node.js', 'PostgreSQL']
        },
        {
            name: 'Samira L.',
            role: 'Data Scientist',
            match: 85,
            codingScore: '80/100',
            codingLevel: 'Acceptable',
            behavior: 'Moderate',
            behaviorScore: '82%',
            reasoning: 'Excellent mathematical background but needs training on deployment pipelines.',
            tags: ['Scikit-learn', 'Pandas', 'Data Viz']
        }
    ];

    const leaderboard = document.getElementById('candidate-leaderboard');
    if (leaderboard) {
        mockCandidates.forEach(cand => {
            const tr = document.createElement('tr');
            
            let tagsHtml = cand.tags.map(tag => `<span style="font-size: 0.7rem; background: rgba(168, 85, 247, 0.15); color: var(--primary); padding: 2px 6px; border-radius: 4px; margin-right: 4px;">${tag}</span>`).join('');

            tr.innerHTML = `
                <td>
                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">${cand.name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">${cand.role}</div>
                </td>
                <td>
                    <div style="font-weight: 700; color: ${cand.match > 90 ? 'var(--success)' : 'var(--primary)'}; font-size: 1.1rem;">${cand.match}%</div>
                </td>
                <td>
                    <div style="font-weight: 600;">${cand.codingScore}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${cand.codingLevel}</div>
                </td>
                <td>
                    <div>${cand.behaviorScore}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);"><i class="fa-solid fa-shield-heart" style="color: var(--accent);"></i> ${cand.behavior}</div>
                </td>
                <td>
                    <div style="font-size: 0.8rem; line-height: 1.3; margin-bottom: 4px;">${cand.reasoning}</div>
                    <div>${tagsHtml}</div>
                </td>
                <td>
                    <button class="btn btn-primary-gradient btn-sm" style="font-size: 0.8rem; padding: 6px 12px;">View Full Profile</button>
                </td>
            `;
            leaderboard.appendChild(tr);
        });
    }
});
