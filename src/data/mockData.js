import NptelPdf from '../assets/nptel.pdf';
import ChatgptgenPdf from '../assets/chatgptgen.pdf';
import ChatgptMadeEasyPdf from '../assets/ChatGPTmadeeasy.pdf';
import BuildGenerativeAiPdf from '../assets/Buildgenerativeai.pdf';
import MasterGenerativeAiPdf from '../assets/Mastergenerativeai.pdf';
import AimlPdf from '../assets/aiml.pdf';
import CommunityPdf from '../assets/community.pdf';
import RProgrammingPdf from '../assets/rprogramming.pdf';
import BoardInfinityPdf from '../assets/boardinfinity.pdf';
import ComputerPdf from '../assets/computer.pdf';
import FreecodePdf from '../assets/freecode.pdf';

export const skills = {
  ml: [
    { name: 'TensorFlow', level: 90, icon: '🧠', category: 'ml', color: '#FF6F00' },
    { name: 'PyTorch', level: 85, icon: '🔥', category: 'ml', color: '#EE4C2C' },
    { name: 'Scikit-learn', level: 88, icon: '📊', category: 'ml', color: '#F7931E' },
    { name: 'Keras', level: 85, icon: '🔷', category: 'ml', color: '#D00000' },
    { name: 'OpenCV', level: 80, icon: '👁️', category: 'ml', color: '#5C3EE8' },
  ],
  dataScience: [
    { name: 'Python', level: 92, icon: '🐍', category: 'dataScience', color: '#3776AB' },
    { name: 'Pandas', level: 88, icon: '🐼', category: 'dataScience', color: '#150458' },
    { name: 'NumPy', level: 85, icon: '🔢', category: 'dataScience', color: '#013243' },
    { name: 'SQL', level: 82, icon: '🗄️', category: 'dataScience', color: '#4479A1' },
    { name: 'Matplotlib', level: 80, icon: '📈', category: 'dataScience', color: '#11557C' },
  ],
  tools: [
    { name: 'Docker', level: 75, icon: '🐳', category: 'tools', color: '#2496ED' },
    { name: 'Git/GitHub', level: 85, icon: '📦', category: 'tools', color: '#F05032' },
    { name: 'Jupyter', level: 90, icon: '📓', category: 'tools', color: '#F37626' },
    { name: 'AWS SageMaker', level: 72, icon: '☁️', category: 'tools', color: '#FF9900' },
    { name: 'Google Colab', level: 65, icon: '☸️', category: 'tools', color: '#326CE5' }
  ]
};

export const skillsArray = [
  ...skills.ml,
  ...skills.dataScience,
  ...skills.tools
];

export const interests = [
  { emoji: '📚', name: 'Reading Research Papers' },
  { emoji: '🎮', name: 'Gaming' },
  { emoji: '🎵', name: 'Music' },
  { emoji: '🏏', name: 'Cricket' },
  { emoji: '✈️', name: 'Travel' },
  { emoji: '📸', name: 'Photography' },
  { emoji: '🎧', name: 'Tech Podcasts' },
  { emoji: '⚡', name: 'Kaggle Competitions' },
  { emoji: '☕', name: 'Coffee' },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Lovely Professional University',
    year: '2023 - 2027',
    score: 'CGPA: 5.79/10',
    courses: ['Machine Learning', 'Deep Learning', 'Data Science', 'Computer Vision', 'NLP', 'Probability & Statistics']
  },
  {
    degree: 'Senior Secondary Education',
    institution: 'Al Hafeez College',
    year: '2020 - 2022',
    score: 'Percentage: 60.6%',
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
  }
];

export const researchPapers = [
  {
    title: 'Code Switch ASR Text Normalization ',
    conference: 'IEEE International Conference on Speech and Signal Processing (ICASSP)',
    year: '2025',
    link: '#',
    abstract: 'This paper presents a novel approach for text normalization in code-switched Automatic Speech Recognition (ASR) systems. The proposed method improves transcription quality by handling multilingual mixing and linguistic variations effectively, leading to enhanced accuracy and robustness in real-world speech processing scenarios.',
    citations: 5
  },
  {
    title: 'Comparative Analysis of Transformer Models for Sentiment Analysis',
    conference: 'ACM Symposium on Applied Computing (SAC 2024)',
    year: '2024',
    link: '#',
    abstract: 'A comprehensive study comparing BERT, RoBERTa, and DistilBERT for sentiment analysis tasks across multiple datasets.',
    citations: 3
  },
  {
    title: 'Optimizing Hyperparameters in Neural Networks using Genetic Algorithms',
    conference: 'International Conference on Soft Computing (ICSC 2023)',
    year: '2023',
    link: '#',
    abstract: 'Proposed a genetic algorithm-based approach for hyperparameter optimization in deep neural networks, showing 15% improvement in convergence speed.',
    citations: 8
  }
];

export const certifications = [
  {
    name: 'Privacy & Security Online Social Media',
    issuer: 'NPTEL',
    year: '2025',
    credential: 'DL-123-456',
    link: '#',
    file: NptelPdf
  },
  {
    name: 'ChatGPT Prompt Engineering, GenAI & LLM',
    issuer: 'Infosys',
    year: '2025',
    credential: 'TF-789-012',
    link: '#',
    file: ChatgptgenPdf
  },
  {
    name: 'ChatGPT Made Easy: AI Essentials for Beginners',
    issuer: 'Udemy',
    year: '2025',
    credential: 'MLOPS-345-678',
    link: '#',
    file: ChatgptMadeEasyPdf
  },
  {
    name: 'Building Generative AI Apps with no-code Tools',
    issuer: 'Udemy',
    year: '2025',
    credential: 'HF-901-234',
    link: '#',
    file: BuildGenerativeAiPdf
  },
  {
    name: 'Master Generative AI & GenAI Tools (ChatGPT & more)',
    issuer: 'Udemy',
    year: '2025',
    credential: 'HF-901-234',
    link: '#',
    file: MasterGenerativeAiPdf
  },
  {
    name: 'AI & ML for Real World Problems solving',
    issuer: 'Centre For Professional Enhancement',
    year: '2025',
    credential: 'HF-901-234',
    link: '#',
    file: AimlPdf
  },
  
  {
    name: 'Community Development Project',
    issuer: 'Nai Aasha Foundation',
    year: '2024',
    credential: 'HF-901-234',
    link: '#',
    file: CommunityPdf
  },
  {
    name: 'R Programming for Data Science',
    issuer: 'Board Infinity',
    year: '2024',
    credential: 'HF-901-234',
    link: '#',
    file: RProgrammingPdf
  },

  {
    name: 'Python for Data Science',
    issuer: 'Board Infinity',
    year: '2024',
    credential: 'HF-901-234',
    link: '#',
    file: BoardInfinityPdf
  },
  {
    name: 'Computer Programming',
    issuer: 'NeoColab',
    year: '2024',
    credential: 'HF-901-234',
    link: '#',
    file: ComputerPdf
  },
  {
    name: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    year: '2023',
    credential: 'HF-901-234',
    link: '#',
    file: FreecodePdf
  },
  
];

export const testimonials = [
  {
    id: 1,
    name: 'Dr. Anjali Sharma',
    position: 'Professor, AI Research Lab',
    text: 'Aditya is one of the most promising AI researchers I\'ve worked with. His understanding of deep learning architectures and ability to implement complex models is exceptional.',
    avatar: 'https://images.unsplash.com/photo-1494790108777-38380a981a68?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 2,
    name: 'Vikram Mehta',
    position: 'ML Engineer, TechCorp',
    text: 'Working with Aditya on the medical imaging project was incredible. His attention to detail and innovative approach to problem-solving really stood out.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 3,
    name: 'Neha Gupta',
    position: 'Data Scientist, Analytics Inc.',
    text: 'Aditya\'s expertise in both traditional ML and modern deep learning is impressive. He\'s always up-to-date with the latest research and applies it practically.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }
];

export const contactInfo = {
  email: 'araj30909@gmail.com',
  phone: '+91 70500 13162',
  location: 'Punjab, India',
  social: {
    github: 'https://github.com/adityaraj70500',
    linkedin: 'https://www.linkedin.com/in/aditya-raj-215524297/',
    twitter: 'https://twitter.com/adityaraj',
    kaggle: 'https://kaggle.com/adityaraj'
  }
};

export const mlProjects = [
  {
    id: 1,
    title: 'Hobby Recommendation System',
    description: 'A smart recommendation system that suggests hobbies based on user interests, personality, and behavior.',
    longDescription: 'Developed an intelligent hobby recommendation system that suggests personalized hobbies using machine learning techniques. The system analyzes user preferences, interests, and behavioral patterns to provide accurate recommendations. Implemented collaborative filtering and content-based filtering approaches to improve suggestion quality. Integrated a user-friendly interface and optimized the model for real-time recommendations.',
    tags: ['TensorFlow', 'OpenCV', 'Python', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/adityaraj/medical-image-classifier',
    live: '#',
    featured: true,
    accuracy: '92.5%',
    dataset: 'User Preference Dataset'
  },
  {
    id: 2,
    title: 'Emotion Aware Product Recommendation with real Time Facial Recognition',
    description: 'AI-powered system that detects user emotions in real-time using facial recognition and recommends products accordingly.',
    longDescription: 'Developed an emotion-aware product recommendation system that uses real-time facial recognition to detect user emotions and provide personalized product suggestions. Implemented facial emotion recognition (FER) using deep learning models integrated with OpenCV and DeepFace. The system captures live video input, analyzes facial expressions (happy, sad, neutral, etc.), and maps them to suitable product categories. Designed a recommendation engine that adapts dynamically based on detected emotions, improving user engagement and personalization.',
    tags: ['OpenCV', 'DeepFace', 'HuggingFace Transformation', 'FER'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/adityaraj/sentiment-transformer',
    live: '#',
    featured: true,
    accuracy: '92.3%',
    model: 'CNN + DeepFace (Emotion Detection Model)'
  }
];