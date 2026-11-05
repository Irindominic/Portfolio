const fs = require('fs');
const path = require('path');

// Simple valid PDF-1.4 generator
function createResumePdf() {
  const lines = [
    { text: "IRIN DOMINIC", size: 22, x: 50, y: 780, bold: true },
    { text: "Computer Science Engineering Student | Aspiring Software Engineer", size: 12, x: 50, y: 760, bold: false },
    { text: "Email: irindominic987@gmail.com | Location: Kottayam, Kerala, India", size: 10, x: 50, y: 742, bold: false },
    { text: "GitHub: https://github.com/Irindominic | LinkedIn: https://www.linkedin.com/in/irindominic/", size: 10, x: 50, y: 728, bold: false },
    
    { text: "EDUCATION", size: 13, x: 50, y: 700, bold: true },
    { text: "Rajiv Gandhi Institute of Technology (RIT), Kottayam", size: 11, x: 50, y: 684, bold: true },
    { text: "B.Tech in Computer Science and Engineering | Duration: 2023 - 2027 | CGPA: 9.64 / 10", size: 10, x: 50, y: 670, bold: false },
    { text: "Coursework: DSA, OOP, DBMS, Operating Systems, Computer Networks, Compiler Design, Discrete Math", size: 9, x: 50, y: 656, bold: false },

    { text: "TECHNICAL SKILLS", size: 13, x: 50, y: 632, bold: true },
    { text: "Languages: Python, C, Java | Frontend: React, JavaScript, Tailwind CSS, HTML, CSS", size: 10, x: 50, y: 616, bold: false },
    { text: "Backend: Flask, FastAPI, Node.js, Express.js | Databases: PostgreSQL, MySQL, MongoDB, SQLAlchemy", size: 10, x: 50, y: 602, bold: false },
    { text: "AI / Machine Learning: Scikit-learn, Pandas, NumPy, YOLOv5, Natural Language Processing", size: 10, x: 50, y: 588, bold: false },
    { text: "Tools & Core CS: Git, GitHub, VS Code, Postman, DSA, OOP, DBMS, OS, Computer Networks", size: 10, x: 50, y: 574, bold: false },

    { text: "PROJECTS", size: 13, x: 50, y: 550, bold: true },
    { text: "Malayalam Fake Product Review Detection System (Ongoing Final-Year Project)", size: 11, x: 50, y: 534, bold: true },
    { text: "Tech: Python, NLP, TF-IDF, SVM, MuRIL, LLM PEFT, SHAP, LIME", size: 9, x: 50, y: 521, bold: false },
    { text: "- Developing NLP & ML classification to detect deceptive Malayalam product reviews.", size: 9, x: 50, y: 509, bold: false },
    { text: "- Built Phase 1 baseline (TF-IDF + SVM) achieving 69.96% Accuracy and 69.81% Macro F1.", size: 9, x: 50, y: 497, bold: false },

    { text: "WatchTower - Computer Vision-Based Monitoring Application", size: 11, x: 50, y: 477, bold: true },
    { text: "Tech: Python, FastAPI, React, PostgreSQL, YOLOv5", size: 9, x: 50, y: 464, bold: false },
    { text: "- Integrated YOLOv5 object detection & counting with threshold-based logic (65% control, 85% restrict).", size: 9, x: 50, y: 452, bold: false },
    { text: "- Implemented FastAPI backend, React dashboard, and PostgreSQL database storage.", size: 9, x: 50, y: 440, bold: false },

    { text: "FarmConnect - Agricultural Web Platform", size: 11, x: 50, y: 420, bold: true },
    { text: "Tech: Python, Flask, SQLAlchemy, Database Management", size: 9, x: 50, y: 407, bold: false },
    { text: "- Developed full-stack web platform connecting farmers and customers directly.", size: 9, x: 50, y: 395, bold: false },
    { text: "- Implemented authentication, relational database models, and backend business logic.", size: 9, x: 50, y: 383, bold: false },

    { text: "AI Study Buddy - Generative AI Learning Assistant", size: 11, x: 50, y: 363, bold: true },
    { text: "Tech: React, Tailwind CSS, Node.js, Express.js, MongoDB, OpenRouter API", size: 9, x: 50, y: 350, bold: false },
    { text: "- Built interactive study assistant integrating OpenRouter API for intelligent explanations.", size: 9, x: 50, y: 338, bold: false },

    { text: "EXPERIENCE & INTERNSHIPS", size: 13, x: 50, y: 314, bold: true },
    { text: "TechMaghi | Data Science / Machine Learning Intern (June 15-21, 2025 | Hybrid)", size: 10, x: 50, y: 298, bold: true },
    { text: "- Explored data science workflows, machine learning models, and practical analytical pipelines.", size: 9, x: 50, y: 285, bold: false },
    { text: "IBM SkillsBuild (CSRBOX) | Agentic AI Program - Team 404 Coders (July 4 - Aug 7, 2025)", size: 10, x: 50, y: 269, bold: true },
    { text: "- Explored Agentic AI principles, trained Random Forest model (R2: 0.37 on evaluation set).", size: 9, x: 50, y: 256, bold: false },

    { text: "ACHIEVEMENTS, CERTIFICATIONS & COMMUNITY", size: 13, x: 50, y: 232, bold: true },
    { text: "- B.Tech CGPA: 9.64 / 10 at RIT Kottayam | NPTEL Java Programming - Top 5% Elite", size: 9, x: 50, y: 216, bold: false },
    { text: "- NPTEL Data Science for Engineers | IBM SkillsBuild Agentic AI Program Certificate", size: 9, x: 50, y: 203, bold: false },
    { text: "- Volunteer, TinkerHub RIT - Actively contributing to student developer events and workshops", size: 9, x: 50, y: 190, bold: false },
    { text: "- Technical Seminar: AI-Enabled Intelligent Defense for Link Flooding Attacks in SDNs (IEEE 2026)", size: 9, x: 50, y: 177, bold: false }
  ];

  let streamContent = "";
  // Draw divider lines
  streamContent += "0.6 0.6 0.6 RG 1 w 50 693 m 545 693 l S\n";
  streamContent += "0.6 0.6 0.6 RG 1 w 50 625 m 545 625 l S\n";
  streamContent += "0.6 0.6 0.6 RG 1 w 50 543 m 545 543 l S\n";
  streamContent += "0.6 0.6 0.6 RG 1 w 50 307 m 545 307 l S\n";
  streamContent += "0.6 0.6 0.6 RG 1 w 50 225 m 545 225 l S\n";

  for (const item of lines) {
    const font = item.bold ? "/F2" : "/F1";
    // escape parentheses
    const safeText = item.text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    streamContent += `BT ${font} ${item.size} Tf ${item.x} ${item.y} Td (${safeText}) Tj ET\n`;
  }

  const streamBytes = Buffer.from(streamContent, 'utf-8');
  const streamLength = streamBytes.length;

  const objects = [];
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`);
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}endstream\nendobj\n`);
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);
  objects.push(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

  let pdfOutput = "%PDF-1.4\n";
  const offsets = [];

  for (const obj of objects) {
    offsets.push(Buffer.byteLength(pdfOutput));
    pdfOutput += obj;
  }

  const startxref = Buffer.byteLength(pdfOutput);
  pdfOutput += "xref\n";
  pdfOutput += `0 ${objects.length + 1}\n`;
  pdfOutput += "0000000000 65535 f \n";

  for (const offset of offsets) {
    const strOffset = String(offset).padStart(10, '0');
    pdfOutput += `${strOffset} 00000 n \n`;
  }

  pdfOutput += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const destPath = path.join(__dirname, '..', 'public', 'Irin_Dominic_Resume.pdf');
  fs.writeFileSync(destPath, pdfOutput);
  console.log(`Resume PDF written to ${destPath}`);
}

createResumePdf();
