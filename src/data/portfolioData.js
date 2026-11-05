// src/data/portfolioData.js
// Single source of truth for portfolio content.
// Verified details only - no fabricated data.

export const personalInfo = {
  name: "Irin Dominic",
  headline: "Computer Science Engineering Student | Aspiring Software Engineer",
  institution: "Rajiv Gandhi Institute of Technology (RIT), Kottayam",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "2027",
  cgpa: "9.64 ",
  email: "irindominic987@gmail.com",
  location: "Kottayam, Kerala, India",
  github: "https://github.com/Irindominic",
  linkedin: "https://www.linkedin.com/in/irindominic/",
  resumeUrl: "/Irin_Dominic_Resume.pdf", // Configurable path to resume
heroIntro: "I'm a Computer Science Engineering student passionate about software development, problem-solving, and building practical technology solutions."
,
  
  coreInterests: [
    "Software Development",
    "Full-Stack Development",
    "Artificial Intelligence & Machine Learning",
    "Problem Solving"
  ]
};

export const aboutData = {
  summary: [
  "I'm pursuing a Bachelor of Technology in Computer Science and Engineering at Rajiv Gandhi Institute of Technology, Kottayam, with a strong academic foundation.",
  "I enjoy exploring different areas of computer science through coursework, hands-on implementation, and technical projects.",
  "My interests include software development, backend engineering, full-stack applications, and artificial intelligence. I have worked on projects involving web technologies, databases, computer vision, and machine learning.",
  "I believe in learning by building, continuously exploring new technologies, and strengthening my problem-solving skills through practical experience."
],
  education: {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Rajiv Gandhi Institute of Technology (RIT), Kottayam",
    duration: "2023–2027",
    cgpa: "9.64 ",
    highlights: "Consistent academic excellence with a strong foundation in core computer science disciplines."
  },
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks"
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
    id: "brightbytes",
    title: "BrightBytes – Learning Dashboard",
    subtitle: "Interactive Learning Management Dashboard",
    category: "Web Application / Education Technology",
    statusBadge: "Completed Project",
    statusType: "fullstack",
    shortOverview:
      "A learning-focused dashboard designed to provide users with an organized interface for accessing and managing educational content.",
    problemStatement:
      "Learners need an organized digital interface to access learning materials and manage their learning activities.",
    objective:
      "Develop a learning dashboard that provides a structured and accessible environment for educational activities.",
    technologies: [],
    majorFeatures: [
      "Learning-focused dashboard interface",
      "Organized presentation of educational content",
      "Centralized access to learning resources"
    ],
    technicalImplementation: [],
    myContribution:
      "Project development and implementation.",
    challengesAndLearnings:
      "Gained experience in developing an application focused on organizing and presenting learning-related information.",
    githubUrl:
      "https://github.com/Irindominic/BrightBytes-Learning-Dashboard",
    liveDemoUrl: null,
    deploymentNotice:
      "Source code available on GitHub.",
    architectureSteps: []
  },
  {
    id: "finger-gestured-music-player",
    title: "Finger Gestured Music Player",
    subtitle: "Gesture-Based Music Player",
    category: "Gesture Recognition / Application Development",
    statusBadge: "Completed Project",
    statusType: "local",
    shortOverview:
      "A music player application that uses finger gestures to provide an alternative way of interacting with music playback.",
    problemStatement:
      "Traditional music players require direct interaction with physical controls or on-screen buttons. Gesture-based interaction provides an alternative approach to controlling playback.",
    objective:
      "Develop a music player that enables users to interact with music playback through finger gestures.",
    technologies: [],
    majorFeatures: [
      "Finger gesture-based interaction",
      "Gesture-controlled music playback",
      "Alternative hands-free interaction with a music player"
    ],
    technicalImplementation: [],
    myContribution:
      "Project development and implementation.",
    challengesAndLearnings:
      "Explored gesture-based interaction and alternative approaches to user input and application control.",
    githubUrl:
      "https://github.com/Irindominic/Finger_gestured_music-player",
    liveDemoUrl: null,
    deploymentNotice:
      "Source code available on GitHub.",
    architectureSteps: []
  },
  {
    id: "farmconnect",
    title: "FarmConnect",
    subtitle: "Agricultural Marketplace Connecting Farmers and Customers",
    category: "Full-Stack Web Application",
    statusBadge: "Completed Project",
    statusType: "fullstack",
    shortOverview:
      "A web-based agricultural platform designed to connect farmers directly with customers, enabling farmers to showcase their products through a digital marketplace.",
    problemStatement:
      "Farmers may face difficulties reaching customers and promoting their agricultural products through accessible digital platforms.",
    objective:
      "Develop a web application that facilitates interaction between farmers and customers through product listings and user management.",
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "HTML",
      "CSS"
    ],
    majorFeatures: [
      "Separate user roles for farmers and customers",
      "User registration and authentication",
      "Agricultural product listings",
      "Product catalog management",
      "Database-backed application functionality"
    ],
    technicalImplementation: [
      "Flask-based backend application",
      "SQLAlchemy ORM for database operations",
      "User authentication and session management",
      "Database models for users and product information",
      "Integration of backend functionality with the web interface"
    ],
    myContribution:
      "Worked on backend development using Python and Flask, database management using SQLAlchemy, and user authentication functionality.",
    challengesAndLearnings:
      "Gained practical experience in backend development, relational database management, authentication, and integrating application components.",
    githubUrl:
      "https://github.com/Irindominic/Farm_Connect",
    liveDemoUrl: null,
    deploymentNotice:
      "Source code available on GitHub.",
    architectureSteps: [
      {
        name: "Web Interface",
        detail: "User-facing interface for farmers and customers"
      },
      {
        name: "Flask Backend",
        detail: "Application routing, authentication, and backend logic"
      },
      {
        name: "SQLAlchemy",
        detail: "Database models and ORM operations"
      },
      {
        name: "Database",
        detail: "Storage of user and product information"
      }
    ]
  },
  {
    id: "watchtower",
    title: "WatchTower",
    subtitle: "Computer Vision-Based Crowd Monitoring System",
    category: "Artificial Intelligence / Computer Vision / Full-Stack Development",
    statusBadge: "Completed Project",
    statusType: "fullstack",
    shortOverview:
      "A crowd monitoring system that uses ML for object detection and counting, combined with a web-based dashboard and threshold-based monitoring mechanisms.",
    problemStatement:
      "Monitoring crowd levels manually can be challenging. Automated detection and counting can help identify occupancy levels and trigger appropriate alerts when predefined thresholds are reached.",
    objective:
      "Develop an automated crowd monitoring application that combines computer vision, backend processing, and a real-time monitoring dashboard.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL"
    ],
    // thresholdConfig: {
    //   control: "65%",
    //   restrict: "85%",
    //   description:
    //     "The system uses a 65% control threshold and an 85% restriction threshold to identify different crowd occupancy levels."
    // },
    majorFeatures: [
      "Crowd detection and counting using YOLOv5",
      "Threshold-based crowd monitoring",
      "65% control and 85% restriction thresholds",
      "React-based monitoring dashboard",
      "FastAPI backend integration",
      "PostgreSQL database integration"
    ],
    technicalImplementation: [
      "YOLOv5-based object detection and counting",
      "Threshold evaluation for monitoring crowd occupancy",
      "FastAPI backend for application functionality",
      "React frontend for displaying monitoring information",
      "PostgreSQL for storing relevant monitoring data"
    ],
    myContribution:
      "Contributed to the development of the crowd monitoring application, including frontend and backend integration, object detection and counting, threshold-based monitoring, and database functionality.",
    challengesAndLearnings:
      "Gained practical experience in integrating computer vision with web application development and implementing threshold-based monitoring logic.",
    githubUrl:
      "https://github.com/Irindominic/Watch-TowerCrowd",
    liveDemoUrl: null,
    deploymentNotice:
      "Locally executed project. Source code available on GitHub.",
    architectureSteps: [
      {
        name: "React Frontend",
        detail: "Monitoring dashboard for displaying crowd counts and status"
      },
      {
        name: "FastAPI Backend",
        detail: "Backend processing and application communication"
      },
      {
        name: "YOLOv5",
        detail: "Object detection and crowd counting"
      },
      {
        name: "PostgreSQL",
        detail: "Database storage for monitoring information"
      }
    ]
  },
  {
    id: "malayalam-fake-review",
    title: "Malayalam Fake Product Review Detection System",
    subtitle: "LLM-Based Malayalam Fake Review Detection System",
    category: "Final-Year Project / Natural Language Processing / Machine Learning",
    statusBadge: "Ongoing – Final Year Project",
    statusType: "research",
    shortOverview:
      "A Malayalam-language fake product review detection system that aims to distinguish genuine reviews from deceptive reviews, including human-written opinion spam and LLM-generated synthetic reviews.",
    problemStatement:
      "Fake product reviews can mislead consumers and affect trust in online shopping platforms. Detecting deceptive reviews in Malayalam presents additional challenges due to the language's morphological characteristics and limited annotated resources.",
    objective:
      "Develop a machine learning and language-model-based system for identifying fake product reviews written in Malayalam, incorporating explainability techniques to understand model predictions.",
    technologies: [
      "Python",
      "Natural Language Processing",
      "TF-IDF",
      "Support Vector Machine",
      "MuRIL",

    ],
    classificationLabels:
      "Binary Classification: Genuine = 0, Fake = 1",
    majorFeatures: [
      "Malayalam-language fake review detection",
      "Detection of human-written opinion spam and LLM-generated deceptive reviews",
      "TF-IDF and SVM-based machine learning baseline",
      "Exploration of multilingual transformer models",
      "Planned explainability using SHAP, LIME, and Integrated Gradients"
    ],
    technicalImplementation: [
      "Malayalam text preprocessing and normalization",
      "TF-IDF feature extraction",
      "SVM-based binary classification",
      "Model evaluation using classification metrics",
      "Exploration of MuRIL and parameter-efficient LLM fine-tuning",
      "Planned model interpretation using explainability techniques"
    ],
    myContribution:
      "Responsible for Malayalam text preprocessing, TF-IDF feature extraction, classical machine learning baseline implementation, model evaluation, and style-confound and error analysis.",
    phase1Baseline: {
      isPreliminary: true,
      title: "Phase 1 Baseline Results – TF-IDF + SVM",
      metrics: [
        { label: "Accuracy", value: "69.96%" },
        { label: "Macro F1-Score", value: "69.81%" },
        { label: "Fake F1-Score", value: "71.92%" },
        { label: "Fake Recall", value: "73.33%" },
        { label: "Genuine F1-Score", value: "67.70%" }
      ],
      note:
        "Preliminary results from the current Phase 1 baseline. Transformer-based experiments, LLM fine-tuning, and explainability modules are part of the ongoing development."
    },
    challengesAndLearnings:
      "Working with Malayalam text, handling language-specific characteristics, evaluating classification performance, and investigating potential style-related biases in fake review detection.",
    githubUrl:
      " https://github.com/Irindominic/fake-review-detection-system",
    liveDemoUrl: null,
    deploymentNotice:
      "Ongoing academic research project. Source code and current baseline implementation are available on GitHub.",
    architectureSteps: [
      {
        name: "Malayalam Dataset",
        detail: "Genuine and deceptive Malayalam product reviews"
      },
      {
        name: "Text Preprocessing",
        detail: "Malayalam text normalization and preprocessing"
      },
      {
        name: "Feature Extraction",
        detail: "TF-IDF features for the classical ML baseline"
      },
      {
        name: "Classification",
        detail: "SVM baseline with planned transformer and LLM experiments"
      },
      {
        name: "Explainability",
        detail: "Planned SHAP, LIME, and Integrated Gradients analysis"
      }
    ]
  }
];

export const experienceData = [
  {
    role: "Data Science / Machine Learning Intern",
    organization: "TechMaghi",
    duration: "June , 2025",
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
  role: "Web Development Intern",
  organization: "PROXENIX",
  duration: "July 2025",
  mode: "Online",
  category: "Internship",
  description: "Gained practical exposure to web development through hands-on development tasks.",
  responsibilities: [
    "Worked on practical web development tasks."
  ],
  skillsGained: ["HTML","CSS","JavaScript"]
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
      title: "B.Tech Academic Excellence – CGPA: 9.64",
      institution: "Rajiv Gandhi Institute of Technology (RIT), Kottayam",
      detail: "Maintained a strong academic record in Computer Science and Engineering (2023–2027)."
    },
    {
      title: "NPTEL Java Programming – Top 5%",
      institution: "NPTEL / IIT Kharagpur",
      detail: "Secured a position in the top 5% of learners in the Java Programming course."
    }
  ],

  certifications: [
    {
      name: "Artificial Intelligence Fundamentals",
      organization: "IBM SkillsBuild",
      grade: "Certificate of Completion",
      description: "Completed foundational training in Artificial Intelligence through IBM SkillsBuild.",
      verificationUrl: null
    },
    {
      name: "Data Science for Engineers",
      organization: "NPTEL / IIT Madras",
      grade: "Completed",
      description: "Covered fundamental concepts of data science, including mathematical foundations, data analysis, and machine learning.",
      verificationUrl: null
    },
    {
      name: "Agentic AI Program",
      organization: "IBM SkillsBuild in collaboration with CSRBOX",
      grade: "Program Certificate",
      description: "Completed training in Agentic AI as part of the IBM SkillsBuild program.",
      verificationUrl: null
    },
    {
      name: "TINK-HER-HACK 3.0",
      organization: "TinkerHub",
      grade: "Participation Certificate",
      description: "Participated in TINK-HER-HACK 3.0, a hackathon organized by TinkerHub.",
      verificationUrl: null
    },
    {
      name: "IEEEXtreme 18.0",
      organization: "IEEE",
      grade: "Participation Certificate",
      description: "Participated in IEEEXtreme 18.0, an international 24-hour programming competition.",
      verificationUrl: null
    }
  ]
};

export const codingProfilesData = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/Irin_Dominic/",
    handle: "irindominic",
    description: "Practice repository for Data Structures, Algorithms, and analytical problem-solving."
  }
];

export const communityData = [
  {
    title: "TinkerHub RIT – Volunteer",
    organization: "TinkerHub Foundation (RIT Kottayam Chapter)",
    role: "Student Volunteer",
    description: "Active contributor to the TinkerHub student technical community at Rajiv Gandhi Institute of Technology, Kottayam.",
    activities: [
  "Assisted in organizing and coordinating technical and non-technical events, workshops, and peer-learning initiatives.",
  "Collaborated with the team to encourage student participation and strengthen the campus technical community.",
  "Contributed to community building through event coordination and student engagement activities."
]
  }
];
