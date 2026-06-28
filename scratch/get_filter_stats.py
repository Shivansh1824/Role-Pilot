import json

candidates_file = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"

CONSULTING_COMPANIES = {
    "tcs", "infosys", "wipro", "accenture", "cognizant", "capgemini",
    "tech mahindra", "genpact ai", "hcl", "mphasis", "mindtree",
    "tata consultancy services", "hcltech", "ltimindtree"
}

RESEARCH_ACADEMIC_ROLES = {
    "phd student", "postdoc", "research assistant", "research associate",
    "intern", "trainee", "academic", "graduate assistant", "teaching assistant"
}

total = 0
honeypots_skills = 0
honeypots_time = 0
consulting_disq = 0
academic_disq = 0
cv_only_disq = 0
eligible = 0

with open(candidates_file, "r", encoding="utf-8") as f:
    for line in f:
        total += 1
        cand = json.loads(line)
        
        # 1. Honeypots checks
        skills_durations_zero = sum(1 for s in cand.get("skills_durations", []) if s.get("duration_months") == 0)
        if skills_durations_zero >= 3:
            honeypots_skills += 1
            continue
            
        time_anomaly = False
        for job in cand.get("career_history", []):
            start = job.get("start_date")
            end = job.get("end_date")
            dur = job.get("duration_months", 0)
            if start and end and dur:
                try:
                    sy, sm = map(int, start.split("-"))
                    ey, em = map(int, end.split("-"))
                    calendar_months = (ey - sy) * 12 + (em - sm)
                    if dur > calendar_months + 1:
                        time_anomaly = True
                        break
                except Exception:
                    pass
        if time_anomaly:
            honeypots_time += 1
            continue

        # 2. CV-only / No experience
        history = cand.get("career_history", [])
        if len(history) == 0:
            cv_only_disq += 1
            continue
            
        # 3. Consulting exclusion
        all_consulting = True
        for job in history:
            comp = job.get("company", "").lower()
            if not any(c in comp for c in CONSULTING_COMPANIES):
                all_consulting = False
                break
        if all_consulting:
            consulting_disq += 1
            continue
            
        # 4. Research/academic only
        all_academic = True
        for job in history:
            role = job.get("role", "").lower()
            if not any(r in role for r in RESEARCH_ACADEMIC_ROLES):
                all_academic = False
                break
        if all_academic:
            academic_disq += 1
            continue

        eligible += 1

print(f"Total: {total}")
print(f"Honeypot (skills): {honeypots_skills}")
print(f"Honeypot (time): {honeypots_time}")
print(f"CV-only: {cv_only_disq}")
print(f"Consulting: {consulting_disq}")
print(f"Academic: {academic_disq}")
print(f"Eligible: {eligible}")
