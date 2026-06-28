import json
import re

candidates_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"

pattern = re.compile(r"\bfounded\b|\bestablished\b|\bstarted in\b", re.IGNORECASE)

matches = []
with open(candidates_path, "r", encoding="utf-8") as f:
    for line in f:
        if not line.strip():
            continue
        cand = json.loads(line)
        cid = cand["candidate_id"]
        for job in cand.get("career_history", []):
            desc = job.get("description", "")
            if pattern.search(desc):
                matches.append((cid, job["company"], desc))
                
print(f"Found {len(matches)} matches.")
for cid, comp, desc in matches[:20]:
    print(f"  {cid} ({comp}): {desc[:150]}...")
