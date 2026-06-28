import json
import gzip
import os
from datetime import datetime

candidates_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"

def parse_date(date_str):
    if not date_str:
        return datetime(2026, 6, 29) # Current time of challenge
    try:
        return datetime.strptime(date_str, "%Y-%m-%d")
    except Exception:
        return datetime(2026, 6, 29)

def scan_candidates():
    total_count = 0
    honeypots = []
    
    with open(candidates_path, "r", encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            total_count += 1
            cand = json.loads(line)
            cid = cand["candidate_id"]
            
            reasons = []
            
            # Check 1: Expert/Advanced skills with 0 duration
            expert_zero_dur = 0
            for skill in cand.get("skills", []):
                if skill["proficiency"] in ["expert", "advanced"] and skill["duration_months"] == 0:
                    expert_zero_dur += 1
            if expert_zero_dur >= 5: # e.g. 5 or more expert skills with 0 duration
                reasons.append(f"Expert/Advanced skills with 0 duration: {expert_zero_dur}")
            
            # Check 2: Job duration impossible (duration_months > calendar_months)
            current_date = datetime(2026, 6, 29)
            for job in cand.get("career_history", []):
                start = parse_date(job["start_date"])
                end = parse_date(job["end_date"]) if not job["is_current"] else current_date
                
                # Calculate elapsed months
                elapsed_months = (end.year - start.year) * 12 + (end.month - start.month)
                # If duration_months is larger than elapsed_months
                if job["duration_months"] > elapsed_months + 1:
                    reasons.append(f"Job at {job['company']} has duration {job['duration_months']} months, but only {elapsed_months} months elapsed from {job['start_date']} to {job['end_date'] or 'current'}")
            
            # Check 3: total experience vs duration of jobs
            years_exp = cand["profile"]["years_of_experience"]
            for job in cand.get("career_history", []):
                if job["duration_months"] / 12.0 > years_exp + 0.1:
                    reasons.append(f"Job duration ({job['duration_months']} months) exceeds total experience ({years_exp} years)")
            
            if reasons:
                honeypots.append((cid, reasons))
                
            if total_count % 20000 == 0:
                print(f"Scanned {total_count} candidates...")
                
    print(f"Total candidates scanned: {total_count}")
    print(f"Found {len(honeypots)} honeypot/anomalous candidates.")
    
    # Print first 10 honeypots to verify
    for i, (cid, r) in enumerate(honeypots[:10]):
        print(f"  {cid}: {'; '.join(r)}")

if __name__ == "__main__":
    scan_candidates()
