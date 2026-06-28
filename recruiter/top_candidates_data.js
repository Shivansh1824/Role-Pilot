// Generated top candidates from candidates.jsonl
export const TOP_CANDIDATES = [
    {
        "id": "CAND_0002025",
        "name": "Ira Dalal",
        "skills": [
            "Diffusion Models",
            "FAISS",
            "TensorFlow",
            "scikit-learn",
            "OpenSearch",
            "Haystack",
            "Weaviate",
            "Sentence Transformers",
            "QLoRA",
            "NLP",
            "Pinecone",
            "Recommendation Systems"
        ],
        "rawScores": {
            "resume": 93,
            "code": 96,
            "interview": 81,
            "response": 80
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 5.9 years of experience at Apple. Flawless candidate profile matching core JD requirements with expert-level skills in FAISS, TensorFlow, scikit-learn and high availability metrics.",
        "history": [
            {
                "role": "Senior AI Engineer",
                "company": "Apple",
                "duration": "2022-12 to Present",
                "desc": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
            },
            {
                "role": "Lead AI Engineer",
                "company": "Aganitha",
                "duration": "2020-08 to 2022-12",
                "desc": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
            }
        ]
    },
    {
        "id": "CAND_0052682",
        "name": "Ira Mukherjee",
        "skills": [
            "Statistical Modeling",
            "QLoRA",
            "Semantic Search",
            "FAISS",
            "PyTorch",
            "gRPC",
            "LLMs",
            "Excel",
            "TTS",
            "Six Sigma",
            "Data Science",
            "Forecasting"
        ],
        "rawScores": {
            "resume": 92,
            "code": 72,
            "interview": 59,
            "response": 88
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 6.6 years of experience at Aganitha. Flawless candidate profile matching core JD requirements with expert-level skills in QLoRA, Semantic Search, FAISS and high availability metrics.",
        "history": [
            {
                "role": "NLP Engineer",
                "company": "Aganitha",
                "duration": "2022-08 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "NLP Engineer",
                "company": "Salesforce",
                "duration": "2019-10 to 2022-06",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            }
        ]
    },
    {
        "id": "CAND_0079387",
        "name": "Sneha Arora",
        "skills": [
            "scikit-learn",
            "Recommendation Systems",
            "Python",
            "Time Series",
            "Sentence Transformers",
            "JavaScript",
            "Illustrator",
            "Vector Search",
            "Next.js",
            "OpenSearch",
            "YOLO",
            "Reinforcement Learning"
        ],
        "rawScores": {
            "resume": 91,
            "code": 64,
            "interview": 69,
            "response": 81
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 6.9 years of experience at Microsoft. Flawless candidate profile matching core JD requirements with expert-level skills in scikit-learn, Recommendation Systems, Python and high availability metrics.",
        "history": [
            {
                "role": "AI Engineer",
                "company": "Microsoft",
                "duration": "2024-08 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "NLP Engineer",
                "company": "upGrad",
                "duration": "2022-10 to 2024-08",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Ola",
                "duration": "2021-03 to 2022-09",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "AI Engineer",
                "company": "BYJU'S",
                "duration": "2019-09 to 2021-03",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            }
        ]
    },
    {
        "id": "CAND_0027691",
        "name": "Ayaan Goyal",
        "skills": [
            "SAP",
            "LoRA",
            "PEFT",
            "Recommendation Systems",
            "Statistical Modeling",
            "Weaviate",
            "scikit-learn",
            "Marketing",
            "Embeddings",
            "Learning to Rank",
            "TTS",
            "QLoRA"
        ],
        "rawScores": {
            "resume": 89,
            "code": 58,
            "interview": 69,
            "response": 68
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 6.5 years of experience at Haptik. Flawless candidate profile matching core JD requirements with expert-level skills in LoRA, PEFT, Recommendation Systems and high availability metrics.",
        "history": [
            {
                "role": "NLP Engineer",
                "company": "Haptik",
                "duration": "2024-03 to Present",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Vedantu",
                "duration": "2021-06 to 2024-03",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "AI Engineer",
                "company": "Meta",
                "duration": "2020-02 to 2021-06",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0011687",
        "name": "Shreya Tiwari",
        "skills": [
            "TensorFlow",
            "OpenSearch",
            "FAISS",
            "PEFT",
            "Feature Engineering",
            "Embeddings",
            "LangChain",
            "MLOps",
            "Weaviate",
            "PyTorch",
            "Image Classification",
            "Semantic Search"
        ],
        "rawScores": {
            "resume": 88,
            "code": 76,
            "interview": 78,
            "response": 89
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 7.8 years of experience at Niramai. Flawless candidate profile matching core JD requirements with expert-level skills in TensorFlow, OpenSearch, FAISS and high availability metrics.",
        "history": [
            {
                "role": "Senior NLP Engineer",
                "company": "Niramai",
                "duration": "2022-02 to Present",
                "desc": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
            },
            {
                "role": "Senior Machine Learning Engineer",
                "company": "Krutrim",
                "duration": "2018-11 to 2022-02",
                "desc": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
            }
        ]
    },
    {
        "id": "CAND_0008239",
        "name": "Advik Iyer",
        "skills": [
            "Milvus",
            "Computer Vision",
            "Feature Engineering",
            "Semantic Search",
            "Diffusion Models",
            "Elasticsearch",
            "LangChain",
            "Weaviate",
            "Forecasting",
            "Recommendation Systems",
            "Vector Search",
            "MLflow"
        ],
        "rawScores": {
            "resume": 86,
            "code": 56,
            "interview": 55,
            "response": 73
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 4.0 years of experience at Apple. Flawless candidate profile matching core JD requirements with expert-level skills in Milvus, Semantic Search, Diffusion Models and high availability metrics.",
        "history": [
            {
                "role": "AI Engineer",
                "company": "Apple",
                "duration": "2022-06 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0046064",
        "name": "Saanvi Naidu",
        "skills": [
            "Python",
            "Image Classification",
            "OpenCV",
            "Pinecone",
            "Haystack",
            "Six Sigma",
            "TTS",
            "Diffusion Models",
            "BM25",
            "YOLO",
            "OpenSearch",
            "PEFT"
        ],
        "rawScores": {
            "resume": 86,
            "code": 67,
            "interview": 64,
            "response": 78
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 8.9 years of experience at Salesforce. Flawless candidate profile matching core JD requirements with expert-level skills in Python, Image Classification, OpenCV and high availability metrics.",
        "history": [
            {
                "role": "Senior NLP Engineer",
                "company": "Salesforce",
                "duration": "2023-06 to Present",
                "desc": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
            },
            {
                "role": "Lead AI Engineer",
                "company": "Verloop.io",
                "duration": "2020-06 to 2023-04",
                "desc": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
            },
            {
                "role": "Senior ML Engineer \u2014 Search & Ranking",
                "company": "Amazon",
                "duration": "2017-07 to 2020-06",
                "desc": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
            }
        ]
    },
    {
        "id": "CAND_0079284",
        "name": "Ishaan Dutta",
        "skills": [
            "Recommendation Systems",
            "scikit-learn",
            "QLoRA",
            "LlamaIndex",
            "Illustrator",
            "Project Management",
            "Qdrant",
            "ASR",
            "Terraform",
            "Feature Engineering",
            "Weights & Biases",
            "Fine-tuning LLMs"
        ],
        "rawScores": {
            "resume": 86,
            "code": 99,
            "interview": 70,
            "response": 79
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 4.9 years of experience at Google. Flawless candidate profile matching core JD requirements with expert-level skills in Recommendation Systems, scikit-learn, QLoRA and high availability metrics.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "Google",
                "duration": "2023-06 to Present",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Swiggy",
                "duration": "2021-07 to 2023-05",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0030031",
        "name": "Anil Joshi",
        "skills": [
            "Information Retrieval",
            "PyTorch",
            "Object Detection",
            "Python",
            "NLP",
            "RAG",
            "OpenCV",
            "LoRA",
            "QLoRA",
            "BM25",
            "Time Series",
            "Sentence Transformers"
        ],
        "rawScores": {
            "resume": 86,
            "code": 72,
            "interview": 67,
            "response": 94
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 5.7 years of experience at Microsoft. Flawless candidate profile matching core JD requirements with expert-level skills in Information Retrieval, PyTorch, Object Detection and high availability metrics.",
        "history": [
            {
                "role": "AI Engineer",
                "company": "Microsoft",
                "duration": "2025-05 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "Senior Data Scientist",
                "company": "Amazon",
                "duration": "2023-02 to 2025-04",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Search Engineer",
                "company": "Google",
                "duration": "2020-11 to 2023-02",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            }
        ]
    },
    {
        "id": "CAND_0081846",
        "name": "Arjun Khanna",
        "skills": [
            "Data Science",
            "Information Retrieval",
            "LlamaIndex",
            "pgvector",
            "Forecasting",
            "Learning to Rank",
            "Elasticsearch",
            "PyTorch",
            "Vector Search",
            "scikit-learn",
            "Deep Learning",
            "Recommendation Systems"
        ],
        "rawScores": {
            "resume": 85,
            "code": 73,
            "interview": 65,
            "response": 73
        },
        "aiReasoning": "Top-tier Senior AI Engineer with 6.7 years of experience at Razorpay. Flawless candidate profile matching core JD requirements with expert-level skills in Data Science, Information Retrieval, LlamaIndex and high availability metrics.",
        "history": [
            {
                "role": "Lead AI Engineer",
                "company": "Razorpay",
                "duration": "2024-03 to Present",
                "desc": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
            },
            {
                "role": "Senior Machine Learning Engineer",
                "company": "Paytm",
                "duration": "2019-11 to 2024-03",
                "desc": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
            }
        ]
    },
    {
        "id": "CAND_0062247",
        "name": "Saanvi Trivedi",
        "skills": [
            "Image Classification",
            "OpenCV",
            "Reinforcement Learning",
            "ASR",
            "Pinecone",
            "Vector Search",
            "Qdrant",
            "RAG",
            "Computer Vision",
            "PEFT",
            "Speech Recognition",
            "Illustrator"
        ],
        "rawScores": {
            "resume": 83,
            "code": 52,
            "interview": 84,
            "response": 78
        },
        "aiReasoning": "Highly qualified AI Engineer with 7.3 years of experience. Demonstrated engineering depth in Image Classification, Pinecone, Vector Search at product-centric company Google with solid platform engagement.",
        "history": [
            {
                "role": "AI Engineer",
                "company": "Google",
                "duration": "2023-05 to Present",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "NLP Engineer",
                "company": "Dream11",
                "duration": "2019-04 to 2023-05",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0068811",
        "name": "Krishna Mittal",
        "skills": [
            "Data Science",
            "Vector Search",
            "Speech Recognition",
            "TTS",
            "Kubeflow",
            "Qdrant",
            "scikit-learn",
            "TensorFlow",
            "Embeddings",
            "pgvector",
            "Pinecone",
            "Time Series"
        ],
        "rawScores": {
            "resume": 83,
            "code": 93,
            "interview": 52,
            "response": 42
        },
        "aiReasoning": "Highly qualified Applied ML Engineer with 8.0 years of experience. Demonstrated engineering depth in Vector Search, Speech Recognition, TTS at product-centric company Freshworks with solid platform engagement.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Freshworks",
                "duration": "2024-11 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "AI Engineer",
                "company": "Yellow.ai",
                "duration": "2022-09 to 2024-10",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Recommendation Systems Engineer",
                "company": "Meesho",
                "duration": "2020-08 to 2022-09",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Search Engineer",
                "company": "Salesforce",
                "duration": "2018-05 to 2020-06",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            }
        ]
    },
    {
        "id": "CAND_0015528",
        "name": "Aisha Reddy",
        "skills": [
            "Docker",
            "Weaviate",
            "BentoML",
            "Weights & Biases",
            "LangChain",
            "pgvector",
            "TensorFlow",
            "Feature Engineering",
            "ASR",
            "Information Retrieval",
            "Time Series",
            "OpenSearch"
        ],
        "rawScores": {
            "resume": 82,
            "code": 50,
            "interview": 65,
            "response": 53
        },
        "aiReasoning": "Highly qualified Applied ML Engineer with 7.4 years of experience. Demonstrated engineering depth in Weaviate, BentoML, Weights & Biases at product-centric company Krutrim with solid platform engagement.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Krutrim",
                "duration": "2022-02 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "Senior Data Scientist",
                "company": "Locobuzz",
                "duration": "2020-06 to 2022-02",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Senior Data Scientist",
                "company": "Rephrase.ai",
                "duration": "2019-04 to 2020-06",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0009024",
        "name": "Avni Sharma",
        "skills": [
            "YOLO",
            "Qdrant",
            "dbt",
            "CSS",
            "PEFT",
            "FAISS",
            "Machine Learning",
            "Airflow",
            "PyTorch",
            "TTS",
            "MLOps",
            "LlamaIndex"
        ],
        "rawScores": {
            "resume": 81,
            "code": 72,
            "interview": 79,
            "response": 46
        },
        "aiReasoning": "Highly qualified Search Engineer with 5.2 years of experience. Demonstrated engineering depth in YOLO, Qdrant, PEFT at product-centric company Google with solid platform engagement.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "Google",
                "duration": "2023-09 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Aganitha",
                "duration": "2021-05 to 2023-09",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0032216",
        "name": "Rahul Shetty",
        "skills": [
            "OpenCV",
            "Time Series",
            "Object Detection",
            "Learning to Rank",
            "Information Retrieval",
            "PyTorch",
            "Qdrant",
            "Sentence Transformers",
            "QLoRA",
            "Hugging Face Transformers",
            "Docker",
            "CNN"
        ],
        "rawScores": {
            "resume": 81,
            "code": 84,
            "interview": 70,
            "response": 35
        },
        "aiReasoning": "Highly qualified ML Engineer with 6.1 years of experience. Demonstrated engineering depth in Time Series, Learning to Rank, Information Retrieval at product-centric company upGrad with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "upGrad",
                "duration": "2025-05 to Present",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            },
            {
                "role": "Junior ML Engineer",
                "company": "Zoho",
                "duration": "2022-10 to 2025-05",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            },
            {
                "role": "AI Research Engineer",
                "company": "Vedantu",
                "duration": "2020-06 to 2022-10",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            }
        ]
    },
    {
        "id": "CAND_0066690",
        "name": "Advik Sen",
        "skills": [
            "Hugging Face Transformers",
            "Sentence Transformers",
            "Angular",
            "pgvector",
            "Data Science",
            "Semantic Search",
            "Object Detection",
            "Webpack",
            "PEFT",
            "Speech Recognition",
            "Elasticsearch",
            "TTS"
        ],
        "rawScores": {
            "resume": 81,
            "code": 78,
            "interview": 66,
            "response": 88
        },
        "aiReasoning": "Highly qualified ML Engineer with 4.8 years of experience. Demonstrated engineering depth in Hugging Face Transformers, Object Detection, Speech Recognition at product-centric company Freshworks with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Freshworks",
                "duration": "2023-09 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "Data Scientist",
                "company": "Genpact AI",
                "duration": "2021-09 to 2023-09",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0038368",
        "name": "Suresh Reddy",
        "skills": [
            "OpenCV",
            "Image Classification",
            "YOLO",
            "Embeddings",
            "FAISS",
            "LangChain",
            "BM25",
            "Django",
            "Vue.js",
            "QLoRA",
            "AWS",
            "Time Series"
        ],
        "rawScores": {
            "resume": 81,
            "code": 73,
            "interview": 76,
            "response": 68
        },
        "aiReasoning": "Highly qualified ML Engineer with 5.4 years of experience. Demonstrated engineering depth in YOLO, Embeddings, BM25 at product-centric company PhonePe with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "PhonePe",
                "duration": "2023-12 to Present",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            },
            {
                "role": "Junior ML Engineer",
                "company": "Zomato",
                "duration": "2021-02 to 2023-12",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            }
        ]
    },
    {
        "id": "CAND_0070808",
        "name": "Vihaan Shah",
        "skills": [
            "Reinforcement Learning",
            "OpenCV",
            "Fine-tuning LLMs",
            "Feature Engineering",
            "Photoshop",
            "Speech Recognition",
            "Terraform",
            "OpenSearch",
            "Deep Learning",
            "PostgreSQL",
            "pgvector",
            "LLMs"
        ],
        "rawScores": {
            "resume": 80,
            "code": 86,
            "interview": 74,
            "response": 31
        },
        "aiReasoning": "Highly qualified Junior ML Engineer with 6.8 years of experience. Demonstrated engineering depth in OpenCV, Speech Recognition, OpenSearch at product-centric company HCL with solid platform engagement.",
        "history": [
            {
                "role": "Junior ML Engineer",
                "company": "HCL",
                "duration": "2023-06 to Present",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            },
            {
                "role": "Junior ML Engineer",
                "company": "Krutrim",
                "duration": "2020-03 to 2023-06",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "Senior Software Engineer (ML)",
                "company": "Rephrase.ai",
                "duration": "2019-09 to 2020-03",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            }
        ]
    },
    {
        "id": "CAND_0040887",
        "name": "Meera Kumar",
        "skills": [
            "Reinforcement Learning",
            "Computer Vision",
            "SEO",
            "FAISS",
            "MLflow",
            "LoRA",
            "LangChain",
            "Python",
            "PEFT",
            "Milvus",
            "Deep Learning",
            "Recommendation Systems"
        ],
        "rawScores": {
            "resume": 80,
            "code": 74,
            "interview": 70,
            "response": 84
        },
        "aiReasoning": "Highly qualified Machine Learning Engineer with 4.7 years of experience. Demonstrated engineering depth in Reinforcement Learning, Computer Vision, FAISS at product-centric company Netflix with solid platform engagement.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "Netflix",
                "duration": "2022-08 to Present",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "AI Engineer",
                "company": "Unacademy",
                "duration": "2021-10 to 2022-07",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            }
        ]
    },
    {
        "id": "CAND_0080766",
        "name": "Kiara Mittal",
        "skills": [
            "Search Backend",
            "LoRA",
            "Vue.js",
            "Tally",
            "Search & Discovery",
            "MLOps",
            "Search Infrastructure",
            "MLflow",
            "Open-source ML libraries",
            "Information Retrieval Systems",
            "Elasticsearch",
            "Computer Vision"
        ],
        "rawScores": {
            "resume": 80,
            "code": 72,
            "interview": 84,
            "response": 66
        },
        "aiReasoning": "Highly qualified Staff Machine Learning Engineer with 8.8 years of experience. Demonstrated engineering depth in Search Backend, LoRA, Search & Discovery at product-centric company Salesforce with solid platform engagement.",
        "history": [
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Salesforce",
                "duration": "2023-04 to Present",
                "desc": "Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer \u2014 feature monitoring, drift detection, retraining cadence \u2014 rather than the modeling itself. Worked closely with the product and growth teams."
            },
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Aganitha",
                "duration": "2022-04 to 2023-04",
                "desc": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side \u2014 building offline metrics that actually correlated with online engagement, which turned out to be the hardest part."
            },
            {
                "role": "Lead AI Engineer",
                "company": "Swiggy",
                "duration": "2018-09 to 2022-03",
                "desc": "Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling \u2014 it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months."
            },
            {
                "role": "Senior Machine Learning Engineer",
                "company": "Haptik",
                "duration": "2017-08 to 2018-08",
                "desc": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
            }
        ]
    },
    {
        "id": "CAND_0072091",
        "name": "Riya Arora",
        "skills": [
            "Deep Learning",
            "NLP",
            "BM25",
            "Information Retrieval",
            "Fine-tuning LLMs",
            "LlamaIndex",
            "Docker",
            "Elasticsearch",
            "Kubeflow",
            "Object Detection",
            "ASR",
            "LangChain"
        ],
        "rawScores": {
            "resume": 79,
            "code": 99,
            "interview": 62,
            "response": 60
        },
        "aiReasoning": "Highly qualified ML Engineer with 4.6 years of experience. Demonstrated engineering depth in Fine-tuning LLMs, LlamaIndex, Kubeflow at product-centric company Krutrim with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Krutrim",
                "duration": "2023-08 to Present",
                "desc": "Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer."
            },
            {
                "role": "AI Research Engineer",
                "company": "Meesho",
                "duration": "2021-12 to 2023-08",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0037566",
        "name": "Ritu Nair",
        "skills": [
            "Pinecone",
            "Time Series",
            "LlamaIndex",
            "NLP",
            "LoRA",
            "QLoRA",
            "BM25",
            "Feature Engineering",
            "Forecasting",
            "MLflow",
            "Spring Boot",
            "TensorFlow"
        ],
        "rawScores": {
            "resume": 79,
            "code": 73,
            "interview": 82,
            "response": 50
        },
        "aiReasoning": "Highly qualified Machine Learning Engineer with 6.9 years of experience. Demonstrated engineering depth in Pinecone, Time Series, LlamaIndex at product-centric company LinkedIn with solid platform engagement.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "LinkedIn",
                "duration": "2022-03 to Present",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Paytm",
                "duration": "2019-08 to 2022-02",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            }
        ]
    },
    {
        "id": "CAND_0018499",
        "name": "Aarav Trivedi",
        "skills": [
            "Deep Learning",
            "Weaviate",
            "Recommendation Systems",
            "scikit-learn",
            "Diffusion Models",
            "Pinecone",
            "Information Retrieval",
            "Milvus",
            "QLoRA",
            "RAG",
            "Embeddings",
            "Learning to Rank"
        ],
        "rawScores": {
            "resume": 79,
            "code": 94,
            "interview": 83,
            "response": 61
        },
        "aiReasoning": "Highly qualified Senior Machine Learning Engineer with 7.2 years of experience. Demonstrated engineering depth in Deep Learning, Weaviate, Recommendation Systems at product-centric company Zomato with solid platform engagement.",
        "history": [
            {
                "role": "Senior Machine Learning Engineer",
                "company": "Zomato",
                "duration": "2024-04 to Present",
                "desc": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
            },
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Google",
                "duration": "2022-10 to 2024-04",
                "desc": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
            },
            {
                "role": "Senior Machine Learning Engineer",
                "company": "Flipkart",
                "duration": "2019-04 to 2022-10",
                "desc": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
            }
        ]
    },
    {
        "id": "CAND_0058688",
        "name": "Anjali Kapoor",
        "skills": [
            "OpenCV",
            "CNN",
            "scikit-learn",
            "Object Detection",
            "LlamaIndex",
            "Computer Vision",
            "Embeddings",
            "Snowflake",
            "TensorFlow",
            "Diffusion Models",
            "Information Retrieval",
            "Milvus"
        ],
        "rawScores": {
            "resume": 78,
            "code": 79,
            "interview": 66,
            "response": 74
        },
        "aiReasoning": "Highly qualified AI Engineer with 6.7 years of experience. Demonstrated engineering depth in scikit-learn, Object Detection, LlamaIndex at product-centric company Vedantu with solid platform engagement.",
        "history": [
            {
                "role": "AI Engineer",
                "company": "Vedantu",
                "duration": "2023-05 to Present",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Recommendation Systems Engineer",
                "company": "Apple",
                "duration": "2019-10 to 2023-05",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0016432",
        "name": "Advaith Joshi",
        "skills": [
            "Time Series",
            "Kubeflow",
            "Machine Learning",
            "NLP",
            "LoRA",
            "Object Detection",
            "Hugging Face Transformers",
            "OpenCV",
            "Computer Vision",
            "Data Science",
            "Airflow",
            "Qdrant"
        ],
        "rawScores": {
            "resume": 78,
            "code": 72,
            "interview": 60,
            "response": 60
        },
        "aiReasoning": "Highly qualified AI Research Engineer with 4.6 years of experience. Demonstrated engineering depth in Time Series, Machine Learning, NLP at product-centric company Meesho with solid platform engagement.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "Meesho",
                "duration": "2024-05 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "Junior ML Engineer",
                "company": "Freshworks",
                "duration": "2021-12 to 2024-04",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            }
        ]
    },
    {
        "id": "CAND_0052328",
        "name": "Vikram Banerjee",
        "skills": [
            "Object Detection",
            "LoRA",
            "OpenSearch",
            "Reinforcement Learning",
            "QLoRA",
            "Image Classification",
            "Recommendation Systems",
            "ASR",
            "Computer Vision",
            "Learning to Rank",
            "Fine-tuning LLMs",
            "scikit-learn"
        ],
        "rawScores": {
            "resume": 78,
            "code": 77,
            "interview": 75,
            "response": 79
        },
        "aiReasoning": "Highly qualified Recommendation Systems Engineer with 6.5 years of experience. Demonstrated engineering depth in LoRA, OpenSearch, QLoRA at product-centric company Amazon with solid platform engagement.",
        "history": [
            {
                "role": "Recommendation Systems Engineer",
                "company": "Amazon",
                "duration": "2022-02 to Present",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Senior Data Scientist",
                "company": "Observe.AI",
                "duration": "2019-12 to 2022-01",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            }
        ]
    },
    {
        "id": "CAND_0003841",
        "name": "Anjali Krishnan",
        "skills": [
            "Airflow",
            "Spring Boot",
            "Diffusion Models",
            "Statistical Modeling",
            "Pinecone",
            "Object Detection",
            "ASR",
            "Weights & Biases",
            "Fine-tuning LLMs",
            "Reinforcement Learning",
            "Recommendation Systems",
            "Sentence Transformers"
        ],
        "rawScores": {
            "resume": 78,
            "code": 96,
            "interview": 76,
            "response": 71
        },
        "aiReasoning": "Highly qualified ML Engineer with 5.0 years of experience. Demonstrated engineering depth in Pinecone, Object Detection, Weights & Biases at product-centric company Tech Mahindra with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Tech Mahindra",
                "duration": "2022-11 to Present",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            },
            {
                "role": "Computer Vision Engineer",
                "company": "InMobi",
                "duration": "2021-07 to 2022-11",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0049538",
        "name": "Sanjay Bose",
        "skills": [
            "LlamaIndex",
            "Feature Engineering",
            "MLflow",
            "Computer Vision",
            "TTS",
            "Learning to Rank",
            "OpenSearch",
            "Vector Search",
            "Milvus",
            "QLoRA",
            "Embeddings",
            "CNN"
        ],
        "rawScores": {
            "resume": 78,
            "code": 90,
            "interview": 70,
            "response": 72
        },
        "aiReasoning": "Highly qualified Applied ML Engineer with 5.8 years of experience. Demonstrated engineering depth in LlamaIndex, Feature Engineering, MLflow at product-centric company Saarthi.ai with solid platform engagement.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Saarthi.ai",
                "duration": "2023-02 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Recommendation Systems Engineer",
                "company": "PolicyBazaar",
                "duration": "2021-07 to 2023-02",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "AI Engineer",
                "company": "Zoho",
                "duration": "2020-08 to 2021-05",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            }
        ]
    },
    {
        "id": "CAND_0008425",
        "name": "Myra Krishnan",
        "skills": [
            "Learning to Rank",
            "Qdrant",
            "Weights & Biases",
            "pgvector",
            "Sentence Transformers",
            "NLP",
            "Haystack",
            "TensorFlow",
            "Python",
            "Prompt Engineering",
            "Image Classification",
            "Object Detection"
        ],
        "rawScores": {
            "resume": 78,
            "code": 53,
            "interview": 77,
            "response": 66
        },
        "aiReasoning": "Highly qualified Senior NLP Engineer with 7.8 years of experience. Demonstrated engineering depth in Learning to Rank, Qdrant, Weights & Biases at product-centric company Ola with solid platform engagement.",
        "history": [
            {
                "role": "Senior NLP Engineer",
                "company": "Ola",
                "duration": "2024-05 to Present",
                "desc": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
            },
            {
                "role": "Senior ML Engineer \u2014 Search & Ranking",
                "company": "Zomato",
                "duration": "2020-05 to 2024-03",
                "desc": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
            },
            {
                "role": "Lead AI Engineer",
                "company": "Amazon",
                "duration": "2018-08 to 2020-05",
                "desc": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
            }
        ]
    },
    {
        "id": "CAND_0013665",
        "name": "Nisha Joshi",
        "skills": [
            "Image Classification",
            "FastAPI",
            "Learning to Rank",
            "ASR",
            "Terraform",
            "MLOps",
            "Weights & Biases",
            "Django",
            "Machine Learning",
            "Qdrant",
            "QLoRA",
            "Embeddings"
        ],
        "rawScores": {
            "resume": 77,
            "code": 88,
            "interview": 65,
            "response": 73
        },
        "aiReasoning": "Highly qualified Senior Software Engineer (ML) with 5.2 years of experience. Demonstrated engineering depth in Image Classification, ASR, MLOps at product-centric company InMobi with solid platform engagement.",
        "history": [
            {
                "role": "Senior Software Engineer (ML)",
                "company": "InMobi",
                "duration": "2024-09 to Present",
                "desc": "Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer."
            },
            {
                "role": "AI Research Engineer",
                "company": "Ola",
                "duration": "2021-05 to 2024-09",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0088025",
        "name": "Amit Arora",
        "skills": [
            "Pinecone",
            "QLoRA",
            "LLMs",
            "Hugging Face Transformers",
            "RAG",
            "SAP",
            "TensorFlow",
            "LoRA",
            "Flask",
            "Prompt Engineering",
            "BM25",
            "Elasticsearch"
        ],
        "rawScores": {
            "resume": 77,
            "code": 74,
            "interview": 90,
            "response": 83
        },
        "aiReasoning": "Highly qualified Staff Machine Learning Engineer with 8.6 years of experience. Demonstrated engineering depth in Pinecone, QLoRA, LLMs at product-centric company Yellow.ai with solid platform engagement.",
        "history": [
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Yellow.ai",
                "duration": "2022-09 to Present",
                "desc": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
            },
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Niramai",
                "duration": "2019-02 to 2022-09",
                "desc": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
            },
            {
                "role": "Senior Machine Learning Engineer",
                "company": "Genpact AI",
                "duration": "2017-12 to 2019-01",
                "desc": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
            }
        ]
    },
    {
        "id": "CAND_0061655",
        "name": "Mira Banerjee",
        "skills": [
            "Haystack",
            "PEFT",
            "Pinecone",
            "Time Series",
            "Machine Learning",
            "PyTorch",
            "Flask",
            "Qdrant",
            "Kubeflow",
            "LangChain",
            "Deep Learning",
            "NLP"
        ],
        "rawScores": {
            "resume": 77,
            "code": 56,
            "interview": 85,
            "response": 88
        },
        "aiReasoning": "Highly qualified Machine Learning Engineer with 4.6 years of experience. Demonstrated engineering depth in Haystack, PEFT, Pinecone at product-centric company Krutrim with solid platform engagement.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "Krutrim",
                "duration": "2022-11 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Recommendation Systems Engineer",
                "company": "Google",
                "duration": "2021-12 to 2022-11",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0083307",
        "name": "Neha Patel",
        "skills": [
            "OpenCV",
            "scikit-learn",
            "Embeddings",
            "Image Classification",
            "Weights & Biases",
            "QLoRA",
            "PEFT",
            "Pinecone",
            "GCP",
            "Weaviate",
            "Semantic Search",
            "Python"
        ],
        "rawScores": {
            "resume": 77,
            "code": 69,
            "interview": 83,
            "response": 70
        },
        "aiReasoning": "Highly qualified Search Engineer with 7.8 years of experience. Demonstrated engineering depth in OpenCV, scikit-learn, Embeddings at product-centric company CRED with solid platform engagement.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "CRED",
                "duration": "2024-10 to Present",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Netflix",
                "duration": "2020-07 to 2024-10",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Ola",
                "duration": "2019-05 to 2020-07",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "NLP Engineer",
                "company": "Saarthi.ai",
                "duration": "2018-10 to 2019-05",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0020708",
        "name": "Kiara Patel",
        "skills": [
            "Tally",
            "NLP",
            "Data Science",
            "Statistical Modeling",
            "scikit-learn",
            "Kubeflow",
            "Learning to Rank",
            "Python",
            "Elasticsearch",
            "OpenCV",
            "LangChain",
            "LLMs"
        ],
        "rawScores": {
            "resume": 77,
            "code": 84,
            "interview": 64,
            "response": 84
        },
        "aiReasoning": "Highly qualified Search Engineer with 4.2 years of experience. Demonstrated engineering depth in NLP, Data Science, scikit-learn at product-centric company PolicyBazaar with solid platform engagement.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "PolicyBazaar",
                "duration": "2022-04 to Present",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            }
        ]
    },
    {
        "id": "CAND_0069905",
        "name": "Nisha Bansal",
        "skills": [
            "Flask",
            "Redux",
            "LoRA",
            "Computer Vision",
            "Speech Recognition",
            "Image Classification",
            "Recommendation Systems",
            "Sentence Transformers",
            "LangChain",
            "TensorFlow",
            "Hugging Face Transformers",
            "MLOps"
        ],
        "rawScores": {
            "resume": 77,
            "code": 84,
            "interview": 71,
            "response": 78
        },
        "aiReasoning": "Highly qualified Applied ML Engineer with 6.6 years of experience. Demonstrated engineering depth in LoRA, Speech Recognition, Image Classification at product-centric company Sarvam AI with solid platform engagement.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Sarvam AI",
                "duration": "2024-04 to Present",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Nykaa",
                "duration": "2023-02 to 2024-03",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Recommendation Systems Engineer",
                "company": "Observe.AI",
                "duration": "2019-11 to 2023-02",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            }
        ]
    },
    {
        "id": "CAND_0064888",
        "name": "Riya Kumar",
        "skills": [
            "GraphQL",
            "Embeddings",
            "Learning to Rank",
            "TensorFlow",
            "CNN",
            "Time Series",
            "pgvector",
            "Elasticsearch",
            "Agile",
            "Fine-tuning LLMs",
            "Speech Recognition",
            "Machine Learning"
        ],
        "rawScores": {
            "resume": 77,
            "code": 87,
            "interview": 79,
            "response": 92
        },
        "aiReasoning": "Highly qualified ML Engineer with 5.8 years of experience. Demonstrated engineering depth in TensorFlow, CNN, Time Series at product-centric company Verloop.io with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Verloop.io",
                "duration": "2023-08 to Present",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            },
            {
                "role": "AI Research Engineer",
                "company": "Wipro",
                "duration": "2021-11 to 2023-06",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            },
            {
                "role": "Senior Software Engineer (ML)",
                "company": "Nykaa",
                "duration": "2020-08 to 2021-11",
                "desc": "Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer."
            }
        ]
    },
    {
        "id": "CAND_0094759",
        "name": "Aditya Pillai",
        "skills": [
            "Prompt Engineering",
            "scikit-learn",
            "Hugging Face Transformers",
            "Learning to Rank",
            "Semantic Search",
            "Qdrant",
            "Fine-tuning LLMs",
            "Agile",
            "Vector Search",
            "TTS",
            "NLP",
            "Object Detection"
        ],
        "rawScores": {
            "resume": 76,
            "code": 76,
            "interview": 72,
            "response": 11
        },
        "aiReasoning": "Highly qualified Lead AI Engineer with 8.6 years of experience. Demonstrated engineering depth in Prompt Engineering, scikit-learn, Hugging Face Transformers at product-centric company Meta with solid platform engagement.",
        "history": [
            {
                "role": "Lead AI Engineer",
                "company": "Meta",
                "duration": "2023-10 to Present",
                "desc": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
            },
            {
                "role": "Senior NLP Engineer",
                "company": "Apple",
                "duration": "2021-06 to 2023-09",
                "desc": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
            },
            {
                "role": "Senior Applied Scientist",
                "company": "Locobuzz",
                "duration": "2018-01 to 2021-06",
                "desc": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
            }
        ]
    },
    {
        "id": "CAND_0020721",
        "name": "Rajesh Nair",
        "skills": [
            "Speech Recognition",
            "Embeddings",
            "Rust",
            "Content Writing",
            "gRPC",
            "GANs",
            "PEFT",
            "YOLO",
            "FAISS",
            "Redis",
            "PowerPoint",
            "Weights & Biases"
        ],
        "rawScores": {
            "resume": 76,
            "code": 71,
            "interview": 44,
            "response": 78
        },
        "aiReasoning": "Highly qualified Data Engineer with 6.9 years of experience. Demonstrated engineering depth in Speech Recognition, GANs, PEFT at product-centric company Capgemini with solid platform engagement.",
        "history": [
            {
                "role": "Data Engineer",
                "company": "Capgemini",
                "duration": "2022-02 to Present",
                "desc": "Backend development with Python (FastAPI), PostgreSQL, and Redis at a B2B SaaS product. Owned the analytics-and-reporting service which serves dashboards to ~3K paying customers. Recent work includes integrating a model-serving service (built by another team) into our API layer; my work was the integration and observability, not the model itself. Strong on API design, database performance, and reliability engineering."
            },
            {
                "role": "Senior Data Engineer",
                "company": "Freshworks",
                "duration": "2019-09 to 2022-02",
                "desc": "Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests."
            }
        ]
    },
    {
        "id": "CAND_0008295",
        "name": "Om Mehta",
        "skills": [
            "BM25",
            "Kubernetes",
            "Python",
            "PEFT",
            "Computer Vision",
            "MLflow",
            "Weaviate",
            "TTS",
            "Diffusion Models",
            "Prompt Engineering",
            "BentoML",
            "QLoRA"
        ],
        "rawScores": {
            "resume": 76,
            "code": 50,
            "interview": 59,
            "response": 89
        },
        "aiReasoning": "Highly qualified AI Research Engineer with 6.5 years of experience. Demonstrated engineering depth in BM25, Python, TTS at product-centric company Razorpay with solid platform engagement.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "Razorpay",
                "duration": "2022-04 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "Senior Software Engineer (ML)",
                "company": "TCS",
                "duration": "2020-01 to 2022-04",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0051292",
        "name": "Shreya Chatterjee",
        "skills": [
            "Vue.js",
            "pgvector",
            "FAISS",
            "BentoML",
            "LLMs",
            "Time Series",
            "Vector Search",
            "PEFT",
            "TTS",
            "Fine-tuning LLMs",
            "JavaScript",
            "NLP"
        ],
        "rawScores": {
            "resume": 76,
            "code": 61,
            "interview": 56,
            "response": 52
        },
        "aiReasoning": "Highly qualified Applied ML Engineer with 5.2 years of experience. Demonstrated engineering depth in pgvector, FAISS, BentoML at product-centric company Freshworks with solid platform engagement.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Freshworks",
                "duration": "2025-02 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Search Engineer",
                "company": "Vedantu",
                "duration": "2022-10 to 2025-01",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "Search Engineer",
                "company": "Vedantu",
                "duration": "2021-06 to 2022-10",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            }
        ]
    },
    {
        "id": "CAND_0088335",
        "name": "Shreya Sharma",
        "skills": [
            "Hugging Face Transformers",
            "Flask",
            "Data Science",
            "Machine Learning",
            "Reinforcement Learning",
            "BentoML",
            "Time Series",
            "TTS",
            "Feature Engineering",
            "Forecasting",
            "Weaviate",
            "PEFT"
        ],
        "rawScores": {
            "resume": 76,
            "code": 64,
            "interview": 65,
            "response": 35
        },
        "aiReasoning": "Highly qualified AI Research Engineer with 6.4 years of experience. Demonstrated engineering depth in Data Science, Machine Learning, Reinforcement Learning at product-centric company Tech Mahindra with solid platform engagement.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "Tech Mahindra",
                "duration": "2024-02 to Present",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            },
            {
                "role": "ML Engineer",
                "company": "Paytm",
                "duration": "2020-02 to 2024-02",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            }
        ]
    },
    {
        "id": "CAND_0017178",
        "name": "Rahul Mukherjee",
        "skills": [
            "PEFT",
            "Haystack",
            "pgvector",
            "Data Science",
            "MLOps",
            "Computer Vision",
            "CI/CD",
            "LlamaIndex",
            "QLoRA",
            "Weights & Biases",
            "JavaScript",
            "Information Retrieval"
        ],
        "rawScores": {
            "resume": 75,
            "code": 73,
            "interview": 53,
            "response": 85
        },
        "aiReasoning": "Highly qualified ML Engineer with 4.2 years of experience. Demonstrated engineering depth in PEFT, LlamaIndex, QLoRA at product-centric company Swiggy with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Swiggy",
                "duration": "2023-10 to Present",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            },
            {
                "role": "ML Engineer",
                "company": "Glance",
                "duration": "2022-04 to 2023-10",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            }
        ]
    },
    {
        "id": "CAND_0070398",
        "name": "Riya Saxena",
        "skills": [
            "Image Classification",
            "Data Science",
            "BM25",
            "RAG",
            "FAISS",
            "Object Detection",
            "Embeddings",
            "PyTorch",
            "LoRA",
            "Python",
            "Information Retrieval",
            "pgvector"
        ],
        "rawScores": {
            "resume": 75,
            "code": 63,
            "interview": 66,
            "response": 60
        },
        "aiReasoning": "Highly qualified Machine Learning Engineer with 7.2 years of experience. Demonstrated engineering depth in Image Classification, Data Science, BM25 at product-centric company Genpact AI with solid platform engagement.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "Genpact AI",
                "duration": "2023-05 to Present",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Uber",
                "duration": "2021-05 to 2023-03",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Mad Street Den",
                "duration": "2019-03 to 2021-04",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            }
        ]
    },
    {
        "id": "CAND_0054100",
        "name": "Aanya Patel",
        "skills": [
            "Vector Search",
            "Reinforcement Learning",
            "Time Series",
            "Prompt Engineering",
            "Snowflake",
            "Hadoop",
            "GANs",
            "Marketing",
            "YOLO",
            "Semantic Search",
            "QLoRA",
            "Deep Learning"
        ],
        "rawScores": {
            "resume": 75,
            "code": 73,
            "interview": 71,
            "response": 79
        },
        "aiReasoning": "Highly qualified Junior ML Engineer with 6.0 years of experience. Demonstrated engineering depth in Vector Search, Reinforcement Learning, Time Series at product-centric company Zoho with solid platform engagement.",
        "history": [
            {
                "role": "Junior ML Engineer",
                "company": "Zoho",
                "duration": "2024-04 to Present",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            },
            {
                "role": "ML Engineer",
                "company": "Unacademy",
                "duration": "2021-08 to 2024-03",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "Computer Vision Engineer",
                "company": "Freshworks",
                "duration": "2020-06 to 2021-08",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            }
        ]
    },
    {
        "id": "CAND_0078042",
        "name": "Neha Shah",
        "skills": [
            "OpenSearch",
            "Diffusion Models",
            "PyTorch",
            "Sentence Transformers",
            "Figma",
            "NLP",
            "Tally",
            "CNN",
            "TTS",
            "OpenCV",
            "Semantic Search",
            "Pinecone"
        ],
        "rawScores": {
            "resume": 75,
            "code": 83,
            "interview": 71,
            "response": 91
        },
        "aiReasoning": "Highly qualified Applied ML Engineer with 4.7 years of experience. Demonstrated engineering depth in OpenSearch, Diffusion Models, PyTorch at product-centric company PolicyBazaar with solid platform engagement.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "PolicyBazaar",
                "duration": "2023-04 to Present",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            },
            {
                "role": "Search Engineer",
                "company": "Ola",
                "duration": "2021-10 to 2023-04",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0068932",
        "name": "Anil Mukherjee",
        "skills": [
            "Marketing",
            "JavaScript",
            "Agile",
            "MLOps",
            "Reinforcement Learning",
            "Milvus",
            "Prompt Engineering",
            "RAG",
            "scikit-learn",
            "Diffusion Models",
            "CNN",
            "OpenSearch"
        ],
        "rawScores": {
            "resume": 74,
            "code": 70,
            "interview": 57,
            "response": 82
        },
        "aiReasoning": "Highly qualified ML Engineer with 5.2 years of experience. Demonstrated engineering depth in MLOps, Reinforcement Learning, RAG at product-centric company Krutrim with solid platform engagement.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Krutrim",
                "duration": "2022-09 to Present",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            },
            {
                "role": "Computer Vision Engineer",
                "company": "Vedantu",
                "duration": "2021-05 to 2022-09",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0016163",
        "name": "Suresh Shah",
        "skills": [
            "Hugging Face Transformers",
            "Computer Vision",
            "gRPC",
            "Time Series",
            "Weaviate",
            "CNN",
            "Deep Learning",
            "TensorFlow",
            "ASR",
            "Embeddings",
            "Tailwind",
            "Reinforcement Learning"
        ],
        "rawScores": {
            "resume": 74,
            "code": 95,
            "interview": 79,
            "response": 72
        },
        "aiReasoning": "Highly qualified Applied ML Engineer with 6.7 years of experience. Demonstrated engineering depth in Hugging Face Transformers, Computer Vision, Time Series at product-centric company Dream11 with solid platform engagement.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Dream11",
                "duration": "2024-03 to Present",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Verloop.io",
                "duration": "2020-11 to 2024-03",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            },
            {
                "role": "NLP Engineer",
                "company": "Amazon",
                "duration": "2019-11 to 2020-11",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            }
        ]
    },
    {
        "id": "CAND_0024990",
        "name": "Aarav Mehta",
        "skills": [
            "Computer Vision",
            "MLflow",
            "OpenSearch",
            "NLP",
            "TTS",
            "GANs",
            "Kafka",
            "Milvus",
            "YOLO",
            "Elasticsearch",
            "Deep Learning",
            "Angular"
        ],
        "rawScores": {
            "resume": 74,
            "code": 80,
            "interview": 63,
            "response": 83
        },
        "aiReasoning": "Highly qualified Junior ML Engineer with 5.2 years of experience. Demonstrated engineering depth in Computer Vision, MLflow, Elasticsearch at product-centric company Zoho with solid platform engagement.",
        "history": [
            {
                "role": "Junior ML Engineer",
                "company": "Zoho",
                "duration": "2022-08 to Present",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            },
            {
                "role": "ML Engineer",
                "company": "Genpact AI",
                "duration": "2021-05 to 2022-08",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            }
        ]
    },
    {
        "id": "CAND_0061225",
        "name": "Riya Hegde",
        "skills": [
            "Diffusion Models",
            "Weaviate",
            "TensorFlow",
            "Object Detection",
            "MLOps",
            "OpenCV",
            "gRPC",
            "Image Classification",
            "TypeScript",
            "Embeddings",
            "Scrum",
            "BentoML"
        ],
        "rawScores": {
            "resume": 74,
            "code": 70,
            "interview": 67,
            "response": 50
        },
        "aiReasoning": "Highly qualified Senior Data Engineer with 6.0 years of experience. Demonstrated engineering depth in Diffusion Models, Weaviate, OpenCV at product-centric company InMobi with solid platform engagement.",
        "history": [
            {
                "role": "Senior Data Engineer",
                "company": "InMobi",
                "duration": "2024-10 to Present",
                "desc": "Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure."
            },
            {
                "role": "Senior Data Engineer",
                "company": "Unacademy",
                "duration": "2021-02 to 2024-08",
                "desc": "Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure."
            },
            {
                "role": "Senior Data Engineer",
                "company": "Zomato",
                "duration": "2020-05 to 2021-02",
                "desc": "Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests."
            }
        ]
    },
    {
        "id": "CAND_0084819",
        "name": "Krishna Shah",
        "skills": [
            "Semantic Search",
            "BM25",
            "MLOps",
            "OpenSearch",
            "Recommendation Systems",
            "LlamaIndex",
            "scikit-learn",
            "GCP",
            "Docker",
            "PyTorch",
            "Weaviate",
            "MLflow"
        ],
        "rawScores": {
            "resume": 74,
            "code": 55,
            "interview": 77,
            "response": 74
        },
        "aiReasoning": "Highly qualified Search Engineer with 4.5 years of experience. Demonstrated engineering depth in Semantic Search, BM25, OpenSearch at product-centric company Dream11 with solid platform engagement.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "Dream11",
                "duration": "2023-09 to Present",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Senior Data Scientist",
                "company": "Razorpay",
                "duration": "2021-11 to 2023-07",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0005311",
        "name": "Naina Tiwari",
        "skills": [
            "LoRA",
            "Feature Engineering",
            "BentoML",
            "Prompt Engineering",
            "FastAPI",
            "Semantic Search",
            "Qdrant",
            "Forecasting",
            "Salesforce CRM",
            "CNN",
            "Fine-tuning LLMs",
            "QLoRA"
        ],
        "rawScores": {
            "resume": 74,
            "code": 70,
            "interview": 68,
            "response": 28
        },
        "aiReasoning": "Qualified AI Research Engineer with 5.7 years of experience. Experienced in LoRA, Feature Engineering, BentoML at Aganitha; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "Aganitha",
                "duration": "2023-02 to Present",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            },
            {
                "role": "AI Specialist",
                "company": "Swiggy",
                "duration": "2020-11 to 2023-02",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0009691",
        "name": "Ira Subramanian",
        "skills": [
            "BentoML",
            "Prompt Engineering",
            "Recommendation Systems",
            "GANs",
            "Fine-tuning LLMs",
            "Terraform",
            "LoRA",
            "Pinecone",
            "LangChain",
            "MLflow",
            "Sentence Transformers",
            "QLoRA"
        ],
        "rawScores": {
            "resume": 74,
            "code": 67,
            "interview": 66,
            "response": 64
        },
        "aiReasoning": "Qualified Applied ML Engineer with 6.2 years of experience. Experienced in BentoML, Prompt Engineering, Recommendation Systems at LinkedIn; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "LinkedIn",
                "duration": "2024-02 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "AI Engineer",
                "company": "Amazon",
                "duration": "2022-11 to 2024-02",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "NLP Engineer",
                "company": "Genpact AI",
                "duration": "2020-04 to 2022-10",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0027723",
        "name": "Kabir Agarwal",
        "skills": [
            "Vector Search",
            "Feature Engineering",
            "Statistical Modeling",
            "Diffusion Models",
            "GANs",
            "Airflow",
            "OpenCV",
            "NLP",
            "LlamaIndex",
            "Prompt Engineering",
            "Elasticsearch",
            "Pinecone"
        ],
        "rawScores": {
            "resume": 73,
            "code": 77,
            "interview": 69,
            "response": 38
        },
        "aiReasoning": "Qualified ML Engineer with 4.2 years of experience. Experienced in Feature Engineering, Diffusion Models, NLP at Wysa; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Wysa",
                "duration": "2024-12 to Present",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            },
            {
                "role": "AI Specialist",
                "company": "Yellow.ai",
                "duration": "2022-03 to 2024-11",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0016659",
        "name": "Priya Dalal",
        "skills": [
            "PowerPoint",
            "TTS",
            "Sentence Transformers",
            "Apache Beam",
            "Pinecone",
            "PEFT",
            "GraphQL",
            "FAISS",
            "Information Retrieval",
            "Weaviate",
            "Airflow",
            "scikit-learn"
        ],
        "rawScores": {
            "resume": 73,
            "code": 83,
            "interview": 66,
            "response": 89
        },
        "aiReasoning": "Qualified ML Engineer with 4.4 years of experience. Experienced in TTS, Pinecone, Information Retrieval at Glance; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Glance",
                "duration": "2023-04 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "ML Engineer",
                "company": "Flipkart",
                "duration": "2022-02 to 2023-04",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0062561",
        "name": "Suresh Bose",
        "skills": [
            "Learning to Rank",
            "Data Science",
            "Sales",
            "Kubeflow",
            "Information Retrieval",
            "Weights & Biases",
            "Statistical Modeling",
            "PyTorch",
            "Weaviate",
            "YOLO",
            "Object Detection"
        ],
        "rawScores": {
            "resume": 73,
            "code": 53,
            "interview": 55,
            "response": 36
        },
        "aiReasoning": "Qualified ML Engineer with 5.9 years of experience. Experienced in Learning to Rank, Information Retrieval, Weights & Biases at Razorpay; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Razorpay",
                "duration": "2024-10 to Present",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            },
            {
                "role": "Junior ML Engineer",
                "company": "Dream11",
                "duration": "2023-10 to 2024-10",
                "desc": "Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer."
            },
            {
                "role": "Senior Software Engineer (ML)",
                "company": "Unacademy",
                "duration": "2020-08 to 2023-10",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            }
        ]
    },
    {
        "id": "CAND_0010603",
        "name": "Aisha Desai",
        "skills": [
            "Information Retrieval",
            "TTS",
            "OpenSearch",
            "Image Classification",
            "GANs",
            "Docker",
            "Azure",
            "pgvector",
            "Deep Learning",
            "Machine Learning",
            "LlamaIndex",
            "Forecasting"
        ],
        "rawScores": {
            "resume": 73,
            "code": 78,
            "interview": 64,
            "response": 94
        },
        "aiReasoning": "Qualified ML Engineer with 5.3 years of experience. Experienced in OpenSearch, Image Classification, Deep Learning at BYJU'S; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "BYJU'S",
                "duration": "2022-09 to Present",
                "desc": "Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer."
            },
            {
                "role": "Data Scientist",
                "company": "BYJU'S",
                "duration": "2021-01 to 2022-07",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0050553",
        "name": "Shaurya Kapoor",
        "skills": [
            "Feature Engineering",
            "Statistical Modeling",
            "Scrum",
            "Django",
            "LlamaIndex",
            "Vector Search",
            "MLOps",
            "Python",
            "Speech Recognition",
            "Time Series",
            "Image Classification",
            "Milvus"
        ],
        "rawScores": {
            "resume": 73,
            "code": 70,
            "interview": 57,
            "response": 95
        },
        "aiReasoning": "Qualified ML Engineer with 3.6 years of experience. Experienced in Feature Engineering, Statistical Modeling, LlamaIndex at Zoho; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Zoho",
                "duration": "2022-11 to Present",
                "desc": "Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer."
            }
        ]
    },
    {
        "id": "CAND_0051630",
        "name": "Kavya Naidu",
        "skills": [
            "Elasticsearch",
            "Hugging Face Transformers",
            "BentoML",
            "MLflow",
            "Embeddings",
            "Recommendation Systems",
            "Machine Learning",
            "Python",
            "NLP",
            "Excel",
            "OpenSearch",
            "GANs"
        ],
        "rawScores": {
            "resume": 73,
            "code": 66,
            "interview": 72,
            "response": 51
        },
        "aiReasoning": "Qualified Machine Learning Engineer with 6.0 years of experience. Experienced in Elasticsearch, Hugging Face Transformers, BentoML at Razorpay; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "Razorpay",
                "duration": "2022-10 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "AI Engineer",
                "company": "InMobi",
                "duration": "2020-07 to 2022-10",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            }
        ]
    },
    {
        "id": "CAND_0068964",
        "name": "Avni Malhotra",
        "skills": [
            "NLP",
            "Tally",
            "GANs",
            "Deep Learning",
            "Recommendation Systems",
            "Forecasting",
            "Weights & Biases",
            "Weaviate",
            "Kubeflow",
            "Elasticsearch",
            "Embeddings",
            "TTS"
        ],
        "rawScores": {
            "resume": 73,
            "code": 99,
            "interview": 80,
            "response": 70
        },
        "aiReasoning": "Qualified ML Engineer with 4.8 years of experience. Experienced in GANs, Forecasting, Elasticsearch at Mad Street Den; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Mad Street Den",
                "duration": "2025-02 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "Computer Vision Engineer",
                "company": "Zoho",
                "duration": "2021-08 to 2024-12",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            }
        ]
    },
    {
        "id": "CAND_0082738",
        "name": "Ira Naidu",
        "skills": [
            "ETL",
            "Forecasting",
            "Kubernetes",
            "Fine-tuning LLMs",
            "GANs",
            "Image Classification",
            "MLOps",
            "BM25",
            "Computer Vision",
            "OpenSearch",
            "Scrum",
            "Kubeflow"
        ],
        "rawScores": {
            "resume": 73,
            "code": 78,
            "interview": 59,
            "response": 50
        },
        "aiReasoning": "Qualified Senior Data Engineer with 4.7 years of experience. Experienced in Fine-tuning LLMs, GANs, Image Classification at Razorpay; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior Data Engineer",
                "company": "Razorpay",
                "duration": "2023-05 to Present",
                "desc": "Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org."
            },
            {
                "role": "Senior Software Engineer",
                "company": "Capgemini",
                "duration": "2021-09 to 2023-04",
                "desc": "Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests."
            }
        ]
    },
    {
        "id": "CAND_0080315",
        "name": "Anil Pillai",
        "skills": [
            "LangChain",
            "Object Detection",
            "Python",
            "Prompt Engineering",
            "FastAPI",
            "Image Classification",
            "BentoML",
            "Tally",
            "PEFT",
            "FAISS",
            "Diffusion Models",
            "NLP"
        ],
        "rawScores": {
            "resume": 73,
            "code": 99,
            "interview": 72,
            "response": 28
        },
        "aiReasoning": "Qualified AI Research Engineer with 4.1 years of experience. Experienced in LangChain, Prompt Engineering, Image Classification at Sarvam AI; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "Sarvam AI",
                "duration": "2023-08 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "ML Engineer",
                "company": "Aganitha",
                "duration": "2022-06 to 2023-08",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            }
        ]
    },
    {
        "id": "CAND_0033861",
        "name": "Kabir Kapoor",
        "skills": [
            "Reinforcement Learning",
            "Weaviate",
            "LoRA",
            "LLMs",
            "Machine Learning",
            "TensorFlow",
            "LlamaIndex",
            "Time Series",
            "Elasticsearch",
            "Haystack",
            "Diffusion Models",
            "dbt"
        ],
        "rawScores": {
            "resume": 72,
            "code": 72,
            "interview": 79,
            "response": 16
        },
        "aiReasoning": "Qualified Senior NLP Engineer with 8.0 years of experience. Experienced in Reinforcement Learning, Weaviate, LoRA at Mad Street Den; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior NLP Engineer",
                "company": "Mad Street Den",
                "duration": "2023-12 to Present",
                "desc": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
            },
            {
                "role": "Senior NLP Engineer",
                "company": "Sarvam AI",
                "duration": "2020-08 to 2023-11",
                "desc": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
            },
            {
                "role": "Senior AI Engineer",
                "company": "Paytm",
                "duration": "2018-07 to 2020-08",
                "desc": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
            }
        ]
    },
    {
        "id": "CAND_0072721",
        "name": "Reyansh Menon",
        "skills": [
            "MLOps",
            "Weaviate",
            "Qdrant",
            "Fine-tuning LLMs",
            "Airflow",
            "Python",
            "Embeddings",
            "Vector Search",
            "ETL",
            "YOLO",
            "PyTorch",
            "Diffusion Models"
        ],
        "rawScores": {
            "resume": 72,
            "code": 99,
            "interview": 66,
            "response": 53
        },
        "aiReasoning": "Qualified Data Scientist with 3.7 years of experience. Experienced in Qdrant, Fine-tuning LLMs, Python at Yellow.ai; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Data Scientist",
                "company": "Yellow.ai",
                "duration": "2022-10 to Present",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            }
        ]
    },
    {
        "id": "CAND_0071974",
        "name": "Sai Verma",
        "skills": [
            "LoRA",
            "Learning to Rank",
            "Weaviate",
            "PEFT",
            "BM25",
            "Pinecone",
            "Machine Learning",
            "Information Retrieval",
            "Qdrant",
            "Embeddings",
            "CNN",
            "RAG"
        ],
        "rawScores": {
            "resume": 72,
            "code": 82,
            "interview": 79,
            "response": 76
        },
        "aiReasoning": "Qualified Senior AI Engineer with 7.8 years of experience. Experienced in LoRA, Learning to Rank, Weaviate at Netflix; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior AI Engineer",
                "company": "Netflix",
                "duration": "2022-04 to Present",
                "desc": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
            },
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Meta",
                "duration": "2019-12 to 2022-04",
                "desc": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
            },
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Mad Street Den",
                "duration": "2018-10 to 2019-12",
                "desc": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
            }
        ]
    },
    {
        "id": "CAND_0041610",
        "name": "Anil Subramanian",
        "skills": [
            "OpenCV",
            "LoRA",
            "Statistical Modeling",
            "Data Science",
            "Elasticsearch",
            "GANs",
            "OpenSearch",
            "LangChain",
            "BM25",
            "scikit-learn",
            "Learning to Rank",
            "Forecasting"
        ],
        "rawScores": {
            "resume": 72,
            "code": 52,
            "interview": 64,
            "response": 52
        },
        "aiReasoning": "Qualified Recommendation Systems Engineer with 6.7 years of experience. Experienced in OpenCV, LoRA, Statistical Modeling at Zoho; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Recommendation Systems Engineer",
                "company": "Zoho",
                "duration": "2023-11 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Observe.AI",
                "duration": "2021-09 to 2023-11",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Search Engineer",
                "company": "InMobi",
                "duration": "2020-05 to 2021-08",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Swiggy",
                "duration": "2019-09 to 2020-03",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0064326",
        "name": "Nisha Pillai",
        "skills": [
            "scikit-learn",
            "PyTorch",
            "Milvus",
            "Deep Learning",
            "Semantic Search",
            "Weaviate",
            "Object Detection",
            "RAG",
            "Weights & Biases",
            "BM25",
            "Webpack",
            "Python"
        ],
        "rawScores": {
            "resume": 72,
            "code": 61,
            "interview": 69,
            "response": 94
        },
        "aiReasoning": "Qualified Search Engineer with 7.6 years of experience. Experienced in scikit-learn, PyTorch, Milvus at Sarvam AI; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "Sarvam AI",
                "duration": "2023-11 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Aganitha",
                "duration": "2021-11 to 2023-10",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Freshworks",
                "duration": "2019-09 to 2021-09",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Apple",
                "duration": "2018-09 to 2019-09",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0076831",
        "name": "Myra Verma",
        "skills": [
            "LLMs",
            "MLOps",
            "Milvus",
            "SEO",
            "BM25",
            "Weaviate",
            "Forecasting",
            "YOLO",
            "Kafka",
            "NLP",
            "TTS",
            "Reinforcement Learning"
        ],
        "rawScores": {
            "resume": 72,
            "code": 86,
            "interview": 82,
            "response": 50
        },
        "aiReasoning": "Qualified Search Engineer with 4.0 years of experience. Experienced in LLMs, Milvus, BM25 at Krutrim; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "Krutrim",
                "duration": "2024-03 to Present",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Search Engineer",
                "company": "Zomato",
                "duration": "2022-07 to 2024-03",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            }
        ]
    },
    {
        "id": "CAND_0042506",
        "name": "Zara Pandey",
        "skills": [
            "PEFT",
            "TTS",
            "scikit-learn",
            "OpenCV",
            "Semantic Search",
            "BentoML",
            "Fine-tuning LLMs",
            "TensorFlow",
            "Information Retrieval",
            "Diffusion Models",
            "Milvus",
            "Deep Learning"
        ],
        "rawScores": {
            "resume": 72,
            "code": 64,
            "interview": 73,
            "response": 48
        },
        "aiReasoning": "Qualified Search Engineer with 4.2 years of experience. Experienced in PEFT, TTS, scikit-learn at Verloop.io; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "Verloop.io",
                "duration": "2024-12 to Present",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Meesho",
                "duration": "2022-04 to 2024-11",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0078492",
        "name": "Aadhya Vora",
        "skills": [
            "Machine Learning",
            "Haystack",
            "FAISS",
            "Kubeflow",
            "Recommendation Systems",
            "Computer Vision",
            "BM25",
            "GANs",
            "Qdrant",
            "Hugging Face Transformers",
            "ASR",
            "Diffusion Models"
        ],
        "rawScores": {
            "resume": 72,
            "code": 75,
            "interview": 58,
            "response": 70
        },
        "aiReasoning": "Qualified Recommendation Systems Engineer with 5.1 years of experience. Experienced in Machine Learning, Haystack, FAISS at Verloop.io; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Recommendation Systems Engineer",
                "company": "Verloop.io",
                "duration": "2025-06 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Senior Data Scientist",
                "company": "Adobe",
                "duration": "2021-03 to 2025-04",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0043228",
        "name": "Kiara Sen",
        "skills": [
            "BigQuery",
            "NLP",
            "ASR",
            "Hugging Face Transformers",
            "FastAPI",
            "Haystack",
            "Image Classification",
            "Machine Learning",
            "Vector Search",
            "Sentence Transformers",
            "YOLO",
            "TTS"
        ],
        "rawScores": {
            "resume": 72,
            "code": 87,
            "interview": 74,
            "response": 41
        },
        "aiReasoning": "Qualified Applied ML Engineer with 6.8 years of experience. Experienced in NLP, ASR, Hugging Face Transformers at Zoho; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Zoho",
                "duration": "2024-05 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Vedantu",
                "duration": "2020-09 to 2024-04",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Search Engineer",
                "company": "Yellow.ai",
                "duration": "2019-10 to 2020-09",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            }
        ]
    },
    {
        "id": "CAND_0007596",
        "name": "Shaurya Gupta",
        "skills": [
            "Reinforcement Learning",
            "YOLO",
            "scikit-learn",
            "Object Detection",
            "Machine Learning",
            "Feature Engineering",
            "OpenCV",
            "Time Series",
            "Statistical Modeling",
            "Python",
            "Weaviate",
            "Vector Search"
        ],
        "rawScores": {
            "resume": 72,
            "code": 99,
            "interview": 61,
            "response": 86
        },
        "aiReasoning": "Qualified Junior ML Engineer with 4.4 years of experience. Experienced in YOLO, scikit-learn, OpenCV at Flipkart; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Junior ML Engineer",
                "company": "Flipkart",
                "duration": "2022-10 to Present",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            },
            {
                "role": "Data Scientist",
                "company": "Meesho",
                "duration": "2022-02 to 2022-10",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0095619",
        "name": "Vivaan Dalal",
        "skills": [
            "Feature Engineering",
            "Pinecone",
            "MLflow",
            "Learning to Rank",
            "scikit-learn",
            "Hugging Face Transformers",
            "NLP",
            "Weaviate",
            "Information Retrieval",
            "Time Series",
            "Figma",
            "TTS"
        ],
        "rawScores": {
            "resume": 72,
            "code": 99,
            "interview": 66,
            "response": 90
        },
        "aiReasoning": "Qualified NLP Engineer with 15.6 years of experience. Experienced in Feature Engineering, Pinecone, MLflow at Nykaa; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "NLP Engineer",
                "company": "Nykaa",
                "duration": "2022-04 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0094358",
        "name": "Jay Krishnan",
        "skills": [
            "Prompt Engineering",
            "Deep Learning",
            "Weights & Biases",
            "GANs",
            "AWS",
            "BM25",
            "Elasticsearch",
            "TTS",
            "Machine Learning",
            "MLflow",
            "Qdrant",
            "Vector Search"
        ],
        "rawScores": {
            "resume": 71,
            "code": 83,
            "interview": 61,
            "response": 34
        },
        "aiReasoning": "Qualified ML Engineer with 4.1 years of experience. Experienced in Prompt Engineering, Deep Learning, Weights & Biases at Saarthi.ai; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Saarthi.ai",
                "duration": "2023-05 to Present",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            },
            {
                "role": "AI Research Engineer",
                "company": "BYJU'S",
                "duration": "2022-06 to 2023-05",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            }
        ]
    },
    {
        "id": "CAND_0082760",
        "name": "Nikhil Sen",
        "skills": [
            "OpenCV",
            "YOLO",
            "Docker",
            "LoRA",
            "MLOps",
            "BentoML",
            "MLflow",
            "scikit-learn",
            "Computer Vision",
            "Embeddings",
            "OpenSearch",
            "Weights & Biases"
        ],
        "rawScores": {
            "resume": 71,
            "code": 75,
            "interview": 65,
            "response": 50
        },
        "aiReasoning": "Qualified ML Engineer with 3.3 years of experience. Experienced in YOLO, BentoML, MLflow at InMobi; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "InMobi",
                "duration": "2023-10 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "AI Specialist",
                "company": "Mad Street Den",
                "duration": "2023-01 to 2023-08",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0049615",
        "name": "Kavya Mishra",
        "skills": [
            "NLP",
            "Deep Learning",
            "Recommendation Systems",
            "Kubeflow",
            "YOLO",
            "Reinforcement Learning",
            "Terraform",
            "QLoRA",
            "Docker",
            "ASR",
            "PEFT",
            "PyTorch"
        ],
        "rawScores": {
            "resume": 71,
            "code": 77,
            "interview": 63,
            "response": 28
        },
        "aiReasoning": "Qualified ML Engineer with 5.1 years of experience. Experienced in NLP, Reinforcement Learning, QLoRA at Krutrim; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Krutrim",
                "duration": "2023-12 to Present",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            },
            {
                "role": "AI Specialist",
                "company": "InMobi",
                "duration": "2021-05 to 2023-12",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0064331",
        "name": "Saanvi Iyer",
        "skills": [
            "LLMs",
            "BentoML",
            "Forecasting",
            "Data Science",
            "TensorFlow",
            "YOLO",
            "Learning to Rank",
            "Image Classification",
            "dbt",
            "Deep Learning",
            "Information Retrieval",
            "Photoshop"
        ],
        "rawScores": {
            "resume": 71,
            "code": 99,
            "interview": 69,
            "response": 74
        },
        "aiReasoning": "Qualified Senior Software Engineer (ML) with 4.2 years of experience. Experienced in Forecasting, Data Science, YOLO at Swiggy; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior Software Engineer (ML)",
                "company": "Swiggy",
                "duration": "2025-02 to Present",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            },
            {
                "role": "AI Research Engineer",
                "company": "Flipkart",
                "duration": "2022-03 to 2024-12",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            }
        ]
    },
    {
        "id": "CAND_0061257",
        "name": "Advaith Pillai",
        "skills": [
            "PEFT",
            "Haystack",
            "Time Series",
            "Machine Learning",
            "Information Retrieval Systems",
            "Search Infrastructure",
            "Image Classification",
            "TTS",
            "Feature Engineering",
            "ETL",
            "Model Adaptation",
            "Indexing Algorithms"
        ],
        "rawScores": {
            "resume": 71,
            "code": 85,
            "interview": 69,
            "response": 87
        },
        "aiReasoning": "Qualified Staff Machine Learning Engineer with 8.0 years of experience. Experienced in PEFT, Haystack, Time Series at LinkedIn; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Staff Machine Learning Engineer",
                "company": "LinkedIn",
                "duration": "2022-11 to Present",
                "desc": "Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling \u2014 it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months."
            },
            {
                "role": "Senior Applied Scientist",
                "company": "Yellow.ai",
                "duration": "2018-08 to 2022-11",
                "desc": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side \u2014 building offline metrics that actually correlated with online engagement, which turned out to be the hardest part."
            }
        ]
    },
    {
        "id": "CAND_0076163",
        "name": "Nikhil Mittal",
        "skills": [
            "Weaviate",
            "LangChain",
            "YOLO",
            "Reinforcement Learning",
            "Statistical Modeling",
            "BM25",
            "Semantic Search",
            "LlamaIndex",
            "Prompt Engineering",
            "PyTorch",
            "OpenCV",
            "Sentence Transformers"
        ],
        "rawScores": {
            "resume": 71,
            "code": 84,
            "interview": 70,
            "response": 84
        },
        "aiReasoning": "Qualified NLP Engineer with 6.9 years of experience. Experienced in Weaviate, LangChain, Statistical Modeling at Ola; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "NLP Engineer",
                "company": "Ola",
                "duration": "2022-08 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "NLP Engineer",
                "company": "Zoho",
                "duration": "2019-09 to 2022-08",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            }
        ]
    },
    {
        "id": "CAND_0077031",
        "name": "Amit Pandey",
        "skills": [
            "MLOps",
            "FastAPI",
            "dbt",
            "LoRA",
            "ASR",
            "Django",
            "Hugging Face Transformers",
            "FAISS",
            "SQL",
            "Python",
            "Forecasting"
        ],
        "rawScores": {
            "resume": 71,
            "code": 62,
            "interview": 70,
            "response": 61
        },
        "aiReasoning": "Qualified Software Engineer with 5.0 years of experience. Experienced in LoRA, Hugging Face Transformers, FAISS at Paytm; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Software Engineer",
                "company": "Paytm",
                "duration": "2025-05 to Present",
                "desc": "Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure."
            },
            {
                "role": "Software Engineer",
                "company": "Flipkart",
                "duration": "2023-04 to 2025-05",
                "desc": "Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org."
            },
            {
                "role": "Data Analyst",
                "company": "Unacademy",
                "duration": "2021-05 to 2023-02",
                "desc": "Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models."
            }
        ]
    },
    {
        "id": "CAND_0075249",
        "name": "Ishaan Arora",
        "skills": [
            "Sentence Transformers",
            "Milvus",
            "Machine Learning",
            "Fine-tuning LLMs",
            "MLflow",
            "Hadoop",
            "BM25",
            "Pinecone",
            "Haystack",
            "Time Series",
            "Diffusion Models",
            "ASR"
        ],
        "rawScores": {
            "resume": 71,
            "code": 76,
            "interview": 67,
            "response": 82
        },
        "aiReasoning": "Qualified Applied ML Engineer with 6.2 years of experience. Experienced in Sentence Transformers, Milvus, Machine Learning at Zomato; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Zomato",
                "duration": "2023-06 to Present",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "Search Engineer",
                "company": "upGrad",
                "duration": "2020-04 to 2023-06",
                "desc": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
            }
        ]
    },
    {
        "id": "CAND_0022254",
        "name": "Shaurya Iyer",
        "skills": [
            "Data Science",
            "Machine Learning",
            "Embeddings",
            "CI/CD",
            "ASR",
            "LangChain",
            "Reinforcement Learning",
            "Speech Recognition",
            "Spark",
            "OpenSearch",
            "Sales",
            "MLflow"
        ],
        "rawScores": {
            "resume": 71,
            "code": 52,
            "interview": 55,
            "response": 37
        },
        "aiReasoning": "Qualified Senior Data Engineer with 5.7 years of experience. Experienced in Data Science, Machine Learning, LangChain at upGrad; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior Data Engineer",
                "company": "upGrad",
                "duration": "2022-12 to Present",
                "desc": "Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests."
            },
            {
                "role": "Software Engineer",
                "company": "InMobi",
                "duration": "2021-11 to 2022-12",
                "desc": "Implemented streaming data pipelines on Kafka and Spark Streaming for a real-time user-activity processing platform. Designed the schema-registry integration, the watermark/state management approach, and the deduplication logic for late-arriving events. Worked closely with the data science team to make sure feature pipelines aligned with what their models needed. Most of my career has been data engineering, with some adjacent ML exposure."
            },
            {
                "role": "Analytics Engineer",
                "company": "Paytm",
                "duration": "2020-08 to 2021-09",
                "desc": "Backend development with Python (FastAPI), PostgreSQL, and Redis at a B2B SaaS product. Owned the analytics-and-reporting service which serves dashboards to ~3K paying customers. Recent work includes integrating a model-serving service (built by another team) into our API layer; my work was the integration and observability, not the model itself. Strong on API design, database performance, and reliability engineering."
            }
        ]
    },
    {
        "id": "CAND_0046132",
        "name": "Ishaan Pillai",
        "skills": [
            "Kubeflow",
            "Data Science",
            "OpenCV",
            "Information Retrieval",
            "GANs",
            "dbt",
            "Snowflake",
            "MLOps",
            "MLflow",
            "PyTorch",
            "Time Series",
            "Haystack"
        ],
        "rawScores": {
            "resume": 71,
            "code": 99,
            "interview": 47,
            "response": 94
        },
        "aiReasoning": "Qualified AI Research Engineer with 4.3 years of experience. Experienced in Data Science, OpenCV, GANs at Verloop.io; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "Verloop.io",
                "duration": "2024-12 to Present",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            },
            {
                "role": "Senior Software Engineer (ML)",
                "company": "Meesho",
                "duration": "2022-03 to 2024-12",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0039521",
        "name": "Kiara Krishnan",
        "skills": [
            "Accounting",
            "Time Series",
            "Hugging Face Transformers",
            "BentoML",
            "Forecasting",
            "Marketing",
            "PEFT",
            "Weaviate",
            "BM25",
            "Haystack",
            "Semantic Search",
            "Object Detection"
        ],
        "rawScores": {
            "resume": 70,
            "code": 99,
            "interview": 74,
            "response": 41
        },
        "aiReasoning": "Qualified Search Engineer with 3.0 years of experience. Experienced in Time Series, Hugging Face Transformers, PEFT at Salesforce; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Search Engineer",
                "company": "Salesforce",
                "duration": "2024-03 to Present",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            },
            {
                "role": "Machine Learning Engineer",
                "company": "Salesforce",
                "duration": "2021-07 to 2024-03",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            }
        ]
    },
    {
        "id": "CAND_0050876",
        "name": "Vivaan Shah",
        "skills": [
            "SQL",
            "Qdrant",
            "MLOps",
            "FAISS",
            "scikit-learn",
            "Weights & Biases",
            "LlamaIndex",
            "Forecasting",
            "Machine Learning",
            "OpenSearch",
            "YOLO",
            "Kubeflow"
        ],
        "rawScores": {
            "resume": 70,
            "code": 86,
            "interview": 65,
            "response": 67
        },
        "aiReasoning": "Qualified Applied ML Engineer with 6.0 years of experience. Experienced in Qdrant, MLOps, FAISS at Freshworks; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Applied ML Engineer",
                "company": "Freshworks",
                "duration": "2023-04 to Present",
                "desc": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
            },
            {
                "role": "AI Engineer",
                "company": "Yellow.ai",
                "duration": "2021-04 to 2023-04",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            },
            {
                "role": "Recommendation Systems Engineer",
                "company": "Razorpay",
                "duration": "2020-06 to 2021-03",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0019143",
        "name": "Advik Chatterjee",
        "skills": [
            "Angular",
            "CSS",
            "Speech Recognition",
            "QLoRA",
            "Azure",
            "Redux",
            "gRPC",
            "Airflow",
            "CNN",
            "GANs",
            "Milvus",
            "BM25"
        ],
        "rawScores": {
            "resume": 70,
            "code": 84,
            "interview": 55,
            "response": 75
        },
        "aiReasoning": "Qualified Senior Software Engineer with 4.7 years of experience. Experienced in QLoRA, Milvus, BM25 at Stark Industries; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior Software Engineer",
                "company": "Stark Industries",
                "duration": "2023-03 to Present",
                "desc": "Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure."
            },
            {
                "role": "Senior Data Engineer",
                "company": "Flipkart",
                "duration": "2021-11 to 2023-03",
                "desc": "Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests."
            }
        ]
    },
    {
        "id": "CAND_0086022",
        "name": "Dhruv Naidu",
        "skills": [
            "Vector Search",
            "MLflow",
            "Recommendation Systems",
            "Databricks",
            "Deep Learning",
            "pgvector",
            "Fine-tuning LLMs",
            "Elasticsearch",
            "QLoRA",
            "Pinecone",
            "Embeddings",
            "Kubeflow"
        ],
        "rawScores": {
            "resume": 70,
            "code": 75,
            "interview": 83,
            "response": 55
        },
        "aiReasoning": "Qualified Senior Applied Scientist with 5.3 years of experience. Experienced in Vector Search, MLflow, Recommendation Systems at Sarvam AI; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior Applied Scientist",
                "company": "Sarvam AI",
                "duration": "2024-05 to Present",
                "desc": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
            },
            {
                "role": "Senior ML Engineer \u2014 Search & Ranking",
                "company": "Uber",
                "duration": "2021-02 to 2024-04",
                "desc": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
            }
        ]
    },
    {
        "id": "CAND_0006567",
        "name": "Aditya Subramanian",
        "skills": [
            "Speech Recognition",
            "scikit-learn",
            "Search Backend",
            "Model Adaptation",
            "Vector Representations",
            "BM25",
            "Workflow Orchestration",
            "GANs",
            "NLP",
            "Kubernetes",
            "Python",
            "Ranking Systems"
        ],
        "rawScores": {
            "resume": 70,
            "code": 75,
            "interview": 76,
            "response": 79
        },
        "aiReasoning": "Qualified Senior AI Engineer with 7.9 years of experience. Experienced in scikit-learn, Search Backend, Model Adaptation at Meta; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior AI Engineer",
                "company": "Meta",
                "duration": "2024-04 to Present",
                "desc": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment \u2014 none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work."
            },
            {
                "role": "Senior Applied Scientist",
                "company": "Razorpay",
                "duration": "2020-03 to 2024-04",
                "desc": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side \u2014 building offline metrics that actually correlated with online engagement, which turned out to be the hardest part."
            },
            {
                "role": "Senior ML Engineer \u2014 Search & Ranking",
                "company": "Glance",
                "duration": "2018-08 to 2020-03",
                "desc": "Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer \u2014 feature monitoring, drift detection, retraining cadence \u2014 rather than the modeling itself. Worked closely with the product and growth teams."
            }
        ]
    },
    {
        "id": "CAND_0006418",
        "name": "Rahul Mukherjee",
        "skills": [
            "Kubernetes",
            "gRPC",
            "Semantic Search",
            "Embeddings",
            "TensorFlow",
            "Object Detection",
            "Weaviate",
            "Elasticsearch",
            "Snowflake",
            "MLflow",
            "Learning to Rank",
            "Forecasting"
        ],
        "rawScores": {
            "resume": 70,
            "code": 59,
            "interview": 88,
            "response": 92
        },
        "aiReasoning": "Qualified Machine Learning Engineer with 5.7 years of experience. Experienced in Semantic Search, Embeddings, TensorFlow at Verloop.io; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "Verloop.io",
                "duration": "2023-02 to Present",
                "desc": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself."
            },
            {
                "role": "AI Engineer",
                "company": "Flipkart",
                "duration": "2020-11 to 2023-02",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            }
        ]
    },
    {
        "id": "CAND_0062626",
        "name": "Jay Dutta",
        "skills": [
            "MongoDB",
            "Qdrant",
            "PostgreSQL",
            "dbt",
            "Weights & Biases",
            "NLP",
            "Feature Engineering",
            "TensorFlow",
            "Redux",
            "Computer Vision",
            "Airflow",
            "Excel"
        ],
        "rawScores": {
            "resume": 70,
            "code": 99,
            "interview": 48,
            "response": 37
        },
        "aiReasoning": "Qualified Backend Engineer with 4.7 years of experience. Experienced in Qdrant, NLP, Computer Vision at Tech Mahindra; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Backend Engineer",
                "company": "Tech Mahindra",
                "duration": "2025-02 to Present",
                "desc": "Backend development with Python (FastAPI), PostgreSQL, and Redis at a B2B SaaS product. Owned the analytics-and-reporting service which serves dashboards to ~3K paying customers. Recent work includes integrating a model-serving service (built by another team) into our API layer; my work was the integration and observability, not the model itself. Strong on API design, database performance, and reliability engineering."
            },
            {
                "role": "Software Engineer",
                "company": "Vedantu",
                "duration": "2023-10 to 2025-02",
                "desc": "Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org."
            },
            {
                "role": "Backend Engineer",
                "company": "Ola",
                "duration": "2021-12 to 2023-10",
                "desc": "Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models."
            }
        ]
    },
    {
        "id": "CAND_0064904",
        "name": "Karan Trivedi",
        "skills": [
            "Embeddings",
            "Hugging Face Transformers",
            "Elasticsearch",
            "Diffusion Models",
            "Forecasting",
            "FastAPI",
            "Prompt Engineering",
            "LLMs",
            "Python",
            "MLOps",
            "TensorFlow",
            "Weaviate"
        ],
        "rawScores": {
            "resume": 70,
            "code": 59,
            "interview": 70,
            "response": 78
        },
        "aiReasoning": "Qualified AI Engineer with 4.9 years of experience. Experienced in Embeddings, Hugging Face Transformers, Elasticsearch at LinkedIn; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "AI Engineer",
                "company": "LinkedIn",
                "duration": "2024-03 to Present",
                "desc": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
            },
            {
                "role": "Applied ML Engineer",
                "company": "Freshworks",
                "duration": "2021-08 to 2024-03",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0046459",
        "name": "Rohan Patel",
        "skills": [
            "Kubeflow",
            "Django",
            "BM25",
            "Qdrant",
            "Marketing",
            "Semantic Search",
            "Machine Learning",
            "Speech Recognition",
            "YOLO",
            "RAG",
            "GANs",
            "Time Series"
        ],
        "rawScores": {
            "resume": 70,
            "code": 95,
            "interview": 77,
            "response": 84
        },
        "aiReasoning": "Qualified AI Research Engineer with 4.5 years of experience. Experienced in Kubeflow, BM25, Qdrant at upGrad; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "upGrad",
                "duration": "2023-04 to Present",
                "desc": "Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited."
            },
            {
                "role": "ML Engineer",
                "company": "Wipro",
                "duration": "2022-01 to 2023-04",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            }
        ]
    },
    {
        "id": "CAND_0091745",
        "name": "Karan Agarwal",
        "skills": [
            "PostgreSQL",
            "Deep Learning",
            "Embeddings",
            "Fine-tuning LLMs",
            "Java",
            "Machine Learning",
            "Hugging Face Transformers",
            "Reinforcement Learning",
            "Data Pipelines",
            "Weights & Biases",
            "MLflow",
            "Speech Recognition"
        ],
        "rawScores": {
            "resume": 70,
            "code": 71,
            "interview": 74,
            "response": 53
        },
        "aiReasoning": "Qualified Junior ML Engineer with 5.9 years of experience. Experienced in Deep Learning, Fine-tuning LLMs, Machine Learning at Locobuzz; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Junior ML Engineer",
                "company": "Locobuzz",
                "duration": "2022-10 to Present",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            },
            {
                "role": "Junior ML Engineer",
                "company": "Swiggy",
                "duration": "2020-08 to 2022-10",
                "desc": "Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team."
            }
        ]
    },
    {
        "id": "CAND_0075439",
        "name": "Pooja Mehta",
        "skills": [
            "Learning to Rank",
            "Feature Engineering",
            "LoRA",
            "Elasticsearch",
            "JavaScript",
            "OpenSearch",
            "ASR",
            "Vector Search",
            "Information Retrieval",
            "Semantic Search",
            "Embeddings",
            "MLflow"
        ],
        "rawScores": {
            "resume": 70,
            "code": 66,
            "interview": 67,
            "response": 56
        },
        "aiReasoning": "Qualified Machine Learning Engineer with 4.3 years of experience. Experienced in Learning to Rank, Feature Engineering, LoRA at Flipkart; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Machine Learning Engineer",
                "company": "Flipkart",
                "duration": "2024-04 to Present",
                "desc": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
            },
            {
                "role": "AI Engineer",
                "company": "Genpact AI",
                "duration": "2022-03 to 2024-03",
                "desc": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
            }
        ]
    },
    {
        "id": "CAND_0007473",
        "name": "Manish Malhotra",
        "skills": [
            "Salesforce CRM",
            "Docker",
            "Rust",
            "JavaScript",
            "PEFT",
            "TTS",
            "Haystack",
            "ETL",
            "Azure",
            "GANs",
            "Airflow",
            "Statistical Modeling"
        ],
        "rawScores": {
            "resume": 70,
            "code": 50,
            "interview": 70,
            "response": 67
        },
        "aiReasoning": "Qualified Software Engineer with 3.8 years of experience. Experienced in TTS, Haystack, GANs at Razorpay; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Software Engineer",
                "company": "Razorpay",
                "duration": "2023-11 to Present",
                "desc": "Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models."
            },
            {
                "role": "Software Engineer",
                "company": "Stark Industries",
                "duration": "2022-08 to 2023-10",
                "desc": "Implemented streaming data pipelines on Kafka and Spark Streaming for a real-time user-activity processing platform. Designed the schema-registry integration, the watermark/state management approach, and the deduplication logic for late-arriving events. Worked closely with the data science team to make sure feature pipelines aligned with what their models needed. Most of my career has been data engineering, with some adjacent ML exposure."
            }
        ]
    },
    {
        "id": "CAND_0001086",
        "name": "Kabir Shetty",
        "skills": [
            "Learning to Rank",
            "FastAPI",
            "Terraform",
            "dbt",
            "SAP",
            "Snowflake",
            "MLOps",
            "Hadoop",
            "Vector Search",
            "Qdrant",
            "NLP",
            "YOLO"
        ],
        "rawScores": {
            "resume": 70,
            "code": 87,
            "interview": 64,
            "response": 30
        },
        "aiReasoning": "Qualified Senior Software Engineer with 8.0 years of experience. Experienced in Learning to Rank, Qdrant, YOLO at Dunder Mifflin; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Senior Software Engineer",
                "company": "Dunder Mifflin",
                "duration": "2022-08 to Present",
                "desc": "Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org."
            },
            {
                "role": "Backend Engineer",
                "company": "Swiggy",
                "duration": "2019-07 to 2022-08",
                "desc": "Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests."
            },
            {
                "role": "Data Analyst",
                "company": "HCL",
                "duration": "2018-08 to 2019-07",
                "desc": "Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models."
            }
        ]
    },
    {
        "id": "CAND_0032527",
        "name": "Priya Bansal",
        "skills": [
            "Diffusion Models",
            "Apache Flink",
            "Deep Learning",
            "MLflow",
            "Data Science",
            "NLP",
            "Time Series",
            "YOLO",
            "LangChain",
            "Statistical Modeling",
            "TTS",
            "Python"
        ],
        "rawScores": {
            "resume": 70,
            "code": 75,
            "interview": 79,
            "response": 81
        },
        "aiReasoning": "Qualified Junior ML Engineer with 3.9 years of experience. Experienced in Deep Learning, Data Science, Time Series at Flipkart; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Junior ML Engineer",
                "company": "Flipkart",
                "duration": "2023-04 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "AI Research Engineer",
                "company": "Swiggy",
                "duration": "2022-07 to 2023-03",
                "desc": "Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team."
            }
        ]
    },
    {
        "id": "CAND_0074339",
        "name": "Rajesh Banerjee",
        "skills": [
            "Salesforce CRM",
            "OpenCV",
            "PyTorch",
            "Marketing",
            "OpenSearch",
            "Learning to Rank",
            "Tailwind",
            "FAISS",
            "Time Series",
            "Image Classification",
            "Sentence Transformers",
            "LlamaIndex"
        ],
        "rawScores": {
            "resume": 69,
            "code": 88,
            "interview": 55,
            "response": 57
        },
        "aiReasoning": "Qualified ML Engineer with 5.3 years of experience. Experienced in OpenSearch, FAISS, Time Series at Observe.AI; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "ML Engineer",
                "company": "Observe.AI",
                "duration": "2024-06 to Present",
                "desc": "Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization."
            },
            {
                "role": "Senior Software Engineer (ML)",
                "company": "InMobi",
                "duration": "2021-03 to 2024-06",
                "desc": "Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer."
            }
        ]
    },
    {
        "id": "CAND_0059017",
        "name": "Pooja Mishra",
        "skills": [
            "Speech Recognition",
            "Sentence Transformers",
            "FAISS",
            "Object Detection",
            "Machine Learning",
            "TensorFlow",
            "QLoRA",
            "Feature Engineering",
            "GCP",
            "YOLO",
            "Python",
            "Forecasting"
        ],
        "rawScores": {
            "resume": 69,
            "code": 76,
            "interview": 61,
            "response": 75
        },
        "aiReasoning": "Qualified AI Research Engineer with 6.8 years of experience. Experienced in Sentence Transformers, FAISS, TensorFlow at PhonePe; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "AI Research Engineer",
                "company": "PhonePe",
                "duration": "2022-09 to Present",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            },
            {
                "role": "Computer Vision Engineer",
                "company": "PhonePe",
                "duration": "2019-10 to 2022-09",
                "desc": "Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design."
            }
        ]
    },
    {
        "id": "CAND_0033871",
        "name": "Aisha Sethi",
        "skills": [
            "SAP",
            "Rust",
            "Excel",
            "FastAPI",
            "NLP",
            "Go",
            "PostgreSQL",
            "MLOps",
            "Content Writing",
            "Microservices",
            "SEO",
            "Machine Learning"
        ],
        "rawScores": {
            "resume": 69,
            "code": 71,
            "interview": 73,
            "response": 68
        },
        "aiReasoning": "Qualified .NET Developer with 6.0 years of experience. Experienced in SAP, Rust, Excel at Hooli; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": ".NET Developer",
                "company": "Hooli",
                "duration": "2025-03 to Present",
                "desc": "Test automation and QA engineering for a fintech product. Built and maintained the end-to-end test suite using Selenium and pytest, plus the load-testing setup using Locust. Worked closely with developers on testability patterns and with product on acceptance criteria. Recent work has been on shifting test responsibility into the dev team \u2014 moving from QA-as-gate to QA-as-coach. Career has been entirely in QA/test engineering."
            },
            {
                "role": "QA Engineer",
                "company": "Zomato",
                "duration": "2021-05 to 2025-03",
                "desc": "Android mobile development using Java and (more recently) Kotlin at a consumer-app company. Built and maintained multiple production features including the main shopping flow, push notification system, and the offline-first sync layer. Comfortable with the Android framework, Jetpack components, and the typical patterns (MVVM, Hilt, Coroutines). My career has been entirely on mobile so far; interested in expanding into broader backend or platform engineering."
            },
            {
                "role": "Cloud Engineer",
                "company": "Pied Piper",
                "duration": "2020-08 to 2021-05",
                "desc": "Cloud infrastructure and DevOps work at an enterprise SaaS company. Owned the AWS account architecture (VPC, IAM, networking), the Terraform modules for our service deployments, and the Kubernetes cluster operations. Designed the CI/CD pipelines (GitLab CI + ArgoCD) and the monitoring stack (Prometheus, Grafana, Loki). Strong on the infra and ops side; haven't done much application development."
            }
        ]
    },
    {
        "id": "CAND_0077337",
        "name": "Aarav Agarwal",
        "skills": [
            "GANs",
            "Semantic Search",
            "QLoRA",
            "pgvector",
            "Pinecone",
            "Feature Engineering",
            "BM25",
            "Information Retrieval",
            "LLMs",
            "OpenCV",
            "Data Science",
            "Forecasting"
        ],
        "rawScores": {
            "resume": 69,
            "code": 68,
            "interview": 63,
            "response": 95
        },
        "aiReasoning": "Qualified Staff Machine Learning Engineer with 7.0 years of experience. Experienced in Semantic Search, QLoRA, pgvector at Paytm; suitable founding engineer fit with positive response metrics.",
        "history": [
            {
                "role": "Staff Machine Learning Engineer",
                "company": "Paytm",
                "duration": "2024-11 to Present",
                "desc": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
            },
            {
                "role": "Senior NLP Engineer",
                "company": "Razorpay",
                "duration": "2023-08 to 2024-10",
                "desc": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
            },
            {
                "role": "Senior NLP Engineer",
                "company": "Glance",
                "duration": "2020-01 to 2023-08",
                "desc": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
            },
            {
                "role": "Senior AI Engineer",
                "company": "Aganitha",
                "duration": "2019-06 to 2019-12",
                "desc": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
            }
        ]
    }
];

export const TOP_RESUMES = {
    "CAND_0002025": {
        "id": "CAND_0002025",
        "fileName": "ira_dalal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 2 mins ago",
        "text": "IRA DALAL\nCandidate ID: CAND_0002025 | Location: Trivandrum, Kerala, India\nHeadline: Senior AI Engineer | Building AI-native search & ranking systems\n\nSUMMARY:\nSenior AI engineer with 5.9 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, across a corpus of 30M+ candidate profiles. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior AI Engineer at Apple (2022-12-14 to Present)\n  Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month.\n\n- Lead AI Engineer at Aganitha (2020-08-19 to 2022-12-07)\n  Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.\n\nEDUCATION:\n- M.Sc in Data Science from IIIT Bangalore (2012 - 2016)\n- M.S. in Data Science from IIIT Bangalore (2013 - 2017)\n\nSKILLS:\nDiffusion Models (intermediate), FAISS (expert), TensorFlow (expert), scikit-learn (expert), OpenSearch (advanced), Haystack (expert), Weaviate (advanced), Sentence Transformers (expert), QLoRA (expert), NLP (expert), Pinecone (advanced), Recommendation Systems (expert), Deep Learning (expert), Python (expert), LangChain (expert), Weights & Biases (advanced), OpenCV (advanced), Prompt Engineering (advanced), Fine-tuning LLMs (advanced), YOLO (advanced)",
        "parsed": {
            "summary": "Senior AI engineer with 5.9 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, across a corpus of 30M+ candidate profiles. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Diffusion Models",
                "FAISS",
                "TensorFlow",
                "scikit-learn",
                "OpenSearch",
                "Haystack",
                "Weaviate",
                "Sentence Transformers"
            ],
            "milestones": [
                "Completed 5.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Diffusion Models, FAISS, TensorFlow."
            ]
        }
    },
    "CAND_0052682": {
        "id": "CAND_0052682",
        "fileName": "ira_mukherjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 4 mins ago",
        "text": "IRA MUKHERJEE\nCandidate ID: CAND_0052682 | Location: Vizag, Andhra Pradesh, India\nHeadline: NLP Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 6.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- NLP Engineer at Aganitha (2022-08-16 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- NLP Engineer at Salesforce (2019-10-31 to 2022-06-17)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\nEDUCATION:\n- M.E. in Information Technology from NIT Warangal (2012 - 2017)\n- Ph.D in Computer Science from IIT Guwahati (2014 - 2017)\n\nSKILLS:\nStatistical Modeling (intermediate), QLoRA (expert), Semantic Search (expert), FAISS (expert), PyTorch (expert), gRPC (intermediate), LLMs (expert), Excel (beginner), TTS (advanced), Six Sigma (intermediate), Data Science (advanced), Forecasting (advanced), Python (expert), Embeddings (expert), Fine-tuning LLMs (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 6.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Statistical Modeling",
                "QLoRA",
                "Semantic Search",
                "FAISS",
                "PyTorch",
                "gRPC",
                "LLMs",
                "Excel"
            ],
            "milestones": [
                "Completed 6.6 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Statistical Modeling, QLoRA, Semantic Search."
            ]
        }
    },
    "CAND_0079387": {
        "id": "CAND_0079387",
        "fileName": "sneha_arora_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 6 mins ago",
        "text": "SNEHA ARORA\nCandidate ID: CAND_0079387 | Location: Trivandrum, Kerala, India\nHeadline: AI Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- AI Engineer at Microsoft (2024-08-05 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- NLP Engineer at upGrad (2022-10-15 to 2024-08-05)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Applied ML Engineer at Ola (2021-03-24 to 2022-09-15)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- AI Engineer at BYJU'S (2019-09-01 to 2021-03-24)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\nEDUCATION:\n- M.Sc in Computer Science from IIIT Hyderabad (2010 - 2013)\n- B.E. in Data Science from PES University (2002 - 2007)\n\nSKILLS:\nscikit-learn (expert), Recommendation Systems (advanced), Python (expert), Time Series (advanced), Sentence Transformers (expert), JavaScript (intermediate), Illustrator (intermediate), Vector Search (expert), Next.js (intermediate), OpenSearch (expert), YOLO (intermediate), Reinforcement Learning (intermediate), QLoRA (expert), LoRA (expert), BM25 (advanced), Learning to Rank (advanced), Haystack (expert), BentoML (advanced), ASR (intermediate), Kubeflow (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "scikit-learn",
                "Recommendation Systems",
                "Python",
                "Time Series",
                "Sentence Transformers",
                "JavaScript",
                "Illustrator",
                "Vector Search"
            ],
            "milestones": [
                "Completed 6.9 years of professional experience across 4 companies.",
                "Achieved high skill proficiency in scikit-learn, Recommendation Systems, Python."
            ]
        }
    },
    "CAND_0027691": {
        "id": "CAND_0027691",
        "fileName": "ayaan_goyal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 8 mins ago",
        "text": "AYAAN GOYAL\nCandidate ID: CAND_0027691 | Location: Pune, Maharashtra, India\nHeadline: NLP Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- NLP Engineer at Haptik (2024-03-08 to Present)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Applied ML Engineer at Vedantu (2021-06-15 to 2024-03-01)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- AI Engineer at Meta (2020-02-21 to 2021-06-15)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- M.Sc in Machine Learning from Thapar University (2007 - 2010)\n- M.E. in Data Science from KIIT University (2008 - 2012)\n\nSKILLS:\nSAP (beginner), LoRA (expert), PEFT (advanced), Recommendation Systems (expert), Statistical Modeling (intermediate), Weaviate (expert), scikit-learn (advanced), Marketing (beginner), Embeddings (advanced), Learning to Rank (advanced), TTS (intermediate), QLoRA (expert), TensorFlow (expert), Semantic Search (expert), Python (advanced), MLflow (advanced), Computer Vision (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "SAP",
                "LoRA",
                "PEFT",
                "Recommendation Systems",
                "Statistical Modeling",
                "Weaviate",
                "scikit-learn",
                "Marketing"
            ],
            "milestones": [
                "Completed 6.5 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in SAP, LoRA, PEFT."
            ]
        }
    },
    "CAND_0011687": {
        "id": "CAND_0011687",
        "fileName": "shreya_tiwari_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 10 mins ago",
        "text": "SHREYA TIWARI\nCandidate ID: CAND_0011687 | Location: Indore, Madhya Pradesh, India\nHeadline: Senior NLP Engineer | Production ML at scale | 7.8+ yrs\n\nSUMMARY:\nSenior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I owned the offline-online evaluation harness \u2014 NDCG/MRR/recall calibrated to live A/B metrics, with an index footprint of ~600GB and incremental refresh every 15 min. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior NLP Engineer at Niramai (2022-02-17 to Present)\n  Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.\n\n- Senior Machine Learning Engineer at Krutrim (2018-11-05 to 2022-02-17)\n  Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.\n\nEDUCATION:\n- Ph.D in Artificial Intelligence from IIT Delhi (2009 - 2014)\n\nSKILLS:\nTensorFlow (expert), OpenSearch (expert), FAISS (advanced), PEFT (expert), Feature Engineering (intermediate), Embeddings (expert), LangChain (expert), MLOps (advanced), Weaviate (expert), PyTorch (advanced), Image Classification (advanced), Semantic Search (advanced), LlamaIndex (expert)",
        "parsed": {
            "summary": "Senior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I owned the offline-online evaluation harness \u2014 NDCG/MRR/recall calibrated to live A/B metrics, with an index footprint of ~600GB and incremental refresh every 15 min. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "TensorFlow",
                "OpenSearch",
                "FAISS",
                "PEFT",
                "Feature Engineering",
                "Embeddings",
                "LangChain",
                "MLOps"
            ],
            "milestones": [
                "Completed 7.8 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in TensorFlow, OpenSearch, FAISS."
            ]
        }
    },
    "CAND_0008239": {
        "id": "CAND_0008239",
        "fileName": "advik_iyer_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 12 mins ago",
        "text": "ADVIK IYER\nCandidate ID: CAND_0008239 | Location: Jaipur, Rajasthan, India\nHeadline: AI Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 4.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- AI Engineer at Apple (2022-06-17 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- M.E. in Computer Science from IIT Hyderabad (2001 - 2006)\n\nSKILLS:\nMilvus (expert), Computer Vision (intermediate), Feature Engineering (intermediate), Semantic Search (advanced), Diffusion Models (advanced), Elasticsearch (advanced), LangChain (expert), Weaviate (advanced), Forecasting (advanced), Recommendation Systems (advanced), Vector Search (expert), MLflow (advanced), Python (advanced), BentoML (advanced), PyTorch (expert), FAISS (expert), scikit-learn (advanced), PEFT (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 4.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Milvus",
                "Computer Vision",
                "Feature Engineering",
                "Semantic Search",
                "Diffusion Models",
                "Elasticsearch",
                "LangChain",
                "Weaviate"
            ],
            "milestones": [
                "Completed 4.0 years of professional experience across 1 companies.",
                "Achieved high skill proficiency in Milvus, Computer Vision, Feature Engineering."
            ]
        }
    },
    "CAND_0046064": {
        "id": "CAND_0046064",
        "fileName": "saanvi_naidu_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 14 mins ago",
        "text": "SAANVI NAIDU\nCandidate ID: CAND_0046064 | Location: Coimbatore, Tamil Nadu, India\nHeadline: Senior NLP Engineer | LLMs, RAG, Vector Search | ex-Top Tech\n\nSUMMARY:\nSenior AI engineer with 8.9 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, operating at single-digit-millisecond p95 retrieval latency. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior NLP Engineer at Salesforce (2023-06-12 to Present)\n  Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.\n\n- Lead AI Engineer at Verloop.io (2020-06-27 to 2023-04-13)\n  Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.\n\n- Senior ML Engineer \u2014 Search & Ranking at Amazon (2017-07-13 to 2020-06-27)\n  Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.\n\nEDUCATION:\n- M.Tech in Artificial Intelligence from IIT Hyderabad (2003 - 2006)\n- B.Tech in Artificial Intelligence from BITS Pilani (2012 - 2017)\n\nSKILLS:\nPython (expert), Image Classification (advanced), OpenCV (advanced), Pinecone (expert), Haystack (expert), Six Sigma (intermediate), TTS (advanced), Diffusion Models (intermediate), BM25 (expert), YOLO (advanced), OpenSearch (advanced), PEFT (expert), Deep Learning (advanced), Elasticsearch (expert), QLoRA (advanced), Semantic Search (advanced)",
        "parsed": {
            "summary": "Senior AI engineer with 8.9 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, operating at single-digit-millisecond p95 retrieval latency. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Python",
                "Image Classification",
                "OpenCV",
                "Pinecone",
                "Haystack",
                "Six Sigma",
                "TTS",
                "Diffusion Models"
            ],
            "milestones": [
                "Completed 8.9 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Python, Image Classification, OpenCV."
            ]
        }
    },
    "CAND_0079284": {
        "id": "CAND_0079284",
        "fileName": "ishaan_dutta_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 16 mins ago",
        "text": "ISHAAN DUTTA\nCandidate ID: CAND_0079284 | Location: Hyderabad, Telangana, India\nHeadline: Machine Learning Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 4.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at Google (2023-06-12 to Present)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\n- Machine Learning Engineer at Swiggy (2021-07-22 to 2023-05-13)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- M.S. in Computer Science from IIT Roorkee (2013 - 2018)\n\nSKILLS:\nRecommendation Systems (expert), scikit-learn (advanced), QLoRA (advanced), LlamaIndex (expert), Illustrator (intermediate), Project Management (beginner), Qdrant (expert), ASR (advanced), Terraform (intermediate), Feature Engineering (advanced), Weights & Biases (intermediate), Fine-tuning LLMs (advanced), Elasticsearch (expert), NLP (expert), Machine Learning (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 4.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Recommendation Systems",
                "scikit-learn",
                "QLoRA",
                "LlamaIndex",
                "Illustrator",
                "Project Management",
                "Qdrant",
                "ASR"
            ],
            "milestones": [
                "Completed 4.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Recommendation Systems, scikit-learn, QLoRA."
            ]
        }
    },
    "CAND_0030031": {
        "id": "CAND_0030031",
        "fileName": "anil_joshi_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 18 mins ago",
        "text": "ANIL JOSHI\nCandidate ID: CAND_0030031 | Location: Trivandrum, Kerala, India\nHeadline: AI Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- AI Engineer at Microsoft (2025-05-02 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- Senior Data Scientist at Amazon (2023-02-05 to 2025-04-25)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Search Engineer at Google (2020-11-17 to 2023-02-05)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\nEDUCATION:\n- B.Sc in Data Science from IIT Bombay (2004 - 2008)\n\nSKILLS:\nInformation Retrieval (advanced), PyTorch (advanced), Object Detection (advanced), Python (expert), NLP (expert), RAG (expert), OpenCV (advanced), LoRA (expert), QLoRA (expert), BM25 (advanced), Time Series (intermediate), Sentence Transformers (advanced), YOLO (intermediate), Milvus (advanced), Vector Search (expert), scikit-learn (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Information Retrieval",
                "PyTorch",
                "Object Detection",
                "Python",
                "NLP",
                "RAG",
                "OpenCV",
                "LoRA"
            ],
            "milestones": [
                "Completed 5.7 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Information Retrieval, PyTorch, Object Detection."
            ]
        }
    },
    "CAND_0081846": {
        "id": "CAND_0081846",
        "fileName": "arjun_khanna_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 20 mins ago",
        "text": "ARJUN KHANNA\nCandidate ID: CAND_0081846 | Location: Jaipur, Rajasthan, India\nHeadline: Lead AI Engineer | LLMs, RAG, Vector Search | ex-Top Tech\n\nSUMMARY:\nSenior AI engineer with 6.7 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is \u2014 usually it's both. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Lead AI Engineer at Razorpay (2024-03-08 to Present)\n  Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.\n\n- Senior Machine Learning Engineer at Paytm (2019-11-30 to 2024-03-08)\n  Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout.\n\nEDUCATION:\n- B.E. in Data Science from IIT Hyderabad (2006 - 2009)\n- Ph.D in Computer Engineering from IIT Delhi (2015 - 2019)\n\nSKILLS:\nData Science (advanced), Information Retrieval (expert), LlamaIndex (advanced), pgvector (advanced), Forecasting (advanced), Learning to Rank (expert), Elasticsearch (expert), PyTorch (advanced), Vector Search (expert), scikit-learn (advanced), Deep Learning (advanced), Recommendation Systems (expert), Python (expert), Embeddings (expert), Semantic Search (advanced), BM25 (expert), Machine Learning (expert), Qdrant (expert)",
        "parsed": {
            "summary": "Senior AI engineer with 6.7 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is \u2014 usually it's both. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Data Science",
                "Information Retrieval",
                "LlamaIndex",
                "pgvector",
                "Forecasting",
                "Learning to Rank",
                "Elasticsearch",
                "PyTorch"
            ],
            "milestones": [
                "Completed 6.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Data Science, Information Retrieval, LlamaIndex."
            ]
        }
    },
    "CAND_0062247": {
        "id": "CAND_0062247",
        "fileName": "saanvi_trivedi_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 22 mins ago",
        "text": "SAANVI TRIVEDI\nCandidate ID: CAND_0062247 | Location: Kochi, Kerala, India\nHeadline: AI Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 7.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- AI Engineer at Google (2023-05-13 to Present)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- NLP Engineer at Dream11 (2019-04-04 to 2023-05-13)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- M.E. in Machine Learning from IIT Bombay (2015 - 2019)\n- B.Sc in Information Technology from COEP Pune (2005 - 2009)\n\nSKILLS:\nImage Classification (advanced), OpenCV (intermediate), Reinforcement Learning (intermediate), ASR (intermediate), Pinecone (expert), Vector Search (expert), Qdrant (expert), RAG (advanced), Computer Vision (intermediate), PEFT (advanced), Speech Recognition (intermediate), Illustrator (beginner), Hugging Face Transformers (expert), Learning to Rank (advanced), Information Retrieval (advanced), Deep Learning (expert), BM25 (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 7.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Image Classification",
                "OpenCV",
                "Reinforcement Learning",
                "ASR",
                "Pinecone",
                "Vector Search",
                "Qdrant",
                "RAG"
            ],
            "milestones": [
                "Completed 7.3 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Image Classification, OpenCV, Reinforcement Learning."
            ]
        }
    },
    "CAND_0068811": {
        "id": "CAND_0068811",
        "fileName": "krishna_mittal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 24 mins ago",
        "text": "KRISHNA MITTAL\nCandidate ID: CAND_0068811 | Location: Pune, Maharashtra, India\nHeadline: Applied ML Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 8.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Freshworks (2024-11-03 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- AI Engineer at Yellow.ai (2022-09-01 to 2024-10-20)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Recommendation Systems Engineer at Meesho (2020-08-12 to 2022-09-01)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Search Engineer at Salesforce (2018-05-25 to 2020-06-13)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\nEDUCATION:\n- Ph.D in Artificial Intelligence from Thapar University (2013 - 2017)\n- M.E. in Information Technology from SRM Chennai (2014 - 2017)\n\nSKILLS:\nData Science (intermediate), Vector Search (expert), Speech Recognition (advanced), TTS (advanced), Kubeflow (intermediate), Qdrant (expert), scikit-learn (expert), TensorFlow (expert), Embeddings (advanced), pgvector (expert), Pinecone (expert), Time Series (advanced), PEFT (advanced), gRPC (beginner), Haystack (expert), OpenSearch (expert), Weaviate (advanced), Agile (beginner), React (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 8.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Data Science",
                "Vector Search",
                "Speech Recognition",
                "TTS",
                "Kubeflow",
                "Qdrant",
                "scikit-learn",
                "TensorFlow"
            ],
            "milestones": [
                "Completed 8.0 years of professional experience across 4 companies.",
                "Achieved high skill proficiency in Data Science, Vector Search, Speech Recognition."
            ]
        }
    },
    "CAND_0015528": {
        "id": "CAND_0015528",
        "fileName": "aisha_reddy_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 26 mins ago",
        "text": "AISHA REDDY\nCandidate ID: CAND_0015528 | Location: Coimbatore, Tamil Nadu, India\nHeadline: Applied ML Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 7.4 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Krutrim (2022-02-17 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- Senior Data Scientist at Locobuzz (2020-06-27 to 2022-02-17)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Senior Data Scientist at Rephrase.ai (2019-04-04 to 2020-06-27)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- Ph.D in Data Science from IIIT Bangalore (2010 - 2014)\n- B.E. in Computer Science from Chandigarh University (2009 - 2012)\n\nSKILLS:\nDocker (beginner), Weaviate (expert), BentoML (advanced), Weights & Biases (advanced), LangChain (expert), pgvector (advanced), TensorFlow (advanced), Feature Engineering (intermediate), ASR (intermediate), Information Retrieval (expert), Time Series (intermediate), OpenSearch (expert), LoRA (advanced), Object Detection (intermediate), Deep Learning (expert), FAISS (expert), Prompt Engineering (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 7.4 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Docker",
                "Weaviate",
                "BentoML",
                "Weights & Biases",
                "LangChain",
                "pgvector",
                "TensorFlow",
                "Feature Engineering"
            ],
            "milestones": [
                "Completed 7.4 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Docker, Weaviate, BentoML."
            ]
        }
    },
    "CAND_0009024": {
        "id": "CAND_0009024",
        "fileName": "avni_sharma_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 28 mins ago",
        "text": "AVNI SHARMA\nCandidate ID: CAND_0009024 | Location: Chennai, Tamil Nadu, India\nHeadline: Search Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 5.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at Google (2023-09-10 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- Applied ML Engineer at Aganitha (2021-05-23 to 2023-09-10)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- M.E. in Machine Learning from Stanford University (2010 - 2015)\n\nSKILLS:\nYOLO (advanced), Qdrant (advanced), dbt (beginner), CSS (beginner), PEFT (expert), FAISS (advanced), Machine Learning (advanced), Airflow (beginner), PyTorch (advanced), TTS (advanced), MLOps (advanced), LlamaIndex (advanced), Recommendation Systems (expert), MLflow (advanced), OpenSearch (expert), LoRA (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 5.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "YOLO",
                "Qdrant",
                "dbt",
                "CSS",
                "PEFT",
                "FAISS",
                "Machine Learning",
                "Airflow"
            ],
            "milestones": [
                "Completed 5.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in YOLO, Qdrant, dbt."
            ]
        }
    },
    "CAND_0032216": {
        "id": "CAND_0032216",
        "fileName": "rahul_shetty_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 30 mins ago",
        "text": "RAHUL SHETTY\nCandidate ID: CAND_0032216 | Location: Chennai, Tamil Nadu, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 6.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- ML Engineer at upGrad (2025-05-02 to Present)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\n- Junior ML Engineer at Zoho (2022-10-15 to 2025-05-02)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\n- AI Research Engineer at Vedantu (2020-06-27 to 2022-10-15)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\nEDUCATION:\n- B.Tech in Computer Science from VIT Chennai (2011 - 2014)\n- M.Tech in Artificial Intelligence from IISc Bangalore (2010 - 2013)\n\nSKILLS:\nOpenCV (intermediate), Time Series (advanced), Object Detection (intermediate), Learning to Rank (advanced), Information Retrieval (advanced), PyTorch (advanced), Qdrant (intermediate), Sentence Transformers (advanced), QLoRA (intermediate), Hugging Face Transformers (advanced), Docker (beginner), CNN (intermediate), MLOps (intermediate), Vector Search (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 6.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "OpenCV",
                "Time Series",
                "Object Detection",
                "Learning to Rank",
                "Information Retrieval",
                "PyTorch",
                "Qdrant",
                "Sentence Transformers"
            ],
            "milestones": [
                "Completed 6.1 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in OpenCV, Time Series, Object Detection."
            ]
        }
    },
    "CAND_0066690": {
        "id": "CAND_0066690",
        "fileName": "advik_sen_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 32 mins ago",
        "text": "ADVIK SEN\nCandidate ID: CAND_0066690 | Location: Gurgaon, Haryana, India\nHeadline: ML Engineer | 4.8 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 4.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- ML Engineer at Freshworks (2023-09-10 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- Data Scientist at Genpact AI (2021-09-20 to 2023-09-10)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- M.Sc in Data Science from SRM Chennai (2012 - 2015)\n\nSKILLS:\nHugging Face Transformers (advanced), Sentence Transformers (intermediate), Angular (intermediate), pgvector (intermediate), Data Science (intermediate), Semantic Search (intermediate), Object Detection (advanced), Webpack (intermediate), PEFT (intermediate), Speech Recognition (advanced), Elasticsearch (intermediate), TTS (intermediate), TensorFlow (advanced), YOLO (advanced), Pinecone (intermediate), Kubeflow (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "Hugging Face Transformers",
                "Sentence Transformers",
                "Angular",
                "pgvector",
                "Data Science",
                "Semantic Search",
                "Object Detection",
                "Webpack"
            ],
            "milestones": [
                "Completed 4.8 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Hugging Face Transformers, Sentence Transformers, Angular."
            ]
        }
    },
    "CAND_0038368": {
        "id": "CAND_0038368",
        "fileName": "suresh_reddy_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 34 mins ago",
        "text": "SURESH REDDY\nCandidate ID: CAND_0038368 | Location: Hyderabad, Telangana, India\nHeadline: ML Engineer | 5.4 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 5.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- ML Engineer at PhonePe (2023-12-09 to Present)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\n- Junior ML Engineer at Zomato (2021-02-22 to 2023-12-09)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\nEDUCATION:\n- M.E. in Data Science from IIT Bombay (2005 - 2010)\n\nSKILLS:\nOpenCV (intermediate), Image Classification (intermediate), YOLO (advanced), Embeddings (advanced), FAISS (intermediate), LangChain (intermediate), BM25 (advanced), Django (intermediate), Vue.js (beginner), QLoRA (advanced), AWS (intermediate), Time Series (intermediate), NLP (advanced), Forecasting (advanced), Kubeflow (advanced), MLflow (advanced), Snowflake (intermediate), Speech Recognition (advanced), Fine-tuning LLMs (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "OpenCV",
                "Image Classification",
                "YOLO",
                "Embeddings",
                "FAISS",
                "LangChain",
                "BM25",
                "Django"
            ],
            "milestones": [
                "Completed 5.4 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in OpenCV, Image Classification, YOLO."
            ]
        }
    },
    "CAND_0070808": {
        "id": "CAND_0070808",
        "fileName": "vihaan_shah_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 36 mins ago",
        "text": "VIHAAN SHAH\nCandidate ID: CAND_0070808 | Location: Sydney, Australia\nHeadline: Junior ML Engineer | 6.8 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 6.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- Junior ML Engineer at HCL (2023-06-12 to Present)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\n- Junior ML Engineer at Krutrim (2020-03-29 to 2023-06-12)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- Senior Software Engineer (ML) at Rephrase.ai (2019-09-24 to 2020-03-22)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\nEDUCATION:\n- M.Tech in Data Science from Christ University (2006 - 2010)\n\nSKILLS:\nReinforcement Learning (intermediate), OpenCV (advanced), Fine-tuning LLMs (intermediate), Feature Engineering (intermediate), Photoshop (intermediate), Speech Recognition (advanced), Terraform (beginner), OpenSearch (advanced), Deep Learning (advanced), PostgreSQL (intermediate), pgvector (advanced), LLMs (intermediate), NLP (advanced), Pinecone (intermediate), Node.js (beginner)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 6.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "Reinforcement Learning",
                "OpenCV",
                "Fine-tuning LLMs",
                "Feature Engineering",
                "Photoshop",
                "Speech Recognition",
                "Terraform",
                "OpenSearch"
            ],
            "milestones": [
                "Completed 6.8 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Reinforcement Learning, OpenCV, Fine-tuning LLMs."
            ]
        }
    },
    "CAND_0040887": {
        "id": "CAND_0040887",
        "fileName": "meera_kumar_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 38 mins ago",
        "text": "MEERA KUMAR\nCandidate ID: CAND_0040887 | Location: Toronto, Canada\nHeadline: Machine Learning Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 4.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at Netflix (2022-08-16 to Present)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- AI Engineer at Unacademy (2021-10-20 to 2022-07-17)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\nEDUCATION:\n- B.Sc in Artificial Intelligence from SRM University (2016 - 2021)\n\nSKILLS:\nReinforcement Learning (advanced), Computer Vision (advanced), SEO (beginner), FAISS (advanced), MLflow (intermediate), LoRA (expert), LangChain (expert), Python (expert), PEFT (expert), Milvus (expert), Deep Learning (advanced), Recommendation Systems (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 4.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Reinforcement Learning",
                "Computer Vision",
                "SEO",
                "FAISS",
                "MLflow",
                "LoRA",
                "LangChain",
                "Python"
            ],
            "milestones": [
                "Completed 4.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Reinforcement Learning, Computer Vision, SEO."
            ]
        }
    },
    "CAND_0080766": {
        "id": "CAND_0080766",
        "fileName": "kiara_mittal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 40 mins ago",
        "text": "KIARA MITTAL\nCandidate ID: CAND_0080766 | Location: Coimbatore, Tamil Nadu, India\nHeadline: Senior Engineer | Search & Discovery Infrastructure\n\nSUMMARY:\nSenior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer \u2014 the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes \u2014 over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want \u2014 so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.\n\nEXPERIENCE:\n- Staff Machine Learning Engineer at Salesforce (2023-04-13 to Present)\n  Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer \u2014 feature monitoring, drift detection, retraining cadence \u2014 rather than the modeling itself. Worked closely with the product and growth teams.\n\n- Staff Machine Learning Engineer at Aganitha (2022-04-18 to 2023-04-13)\n  Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side \u2014 building offline metrics that actually correlated with online engagement, which turned out to be the hardest part.\n\n- Lead AI Engineer at Swiggy (2018-09-06 to 2022-03-19)\n  Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling \u2014 it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months.\n\n- Senior Machine Learning Engineer at Haptik (2017-08-28 to 2018-08-23)\n  Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout.\n\nEDUCATION:\n- M.Sc in Computer Engineering from RV College of Engineering (2010 - 2015)\n- M.E. in Computer Science from NIT Surathkal (2018 - 2021)\n\nSKILLS:\nSearch Backend (expert), LoRA (expert), Vue.js (intermediate), Tally (intermediate), Search & Discovery (expert), MLOps (advanced), Search Infrastructure (expert), MLflow (advanced), Open-source ML libraries (expert), Information Retrieval Systems (advanced), Elasticsearch (advanced), Computer Vision (advanced), Deep Learning (expert), Natural Language Processing (advanced), QLoRA (expert), YOLO (intermediate), OpenSearch (advanced), Python (expert), Milvus (advanced), ASR (advanced), TensorFlow (expert)",
        "parsed": {
            "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer \u2014 the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes \u2014 over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want \u2014 so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
            "skills": [
                "Search Backend",
                "LoRA",
                "Vue.js",
                "Tally",
                "Search & Discovery",
                "MLOps",
                "Search Infrastructure",
                "MLflow"
            ],
            "milestones": [
                "Completed 8.8 years of professional experience across 4 companies.",
                "Achieved high skill proficiency in Search Backend, LoRA, Vue.js."
            ]
        }
    },
    "CAND_0072091": {
        "id": "CAND_0072091",
        "fileName": "riya_arora_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 42 mins ago",
        "text": "RIYA ARORA\nCandidate ID: CAND_0072091 | Location: Trivandrum, Kerala, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 4.6 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- ML Engineer at Krutrim (2023-08-11 to Present)\n  Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer.\n\n- AI Research Engineer at Meesho (2021-12-19 to 2023-08-11)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- B.Sc in Computer Engineering from IIT Kharagpur (2017 - 2022)\n- M.Tech in Artificial Intelligence from UC Berkeley (2017 - 2020)\n\nSKILLS:\nDeep Learning (intermediate), NLP (intermediate), BM25 (intermediate), Information Retrieval (intermediate), Fine-tuning LLMs (advanced), LlamaIndex (advanced), Docker (beginner), Elasticsearch (intermediate), Kubeflow (advanced), Object Detection (advanced), ASR (advanced), LangChain (intermediate), BentoML (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.6 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "Deep Learning",
                "NLP",
                "BM25",
                "Information Retrieval",
                "Fine-tuning LLMs",
                "LlamaIndex",
                "Docker",
                "Elasticsearch"
            ],
            "milestones": [
                "Completed 4.6 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Deep Learning, NLP, BM25."
            ]
        }
    },
    "CAND_0037566": {
        "id": "CAND_0037566",
        "fileName": "ritu_nair_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 44 mins ago",
        "text": "RITU NAIR\nCandidate ID: CAND_0037566 | Location: Bangalore, Karnataka, India\nHeadline: Machine Learning Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at LinkedIn (2022-03-19 to Present)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Machine Learning Engineer at Paytm (2019-08-02 to 2022-02-17)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\nEDUCATION:\n- B.Tech in Information Technology from Jadavpur University (2011 - 2014)\n\nSKILLS:\nPinecone (expert), Time Series (advanced), LlamaIndex (expert), NLP (advanced), LoRA (advanced), QLoRA (expert), BM25 (advanced), Feature Engineering (advanced), Forecasting (advanced), MLflow (advanced), Spring Boot (beginner), TensorFlow (expert), LLMs (expert), YOLO (advanced), LangChain (expert), Elasticsearch (expert), Reinforcement Learning (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Pinecone",
                "Time Series",
                "LlamaIndex",
                "NLP",
                "LoRA",
                "QLoRA",
                "BM25",
                "Feature Engineering"
            ],
            "milestones": [
                "Completed 6.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Pinecone, Time Series, LlamaIndex."
            ]
        }
    },
    "CAND_0018499": {
        "id": "CAND_0018499",
        "fileName": "aarav_trivedi_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 46 mins ago",
        "text": "AARAV TRIVEDI\nCandidate ID: CAND_0018499 | Location: Noida, Uttar Pradesh, India\nHeadline: Senior Machine Learning Engineer | Building AI-native search & ranking systems\n\nSUMMARY:\nSenior AI engineer with 7.2 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is \u2014 usually it's both. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior Machine Learning Engineer at Zomato (2024-04-07 to Present)\n  Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.\n\n- Staff Machine Learning Engineer at Google (2022-10-15 to 2024-04-07)\n  Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.\n\n- Senior Machine Learning Engineer at Flipkart (2019-04-27 to 2022-10-08)\n  Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.\n\nEDUCATION:\n- B.Sc in Artificial Intelligence from Massachusetts Institute of Technology (2013 - 2017)\n- M.S. in Data Science from NIT Surathkal (2017 - 2021)\n\nSKILLS:\nDeep Learning (expert), Weaviate (expert), Recommendation Systems (expert), scikit-learn (expert), Diffusion Models (advanced), Pinecone (advanced), Information Retrieval (advanced), Milvus (expert), QLoRA (expert), RAG (expert), Embeddings (expert), Learning to Rank (expert), CNN (intermediate), Go (beginner), BM25 (advanced), LangChain (advanced), Weights & Biases (intermediate)",
        "parsed": {
            "summary": "Senior AI engineer with 7.2 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is \u2014 usually it's both. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Deep Learning",
                "Weaviate",
                "Recommendation Systems",
                "scikit-learn",
                "Diffusion Models",
                "Pinecone",
                "Information Retrieval",
                "Milvus"
            ],
            "milestones": [
                "Completed 7.2 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Deep Learning, Weaviate, Recommendation Systems."
            ]
        }
    },
    "CAND_0058688": {
        "id": "CAND_0058688",
        "fileName": "anjali_kapoor_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 48 mins ago",
        "text": "ANJALI KAPOOR\nCandidate ID: CAND_0058688 | Location: Berlin, Germany\nHeadline: AI Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- AI Engineer at Vedantu (2023-05-13 to Present)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Recommendation Systems Engineer at Apple (2019-10-31 to 2023-05-13)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- M.Tech in Machine Learning from Massachusetts Institute of Technology (2008 - 2012)\n\nSKILLS:\nOpenCV (intermediate), CNN (intermediate), scikit-learn (expert), Object Detection (advanced), LlamaIndex (expert), Computer Vision (advanced), Embeddings (expert), Snowflake (beginner), TensorFlow (advanced), Diffusion Models (advanced), Information Retrieval (expert), Milvus (expert), Image Classification (intermediate), Machine Learning (expert), QLoRA (advanced), PostgreSQL (beginner), Semantic Search (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "OpenCV",
                "CNN",
                "scikit-learn",
                "Object Detection",
                "LlamaIndex",
                "Computer Vision",
                "Embeddings",
                "Snowflake"
            ],
            "milestones": [
                "Completed 6.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in OpenCV, CNN, scikit-learn."
            ]
        }
    },
    "CAND_0016432": {
        "id": "CAND_0016432",
        "fileName": "advaith_joshi_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 50 mins ago",
        "text": "ADVAITH JOSHI\nCandidate ID: CAND_0016432 | Location: Gurgaon, Haryana, India\nHeadline: AI Research Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 4.6 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- AI Research Engineer at Meesho (2024-05-07 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- Junior ML Engineer at Freshworks (2021-12-12 to 2024-04-30)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\nEDUCATION:\n- M.Sc in Machine Learning from COEP Pune (2011 - 2015)\n\nSKILLS:\nTime Series (advanced), Kubeflow (intermediate), Machine Learning (advanced), NLP (advanced), LoRA (intermediate), Object Detection (advanced), Hugging Face Transformers (advanced), OpenCV (intermediate), Computer Vision (intermediate), Data Science (intermediate), Airflow (intermediate), Qdrant (advanced), Figma (intermediate), Statistical Modeling (intermediate), Pinecone (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.6 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "Time Series",
                "Kubeflow",
                "Machine Learning",
                "NLP",
                "LoRA",
                "Object Detection",
                "Hugging Face Transformers",
                "OpenCV"
            ],
            "milestones": [
                "Completed 4.6 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Time Series, Kubeflow, Machine Learning."
            ]
        }
    },
    "CAND_0052328": {
        "id": "CAND_0052328",
        "fileName": "vikram_banerjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 52 mins ago",
        "text": "VIKRAM BANERJEE\nCandidate ID: CAND_0052328 | Location: Pune, Maharashtra, India\nHeadline: Recommendation Systems Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Recommendation Systems Engineer at Amazon (2022-02-17 to Present)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Senior Data Scientist at Observe.AI (2019-12-30 to 2022-01-18)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\nEDUCATION:\n- B.Sc in Computer Science from VIT Vellore (2013 - 2016)\n- M.Tech in Computer Science from Stanford University (2017 - 2020)\n\nSKILLS:\nObject Detection (intermediate), LoRA (advanced), OpenSearch (expert), Reinforcement Learning (intermediate), QLoRA (expert), Image Classification (advanced), Recommendation Systems (advanced), ASR (intermediate), Computer Vision (intermediate), Learning to Rank (expert), Fine-tuning LLMs (advanced), scikit-learn (expert), Vector Search (expert), YOLO (advanced), Sentence Transformers (expert), Python (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Object Detection",
                "LoRA",
                "OpenSearch",
                "Reinforcement Learning",
                "QLoRA",
                "Image Classification",
                "Recommendation Systems",
                "ASR"
            ],
            "milestones": [
                "Completed 6.5 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Object Detection, LoRA, OpenSearch."
            ]
        }
    },
    "CAND_0003841": {
        "id": "CAND_0003841",
        "fileName": "anjali_krishnan_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 54 mins ago",
        "text": "ANJALI KRISHNAN\nCandidate ID: CAND_0003841 | Location: Pune, Maharashtra, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.0 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- ML Engineer at Tech Mahindra (2022-11-14 to Present)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\n- Computer Vision Engineer at InMobi (2021-07-22 to 2022-11-14)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- M.E. in Computer Engineering from Stanford University (2004 - 2007)\n\nSKILLS:\nAirflow (intermediate), Spring Boot (intermediate), Diffusion Models (intermediate), Statistical Modeling (intermediate), Pinecone (advanced), Object Detection (advanced), ASR (intermediate), Weights & Biases (advanced), Fine-tuning LLMs (intermediate), Reinforcement Learning (intermediate), Recommendation Systems (intermediate), Sentence Transformers (advanced), Image Classification (intermediate), LangChain (advanced), Accounting (beginner), Data Science (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.0 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "Airflow",
                "Spring Boot",
                "Diffusion Models",
                "Statistical Modeling",
                "Pinecone",
                "Object Detection",
                "ASR",
                "Weights & Biases"
            ],
            "milestones": [
                "Completed 5.0 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Airflow, Spring Boot, Diffusion Models."
            ]
        }
    },
    "CAND_0049538": {
        "id": "CAND_0049538",
        "fileName": "sanjay_bose_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 56 mins ago",
        "text": "SANJAY BOSE\nCandidate ID: CAND_0049538 | Location: Jaipur, Rajasthan, India\nHeadline: Applied ML Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 5.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Saarthi.ai (2023-02-12 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Recommendation Systems Engineer at PolicyBazaar (2021-07-22 to 2023-02-12)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- AI Engineer at Zoho (2020-08-26 to 2021-05-23)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\nEDUCATION:\n- B.E. in Data Science from NIT Warangal (2004 - 2009)\n\nSKILLS:\nLlamaIndex (expert), Feature Engineering (advanced), MLflow (advanced), Computer Vision (intermediate), TTS (advanced), Learning to Rank (expert), OpenSearch (expert), Vector Search (advanced), Milvus (expert), QLoRA (expert), Embeddings (advanced), CNN (intermediate), LLMs (expert), Deep Learning (advanced), Recommendation Systems (advanced), Elasticsearch (expert), PyTorch (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 5.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "LlamaIndex",
                "Feature Engineering",
                "MLflow",
                "Computer Vision",
                "TTS",
                "Learning to Rank",
                "OpenSearch",
                "Vector Search"
            ],
            "milestones": [
                "Completed 5.8 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in LlamaIndex, Feature Engineering, MLflow."
            ]
        }
    },
    "CAND_0008425": {
        "id": "CAND_0008425",
        "fileName": "myra_krishnan_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 58 mins ago",
        "text": "MYRA KRISHNAN\nCandidate ID: CAND_0008425 | Location: Kolkata, West Bengal, India\nHeadline: Senior NLP Engineer | Production ML at scale | 7.8+ yrs\n\nSUMMARY:\nSenior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, operating at single-digit-millisecond p95 retrieval latency. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I've made all the standard mistakes \u2014 embedding everything before defining the metric, over-investing in fine-tuning, optimizing offline metrics that don't move online \u2014 so I notice them faster now. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior NLP Engineer at Ola (2024-05-07 to Present)\n  Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout.\n\n- Senior ML Engineer \u2014 Search & Ranking at Zomato (2020-05-28 to 2024-03-08)\n  Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.\n\n- Lead AI Engineer at Amazon (2018-08-30 to 2020-05-21)\n  Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.\n\nEDUCATION:\n- M.S. in Computer Engineering from BITS Pilani (2005 - 2009)\n\nSKILLS:\nLearning to Rank (expert), Qdrant (expert), Weights & Biases (advanced), pgvector (expert), Sentence Transformers (expert), NLP (expert), Haystack (expert), TensorFlow (advanced), Python (expert), Prompt Engineering (advanced), Image Classification (intermediate), Object Detection (advanced), Semantic Search (advanced), LoRA (expert), Recommendation Systems (expert), Information Retrieval (expert), Hugging Face Transformers (expert)",
        "parsed": {
            "summary": "Senior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, operating at single-digit-millisecond p95 retrieval latency. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I've made all the standard mistakes \u2014 embedding everything before defining the metric, over-investing in fine-tuning, optimizing offline metrics that don't move online \u2014 so I notice them faster now. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Learning to Rank",
                "Qdrant",
                "Weights & Biases",
                "pgvector",
                "Sentence Transformers",
                "NLP",
                "Haystack",
                "TensorFlow"
            ],
            "milestones": [
                "Completed 7.8 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Learning to Rank, Qdrant, Weights & Biases."
            ]
        }
    },
    "CAND_0013665": {
        "id": "CAND_0013665",
        "fileName": "nisha_joshi_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 60 mins ago",
        "text": "NISHA JOSHI\nCandidate ID: CAND_0013665 | Location: Trivandrum, Kerala, India\nHeadline: Senior Software Engineer (ML) | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- Senior Software Engineer (ML) at InMobi (2024-09-04 to Present)\n  Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer.\n\n- AI Research Engineer at Ola (2021-05-23 to 2024-09-04)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- M.Sc in Artificial Intelligence from Delhi College of Engineering (2017 - 2022)\n- M.Tech in Data Science from VIT Chennai (2013 - 2017)\n\nSKILLS:\nImage Classification (advanced), FastAPI (intermediate), Learning to Rank (intermediate), ASR (advanced), Terraform (beginner), MLOps (advanced), Weights & Biases (intermediate), Django (intermediate), Machine Learning (advanced), Qdrant (advanced), QLoRA (advanced), Embeddings (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Image Classification",
                "FastAPI",
                "Learning to Rank",
                "ASR",
                "Terraform",
                "MLOps",
                "Weights & Biases",
                "Django"
            ],
            "milestones": [
                "Completed 5.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Image Classification, FastAPI, Learning to Rank."
            ]
        }
    },
    "CAND_0088025": {
        "id": "CAND_0088025",
        "fileName": "amit_arora_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 62 mins ago",
        "text": "AMIT ARORA\nCandidate ID: CAND_0088025 | Location: Jaipur, Rajasthan, India\nHeadline: Staff Machine Learning Engineer | Building AI-native search & ranking systems\n\nSUMMARY:\nSenior AI engineer with 8.6 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I'm comfortable across the stack from infra to algorithms, but my heart is in retrieval and ranking. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Staff Machine Learning Engineer at Yellow.ai (2022-09-15 to Present)\n  Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.\n\n- Staff Machine Learning Engineer at Niramai (2019-02-03 to 2022-09-15)\n  Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.\n\n- Senior Machine Learning Engineer at Genpact AI (2017-12-10 to 2019-01-04)\n  Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.\n\nEDUCATION:\n- Ph.D in Data Science from COEP Pune (2004 - 2009)\n\nSKILLS:\nPinecone (advanced), QLoRA (expert), LLMs (expert), Hugging Face Transformers (expert), RAG (expert), SAP (beginner), TensorFlow (expert), LoRA (advanced), Flask (beginner), Prompt Engineering (advanced), BM25 (expert), Elasticsearch (expert), MLOps (intermediate), pgvector (expert), Learning to Rank (expert), Deep Learning (advanced), Python (expert), NLP (expert), YOLO (advanced)",
        "parsed": {
            "summary": "Senior AI engineer with 8.6 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I'm comfortable across the stack from infra to algorithms, but my heart is in retrieval and ranking. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Pinecone",
                "QLoRA",
                "LLMs",
                "Hugging Face Transformers",
                "RAG",
                "SAP",
                "TensorFlow",
                "LoRA"
            ],
            "milestones": [
                "Completed 8.6 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Pinecone, QLoRA, LLMs."
            ]
        }
    },
    "CAND_0061655": {
        "id": "CAND_0061655",
        "fileName": "mira_banerjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 64 mins ago",
        "text": "MIRA BANERJEE\nCandidate ID: CAND_0061655 | Location: Jaipur, Rajasthan, India\nHeadline: Machine Learning Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 4.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at Krutrim (2022-11-14 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Recommendation Systems Engineer at Google (2021-12-19 to 2022-11-14)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- M.S. in Computer Engineering from NIT Warangal (2013 - 2016)\n\nSKILLS:\nHaystack (advanced), PEFT (expert), Pinecone (expert), Time Series (advanced), Machine Learning (expert), PyTorch (advanced), Flask (intermediate), Qdrant (advanced), Kubeflow (intermediate), LangChain (advanced), Deep Learning (advanced), NLP (expert), GANs (intermediate), BM25 (advanced), OpenSearch (expert), Elasticsearch (expert), REST APIs (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 4.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Haystack",
                "PEFT",
                "Pinecone",
                "Time Series",
                "Machine Learning",
                "PyTorch",
                "Flask",
                "Qdrant"
            ],
            "milestones": [
                "Completed 4.6 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Haystack, PEFT, Pinecone."
            ]
        }
    },
    "CAND_0083307": {
        "id": "CAND_0083307",
        "fileName": "neha_patel_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 66 mins ago",
        "text": "NEHA PATEL\nCandidate ID: CAND_0083307 | Location: Vizag, Andhra Pradesh, India\nHeadline: Search Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 7.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at CRED (2024-10-04 to Present)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Machine Learning Engineer at Netflix (2020-07-27 to 2024-10-04)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Machine Learning Engineer at Ola (2019-05-27 to 2020-07-20)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- NLP Engineer at Saarthi.ai (2018-10-15 to 2019-05-13)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- B.Sc in Machine Learning from COEP Pune (2007 - 2011)\n- Ph.D in Computer Engineering from VIT Chennai (2012 - 2015)\n\nSKILLS:\nOpenCV (advanced), scikit-learn (advanced), Embeddings (expert), Image Classification (intermediate), Weights & Biases (intermediate), QLoRA (expert), PEFT (expert), Pinecone (expert), GCP (beginner), Weaviate (expert), Semantic Search (advanced), Python (expert), Learning to Rank (advanced), MLflow (advanced), Vector Search (expert), pgvector (expert), Deep Learning (expert), Data Science (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 7.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "OpenCV",
                "scikit-learn",
                "Embeddings",
                "Image Classification",
                "Weights & Biases",
                "QLoRA",
                "PEFT",
                "Pinecone"
            ],
            "milestones": [
                "Completed 7.8 years of professional experience across 4 companies.",
                "Achieved high skill proficiency in OpenCV, scikit-learn, Embeddings."
            ]
        }
    },
    "CAND_0020708": {
        "id": "CAND_0020708",
        "fileName": "kiara_patel_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 68 mins ago",
        "text": "KIARA PATEL\nCandidate ID: CAND_0020708 | Location: Indore, Madhya Pradesh, India\nHeadline: Search Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at PolicyBazaar (2022-04-18 to Present)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\nEDUCATION:\n- M.Sc in Machine Learning from Jadavpur University (2006 - 2009)\n- B.E. in Data Science from Symbiosis International (2001 - 2006)\n\nSKILLS:\nTally (beginner), NLP (advanced), Data Science (advanced), Statistical Modeling (intermediate), scikit-learn (advanced), Kubeflow (intermediate), Learning to Rank (expert), Python (expert), Elasticsearch (advanced), OpenCV (advanced), LangChain (expert), LLMs (expert), YOLO (intermediate), Fine-tuning LLMs (expert), Prompt Engineering (expert), Weights & Biases (advanced), Sentence Transformers (expert), Milvus (advanced), TensorFlow (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Tally",
                "NLP",
                "Data Science",
                "Statistical Modeling",
                "scikit-learn",
                "Kubeflow",
                "Learning to Rank",
                "Python"
            ],
            "milestones": [
                "Completed 4.2 years of professional experience across 1 companies.",
                "Achieved high skill proficiency in Tally, NLP, Data Science."
            ]
        }
    },
    "CAND_0069905": {
        "id": "CAND_0069905",
        "fileName": "nisha_bansal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 70 mins ago",
        "text": "NISHA BANSAL\nCandidate ID: CAND_0069905 | Location: Bhubaneswar, Odisha, India\nHeadline: Applied ML Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 6.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Sarvam AI (2024-04-07 to Present)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- Machine Learning Engineer at Nykaa (2023-02-12 to 2024-03-08)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Recommendation Systems Engineer at Observe.AI (2019-11-30 to 2023-02-12)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\nEDUCATION:\n- M.E. in Computer Engineering from PES University (2003 - 2006)\n\nSKILLS:\nFlask (beginner), Redux (intermediate), LoRA (expert), Computer Vision (intermediate), Speech Recognition (advanced), Image Classification (advanced), Recommendation Systems (expert), Sentence Transformers (expert), LangChain (expert), TensorFlow (advanced), Hugging Face Transformers (advanced), MLOps (advanced), Forecasting (intermediate), Python (expert), Object Detection (intermediate), Weaviate (expert), Learning to Rank (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 6.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Flask",
                "Redux",
                "LoRA",
                "Computer Vision",
                "Speech Recognition",
                "Image Classification",
                "Recommendation Systems",
                "Sentence Transformers"
            ],
            "milestones": [
                "Completed 6.6 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Flask, Redux, LoRA."
            ]
        }
    },
    "CAND_0064888": {
        "id": "CAND_0064888",
        "fileName": "riya_kumar_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 72 mins ago",
        "text": "RIYA KUMAR\nCandidate ID: CAND_0064888 | Location: Vizag, Andhra Pradesh, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- ML Engineer at Verloop.io (2023-08-11 to Present)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\n- AI Research Engineer at Wipro (2021-11-19 to 2023-06-12)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\n- Senior Software Engineer (ML) at Nykaa (2020-08-26 to 2021-11-19)\n  Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer.\n\nEDUCATION:\n- B.E. in Computer Engineering from Carnegie Mellon University (2003 - 2008)\n\nSKILLS:\nGraphQL (beginner), Embeddings (intermediate), Learning to Rank (intermediate), TensorFlow (advanced), CNN (advanced), Time Series (advanced), pgvector (advanced), Elasticsearch (intermediate), Agile (intermediate), Fine-tuning LLMs (intermediate), Speech Recognition (advanced), Machine Learning (intermediate), MLflow (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "GraphQL",
                "Embeddings",
                "Learning to Rank",
                "TensorFlow",
                "CNN",
                "Time Series",
                "pgvector",
                "Elasticsearch"
            ],
            "milestones": [
                "Completed 5.8 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in GraphQL, Embeddings, Learning to Rank."
            ]
        }
    },
    "CAND_0094759": {
        "id": "CAND_0094759",
        "fileName": "aditya_pillai_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 74 mins ago",
        "text": "ADITYA PILLAI\nCandidate ID: CAND_0094759 | Location: Mumbai, Maharashtra, India\nHeadline: Lead AI Engineer | Production ML at scale | 8.6+ yrs\n\nSUMMARY:\nSenior AI engineer with 8.6 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Lead AI Engineer at Meta (2023-10-10 to Present)\n  Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.\n\n- Senior NLP Engineer at Apple (2021-06-08 to 2023-09-26)\n  Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.\n\n- Senior Applied Scientist at Locobuzz (2018-01-25 to 2021-06-08)\n  Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.\n\nEDUCATION:\n- M.Tech in Information Technology from Manipal Institute of Technology (2012 - 2017)\n\nSKILLS:\nPrompt Engineering (expert), scikit-learn (advanced), Hugging Face Transformers (expert), Learning to Rank (advanced), Semantic Search (expert), Qdrant (advanced), Fine-tuning LLMs (expert), Agile (intermediate), Vector Search (expert), TTS (advanced), NLP (advanced), Object Detection (intermediate), MLOps (advanced), FAISS (expert), Weights & Biases (advanced), Weaviate (expert)",
        "parsed": {
            "summary": "Senior AI engineer with 8.6 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Prompt Engineering",
                "scikit-learn",
                "Hugging Face Transformers",
                "Learning to Rank",
                "Semantic Search",
                "Qdrant",
                "Fine-tuning LLMs",
                "Agile"
            ],
            "milestones": [
                "Completed 8.6 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Prompt Engineering, scikit-learn, Hugging Face Transformers."
            ]
        }
    },
    "CAND_0020721": {
        "id": "CAND_0020721",
        "fileName": "rajesh_nair_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 76 mins ago",
        "text": "RAJESH NAIR\nCandidate ID: CAND_0020721 | Location: Mumbai, Maharashtra, India\nHeadline: Data Engineer | Data pipelines & analytics\n\nSUMMARY:\nSoftware / data professional with 6.9 years of experience building data pipelines, backend systems, and analytics infrastructure. I've been the engineer who makes ML possible by getting the data pipelines right; now I want to do more of the ML itself. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Data Engineer at Capgemini (2022-02-17 to Present)\n  Backend development with Python (FastAPI), PostgreSQL, and Redis at a B2B SaaS product. Owned the analytics-and-reporting service which serves dashboards to ~3K paying customers. Recent work includes integrating a model-serving service (built by another team) into our API layer; my work was the integration and observability, not the model itself. Strong on API design, database performance, and reliability engineering.\n\n- Senior Data Engineer at Freshworks (2019-09-01 to 2022-02-17)\n  Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests.\n\nEDUCATION:\n- Ph.D in Mechanical Engineering from SRM Chennai (2006 - 2009)\n- Ph.D in Data Science from Local Engineering College (2008 - 2013)\n\nSKILLS:\nSpeech Recognition (advanced), Embeddings (intermediate), Rust (beginner), Content Writing (intermediate), gRPC (intermediate), GANs (advanced), PEFT (advanced), YOLO (advanced), FAISS (intermediate), Redis (beginner), PowerPoint (beginner), Weights & Biases (advanced)",
        "parsed": {
            "summary": "Software / data professional with 6.9 years of experience building data pipelines, backend systems, and analytics infrastructure. I've been the engineer who makes ML possible by getting the data pipelines right; now I want to do more of the ML itself. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "Speech Recognition",
                "Embeddings",
                "Rust",
                "Content Writing",
                "gRPC",
                "GANs",
                "PEFT",
                "YOLO"
            ],
            "milestones": [
                "Completed 6.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Speech Recognition, Embeddings, Rust."
            ]
        }
    },
    "CAND_0008295": {
        "id": "CAND_0008295",
        "fileName": "om_mehta_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 78 mins ago",
        "text": "OM MEHTA\nCandidate ID: CAND_0008295 | Location: Pune, Maharashtra, India\nHeadline: AI Research Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 6.5 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- AI Research Engineer at Razorpay (2022-04-18 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- Senior Software Engineer (ML) at TCS (2020-01-29 to 2022-04-18)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- M.Tech in Computer Engineering from Symbiosis International (2002 - 2006)\n- M.Tech in Mathematics from Chandigarh University (2011 - 2015)\n\nSKILLS:\nBM25 (advanced), Kubernetes (beginner), Python (advanced), PEFT (intermediate), Computer Vision (intermediate), MLflow (intermediate), Weaviate (intermediate), TTS (advanced), Diffusion Models (intermediate), Prompt Engineering (intermediate), BentoML (advanced), QLoRA (advanced), Forecasting (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 6.5 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "BM25",
                "Kubernetes",
                "Python",
                "PEFT",
                "Computer Vision",
                "MLflow",
                "Weaviate",
                "TTS"
            ],
            "milestones": [
                "Completed 6.5 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in BM25, Kubernetes, Python."
            ]
        }
    },
    "CAND_0051292": {
        "id": "CAND_0051292",
        "fileName": "shreya_chatterjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 80 mins ago",
        "text": "SHREYA CHATTERJEE\nCandidate ID: CAND_0051292 | Location: Trivandrum, Kerala, India\nHeadline: Applied ML Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 5.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Freshworks (2025-02-01 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Search Engineer at Vedantu (2022-10-01 to 2025-01-18)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- Search Engineer at Vedantu (2021-06-08 to 2022-10-01)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\nEDUCATION:\n- B.Sc in Computer Science from Manipal Institute of Technology (2017 - 2021)\n- B.Tech in Computer Science from Jadavpur University (2009 - 2013)\n\nSKILLS:\nVue.js (beginner), pgvector (expert), FAISS (advanced), BentoML (advanced), LLMs (advanced), Time Series (advanced), Vector Search (expert), PEFT (advanced), TTS (advanced), Fine-tuning LLMs (expert), JavaScript (beginner), NLP (expert), RAG (expert), Elasticsearch (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 5.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Vue.js",
                "pgvector",
                "FAISS",
                "BentoML",
                "LLMs",
                "Time Series",
                "Vector Search",
                "PEFT"
            ],
            "milestones": [
                "Completed 5.2 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Vue.js, pgvector, FAISS."
            ]
        }
    },
    "CAND_0088335": {
        "id": "CAND_0088335",
        "fileName": "shreya_sharma_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 82 mins ago",
        "text": "SHREYA SHARMA\nCandidate ID: CAND_0088335 | Location: Noida, Uttar Pradesh, India\nHeadline: AI Research Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 6.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- AI Research Engineer at Tech Mahindra (2024-02-07 to Present)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\n- ML Engineer at Paytm (2020-02-28 to 2024-02-07)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\nEDUCATION:\n- M.Sc in Electrical Engineering from Local Engineering College (2019 - 2022)\n\nSKILLS:\nHugging Face Transformers (intermediate), Flask (beginner), Data Science (advanced), Machine Learning (advanced), Reinforcement Learning (advanced), BentoML (intermediate), Time Series (intermediate), TTS (intermediate), Feature Engineering (advanced), Forecasting (advanced), Weaviate (advanced), PEFT (intermediate), Content Writing (intermediate), Vector Search (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 6.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Hugging Face Transformers",
                "Flask",
                "Data Science",
                "Machine Learning",
                "Reinforcement Learning",
                "BentoML",
                "Time Series",
                "TTS"
            ],
            "milestones": [
                "Completed 6.4 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Hugging Face Transformers, Flask, Data Science."
            ]
        }
    },
    "CAND_0017178": {
        "id": "CAND_0017178",
        "fileName": "rahul_mukherjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 84 mins ago",
        "text": "RAHUL MUKHERJEE\nCandidate ID: CAND_0017178 | Location: Hyderabad, Telangana, India\nHeadline: ML Engineer | 4.2 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 4.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- ML Engineer at Swiggy (2023-10-10 to Present)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\n- ML Engineer at Glance (2022-04-18 to 2023-10-10)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\nEDUCATION:\n- M.Sc in Artificial Intelligence from NIT Trichy (2017 - 2020)\n- M.E. in Artificial Intelligence from SRM University (2007 - 2012)\n\nSKILLS:\nPEFT (advanced), Haystack (intermediate), pgvector (intermediate), Data Science (intermediate), MLOps (intermediate), Computer Vision (intermediate), CI/CD (beginner), LlamaIndex (advanced), QLoRA (advanced), Weights & Biases (intermediate), JavaScript (beginner), Information Retrieval (intermediate), Data Pipelines (beginner), BM25 (intermediate), Machine Learning (intermediate), ASR (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "PEFT",
                "Haystack",
                "pgvector",
                "Data Science",
                "MLOps",
                "Computer Vision",
                "CI/CD",
                "LlamaIndex"
            ],
            "milestones": [
                "Completed 4.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in PEFT, Haystack, pgvector."
            ]
        }
    },
    "CAND_0070398": {
        "id": "CAND_0070398",
        "fileName": "riya_saxena_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 86 mins ago",
        "text": "RIYA SAXENA\nCandidate ID: CAND_0070398 | Location: Kochi, Kerala, India\nHeadline: Machine Learning Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 7.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at Genpact AI (2023-05-13 to Present)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- Applied ML Engineer at Uber (2021-05-23 to 2023-03-14)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- Machine Learning Engineer at Mad Street Den (2019-03-05 to 2021-04-23)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\nEDUCATION:\n- M.E. in Machine Learning from SRM University (2005 - 2008)\n- M.Sc in Computer Engineering from IIT Kharagpur (2008 - 2013)\n\nSKILLS:\nImage Classification (advanced), Data Science (advanced), BM25 (expert), RAG (expert), FAISS (expert), Object Detection (advanced), Embeddings (expert), PyTorch (advanced), LoRA (advanced), Python (expert), Information Retrieval (expert), pgvector (advanced), Learning to Rank (expert), Fine-tuning LLMs (expert), Recommendation Systems (advanced), Reinforcement Learning (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 7.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Image Classification",
                "Data Science",
                "BM25",
                "RAG",
                "FAISS",
                "Object Detection",
                "Embeddings",
                "PyTorch"
            ],
            "milestones": [
                "Completed 7.2 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Image Classification, Data Science, BM25."
            ]
        }
    },
    "CAND_0054100": {
        "id": "CAND_0054100",
        "fileName": "aanya_patel_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 88 mins ago",
        "text": "AANYA PATEL\nCandidate ID: CAND_0054100 | Location: Kolkata, West Bengal, India\nHeadline: Junior ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 6.0 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- Junior ML Engineer at Zoho (2024-04-07 to Present)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\n- ML Engineer at Unacademy (2021-08-21 to 2024-03-08)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- Computer Vision Engineer at Freshworks (2020-06-27 to 2021-08-21)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\nEDUCATION:\n- M.E. in Machine Learning from Manipal Institute of Technology (2001 - 2005)\n\nSKILLS:\nVector Search (advanced), Reinforcement Learning (advanced), Time Series (advanced), Prompt Engineering (intermediate), Snowflake (beginner), Hadoop (intermediate), GANs (advanced), Marketing (intermediate), YOLO (intermediate), Semantic Search (advanced), QLoRA (intermediate), Deep Learning (advanced), Pinecone (intermediate), GCP (intermediate), Image Classification (advanced), Computer Vision (intermediate), Weaviate (advanced), Fine-tuning LLMs (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 6.0 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Vector Search",
                "Reinforcement Learning",
                "Time Series",
                "Prompt Engineering",
                "Snowflake",
                "Hadoop",
                "GANs",
                "Marketing"
            ],
            "milestones": [
                "Completed 6.0 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Vector Search, Reinforcement Learning, Time Series."
            ]
        }
    },
    "CAND_0078042": {
        "id": "CAND_0078042",
        "fileName": "neha_shah_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 90 mins ago",
        "text": "NEHA SHAH\nCandidate ID: CAND_0078042 | Location: Dubai, UAE\nHeadline: Applied ML Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 4.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at PolicyBazaar (2023-04-13 to Present)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\n- Search Engineer at Ola (2021-10-20 to 2023-04-13)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- M.E. in Machine Learning from Delhi College of Engineering (2000 - 2005)\n\nSKILLS:\nOpenSearch (expert), Diffusion Models (advanced), PyTorch (expert), Sentence Transformers (expert), Figma (beginner), NLP (expert), Tally (intermediate), CNN (intermediate), TTS (intermediate), OpenCV (advanced), Semantic Search (expert), Pinecone (expert), Object Detection (intermediate), QLoRA (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 4.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "OpenSearch",
                "Diffusion Models",
                "PyTorch",
                "Sentence Transformers",
                "Figma",
                "NLP",
                "Tally",
                "CNN"
            ],
            "milestones": [
                "Completed 4.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in OpenSearch, Diffusion Models, PyTorch."
            ]
        }
    },
    "CAND_0068932": {
        "id": "CAND_0068932",
        "fileName": "anil_mukherjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 92 mins ago",
        "text": "ANIL MUKHERJEE\nCandidate ID: CAND_0068932 | Location: Noida, Uttar Pradesh, India\nHeadline: ML Engineer | Data Science & ML enthusiast\n\nSUMMARY:\nData scientist / ML engineer with 5.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- ML Engineer at Krutrim (2022-09-15 to Present)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\n- Computer Vision Engineer at Vedantu (2021-05-23 to 2022-09-15)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- M.S. in Electrical Engineering from Amity University (2010 - 2015)\n\nSKILLS:\nMarketing (beginner), JavaScript (beginner), Agile (intermediate), MLOps (advanced), Reinforcement Learning (advanced), Milvus (intermediate), Prompt Engineering (intermediate), RAG (advanced), scikit-learn (intermediate), Diffusion Models (advanced), CNN (advanced), OpenSearch (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Marketing",
                "JavaScript",
                "Agile",
                "MLOps",
                "Reinforcement Learning",
                "Milvus",
                "Prompt Engineering",
                "RAG"
            ],
            "milestones": [
                "Completed 5.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Marketing, JavaScript, Agile."
            ]
        }
    },
    "CAND_0016163": {
        "id": "CAND_0016163",
        "fileName": "suresh_shah_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 94 mins ago",
        "text": "SURESH SHAH\nCandidate ID: CAND_0016163 | Location: Gurgaon, Haryana, India\nHeadline: Applied ML Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Dream11 (2024-03-08 to Present)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Applied ML Engineer at Verloop.io (2020-11-24 to 2024-03-08)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\n- NLP Engineer at Amazon (2019-11-16 to 2020-11-10)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\nEDUCATION:\n- M.E. in Machine Learning from Jadavpur University (2009 - 2013)\n\nSKILLS:\nHugging Face Transformers (advanced), Computer Vision (advanced), gRPC (intermediate), Time Series (advanced), Weaviate (expert), CNN (intermediate), Deep Learning (advanced), TensorFlow (expert), ASR (intermediate), Embeddings (advanced), Tailwind (intermediate), Reinforcement Learning (advanced), LoRA (advanced), pgvector (expert), Statistical Modeling (intermediate), Pinecone (advanced), Machine Learning (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Hugging Face Transformers",
                "Computer Vision",
                "gRPC",
                "Time Series",
                "Weaviate",
                "CNN",
                "Deep Learning",
                "TensorFlow"
            ],
            "milestones": [
                "Completed 6.7 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Hugging Face Transformers, Computer Vision, gRPC."
            ]
        }
    },
    "CAND_0024990": {
        "id": "CAND_0024990",
        "fileName": "aarav_mehta_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 96 mins ago",
        "text": "AARAV MEHTA\nCandidate ID: CAND_0024990 | Location: Trivandrum, Kerala, India\nHeadline: Junior ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- Junior ML Engineer at Zoho (2022-08-16 to Present)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\n- ML Engineer at Genpact AI (2021-05-23 to 2022-08-16)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\nEDUCATION:\n- M.Tech in Artificial Intelligence from Symbiosis International (2013 - 2018)\n\nSKILLS:\nComputer Vision (advanced), MLflow (advanced), OpenSearch (intermediate), NLP (intermediate), TTS (intermediate), GANs (intermediate), Kafka (intermediate), Milvus (intermediate), YOLO (intermediate), Elasticsearch (advanced), Deep Learning (intermediate), Angular (beginner), BM25 (intermediate), MLOps (advanced), Image Classification (advanced), Haystack (advanced), LLMs (advanced), Azure (intermediate), Kubernetes (beginner), Statistical Modeling (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Computer Vision",
                "MLflow",
                "OpenSearch",
                "NLP",
                "TTS",
                "GANs",
                "Kafka",
                "Milvus"
            ],
            "milestones": [
                "Completed 5.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Computer Vision, MLflow, OpenSearch."
            ]
        }
    },
    "CAND_0061225": {
        "id": "CAND_0061225",
        "fileName": "riya_hegde_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 98 mins ago",
        "text": "RIYA HEGDE\nCandidate ID: CAND_0061225 | Location: New York, USA\nHeadline: Senior Data Engineer | 6.0+ yrs in data engineering\n\nSUMMARY:\nSoftware / data professional with 6.0 years of experience building data pipelines, backend systems, and analytics infrastructure. I'm a backend/data hybrid \u2014 Spark, Airflow, SQL warehouses are home territory; I'm building competence on the ML side. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Senior Data Engineer at InMobi (2024-10-04 to Present)\n  Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure.\n\n- Senior Data Engineer at Unacademy (2021-02-22 to 2024-08-05)\n  Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure.\n\n- Senior Data Engineer at Zomato (2020-05-28 to 2021-02-22)\n  Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests.\n\nEDUCATION:\n- M.Tech in Computer Engineering from KIIT University (2005 - 2009)\n- M.Sc in Artificial Intelligence from SRM Chennai (2016 - 2020)\n\nSKILLS:\nDiffusion Models (advanced), Weaviate (advanced), TensorFlow (intermediate), Object Detection (intermediate), MLOps (intermediate), OpenCV (advanced), gRPC (beginner), Image Classification (advanced), TypeScript (beginner), Embeddings (advanced), Scrum (intermediate), BentoML (advanced)",
        "parsed": {
            "summary": "Software / data professional with 6.0 years of experience building data pipelines, backend systems, and analytics infrastructure. I'm a backend/data hybrid \u2014 Spark, Airflow, SQL warehouses are home territory; I'm building competence on the ML side. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "Diffusion Models",
                "Weaviate",
                "TensorFlow",
                "Object Detection",
                "MLOps",
                "OpenCV",
                "gRPC",
                "Image Classification"
            ],
            "milestones": [
                "Completed 6.0 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Diffusion Models, Weaviate, TensorFlow."
            ]
        }
    },
    "CAND_0084819": {
        "id": "CAND_0084819",
        "fileName": "krishna_shah_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 100 mins ago",
        "text": "KRISHNA SHAH\nCandidate ID: CAND_0084819 | Location: Indore, Madhya Pradesh, India\nHeadline: Search Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 4.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at Dream11 (2023-09-10 to Present)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Senior Data Scientist at Razorpay (2021-11-19 to 2023-07-12)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- M.S. in Information Technology from Christ University (2009 - 2014)\n\nSKILLS:\nSemantic Search (advanced), BM25 (expert), MLOps (intermediate), OpenSearch (expert), Recommendation Systems (expert), LlamaIndex (expert), scikit-learn (expert), GCP (beginner), Docker (beginner), PyTorch (advanced), Weaviate (expert), MLflow (intermediate), LoRA (expert), Sentence Transformers (expert), Reinforcement Learning (advanced), Speech Recognition (advanced), Information Retrieval (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 4.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Semantic Search",
                "BM25",
                "MLOps",
                "OpenSearch",
                "Recommendation Systems",
                "LlamaIndex",
                "scikit-learn",
                "GCP"
            ],
            "milestones": [
                "Completed 4.5 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Semantic Search, BM25, MLOps."
            ]
        }
    },
    "CAND_0005311": {
        "id": "CAND_0005311",
        "fileName": "naina_tiwari_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 102 mins ago",
        "text": "NAINA TIWARI\nCandidate ID: CAND_0005311 | Location: Mumbai, Maharashtra, India\nHeadline: AI Research Engineer | 5.7 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 5.7 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- AI Research Engineer at Aganitha (2023-02-12 to Present)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\n- AI Specialist at Swiggy (2020-11-24 to 2023-02-12)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- B.Tech in Computer Engineering from IIT Kharagpur (2018 - 2022)\n- B.Sc in Computer Science from Thapar University (2019 - 2022)\n\nSKILLS:\nLoRA (advanced), Feature Engineering (advanced), BentoML (advanced), Prompt Engineering (advanced), FastAPI (beginner), Semantic Search (intermediate), Qdrant (intermediate), Forecasting (intermediate), Salesforce CRM (intermediate), CNN (advanced), Fine-tuning LLMs (intermediate), QLoRA (advanced), MLOps (advanced), NLP (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.7 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "LoRA",
                "Feature Engineering",
                "BentoML",
                "Prompt Engineering",
                "FastAPI",
                "Semantic Search",
                "Qdrant",
                "Forecasting"
            ],
            "milestones": [
                "Completed 5.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in LoRA, Feature Engineering, BentoML."
            ]
        }
    },
    "CAND_0009691": {
        "id": "CAND_0009691",
        "fileName": "ira_subramanian_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 104 mins ago",
        "text": "IRA SUBRAMANIAN\nCandidate ID: CAND_0009691 | Location: Indore, Madhya Pradesh, India\nHeadline: Applied ML Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 6.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at LinkedIn (2024-02-07 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- AI Engineer at Amazon (2022-11-14 to 2024-02-07)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- NLP Engineer at Genpact AI (2020-04-28 to 2022-10-15)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- M.Sc in Information Technology from Delhi College of Engineering (2015 - 2019)\n\nSKILLS:\nBentoML (advanced), Prompt Engineering (advanced), Recommendation Systems (expert), GANs (intermediate), Fine-tuning LLMs (expert), Terraform (beginner), LoRA (expert), Pinecone (advanced), LangChain (expert), MLflow (advanced), Sentence Transformers (advanced), QLoRA (expert), Kubeflow (intermediate), ASR (advanced), Reinforcement Learning (intermediate), Spring Boot (beginner), Qdrant (expert), FAISS (advanced), scikit-learn (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 6.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "BentoML",
                "Prompt Engineering",
                "Recommendation Systems",
                "GANs",
                "Fine-tuning LLMs",
                "Terraform",
                "LoRA",
                "Pinecone"
            ],
            "milestones": [
                "Completed 6.2 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in BentoML, Prompt Engineering, Recommendation Systems."
            ]
        }
    },
    "CAND_0027723": {
        "id": "CAND_0027723",
        "fileName": "kabir_agarwal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 106 mins ago",
        "text": "KABIR AGARWAL\nCandidate ID: CAND_0027723 | Location: Ahmedabad, Gujarat, India\nHeadline: ML Engineer | 4.2 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 4.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- ML Engineer at Wysa (2024-12-03 to Present)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\n- AI Specialist at Yellow.ai (2022-03-19 to 2024-11-03)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- Ph.D in Computer Engineering from Lovely Professional University (2013 - 2017)\n- M.S. in Information Technology from Bharati Vidyapeeth (2001 - 2006)\n\nSKILLS:\nVector Search (intermediate), Feature Engineering (advanced), Statistical Modeling (intermediate), Diffusion Models (advanced), GANs (intermediate), Airflow (intermediate), OpenCV (intermediate), NLP (advanced), LlamaIndex (advanced), Prompt Engineering (intermediate), Elasticsearch (advanced), Pinecone (intermediate), scikit-learn (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Vector Search",
                "Feature Engineering",
                "Statistical Modeling",
                "Diffusion Models",
                "GANs",
                "Airflow",
                "OpenCV",
                "NLP"
            ],
            "milestones": [
                "Completed 4.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Vector Search, Feature Engineering, Statistical Modeling."
            ]
        }
    },
    "CAND_0016659": {
        "id": "CAND_0016659",
        "fileName": "priya_dalal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 108 mins ago",
        "text": "PRIYA DALAL\nCandidate ID: CAND_0016659 | Location: Coimbatore, Tamil Nadu, India\nHeadline: ML Engineer | Data Science & ML enthusiast\n\nSUMMARY:\nData scientist / ML engineer with 4.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- ML Engineer at Glance (2023-04-13 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- ML Engineer at Flipkart (2022-02-17 to 2023-04-13)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- B.Tech in Artificial Intelligence from IIT Hyderabad (2018 - 2021)\n\nSKILLS:\nPowerPoint (intermediate), TTS (advanced), Sentence Transformers (intermediate), Apache Beam (intermediate), Pinecone (advanced), PEFT (intermediate), GraphQL (intermediate), FAISS (intermediate), Information Retrieval (advanced), Weaviate (advanced), Airflow (intermediate), scikit-learn (advanced), CNN (advanced), OpenCV (advanced), Feature Engineering (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "PowerPoint",
                "TTS",
                "Sentence Transformers",
                "Apache Beam",
                "Pinecone",
                "PEFT",
                "GraphQL",
                "FAISS"
            ],
            "milestones": [
                "Completed 4.4 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in PowerPoint, TTS, Sentence Transformers."
            ]
        }
    },
    "CAND_0062561": {
        "id": "CAND_0062561",
        "fileName": "suresh_bose_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 110 mins ago",
        "text": "SURESH BOSE\nCandidate ID: CAND_0062561 | Location: Bhubaneswar, Odisha, India\nHeadline: ML Engineer | 5.9 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 5.9 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- ML Engineer at Razorpay (2024-10-04 to Present)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\n- Junior ML Engineer at Dream11 (2023-10-10 to 2024-10-04)\n  Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer.\n\n- Senior Software Engineer (ML) at Unacademy (2020-08-26 to 2023-10-10)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\nEDUCATION:\n- M.E. in Data Science from RV College of Engineering (2002 - 2006)\n\nSKILLS:\nLearning to Rank (advanced), Data Science (intermediate), Sales (intermediate), Kubeflow (intermediate), Information Retrieval (advanced), Weights & Biases (advanced), Statistical Modeling (advanced), PyTorch (intermediate), Weaviate (advanced), YOLO (advanced), Object Detection (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.9 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Learning to Rank",
                "Data Science",
                "Sales",
                "Kubeflow",
                "Information Retrieval",
                "Weights & Biases",
                "Statistical Modeling",
                "PyTorch"
            ],
            "milestones": [
                "Completed 5.9 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Learning to Rank, Data Science, Sales."
            ]
        }
    },
    "CAND_0010603": {
        "id": "CAND_0010603",
        "fileName": "aisha_desai_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 112 mins ago",
        "text": "AISHA DESAI\nCandidate ID: CAND_0010603 | Location: Bangalore, Karnataka, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- ML Engineer at BYJU'S (2022-09-15 to Present)\n  Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer.\n\n- Data Scientist at BYJU'S (2021-01-23 to 2022-07-17)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- M.E. in Electrical Engineering from Amity University (2004 - 2007)\n- B.Tech in Artificial Intelligence from Anna University (2017 - 2021)\n\nSKILLS:\nInformation Retrieval (intermediate), TTS (intermediate), OpenSearch (advanced), Image Classification (advanced), GANs (intermediate), Docker (intermediate), Azure (beginner), pgvector (intermediate), Deep Learning (advanced), Machine Learning (intermediate), LlamaIndex (intermediate), Forecasting (advanced), MLOps (intermediate), Statistical Modeling (intermediate), PEFT (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Information Retrieval",
                "TTS",
                "OpenSearch",
                "Image Classification",
                "GANs",
                "Docker",
                "Azure",
                "pgvector"
            ],
            "milestones": [
                "Completed 5.3 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Information Retrieval, TTS, OpenSearch."
            ]
        }
    },
    "CAND_0050553": {
        "id": "CAND_0050553",
        "fileName": "shaurya_kapoor_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 114 mins ago",
        "text": "SHAURYA KAPOOR\nCandidate ID: CAND_0050553 | Location: Seattle, USA\nHeadline: ML Engineer | 3.6 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 3.6 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- ML Engineer at Zoho (2022-11-14 to Present)\n  Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer.\n\nEDUCATION:\n- B.E. in Data Science from Anna University (2011 - 2016)\n\nSKILLS:\nFeature Engineering (advanced), Statistical Modeling (advanced), Scrum (intermediate), Django (intermediate), LlamaIndex (advanced), Vector Search (advanced), MLOps (intermediate), Python (intermediate), Speech Recognition (intermediate), Time Series (advanced), Image Classification (intermediate), Milvus (intermediate), Java (intermediate), Spring Boot (beginner), Data Science (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 3.6 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "Feature Engineering",
                "Statistical Modeling",
                "Scrum",
                "Django",
                "LlamaIndex",
                "Vector Search",
                "MLOps",
                "Python"
            ],
            "milestones": [
                "Completed 3.6 years of professional experience across 1 companies.",
                "Achieved high skill proficiency in Feature Engineering, Statistical Modeling, Scrum."
            ]
        }
    },
    "CAND_0051630": {
        "id": "CAND_0051630",
        "fileName": "kavya_naidu_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 116 mins ago",
        "text": "KAVYA NAIDU\nCandidate ID: CAND_0051630 | Location: Kolkata, West Bengal, India\nHeadline: Machine Learning Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 6.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at Razorpay (2022-10-15 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- AI Engineer at InMobi (2020-07-27 to 2022-10-15)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\nEDUCATION:\n- M.S. in Computer Engineering from Thapar University (2003 - 2008)\n- B.Sc in Computer Science from Chandigarh University (2013 - 2016)\n\nSKILLS:\nElasticsearch (expert), Hugging Face Transformers (advanced), BentoML (advanced), MLflow (intermediate), Embeddings (expert), Recommendation Systems (expert), Machine Learning (expert), Python (expert), NLP (expert), Excel (beginner), OpenSearch (advanced), GANs (intermediate), LoRA (expert), Sentence Transformers (expert), Information Retrieval (expert), OpenCV (intermediate), Computer Vision (intermediate), Reinforcement Learning (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 6.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Elasticsearch",
                "Hugging Face Transformers",
                "BentoML",
                "MLflow",
                "Embeddings",
                "Recommendation Systems",
                "Machine Learning",
                "Python"
            ],
            "milestones": [
                "Completed 6.0 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Elasticsearch, Hugging Face Transformers, BentoML."
            ]
        }
    },
    "CAND_0068964": {
        "id": "CAND_0068964",
        "fileName": "avni_malhotra_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 118 mins ago",
        "text": "AVNI MALHOTRA\nCandidate ID: CAND_0068964 | Location: Kochi, Kerala, India\nHeadline: ML Engineer | 4.8 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 4.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- ML Engineer at Mad Street Den (2025-02-01 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- Computer Vision Engineer at Zoho (2021-08-21 to 2024-12-03)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\nEDUCATION:\n- M.Sc in MBA from SRM Chennai (2004 - 2009)\n\nSKILLS:\nNLP (intermediate), Tally (intermediate), GANs (advanced), Deep Learning (intermediate), Recommendation Systems (intermediate), Forecasting (advanced), Weights & Biases (intermediate), Weaviate (intermediate), Kubeflow (intermediate), Elasticsearch (advanced), Embeddings (intermediate), TTS (intermediate), CSS (intermediate), Image Classification (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "NLP",
                "Tally",
                "GANs",
                "Deep Learning",
                "Recommendation Systems",
                "Forecasting",
                "Weights & Biases",
                "Weaviate"
            ],
            "milestones": [
                "Completed 4.8 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in NLP, Tally, GANs."
            ]
        }
    },
    "CAND_0082738": {
        "id": "CAND_0082738",
        "fileName": "ira_naidu_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 120 mins ago",
        "text": "IRA NAIDU\nCandidate ID: CAND_0082738 | Location: Vizag, Andhra Pradesh, India\nHeadline: Senior Data Engineer | SQL, Spark, Cloud\n\nSUMMARY:\nSoftware / data professional with 4.7 years of experience building data pipelines, backend systems, and analytics infrastructure. Most of my work has been data pipelines and analytics infrastructure; I've shipped a couple of small ML features but it's not the core of my day. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Senior Data Engineer at Razorpay (2023-05-13 to Present)\n  Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org.\n\n- Senior Software Engineer at Capgemini (2021-09-20 to 2023-04-13)\n  Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests.\n\nEDUCATION:\n- B.Sc in Electrical Engineering from KIIT University (2007 - 2012)\n\nSKILLS:\nETL (beginner), Forecasting (intermediate), Kubernetes (beginner), Fine-tuning LLMs (advanced), GANs (advanced), Image Classification (advanced), MLOps (advanced), BM25 (intermediate), Computer Vision (intermediate), OpenSearch (intermediate), Scrum (intermediate), Kubeflow (intermediate), Docker (beginner), Weights & Biases (intermediate)",
        "parsed": {
            "summary": "Software / data professional with 4.7 years of experience building data pipelines, backend systems, and analytics infrastructure. Most of my work has been data pipelines and analytics infrastructure; I've shipped a couple of small ML features but it's not the core of my day. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "ETL",
                "Forecasting",
                "Kubernetes",
                "Fine-tuning LLMs",
                "GANs",
                "Image Classification",
                "MLOps",
                "BM25"
            ],
            "milestones": [
                "Completed 4.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in ETL, Forecasting, Kubernetes."
            ]
        }
    },
    "CAND_0080315": {
        "id": "CAND_0080315",
        "fileName": "anil_pillai_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 122 mins ago",
        "text": "ANIL PILLAI\nCandidate ID: CAND_0080315 | Location: Ahmedabad, Gujarat, India\nHeadline: AI Research Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 4.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- AI Research Engineer at Sarvam AI (2023-08-11 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- ML Engineer at Aganitha (2022-06-17 to 2023-08-11)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\nEDUCATION:\n- M.Sc in Artificial Intelligence from UC Berkeley (2012 - 2017)\n\nSKILLS:\nLangChain (advanced), Object Detection (intermediate), Python (intermediate), Prompt Engineering (advanced), FastAPI (intermediate), Image Classification (advanced), BentoML (intermediate), Tally (intermediate), PEFT (advanced), FAISS (intermediate), Diffusion Models (advanced), NLP (intermediate), Hugging Face Transformers (intermediate), Elasticsearch (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "LangChain",
                "Object Detection",
                "Python",
                "Prompt Engineering",
                "FastAPI",
                "Image Classification",
                "BentoML",
                "Tally"
            ],
            "milestones": [
                "Completed 4.1 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in LangChain, Object Detection, Python."
            ]
        }
    },
    "CAND_0033861": {
        "id": "CAND_0033861",
        "fileName": "kabir_kapoor_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 124 mins ago",
        "text": "KABIR KAPOOR\nCandidate ID: CAND_0033861 | Location: Vizag, Andhra Pradesh, India\nHeadline: Senior NLP Engineer | Building AI-native search & ranking systems\n\nSUMMARY:\nSenior AI engineer with 8.0 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I drove the platform's RAG strategy from prototype to production, including the eval framework, across a corpus of 30M+ candidate profiles. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is \u2014 usually it's both. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior NLP Engineer at Mad Street Den (2023-12-09 to Present)\n  Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.\n\n- Senior NLP Engineer at Sarvam AI (2020-08-26 to 2023-11-09)\n  Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout.\n\n- Senior AI Engineer at Paytm (2018-07-08 to 2020-08-26)\n  Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month.\n\nEDUCATION:\n- B.E. in Artificial Intelligence from Thapar University (2015 - 2019)\n- M.S. in Computer Engineering from IIT Madras (2004 - 2009)\n\nSKILLS:\nReinforcement Learning (advanced), Weaviate (expert), LoRA (advanced), LLMs (expert), Machine Learning (advanced), TensorFlow (advanced), LlamaIndex (expert), Time Series (advanced), Elasticsearch (expert), Haystack (expert), Diffusion Models (intermediate), dbt (intermediate), BentoML (intermediate), Pinecone (advanced), Qdrant (advanced), Vector Search (expert), Kubeflow (advanced), PEFT (advanced), scikit-learn (expert), Databricks (intermediate), Milvus (expert), Learning to Rank (expert), Sentence Transformers (advanced)",
        "parsed": {
            "summary": "Senior AI engineer with 8.0 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I drove the platform's RAG strategy from prototype to production, including the eval framework, across a corpus of 30M+ candidate profiles. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is \u2014 usually it's both. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Reinforcement Learning",
                "Weaviate",
                "LoRA",
                "LLMs",
                "Machine Learning",
                "TensorFlow",
                "LlamaIndex",
                "Time Series"
            ],
            "milestones": [
                "Completed 8.0 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Reinforcement Learning, Weaviate, LoRA."
            ]
        }
    },
    "CAND_0072721": {
        "id": "CAND_0072721",
        "fileName": "reyansh_menon_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 126 mins ago",
        "text": "REYANSH MENON\nCandidate ID: CAND_0072721 | Location: Noida, Uttar Pradesh, India\nHeadline: Data Scientist | 3.7 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 3.7 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- Data Scientist at Yellow.ai (2022-10-15 to Present)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\nEDUCATION:\n- B.Tech in Chemical Engineering from Bharati Vidyapeeth (2000 - 2005)\n- Ph.D in MBA from COEP Pune (2002 - 2007)\n\nSKILLS:\nMLOps (intermediate), Weaviate (intermediate), Qdrant (advanced), Fine-tuning LLMs (advanced), Airflow (beginner), Python (advanced), Embeddings (advanced), Vector Search (intermediate), ETL (beginner), YOLO (advanced), PyTorch (intermediate), Diffusion Models (advanced), Machine Learning (advanced), Weights & Biases (intermediate), Computer Vision (intermediate), OpenCV (advanced), Databricks (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 3.7 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "MLOps",
                "Weaviate",
                "Qdrant",
                "Fine-tuning LLMs",
                "Airflow",
                "Python",
                "Embeddings",
                "Vector Search"
            ],
            "milestones": [
                "Completed 3.7 years of professional experience across 1 companies.",
                "Achieved high skill proficiency in MLOps, Weaviate, Qdrant."
            ]
        }
    },
    "CAND_0071974": {
        "id": "CAND_0071974",
        "fileName": "sai_verma_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 128 mins ago",
        "text": "SAI VERMA\nCandidate ID: CAND_0071974 | Location: Vizag, Andhra Pradesh, India\nHeadline: Senior AI Engineer | Production ML at scale | 7.8+ yrs\n\nSUMMARY:\nSenior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior AI Engineer at Netflix (2022-04-18 to Present)\n  Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing \u2192 embedding generation (using a fine-tuned BGE-large) \u2192 Pinecone retrieval \u2192 learning-to-rank re-scoring (XGBoost) \u2192 behavioral-signal integration. The hardest part wasn't the ML \u2014 it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.\n\n- Staff Machine Learning Engineer at Meta (2019-12-16 to 2022-04-04)\n  Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.\n\n- Staff Machine Learning Engineer at Mad Street Den (2018-10-15 to 2019-12-09)\n  Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month.\n\nEDUCATION:\n- M.Sc in Artificial Intelligence from NIT Warangal (2007 - 2011)\n\nSKILLS:\nLoRA (advanced), Learning to Rank (advanced), Weaviate (expert), PEFT (advanced), BM25 (expert), Pinecone (expert), Machine Learning (advanced), Information Retrieval (advanced), Qdrant (expert), Embeddings (expert), CNN (advanced), RAG (advanced), MLOps (advanced), Forecasting (advanced), Sentence Transformers (expert), Content Writing (intermediate), Speech Recognition (advanced), Elasticsearch (expert), Object Detection (intermediate)",
        "parsed": {
            "summary": "Senior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "LoRA",
                "Learning to Rank",
                "Weaviate",
                "PEFT",
                "BM25",
                "Pinecone",
                "Machine Learning",
                "Information Retrieval"
            ],
            "milestones": [
                "Completed 7.8 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in LoRA, Learning to Rank, Weaviate."
            ]
        }
    },
    "CAND_0041610": {
        "id": "CAND_0041610",
        "fileName": "anil_subramanian_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 130 mins ago",
        "text": "ANIL SUBRAMANIAN\nCandidate ID: CAND_0041610 | Location: Indore, Madhya Pradesh, India\nHeadline: Recommendation Systems Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Recommendation Systems Engineer at Zoho (2023-11-09 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Applied ML Engineer at Observe.AI (2021-09-20 to 2023-11-09)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Search Engineer at InMobi (2020-05-28 to 2021-08-21)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Machine Learning Engineer at Swiggy (2019-09-01 to 2020-03-29)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- B.Tech in Information Technology from SRM University (2008 - 2011)\n- M.Tech in Computer Science from Lovely Professional University (2014 - 2017)\n\nSKILLS:\nOpenCV (advanced), LoRA (advanced), Statistical Modeling (advanced), Data Science (advanced), Elasticsearch (expert), GANs (advanced), OpenSearch (expert), LangChain (advanced), BM25 (expert), scikit-learn (expert), Learning to Rank (expert), Forecasting (advanced), Feature Engineering (advanced), Embeddings (advanced), pgvector (expert), Recommendation Systems (expert), PyTorch (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "OpenCV",
                "LoRA",
                "Statistical Modeling",
                "Data Science",
                "Elasticsearch",
                "GANs",
                "OpenSearch",
                "LangChain"
            ],
            "milestones": [
                "Completed 6.7 years of professional experience across 4 companies.",
                "Achieved high skill proficiency in OpenCV, LoRA, Statistical Modeling."
            ]
        }
    },
    "CAND_0064326": {
        "id": "CAND_0064326",
        "fileName": "nisha_pillai_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 132 mins ago",
        "text": "NISHA PILLAI\nCandidate ID: CAND_0064326 | Location: Gurgaon, Haryana, India\nHeadline: Search Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 7.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at Sarvam AI (2023-11-09 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Machine Learning Engineer at Aganitha (2021-11-05 to 2023-10-26)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\n- Machine Learning Engineer at Freshworks (2019-09-17 to 2021-09-06)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Machine Learning Engineer at Apple (2018-09-08 to 2019-09-03)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- B.Tech in Computer Science from COEP Pune (2016 - 2020)\n\nSKILLS:\nscikit-learn (advanced), PyTorch (expert), Milvus (advanced), Deep Learning (expert), Semantic Search (advanced), Weaviate (expert), Object Detection (intermediate), RAG (expert), Weights & Biases (advanced), BM25 (advanced), Webpack (beginner), Python (expert), QLoRA (expert), Reinforcement Learning (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 7.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "scikit-learn",
                "PyTorch",
                "Milvus",
                "Deep Learning",
                "Semantic Search",
                "Weaviate",
                "Object Detection",
                "RAG"
            ],
            "milestones": [
                "Completed 7.6 years of professional experience across 4 companies.",
                "Achieved high skill proficiency in scikit-learn, PyTorch, Milvus."
            ]
        }
    },
    "CAND_0076831": {
        "id": "CAND_0076831",
        "fileName": "myra_verma_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 134 mins ago",
        "text": "MYRA VERMA\nCandidate ID: CAND_0076831 | Location: Delhi, Delhi, India\nHeadline: Search Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 4.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at Krutrim (2024-03-08 to Present)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Search Engineer at Zomato (2022-07-17 to 2024-03-08)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\nEDUCATION:\n- M.S. in Artificial Intelligence from Jadavpur University (2005 - 2008)\n- Ph.D in Data Science from Stanford University (2010 - 2013)\n\nSKILLS:\nLLMs (expert), MLOps (intermediate), Milvus (expert), SEO (intermediate), BM25 (advanced), Weaviate (advanced), Forecasting (intermediate), YOLO (intermediate), Kafka (beginner), NLP (expert), TTS (advanced), Reinforcement Learning (intermediate), Fine-tuning LLMs (expert), PyTorch (expert), Project Management (beginner), LlamaIndex (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 4.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. Along the way I've gotten comfortable with the operational side \u2014 A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "LLMs",
                "MLOps",
                "Milvus",
                "SEO",
                "BM25",
                "Weaviate",
                "Forecasting",
                "YOLO"
            ],
            "milestones": [
                "Completed 4.0 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in LLMs, MLOps, Milvus."
            ]
        }
    },
    "CAND_0042506": {
        "id": "CAND_0042506",
        "fileName": "zara_pandey_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 136 mins ago",
        "text": "ZARA PANDEY\nCandidate ID: CAND_0042506 | Location: Mumbai, Maharashtra, India\nHeadline: Search Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at Verloop.io (2024-12-03 to Present)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- Machine Learning Engineer at Meesho (2022-04-04 to 2024-11-19)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- B.Tech in Machine Learning from Amity University (2008 - 2011)\n- M.E. in Computer Science from PES University (2003 - 2008)\n\nSKILLS:\nPEFT (expert), TTS (advanced), scikit-learn (advanced), OpenCV (advanced), Semantic Search (advanced), BentoML (intermediate), Fine-tuning LLMs (expert), TensorFlow (expert), Information Retrieval (expert), Diffusion Models (intermediate), Milvus (expert), Deep Learning (expert), Qdrant (expert), FAISS (expert), Airflow (intermediate), Object Detection (advanced), NLP (expert), Forecasting (advanced), pgvector (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "PEFT",
                "TTS",
                "scikit-learn",
                "OpenCV",
                "Semantic Search",
                "BentoML",
                "Fine-tuning LLMs",
                "TensorFlow"
            ],
            "milestones": [
                "Completed 4.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in PEFT, TTS, scikit-learn."
            ]
        }
    },
    "CAND_0078492": {
        "id": "CAND_0078492",
        "fileName": "aadhya_vora_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 138 mins ago",
        "text": "AADHYA VORA\nCandidate ID: CAND_0078492 | Location: Kochi, Kerala, India\nHeadline: Recommendation Systems Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 5.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Recommendation Systems Engineer at Verloop.io (2025-06-01 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Senior Data Scientist at Adobe (2021-03-24 to 2025-04-02)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- B.E. in Computer Engineering from IIT Delhi (2004 - 2009)\n\nSKILLS:\nMachine Learning (expert), Haystack (expert), FAISS (expert), Kubeflow (intermediate), Recommendation Systems (advanced), Computer Vision (advanced), BM25 (advanced), GANs (intermediate), Qdrant (expert), Hugging Face Transformers (expert), ASR (advanced), Diffusion Models (intermediate), LLMs (expert), Excel (beginner), PEFT (expert), scikit-learn (expert), Elasticsearch (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 5.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Machine Learning",
                "Haystack",
                "FAISS",
                "Kubeflow",
                "Recommendation Systems",
                "Computer Vision",
                "BM25",
                "GANs"
            ],
            "milestones": [
                "Completed 5.1 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Machine Learning, Haystack, FAISS."
            ]
        }
    },
    "CAND_0043228": {
        "id": "CAND_0043228",
        "fileName": "kiara_sen_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 140 mins ago",
        "text": "KIARA SEN\nCandidate ID: CAND_0043228 | Location: Chennai, Tamil Nadu, India\nHeadline: Applied ML Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 6.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Zoho (2024-05-07 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- Applied ML Engineer at Vedantu (2020-09-18 to 2024-04-30)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Search Engineer at Yellow.ai (2019-10-10 to 2020-09-04)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\nEDUCATION:\n- B.E. in Artificial Intelligence from IIT Madras (2016 - 2020)\n\nSKILLS:\nBigQuery (beginner), NLP (expert), ASR (advanced), Hugging Face Transformers (expert), FastAPI (intermediate), Haystack (advanced), Image Classification (advanced), Machine Learning (advanced), Vector Search (advanced), Sentence Transformers (expert), YOLO (intermediate), TTS (intermediate), Weaviate (expert), Kubeflow (advanced), React (beginner), Learning to Rank (advanced), OpenSearch (expert), pgvector (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 6.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch \u2014 sentence-transformers, FAISS, the works. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "BigQuery",
                "NLP",
                "ASR",
                "Hugging Face Transformers",
                "FastAPI",
                "Haystack",
                "Image Classification",
                "Machine Learning"
            ],
            "milestones": [
                "Completed 6.8 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in BigQuery, NLP, ASR."
            ]
        }
    },
    "CAND_0007596": {
        "id": "CAND_0007596",
        "fileName": "shaurya_gupta_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 142 mins ago",
        "text": "SHAURYA GUPTA\nCandidate ID: CAND_0007596 | Location: Delhi, Delhi, India\nHeadline: Junior ML Engineer | 4.4 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 4.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- Junior ML Engineer at Flipkart (2022-10-15 to Present)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\n- Data Scientist at Meesho (2022-02-10 to 2022-10-08)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- B.Sc in Information Technology from Local Engineering College (2011 - 2015)\n- B.E. in Data Science from Delhi College of Engineering (2001 - 2006)\n\nSKILLS:\nReinforcement Learning (intermediate), YOLO (advanced), scikit-learn (advanced), Object Detection (intermediate), Machine Learning (intermediate), Feature Engineering (intermediate), OpenCV (advanced), Time Series (intermediate), Statistical Modeling (advanced), Python (intermediate), Weaviate (advanced), Vector Search (intermediate), Photoshop (intermediate), Semantic Search (intermediate), Weights & Biases (intermediate), LoRA (intermediate), CSS (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.4 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. My current role is split between dashboarding/analytics and shipping production ML models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Reinforcement Learning",
                "YOLO",
                "scikit-learn",
                "Object Detection",
                "Machine Learning",
                "Feature Engineering",
                "OpenCV",
                "Time Series"
            ],
            "milestones": [
                "Completed 4.4 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Reinforcement Learning, YOLO, scikit-learn."
            ]
        }
    },
    "CAND_0095619": {
        "id": "CAND_0095619",
        "fileName": "vivaan_dalal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 144 mins ago",
        "text": "VIVAAN DALAL\nCandidate ID: CAND_0095619 | Location: Mumbai, Maharashtra, India\nHeadline: NLP Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- NLP Engineer at Nykaa (2022-04-18 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- M.Sc in Machine Learning from NIT Warangal (2017 - 2022)\n\nSKILLS:\nFeature Engineering (advanced), Pinecone (expert), MLflow (advanced), Learning to Rank (expert), scikit-learn (expert), Hugging Face Transformers (advanced), NLP (expert), Weaviate (expert), Information Retrieval (advanced), Time Series (intermediate), Figma (intermediate), TTS (advanced), BM25 (expert), Sentence Transformers (advanced), Fine-tuning LLMs (advanced), Elasticsearch (advanced), YOLO (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Feature Engineering",
                "Pinecone",
                "MLflow",
                "Learning to Rank",
                "scikit-learn",
                "Hugging Face Transformers",
                "NLP",
                "Weaviate"
            ],
            "milestones": [
                "Completed 15.6 years of professional experience across 1 companies.",
                "Achieved high skill proficiency in Feature Engineering, Pinecone, MLflow."
            ]
        }
    },
    "CAND_0094358": {
        "id": "CAND_0094358",
        "fileName": "jay_krishnan_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 146 mins ago",
        "text": "JAY KRISHNAN\nCandidate ID: CAND_0094358 | Location: San Francisco, USA\nHeadline: ML Engineer | Data Science & ML enthusiast\n\nSUMMARY:\nData scientist / ML engineer with 4.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- ML Engineer at Saarthi.ai (2023-05-13 to Present)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\n- AI Research Engineer at BYJU'S (2022-06-10 to 2023-05-06)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\nEDUCATION:\n- M.S. in Data Science from BITS Pilani (2017 - 2022)\n- M.E. in Computer Science from NIT Trichy (2002 - 2005)\n\nSKILLS:\nPrompt Engineering (advanced), Deep Learning (advanced), Weights & Biases (advanced), GANs (intermediate), AWS (intermediate), BM25 (advanced), Elasticsearch (intermediate), TTS (intermediate), Machine Learning (advanced), MLflow (advanced), Qdrant (advanced), Vector Search (advanced), MLOps (intermediate), BentoML (advanced), Kubeflow (intermediate), Vue.js (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "Prompt Engineering",
                "Deep Learning",
                "Weights & Biases",
                "GANs",
                "AWS",
                "BM25",
                "Elasticsearch",
                "TTS"
            ],
            "milestones": [
                "Completed 4.1 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Prompt Engineering, Deep Learning, Weights & Biases."
            ]
        }
    },
    "CAND_0082760": {
        "id": "CAND_0082760",
        "fileName": "nikhil_sen_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 148 mins ago",
        "text": "NIKHIL SEN\nCandidate ID: CAND_0082760 | Location: Bangalore, Karnataka, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 3.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- ML Engineer at InMobi (2023-10-10 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- AI Specialist at Mad Street Den (2023-01-13 to 2023-08-11)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- M.Tech in Computer Science from Tier-3 Engineering College (2012 - 2017)\n\nSKILLS:\nOpenCV (intermediate), YOLO (advanced), Docker (beginner), LoRA (intermediate), MLOps (intermediate), BentoML (advanced), MLflow (advanced), scikit-learn (advanced), Computer Vision (advanced), Embeddings (intermediate), OpenSearch (advanced), Weights & Biases (intermediate), AWS (beginner), FastAPI (intermediate), SEO (beginner), Qdrant (intermediate), GANs (advanced), Elasticsearch (advanced), Haystack (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 3.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "OpenCV",
                "YOLO",
                "Docker",
                "LoRA",
                "MLOps",
                "BentoML",
                "MLflow",
                "scikit-learn"
            ],
            "milestones": [
                "Completed 3.3 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in OpenCV, YOLO, Docker."
            ]
        }
    },
    "CAND_0049615": {
        "id": "CAND_0049615",
        "fileName": "kavya_mishra_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 150 mins ago",
        "text": "KAVYA MISHRA\nCandidate ID: CAND_0049615 | Location: Indore, Madhya Pradesh, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- ML Engineer at Krutrim (2023-12-09 to Present)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\n- AI Specialist at InMobi (2021-05-23 to 2023-12-09)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- M.Sc in Information Technology from Delhi College of Engineering (2006 - 2011)\n\nSKILLS:\nNLP (advanced), Deep Learning (intermediate), Recommendation Systems (intermediate), Kubeflow (intermediate), YOLO (intermediate), Reinforcement Learning (advanced), Terraform (beginner), QLoRA (advanced), Docker (beginner), ASR (intermediate), PEFT (advanced), PyTorch (intermediate), Pinecone (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.1 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "NLP",
                "Deep Learning",
                "Recommendation Systems",
                "Kubeflow",
                "YOLO",
                "Reinforcement Learning",
                "Terraform",
                "QLoRA"
            ],
            "milestones": [
                "Completed 5.1 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in NLP, Deep Learning, Recommendation Systems."
            ]
        }
    },
    "CAND_0064331": {
        "id": "CAND_0064331",
        "fileName": "saanvi_iyer_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 152 mins ago",
        "text": "SAANVI IYER\nCandidate ID: CAND_0064331 | Location: Jaipur, Rajasthan, India\nHeadline: Senior Software Engineer (ML) | Data Science & ML enthusiast\n\nSUMMARY:\nData scientist / ML engineer with 4.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- Senior Software Engineer (ML) at Swiggy (2025-02-01 to Present)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\n- AI Research Engineer at Flipkart (2022-03-19 to 2024-12-03)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\nEDUCATION:\n- M.E. in Artificial Intelligence from IIT Kanpur (2003 - 2006)\n- B.Sc in Data Science from Stanford University (2010 - 2015)\n\nSKILLS:\nLLMs (intermediate), BentoML (intermediate), Forecasting (advanced), Data Science (advanced), TensorFlow (intermediate), YOLO (advanced), Learning to Rank (advanced), Image Classification (intermediate), dbt (intermediate), Deep Learning (intermediate), Information Retrieval (intermediate), Photoshop (intermediate), Fine-tuning LLMs (intermediate), Sentence Transformers (intermediate), OpenSearch (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.2 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "LLMs",
                "BentoML",
                "Forecasting",
                "Data Science",
                "TensorFlow",
                "YOLO",
                "Learning to Rank",
                "Image Classification"
            ],
            "milestones": [
                "Completed 4.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in LLMs, BentoML, Forecasting."
            ]
        }
    },
    "CAND_0061257": {
        "id": "CAND_0061257",
        "fileName": "advaith_pillai_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 154 mins ago",
        "text": "ADVAITH PILLAI\nCandidate ID: CAND_0061257 | Location: Noida, Uttar Pradesh, India\nHeadline: Senior Engineer | 8.0+ yrs in production systems\n\nSUMMARY:\nSenior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer \u2014 the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes \u2014 over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want \u2014 so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.\n\nEXPERIENCE:\n- Staff Machine Learning Engineer at LinkedIn (2022-11-14 to Present)\n  Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling \u2014 it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months.\n\n- Senior Applied Scientist at Yellow.ai (2018-08-07 to 2022-11-14)\n  Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side \u2014 building offline metrics that actually correlated with online engagement, which turned out to be the hardest part.\n\nEDUCATION:\n- M.S. in Computer Science from VJTI Mumbai (2005 - 2010)\n- M.E. in Artificial Intelligence from IIT Roorkee (2003 - 2008)\n\nSKILLS:\nPEFT (advanced), Haystack (advanced), Time Series (advanced), Machine Learning (expert), Information Retrieval Systems (advanced), Search Infrastructure (expert), Image Classification (advanced), TTS (intermediate), Feature Engineering (advanced), ETL (intermediate), Model Adaptation (expert), Indexing Algorithms (expert), Workflow Orchestration (expert), Search Backend (advanced), Python (expert), Vector Representations (expert)",
        "parsed": {
            "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer \u2014 the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes \u2014 over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want \u2014 so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
            "skills": [
                "PEFT",
                "Haystack",
                "Time Series",
                "Machine Learning",
                "Information Retrieval Systems",
                "Search Infrastructure",
                "Image Classification",
                "TTS"
            ],
            "milestones": [
                "Completed 8.0 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in PEFT, Haystack, Time Series."
            ]
        }
    },
    "CAND_0076163": {
        "id": "CAND_0076163",
        "fileName": "nikhil_mittal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 156 mins ago",
        "text": "NIKHIL MITTAL\nCandidate ID: CAND_0076163 | Location: Chandigarh, Chandigarh, India\nHeadline: NLP Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- NLP Engineer at Ola (2022-08-16 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- NLP Engineer at Zoho (2019-09-01 to 2022-08-16)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\nEDUCATION:\n- M.Tech in Information Technology from VJTI Mumbai (2015 - 2018)\n\nSKILLS:\nWeaviate (advanced), LangChain (expert), YOLO (intermediate), Reinforcement Learning (intermediate), Statistical Modeling (advanced), BM25 (advanced), Semantic Search (expert), LlamaIndex (expert), Prompt Engineering (advanced), PyTorch (advanced), OpenCV (intermediate), Sentence Transformers (advanced), Python (advanced), Elasticsearch (expert), ASR (intermediate), MLOps (intermediate), OpenSearch (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Weaviate",
                "LangChain",
                "YOLO",
                "Reinforcement Learning",
                "Statistical Modeling",
                "BM25",
                "Semantic Search",
                "LlamaIndex"
            ],
            "milestones": [
                "Completed 6.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Weaviate, LangChain, YOLO."
            ]
        }
    },
    "CAND_0077031": {
        "id": "CAND_0077031",
        "fileName": "amit_pandey_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 158 mins ago",
        "text": "AMIT PANDEY\nCandidate ID: CAND_0077031 | Location: Vizag, Andhra Pradesh, India\nHeadline: Software Engineer | SQL, Spark, Cloud\n\nSUMMARY:\nSoftware / data professional with 5.0 years of experience building data pipelines, backend systems, and analytics infrastructure. I'm a backend/data hybrid \u2014 Spark, Airflow, SQL warehouses are home territory; I'm building competence on the ML side. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Software Engineer at Paytm (2025-05-02 to Present)\n  Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure.\n\n- Software Engineer at Flipkart (2023-04-13 to 2025-05-02)\n  Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org.\n\n- Data Analyst at Unacademy (2021-05-23 to 2023-02-12)\n  Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models.\n\nEDUCATION:\n- M.Sc in Computer Science from IIT Guwahati (2002 - 2007)\n\nSKILLS:\nMLOps (intermediate), FastAPI (beginner), dbt (beginner), LoRA (advanced), ASR (intermediate), Django (beginner), Hugging Face Transformers (advanced), FAISS (advanced), SQL (beginner), Python (advanced), Forecasting (intermediate)",
        "parsed": {
            "summary": "Software / data professional with 5.0 years of experience building data pipelines, backend systems, and analytics infrastructure. I'm a backend/data hybrid \u2014 Spark, Airflow, SQL warehouses are home territory; I'm building competence on the ML side. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "MLOps",
                "FastAPI",
                "dbt",
                "LoRA",
                "ASR",
                "Django",
                "Hugging Face Transformers",
                "FAISS"
            ],
            "milestones": [
                "Completed 5.0 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in MLOps, FastAPI, dbt."
            ]
        }
    },
    "CAND_0075249": {
        "id": "CAND_0075249",
        "fileName": "ishaan_arora_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 160 mins ago",
        "text": "ISHAAN ARORA\nCandidate ID: CAND_0075249 | Location: Ahmedabad, Gujarat, India\nHeadline: Applied ML Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 6.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Zomato (2023-06-12 to Present)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- Search Engineer at upGrad (2020-04-21 to 2023-06-05)\n  Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.\n\nEDUCATION:\n- M.Tech in Artificial Intelligence from IIT Hyderabad (2009 - 2013)\n- M.E. in Computer Engineering from NIT Warangal (2006 - 2011)\n\nSKILLS:\nSentence Transformers (expert), Milvus (expert), Machine Learning (expert), Fine-tuning LLMs (expert), MLflow (advanced), Hadoop (beginner), BM25 (expert), Pinecone (expert), Haystack (expert), Time Series (intermediate), Diffusion Models (intermediate), ASR (intermediate), Kubeflow (advanced), Learning to Rank (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 6.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Sentence Transformers",
                "Milvus",
                "Machine Learning",
                "Fine-tuning LLMs",
                "MLflow",
                "Hadoop",
                "BM25",
                "Pinecone"
            ],
            "milestones": [
                "Completed 6.2 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Sentence Transformers, Milvus, Machine Learning."
            ]
        }
    },
    "CAND_0022254": {
        "id": "CAND_0022254",
        "fileName": "shaurya_iyer_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 162 mins ago",
        "text": "SHAURYA IYER\nCandidate ID: CAND_0022254 | Location: Indore, Madhya Pradesh, India\nHeadline: Senior Data Engineer | 5.7+ yrs in data engineering\n\nSUMMARY:\nSoftware / data professional with 5.7 years of experience building data pipelines, backend systems, and analytics infrastructure. Most of my work has been data pipelines and analytics infrastructure; I've shipped a couple of small ML features but it's not the core of my day. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Senior Data Engineer at upGrad (2022-12-14 to Present)\n  Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests.\n\n- Software Engineer at InMobi (2021-11-19 to 2022-12-14)\n  Implemented streaming data pipelines on Kafka and Spark Streaming for a real-time user-activity processing platform. Designed the schema-registry integration, the watermark/state management approach, and the deduplication logic for late-arriving events. Worked closely with the data science team to make sure feature pipelines aligned with what their models needed. Most of my career has been data engineering, with some adjacent ML exposure.\n\n- Analytics Engineer at Paytm (2020-08-26 to 2021-09-20)\n  Backend development with Python (FastAPI), PostgreSQL, and Redis at a B2B SaaS product. Owned the analytics-and-reporting service which serves dashboards to ~3K paying customers. Recent work includes integrating a model-serving service (built by another team) into our API layer; my work was the integration and observability, not the model itself. Strong on API design, database performance, and reliability engineering.\n\nEDUCATION:\n- M.Tech in Artificial Intelligence from IIIT Hyderabad (2007 - 2010)\n- Ph.D in Data Science from Amity University (2003 - 2007)\n\nSKILLS:\nData Science (advanced), Machine Learning (advanced), Embeddings (intermediate), CI/CD (beginner), ASR (intermediate), LangChain (advanced), Reinforcement Learning (advanced), Speech Recognition (advanced), Spark (intermediate), OpenSearch (advanced), Sales (intermediate), MLflow (intermediate), Azure (beginner), Apache Beam (beginner), Diffusion Models (intermediate), Docker (beginner)",
        "parsed": {
            "summary": "Software / data professional with 5.7 years of experience building data pipelines, backend systems, and analytics infrastructure. Most of my work has been data pipelines and analytics infrastructure; I've shipped a couple of small ML features but it's not the core of my day. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "Data Science",
                "Machine Learning",
                "Embeddings",
                "CI/CD",
                "ASR",
                "LangChain",
                "Reinforcement Learning",
                "Speech Recognition"
            ],
            "milestones": [
                "Completed 5.7 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Data Science, Machine Learning, Embeddings."
            ]
        }
    },
    "CAND_0046132": {
        "id": "CAND_0046132",
        "fileName": "ishaan_pillai_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 164 mins ago",
        "text": "ISHAAN PILLAI\nCandidate ID: CAND_0046132 | Location: Noida, Uttar Pradesh, India\nHeadline: AI Research Engineer | Data Science & ML enthusiast\n\nSUMMARY:\nData scientist / ML engineer with 4.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- AI Research Engineer at Verloop.io (2024-12-03 to Present)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\n- Senior Software Engineer (ML) at Meesho (2022-03-19 to 2024-12-03)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- M.E. in Machine Learning from BITS Pilani (2010 - 2015)\n\nSKILLS:\nKubeflow (intermediate), Data Science (advanced), OpenCV (advanced), Information Retrieval (intermediate), GANs (advanced), dbt (beginner), Snowflake (intermediate), MLOps (advanced), MLflow (advanced), PyTorch (intermediate), Time Series (advanced), Haystack (advanced), Diffusion Models (intermediate), Fine-tuning LLMs (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "Kubeflow",
                "Data Science",
                "OpenCV",
                "Information Retrieval",
                "GANs",
                "dbt",
                "Snowflake",
                "MLOps"
            ],
            "milestones": [
                "Completed 4.3 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Kubeflow, Data Science, OpenCV."
            ]
        }
    },
    "CAND_0039521": {
        "id": "CAND_0039521",
        "fileName": "kiara_krishnan_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 166 mins ago",
        "text": "KIARA KRISHNAN\nCandidate ID: CAND_0039521 | Location: Coimbatore, Tamil Nadu, India\nHeadline: Search Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 5.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Search Engineer at Salesforce (2024-03-08 to Present)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\n- Machine Learning Engineer at Salesforce (2021-07-15 to 2024-03-01)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\nEDUCATION:\n- B.Sc in Artificial Intelligence from Symbiosis International (2015 - 2020)\n\nSKILLS:\nAccounting (intermediate), Time Series (advanced), Hugging Face Transformers (expert), BentoML (intermediate), Forecasting (intermediate), Marketing (beginner), PEFT (advanced), Weaviate (expert), BM25 (expert), Haystack (expert), Semantic Search (expert), Object Detection (advanced), Embeddings (advanced), Sentence Transformers (advanced), RAG (advanced), Qdrant (advanced), Machine Learning (expert), ASR (advanced), PyTorch (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 5.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Accounting",
                "Time Series",
                "Hugging Face Transformers",
                "BentoML",
                "Forecasting",
                "Marketing",
                "PEFT",
                "Weaviate"
            ],
            "milestones": [
                "Completed 3.0 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Accounting, Time Series, Hugging Face Transformers."
            ]
        }
    },
    "CAND_0050876": {
        "id": "CAND_0050876",
        "fileName": "vivaan_shah_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 168 mins ago",
        "text": "VIVAAN SHAH\nCandidate ID: CAND_0050876 | Location: Kolkata, West Bengal, India\nHeadline: Applied ML Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 6.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Applied ML Engineer at Freshworks (2023-04-13 to Present)\n  Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality \u2014 the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.\n\n- AI Engineer at Yellow.ai (2021-04-23 to 2023-04-13)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\n- Recommendation Systems Engineer at Razorpay (2020-06-27 to 2021-03-24)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- M.S. in Machine Learning from Stanford University (2010 - 2013)\n- M.E. in Information Technology from IIT Kharagpur (2013 - 2017)\n\nSKILLS:\nSQL (beginner), Qdrant (advanced), MLOps (advanced), FAISS (advanced), scikit-learn (expert), Weights & Biases (advanced), LlamaIndex (advanced), Forecasting (advanced), Machine Learning (advanced), OpenSearch (expert), YOLO (intermediate), Kubeflow (intermediate), QLoRA (expert), Sentence Transformers (expert), Image Classification (intermediate), Python (expert), Prompt Engineering (expert), PyTorch (advanced)",
        "parsed": {
            "summary": "Machine learning engineer with 6.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "SQL",
                "Qdrant",
                "MLOps",
                "FAISS",
                "scikit-learn",
                "Weights & Biases",
                "LlamaIndex",
                "Forecasting"
            ],
            "milestones": [
                "Completed 6.0 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in SQL, Qdrant, MLOps."
            ]
        }
    },
    "CAND_0019143": {
        "id": "CAND_0019143",
        "fileName": "advik_chatterjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 170 mins ago",
        "text": "ADVIK CHATTERJEE\nCandidate ID: CAND_0019143 | Location: Chandigarh, Chandigarh, India\nHeadline: Senior Software Engineer | Data pipelines & analytics\n\nSUMMARY:\nSoftware / data professional with 4.7 years of experience building data pipelines, backend systems, and analytics infrastructure. I'm a backend/data hybrid \u2014 Spark, Airflow, SQL warehouses are home territory; I'm building competence on the ML side. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Senior Software Engineer at Stark Industries (2023-03-14 to Present)\n  Backend + data hybrid role at a growth-stage startup. Built the company's first proper data warehouse (migrating from a tangled set of Postgres replicas to a clean Snowflake setup with dbt), the orchestration layer (Airflow), and the BI integration (Looker). Shipped a couple of small predictive features but the bulk of the role was data infrastructure.\n\n- Senior Data Engineer at Flipkart (2021-11-19 to 2023-03-14)\n  Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests.\n\nEDUCATION:\n- M.Tech in Electrical Engineering from Local Engineering College (2016 - 2019)\n\nSKILLS:\nAngular (intermediate), CSS (beginner), Speech Recognition (intermediate), QLoRA (advanced), Azure (beginner), Redux (beginner), gRPC (beginner), Airflow (beginner), CNN (intermediate), GANs (intermediate), Milvus (advanced), BM25 (advanced)",
        "parsed": {
            "summary": "Software / data professional with 4.7 years of experience building data pipelines, backend systems, and analytics infrastructure. I'm a backend/data hybrid \u2014 Spark, Airflow, SQL warehouses are home territory; I'm building competence on the ML side. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "Angular",
                "CSS",
                "Speech Recognition",
                "QLoRA",
                "Azure",
                "Redux",
                "gRPC",
                "Airflow"
            ],
            "milestones": [
                "Completed 4.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Angular, CSS, Speech Recognition."
            ]
        }
    },
    "CAND_0086022": {
        "id": "CAND_0086022",
        "fileName": "dhruv_naidu_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 172 mins ago",
        "text": "DHRUV NAIDU\nCandidate ID: CAND_0086022 | Location: Kolkata, West Bengal, India\nHeadline: Senior Applied Scientist | LLMs, RAG, Vector Search | ex-Top Tech\n\nSUMMARY:\nSenior AI engineer with 5.3 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I've made all the standard mistakes \u2014 embedding everything before defining the metric, over-investing in fine-tuning, optimizing offline metrics that don't move online \u2014 so I notice them faster now. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Senior Applied Scientist at Sarvam AI (2024-05-07 to Present)\n  Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch \u2014 NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.\n\n- Senior ML Engineer \u2014 Search & Ranking at Uber (2021-02-22 to 2024-04-07)\n  Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.\n\nEDUCATION:\n- B.Tech in Data Science from Stanford University (2016 - 2020)\n\nSKILLS:\nVector Search (advanced), MLflow (advanced), Recommendation Systems (advanced), Databricks (beginner), Deep Learning (advanced), pgvector (expert), Fine-tuning LLMs (expert), Elasticsearch (advanced), QLoRA (advanced), Pinecone (expert), Embeddings (expert), Kubeflow (intermediate), PyTorch (expert), ETL (intermediate), TensorFlow (advanced), NLP (expert), Sentence Transformers (expert), LoRA (advanced), LangChain (expert)",
        "parsed": {
            "summary": "Senior AI engineer with 5.3 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I've made all the standard mistakes \u2014 embedding everything before defining the metric, over-investing in fine-tuning, optimizing offline metrics that don't move online \u2014 so I notice them faster now. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "Vector Search",
                "MLflow",
                "Recommendation Systems",
                "Databricks",
                "Deep Learning",
                "pgvector",
                "Fine-tuning LLMs",
                "Elasticsearch"
            ],
            "milestones": [
                "Completed 5.3 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Vector Search, MLflow, Recommendation Systems."
            ]
        }
    },
    "CAND_0006567": {
        "id": "CAND_0006567",
        "fileName": "aditya_subramanian_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 174 mins ago",
        "text": "ADITYA SUBRAMANIAN\nCandidate ID: CAND_0006567 | Location: Noida, Uttar Pradesh, India\nHeadline: Senior Engineer | Information Retrieval at scale\n\nSUMMARY:\nSenior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer \u2014 the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes \u2014 over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want \u2014 so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.\n\nEXPERIENCE:\n- Senior AI Engineer at Meta (2024-04-07 to Present)\n  Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment \u2014 none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work.\n\n- Senior Applied Scientist at Razorpay (2020-03-29 to 2024-04-07)\n  Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side \u2014 building offline metrics that actually correlated with online engagement, which turned out to be the hardest part.\n\n- Senior ML Engineer \u2014 Search & Ranking at Glance (2018-08-23 to 2020-03-15)\n  Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer \u2014 feature monitoring, drift detection, retraining cadence \u2014 rather than the modeling itself. Worked closely with the product and growth teams.\n\nEDUCATION:\n- B.Sc in Machine Learning from IIT Bombay (2016 - 2020)\n\nSKILLS:\nSpeech Recognition (intermediate), scikit-learn (expert), Search Backend (advanced), Model Adaptation (expert), Vector Representations (advanced), BM25 (expert), Workflow Orchestration (expert), GANs (intermediate), NLP (advanced), Kubernetes (beginner), Python (expert), Ranking Systems (advanced), Text Encoders (advanced), Data Science (intermediate), Feature Engineering (advanced), Search & Discovery (advanced), Prompt Engineering (expert), Haystack (expert), Content Matching (expert), Recommendation Systems (advanced)",
        "parsed": {
            "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer \u2014 the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes \u2014 over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want \u2014 so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
            "skills": [
                "Speech Recognition",
                "scikit-learn",
                "Search Backend",
                "Model Adaptation",
                "Vector Representations",
                "BM25",
                "Workflow Orchestration",
                "GANs"
            ],
            "milestones": [
                "Completed 7.9 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Speech Recognition, scikit-learn, Search Backend."
            ]
        }
    },
    "CAND_0006418": {
        "id": "CAND_0006418",
        "fileName": "rahul_mukherjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 176 mins ago",
        "text": "RAHUL MUKHERJEE\nCandidate ID: CAND_0006418 | Location: Gurgaon, Haryana, India\nHeadline: Machine Learning Engineer | Search, Ranking & Retrieval\n\nSUMMARY:\nMachine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at Verloop.io (2023-02-12 to Present)\n  Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) \u2014 that work was as important as the modeling itself.\n\n- AI Engineer at Flipkart (2020-11-24 to 2023-02-12)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\nEDUCATION:\n- M.S. in Data Science from Stanford University (2014 - 2017)\n\nSKILLS:\nKubernetes (intermediate), gRPC (intermediate), Semantic Search (expert), Embeddings (expert), TensorFlow (advanced), Object Detection (intermediate), Weaviate (expert), Elasticsearch (advanced), Snowflake (intermediate), MLflow (advanced), Learning to Rank (expert), Forecasting (intermediate), Qdrant (expert), Diffusion Models (advanced), Time Series (advanced), OpenSearch (expert)",
        "parsed": {
            "summary": "Machine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor \u2014 too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Kubernetes",
                "gRPC",
                "Semantic Search",
                "Embeddings",
                "TensorFlow",
                "Object Detection",
                "Weaviate",
                "Elasticsearch"
            ],
            "milestones": [
                "Completed 5.7 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Kubernetes, gRPC, Semantic Search."
            ]
        }
    },
    "CAND_0062626": {
        "id": "CAND_0062626",
        "fileName": "jay_dutta_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 178 mins ago",
        "text": "JAY DUTTA\nCandidate ID: CAND_0062626 | Location: Trivandrum, Kerala, India\nHeadline: Backend Engineer | Data pipelines & analytics\n\nSUMMARY:\nSoftware / data professional with 4.7 years of experience building data pipelines, backend systems, and analytics infrastructure. Most of my work has been data pipelines and analytics infrastructure; I've shipped a couple of small ML features but it's not the core of my day. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Backend Engineer at Tech Mahindra (2025-02-01 to Present)\n  Backend development with Python (FastAPI), PostgreSQL, and Redis at a B2B SaaS product. Owned the analytics-and-reporting service which serves dashboards to ~3K paying customers. Recent work includes integrating a model-serving service (built by another team) into our API layer; my work was the integration and observability, not the model itself. Strong on API design, database performance, and reliability engineering.\n\n- Software Engineer at Vedantu (2023-10-10 to 2025-02-01)\n  Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org.\n\n- Backend Engineer at Ola (2021-12-12 to 2023-10-03)\n  Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models.\n\nEDUCATION:\n- M.Sc in Mechanical Engineering from Chandigarh University (2011 - 2015)\n- B.E. in Mathematics from VIT Chennai (2000 - 2005)\n\nSKILLS:\nMongoDB (intermediate), Qdrant (advanced), PostgreSQL (intermediate), dbt (intermediate), Weights & Biases (intermediate), NLP (advanced), Feature Engineering (intermediate), TensorFlow (intermediate), Redux (beginner), Computer Vision (advanced), Airflow (beginner), Excel (intermediate), Speech Recognition (advanced), TTS (advanced), OpenCV (advanced)",
        "parsed": {
            "summary": "Software / data professional with 4.7 years of experience building data pipelines, backend systems, and analytics infrastructure. Most of my work has been data pipelines and analytics infrastructure; I've shipped a couple of small ML features but it's not the core of my day. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "MongoDB",
                "Qdrant",
                "PostgreSQL",
                "dbt",
                "Weights & Biases",
                "NLP",
                "Feature Engineering",
                "TensorFlow"
            ],
            "milestones": [
                "Completed 4.7 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in MongoDB, Qdrant, PostgreSQL."
            ]
        }
    },
    "CAND_0064904": {
        "id": "CAND_0064904",
        "fileName": "karan_trivedi_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 180 mins ago",
        "text": "KARAN TRIVEDI\nCandidate ID: CAND_0064904 | Location: Hyderabad, Telangana, India\nHeadline: AI Engineer | ML, NLP, Recommendation Systems\n\nSUMMARY:\nMachine learning engineer with 4.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- AI Engineer at LinkedIn (2024-03-08 to Present)\n  Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.\n\n- Applied ML Engineer at Freshworks (2021-08-21 to 2024-03-08)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- B.Tech in Information Technology from RV College of Engineering (2005 - 2009)\n- M.E. in Data Science from Jadavpur University (2016 - 2020)\n\nSKILLS:\nEmbeddings (expert), Hugging Face Transformers (advanced), Elasticsearch (expert), Diffusion Models (intermediate), Forecasting (advanced), FastAPI (intermediate), Prompt Engineering (expert), LLMs (expert), Python (expert), MLOps (advanced), TensorFlow (expert), Weaviate (advanced), Vector Search (advanced), Recommendation Systems (advanced), OpenSearch (advanced), Computer Vision (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 4.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Embeddings",
                "Hugging Face Transformers",
                "Elasticsearch",
                "Diffusion Models",
                "Forecasting",
                "FastAPI",
                "Prompt Engineering",
                "LLMs"
            ],
            "milestones": [
                "Completed 4.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Embeddings, Hugging Face Transformers, Elasticsearch."
            ]
        }
    },
    "CAND_0046459": {
        "id": "CAND_0046459",
        "fileName": "rohan_patel_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 182 mins ago",
        "text": "ROHAN PATEL\nCandidate ID: CAND_0046459 | Location: Pune, Maharashtra, India\nHeadline: AI Research Engineer | Data Science & ML enthusiast\n\nSUMMARY:\nData scientist / ML engineer with 4.5 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.\n\nEXPERIENCE:\n- AI Research Engineer at upGrad (2023-04-13 to Present)\n  Built computer vision models for our product's image moderation feature using PyTorch \u2014 fine-tuned ResNet variants on a labeled dataset of ~200K images. Set up the training pipeline (data loading, augmentation, evaluation) and the inference service. Most of my project work has been in CV; I'm now interested in transitioning toward NLP/LLM work but my professional experience there is limited.\n\n- ML Engineer at Wipro (2022-01-18 to 2023-04-13)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\nEDUCATION:\n- M.Sc in Electronics from Generic State University (2015 - 2020)\n\nSKILLS:\nKubeflow (advanced), Django (beginner), BM25 (advanced), Qdrant (advanced), Marketing (intermediate), Semantic Search (intermediate), Machine Learning (intermediate), Speech Recognition (intermediate), YOLO (intermediate), RAG (intermediate), GANs (intermediate), Time Series (advanced), CNN (advanced), Python (advanced), pgvector (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 4.5 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've spent the last couple of years building NLP-based classification and information extraction pipelines. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. Looking for a role where I can step up to more end-to-end ownership of ML systems, not just modeling.",
            "skills": [
                "Kubeflow",
                "Django",
                "BM25",
                "Qdrant",
                "Marketing",
                "Semantic Search",
                "Machine Learning",
                "Speech Recognition"
            ],
            "milestones": [
                "Completed 4.5 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Kubeflow, Django, BM25."
            ]
        }
    },
    "CAND_0091745": {
        "id": "CAND_0091745",
        "fileName": "karan_agarwal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 184 mins ago",
        "text": "KARAN AGARWAL\nCandidate ID: CAND_0091745 | Location: Pune, Maharashtra, India\nHeadline: Junior ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.9 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- Junior ML Engineer at Locobuzz (2022-10-15 to Present)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\n- Junior ML Engineer at Swiggy (2020-08-12 to 2022-10-01)\n  Built recommendation-style features at a mid-stage startup \u2014 lighter weight than ranking systems at FAANG, but production. Used a combination of collaborative filtering (matrix factorization in implicit-feedback library) and gradient-boosted re-ranking over engagement signals. Pure ML side of the work; production deployment was handled by the platform team.\n\nEDUCATION:\n- M.E. in Computer Engineering from Thapar University (2016 - 2020)\n- B.Tech in Artificial Intelligence from SRM University (2005 - 2010)\n\nSKILLS:\nPostgreSQL (beginner), Deep Learning (advanced), Embeddings (intermediate), Fine-tuning LLMs (advanced), Java (beginner), Machine Learning (advanced), Hugging Face Transformers (advanced), Reinforcement Learning (intermediate), Data Pipelines (beginner), Weights & Biases (intermediate), MLflow (advanced), Speech Recognition (intermediate), ASR (advanced), Diffusion Models (advanced), Image Classification (advanced), PyTorch (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.9 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "PostgreSQL",
                "Deep Learning",
                "Embeddings",
                "Fine-tuning LLMs",
                "Java",
                "Machine Learning",
                "Hugging Face Transformers",
                "Reinforcement Learning"
            ],
            "milestones": [
                "Completed 5.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in PostgreSQL, Deep Learning, Embeddings."
            ]
        }
    },
    "CAND_0075439": {
        "id": "CAND_0075439",
        "fileName": "pooja_mehta_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 186 mins ago",
        "text": "POOJA MEHTA\nCandidate ID: CAND_0075439 | Location: Vizag, Andhra Pradesh, India\nHeadline: Machine Learning Engineer | Applied ML | Building intelligent products\n\nSUMMARY:\nMachine learning engineer with 4.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.\n\nEXPERIENCE:\n- Machine Learning Engineer at Flipkart (2024-04-07 to Present)\n  Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.\n\n- AI Engineer at Genpact AI (2022-03-05 to 2024-03-24)\n  Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.\n\nEDUCATION:\n- M.Sc in Machine Learning from VIT Vellore (2017 - 2022)\n\nSKILLS:\nLearning to Rank (expert), Feature Engineering (advanced), LoRA (advanced), Elasticsearch (expert), JavaScript (intermediate), OpenSearch (advanced), ASR (advanced), Vector Search (expert), Information Retrieval (advanced), Semantic Search (advanced), Embeddings (advanced), MLflow (intermediate)",
        "parsed": {
            "summary": "Machine learning engineer with 4.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
            "skills": [
                "Learning to Rank",
                "Feature Engineering",
                "LoRA",
                "Elasticsearch",
                "JavaScript",
                "OpenSearch",
                "ASR",
                "Vector Search"
            ],
            "milestones": [
                "Completed 4.3 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Learning to Rank, Feature Engineering, LoRA."
            ]
        }
    },
    "CAND_0007473": {
        "id": "CAND_0007473",
        "fileName": "manish_malhotra_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 188 mins ago",
        "text": "MANISH MALHOTRA\nCandidate ID: CAND_0007473 | Location: Sydney, Australia\nHeadline: Software Engineer | SQL, Spark, Cloud\n\nSUMMARY:\nSoftware / data professional with 3.8 years of experience building data pipelines, backend systems, and analytics infrastructure. I've been the engineer who makes ML possible by getting the data pipelines right; now I want to do more of the ML itself. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Software Engineer at Razorpay (2023-11-09 to Present)\n  Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models.\n\n- Software Engineer at Stark Industries (2022-08-16 to 2023-10-10)\n  Implemented streaming data pipelines on Kafka and Spark Streaming for a real-time user-activity processing platform. Designed the schema-registry integration, the watermark/state management approach, and the deduplication logic for late-arriving events. Worked closely with the data science team to make sure feature pipelines aligned with what their models needed. Most of my career has been data engineering, with some adjacent ML exposure.\n\nEDUCATION:\n- M.Tech in Civil Engineering from Anna University (2004 - 2008)\n\nSKILLS:\nSalesforce CRM (beginner), Docker (beginner), Rust (intermediate), JavaScript (beginner), PEFT (intermediate), TTS (advanced), Haystack (advanced), ETL (beginner), Azure (intermediate), GANs (advanced), Airflow (beginner), Statistical Modeling (intermediate), Data Science (intermediate), Diffusion Models (intermediate), Milvus (intermediate), Embeddings (advanced), PowerPoint (intermediate), YOLO (intermediate)",
        "parsed": {
            "summary": "Software / data professional with 3.8 years of experience building data pipelines, backend systems, and analytics infrastructure. I've been the engineer who makes ML possible by getting the data pipelines right; now I want to do more of the ML itself. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "Salesforce CRM",
                "Docker",
                "Rust",
                "JavaScript",
                "PEFT",
                "TTS",
                "Haystack",
                "ETL"
            ],
            "milestones": [
                "Completed 3.8 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Salesforce CRM, Docker, Rust."
            ]
        }
    },
    "CAND_0001086": {
        "id": "CAND_0001086",
        "fileName": "kabir_shetty_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 190 mins ago",
        "text": "KABIR SHETTY\nCandidate ID: CAND_0001086 | Location: Vizag, Andhra Pradesh, India\nHeadline: Senior Software Engineer | 8.0+ yrs in data engineering\n\nSUMMARY:\nSoftware / data professional with 8.0 years of experience building data pipelines, backend systems, and analytics infrastructure. Started my career in backend engineering and gradually moved closer to data \u2014 first dashboards, then ETL, now some basic ML. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.\n\nEXPERIENCE:\n- Senior Software Engineer at Dunder Mifflin (2022-08-16 to Present)\n  Designed and maintained the analytical data warehouse on Snowflake supporting the BI team's ~50 dashboards. Wrote complex SQL \u2014 heavy on window functions, CTEs, and incremental modeling patterns via dbt. Worked on the data modeling side (dimensional modeling, slowly changing dimensions) as well as performance optimization (query tuning, cluster sizing, materialized views). Also built the lineage and documentation framework now in use across the data org.\n\n- Backend Engineer at Swiggy (2019-07-26 to 2022-08-09)\n  Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests.\n\n- Data Analyst at HCL (2018-08-30 to 2019-07-26)\n  Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models.\n\nEDUCATION:\n- M.Tech in Data Science from Amity University (2016 - 2020)\n\nSKILLS:\nLearning to Rank (advanced), FastAPI (beginner), Terraform (beginner), dbt (intermediate), SAP (intermediate), Snowflake (beginner), MLOps (intermediate), Hadoop (beginner), Vector Search (intermediate), Qdrant (advanced), NLP (intermediate), YOLO (advanced), Data Pipelines (intermediate), Feature Engineering (advanced)",
        "parsed": {
            "summary": "Software / data professional with 8.0 years of experience building data pipelines, backend systems, and analytics infrastructure. Started my career in backend engineering and gradually moved closer to data \u2014 first dashboards, then ETL, now some basic ML. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
            "skills": [
                "Learning to Rank",
                "FastAPI",
                "Terraform",
                "dbt",
                "SAP",
                "Snowflake",
                "MLOps",
                "Hadoop"
            ],
            "milestones": [
                "Completed 8.0 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in Learning to Rank, FastAPI, Terraform."
            ]
        }
    },
    "CAND_0032527": {
        "id": "CAND_0032527",
        "fileName": "priya_bansal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 192 mins ago",
        "text": "PRIYA BANSAL\nCandidate ID: CAND_0032527 | Location: Ahmedabad, Gujarat, India\nHeadline: Junior ML Engineer | 3.9 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 3.9 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- Junior ML Engineer at Flipkart (2023-04-13 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- AI Research Engineer at Swiggy (2022-07-17 to 2023-03-14)\n  Worked on time-series forecasting models for supply-chain demand prediction at a logistics company. Built models in Prophet, LightGBM, and (for one project) a small LSTM \u2014 the LightGBM model ended up shipping. Also ran some reinforcement learning experiments for dynamic pricing but those didn't make it to production. The work was a mix of modeling, analysis, and stakeholder communication with the operations team.\n\nEDUCATION:\n- Ph.D in Artificial Intelligence from KIIT University (2015 - 2018)\n\nSKILLS:\nDiffusion Models (intermediate), Apache Flink (intermediate), Deep Learning (advanced), MLflow (intermediate), Data Science (advanced), NLP (intermediate), Time Series (advanced), YOLO (advanced), LangChain (advanced), Statistical Modeling (intermediate), TTS (advanced), Python (advanced), Vector Search (advanced), Milvus (advanced), CNN (intermediate), Tailwind (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 3.9 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Diffusion Models",
                "Apache Flink",
                "Deep Learning",
                "MLflow",
                "Data Science",
                "NLP",
                "Time Series",
                "YOLO"
            ],
            "milestones": [
                "Completed 3.9 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Diffusion Models, Apache Flink, Deep Learning."
            ]
        }
    },
    "CAND_0074339": {
        "id": "CAND_0074339",
        "fileName": "rajesh_banerjee_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 194 mins ago",
        "text": "RAJESH BANERJEE\nCandidate ID: CAND_0074339 | Location: Bhubaneswar, Odisha, India\nHeadline: ML Engineer | Building ML-powered solutions\n\nSUMMARY:\nData scientist / ML engineer with 5.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.\n\nEXPERIENCE:\n- ML Engineer at Observe.AI (2024-06-06 to Present)\n  Worked on customer-facing predictive modeling for an e-commerce platform \u2014 churn prediction, conversion likelihood, lifetime value estimation. Used scikit-learn and XGBoost; main models were gradient-boosted trees with ~80 hand-engineered features. The work was split roughly 60/40 between modeling and data prep / SQL. The churn model is now used by the retention team, though my role was more on the modeling side than the productionization.\n\n- Senior Software Engineer (ML) at InMobi (2021-03-24 to 2024-06-06)\n  Contributed to ML feature engineering and model deployment for a fraud-detection product. My main role was engineering: building the Flask-based prediction API, integrating with the feature store, and writing the model-serving observability layer. I worked closely with senior data scientists but my own modeling work was secondary \u2014 I was the production-side engineer.\n\nEDUCATION:\n- B.E. in Computer Science from COEP Pune (2016 - 2021)\n\nSKILLS:\nSalesforce CRM (beginner), OpenCV (intermediate), PyTorch (intermediate), Marketing (beginner), OpenSearch (advanced), Learning to Rank (intermediate), Tailwind (intermediate), FAISS (advanced), Time Series (advanced), Image Classification (advanced), Sentence Transformers (intermediate), LlamaIndex (intermediate), BentoML (advanced), ASR (advanced), Recommendation Systems (advanced), Feature Engineering (intermediate), MLOps (intermediate), LoRA (intermediate)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 5.3 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. Most of my recent work has been on predictive modeling for customer-facing problems \u2014 churn, conversion, lifetime value. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I'm looking to grow into a deeper AI/ML system-building role \u2014 closer to retrieval, LLMs, and modern ranking systems.",
            "skills": [
                "Salesforce CRM",
                "OpenCV",
                "PyTorch",
                "Marketing",
                "OpenSearch",
                "Learning to Rank",
                "Tailwind",
                "FAISS"
            ],
            "milestones": [
                "Completed 5.3 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Salesforce CRM, OpenCV, PyTorch."
            ]
        }
    },
    "CAND_0059017": {
        "id": "CAND_0059017",
        "fileName": "pooja_mishra_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 196 mins ago",
        "text": "POOJA MISHRA\nCandidate ID: CAND_0059017 | Location: Ahmedabad, Gujarat, India\nHeadline: AI Research Engineer | 6.8 yrs in analytics & ML\n\nSUMMARY:\nData scientist / ML engineer with 6.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.\n\nEXPERIENCE:\n- AI Research Engineer at PhonePe (2022-09-15 to Present)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\n- Computer Vision Engineer at PhonePe (2019-10-01 to 2022-09-15)\n  Built NLP pipelines for sentiment analysis and document classification \u2014 primarily for an internal feedback-analytics dashboard. Started with sklearn-based bag-of-words models, then moved to transformer-based classifiers (DistilBERT) for the harder classes. Comfortable with PyTorch and Hugging Face but most of my training experience has been on small datasets and pre-trained model fine-tuning, not from-scratch model design.\n\nEDUCATION:\n- Ph.D in Computer Science from IIT Kharagpur (2013 - 2016)\n\nSKILLS:\nSpeech Recognition (intermediate), Sentence Transformers (advanced), FAISS (advanced), Object Detection (intermediate), Machine Learning (intermediate), TensorFlow (advanced), QLoRA (intermediate), Feature Engineering (intermediate), GCP (beginner), YOLO (advanced), Python (advanced), Forecasting (advanced), Fine-tuning LLMs (intermediate), Statistical Modeling (advanced)",
        "parsed": {
            "summary": "Data scientist / ML engineer with 6.8 years of experience in applied machine learning. Worked across predictive modeling, NLP, analytics, and lightweight deployment workflows. I've been working on recommendation-style features but lighter on the deep-learning side \u2014 mostly classical methods like collaborative filtering and gradient-boosted models. I'm strongest at the modeling and analysis side; comfortable with Python, scikit-learn, pandas, and standard MLOps tooling, but I'm still building depth on the engineering and infra side of production ML. I want to grow into senior AI engineering \u2014 get serious about LLMs and retrieval beyond the surface level.",
            "skills": [
                "Speech Recognition",
                "Sentence Transformers",
                "FAISS",
                "Object Detection",
                "Machine Learning",
                "TensorFlow",
                "QLoRA",
                "Feature Engineering"
            ],
            "milestones": [
                "Completed 6.8 years of professional experience across 2 companies.",
                "Achieved high skill proficiency in Speech Recognition, Sentence Transformers, FAISS."
            ]
        }
    },
    "CAND_0033871": {
        "id": "CAND_0033871",
        "fileName": "aisha_sethi_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 198 mins ago",
        "text": "AISHA SETHI\nCandidate ID: CAND_0033871 | Location: Seattle, USA\nHeadline: .NET Developer | Cloud & DevOps\n\nSUMMARY:\nSoftware engineer with 6.0 years of experience across web, backend, and cloud systems. Strong fundamentals in software development and system design. I've worked across web frontends, REST APIs, and cloud deployments; comfortable in most parts of a typical SaaS stack. I've been keeping up with AI/ML at a self-learner level \u2014 taken some online courses, played with the OpenAI and Anthropic APIs, built a small RAG side project \u2014 but I haven't done it in a professional capacity yet. Open to roles where I can either deepen my software engineering work or, if the team is open to it, start contributing to ML-adjacent systems.\n\nEXPERIENCE:\n- .NET Developer at Hooli (2025-03-03 to Present)\n  Test automation and QA engineering for a fintech product. Built and maintained the end-to-end test suite using Selenium and pytest, plus the load-testing setup using Locust. Worked closely with developers on testability patterns and with product on acceptance criteria. Recent work has been on shifting test responsibility into the dev team \u2014 moving from QA-as-gate to QA-as-coach. Career has been entirely in QA/test engineering.\n\n- QA Engineer at Zomato (2021-05-23 to 2025-03-03)\n  Android mobile development using Java and (more recently) Kotlin at a consumer-app company. Built and maintained multiple production features including the main shopping flow, push notification system, and the offline-first sync layer. Comfortable with the Android framework, Jetpack components, and the typical patterns (MVVM, Hilt, Coroutines). My career has been entirely on mobile so far; interested in expanding into broader backend or platform engineering.\n\n- Cloud Engineer at Pied Piper (2020-08-26 to 2021-05-23)\n  Cloud infrastructure and DevOps work at an enterprise SaaS company. Owned the AWS account architecture (VPC, IAM, networking), the Terraform modules for our service deployments, and the Kubernetes cluster operations. Designed the CI/CD pipelines (GitLab CI + ArgoCD) and the monitoring stack (Prometheus, Grafana, Loki). Strong on the infra and ops side; haven't done much application development.\n\nEDUCATION:\n- M.E. in Electrical Engineering from Amity University (2004 - 2008)\n- M.Sc in Physics from Generic State University (2014 - 2017)\n\nSKILLS:\nSAP (beginner), Rust (intermediate), Excel (beginner), FastAPI (beginner), NLP (intermediate), Go (beginner), PostgreSQL (beginner), MLOps (intermediate), Content Writing (intermediate), Microservices (intermediate), SEO (intermediate), Machine Learning (intermediate), Flask (intermediate), BigQuery (intermediate), Airflow (intermediate)",
        "parsed": {
            "summary": "Software engineer with 6.0 years of experience across web, backend, and cloud systems. Strong fundamentals in software development and system design. I've worked across web frontends, REST APIs, and cloud deployments; comfortable in most parts of a typical SaaS stack. I've been keeping up with AI/ML at a self-learner level \u2014 taken some online courses, played with the OpenAI and Anthropic APIs, built a small RAG side project \u2014 but I haven't done it in a professional capacity yet. Open to roles where I can either deepen my software engineering work or, if the team is open to it, start contributing to ML-adjacent systems.",
            "skills": [
                "SAP",
                "Rust",
                "Excel",
                "FastAPI",
                "NLP",
                "Go",
                "PostgreSQL",
                "MLOps"
            ],
            "milestones": [
                "Completed 6.0 years of professional experience across 3 companies.",
                "Achieved high skill proficiency in SAP, Rust, Excel."
            ]
        }
    },
    "CAND_0077337": {
        "id": "CAND_0077337",
        "fileName": "aarav_agarwal_resume.pdf",
        "meta": "PDF Document \u2022 120 KB \u2022 Parsed 200 mins ago",
        "text": "AARAV AGARWAL\nCandidate ID: CAND_0077337 | Location: Kochi, Kerala, India\nHeadline: Staff Machine Learning Engineer | Building AI-native search & ranking systems\n\nSUMMARY:\nSenior AI engineer with 7.0 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.\n\nEXPERIENCE:\n- Staff Machine Learning Engineer at Paytm (2024-11-03 to Present)\n  Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month.\n\n- Senior NLP Engineer at Razorpay (2023-08-27 to 2024-10-20)\n  Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout.\n\n- Senior NLP Engineer at Glance (2020-01-08 to 2023-08-20)\n  Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.\n\n- Senior AI Engineer at Aganitha (2019-06-12 to 2019-12-09)\n  Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.\n\nEDUCATION:\n- B.Tech in Computer Engineering from Georgia Tech (2014 - 2018)\n\nSKILLS:\nGANs (intermediate), Semantic Search (advanced), QLoRA (expert), pgvector (expert), Pinecone (advanced), Feature Engineering (intermediate), BM25 (expert), Information Retrieval (expert), LLMs (expert), OpenCV (intermediate), Data Science (intermediate), Forecasting (advanced), Excel (intermediate), RAG (expert), Qdrant (expert), Recommendation Systems (expert), Sentence Transformers (expert), LlamaIndex (expert), Python (expert), OpenSearch (advanced)",
        "parsed": {
            "summary": "Senior AI engineer with 7.0 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move \u2014 looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
            "skills": [
                "GANs",
                "Semantic Search",
                "QLoRA",
                "pgvector",
                "Pinecone",
                "Feature Engineering",
                "BM25",
                "Information Retrieval"
            ],
            "milestones": [
                "Completed 7.0 years of professional experience across 4 companies.",
                "Achieved high skill proficiency in GANs, Semantic Search, QLoRA."
            ]
        }
    }
};
