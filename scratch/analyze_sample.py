import json
import os

sample_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\sample_candidates.json"

with open(sample_path, "r", encoding="utf-8") as f:
    candidates = json.load(f)

print(f"Loaded {len(candidates)} candidates.")

# Print summary of the first 10 candidates
for i, cand in enumerate(candidates[:10]):
    profile = cand["profile"]
    skills = [s["name"] for s in cand["skills"]]
    print(f"[{i+1}] ID: {cand['candidate_id']} | Name: {profile['anonymized_name']} | Title: {profile['current_title']} | Company: {profile['current_company']} | Exp: {profile['years_of_experience']} yrs")
    print(f"    Headline: {profile['headline']}")
    print(f"    Skills: {', '.join(skills[:8])}...")
    # Check if there are any skills with expert/advanced proficiency and 0 duration
    zero_duration_skills = [s["name"] for s in cand["skills"] if s["proficiency"] in ["expert", "advanced"] and s["duration_months"] == 0]
    if zero_duration_skills:
        print(f"    WARNING (Honeypot?): Expert/Advanced skills with 0 duration: {zero_duration_skills}")
    
    # Check if any job duration is impossible (e.g. too long compared to total experience or dates)
    print("-" * 50)
