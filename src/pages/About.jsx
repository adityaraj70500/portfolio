import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Profile from '../assets/images/profile.jpeg';
import { 
  GraduationCap, Briefcase, Award, Heart, Target, BookOpen, Mail, MapPin, Brain,
  Cpu, Database, BarChart, Code2, Server, Wrench, Trophy, Rocket, Sparkles, 
  Coffee, Music, Camera, Gamepad, Globe, TrendingUp, Users, MessageCircle, 
  Lightbulb, Clock, Activity, Microscope, LineChart, GitBranch, Terminal,
  ArrowRight
} from 'lucide-react';
import { education, skills, certifications, interests, researchPapers } from '../data/mockData';
import styles from './About.module.css';

const About = () => {
  const categories = {
    ml: { 
      title: 'Machine Learning & Deep Learning', 
      icon: <Brain className={styles.categoryIcon} />,
      color: 'emerald',
      description: 'Building intelligent models using state-of-the-art architectures and frameworks'
    },
    dataScience: { 
      title: 'Data Science & Analytics', 
      icon: <BarChart className={styles.categoryIcon} />,
      color: 'purple',
      description: 'Extracting insights from data using statistical analysis and visualization'
    },
    tools: { 
      title: 'MLOps & Tools', 
      icon: <Wrench className={styles.categoryIcon} />,
      color: 'amber',
      description: 'Deploying and scaling ML models in production environments'
    }
  };

  const researchHighlights = [
    { name: 'Computer Vision', papers: 2, icon: <Activity />, color: '#10b981' },
    { name: 'Natural Language Processing', papers: 1, icon: <MessageCircle />, color: '#8b5cf6' },
    { name: 'Optimization Algorithms', papers: 1, icon: <TrendingUp />, color: '#f59e0b' }
  ];

  const conferenceTalks = [
    { title: 'Transfer Learning in Medical Imaging', venue: 'IEEE AIML Conference 2024', year: '2024', type: 'Oral Presentation' },
    { title: 'Transformer Models for Sentiment Analysis', venue: 'ACM SAC 2024', year: '2024', type: 'Poster Session' },
    { title: 'Hyperparameter Optimization with Genetic Algorithms', venue: 'ICSC 2023', year: '2023', type: 'Workshop' }
  ];

  const learningGoals = [
    { name: 'Graph Neural Networks', progress: 65, icon: <GitBranch />, color: '#10b981', resource: 'Stanford CS224W' },
    { name: 'Reinforcement Learning', progress: 55, icon: <Target />, color: '#8b5cf6', resource: 'DeepMind x UCL' },
    { name: 'MLOps & Kubeflow', progress: 45, icon: <Server />, color: '#f59e0b', resource: 'Coursera Specialization' },
    { name: 'Generative AI', progress: 70, icon: <Sparkles />, color: '#ec489a', resource: 'Hugging Face Course' },
    { name: 'Time Series Forecasting', progress: 50, icon: <LineChart />, color: '#3b82f6', resource: 'Kaggle Competitions' },
    { name: 'LLM Fine-tuning', progress: 60, icon: <Microscope />, color: '#06b6d4', resource: 'DeepLearning.AI' }
  ];

  const skillBadges = [
    { name: 'Problem Solving', icon: <Brain />, level: 88, color: '#10b981' },
    { name: 'Research & Analysis', icon: <Microscope />, level: 85, color: '#8b5cf6' },
    { name: 'Communication', icon: <MessageCircle />, level: 90, color: '#f59e0b' },
    { name: 'Team Collaboration', icon: <Users />, level: 87, color: '#3b82f6' },
    { name: 'Adaptability', icon: <Sparkles />, level: 92, color: '#ec489a' },
    { name: 'Critical Thinking', icon: <Lightbulb />, level: 89, color: '#06b6d4' }
  ];

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContent}>
          <Brain className={styles.heroIcon} />
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>
            AI/ML Engineer & Researcher passionate about pushing the boundaries of artificial intelligence
          </p>
        </div>
      </motion.div>

      <div className={styles.quickInfo}>
        <motion.div 
          className={styles.infoCard}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MapPin className={styles.infoIcon} />
          <div>
            <h3>Location</h3>
            <p>Punjab, India</p>
          </div>
        </motion.div>
        <motion.div 
          className={styles.infoCard}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GraduationCap className={styles.infoIcon} />
          <div>
            <h3>Education</h3>
            <p>B.Tech CSE, 2027</p>
          </div>
        </motion.div>
        <motion.div 
          className={styles.infoCard}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Microscope className={styles.infoIcon} />
          <div>
            <h3>Research</h3>
            <p>3 Published Papers</p>
          </div>
        </motion.div>
        <motion.div 
          className={styles.infoCard}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Mail className={styles.infoIcon} />
          <div>
            <h3>Email</h3>
            <p>araj30909@gmail.com</p>
          </div>
        </motion.div>
      </div>

      <div className={styles.bioSection}>
        <div className={styles.bioContent}>
          <h2 className={styles.bioTitle}>My Journey in AI</h2>
          <p className={styles.bioText}>
            I'm <strong className={styles.highlight}>Aditya Raj</strong>, an AI/ML Engineer and researcher at 
            <strong className={styles.highlight}> Lovely Professional University</strong>, graduating in 
            <strong className={styles.highlight}> 2027</strong>. My fascination with artificial intelligence began 
            when I built my first neural network during my sophomore year — a simple digit classifier that sparked 
            a deep curiosity about how machines learn and reason.
          </p>
          <p className={styles.bioText}>
            Since then, I've published <strong className={styles.highlight}>3 research papers</strong> in international 
            conferences, achieved <strong className={styles.highlight}>Kaggle Expert</strong> status, and contributed 
            to open-source ML frameworks. My research focuses on <strong className={styles.highlight}>computer vision</strong>, 
            <strong className={styles.highlight}> natural language processing</strong>, and 
            <strong className={styles.highlight}> model optimization</strong>. I'm driven by the vision of creating 
            intelligent systems that can solve real-world problems and improve people's lives.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Publications</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>ML Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Competitions</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Certifications</span>
            </div>
          </div>
        </div>
        <div className={styles.bioImage}>
          <img 
            src={Profile}
            alt="AI Research"
            className={styles.bioImageSrc}
          />
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <GraduationCap className={styles.sectionIcon} /> Education
        </h2>
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{edu.degree}</h3>
                <p className={styles.timelineSubtitle}>
                  {edu.institution} · {edu.year}
                </p>
                <p className={styles.timelineScore}>{edu.score}</p>
                <div className={styles.courses}>
                  {edu.courses.map(course => (
                    <span key={course} className={styles.courseTag}>{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Brain className={styles.sectionIcon} /> Technical Expertise
        </h2>
        <div className={styles.skillsGrid}>
          {Object.entries(categories).map(([key, { title, icon, description, color }]) => (
            <motion.div 
              key={key} 
              className={`${styles.categoryCard} ${styles[color]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIconWrapper}>
                  {icon}
                </div>
                <h3 className={styles.categoryTitle}>{title}</h3>
              </div>
              <p className={styles.categoryDescription}>{description}</p>
              <div className={styles.skillsList}>
                {skills[key]?.map((skill, idx) => (
                  <motion.div 
                    key={skill.name} 
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <div className={styles.skillBarContainer}>
                        <div 
                          className={styles.skillBarFill}
                          style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                        />
                      </div>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Microscope className={styles.sectionIcon} /> Research Focus Areas
        </h2>
        <div className={styles.researchGrid}>
          {researchHighlights.map((area, index) => (
            <motion.div 
              key={index} 
              className={styles.researchCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.researchIcon} style={{ backgroundColor: `${area.color}20`, color: area.color }}>
                {area.icon}
              </div>
              <h3>{area.name}</h3>
              <p className={styles.researchPapers}>{area.papers} Research Papers</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Trophy className={styles.sectionIcon} /> Conference Presentations
        </h2>
        <div className={styles.conferenceList}>
          {conferenceTalks.map((talk, index) => (
            <motion.div 
              key={index} 
              className={styles.conferenceItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className={styles.conferenceYear}>{talk.year}</div>
              <div className={styles.conferenceContent}>
                <h4>{talk.title}</h4>
                <p>{talk.venue}</p>
                <span className={styles.conferenceType}>{talk.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Target className={styles.sectionIcon} /> Learning Journey
        </h2>
        <div className={styles.learningGrid}>
          {learningGoals.map((goal, index) => (
            <motion.div 
              key={index} 
              className={styles.learningCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.learningIcon} style={{ color: goal.color }}>
                {goal.icon}
              </div>
              <h3>{goal.name}</h3>
              <p className={styles.learningResource}>{goal.resource}</p>
              <div className={styles.learningProgress}>
                <div className={styles.progressLabel}>
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${goal.progress}%`, backgroundColor: goal.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Heart className={styles.sectionIcon} /> Professional Skills
        </h2>
        <div className={styles.softSkillsGrid}>
          {skillBadges.map((skill, index) => (
            <motion.div 
              key={index} 
              className={styles.softSkillCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.softSkillIcon} style={{ backgroundColor: `${skill.color}20`, color: skill.color }}>
                {skill.icon}
              </div>
              <div className={styles.softSkillInfo}>
                <h4>{skill.name}</h4>
                <div className={styles.softSkillProgress}>
                  <div 
                    className={styles.softSkillFill}
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                  />
                </div>
                <span>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeaderWithButton}>
          <h2 className={styles.sectionTitle}>
            <Award className={styles.sectionIcon} /> Certifications
          </h2>
          <Link to="/certifications" className={styles.viewAllButton}>
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.certificationsGrid}>
          {certifications.slice(0, 3).map((cert, index) => (
            <motion.a 
              key={index} 
              href={cert.link} 
              className={styles.certCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className={styles.certIcon}>🎓</div>
              <div className={styles.certInfo}>
                <h4>{cert.name}</h4>
                <p>{cert.issuer} · {cert.year}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Heart className={styles.sectionIcon} /> Interests & Hobbies
        </h2>
        <div className={styles.interestsGrid}>
          {interests.map((interest, index) => (
            <motion.div 
              key={index} 
              className={styles.interestCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className={styles.interestEmoji}>{interest.emoji}</span>
              <span className={styles.interestName}>{interest.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;