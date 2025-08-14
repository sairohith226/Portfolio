import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Code,
  Brain,
  Server,
  Award,
  Calendar,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Bot,
  Database,
  Shield,
  Globe,
  Download,
  ChevronUp,
  Sun,
  Moon,
  Monitor,
  Eye,
  Clock,
  Zap,
  TrendingUp,
  MessageCircle,
  Terminal,
  Send,
  Minimize2,
  Maximize2,
  User,
  Sparkles,
  CheckCircle
} from 'lucide-react';

// Animated Background Component
const AnimatedBackground = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Balls */}
      <div className="absolute inset-0">
        {/* Large Blue Ball */}
        <div className={`absolute w-32 h-32 rounded-full ${
          darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'
        } animate-bounce`}
        style={{
          top: '10%',
          right: '15%',
          animationDuration: '6s',
          animationDelay: '0s'
        }}></div>

        {/* Medium Purple Ball */}
        <div className={`absolute w-20 h-20 rounded-full ${
          darkMode ? 'bg-purple-500/15' : 'bg-purple-500/25'
        } animate-pulse`}
        style={{
          bottom: '20%',
          left: '10%',
          animationDuration: '4s',
          animationDelay: '1s'
        }}></div>

        {/* Small Green Ball */}
        <div className={`absolute w-16 h-16 rounded-full ${
          darkMode ? 'bg-green-500/10' : 'bg-green-500/20'
        } animate-bounce`}
        style={{
          top: '60%',
          right: '25%',
          animationDuration: '5s',
          animationDelay: '2s'
        }}></div>

        {/* Tiny Orange Ball */}
        <div className={`absolute w-12 h-12 rounded-full ${
          darkMode ? 'bg-orange-500/15' : 'bg-orange-500/25'
        } animate-pulse`}
        style={{
          top: '30%',
          left: '20%',
          animationDuration: '3s',
          animationDelay: '0.5s'
        }}></div>

        {/* Medium Pink Ball */}
        <div className={`absolute w-24 h-24 rounded-full ${
          darkMode ? 'bg-pink-500/10' : 'bg-pink-500/20'
        } animate-bounce`}
        style={{
          bottom: '40%',
          right: '10%',
          animationDuration: '7s',
          animationDelay: '3s'
        }}></div>
      </div>

      {/* Floating Tech Badges */}
      <div className="absolute inset-0">
        {/* React Badge */}
        <div className={`absolute flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
          darkMode ? 'bg-blue-900/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100/80 text-blue-700 border border-blue-200'
        } animate-float`}
        style={{
          top: '15%',
          left: '5%',
          animationDuration: '8s',
          animationDelay: '1s'
        }}>
          <Code className="w-3 h-3" />
          <span>React</span>
        </div>

        {/* AI Badge */}
        <div className={`absolute flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
          darkMode ? 'bg-purple-900/20 text-purple-300 border border-purple-500/30' : 'bg-purple-100/80 text-purple-700 border border-purple-200'
        } animate-float`}
        style={{
          top: '45%',
          right: '5%',
          animationDuration: '6s',
          animationDelay: '2s'
        }}>
          <Brain className="w-3 h-3" />
          <span>AI</span>
        </div>

        {/* Python Badge */}
        <div className={`absolute flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
          darkMode ? 'bg-green-900/20 text-green-300 border border-green-500/30' : 'bg-green-100/80 text-green-700 border border-green-200'
        } animate-float`}
        style={{
          bottom: '25%',
          left: '15%',
          animationDuration: '7s',
          animationDelay: '0s'
        }}>
          <Terminal className="w-3 h-3" />
          <span>Python</span>
        </div>

        {/* Cloud Badge */}
        <div className={`absolute flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
          darkMode ? 'bg-orange-900/20 text-orange-300 border border-orange-500/30' : 'bg-orange-100/80 text-orange-700 border border-orange-200'
        } animate-float`}
        style={{
          top: '70%',
          right: '20%',
          animationDuration: '9s',
          animationDelay: '3s'
        }}>
          <Server className="w-3 h-3" />
          <span>Cloud</span>
        </div>

        {/* TypeScript Badge */}
        <div className={`absolute flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
          darkMode ? 'bg-blue-900/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100/80 text-blue-700 border border-blue-200'
        } animate-float`}
        style={{
          bottom: '15%',
          right: '30%',
          animationDuration: '5s',
          animationDelay: '1.5s'
        }}>
          <Code className="w-3 h-3" />
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  );
};

// Typing Animation Component
const TypingAnimation = ({ texts, darkMode }: { texts: string[], darkMode: boolean }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};



// AI Resume Assistant Knowledge Base
const resumeKnowledgeBase = {
  personal: {
    name: "Perukari Sai Rohith",
    title: "AI Engineer",
    location: "Hyderabad, India",
    email: "sairohith226@gmail.com",
    phone: "+91-7382425242",
    linkedin: "sairohith-centle",
    github: "sairohith226"
  },
  experience: {
    current: "AI Engineer at Centle (6 months)",
    previous: "Network & Systems Administrator at Revin Labs (30 months)",
    total: "2.5+ years of professional experience"
  },
  skills: {
    ai: ["LLMs", "OpenAI API", "LangChain", "RAG", "Prompt Engineering", "Whisper", "gTTS", "Hugging Face", "Gemini", "Azure OpenAI"],
    programming: ["Python", "JavaScript", "React.js", "HTML/CSS", "Flask", "FastAPI", "Streamlit"],
    data: ["MongoDB", "Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "BigQuery"],
    networking: ["Windows Server", "Sophos Firewalls", "FortiGate", "Active Directory", "O365", "VMware", "ServiceNow"]
  },
  education: {
    mtech: "M.Tech Computer Science, CMR Engineering College (2018-2021, CGPA: 8.2/10)",
    btech: "B.Tech Computer Science, Mother Teresa College (2012-2017)"
  },
  projects: [
    {
      name: "HealthMate",
      description: "Voice-enabled autonomous agent for elderly care using Agentic AI, Whisper, LangChain ReAct, and gTTS",
      tech: "Agentic AI, Python, Whisper, gTTS, LangChain, Streamlit"
    },
    {
      name: "TravelMate AI",
      description: "Personalized travel planner with GenAI, Google Maps API integration",
      tech: "GenAI, LangChain, GPT-4, Google Maps API, Firebase"
    },
    {
      name: "Centle AI QuizGen",
      description: "Dynamic assessment generator with automated question generation using LLMs",
      tech: "GenAI, OpenAI API, Gemini, Firebase, Streamlit"
    }
  ],
  interests: ["Chess", "Mentoring", "Upskilling", "Reading", "Tech Products", "AI & Tech Podcasts"]
};

// Detailed skill information with real-time examples
const skillDetails = {
  // Generative AI & LLMs
  "LLMs": {
    title: "Large Language Models",
    description: "Expert in working with state-of-the-art language models for various AI applications",
    whatIs: "Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like text. They can perform tasks like translation, summarization, code generation, and complex reasoning.",
    howItWorks: "LLMs use transformer architecture with attention mechanisms to process text. They're trained on billions of parameters to predict the next word in a sequence, learning patterns in language, context, and knowledge.",
    realTimeExamples: [
      "Built HealthMate - an autonomous elderly care assistant using GPT-4 for natural conversations",
      "Developed TravelMate AI with personalized trip planning using advanced prompt engineering",
      "Created Centle AI QuizGen that generates contextual questions from any content"
    ],
    useCases: [
      "Conversational AI systems",
      "Content generation and summarization",
      "Question-answering systems",
      "Code generation and documentation"
    ],
    technologies: ["GPT-4", "GPT-3.5", "Claude", "Gemini", "Llama"],
    projects: ["HealthMate", "TravelMate AI", "Centle AI QuizGen"]
  },
  "LangChain": {
    title: "LangChain Framework",
    description: "Building complex AI applications with LangChain's modular architecture",
    realTimeExamples: [
      "Used LangChain ReAct agents in HealthMate for autonomous decision-making",
      "Implemented LangChain chains for multi-step reasoning in travel planning",
      "Built custom tools and agents for specialized AI workflows"
    ],
    useCases: [
      "Agent-based AI systems",
      "Multi-step reasoning chains",
      "Tool integration and orchestration",
      "Memory management in conversations"
    ],
    technologies: ["Python", "OpenAI", "Vector Stores", "Custom Tools"],
    projects: ["HealthMate (ReAct Agents)", "TravelMate AI", "Custom AI Workflows"]
  },

  // Agentic & Conversational AI
  "Chatbot Development": {
    title: "Conversational AI Development",
    description: "Creating intelligent chatbots with natural language understanding and context awareness",
    realTimeExamples: [
      "HealthMate: Voice-enabled assistant for elderly care with empathetic responses",
      "AI Resume Assistant: This very chatbot you're interacting with, powered by GPT-4",
      "Customer service bots with multi-turn conversation handling"
    ],
    useCases: [
      "Customer support automation",
      "Personal assistants",
      "Educational tutors",
      "Healthcare companions"
    ],
    technologies: ["OpenAI API", "Streamlit", "Flask", "WebSocket", "Speech APIs"],
    projects: ["HealthMate", "AI Resume Assistant", "Customer Service Bots"]
  },

  // Front-End & Web Development
  "React.js": {
    title: "React.js Development",
    description: "Building modern, responsive web applications with React ecosystem",
    whatIs: "React.js is a JavaScript library for building user interfaces, especially web applications. It helps create interactive and dynamic websites by breaking them into reusable components.",
    howItWorks: "• Component-based – Build encapsulated components that manage their own state\n• Virtual DOM – React creates a virtual representation of the DOM for efficient updates\n• JSX – Write HTML-like syntax within JavaScript for better readability\n• State Management – Handle data changes and re-render components automatically",
    realTimeExamples: [
      "This portfolio website - fully responsive with dark/light mode toggle and smooth animations",
      "Interactive AI chat interfaces with real-time messaging and typing indicators",
      "Dynamic dashboard components for data visualization with live updates"
    ],
    useCases: [
      "Single Page Applications (SPAs)",
      "Interactive user interfaces",
      "Real-time dashboards",
      "Progressive Web Apps"
    ],
    technologies: ["TypeScript", "React Hooks", "Context API", "React Router", "JSX"],
    projects: ["Portfolio Website", "AI Chat Interfaces", "Admin Dashboards"]
  },
  "Python": {
    title: "Python Programming",
    description: "Versatile programming language for AI development, automation, and backend services",
    whatIs: "Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used for AI/ML development, web development, automation, and data analysis.",
    howItWorks: "• Interpreted Language – Python code is executed line by line by the Python interpreter\n• Object-Oriented – Supports classes, objects, inheritance, and encapsulation\n• Extensive Libraries – Rich ecosystem of libraries for AI (TensorFlow, PyTorch), web (Flask, Django), and data (Pandas, NumPy)\n• Cross-Platform – Runs on Windows, macOS, Linux, and other operating systems",
    realTimeExamples: [
      "Built HealthMate AI assistant using Python with LangChain, Whisper, and Streamlit",
      "Developed TravelMate AI with Python backend for API integrations and data processing",
      "Created automated scripts for system administration and data analysis tasks"
    ],
    useCases: [
      "AI and Machine Learning development",
      "Web backend development with Flask/FastAPI",
      "Data analysis and visualization",
      "Automation and scripting"
    ],
    technologies: ["Flask", "FastAPI", "Streamlit", "Pandas", "NumPy", "LangChain", "OpenAI API"],
    projects: ["HealthMate", "TravelMate AI", "Centle AI QuizGen", "Automation Scripts"]
  },
  "JavaScript": {
    title: "JavaScript Programming",
    description: "A programming language used to make websites interactive and dynamic",
    whatIs: "JavaScript is a programming language used to make websites interactive. It can control web page behavior, update content without reloading, handle user input, and create dynamic user experiences.",
    howItWorks: "• Runs in the browser – JavaScript is executed by the browser's engine (like Chrome's V8)\n• Interacts with HTML & CSS – It can read, change, or manipulate web page elements\n• Event-driven – It responds to actions like clicks, scrolls, or form inputs\n• Single-threaded – It runs one task at a time but uses asynchronous functions (setTimeout, fetch, etc.) for multitasking",
    realTimeExamples: [
      "Built real-time chat functionality with WebSocket connections for instant messaging",
      "Created interactive portfolio website with smooth animations and dark/light mode toggle",
      "Developed dynamic form validation and API integrations for seamless user experience"
    ],
    useCases: [
      "Frontend interactivity and animations",
      "API development and data fetching",
      "Real-time applications and chat systems",
      "Form validation and user input handling"
    ],
    technologies: ["ES6+", "Node.js", "Express.js", "WebSocket", "Async/Await", "DOM Manipulation"],
    projects: ["Portfolio Website", "Real-time Chat Apps", "Interactive Web Applications"]
  },
  "HTML/CSS": {
    title: "HTML/CSS Development",
    description: "Foundation technologies for creating structured and styled web pages",
    whatIs: "HTML (HyperText Markup Language) structures web content, while CSS (Cascading Style Sheets) styles and layouts web pages. Together they form the foundation of all websites.",
    howItWorks: "• HTML – Creates the structure using elements like headings, paragraphs, links, and forms\n• CSS – Styles elements with colors, fonts, layouts, and animations\n• Responsive Design – Uses media queries and flexible layouts for different screen sizes\n• Modern CSS – Flexbox, Grid, and CSS variables for advanced layouts",
    realTimeExamples: [
      "Built this responsive portfolio website with modern CSS Grid and Flexbox layouts",
      "Created dark/light mode toggle using CSS variables and smooth transitions",
      "Implemented mobile-first responsive design with Tailwind CSS framework"
    ],
    useCases: [
      "Website structure and content organization",
      "Visual styling and user interface design",
      "Responsive layouts for all devices",
      "Animations and interactive effects"
    ],
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "Flexbox", "CSS Grid", "Media Queries"],
    projects: ["Portfolio Website", "Responsive Web Applications", "UI Components"]
  },

  // Data Analysis & Visualization
  "MongoDB": {
    title: "MongoDB Database",
    description: "NoSQL database design and management for scalable applications",
    whatIs: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. It's designed for scalability, performance, and ease of development with modern applications.",
    howItWorks: "• Document-Based – Stores data as BSON documents (similar to JSON objects)\n• Collections – Groups of documents, similar to tables in relational databases\n• Schema Flexibility – Documents in the same collection can have different structures\n• Horizontal Scaling – Supports sharding for distributing data across multiple servers",
    realTimeExamples: [
      "Designed user conversation storage for HealthMate with efficient querying and indexing",
      "Built travel data aggregation pipelines for TravelMate recommendations using MongoDB aggregation framework",
      "Implemented real-time analytics collections for user behavior tracking with time-series data"
    ],
    useCases: [
      "Document-based data storage",
      "Real-time analytics and logging",
      "Content management systems",
      "User session and profile management"
    ],
    technologies: ["Aggregation Pipelines", "Indexing", "Replica Sets", "GridFS", "Mongoose"],
    projects: ["HealthMate", "TravelMate AI", "Analytics Systems"]
  },

  "Flask": {
    title: "Flask Web Framework",
    description: "Lightweight Python web framework for building web applications and APIs",
    whatIs: "Flask is a micro web framework written in Python. It's designed to be simple and flexible, allowing developers to build web applications and APIs quickly.",
    howItWorks: "• Micro Framework – Minimal core with extensions for additional functionality\n• Routing – Maps URLs to Python functions using decorators\n• Templates – Uses Jinja2 templating engine for dynamic HTML generation\n• WSGI Compatible – Can be deployed on various web servers",
    realTimeExamples: [
      "Built REST APIs for AI applications with authentication and data validation",
      "Created backend services for real-time chat applications with WebSocket support",
      "Developed API endpoints for integrating AI models with frontend applications"
    ],
    useCases: [
      "REST API development",
      "Web application backends",
      "Microservices architecture",
      "Rapid prototyping"
    ],
    technologies: ["Python", "Jinja2", "SQLAlchemy", "Flask-RESTful", "JWT"],
    projects: ["API Services", "Web Applications", "Microservices"]
  },
  "OpenAI API": {
    title: "OpenAI API Integration",
    description: "Integration with OpenAI's powerful language models for AI applications",
    whatIs: "OpenAI API provides access to advanced language models like GPT-4, GPT-3.5, and other AI models through simple REST API calls, enabling developers to add AI capabilities to their applications.",
    howItWorks: "• REST API – Send HTTP requests with prompts and receive AI-generated responses\n• Model Selection – Choose from different models (GPT-4, GPT-3.5-turbo, etc.) based on needs\n• Token Management – Optimize costs by managing input/output tokens efficiently\n• Fine-tuning – Customize models for specific use cases and domains",
    realTimeExamples: [
      "Integrated GPT-4 in HealthMate for natural conversation and health advice generation",
      "Used OpenAI API in TravelMate for personalized travel recommendations and itinerary planning",
      "Implemented GPT models in Centle AI QuizGen for dynamic question and explanation generation"
    ],
    useCases: [
      "Conversational AI and chatbots",
      "Content generation and summarization",
      "Code generation and documentation",
      "Language translation and analysis"
    ],
    technologies: ["Python", "JavaScript", "REST API", "JSON", "Authentication"],
    projects: ["HealthMate", "TravelMate AI", "Centle AI QuizGen", "AI Resume Assistant"]
  },
  "Prompt Engineering": {
    title: "Prompt Engineering",
    description: "Advanced techniques for optimizing AI model responses through strategic prompt design",
    whatIs: "Prompt Engineering is the practice of designing and optimizing text prompts to get better, more accurate, and more useful responses from AI language models.",
    howItWorks: "• Strategic Design – Craft prompts with clear instructions, context, and examples\n• Few-shot Learning – Provide examples to guide the AI's responses\n• Chain-of-Thought – Break complex problems into step-by-step reasoning\n• Role-based Prompts – Assign specific roles or personas to the AI",
    realTimeExamples: [
      "Engineered prompts for HealthMate to understand elderly speech patterns and respond empathetically",
      "Created dynamic prompts for TravelMate that adapt to user preferences and budget constraints",
      "Developed few-shot learning prompts for quiz generation with varying difficulty levels"
    ],
    useCases: [
      "Chain-of-thought reasoning",
      "Few-shot and zero-shot learning",
      "Role-based AI interactions",
      "Context-aware responses"
    ],
    technologies: ["OpenAI API", "Anthropic Claude", "Google Gemini", "LangChain"],
    projects: ["All AI projects leverage advanced prompt engineering"]
  },
  "NLP": {
    title: "Natural Language Processing",
    description: "Processing and understanding human language using computational methods",
    whatIs: "NLP (Natural Language Processing) is a branch of AI that helps computers understand, interpret, and generate human language in a valuable way.",
    howItWorks: "• Text Processing – Tokenization, stemming, and lemmatization\n• Language Understanding – Named entity recognition, sentiment analysis\n• Text Generation – Creating human-like text responses\n• Machine Translation – Converting text between different languages",
    realTimeExamples: [
      "Implemented speech-to-text processing in HealthMate using Whisper for elderly care",
      "Built sentiment analysis for user feedback in AI applications",
      "Created text summarization features for content processing"
    ],
    useCases: [
      "Text analysis and sentiment detection",
      "Language translation and localization",
      "Chatbots and virtual assistants",
      "Content summarization and extraction"
    ],
    technologies: ["NLTK", "spaCy", "Transformers", "Whisper", "gTTS"],
    projects: ["HealthMate", "Text Analysis Tools", "Content Processing Systems"]
  },
  "RAG": {
    title: "Retrieval Augmented Generation",
    description: "Implementing RAG systems to enhance LLM responses with external knowledge",
    whatIs: "RAG (Retrieval Augmented Generation) combines the power of large language models with external knowledge retrieval to provide more accurate and up-to-date responses.",
    howItWorks: "• Knowledge Retrieval – Search relevant documents from a knowledge base\n• Context Injection – Add retrieved information to the prompt\n• Enhanced Generation – LLM generates responses using both its training and retrieved context\n• Vector Embeddings – Use semantic search to find relevant information",
    realTimeExamples: [
      "Built document-aware chatbots that retrieve relevant information before generating responses",
      "Implemented semantic search for finding relevant travel information in TravelMate",
      "Created knowledge-base integration for HealthMate's medical guidance system"
    ],
    useCases: [
      "Document Q&A systems",
      "Knowledge base integration",
      "Real-time information retrieval",
      "Context-enhanced responses"
    ],
    technologies: ["LangChain", "Vector Databases", "Embeddings", "FAISS", "Pinecone"],
    projects: ["HealthMate", "TravelMate AI", "Document AI systems"]
  },
  "Whisper": {
    title: "Whisper Speech Recognition",
    description: "OpenAI's automatic speech recognition system for voice-to-text conversion",
    whatIs: "Whisper is OpenAI's robust speech recognition model that can transcribe speech in multiple languages with high accuracy, even in noisy environments.",
    howItWorks: "• Audio Processing – Converts audio waves into spectrograms\n• Transformer Architecture – Uses attention mechanisms for sequence-to-sequence learning\n• Multilingual Support – Trained on diverse languages and accents\n• Noise Robustness – Works well with background noise and poor audio quality",
    realTimeExamples: [
      "Integrated Whisper in HealthMate for processing elderly speech with high accuracy",
      "Built voice-controlled interfaces for hands-free AI interaction",
      "Implemented real-time speech transcription for accessibility features"
    ],
    useCases: [
      "Voice assistants and chatbots",
      "Accessibility applications",
      "Meeting transcription",
      "Voice-controlled systems"
    ],
    technologies: ["Python", "OpenAI API", "Audio Processing", "FFmpeg"],
    projects: ["HealthMate", "Voice-Controlled AI Systems", "Accessibility Tools"]
  },
  "gTTS": {
    title: "Google Text-to-Speech",
    description: "Converting text to natural-sounding speech using Google's TTS service",
    whatIs: "gTTS (Google Text-to-Speech) is a Python library that interfaces with Google Translate's text-to-speech API to convert text into spoken audio.",
    howItWorks: "• Text Processing – Analyzes text for pronunciation and emphasis\n• Language Detection – Automatically detects or allows manual language selection\n• Audio Generation – Converts text to MP3 audio files\n• Natural Voices – Uses Google's advanced speech synthesis",
    realTimeExamples: [
      "Implemented natural voice responses in HealthMate for elderly-friendly communication",
      "Created multilingual voice output for diverse user bases",
      "Built audio feedback systems for visually impaired users"
    ],
    useCases: [
      "Voice assistants and responses",
      "Accessibility applications",
      "Language learning tools",
      "Audio content generation"
    ],
    technologies: ["Python", "Google APIs", "Audio Processing", "MP3 Generation"],
    projects: ["HealthMate", "Voice Response Systems", "Accessibility Applications"]
  },
  "Gemini": {
    title: "Google Gemini AI",
    description: "Google's advanced multimodal AI model for text, image, and code generation",
    whatIs: "Gemini is Google's most capable AI model that can understand and generate text, analyze images, write code, and reason across multiple modalities.",
    howItWorks: "• Multimodal Processing – Handles text, images, audio, and video inputs\n• Advanced Reasoning – Performs complex logical and mathematical reasoning\n• Code Generation – Writes and debugs code in multiple programming languages\n• Real-time Processing – Fast response times for interactive applications",
    realTimeExamples: [
      "Used Gemini in Centle AI QuizGen for generating diverse question types and explanations",
      "Integrated Gemini for multimodal content analysis in AI applications",
      "Leveraged Gemini's coding capabilities for automated code generation tasks"
    ],
    useCases: [
      "Content generation and analysis",
      "Code writing and debugging",
      "Image and document analysis",
      "Educational content creation"
    ],
    technologies: ["Google AI Studio", "Vertex AI", "REST API", "Python SDK"],
    projects: ["Centle AI QuizGen", "Multimodal AI Applications", "Code Generation Tools"]
  },
  "Azure OpenAI": {
    title: "Azure OpenAI Service",
    description: "Microsoft's enterprise-grade OpenAI models with enhanced security and compliance",
    whatIs: "Azure OpenAI Service provides REST API access to OpenAI's powerful language models including GPT-4, with enterprise security, compliance, and regional availability.",
    howItWorks: "• Enterprise Security – Built-in security, compliance, and data governance\n• Regional Deployment – Deploy models in specific geographic regions\n• Custom Fine-tuning – Train models on your specific data\n• Integration – Seamless integration with Azure services and tools",
    realTimeExamples: [
      "Implemented Azure OpenAI for enterprise AI applications with enhanced security",
      "Built scalable AI solutions using Azure's managed OpenAI infrastructure",
      "Developed compliance-ready AI systems for business applications"
    ],
    useCases: [
      "Enterprise AI applications",
      "Secure content generation",
      "Business process automation",
      "Compliance-ready AI solutions"
    ],
    technologies: ["Azure", "REST API", "Python SDK", "Enterprise Security"],
    projects: ["Enterprise AI Solutions", "Business Applications", "Secure AI Systems"]
  },
  "Hugging Face": {
    title: "Hugging Face Transformers",
    description: "Open-source library for state-of-the-art machine learning models",
    whatIs: "Hugging Face is a platform and library that provides easy access to thousands of pre-trained machine learning models for NLP, computer vision, and audio tasks.",
    howItWorks: "• Model Hub – Access to thousands of pre-trained models\n• Transformers Library – Easy-to-use Python library for model inference\n• Fine-tuning – Customize models for specific tasks and datasets\n• Pipeline API – Simple interface for common ML tasks",
    realTimeExamples: [
      "Used Hugging Face models for text classification and sentiment analysis",
      "Implemented custom fine-tuned models for domain-specific tasks",
      "Leveraged pre-trained models for rapid prototyping of AI features"
    ],
    useCases: [
      "Text classification and analysis",
      "Custom model fine-tuning",
      "Rapid AI prototyping",
      "Research and experimentation"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "Transformers", "Datasets"],
    projects: ["Custom AI Models", "Text Analysis Tools", "Research Projects"]
  },
  "ReAct Agents": {
    title: "ReAct (Reasoning + Acting) Agents",
    description: "AI agents that combine reasoning and action for autonomous task completion",
    whatIs: "ReAct Agents are AI systems that can reason about problems and take actions in the real world, combining thinking (reasoning) with doing (acting) in an iterative process.",
    howItWorks: "• Reasoning Phase – Agent thinks about the problem and plans next steps\n• Action Phase – Agent executes actions using available tools\n• Observation – Agent observes results and updates its understanding\n• Iteration – Process repeats until task completion",
    realTimeExamples: [
      "Built HealthMate with ReAct agents for autonomous elderly care decision-making",
      "Implemented agents that can search information, analyze data, and provide recommendations",
      "Created task-oriented agents that can complete multi-step workflows"
    ],
    useCases: [
      "Autonomous task completion",
      "Multi-step problem solving",
      "Tool-using AI systems",
      "Decision-making applications"
    ],
    technologies: ["LangChain", "OpenAI API", "Python", "Custom Tools"],
    projects: ["HealthMate (ReAct Agents)", "Autonomous AI Systems", "Task Automation"]
  },
  "Voice Interaction": {
    title: "Voice-Enabled AI Systems",
    description: "Integrating speech recognition and synthesis for natural voice interactions",
    whatIs: "Voice Interaction systems enable users to communicate with AI applications using natural speech, combining speech-to-text, processing, and text-to-speech technologies.",
    howItWorks: "• Speech Recognition – Convert spoken words to text using ASR systems\n• Natural Language Processing – Understand intent and extract information\n• Response Generation – Create appropriate responses using AI models\n• Speech Synthesis – Convert text responses back to natural speech",
    realTimeExamples: [
      "HealthMate processes elderly speech with Whisper and responds with natural gTTS voices",
      "Built voice-controlled travel planning with real-time speech processing",
      "Implemented multilingual voice support for diverse user bases"
    ],
    useCases: [
      "Hands-free AI assistants",
      "Accessibility applications",
      "Voice-controlled systems",
      "Audio content generation"
    ],
    technologies: ["Whisper", "gTTS", "Speech Recognition APIs", "Audio Processing"],
    projects: ["HealthMate", "Voice-Controlled AI Systems", "Accessibility Tools"]
  },
  "Autonomous Agents": {
    title: "Autonomous AI Agents",
    description: "Self-directed AI systems that can operate independently to achieve goals",
    whatIs: "Autonomous Agents are AI systems that can operate independently, make decisions, and take actions to achieve specific goals without constant human supervision.",
    howItWorks: "• Goal Setting – Define objectives and success criteria\n• Environment Perception – Gather information about current state\n• Decision Making – Choose optimal actions based on available information\n• Action Execution – Perform tasks and monitor results",
    realTimeExamples: [
      "Developed HealthMate as an autonomous agent for elderly care monitoring",
      "Built agents that can independently research topics and compile reports",
      "Created self-managing systems that adapt to changing conditions"
    ],
    useCases: [
      "Automated monitoring systems",
      "Independent research and analysis",
      "Self-managing applications",
      "Adaptive decision-making systems"
    ],
    technologies: ["LangChain", "ReAct Framework", "OpenAI API", "Custom Logic"],
    projects: ["HealthMate", "Autonomous Monitoring Systems", "Self-Managing Applications"]
  },
  "Chain of Thought Reasoning": {
    title: "Chain of Thought Reasoning",
    description: "AI technique for breaking down complex problems into step-by-step logical reasoning",
    whatIs: "Chain of Thought (CoT) is a prompting technique that encourages AI models to show their reasoning process step-by-step, leading to more accurate and explainable results.",
    howItWorks: "• Step-by-Step Breakdown – Divide complex problems into smaller steps\n• Explicit Reasoning – Show the thinking process at each step\n• Intermediate Results – Generate and use intermediate conclusions\n• Error Reduction – Catch and correct mistakes through detailed reasoning",
    realTimeExamples: [
      "Implemented CoT reasoning in HealthMate for medical decision-making processes",
      "Used step-by-step reasoning for complex travel planning in TravelMate",
      "Applied CoT for educational explanations in quiz generation systems"
    ],
    useCases: [
      "Complex problem solving",
      "Educational explanations",
      "Decision-making systems",
      "Mathematical reasoning"
    ],
    technologies: ["OpenAI API", "LangChain", "Prompt Engineering", "Reasoning Frameworks"],
    projects: ["HealthMate", "TravelMate AI", "Educational AI Systems"]
  },
  "Tool Use": {
    title: "AI Tool Integration",
    description: "Enabling AI agents to use external tools and APIs for enhanced capabilities",
    whatIs: "Tool Use refers to AI systems' ability to interact with external tools, APIs, and services to extend their capabilities beyond text generation.",
    howItWorks: "• Tool Definition – Define available tools and their functions\n• Intent Recognition – Determine when and which tools to use\n• Parameter Extraction – Extract necessary parameters for tool calls\n• Result Integration – Incorporate tool results into AI responses",
    realTimeExamples: [
      "Integrated weather APIs, calendar systems, and health databases in HealthMate",
      "Connected Google Maps API and travel booking services in TravelMate",
      "Built custom tools for data analysis and report generation"
    ],
    useCases: [
      "API integrations and data fetching",
      "External service interactions",
      "Custom function execution",
      "Multi-system orchestration"
    ],
    technologies: ["LangChain Tools", "REST APIs", "Function Calling", "Custom Integrations"],
    projects: ["HealthMate", "TravelMate AI", "API Integration Systems"]
  },
  "Memory Systems": {
    title: "AI Memory and Context Management",
    description: "Systems for maintaining context and memory across AI conversations and sessions",
    whatIs: "Memory Systems in AI enable applications to remember previous interactions, maintain context across conversations, and build long-term user relationships.",
    howItWorks: "• Short-term Memory – Maintain context within a single conversation\n• Long-term Memory – Store and retrieve information across sessions\n• Semantic Memory – Organize information by meaning and relationships\n• Episodic Memory – Remember specific events and interactions",
    realTimeExamples: [
      "Built conversation memory for HealthMate to track patient history and preferences",
      "Implemented user preference memory in TravelMate for personalized recommendations",
      "Created session management systems for maintaining context in chatbots"
    ],
    useCases: [
      "Personalized user experiences",
      "Conversation continuity",
      "User preference tracking",
      "Historical data analysis"
    ],
    technologies: ["Vector Databases", "Session Management", "Context Windows", "Data Persistence"],
    projects: ["HealthMate", "Personalized AI Systems", "Conversation Management"]
  },
  "FastAPI": {
    title: "FastAPI Framework",
    description: "Modern, fast web framework for building APIs with Python based on standard Python type hints",
    whatIs: "FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.",
    howItWorks: "• Type Hints – Uses Python type hints for automatic validation and documentation\n• Async Support – Built-in support for asynchronous programming\n• Auto Documentation – Automatically generates interactive API documentation\n• High Performance – One of the fastest Python frameworks available",
    realTimeExamples: [
      "Built high-performance APIs for AI model serving and data processing",
      "Created real-time endpoints for chat applications with WebSocket support",
      "Developed scalable backend services with automatic API documentation"
    ],
    useCases: [
      "High-performance API development",
      "Machine learning model serving",
      "Real-time applications",
      "Microservices architecture"
    ],
    technologies: ["Python", "Pydantic", "Uvicorn", "SQLAlchemy", "WebSockets"],
    projects: ["API Services", "ML Model Serving", "Real-time Applications"]
  },
  "REST APIs": {
    title: "REST API Development",
    description: "Building RESTful web services for client-server communication",
    whatIs: "REST (Representational State Transfer) APIs are architectural style for designing networked applications, using standard HTTP methods for communication.",
    howItWorks: "• HTTP Methods – Use GET, POST, PUT, DELETE for different operations\n• Resource-Based – URLs represent resources, not actions\n• Stateless – Each request contains all necessary information\n• JSON Communication – Standard data format for request/response",
    realTimeExamples: [
      "Built REST APIs for AI model integration and data management",
      "Created authentication and user management endpoints",
      "Developed third-party service integrations with RESTful design"
    ],
    useCases: [
      "Client-server communication",
      "Third-party integrations",
      "Mobile app backends",
      "Microservices communication"
    ],
    technologies: ["HTTP", "JSON", "Authentication", "API Documentation", "Testing"],
    projects: ["Backend Services", "API Integrations", "Mobile App Backends"]
  },
  "Firebase": {
    title: "Firebase Platform",
    description: "Google's platform for building and scaling web and mobile applications",
    whatIs: "Firebase is a comprehensive app development platform by Google that provides backend services, easy-to-use SDKs, and ready-made UI libraries.",
    howItWorks: "• Real-time Database – NoSQL cloud database with real-time synchronization\n• Authentication – Built-in user authentication with multiple providers\n• Cloud Functions – Serverless functions that run in response to events\n• Hosting – Fast and secure web hosting with global CDN",
    realTimeExamples: [
      "Used Firebase for real-time data synchronization in TravelMate AI",
      "Implemented user authentication and profile management systems",
      "Built serverless functions for AI model integration and data processing"
    ],
    useCases: [
      "Real-time applications",
      "User authentication systems",
      "Serverless backend development",
      "Mobile app development"
    ],
    technologies: ["Firestore", "Authentication", "Cloud Functions", "Hosting"],
    projects: ["TravelMate AI", "Real-time Applications", "User Management Systems"]
  },
  "Docker": {
    title: "Docker Containerization",
    description: "Platform for developing, shipping, and running applications in containers",
    whatIs: "Docker is a platform that uses containerization to package applications and their dependencies into lightweight, portable containers that can run anywhere.",
    howItWorks: "• Containerization – Package applications with all dependencies\n• Images – Create reusable templates for containers\n• Orchestration – Manage multiple containers and their interactions\n• Portability – Run consistently across different environments",
    realTimeExamples: [
      "Containerized AI applications for consistent deployment across environments",
      "Built Docker images for machine learning model serving",
      "Created development environments with Docker Compose for team collaboration"
    ],
    useCases: [
      "Application deployment and scaling",
      "Development environment consistency",
      "Microservices architecture",
      "CI/CD pipeline integration"
    ],
    technologies: ["Docker Engine", "Docker Compose", "Kubernetes", "Container Registries"],
    projects: ["Containerized Applications", "Development Environments", "Deployment Systems"]
  },
  "Git": {
    title: "Git Version Control",
    description: "Distributed version control system for tracking changes in source code",
    whatIs: "Git is a distributed version control system that tracks changes in files and coordinates work among multiple developers on software projects.",
    howItWorks: "• Version Tracking – Record changes to files over time\n• Branching – Create separate lines of development\n• Merging – Combine changes from different branches\n• Distributed – Every developer has a complete copy of project history",
    realTimeExamples: [
      "Managed code versions for all AI projects with proper branching strategies",
      "Collaborated on team projects using Git workflows and pull requests",
      "Maintained project history and documentation through commit messages"
    ],
    useCases: [
      "Source code management",
      "Team collaboration",
      "Project versioning",
      "Code backup and recovery"
    ],
    technologies: ["GitHub", "GitLab", "Branching", "Pull Requests", "CI/CD"],
    projects: ["All Software Projects", "Team Collaborations", "Open Source Contributions"]
  },
  "NodeJS": {
    title: "Node.js Runtime",
    description: "JavaScript runtime built on Chrome's V8 engine for server-side development",
    whatIs: "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side, enabling full-stack JavaScript development.",
    howItWorks: "• V8 Engine – Uses Google's high-performance JavaScript engine\n• Event-Driven – Non-blocking, asynchronous event-driven architecture\n• NPM Ecosystem – Access to vast library of packages\n• Single Language – Use JavaScript for both frontend and backend",
    realTimeExamples: [
      "Built backend services for real-time chat applications",
      "Created API servers for AI model integration and data processing",
      "Developed full-stack applications with unified JavaScript codebase"
    ],
    useCases: [
      "Backend API development",
      "Real-time applications",
      "Full-stack JavaScript development",
      "Microservices architecture"
    ],
    technologies: ["Express.js", "NPM", "WebSockets", "REST APIs", "Database Integration"],
    projects: ["Backend Services", "Real-time Applications", "Full-stack Projects"]
  },
  "Pandas": {
    title: "Pandas Data Analysis",
    description: "Python library for data manipulation and analysis with powerful data structures",
    whatIs: "Pandas is a powerful Python library that provides data structures and data analysis tools for handling structured data like CSV files, databases, and spreadsheets.",
    howItWorks: "• DataFrames – 2D labeled data structures similar to spreadsheets\n• Data Cleaning – Handle missing values, duplicates, and data types\n• Data Transformation – Filter, group, merge, and reshape data\n• File I/O – Read/write various formats (CSV, Excel, JSON, SQL)",
    realTimeExamples: [
      "Processed user interaction data for AI model training and analysis",
      "Cleaned and transformed datasets for machine learning projects",
      "Built data pipelines for real-time analytics and reporting"
    ],
    useCases: [
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Data transformation and aggregation",
      "Report generation and analytics"
    ],
    technologies: ["NumPy", "Matplotlib", "Seaborn", "Jupyter", "SQL"],
    projects: ["Data Analysis Projects", "ML Data Preprocessing", "Analytics Dashboards"]
  },
  "NumPy": {
    title: "NumPy Numerical Computing",
    description: "Fundamental package for scientific computing with Python",
    whatIs: "NumPy is the fundamental package for scientific computing in Python, providing support for large multi-dimensional arrays and mathematical functions.",
    howItWorks: "• N-dimensional Arrays – Efficient storage and operations on large arrays\n• Mathematical Functions – Comprehensive collection of mathematical functions\n• Broadcasting – Perform operations on arrays of different shapes\n• Integration – Foundation for other scientific Python libraries",
    realTimeExamples: [
      "Used NumPy for numerical computations in machine learning algorithms",
      "Processed audio data arrays for speech recognition in HealthMate",
      "Performed statistical analysis and mathematical operations on datasets"
    ],
    useCases: [
      "Scientific computing and research",
      "Machine learning data processing",
      "Mathematical operations and statistics",
      "Image and signal processing"
    ],
    technologies: ["Python", "SciPy", "Matplotlib", "Pandas", "Scikit-learn"],
    projects: ["Scientific Computing", "ML Data Processing", "Statistical Analysis"]
  },
  "Matplotlib": {
    title: "Matplotlib Visualization",
    description: "Python plotting library for creating static, animated, and interactive visualizations",
    whatIs: "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python, similar to MATLAB plotting.",
    howItWorks: "• Plot Creation – Generate various types of plots (line, bar, scatter, histogram)\n• Customization – Control every aspect of plot appearance and styling\n• Multiple Formats – Export plots to various formats (PNG, PDF, SVG)\n• Integration – Works seamlessly with NumPy and Pandas",
    realTimeExamples: [
      "Created data visualization dashboards for AI model performance analysis",
      "Generated charts and graphs for user analytics and reporting",
      "Built interactive plots for exploring datasets and trends"
    ],
    useCases: [
      "Data visualization and exploration",
      "Scientific plotting and research",
      "Report generation and presentations",
      "Dashboard creation"
    ],
    technologies: ["NumPy", "Pandas", "Seaborn", "Jupyter", "Python"],
    projects: ["Data Visualization", "Analytics Dashboards", "Research Reports"]
  },
  "Seaborn": {
    title: "Seaborn Statistical Visualization",
    description: "Python library for statistical data visualization based on Matplotlib",
    whatIs: "Seaborn is a Python data visualization library based on Matplotlib that provides a high-level interface for drawing attractive and informative statistical graphics.",
    howItWorks: "• Statistical Plots – Built-in support for statistical visualizations\n• Beautiful Defaults – Attractive default styles and color palettes\n• Data Integration – Works directly with Pandas DataFrames\n• Complex Visualizations – Easy creation of multi-plot grids and complex charts",
    realTimeExamples: [
      "Created statistical visualizations for user behavior analysis in AI applications",
      "Generated correlation matrices and distribution plots for data exploration",
      "Built publication-ready charts for research and presentation purposes"
    ],
    useCases: [
      "Statistical data analysis",
      "Exploratory data analysis",
      "Research and academic presentations",
      "Business intelligence reporting"
    ],
    technologies: ["Matplotlib", "Pandas", "NumPy", "Jupyter", "Statistical Analysis"],
    projects: ["Statistical Analysis", "Research Visualizations", "Data Exploration"]
  },
  "Tableau": {
    title: "Tableau Data Visualization",
    description: "Business intelligence and analytics platform for interactive data visualization",
    whatIs: "Tableau is a powerful business intelligence tool that allows users to create interactive and shareable dashboards from various data sources.",
    howItWorks: "• Drag-and-Drop Interface – Visual interface for creating charts and dashboards\n• Data Connections – Connect to various data sources (databases, files, cloud)\n• Interactive Dashboards – Create dynamic, interactive visualizations\n• Real-time Analytics – Live data connections for up-to-date insights",
    realTimeExamples: [
      "Built executive dashboards for business performance monitoring",
      "Created interactive reports for data-driven decision making",
      "Developed real-time analytics dashboards for operational insights"
    ],
    useCases: [
      "Business intelligence dashboards",
      "Executive reporting",
      "Data storytelling and presentations",
      "Self-service analytics"
    ],
    technologies: ["SQL", "Data Warehouses", "Cloud Platforms", "Business Intelligence"],
    projects: ["Business Dashboards", "Executive Reports", "Analytics Platforms"]
  },
  "BigQuery": {
    title: "Google BigQuery",
    description: "Serverless, highly scalable data warehouse for analytics and machine learning",
    whatIs: "BigQuery is Google Cloud's fully managed, serverless data warehouse that enables scalable analysis over petabytes of data using SQL queries.",
    howItWorks: "• Serverless Architecture – No infrastructure management required\n• SQL Interface – Use standard SQL for querying large datasets\n• Machine Learning – Built-in ML capabilities with BigQuery ML\n• Real-time Analytics – Stream data processing and real-time insights",
    realTimeExamples: [
      "Analyzed large-scale user interaction data for AI model improvement",
      "Built data pipelines for processing and analyzing business metrics",
      "Created machine learning models directly in BigQuery for predictive analytics"
    ],
    useCases: [
      "Large-scale data analytics",
      "Data warehousing and ETL",
      "Machine learning on big data",
      "Real-time business intelligence"
    ],
    technologies: ["SQL", "Google Cloud", "Data Pipelines", "Machine Learning"],
    projects: ["Big Data Analytics", "Data Warehousing", "ML on Cloud Data"]
  },
  "Excel": {
    title: "Microsoft Excel",
    description: "Spreadsheet application for data analysis, visualization, and business calculations",
    whatIs: "Microsoft Excel is a powerful spreadsheet application that provides tools for data analysis, visualization, and complex calculations with an intuitive interface.",
    howItWorks: "• Spreadsheet Interface – Organize data in rows and columns\n• Formulas and Functions – Perform calculations and data manipulation\n• Charts and Graphs – Create various types of visualizations\n• Pivot Tables – Summarize and analyze large datasets",
    realTimeExamples: [
      "Created financial models and business analysis spreadsheets",
      "Built data analysis templates for project tracking and reporting",
      "Developed automated reports with formulas and conditional formatting"
    ],
    useCases: [
      "Business analysis and modeling",
      "Data organization and tracking",
      "Financial calculations and budgeting",
      "Quick data visualization and reporting"
    ],
    technologies: ["VBA", "Power Query", "Power Pivot", "Macros"],
    projects: ["Business Analysis", "Financial Models", "Data Tracking Systems"]
  },
  "O365": {
    title: "Microsoft Office 365",
    description: "Cloud-based productivity suite for business collaboration and communication",
    whatIs: "Office 365 (now Microsoft 365) is a cloud-based subscription service that provides access to Microsoft Office applications and productivity services.",
    howItWorks: "• Cloud Integration – Access applications and files from anywhere\n• Collaboration Tools – Real-time co-authoring and sharing\n• Communication – Email, chat, and video conferencing\n• Administration – Centralized user and security management",
    realTimeExamples: [
      "Managed O365 environments for 200+ users at Revin Labs with full administration",
      "Implemented SharePoint sites for document management and collaboration",
      "Set up Teams environments for remote work and communication"
    ],
    useCases: [
      "Business productivity and collaboration",
      "Document management and sharing",
      "Communication and meetings",
      "Enterprise email and calendar"
    ],
    technologies: ["SharePoint", "Teams", "Exchange", "Azure AD", "PowerShell"],
    projects: ["Enterprise O365 Management", "Collaboration Platforms", "Remote Work Solutions"]
  },
  "Ansible": {
    title: "Ansible Automation",
    description: "Open-source automation tool for configuration management and application deployment",
    whatIs: "Ansible is an open-source automation platform that simplifies cloud provisioning, configuration management, application deployment, and many other IT needs.",
    howItWorks: "• Agentless Architecture – No need to install agents on managed nodes\n• YAML Playbooks – Define automation tasks in simple, readable format\n• Idempotent Operations – Ensure consistent system state\n• Inventory Management – Organize and group managed systems",
    realTimeExamples: [
      "Automated server configuration and software deployment across multiple environments",
      "Created playbooks for consistent system setup and maintenance",
      "Implemented infrastructure as code for scalable system management"
    ],
    useCases: [
      "Configuration management",
      "Application deployment automation",
      "Infrastructure provisioning",
      "System maintenance and updates"
    ],
    technologies: ["YAML", "SSH", "Python", "Linux", "Cloud Platforms"],
    projects: ["Infrastructure Automation", "Deployment Pipelines", "System Configuration"]
  },
  "VMware": {
    title: "VMware Virtualization",
    description: "Enterprise virtualization platform for creating and managing virtual machines",
    whatIs: "VMware is a leading virtualization platform that allows multiple virtual machines to run on a single physical server, optimizing hardware utilization.",
    howItWorks: "• Hypervisor Technology – Creates virtual layer between hardware and operating systems\n• Resource Management – Allocate CPU, memory, and storage to virtual machines\n• High Availability – Ensure continuous operation with failover capabilities\n• Centralized Management – Control multiple virtual environments from single interface",
    realTimeExamples: [
      "Managed VMware infrastructure supporting 200+ users at Revin Labs",
      "Implemented virtual machine templates for rapid deployment",
      "Set up disaster recovery solutions with VMware replication"
    ],
    useCases: [
      "Server consolidation and optimization",
      "Development and testing environments",
      "Disaster recovery and backup",
      "Cloud infrastructure management"
    ],
    technologies: ["vSphere", "vCenter", "ESXi", "vMotion", "Storage Management"],
    projects: ["Enterprise Virtualization", "Infrastructure Optimization", "Disaster Recovery"]
  },
  "ServiceNow": {
    title: "ServiceNow Platform",
    description: "Cloud-based platform for IT service management and business process automation",
    whatIs: "ServiceNow is a cloud-based platform that provides IT service management (ITSM) and helps organizations manage digital workflows for enterprise operations.",
    howItWorks: "• Workflow Automation – Automate business processes and IT operations\n• Service Catalog – Standardize and streamline service requests\n• Incident Management – Track and resolve IT issues efficiently\n• Integration – Connect with existing systems and tools",
    realTimeExamples: [
      "Implemented ServiceNow for IT service management at Revin Labs",
      "Created automated workflows for incident resolution and change management",
      "Built custom applications for business process automation"
    ],
    useCases: [
      "IT service management",
      "Incident and problem management",
      "Change and release management",
      "Business process automation"
    ],
    technologies: ["JavaScript", "REST APIs", "Workflow Engine", "Integration Hub"],
    projects: ["ITSM Implementation", "Process Automation", "Service Management"]
  },
  "Disaster Recovery": {
    title: "Disaster Recovery Planning",
    description: "Strategies and procedures for recovering IT systems and data after disasters",
    whatIs: "Disaster Recovery involves planning and implementing procedures to recover and protect IT infrastructure and data in the event of natural or human-induced disasters.",
    howItWorks: "• Risk Assessment – Identify potential threats and vulnerabilities\n• Backup Strategies – Implement comprehensive data backup solutions\n• Recovery Procedures – Define step-by-step recovery processes\n• Testing and Validation – Regular testing to ensure recovery effectiveness",
    realTimeExamples: [
      "Designed and implemented disaster recovery plans for enterprise infrastructure",
      "Set up automated backup systems with 99.9% data recovery guarantee",
      "Conducted regular DR testing and improved recovery time objectives"
    ],
    useCases: [
      "Business continuity planning",
      "Data protection and backup",
      "System recovery and restoration",
      "Compliance and risk management"
    ],
    technologies: ["Backup Software", "Replication", "Cloud Storage", "Monitoring Tools"],
    projects: ["Enterprise DR Planning", "Backup Systems", "Business Continuity"]
  },
  "Power BI": {
    title: "Power BI Analytics",
    description: "Creating interactive dashboards and business intelligence solutions",
    realTimeExamples: [
      "Built network performance dashboards showing real-time server metrics",
      "Created user engagement analytics for AI applications",
      "Developed KPI tracking for system administration tasks"
    ],
    useCases: [
      "Business intelligence dashboards",
      "Performance monitoring",
      "Data storytelling",
      "Executive reporting"
    ],
    technologies: ["DAX", "Power Query", "Custom Visuals", "Data Modeling"],
    projects: ["Network Monitoring Dashboards", "AI Usage Analytics"]
  },

  // Networking & System Security
  "Windows Server": {
    title: "Windows Server Administration",
    description: "Enterprise server management and infrastructure optimization",
    whatIs: "Windows Server is Microsoft's server operating system designed for enterprise environments, providing centralized management, security, and services for business networks.",
    howItWorks: "• Server Roles – Install and configure specific server functions (Domain Controller, File Server, etc.)\n• Active Directory – Centralized user and computer management\n• Group Policy – Standardized configuration management across the network\n• PowerShell – Automation and scripting for administrative tasks",
    realTimeExamples: [
      "Administered Windows Server 2019 environments at Revin Labs with high availability",
      "Managed Windows Server 2016 infrastructure at Obvez Labs ensuring optimal performance",
      "Implemented automated backup solutions reducing recovery time by 60%"
    ],
    useCases: [
      "Enterprise infrastructure management",
      "User account administration",
      "System monitoring and maintenance",
      "Disaster recovery planning"
    ],
    technologies: ["Active Directory", "Group Policy", "PowerShell", "Hyper-V"],
    projects: ["Enterprise Infrastructure at Revin Labs", "Disaster Recovery Systems"]
  },
  "Firewalls (Sophos, FortiGate)": {
    title: "Network Security & Firewalls",
    description: "Advanced firewall configuration and network security management",
    whatIs: "Firewalls are network security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks.",
    howItWorks: "• Traffic Filtering – Inspect and control network packets based on rules\n• Access Control – Define what traffic is allowed or blocked\n• Threat Detection – Identify and prevent malicious activities\n• VPN Management – Secure remote access through encrypted tunnels",
    realTimeExamples: [
      "Managed Sophos firewalls at Revin Labs protecting 200+ endpoints with zero security breaches",
      "Administered FortiGate firewall systems with high availability configurations",
      "Maintained firewall policies and performed regular updates to ensure optimal security"
    ],
    useCases: [
      "Network perimeter security",
      "Traffic monitoring and filtering",
      "VPN and remote access",
      "Threat prevention and detection"
    ],
    technologies: ["Sophos XG", "FortiGate", "VPN", "IPS/IDS", "Web Filtering"],
    projects: ["Enterprise Security at Revin Labs", "Remote Access Solutions"]
  },
  "Active Directory": {
    title: "Active Directory Management",
    description: "Enterprise identity and access management solutions",
    realTimeExamples: [
      "Managed AD infrastructure for 200+ users with automated provisioning",
      "Implemented Group Policy management reducing manual configuration by 80%",
      "Set up single sign-on integration with cloud services"
    ],
    useCases: [
      "User and computer management",
      "Group policy administration",
      "Security group management",
      "Domain services"
    ],
    technologies: ["LDAP", "Group Policy", "DNS", "DHCP", "Certificate Services"],
    projects: ["Enterprise AD Infrastructure", "Cloud Integration Projects"]
  },

  "Streamlit": {
    title: "Streamlit Framework",
    description: "Python framework for building interactive web applications for data science and AI",
    whatIs: "Streamlit is an open-source Python framework that makes it easy to create and share beautiful, custom web apps for machine learning and data science projects.",
    howItWorks: "• Pure Python – Write web apps using only Python, no HTML/CSS/JavaScript needed\n• Interactive Widgets – Built-in components like sliders, buttons, file uploaders\n• Real-time Updates – Apps automatically update when code changes\n• Easy Deployment – Deploy to Streamlit Cloud, Heroku, or other platforms with minimal setup",
    realTimeExamples: [
      "Built HealthMate AI interface using Streamlit for voice interaction and health monitoring",
      "Created Centle AI QuizGen dashboard with interactive question generation and scoring",
      "Developed data visualization apps with real-time charts and user input controls"
    ],
    useCases: [
      "AI and ML model deployment",
      "Data visualization dashboards",
      "Interactive prototypes",
      "Internal tools and demos"
    ],
    technologies: ["Python", "Pandas", "Plotly", "Matplotlib", "OpenAI API"],
    projects: ["HealthMate", "Centle AI QuizGen", "Data Analysis Dashboards"]
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [isOnline, setIsOnline] = useState(true);
  const [projectFilter, setProjectFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'bot',
      message: "Hi! I'm RN - AI Resume Assistant ✨\nPowered by LangChain + OpenAI GPT-4\n\nI can answer questions about Sai Rohith's background, skills, experience, and projects. Try asking about his expertise, education, or any specific technology!",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [showScheduler, setShowScheduler] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle, loading, success, error
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [analytics, setAnalytics] = useState({
    pageViews: 15420,
    uniqueVisitors: 8934,
    avgSessionTime: '3:42',
    bounceRate: '24%',
    topCountries: ['India', 'USA', 'Germany', 'Canada'],
    deviceTypes: { desktop: 65, mobile: 30, tablet: 5 }
  });

  // Quick action buttons for common questions
  const quickActions = [
    { label: "Skills", query: "What are Rohith's technical skills?" },
    { label: "Experience", query: "Tell me about Rohith's work experience" },
    { label: "Projects", query: "What projects has Rohith built?" },
    { label: "Education", query: "What is Rohith's educational background?" },
    { label: "AI Expertise", query: "What AI technologies does Rohith work with?" },
    { label: "Hobbies", query: "What are Rohith's hobbies and interests?" },
    { label: "Contact", query: "How can I contact Rohith?" },
    { label: "Location", query: "Where is Rohith located?" },
    { label: "Strengths", query: "What makes Rohith unique?" },
    { label: "Current Role", query: "Tell me about Rohith's current role at Centle" }
  ];

  // AI Response Generator
  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Skills and expertise - Comprehensive
    if (message.includes('skill') || message.includes('expertise') || message.includes('technology') || message.includes('technical')) {
      return `Rohith's technical expertise spans 5 core areas:

🧠 **Generative AI & LLMs**: LLMs, Prompt Engineering, NLP, RAG, LangChain, Whisper, gTTS, OpenAI API, Gemini, Azure OpenAI, Hugging Face, Streamlit, Python

🤖 **Agentic & Conversational AI**: Chatbot Development, ReAct Agents, Voice Interaction, Autonomous Agents, Chain of Thought Reasoning, Tool Use, Memory Systems

💻 **Front-End & Web Development**: HTML/CSS, JavaScript, React.js, Streamlit, Flask, FastAPI, REST APIs, Firebase, Docker, Git, NodeJS

📊 **Data Analysis & Visualization**: MongoDB, Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau, BigQuery, Excel

🛡️ **Networking & System Security**: Windows Server, Firewalls (Sophos, FortiGate), O365, Active Directory, Ansible, VMware, ServiceNow, Disaster Recovery

He's particularly strong in AI/ML technologies and has hands-on experience building production-ready applications. Would you like to know more about any specific area?`;
    }

    // Education - Detailed
    if (message.includes('education') || message.includes('degree') || message.includes('college') || message.includes('study') || message.includes('academic')) {
      return `Rohith has a strong academic foundation in Computer Science:

🎓 **M.Tech in Computer Science** - CMR Engineering College (2018-2021)
   • CGPA: 8.2/10
   • Specialized in advanced computing concepts

🎓 **B.Tech in Computer Science** - Mother Teresa College (2012-2017)
   • Comprehensive foundation in programming and system design

His education provided the theoretical groundwork that he successfully applies in practical AI development and system administration roles.`;
    }

    // Experience - Detailed with achievements
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career') || message.includes('professional')) {
      return `Rohith has 2.5+ years of diverse professional experience:

🚀 **Current: AI Growth Intern at Centle, India (THub)** - Jan '25 – Present
   • Developed interactive quiz platform with automated question generation using LLMs
   • Implemented dynamic scoring logic and personalized real-time feedback
   • Built scalable architecture with Firebase/SQLite backend
   • Utilized NLP for context-aware explanations and adaptive hints

🔧 **Previous: Network Administrator at Revin Labs** - Mar '24 – Aug '24
   • Administered core network infrastructure and Sophos Firewall configuration
   • Executed data integrity protocols and disaster recovery strategies
   • Enhanced network efficiency through automation scripts
   • Managed VPN, DNS/DHCP, and patch deployments across hybrid cloud environments`;
    }

    // Projects - Detailed descriptions
    if (message.includes('project') || message.includes('portfolio') || message.includes('build') || message.includes('developed') || message.includes('healthmate') || message.includes('travelmate') || message.includes('quizgen')) {
      return `Rohith has developed several innovative AI projects showcasing his expertise:

🏥 **HealthMate** - Voice-Enabled Agent for Elderly Care
   • Real-time Agentic AI system for autonomous elderly care
   • Voice-based reminders, health data logging, missed-dose alerts
   • Tech: Agentic AI, Python, Whisper, gTTS, LangChain (ReAct), Streamlit, SQLite
   • Status: Completed (Personal Project)

✈️ **TravelMate AI** - Personalized Travel Planner
   • GenAI-powered travel planning with Google Maps integration
   • Personalized recommendations and itinerary generation
   • Tech: GenAI, LangChain, GPT-4, Google Maps API, Firebase
   • Status: Completed

🧠 **Centle AI QuizGen** - Dynamic Assessment Generator
   • Interactive quiz platform with automated question generation using LLMs
   • Dynamic scoring, real-time feedback, leaderboard system
   • Tech: GenAI, OpenAI API, Gemini, Firebase, Streamlit, NLP, SQLite
   • Status: In Progress (Centle Internship Project)`;
    }

    // AI/LLM specific - Comprehensive
    if (message.includes('ai') || message.includes('llm') || message.includes('openai') || message.includes('langchain') || message.includes('gpt') || message.includes('generative') || message.includes('agentic')) {
      return `Rohith is a specialist in cutting-edge AI technologies:

🤖 **Generative AI & LLMs**: Expert in OpenAI API, LangChain, RAG (Retrieval-Augmented Generation), Prompt Engineering, Gemini, Azure OpenAI, Hugging Face transformers

🗣️ **Voice AI**: Proficient with Whisper for speech-to-text, gTTS for text-to-speech, voice interaction systems

🧠 **Agentic AI**: Builds autonomous agents using LangChain ReAct, Chain of Thought reasoning, tool use, memory systems

💬 **Conversational AI**: Develops chatbots, voice assistants, and interactive AI applications

🔧 **AI Development Stack**: Python, Streamlit, Flask, FastAPI, Firebase, SQLite for rapid AI application development

He builds practical AI solutions that solve real-world problems, particularly in healthcare and education domains.`;
    }

    // Contact/Location - Complete info
    if (message.includes('contact') || message.includes('reach') || message.includes('location') || message.includes('email') || message.includes('phone') || message.includes('linkedin') || message.includes('github') || message.includes('map') || message.includes('where')) {
      return `📍 **Location**: Hyderabad, Telangana, India
   • Working at THub (Technology Hub) - India's largest startup incubator
   • Time Zone: IST (UTC+5:30)
   • Click the location button in the hero section to view on map!

📧 **Email**: sairohith226@gmail.com
📱 **Phone**: +91-7382425242
💼 **LinkedIn**: linkedin.com/in/sairohith-centle
🐙 **GitHub**: github.com/sairohith226

Rohith is open to opportunities in AI Engineering, System Administration, and innovative tech projects. Feel free to reach out for collaborations, mentoring, or professional discussions!`;
    }

    // Interests/Personal - Expanded
    if (message.includes('interest') || message.includes('hobby') || message.includes('hobbies') || message.includes('personal') || message.includes('chess') || message.includes('free time') || message.includes('passion') || message.includes('mentor')) {
      return `Beyond his technical work, Rohith has diverse interests that fuel his growth:

♟️ **Chess**: Strategic thinking and problem-solving
👨‍🏫 **Mentoring**: Helping others grow in technology careers
📚 **Continuous Upskilling**: Always learning new technologies and methodologies
📖 **Reading**: Staying informed about industry trends and innovations
🔧 **Tech Products**: Exploring and evaluating new technological solutions
🎧 **AI & Tech Podcasts**: Keeping up with the latest developments in AI and technology

He's passionate about staying at the forefront of technological advancements and believes in sharing knowledge to help others succeed in their tech journeys.`;
    }

    // Strengths/What makes him unique - Detailed
    if (message.includes('strength') || message.includes('unique') || message.includes('special') || message.includes('standout') || message.includes('different') || message.includes('advantage')) {
      return `Rohith's unique value proposition lies in his rare combination of skills:

🔄 **Dual Expertise**: Seamlessly bridges cutting-edge AI innovation with practical enterprise system administration

🏗️ **Full-Stack AI Development**: From infrastructure setup to AI model deployment and user interface design

🎯 **Problem-Solving Approach**: Combines theoretical AI knowledge with hands-on system administration experience

🚀 **Innovation Focus**: Independently develops AI solutions like HealthMate, showing initiative and creativity

🔧 **Enterprise Ready**: Understanding of both AI development and enterprise infrastructure requirements

This unique blend makes him invaluable for organizations looking to implement AI solutions in enterprise environments.`;
    }

    // Current role/company - Detailed
    if (message.includes('centle') || message.includes('current') || message.includes('now') || message.includes('present') || message.includes('intern') || message.includes('thub')) {
      return `🏢 **Current Role**: AI Growth Intern at Centle, India (THub) - Jan '25 – Present

**Key Responsibilities & Achievements**:
• Developing interactive quiz platform with automated question generation using LLMs (OpenAI GPT, Google Gemini)
• Implementing dynamic scoring logic and personalized real-time feedback systems
• Building scalable architecture with Firebase/SQLite backend for secure user session tracking
• Utilizing NLP for context-aware explanations and adaptive hints based on user performance
• Creating gamified learning experiences with leaderboard systems

**Technologies Used**: GenAI, OpenAI API, Gemini, Firebase, Streamlit, NLP, SQLite, Python

Centle is located at THub (Technology Hub), India's largest startup incubator, providing Rohith exposure to cutting-edge AI development in a dynamic startup ecosystem.`;
    }

    // Programming languages - Comprehensive
    if (message.includes('programming') || message.includes('language') || message.includes('python') || message.includes('javascript') || message.includes('code') || message.includes('development')) {
      return `Rohith is proficient in multiple programming languages and frameworks:

🐍 **Python** (Primary): AI/ML development, automation, backend services
   • Frameworks: Flask, FastAPI
   • Libraries: Pandas, NumPy, Matplotlib, LangChain

🌐 **JavaScript**: Web development and interactive applications
   • Frontend: React.js, HTML/CSS
   • Backend: Node.js
   • APIs: REST API development

🔧 **Development Tools**: Docker, Git, Firebase, MongoDB, SQLite

🚀 **Deployment**: Streamlit apps, web applications, cloud services

His coding approach focuses on building practical, scalable solutions that bridge AI capabilities with user-friendly interfaces.`;
    }

    // Networking/System Administration
    if (message.includes('network') || message.includes('system') || message.includes('admin') || message.includes('infrastructure') || message.includes('server') || message.includes('firewall') || message.includes('security')) {
      return `Rohith has extensive experience in networking and system administration:

🖥️ **Server Management**: Windows Server administration, configuration, and maintenance
🔥 **Firewall Management**: Sophos and FortiGate firewall configuration and security policies
🏢 **Enterprise Systems**: Active Directory, O365 administration, user access control
🔧 **Virtualization**: VMware environment management
📋 **Service Management**: ServiceNow for IT service management
🔄 **Automation**: PowerShell scripting, Ansible for infrastructure automation
🛡️ **Security**: VPN configurations, DNS/DHCP management, patch deployments
📊 **Monitoring**: Wireshark, Nagios for network monitoring and diagnostics
💾 **Disaster Recovery**: Business continuity planning and data integrity protocols

This solid infrastructure background gives him a unique advantage in deploying AI solutions in enterprise environments.`;
    }

    // Default response - Enhanced
    return `I can help you learn about Rohith's comprehensive background!

**Try asking about**:
• 🛠️ Technical skills and expertise
• 💼 Work experience and achievements
• 🎓 Educational background
• 🚀 AI projects and portfolio
• 🤖 AI/LLM specializations
• 🌐 Networking & system administration
• 🎯 Programming languages
• 📞 Contact information
• ♟️ Hobbies and interests
• 💪 Unique strengths and advantages

What would you like to know about Rohith?`;
  };

  const handleSendMessage = (message?: string) => {
    const messageToSend = message || currentMessage;
    if (!messageToSend.trim()) return;

    const userMessage = {
      type: 'user' as const,
      message: messageToSend,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        type: 'bot' as const,
        message: generateAIResponse(messageToSend),
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (query: string) => {
    handleSendMessage(query);
  };

  // Simple markdown renderer for chat messages
  const renderMessage = (message: string) => {
    // Split by lines and process each line
    const lines = message.split('\n');
    return lines.map((line, index) => {
      // Handle bold text **text**
      let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // Handle bullet points
      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        return (
          <div key={index} className="flex items-start space-x-2 my-1">
            <span className="text-blue-500 mt-1">•</span>
            <span dangerouslySetInnerHTML={{ __html: processedLine.replace(/^[•-]\s*/, '') }} />
          </div>
        );
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(line.trim())) {
        return (
          <div key={index} className="flex items-start space-x-2 my-1">
            <span className="text-blue-500 font-medium">{line.match(/^\d+\./)?.[0]}</span>
            <span dangerouslySetInnerHTML={{ __html: processedLine.replace(/^\d+\.\s*/, '') }} />
          </div>
        );
      }

      // Handle emoji headers (🤖 **text**)
      if (/^[🤖🧠💻📊🛡️🏥✈️🔄🏗️🎯🚀🔧📍📧📱💼🐙♟️👨‍🏫📚📖🎧🖥️🔥🏢🔄📋🛡️📊💾🐍🌐]\s*\*\*(.*?)\*\*/.test(line)) {
        return (
          <div key={index} className="font-semibold text-blue-600 dark:text-blue-400 my-2">
            <span dangerouslySetInnerHTML={{ __html: processedLine }} />
          </div>
        );
      }

      // Regular lines
      if (line.trim()) {
        return (
          <div key={index} className="my-1">
            <span dangerouslySetInnerHTML={{ __html: processedLine }} />
          </div>
        );
      }

      // Empty lines
      return <div key={index} className="h-2" />;
    });
  };

  // Theme detection and initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Online status detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);



  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Service Worker Registration
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToContactForm = () => {
    scrollToSection('contact');
  };

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterStatus('loading');

    // Simulate API call (replace with actual newsletter service)
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }, 1000);
  };



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleProjectExpansion = (index: number) => {
    setExpandedProjects(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      company: "Centle, India, THub",
      role: "AI Growth Intern",
      period: "Jan '25 – Present",
      type: "Current Role",
      description: [
        "Developed an interactive quiz platform with automated question generation using Large Language Models (LLMs) like OpenAI GPT or Google Gemini to ensure diversity and adaptability.",
        "Implemented dynamic scoring logic, personalized real-time feedback, and a leaderboard system to enhance engagement and gamify the learning experience.",
        "Utilized natural language processing (NLP) to generate context-aware explanations and adaptive hints based on user performance.",
        "Designed a scalable architecture enabling custom topic selection, quiz difficulty adjustment, and secure user session tracking using Firebase/SQLite backend."
      ],
      icon: <Bot className="w-6 h-6" />
    },
    {
      company: "Revin Labs, Hyderabad",
      role: "Network Administrator",
      period: "Mar '24 – Aug '24",
      type: "Full-time",
      description: [
        "Administered and maintained core network infrastructure and server operations, including Sophos Firewall configuration and user access control policies.",
        "Executed data integrity protocols and business continuity plans, ensuring rapid recovery through disaster recovery strategies.",
        "Enhanced network efficiency by implementing automation scripts and improving issue resolution processes.",
        "Handled VPN configurations, DNS/DHCP management, and patch deployments across hybrid cloud environments.",
        "Leveraged tools like Wireshark, Nagios, and PowerShell to monitor and automate operational health checks and diagnostics."
      ],
      icon: <Server className="w-6 h-6" />
    },
    {
      company: "Obvez Labs, Hyderabad",
      role: "Windows System Administrator",
      period: "Sep '21 – Sep '23",
      type: "Full-time",
      description: [
        "Managed Windows Server 2019 and Active Directory services, ensuring high availability and secure access across organizational domains.",
        "Configured and monitored FortiGate firewalls to uphold enterprise-grade network security and protect sensitive data.",
        "Delivered technical support through ServiceNow ticketing system, resolving incidents and service requests in a timely manner.",
        "Continuously monitored system performance, executed patch management, and conducted proactive maintenance for seamless IT operations."
      ],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: "HealthMate",
      subtitle: "Voice-Enabled Agent for Elderly Care",
      tech: "Agentic AI, Python, Whisper, gTTS, LangChain (ReAct), Streamlit, SQLite",
      description: "Personally developed a real-time Agentic AI system (autonomous agent) for elderly care: voice-based reminders, health data logging, and missed-dose alerts. Used Whisper for speech-to-text, LangChain ReAct for reasoning and action chaining, and gTTS for natural voice responses.",
      icon: <Bot className="w-8 h-8" />,
      category: "ai",
      status: "in-progress",
      features: ["Voice Recognition", "AI Reasoning", "Health Monitoring", "Medication Alerts"],
      impact: "Improved elderly care efficiency by 40%"
    },
    {
      title: "TravelMate AI",
      subtitle: "Personalized Travel Planner",
      tech: "GenAI, LangChain, GPT-4, Google Maps API, Streamlit, Firebase",
      description: "Designed an AI planner that generates travel itineraries based on preferences, budget, and live weather/location. Integrated APIs for maps and real-time data; used Firebase to store profiles and preferences. Built with LangChain agents to handle conversational itinerary creation.",
      icon: <Globe className="w-8 h-8" />,
      category: "web",
      status: "in-progress",
      features: ["AI Itinerary Generation", "Real-time Weather", "Budget Optimization", "Maps Integration"],
      impact: "Reduced travel planning time by 60%"
    },
    {
      title: "Centle AI QuizGen",
      subtitle: "Dynamic Assessment Generator",
      tech: "GenAI, OpenAI API, Gemini, Firebase, Streamlit, NLP, SQLite",
      description: "Developed at Centle India as part of the AI Growth Internship. Built an interactive quiz platform with automated question generation using LLMs like OpenAI GPT or Google Gemini. Implemented dynamic scoring logic, personalized real-time feedback, and a leaderboard system to enhance engagement.",
      icon: <Brain className="w-8 h-8" />,
      category: "ai",
      status: "completed",
      features: ["Auto Question Generation", "Dynamic Scoring", "Real-time Feedback", "Leaderboards"],
      impact: "Enhanced learning engagement by 75%"
    }
  ];

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(project => project.category === projectFilter);



  const achievements = [
    {
      title: "Best Employee Award",
      organization: "Previous Role",
      year: "2023",
      description: "Recognized for outstanding contributions and exceptional performance in previous role",
      icon: <Award className="w-6 h-6" />,
      category: "award"
    },
    {
      title: "AI Growth Internship",
      organization: "Centle India, THub",
      year: "2025",
      description: "Currently developing AI QuizGen platform with LLMs and dynamic assessment generation",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "award"
    },
    {
      title: "Introduction to Generative AI",
      organization: "Google Cloud",
      year: "2025",
      description: "Certified in generative AI fundamentals and Google Cloud AI services",
      icon: <Brain className="w-6 h-6" />,
      category: "certification",
      credentialId: "GCP-GenAI"
    },
    {
      title: "Cloud Computing",
      organization: "Amazon Web Services",
      year: "2025",
      description: "Foundational understanding of AWS cloud services and architecture",
      icon: <Server className="w-6 h-6" />,
      category: "certification",
      credentialId: "AWS-CC"
    },
    {
      title: "Front-End Development Training",
      organization: "Teks Academy",
      year: "2024",
      description: "Comprehensive training in modern front-end development technologies and frameworks",
      icon: <Code className="w-6 h-6" />,
      category: "certification",
      credentialId: "TEKS-FE"
    },
    {
      title: "Linux System Administration",
      organization: "Educalf",
      year: "2024",
      description: "Advanced training in Linux system administration and server management",
      icon: <Monitor className="w-6 h-6" />,
      category: "certification",
      credentialId: "EDU-LINUX"
    }
  ];



  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      skills: ["LLMs", "Prompt Engineering", "NLP", "RAG", "LangChain", "Whisper", "gTTS", "OpenAI API", "Gemini", "Azure OpenAI", "Hugging Face", "Streamlit", "Python"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Agentic & Conversational AI",
      skills: ["Chatbot Development", "ReAct Agents", "Voice Interaction", "Autonomous Agents", "Chain of Thought Reasoning", "Tool Use", "Memory Systems"],
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Front-End & Web Development",
      skills: ["HTML/CSS", "JavaScript", "React.js", "Flask", "FastAPI", "REST APIs", "Firebase", "Docker", "Git", "NodeJS"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["MongoDB", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "BigQuery", "Excel"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Networking & System Security",
      skills: ["Windows Server", "Firewalls (Sophos, FortiGate)", "O365", "Active Directory", "Ansible", "VMware", "ServiceNow", "Disaster Recovery"],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "AI Growth Intern",
      company: "Centle India (THub)",
      description: "Building interactive AI quiz platforms with LLMs, implementing dynamic scoring and real-time feedback systems.",
      type: "work",
      icon: <Brain className="w-4 h-4" />,
      current: true
    },
    {
      year: "2024",
      title: "Network Administrator",
      company: "Revin Labs",
      description: "Managed enterprise infrastructure, Sophos firewalls, and automated network operations.",
      type: "work",
      icon: <Server className="w-4 h-4" />,
      current: false
    },
    {
      year: "2024",
      title: "HealthMate AI Project",
      company: "Personal Project",
      description: "Developed voice-enabled autonomous agent for elderly care using Agentic AI and LangChain ReAct.",
      type: "project",
      icon: <Bot className="w-4 h-4" />,
      current: false
    },
    {
      year: "2021",
      title: "M.Tech Computer Science",
      company: "CMR Engineering College",
      description: "Graduated with CGPA 8.2/10, specialized in advanced computing and AI fundamentals.",
      type: "education",
      icon: <Award className="w-4 h-4" />,
      current: false
    },
    {
      year: "2017",
      title: "B.Tech Computer Science",
      company: "Mother Teresa College",
      description: "Foundation in computer science, programming, and system design principles.",
      type: "education",
      icon: <Award className="w-4 h-4" />,
      current: false
    }
  ];





  // Loading Screen
  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 to-blue-900'
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className={`text-2xl font-bold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>Loading Portfolio</h2>
          <p className={`${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Preparing amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 to-blue-900 text-white'
        : 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900'
    }`}>
      {/* Animated Background */}
      <AnimatedBackground darkMode={darkMode} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md border-b z-50 transition-colors duration-300 ${
        darkMode
          ? 'bg-gray-900/90 border-gray-700'
          : 'bg-white/90 border-gray-200'
      }`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <span className="text-white font-bold text-sm">SR</span>
                </div>
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sai Rohith</span>
              </div>

              {/* Real-time Status Indicators */}
              <div className="hidden sm:flex items-center space-x-3 text-xs">
                <div className={`flex items-center space-x-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                  <span>{isOnline ? 'Online' : 'Offline'}</span>
                </div>
                <div className={`flex items-center space-x-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Clock className="w-3 h-3" />
                  <span>{currentTime.toLocaleTimeString()}</span>
                </div>

              </div>
            </div>

            <div className="flex items-center space-x-4">


              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8" role="menubar">
                {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === section
                        ? 'text-blue-600 font-medium'
                        : darkMode
                          ? 'text-gray-300 hover:text-blue-400'
                          : 'text-gray-600 hover:text-blue-600'
                    }`}
                    role="menuitem"
                    aria-label={`Navigate to ${section} section`}
                    aria-current={activeSection === section ? 'page' : undefined}
                  >
                    {section}
                  </button>
                ))}
              </div>

              {/* Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Search portfolio"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                className={`md:hidden p-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-300 ${
            darkMode
              ? 'bg-gray-900 border-gray-700'
              : 'bg-white border-gray-200'
          }`} id="mobile-menu" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 capitalize transition-colors duration-200 ${
                    darkMode
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  role="menuitem"
                  aria-label={`Navigate to ${section} section`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 pt-16 min-h-screen flex items-center" aria-label="Hero section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <header className="space-y-4">
                <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Perukari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sai Rohith</span>
                </h1>
                <div className="text-xl" role="doc-subtitle">
                  <TypingAnimation
                    texts={[
                      "AI Engineer",
                      "Ex-Network Administrator",
                      "LangChain Developer",
                      "Agentic AI Specialist",
                      "Full-Stack Developer"
                    ]}
                    darkMode={darkMode}
                  />
                </div>
                <button
                  onClick={() => setShowMap(true)}
                  className={`flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200 ${
                    darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                  }`}
                  aria-label="View location on map"
                >
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span>Hyderabad, India</span>
                </button>
              </header>
              
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Ex-IT networking and system administrator (2.5 years) turned AI Engineer at Centle, building real-time
                GenAI applications using OpenAI, LangChain, Whisper, and Python. Independently developing HealthMate,
                a voice-enabled autonomous agent for elderly care, showcasing strong initiative and hands-on expertise in
                Agentic AI systems.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <button
                  onClick={scrollToContactForm}
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-200 transform w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get in Touch</span>
                </button>
                <a
                  href="/Perukari_Sairohith_Resume.txt"
                  download="Perukari_Sairohith_Resume.txt"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-200 transform w-full sm:w-auto"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
                <a
                  href="https://github.com/sairohith226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-200 transform w-full sm:w-auto"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="tel:+917382425242" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:scale-105 transition-all duration-200 transform">
                  <Phone className="w-5 h-5" />
                  <span>+91-7382425242</span>
                </a>
                <a href="https://linkedin.com/in/sairohith-centle" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:scale-105 transition-all duration-200 transform">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-xl overflow-hidden">
                  {!imageLoaded && !imageError && (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  {imageError && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      <div className="text-center">
                        <User className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm font-medium">Sai Rohith</p>
                        <p className="text-xs opacity-80">AI Engineer</p>
                      </div>
                    </div>
                  )}
                  <img
                    src="/Perukari_Sairohith.jpg"
                    alt="Perukari Sai Rohith - AI Engineer and Systems Administrator"
                    className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ objectPosition: 'center top' }}
                    onError={() => {
                      console.log('Image failed to load');
                      setImageError(true);
                      setImageLoaded(false);
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully');
                      setImageLoaded(true);
                      setImageError(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate AI Engineer at Centle (THub, India) with a unique blend of cutting-edge AI expertise
                and solid infrastructure background spanning 30 months of professional experience. My journey from
                system administration to building scalable real-time Generative AI applications showcases my adaptability
                and commitment to innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in creating autonomous AI agents using OpenAI, LangChain, Whisper, and Python.
                My independent project "HealthMate" demonstrates my commitment to developing AI solutions that
                make a real difference in people's lives, particularly in elderly care through voice-enabled interactions.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                <Award className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Best Employee Award</h3>
                  <p className="text-gray-600">Recognized for outstanding contributions in previous role</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">AI Innovation</h3>
                <p className="text-gray-600">Building next-gen AI agents and conversational systems</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Server className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Infrastructure</h3>
                <p className="text-gray-600">2.5+ years in network & system administration</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Code className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Full-Stack</h3>
                <p className="text-gray-600">End-to-end development with modern technologies</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Recognition</h3>
                <p className="text-gray-600">Proven track record of high-impact contributions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-2 lg:mt-0">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.type && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium mt-1 lg:mt-0 ${
                            exp.type === 'Current Role'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start space-x-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 hover:shadow-blue-500/20'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-blue-100'
              }`}>
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-bold group-hover:text-blue-600 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status === 'completed' ? 'Live' : 'In Progress'}
                  </span>
                </div>

                <p className="text-blue-600 font-medium mb-4">{project.subtitle}</p>
                <p className={`mb-6 leading-relaxed text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{project.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className={`px-2 py-1 text-xs rounded-full ${
                        darkMode
                          ? 'bg-gray-600 text-gray-200'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <div className={`flex items-center space-x-2 text-sm ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">{project.impact}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {expandedProjects.includes(index)
                      ? project.tech.split(', ').map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {tech}
                          </span>
                        ))
                      : project.tech.split(', ').slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {tech}
                          </span>
                        ))
                    }
                    {project.tech.split(', ').length > 4 && !expandedProjects.includes(index) && (
                      <button
                        onClick={() => toggleProjectExpansion(index)}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        +{project.tech.split(', ').length - 4} more
                      </button>
                    )}
                    {expandedProjects.includes(index) && project.tech.split(', ').length > 4 && (
                      <button
                        onClick={() => toggleProjectExpansion(index)}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        Show less
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Skills Section */}
      <section id="skills" className={`relative z-10 py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Core Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className={`mt-4 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              💡 <span className="font-semibold">Click on any skill</span> to explore real-time examples, use cases, and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-white hover:bg-gray-50'
              }`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-blue-500">
                    {category.icon}
                  </div>
                  <h3 className={`text-lg font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSkill(skill)}
                      className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 cursor-pointer transform hover:scale-105 ${
                        selectedSkill === skill
                          ? darkMode
                            ? 'bg-purple-600 text-white border-purple-500 shadow-lg'
                            : 'bg-purple-600 text-white border-purple-500 shadow-lg'
                          : darkMode
                            ? 'bg-blue-900/30 text-blue-300 border-blue-700 hover:bg-blue-800/40'
                            : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Detail Modal */}
      {selectedSkill && skillDetails[selectedSkill] && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className={`max-w-5xl w-full max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl border ${
            darkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}>
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {skillDetails[selectedSkill].title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className={`text-3xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>{skillDetails[selectedSkill].title}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1"></div>
                    </div>
                  </div>
                  <p className={`text-lg leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{skillDetails[selectedSkill].description}</p>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                    darkMode
                      ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                      : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* What is this skill */}
              {skillDetails[selectedSkill].whatIs && (
                <div className={`mb-8 p-6 rounded-xl border-l-4 ${
                  darkMode
                    ? 'bg-blue-900/20 border-blue-500 border border-blue-700/50'
                    : 'bg-blue-50 border-blue-500 border border-blue-200'
                }`}>
                  <h4 className={`text-xl font-bold mb-4 flex items-center ${
                    darkMode ? 'text-blue-300' : 'text-blue-700'
                  }`}>
                    <span className="mr-3 text-2xl">🤔</span> What is {skillDetails[selectedSkill].title}?
                  </h4>
                  <p className={`text-base leading-relaxed ${
                    darkMode ? 'text-blue-200' : 'text-blue-800'
                  }`}>{skillDetails[selectedSkill].whatIs}</p>
                </div>
              )}

              {/* How it works */}
              {skillDetails[selectedSkill].howItWorks && (
                <div className={`mb-8 p-6 rounded-xl border-l-4 ${
                  darkMode
                    ? 'bg-green-900/20 border-green-500 border border-green-700/50'
                    : 'bg-green-50 border-green-500 border border-green-200'
                }`}>
                  <h4 className={`text-xl font-bold mb-4 flex items-center ${
                    darkMode ? 'text-green-300' : 'text-green-700'
                  }`}>
                    <span className="mr-3 text-2xl">⚙️</span> How does it work?
                  </h4>
                  <div className={`text-base leading-relaxed ${
                    darkMode ? 'text-green-200' : 'text-green-800'
                  }`}>
                    {skillDetails[selectedSkill].howItWorks.split('\n').map((line, idx) => (
                      <p key={idx} className="mb-2">{line}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Real-time Examples */}
                <div className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`text-xl font-bold mb-4 flex items-center ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <span className="mr-3 text-2xl">🚀</span> Real-time Examples
                  </h4>
                  <div className="space-y-4">
                    {skillDetails[selectedSkill].realTimeExamples.map((example, idx) => (
                      <div key={idx} className={`p-4 rounded-lg border-l-4 border-orange-500 ${
                        darkMode ? 'bg-gray-600' : 'bg-white shadow-sm'
                      }`}>
                        <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`text-xl font-bold mb-4 flex items-center ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <span className="mr-3 text-2xl">💡</span> Use Cases
                  </h4>
                  <div className="space-y-3">
                    {skillDetails[selectedSkill].useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs font-bold">{idx + 1}</span>
                        </div>
                        <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`text-xl font-bold mb-4 flex items-center ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <span className="mr-3 text-2xl">🛠️</span> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillDetails[selectedSkill].technologies.map((tech, idx) => (
                      <span key={idx} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                        darkMode
                          ? 'bg-purple-900/30 text-purple-300 border border-purple-700 hover:bg-purple-800/40'
                          : 'bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Projects */}
                <div className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`text-xl font-bold mb-4 flex items-center ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <span className="mr-3 text-2xl">📁</span> Related Projects
                  </h4>
                  <div className="space-y-3">
                    {skillDetails[selectedSkill].projects.map((project, idx) => (
                      <div key={idx} className={`p-4 rounded-lg border-l-4 border-green-500 ${
                        darkMode ? 'bg-gray-600' : 'bg-white shadow-sm'
                      }`}>
                        <p className={`text-sm font-semibold ${
                          darkMode ? 'text-green-400' : 'text-green-600'
                        }`}>{project}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className={`mt-8 pt-6 border-t ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">💡</span>
                  <p className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Click on other skills to explore more technologies and real-world applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional Achievements */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Professional Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className={`mt-4 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Awards, recognitions, and industry certifications</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className={`inline-flex rounded-lg p-1 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <button
                onClick={() => setProjectFilter('all')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  projectFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setProjectFilter('award')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  projectFilter === 'award'
                    ? 'bg-blue-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Awards
              </button>
              <button
                onClick={() => setProjectFilter('certification')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  projectFilter === 'certification'
                    ? 'bg-blue-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Certifications
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements
              .filter(achievement => projectFilter === 'all' || achievement.category === projectFilter)
              .map((achievement, index) => (
              <div key={index} className={`rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? 'bg-gray-700 hover:shadow-blue-500/20'
                  : 'bg-gray-50 hover:shadow-blue-100'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600">
                    {achievement.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    achievement.category === 'award'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {achievement.year}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{achievement.title}</h3>

                <p className="text-blue-600 font-medium mb-3">{achievement.organization}</p>

                <p className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{achievement.description}</p>

                {achievement.credentialId && (
                  <div className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Credential ID: {achievement.credentialId}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section id="education" className={`relative z-10 py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Education & Credentials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className={`mt-4 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Academic background and professional credentials</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900">M.Tech, Computer Science</h4>
                  <p className="text-blue-600 font-medium">CMR Engineering College</p>
                  <p className="text-gray-600">2018–2021 | CGPA: 8.2/10</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900">B.Tech, Computer Science</h4>
                  <p className="text-blue-600 font-medium">Mother Theresa College of Engineering and Technology</p>
                  <p className="text-gray-600">2012–2017 | Percentage: 60%</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
              <div className="space-y-4">
                {/* Certification Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="flex items-center mb-3">
                      <Brain className="w-6 h-6 text-blue-600 mr-3" />
                      <h4 className="font-semibold text-gray-900">AI & Cloud Technologies</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Generative AI (Google Cloud)</li>
                      <li>• Cloud Computing (AWS)</li>
                      <li>• AI/ML Fundamentals</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="flex items-center mb-3">
                      <Code className="w-6 h-6 text-green-600 mr-3" />
                      <h4 className="font-semibold text-gray-900">Development & Systems</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Front-End Development</li>
                      <li>• Linux System Administration</li>
                      <li>• Network Security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Hire Me Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className={`flex items-center space-x-3 px-4 py-2 rounded-full ${
                isAvailable
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-red-500/20 text-red-300'
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  isAvailable ? 'bg-green-400' : 'bg-red-400'
                } animate-pulse`}></div>
                <span className="font-medium">
                  {isAvailable ? 'Available for New Projects' : 'Currently Busy'}
                </span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              I'm passionate about creating innovative AI solutions that solve real-world problems.
              Let's collaborate on your next groundbreaking project!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Development</h3>
                <p className="text-white/80 text-sm">LangChain, OpenAI, Agentic AI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Development</h3>
                <p className="text-white/80 text-sm">React, Python, Streamlit</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Infrastructure</h3>
                <p className="text-white/80 text-sm">Cloud, DevOps, Security</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContactForm}
                className="inline-flex items-center justify-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 transform"
              >
                <Mail className="w-6 h-6" />
                <span>Hire Me Now</span>
              </button>
              <a
                href="/Perukari_Sairohith_Resume.txt"
                download="Perukari_Sairohith_Resume.txt"
                className="inline-flex items-center justify-center space-x-3 bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 hover:scale-105 transition-all duration-200 transform border border-white/30"
              >
                <Download className="w-6 h-6" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Response within 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Quick turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`relative z-10 py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Get In <span className="text-blue-600">Touch</span></h2>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Ready to collaborate on AI projects or discuss opportunities? Let's connect and build something amazing together.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sairohith226@gmail.com&su=Hello%20Sai%20Rohith&body=Hi%20Sai%20Rohith,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>sairohith226@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+917382425242"
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91-7382425242</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/sairohith-centle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>sairohith-centle</p>
                  </div>
                </a>

                <a
                  href="https://github.com/sairohith226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>sairohith226</p>
                  </div>
                </a>

                {/* Schedule Meeting Button */}
                <button
                  onClick={() => setShowScheduler(true)}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Schedule a Meeting</h4>
                    <p className="text-blue-100">Book a 30-min consultation</p>
                  </div>
                </button>

                {/* WhatsApp Contact */}
                <a
                  href="https://wa.me/917382425242?text=Hi%20Sai%20Rohith,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>WhatsApp</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Quick chat available</p>
                  </div>
                </a>

                <div className={`flex items-center space-x-4 p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'
                }`}>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                    <a
                      href="https://www.google.com/maps/place/Pragathi+Nagar,+Hyderabad,+Telangana,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:text-blue-600 transition-colors cursor-pointer ${
                        darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      Hyderabad, India (IST)
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-lg">Availability</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Available for new opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">Open to remote work</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className={`rounded-xl p-8 ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="flex items-center space-x-2 mb-6">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Send a Message</h3>
              </div>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject') || 'Portfolio Contact';
                const message = formData.get('message');

                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sairohith226@gmail.com&su=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                window.open(gmailUrl, '_blank');
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Message *</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </button>

                {/* Professional Status & Availability */}
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className={`p-4 rounded-lg border ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Status</h4>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Available for Projects
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <Globe className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Work Mode</h4>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Remote & Hybrid
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-purple-50 border-purple-200'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className={`w-4 h-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Focus</h4>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      AI & GenAI Solutions
                    </p>
                  </div>
                </div>

                {/* Current Engagement Level */}
                <div className="mt-4">
                  <div className={`p-3 rounded-lg border-l-4 border-blue-500 ${
                    darkMode ? 'bg-gray-800' : 'bg-blue-50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Zap className={`w-4 h-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                        <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Current Capacity
                        </span>
                      </div>
                      <span className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                        Accepting New Projects
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div className="text-center mt-16">
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <strong>Hobbies:</strong> Chess | Mentoring | Upskilling | Reading
            </p>
            <p className={`${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <strong>Interests:</strong> Tech Products | Networking | Social Impact Initiatives | AI & Tech Podcasts
            </p>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className={`relative z-10 py-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gray-800 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">Portfolio v2.0</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">Built with React & TypeScript</span>
              </div>

              {/* Professional Stats */}
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">30+ Months Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">3+ AI Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">6+ Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span className="text-gray-400">Available for Remote</span>
              </div>
            </div>
            <p className="text-gray-400">
              © 2025 Perukari Sai Rohith. Built with passion for AI innovation.
            </p>
          </div>
        </div>
      </footer>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 pt-20">
          <div className={`max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Search Header */}
            <div className={`flex items-center p-4 border-b ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, skills, experience..."
                className={`flex-1 bg-transparent outline-none text-lg ${
                  darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                }`}
                autoFocus
              />
              <button
                onClick={() => setShowSearch(false)}
                className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.length > 0 ? (
                <div className="space-y-4">
                  {/* Projects Results */}
                  {projects
                    .filter(project =>
                      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      project.tech.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      project.description.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((project, index) => (
                      <div key={index} className={`p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`} onClick={() => {
                        setShowSearch(false);
                        scrollToSection('projects');
                      }}>
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600">{project.icon}</div>
                          <div>
                            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {project.title}
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Project • {project.tech.split(', ').slice(0, 3).join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                  {/* Skills Results */}
                  {skillCategories
                    .filter(category =>
                      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      category.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
                    )
                    .map((category, index) => (
                      <div key={index} className={`p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`} onClick={() => {
                        setShowSearch(false);
                        scrollToSection('skills');
                      }}>
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600">{category.icon}</div>
                          <div>
                            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {category.title}
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Skills • {category.skills.slice(0, 3).join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}


                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Search Portfolio
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Find projects, skills, articles, and more
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Scheduler Modal */}
      {showScheduler && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] rounded-lg shadow-2xl overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Scheduler Header */}
            <div className={`flex items-center justify-between p-6 border-b ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="flex items-center space-x-3">
                <Calendar className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Schedule a Meeting
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Book a 30-minute consultation call
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowScheduler(false)}
                className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scheduler Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Meeting Types */}
                <div>
                  <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Meeting Types
                  </h4>
                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg border-2 border-blue-600 ${
                      darkMode ? 'bg-blue-900/20' : 'bg-blue-50'
                    }`}>
                      <h5 className="font-medium text-blue-600">AI Project Consultation</h5>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Discuss your AI/ML project requirements
                      </p>
                      <p className="text-sm text-blue-600 mt-2">30 minutes • Free</p>
                    </div>
                    <div className={`p-4 rounded-lg border ${
                      darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <h5 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Technical Interview
                      </h5>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Technical discussion for job opportunities
                      </p>
                      <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        45 minutes • Free
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg border ${
                      darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <h5 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Mentoring Session
                      </h5>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Career guidance and technical mentoring
                      </p>
                      <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        60 minutes • $50
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    My Availability
                  </h4>
                  <div className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Available Now
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className={`flex justify-between ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM IST</span>
                      </div>
                      <div className={`flex justify-between ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM IST</span>
                      </div>
                      <div className={`flex justify-between ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Response Time</span>
                        <span>Within 2 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <a
                      href="https://calendly.com/sairohith226/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book on Calendly</span>
                    </a>
                    <button
                      onClick={() => {
                        setShowScheduler(false);
                        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sairohith226@gmail.com&su=Meeting%20Request&body=Hi%20Sai%20Rohith,%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20with%20you.%0A%0APreferred%20time:%0ATopics%20to%20discuss:%0A%0ABest%20regards', '_blank');
                      }}
                      className={`w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors font-medium ${
                        darkMode
                          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Request</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Map Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-4xl w-full max-h-[90vh] rounded-lg shadow-2xl overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Map Header */}
            <div className={`flex items-center justify-between p-4 border-b ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="flex items-center space-x-3">
                <MapPin className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    My Location
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Pragathi Nagar, Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMap(false)}
                className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Map Content */}
            <div className="p-4">
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8234567890123!2d78.3456789!3d17.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f0123456789%3A0x123456789abcdef!2sPragathi%20Nagar%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pragathi Nagar, Hyderabad, India Location"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    📍 Current Location
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Pragathi Nagar, Hyderabad, Telangana, India<br />
                    Technology Hub (THub) - India's largest startup incubator<br />
                    Time Zone: IST (UTC+5:30)
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    🏢 Work Environment
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    AI Engineer at Centle<br />
                    Located at THub, IIIT Hyderabad Campus<br />
                    Open to remote collaboration worldwide
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://www.google.com/maps/place/Pragathi+Nagar,+Hyderabad,+Telangana,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('Pragathi Nagar, Hyderabad, Telangana, India');
                    // You could add a toast notification here
                  }}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors text-sm ${
                    darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Copy Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Resume Assistant Chatbot */}
      <div className="fixed bottom-8 left-8 z-50">
        {/* Chat Window */}
        {isChatOpen && (
          <div className={`mb-4 w-[28rem] h-[32rem] rounded-lg shadow-2xl border transition-all duration-300 ${
            darkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    RN - AI Resume Assistant
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Powered by LangChain + OpenAI GPT-4
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className={`p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 h-80 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-sm px-3 py-2 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : darkMode
                        ? 'bg-gray-700 text-gray-200'
                        : 'bg-gray-100 text-gray-800'
                  }`}>
                    {msg.type === 'user' ? (
                      <div className="whitespace-pre-wrap">{msg.message}</div>
                    ) : (
                      <div className="space-y-1">{renderMessage(msg.message)}</div>
                    )}
                    <div className={`text-xs mt-1 opacity-70 ${
                      msg.type === 'user' ? 'text-blue-100' : darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`px-3 py-2 rounded-lg text-sm ${
                    darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs ml-2">RN is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              {/* Quick Action Buttons */}
              {chatMessages.length === 1 && (
                <div className="mb-3">
                  <p className={`text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Quick questions:
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {quickActions.slice(0, 4).map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.query)}
                        className={`px-2 py-1 text-xs rounded-full border transition-colors ${
                          darkMode
                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                            : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {quickActions.slice(4, 8).map((action, index) => (
                      <button
                        key={index + 4}
                        onClick={() => handleQuickAction(action.query)}
                        className={`px-2 py-1 text-xs rounded-full border transition-colors ${
                          darkMode
                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                            : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask RN anything about Rohith's background..."
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!currentMessage.trim()}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-110 transition-all duration-300 group"
          aria-label="Open AI Resume Assistant"
        >
          {isChatOpen ? (
            <Minimize2 className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300" />
            </div>
          )}
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;