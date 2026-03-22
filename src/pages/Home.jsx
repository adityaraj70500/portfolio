/* Home.jsx - Complete Redesign */
import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, Github, Linkedin, Twitter, Mail, 
  Sparkles, Zap, Award, BookOpen, Code, 
  TrendingUp, Users, Target, Trophy, Medal,
  ChevronRight, Star, Flame, Clock, Activity,
  Cpu, Brain, Database, Cloud, Server, Shield
} from 'lucide-react';
import { mlProjects, testimonials, contactInfo, skills, certifications } from '../data/mockData';
import { ThemeContext } from '../App';
import styles from './Home.module.css';

const Home = () => {
  const containerRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { value: '3+', label: 'Research Papers', icon: <BookOpen />, color: '#6366f1' },
    { value: '2', label: 'ML Projects', icon: <Brain />, color: '#8b5cf6' },
    { value: '200+', label: 'Problems Solved', icon: <Code />, color: '#ec489a' },
    { value: '10+', label: 'Certifications', icon: <Award />, color: '#f59e0b' }
  ];

  const featuredProjects = mlProjects.filter(p => p.featured).slice(0, 3);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Animated Background */}
      <div className={styles.bgGradient}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className={styles.hero}
        style={{ y, opacity }}
      >
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroLeft}
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles size={14} />
              <span>AI/ML Engineer & Researcher</span>
            </motion.div>

            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building Intelligent
              <span className={styles.gradientText}> AI Solutions</span>
              <br />
              That Make an Impact
            </motion.h1>

            <motion.p 
              className={styles.bio}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionate ML Engineer with expertise in Computer Vision, NLP, and Deep Learning.
              Published researcher and Kaggle Expert dedicated to solving real-world problems with AI.
            </motion.p>

            <motion.div 
              className={styles.ctaGroup}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/projects" className={styles.btnPrimary}>
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className={styles.btnSecondary}>
                Get in Touch
              </Link>
            </motion.div>

            <motion.div 
              className={styles.statsRow}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statIcon} style={{ background: `${stat.color}20`, color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a href={contactInfo.social.github} className={styles.socialIcon}>
                <Github size={20} />
              </a>
              <a href={contactInfo.social.linkedin} className={styles.socialIcon}>
                <Linkedin size={20} />
              </a>
              <a href={contactInfo.social.twitter} className={styles.socialIcon}>
                <Twitter size={20} />
              </a>
              <a href={contactInfo.social.kaggle} className={styles.socialIcon}>
                <TrendingUp size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.heroRight}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.codeTitle}>neural_network.py</span>
              </div>
              <div className={styles.codeContent}>
                <pre>
                  <code>
{`class AIMLEngineer:
    def __init__(self):
        self.name = "Aditya Raj"
        self.role = "AI/ML Engineer"
        self.skills = [
            "Deep Learning",
            "Computer Vision",
            "NLP",
            "MLOps"
        ]
    
    def build(self):
        while True:
            self.learn()
            self.create()
            self.innovate()
            return "Impactful AI Solutions"`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <motion.span 
            className={styles.sectionBadge}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.span>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest <span className={styles.gradientText}>Projects</span>
          </motion.h2>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} /> Code
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link to="/projects" className={styles.projectLink}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link to="/projects" className={styles.viewAllLink}>
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techSection}>
        <div className={styles.sectionHeader}>
          <motion.span 
            className={styles.sectionBadge}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.span>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tools & <span className={styles.gradientText}>Technologies</span>
          </motion.h2>
        </div>

        <div className={styles.techGrid}>
          {skills.ml.slice(0, 6).map((tech, index) => (
            <motion.div
              key={tech.name}
              className={styles.techCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <span className={styles.techIcon}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
              <div className={styles.techBar}>
                <div className={styles.techFill} style={{ width: `${tech.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <motion.span 
            className={styles.sectionBadge}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What People <span className={styles.gradientText}>Say</span>
          </motion.h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.testimonialAvatar}>
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.position}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's collaborate on your next AI/ML project. I'm always open to discussing new opportunities.</p>
            <Link to="/contact" className={styles.ctaButton}>
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;