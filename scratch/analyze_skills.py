import json

sample_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\sample_candidates.json"

with open(sample_path, "r", encoding="utf-8") as f:
    candidates = json.load(f)

all_skills = {}
for cand in candidates:
    for s in cand.get("skills", []):
        all_skills[s["name"]] = all_skills.get(s["name"], 0) + 1

# Sort by frequency descending
sorted_skills = sorted(all_skills.items(), key=lambda x: x[1], reverse=True)
print("Unique skills found in sample:")
for skill, count in sorted_skills:
    print(f"  {skill}: {count}")
