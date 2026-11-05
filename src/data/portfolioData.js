// src/data/portfolioData.js
// Single source of truth for portfolio content.
// Verified details only - no fabricated data.

export const personalInfo = {
  name: "Irin Dominic",
  headline: "Computer Science Engineering Student | Aspiring Software Engineer",
  institution: "Rajiv Gandhi Institute of Technology (RIT), Kottayam",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "2027",
  cgpa: "9.64 / 10",
  email: "irindominic987@gmail.com",
  location: "Kottayam, Kerala, India",
  github: "https://github.com/Irindominic",
  linkedin: "https://www.linkedin.com/in/irindominic/",
  resumeUrl: "/Irin_Dominic_Resume.pdf", // Configurable path to resume
  
  heroIntro: "I'm a final-year Computer Science Engineering student at RIT Kottayam, interested in software development, problem-solving, and AI-driven applications.\n\nI enjoy exploring technologies, developing practical applications, and understanding how software systems work. Through academic projects, internships, and independent learning, I continuously work on strengthening my technical skills and building meaningful solutions.",
  
  coreInterests: [
    "Software Development",
    "Full-Stack Development",
    "Artificial Intelligence & Machine Learning",
    "Problem Solving"
  ]
};

export const aboutData = {
  summary: [
    "I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering at Rajiv Gandhi Institute of Technology, Kottayam.",
    "I have a strong academic foundation and enjoy exploring different areas of computer science through coursework, practical implementation, and technical projects.",
    "My interests include software engineering, backend development, full-stack applications, and artificial intelligence. I have worked on projects involving web technologies, database systems, computer vision, and machine learning.",
    "I believe in learning through implementation and enjoy understanding the problem behind a technology rather than simply using it."
  ],
  education: {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Rajiv Gandhi Institute of Technology (RIT), Kottayam",
    duration: "2023–2027",
    cgpa: "9.64 / 10",
    highlights: "Consistent academic excellence with a strong foundation in core computer science disciplines."
  },
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Computer Organization and Architecture",
    "Compiler Design",
    "Discrete Mathematical Structures"
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "code",
    description: "Core languages used for problem solving and software engineering",
    skills: ["Python", "C", "Java"]
  },
  {
    category: "Frontend Development",
    icon: "layout",
    description: "Responsive, modern user interface development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    icon: "server",
    description: "API design, business logic, and server-side architecture",
    skills: ["Flask", "FastAPI", "Node.js", "Express.js"]
  },
  {
    category: "Databases",
    icon: "database",
    description: "Relational, document, and ORM database management",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLAlchemy"]
  },
  {
    category: "AI / Machine Learning",
    icon: "brain",
    description: "Data analysis, computer vision, and NLP frameworks",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "YOLOv5",
      "Natural Language Processing",
      "Machine Learning fundamentals"
    ]
  },
  {
    category: "Tools and Platforms",
    icon: "tool",
    description: "Version control, development environments, and API tooling",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    category: "Core Computer Science",
    icon: "cpu",
    description: "Foundational computer science principles",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks"
    ]
  }
];

export const projectsData = [
  {
    id: "malayalam-fake-review",
    title: "Malayalam Fake Product Review Detection System",
    subtitle: "LLM-Based Malayalam Fake Review Detection System",
    category: "Final-Year Project / Natural Language Processing / Machine Learning",
    statusBadge: "Ongoing – Final Year Project",
    statusType: "research",
    shortOverview: "A machine learning and NLP system to detect deceptive product reviews written in Malayalam, distinguishing genuine feedback from opinion spam and synthetic LLM-generated deceptive content.",
    problemStatement: "The availability of deceptive product reviews can affect the reliability of online product feedback. Detecting fake reviews in Malayalam presents additional challenges because of language-specific characteristics, agglutinative morphology, and limited annotated resources.",
    objective: "Develop a Malayalam-language fake review detection system using machine learning and language models, with explainability techniques to help understand model predictions.",
    technologies: [
      "Python",
      "Natural Language Processing",
      "TF-IDF",
      "Support Vector Machine",
      "MuRIL",
      "Large Language Models",
      "SHAP",
      "LIME",
      "Integrated Gradients"
    ],
    classificationLabels: "Binary Classification: Genuine = 0, Fake = 1",
    majorFeatures: [
      "Targeted for low-resource Malayalam text analysis",
      "Distinguishes human opinion spam and LLM-generated synthetic reviews",
      "Classical ML baseline (TF-IDF + Support Vector Machine)",
      "Roadmap for Multilingual transformer models (MuRIL) and PEFT LLM fine-tuning",
      "Planned explainability framework using SHAP, LIME, and Integrated Gradients"
    ],
    technicalImplementation: [
      "Malayalam text preprocessing: tokenization, stopword filtering, and normalization",
      "Dataset curation and balanced genuine/fake class distribution",
      "TF-IDF feature extraction capturing unigram and bigram frequency patterns",
      "Support Vector Machine baseline classifier for Phase 1 experimentation",
      "Exploration of multilingual transformer representations (MuRIL) for contextual semantics",
      "Exploration of Parameter-Efficient Fine-Tuning (PEFT) on open Large Language Models",
      "Interpretability pipeline using SHAP, LIME, and Integrated Gradients to identify salient token attributions"
    ],
    myContribution: "Responsible for Malayalam text preprocessing, TF-IDF feature extraction, classical machine learning baseline implementation, model evaluation, and style-confound and error analysis.",
    phase1Baseline: {
      isPreliminary: true,
      title: "Current Phase 1 Baseline Results (TF-IDF + SVM)",
      metrics: [
        { label: "Accuracy", value: "69.96%" },
        { label: "Macro F1-Score", value: "69.81%" },
        { label: "Fake F1-Score", value: "71.92%" },
        { label: "Fake Recall", value: "73.33%" },
        { label: "Genuine F1-Score", value: "67.70%" }
      ],
      note: "These represent preliminary baseline results. Deep transformer training (MuRIL), PEFT LLM fine-tuning, and model explainability modules are actively ongoing."
    },
    challengesAndLearnings: "Handling low-resource language nuances in Malayalam, addressing morphological agglutination, and systematically evaluating style confounds so the classifier does not merely memorize review length or punctuation idiosyncrasies.",
    githubUrl: "https://github.com/Irindominic/Malayalam-Fake-Review-Detection",
    liveDemoUrl: null,
    deploymentNotice: "Academic research project currently in active development. Source code, dataset preprocessing scripts, and baseline evaluation are documented in the repository.",
    architectureSteps: [
      { name: "Malayalam Corpus", detail: "Human genuine, opinion spam, and LLM synthetic reviews" },
      { name: "NLP Preprocessing", detail: "Morphological cleaning, tokenization, stopword removal" },
      { name: "Feature Extraction", detail: "TF-IDF n-grams (Baseline) & Multilingual MuRIL embeddings" },
      { name: "Classification", detail: "SVM Baseline (Phase 1) -> MuRIL / LLM PEFT (Phase 2)" },
      { name: "Explainability", detail: "SHAP, LIME, and Integrated Gradients token attribution" }
    ]
  },
  {
    id: "watchtower",
    title: "WatchTower",
    subtitle: "Computer Vision-Based Monitoring & Occupancy Control",
    category: "AI / Computer Vision / Full-Stack Application",
    statusBadge: "Locally Executed Project",
    statusType: "local",
    shortOverview: "A computer vision monitoring system combining YOLOv5 real-time object detection and counting with threshold-based environmental control mechanisms.",
    problemStatement: "Monitoring environments and maintaining defined occupancy or object-count limits can require automated detection and monitoring systems to prevent overcrowding and ensure compliance.",
    objective: "Develop an application that integrates computer vision with a web-based monitoring interface and threshold-driven control logic.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "YOLOv5"],
    thresholdConfig: {
      control: "65%",
      restrict: "85%",
      description: "When count reaches 65% of limit, active control protocols engage. At 85%, restrict protocols enforce access bounds."
    },
    majorFeatures: [
      "Real-time object detection and continuous instance counting via YOLOv5",
      "Two-tier threshold control mechanism (65% Control Threshold, 85% Restrict Threshold)",
      "FastAPI asynchronous backend for low-latency detection telemetry",
      "React-based interactive monitoring dashboard",
      "PostgreSQL database integration for logging detection intervals and counts"
    ],
    technicalImplementation: [
      "YOLOv5 inference pipeline processing frames and computing target entity counts",
      "Threshold evaluation logic: Control at 65%, Restrict at 85%",
      "FastAPI backend delivering REST endpoints and handling detection events",
      "React frontend dashboard displaying live counts, threshold alerts, and status",
      "PostgreSQL schema storing timestamped detection events, counts, and alert triggers"
    ],
    myContribution: "Contributed across frontend development, backend API design, YOLOv5 detection and counting integration, threshold logic implementation, and PostgreSQL database storage based on the project codebase.",
    challengesAndLearnings: "Calibrating continuous detection frequency to maintain high responsiveness and syncing threshold alert state transitions smoothly between the FastAPI backend and React frontend.",
    githubUrl: "https://github.com/Irindominic/WatchTower",
    liveDemoUrl: null,
    deploymentNotice: "This project runs in a local environment with webcam/video stream processing. Documented through source code, architecture diagrams, and system logic.",
    architectureSteps: [
      { name: "React Frontend", detail: "Real-time dashboard showing status, count metrics, and threshold gauges" },
      { name: "FastAPI Backend", detail: "High-performance async server managing detection queries and thresholds" },
      { name: "YOLOv5 Vision Engine", detail: "Detects objects, applies confidence thresholds, and computes totals" },
      { name: "PostgreSQL Database", detail: "Persists time-stamped count logs and threshold breach history" }
    ]
  },
  {
    id: "farmconnect",
    title: "FarmConnect",
    subtitle: "Agricultural Marketplace & Direct Producer Platform",
    category: "Full-Stack Web Application",
    statusBadge: "Completed Web Application",
    statusType: "fullstack",
    shortOverview: "A web-based agricultural platform designed to improve connectivity between farmers and customers by providing a digital platform for accessing agricultural products and related services.",
    problemStatement: "Farmers may face difficulties reaching customers and presenting their agricultural products through accessible digital platforms, often relying on intermediaries that reduce profit margins.",
    objective: "Develop a web-based platform that facilitates interaction between farmers and customers.",
    technologies: ["Python", "Flask", "SQLAlchemy", "Database Management"],
    majorFeatures: [
      "Direct digital platform linking agricultural producers with consumers",
      "User authentication and profile management for farmers and customers",
      "Structured product listing and inventory catalog",
      "Relational database models mapping orders, users, and agricultural listings",
      "Clean UI integrating backend Flask routing and templates"
    ],
    technicalImplementation: [
      "Flask-based backend routing and session management",
      "SQLAlchemy ORM modeling user accounts, products, and categories",
      "User authentication and access verification",
      "Relational database management ensuring data integrity",
      "Backend functionality integrated with the web presentation layer"
    ],
    myContribution: "Implemented backend development using Python Flask, configured database schemas and queries using SQLAlchemy, built user authentication workflows, and connected backend logic to the application interface.",
    challengesAndLearnings: "Designing clean relational schemas in SQLAlchemy to handle distinct user roles (farmers vs customers) and structuring clean separation of concerns in Flask application factories.",
    githubUrl: "https://github.com/Irindominic/Farm_Connect",
    liveDemoUrl: null,
    deploymentNotice: "Demonstrated through source code and database architecture. Previous deployment link has been retired; full code is available on GitHub.",
    architectureSteps: [
      { name: "Web Interface", detail: "Product catalog, farmer profiles, and interaction views" },
      { name: "Flask Application", detail: "Request dispatcher, session auth, and business logic" },
      { name: "SQLAlchemy ORM", detail: "Object-relational mapping, transactions, and schema management" },
      { name: "Database Engine", detail: "Persistent storage of user accounts, product catalogs, and transactions" }
    ]
  },
  {
    id: "ai-study-buddy",
    title: "AI Study Buddy",
    subtitle: "Interactive Generative AI Study Companion",
    category: "Full-Stack / Generative AI Application",
    statusBadge: "Full-Stack Generative AI",
    statusType: "fullstack",
    shortOverview: "An AI-powered study assistance application designed to help users interact with an AI assistant for learning-related support, concept clarification, and academic guidance.",
    problemStatement: "Students often need accessible assistance when understanding complex topics and seeking clear, responsive explanations during their independent learning process.",
    objective: "Build an interactive application that integrates generative AI capabilities into a study assistance platform.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "OpenRouter"],
    majorFeatures: [
      "Interactive conversational study interface tailored for conceptual explanations",
      "OpenRouter API integration for prompt processing and AI-driven responses",
      "Express.js REST API layer handling prompt forwarding and response buffering",
      "MongoDB database integration for logging chat history and sessions",
      "Modern responsive UI built with React and styled with Tailwind CSS"
    ],
    technicalImplementation: [
      "React frontend components providing a clean study assistant interface",
      "Tailwind CSS styling for modern readability and mobile responsiveness",
      "Node.js and Express.js backend managing API routes and error handling",
      "Secure API integration with OpenRouter to leverage AI language models",
      "MongoDB schema integration for tracking queries and session logs"
    ],
    myContribution: "Developed the frontend interface with React and Tailwind CSS, engineered Express.js backend endpoints, integrated OpenRouter API calls for model interaction, and managed MongoDB database persistence.",
    challengesAndLearnings: "Handling API rate limits, sanitizing user inputs, and managing asynchronous state changes gracefully in React during streaming and multi-turn conversations.",
    githubUrl: "https://github.com/Irindominic/AI-Study-Buddy",
    liveDemoUrl: null,
    deploymentNotice: "Source code available on GitHub. Backend requires OpenRouter API keys and MongoDB connection string for local execution.",
    architectureSteps: [
      { name: "React + Tailwind UI", detail: "Clean conversational workspace for academic problem queries" },
      { name: "Express.js Backend", detail: "Handles routing, payload validation, and request coordination" },
      { name: "OpenRouter API", detail: "Translates academic prompts into structured, conceptual explanations" },
      { name: "MongoDB Database", detail: "Stores session records, interaction history, and timestamps" }
    ]
  }
];

export const experienceData = [
  {
    role: "Data Science / Machine Learning Intern",
    organization: "TechMaghi",
    duration: "June 15 – 21, 2025",
    mode: "Hybrid",
    category: "Internship",
    description: "Hands-on internship in data science and machine learning foundations, focusing on analytical pipelines and algorithm exploration.",
    responsibilities: [
      "Explored data science workflows from raw data preprocessing to model exploration.",
      "Worked with core Python data science libraries including Pandas, NumPy, and Scikit-learn.",
      "Studied supervised and unsupervised machine learning principles and model evaluation methodologies.",
      "Engaged in hybrid technical sessions and collaborative discussions on practical ML applications."
    ],
    skillsGained: ["Python", "Data Science", "Machine Learning", "Pandas", "Scikit-learn"]
  },
  {
    role: "Agentic AI Program – Team 404 Coders",
    organization: "IBM SkillsBuild in collaboration with CSRBOX",
    duration: "July 4 – August 7, 2025",
    mode: "Virtual / Collaborative",
    category: "Specialized Program",
    description: "Team-based technical training program exploring Agentic AI systems, automated workflow design, and machine learning model evaluation.",
    responsibilities: [
      "Participated in comprehensive Agentic AI curriculum exploring autonomous agent architectures and decision flows.",
      "Collaborated as part of team '404 Coders' on machine learning experimentation and dataset analysis.",
      "Contributed to Random Forest model training, hyperparameter review, and validation.",
      "Conducted rigorous model evaluation, recording an R² score of 0.37 on the designated team evaluation dataset.",
      "Strengthened understanding of agentic decision-making, collaborative version control, and ML metric reporting."
    ],
    skillsGained: ["Agentic AI", "Random Forest", "Model Evaluation", "R² Analysis", "Collaborative Engineering"]
  }
];

export const researchData = {
  finalYearProject: {
    title: "Malayalam Fake Product Review Detection System",
    subtitle: "LLM-Based Malayalam Fake Review Detection System",
    type: "Final-Year Research Project",
    status: "Ongoing – Final Year Project",
    overview: "This project aims to develop a system for detecting fake product reviews written in Malayalam by distinguishing genuine reviews from deceptive reviews, including human-written opinion spam and synthetic LLM-generated deceptive content.",
    problemStatement: "The proliferation of deceptive reviews distorts e-commerce feedback integrity. In Malayalam, morphological complexity, script-specific agglutination, and scarce annotated datasets make spam classification uniquely challenging.",
    approach: [
      "Malayalam text preprocessing and morphological normalization",
      "Formulation of binary classification (Genuine = 0, Fake = 1)",
      "TF-IDF feature extraction with n-gram linguistic representations",
      "Classical ML baseline using Support Vector Machine (SVM)",
      "Exploration of multilingual transformer representations such as MuRIL",
      "Parameter-efficient fine-tuning (PEFT) on open Large Language Models",
      "Model explainability using SHAP, LIME, Integrated Gradients, and attention attribution"
    ],
    baselineResults: {
      accuracy: "69.96%",
      macroF1: "69.81%",
      genuineF1: "67.70%",
      fakeF1: "71.92%",
      fakeRecall: "73.33%"
    },
    myRole: "Data preprocessing, TF-IDF feature extraction, classical ML baseline development, evaluation metrics synthesis, and style-confound error analysis."
  },
  seminar: {
    title: "AI-Enabled Intelligent Defense for Link Flooding Attacks in SDNs",
    type: "Academic Technical Seminar",
    reference: "He et al., IEEE Transactions on Computers, 2026",
    distinction: "Academic research seminar presentation and conceptual analysis (distinguished from an implemented software project).",
    summary: "An in-depth academic study of intelligent defense mechanisms protecting Software Defined Networks (SDNs) from Link Flooding Attacks (LFAs)—covert DDoS attacks that intentionally congest critical bottleneck links while eluding conventional traffic monitors.",
    coreConcepts: [
      {
        term: "Link Flooding Attacks (LFAs)",
        desc: "Stealthy attacks where coordinated botnets flood selected target links with legitimate-looking traffic, disconnecting subnets without exceeding endpoint thresholds."
      },
      {
        term: "Software Defined Networking (SDN)",
        desc: "Decoupled control plane and programmable data planes providing centralized visibility and dynamic forwarding adjustments."
      },
      {
        term: "LFAID-INT Framework",
        desc: "An intelligent defense architecture combining In-band Network Telemetry (INT) with machine learning for fine-grained link status tracking."
      },
      {
        term: "GAN-based GLD",
        desc: "Generative Adversarial Network-based Gray-box Link Detector for identifying anomalous, congested links under stealth conditions."
      },
      {
        term: "DDQN-based DLM",
        desc: "Double Deep Q-Network-based Dynamic Link Mitigation providing reinforcement learning-driven traffic rerouting to alleviate congested corridors."
      },
      {
        term: "Tools & Architectures",
        desc: "Mininet network emulation, P4 programmable data plane pipelines, and ONOS centralized SDN controller."
      }
    ]
  }
};

export const achievementsData = {
  achievements: [
    {
      title: "B.Tech Academic Excellence – CGPA: 9.64 / 10",
      institution: "Rajiv Gandhi Institute of Technology (RIT), Kottayam",
      detail: "Top-tier academic performance across core Computer Science and Engineering coursework (2023–2027)."
    },
    {
      title: "NPTEL Java Programming – Top 5%",
      institution: "NPTEL / IIT Kharagpur (Ministry of Education, Govt. of India)",
      detail: "Awarded Elite + Top 5% ranking for exceptional performance in nationwide Java programming examination."
    }
  ],
  certifications: [
    {
      name: "Programming In Java",
      organization: "NPTEL",
      grade: "Elite – Top 5%",
      description: "Rigorous certification covering OOP, multithreading, exception handling, collections framework, and JVM internals.",
      verificationUrl: null // Editable placeholder for official certificate URL
    },
    {
      name: "Data Science for Engineers",
      organization: "NPTEL / IIT Madras",
      grade: "Completed",
      description: "Comprehensive coverage of linear algebra, probability, data preprocessing, regression, and machine learning models in R/Python.",
      verificationUrl: null
    },
    {
      name: "Agentic AI Program",
      organization: "IBM SkillsBuild in collaboration with CSRBOX",
      grade: "Program Certificate",
      description: "Training in autonomous agent workflows, machine learning models, and collaborative data science.",
      verificationUrl: null
    }
  ]
};

export const codingProfilesData = [
  {
    platform: "GitHub",
    url: "https://github.com/Irindominic",
    handle: "Irindominic",
    description: "Source code repositories for academic, full-stack, computer vision, and machine learning projects."
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/irindominic/",
    handle: "irindominic",
    description: "Practice repository for Data Structures, Algorithms, and analytical problem-solving."
  },
  {
    platform: "HackerRank",
    url: "https://www.hackerrank.com/profile/irindominic987",
    handle: "irindominic987",
    description: "Core programming language skills, SQL, and algorithmic challenges."
  },
  {
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/irindominic987/",
    handle: "irindominic987",
    description: "Core computer science fundamentals, DSA problems, and topic-wise practice."
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/irindominic",
    handle: "irindominic",
    description: "Competitive programming contests and algorithmic problem practice."
  }
];

export const communityData = [
  {
    title: "TinkerHub RIT – Volunteer",
    organization: "TinkerHub Foundation (RIT Kottayam Chapter)",
    role: "Student Volunteer",
    description: "Active contributor to the TinkerHub student technical community at Rajiv Gandhi Institute of Technology, Kottayam.",
    activities: [
      "Volunteered at community developer meetups and technical bootcamps.",
      "Collaborated with peers to foster open-source culture and peer-to-peer technical learning.",
      "Supported campus tech initiatives promoting practical software development over rote learning."
    ]
  }
];
