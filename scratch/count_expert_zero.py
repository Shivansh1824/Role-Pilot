import json

candidates_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"

counts = {}
with open(candidates_path, "r", encoding="utf-8") as f:
    for line in f:
        if not line.strip():
            continue
        cand = json.loads(line)
        expert_zero_dur = 0
        for s in cand.get("skills", []):
            if s["proficiency"] in ["expert", "advanced"] and s["duration_months"] == 0:
                expert_zero_dur += 1
        counts[expert_zero_dur] = counts.get(expert_zero_dur, 0) + 1

print("Distribution of expert/advanced skills with 0 duration:")
for val, cnt in sorted(counts.items()):
    print(f"  {val} skills: {cnt} candidates")
