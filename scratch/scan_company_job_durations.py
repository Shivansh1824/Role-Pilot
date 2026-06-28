import json

candidates_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"

impossible_jobs = []

# Startup foundation years:
# Krutrim: Dec 2023 (or let's say 2023)
# Sarvam AI: 2023
# Rephrase.ai: 2019
# Observe.AI: 2017
# Let's see if there are jobs at Krutrim or Sarvam AI with start_date < 2023
# or duration_months > 36 (since we are in June 2026, max duration at Krutrim is ~30 months)

with open(candidates_path, "r", encoding="utf-8") as f:
    for line in f:
        if not line.strip():
            continue
        cand = json.loads(line)
        cid = cand["candidate_id"]
        for job in cand.get("career_history", []):
            comp = job["company"]
            start_year = int(job["start_date"].split("-")[0]) if job["start_date"] else 2026
            
            is_impossible = False
            reason = ""
            
            if comp == "Krutrim" and (start_year < 2023 or job["duration_months"] > 36):
                is_impossible = True
                reason = f"Worked at Krutrim starting {job['start_date']} with {job['duration_months']} months"
            elif comp == "Sarvam AI" and (start_year < 2023 or job["duration_months"] > 36):
                is_impossible = True
                reason = f"Worked at Sarvam AI starting {job['start_date']} with {job['duration_months']} months"
            elif comp == "Observe.AI" and (start_year < 2017 or job["duration_months"] > 115):
                is_impossible = True
                reason = f"Worked at Observe.AI starting {job['start_date']} with {job['duration_months']} months"
            
            if is_impossible:
                impossible_jobs.append((cid, comp, reason))

print(f"Found {len(impossible_jobs)} impossible startup jobs:")
for cid, comp, r in impossible_jobs[:20]:
    print(f"  {cid} ({comp}): {r}")
