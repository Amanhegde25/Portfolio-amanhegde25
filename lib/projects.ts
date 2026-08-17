export type Project = {
  title: string;
  emoji?: string;
  tags: string;
  description: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  badge?: string;
  thumbnail?: string;
  media?: { type: "image" | "video"; url: string }[];
  detailedDescription?: string;
};

export const projects: Project[] = [
  {
    title: "Meeting Notes AI",
    tags: "Python · FastAPI · Ollama · LLMs",
    description:
      "Turn messy meeting notes into clean, well-organized PDFs using a local AI model (Ollama) running on your machine — fully offline, no data ever leaves your computer.",
    stack: ["Python", "FastAPI", "Ollama", "LLMs", "PDF generation"],
    link: "https://github.com/Amanhegde25/meeting-notes-ai",
    linkLabel: "GitHub ↗",
    thumbnail: "/project-media/meeting-notes-ai.png",
    media: [
      // { type: "image", url: "/project-media/meeting-notes-ai.png" },
      { type: "image", url: "https://placehold.co/600x400/1e1e2e/a78bfa?text=Image+2" },
      { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ],
    detailedDescription: "Meeting Notes AI is an offline-first desktop solution that leverages local Large Language Models (LLMs) via Ollama to transform raw, unstructured meeting transcripts into cleanly formatted PDF documents. Security and privacy are at its core—no data is sent to external APIs. The Python and FastAPI backend efficiently orchestrates document generation."
  },
  {
    title: "TheraMind",
    tags: "Python · NLP · Transformers",
    description:
      "AI chatbot for mental health support using NLP and sentiment analysis, with emotional classification (stress, anxiety, etc.) powered by Hugging Face Transformers and spaCy.",
    stack: ["Python", "Pandas", "NumPy", "NLTK", "spaCy", "Hugging Face", "Next.js"],
    link: "https://github.com/Amanhegde25/TheraMind",
    media: [
      // { type: "image", url: "/project-media/meeting-notes-ai.png" },
      { type: "image", url: "https://placehold.co/600x400/1e1e2e/a78bfa?text=Image+2" },
      { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ],
    thumbnail: "/project-media/meeting-notes-ai.png",
    linkLabel: "GitHub ↗",
  },
  {
    title: "IDENTI-SCAN",
    tags: "Python · OpenCV · Haar Cascades",
    description:
      "Automated attendance system using real-time facial recognition. Captures and matches facial features via Haar cascade classifiers to verify identity and mark attendance automatically.",
    stack: ["Python", "OpenCV", "Haar Cascades", "NumPy", "Pandas"],
    link: "https://github.com/Amanhegde25/IDENTI-SCAN",
    thumbnail: "/project-media/meeting-notes-ai.png",
    linkLabel: "GitHub ↗",
  },
  {
    title: "PDF Manager",
    tags: "Python · Flask · PDF",
    description:
      "Sleek Flask web app to merge, reorder, preview and password-protect documents — with drag & drop uploads, Word/Image-to-PDF conversion, AES encryption and no data stored after download.",
    stack: ["Python", "Flask", "AES encryption", "JavaScript"],
    link: "https://github.com/Amanhegde25/Pdf-Manager",
    thumbnail: "/project-media/meeting-notes-ai.png",
    linkLabel: "GitHub ↗",
  },
  {
    title: "Statement Parser",
    tags: "Python · Flask · Ollama · LLMs",
    description:
      "AI-powered financial statement parser that extracts structured transaction data from credit card statement PDFs using local LLMs (Llama 3.2) — an offline, privacy-preserving pipeline with no cloud APIs.",
    stack: ["Python", "Flask", "Ollama", "Llama 3.2", "pdfplumber", "Jinja2"],
    link: "https://github.com/Amanhegde25/Statement-Parser",
    linkLabel: "GitHub ↗",
  },
  {
    title: "PhotoGallery",
    tags: "Python · Flask · Auth",
    description:
      "Photo gallery web app built with Flask — authenticated users can upload, browse and edit images through a clean template-driven interface.",
    stack: ["Python", "Flask", "SQLite", "HTML/CSS/JS"],
    link: "https://github.com/Amanhegde25/PhotoGallery",
    linkLabel: "GitHub ↗",
  },
  {
    title: "Student Exam Performance Predictor",
    tags: "Python · ML · Flask",
    description:
      "End-to-end machine learning project predicting student exam performance — complete pipeline with EDA, training and evaluation, served through a Flask web interface.",
    stack: ["Python", "pandas", "scikit-learn", "Flask", "ML pipeline"],
    link: "https://github.com/Amanhegde25/Student-Exam-Performance-Predictor",
    linkLabel: "GitHub ↗",
  },
  {
    title: "Cricket Data Analysis",
    tags: "Python · pandas · ETL",
    description:
      "Processed raw T20 World Cup cricket data into clean dimensional and fact tables — batting summaries, bowling summaries, match results and player info (JSON → CSV ETL).",
    stack: ["Python", "pandas", "Jupyter", "JSON → CSV"],
    link: "https://github.com/Amanhegde25/Cricket_DataAnalysis",
    linkLabel: "GitHub ↗",
  },
  {
    title: "Message App",
    tags: "Laravel · PHP · Realtime",
    description:
      "A WhatsApp-style messaging application built with Laravel — conversations, contacts and realtime chat in a clean PHP ecosystem.",
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    link: "https://github.com/Amanhegde25/Message-App",
    linkLabel: "GitHub ↗",
  }
];
