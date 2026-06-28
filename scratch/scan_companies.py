import json

candidates_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"

companies = set()
with open(candidates_path, "r", encoding="utf-8") as f:
    for line in f:
        if not line.strip():
            continue
        cand = json.loads(line)
        for job in cand.get("career_history", []):
            companies.add(job["company"])

print(f"Found {len(companies)} unique companies.")
print(sorted(list(companies))[:100])
