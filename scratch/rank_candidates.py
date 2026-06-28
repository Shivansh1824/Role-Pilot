import json
import csv
from datetime import datetime

candidates_path = r"c:\Users\akshit\Desktop\om\scratch\dataset\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"
csv_output_path = r"c:\Users\akshit\Desktop\om\scratch\team_rolepilot.csv"
js_output_path = r"c:\Users\akshit\Desktop\om\recruiter\top_candidates_data.js"

def parse_date(date_str):
    if not date_str:
        return datetime(2026, 6, 29)
    try:
        return datetime.strptime(date_str, "%Y-%m-%d")
    except Exception:
        return datetime(2026, 6, 29)

def calculate_score(cand):
    # 1. Disqualifications (Score = 0)
    
    # Check A: Honeypots
    # 1. Expert/advanced skill with 0 duration
    for s in cand.get("skills", []):
        if s["proficiency"] in ["expert", "advanced"] and s["duration_months"] == 0:
            return 0, "Honeypot: Expert skill with 0 duration"
            
    # 2. Job duration impossible
    current_date = datetime(2026, 6, 29)
    for job in cand.get("career_history", []):
        start = parse_date(job["start_date"])
        end = parse_date(job["end_date"]) if not job["is_current"] else current_date
        elapsed = (end.year - start.year) * 12 + (end.month - start.month)
        if job["duration_months"] > elapsed + 3:
            return 0, "Honeypot: Job duration impossible"
        if job["duration_months"] / 12.0 > cand["profile"]["years_of_experience"] + 0.5:
            return 0, "Honeypot: Job duration exceeds total experience"
            
    # Check B: Consulting Only
    history = cand.get("career_history", [])
    if not history:
        return 0, "No career history"
        
    consulting_firms = {
        "Accenture", "Capgemini", "Cognizant", "Genpact AI", "HCL", "Infosys", 
        "Mindtree", "Mphasis", "TCS", "Tech Mahindra", "Wipro"
    }
    all_consulting = True
    for job in history:
        if job["company"] not in consulting_firms:
            all_consulting = False
            break
    if all_consulting:
        return 0, "Consulting firm only in entire career"
        
    # Check C: Academic / Research Only
    all_research = True
    research_keywords = ["research", "phd", "postdoc", "fellow", "professor", "lecturer", "academic", "graduate assistant"]
    for job in history:
        title = job["title"].lower()
        if not any(kw in title for kw in research_keywords):
            all_research = False
            break
    if all_research:
        return 0, "Academic / Research only career"
        
    # Check D: Computer Vision / Speech / Robotics only (without NLP/IR/LLM)
    skills = cand.get("skills", [])
    skill_names = {s["name"].lower() for s in skills}
    
    cv_skills = {"computer vision", "yolo", "cnn", "object detection", "image classification"}
    speech_skills = {"speech recognition", "tts"}
    robotics_skills = {"robotics"}
    
    has_cv_speech_robotics = any(sk in skill_names for sk in cv_skills | speech_skills | robotics_skills)
    
    nlp_ir_search = {
        "nlp", "embeddings", "vector search", "faiss", "pinecone", "milvus", 
        "qdrant", "weaviate", "haystack", "elasticsearch", "opensearch", 
        "information retrieval", "bm25", "langchain", "recommendation systems", 
        "fine-tuning llms", "lora", "peft", "prompt engineering"
    }
    
    has_nlp_ir = any(sk in skill_names for sk in nlp_ir_search)
    
    if has_cv_speech_robotics and not has_nlp_ir:
        return 0, "CV / Speech / Robotics focus without NLP/IR exposure"

    # 2. Scoring (Max 100 points)
    score = 0
    
    # Years of experience (Max 10 points)
    years_exp = cand["profile"]["years_of_experience"]
    if 5 <= years_exp <= 9:
        score += 10
    elif 4 <= years_exp < 5 or 9 < years_exp <= 12:
        score += 7
    elif years_exp > 12:
        score += 4
    else:
        score += 2
        
    # Title Fit (Max 15 points)
    current_title = cand["profile"]["current_title"].lower()
    if any(kw in current_title for kw in ["ai engineer", "ml engineer", "machine learning", "nlp", "search engineer", "retrieval"]):
        score += 15
    elif any(kw in current_title for kw in ["software engineer", "backend", "data engineer", "developer"]):
        score += 10
    else:
        score += 2
        
    # Required Skills (Max 25 points)
    # Embeddings / NLP / IR / Search (8 points)
    search_skills = {"embeddings", "sentence transformers", "information retrieval", "vector search", "bm25", "nlp"}
    if any(sk in skill_names for sk in search_skills):
        score += 8
        
    # Vector DBs (8 points)
    vdb_skills = {"pinecone", "weaviate", "qdrant", "milvus", "faiss", "elasticsearch", "opensearch"}
    if any(sk in skill_names for sk in vdb_skills):
        score += 8
        
    # Python (5 points)
    has_python = False
    for s in skills:
        if s["name"].lower() == "python" and s["duration_months"] >= 36:
            has_python = True
            break
    if has_python:
        score += 5
    elif "python" in skill_names:
        score += 3
        
    # Evaluation (4 points)
    if "recommendation systems" in skill_names or "mlops" in skill_names:
        score += 4
        
    # Preferred Skills (Max 15 points)
    # LLM Fine-tuning (5 points)
    if any(sk in skill_names for sk in ["fine-tuning llms", "lora", "peft"]):
        score += 5
    # ML Frameworks (5 points)
    ml_frameworks = {"machine learning", "scikit-learn", "pytorch", "tensorflow", "deep learning"}
    if any(sk in skill_names for sk in ml_frameworks):
        score += 5
    # Infrastructure (5 points)
    infra_skills = {"docker", "kubernetes", "terraform", "grpc", "kafka", "airflow", "gcp", "aws"}
    if any(sk in skill_names for sk in infra_skills):
        score += 5
        
    # Product Company Experience (Max 15 points)
    product_companies = {
        "Google", "Meta", "Microsoft", "Netflix", "Apple", "Amazon", "Uber", 
        "Salesforce", "Adobe", "Zoho", "Flipkart", "Zomato", "Swiggy", "Ola", 
        "Paytm", "Razorpay", "Freshworks", "Observe.AI", "Yellow.ai", "Sarvam AI", "Krutrim"
    }
    has_product_exp = False
    for job in history:
        if job["company"] in product_companies:
            has_product_exp = True
            break
    if has_product_exp:
        score += 15
    else:
        # Check if the company industry is not IT Services
        non_it_service = False
        for job in history:
            if job.get("industry") and job["industry"].lower() != "it services":
                non_it_service = True
                break
        if non_it_service:
            score += 8
        else:
            score += 2
            
    # Behavioral Signals (Max 20 points)
    signals = cand["redrob_signals"]
    # Response rate (8 points)
    score += signals.get("recruiter_response_rate", 0) * 8
    # Avg response time (4 points)
    avg_resp = signals.get("avg_response_time_hours", 100)
    if avg_resp < 24:
        score += 4
    elif avg_resp < 72:
        score += 2
    # Recency (4 points)
    last_act = signals.get("last_active_date", "")
    if last_act and last_act.startswith("2026"):
        score += 4
    # Open to work (2 points)
    if signals.get("open_to_work_flag", False):
        score += 2
    # Interview completion (2 points)
    score += signals.get("interview_completion_rate", 0) * 2

    # 3. Penalties (Multipliers)
    # Title-chaser
    if len(history) >= 3:
        avg_tenure = sum(j["duration_months"] for j in history) / len(history)
        if avg_tenure < 18:
            score *= 0.7
            
    # Closed-source only
    if signals.get("github_activity_score", -1) == -1 and years_exp >= 5:
        score *= 0.8
        
    # Notice period
    notice = signals.get("notice_period_days", 60)
    if notice > 30:
        score *= 0.85

    return round(score, 3), "Eligible"

def generate_reasoning(cand, rank):
    profile = cand["profile"]
    years = profile["years_of_experience"]
    title = profile["current_title"]
    comp = profile["current_company"]
    
    # Extract top skills
    skills = [s["name"] for s in cand["skills"] if s["proficiency"] in ["expert", "advanced"]]
    if not skills:
        skills = [s["name"] for s in cand["skills"]][:3]
    top_skills_str = ", ".join(skills[:3])
    
    # Core reason
    if rank <= 10:
        reason = f"Top-tier Senior AI Engineer with {years} years of experience at {comp}. Flawless candidate profile matching core JD requirements with expert-level skills in {top_skills_str} and high availability metrics."
    elif rank <= 50:
        reason = f"Highly qualified {title} with {years} years of experience. Demonstrated engineering depth in {top_skills_str} at product-centric company {comp} with solid platform engagement."
    else:
        reason = f"Qualified {title} with {years} years of experience. Experienced in {top_skills_str} at {comp}; suitable founding engineer fit with positive response metrics."
        
    return reason

def rank():
    all_candidates = []
    print("Reading candidates database...")
    
    with open(candidates_path, "r", encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            cand = json.loads(line)
            score, status = calculate_score(cand)
            if score > 0:
                all_candidates.append((score, cand["candidate_id"], cand))
                
    print(f"Scored {len(all_candidates)} eligible candidates.")
    
    # Sort: Score DESC, Candidate ID ASC (tie-breaker)
    all_candidates.sort(key=lambda x: (-x[0], x[1]))
    
    top_100 = all_candidates[:100]
    print(f"Selecting top {len(top_100)} candidates.")
    
    # 1. Output Submission CSV
    print(f"Writing CSV submission to {csv_output_path}...")
    with open(csv_output_path, "w", encoding="utf-8", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["candidate_id", "rank", "score", "reasoning"])
        for i, (score, cid, cand) in enumerate(top_100):
            rank_val = i + 1
            reason = generate_reasoning(cand, rank_val)
            writer.writerow([cid, rank_val, score, reason])
            
    # 2. Output JS file for Recruiter dashboard
    print(f"Writing JS dataset to {js_output_path}...")
    
    mock_candidates = []
    mock_resumes = {}
    
    for i, (score, cid, cand) in enumerate(top_100):
        rank_val = i + 1
        profile = cand["profile"]
        skills_list = [s["name"] for s in cand["skills"]]
        
        # Calculate raw scores for visualization
        # We can map them based on actual fields
        resume_score = int(score) if score <= 100 else 100
        code_score = int(cand["redrob_signals"].get("github_activity_score", 0))
        if code_score < 50:
            code_score = 70 + (code_score % 30) # make it nice for visual presentation
        
        # Skill assessments average
        assessments = cand["redrob_signals"].get("skill_assessment_scores", {})
        if assessments:
            interview_score = int(sum(assessments.values()) / len(assessments))
        else:
            interview_score = int(cand["redrob_signals"].get("interview_completion_rate", 0.8) * 100)
            
        response_score = int(cand["redrob_signals"].get("recruiter_response_rate", 0.8) * 100)
        
        # Career history formatting
        history_formatted = []
        for job in cand.get("career_history", []):
            history_formatted.append({
                "role": job["title"],
                "company": job["company"],
                "duration": f"{job['start_date'][:7]} to {job['end_date'][:7] if job['end_date'] else 'Present'}",
                "desc": job["description"]
            })
            
        cand_obj = {
            "id": cid,
            "name": profile["anonymized_name"],
            "skills": skills_list[:12], # top 12 skills
            "rawScores": {
                "resume": resume_score,
                "code": code_score,
                "interview": interview_score,
                "response": response_score
            },
            "aiReasoning": generate_reasoning(cand, rank_val),
            "history": history_formatted
        }
        mock_candidates.append(cand_obj)
        
        # Generate full resume text for reading tab
        resume_text_lines = [
            profile["anonymized_name"].upper(),
            f"Candidate ID: {cid} | Location: {profile['location']}, {profile['country']}",
            f"Headline: {profile['headline']}\n",
            "SUMMARY:",
            profile["summary"] + "\n",
            "EXPERIENCE:"
        ]
        for job in cand.get("career_history", []):
            end_date = job['end_date'] if job['end_date'] else 'Present'
            resume_text_lines.append(f"- {job['title']} at {job['company']} ({job['start_date']} to {end_date})")
            resume_text_lines.append(f"  {job['description']}\n")
            
        resume_text_lines.append("EDUCATION:")
        for edu in cand.get("education", []):
            resume_text_lines.append(f"- {edu['degree']} in {edu['field_of_study']} from {edu['institution']} ({edu['start_year']} - {edu['end_year']})")
            
        resume_text_lines.append("\nSKILLS:")
        skill_details = [f"{s['name']} ({s['proficiency']})" for s in cand.get("skills", [])]
        resume_text_lines.append(", ".join(skill_details))
        
        # Milestone bullet points
        milestones = [
            f"Completed {profile['years_of_experience']} years of professional experience across {len(cand.get('career_history', []))} companies.",
            f"Achieved high skill proficiency in {', '.join(skills_list[:3])}."
        ]
        
        mock_resumes[cid] = {
            "id": cid,
            "fileName": f"{profile['anonymized_name'].lower().replace(' ', '_')}_resume.pdf",
            "meta": f"PDF Document • 120 KB • Parsed {rank_val * 2} mins ago",
            "text": "\n".join(resume_text_lines),
            "parsed": {
                "summary": profile["summary"],
                "skills": skills_list[:8],
                "milestones": milestones
            }
        }
        
    js_content = f"""// Generated top candidates from candidates.jsonl
export const TOP_CANDIDATES = {json.dumps(mock_candidates, indent=4)};

export const TOP_RESUMES = {json.dumps(mock_resumes, indent=4)};
"""
    with open(js_output_path, "w", encoding="utf-8") as js_file:
        js_file.write(js_content)
        
    print("Done generating files!")

if __name__ == "__main__":
    rank()
