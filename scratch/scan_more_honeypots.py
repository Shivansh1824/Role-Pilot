import json
import os
from datetime import datetime

candidates_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"

def parse_date(date_str):
    if not date_str:
        return datetime(2026, 6, 29)
    try:
        return datetime.strptime(date_str, "%Y-%m-%d")
    except Exception:
        return datetime(2026, 6, 29)

def scan():
    total = 0
    anomalous = []
    
    with open(candidates_path, "r", encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            total += 1
            cand = json.loads(line)
            cid = cand["candidate_id"]
            
            reasons = []
            
            # Check 1: Expert/Advanced skills with 0 duration
            expert_zero_dur_skills = [s["name"] for s in cand.get("skills", []) if s["proficiency"] in ["expert", "advanced"] and s["duration_months"] == 0]
            if len(expert_zero_dur_skills) >= 3:
                reasons.append(f"Has {len(expert_zero_dur_skills)} expert/advanced skills with 0 duration: {expert_zero_dur_skills}")
            
            # Check 2: Job calendar months vs duration_months
            current_date = datetime(2026, 6, 29)
            for job in cand.get("career_history", []):
                start = parse_date(job["start_date"])
                end = parse_date(job["end_date"]) if not job["is_current"] else current_date
                elapsed = (end.year - start.year) * 12 + (end.month - start.month)
                if job["duration_months"] > elapsed + 1:
                    reasons.append(f"Job at {job['company']} duration ({job['duration_months']} months) exceeds calendar elapsed months ({elapsed})")
            
            # Check 3: Job duration exceeds total experience
            years_exp = cand["profile"]["years_of_experience"]
            for job in cand.get("career_history", []):
                if job["duration_months"] / 12.0 > years_exp + 0.1:
                    reasons.append(f"Job duration ({job['duration_months']} months) exceeds total experience ({years_exp} years)")
            
            # Check 4: Experience starts before graduation (allowing 1 year overlap for internships, but e.g. 5 years before graduation)
            # Find earliest bachelor end year
            bachelor_end_year = None
            for edu in cand.get("education", []):
                deg = edu["degree"].lower()
                if "b." in deg or "bachelor" in deg or "b.e" in deg or "b.tech" in deg or "bsc" in deg or "b.sc" in deg:
                    if bachelor_end_year is None or edu["end_year"] < bachelor_end_year:
                        bachelor_end_year = edu["end_year"]
            
            if bachelor_end_year:
                # If experience is greater than time since graduation
                years_since_grad = 2026 - bachelor_end_year
                if years_exp > years_since_grad + 2:
                    reasons.append(f"Years of experience ({years_exp}) is impossible given bachelor graduation year {bachelor_end_year} (max {years_since_grad + 2} years)")
            
            if reasons:
                anomalous.append((cid, reasons))
                
    print(f"Total: {total}")
    print(f"Anomalous count: {len(anomalous)}")
    for cid, r in anomalous[:20]:
        print(f"  {cid}: {'; '.join(r)}")

if __name__ == "__main__":
    scan()
