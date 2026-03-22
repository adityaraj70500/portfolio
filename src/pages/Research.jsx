import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar, Users, Award, BookOpen, Microscope, TrendingUp, Quote, Star, ChevronRight } from 'lucide-react';
import { researchPapers } from '../data/mockData';
import styles from './Research.module.css';

const Research = () => {
  const researchInterests = [
    { title: 'Computer Vision', icon: <Microscope />, description: 'Medical imaging, object detection, video analysis' },
    { title: 'Natural Language Processing', icon: <BookOpen />, description: 'Transformers, sentiment analysis, language models' },
    { title: 'Optimization Algorithms', icon: <TrendingUp />, description: 'Hyperparameter tuning, neural architecture search' },
    { title: 'Generative AI', icon: <Quote />, description: 'Diffusion models, GANs, creative AI' }
  ];

  const citations = [
    { paper: 'EfficientNet-Based Transfer Learning', citations: 8, year: '2024' },
    { paper: 'Transformer Models for Sentiment Analysis', citations: 5, year: '2024' },
    { paper: 'Genetic Algorithm Hyperparameter Optimization', citations: 12, year: '2023' }
  ];

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Microscope className={styles.headerIcon} />
        <h1 className={styles.title}>Research & Publications</h1>
        <p className={styles.subtitle}>
          Exploring the frontiers of artificial intelligence through rigorous research and collaborative innovation
        </p>
      </motion.div>

      <div className={styles.statsSection}>
        <motion.div 
          className={styles.statCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.statValue}>3</div>
          <div className={styles.statLabel}>Published Papers</div>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.statValue}>25+</div>
          <div className={styles.statLabel}>Total Citations</div>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.statValue}>4</div>
          <div className={styles.statLabel}>Research Areas</div>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.statValue}>3</div>
          <div className={styles.statLabel}>Conferences</div>
        </motion.div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FileText className={styles.sectionIcon} />
          Recent Publications
        </h2>
        <div className={styles.papersGrid}>
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              className={styles.paperCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.paperHeader}>
                <div className={styles.paperIcon}>📄</div>
                <div>
                  <h3 className={styles.paperTitle}>{paper.title}</h3>
                  <p className={styles.paperConference}>{paper.conference}</p>
                </div>
              </div>
              <p className={styles.paperAbstract}>{paper.abstract}</p>
              <div className={styles.paperMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={14} />
                  <span>{paper.year}</span>
                </div>
                <div className={styles.metaItem}>
                  <Award size={14} />
                  <span>{paper.citations} Citations</span>
                </div>
                <a href={paper.link} className={styles.paperLink}>
                  Read Paper <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Microscope className={styles.sectionIcon} />
          Research Interests
        </h2>
        <div className={styles.interestsGrid}>
          {researchInterests.map((interest, index) => (
            <motion.div
              key={index}
              className={styles.interestCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.interestIcon}>{interest.icon}</div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <TrendingUp className={styles.sectionIcon} />
          Citation Impact
        </h2>
        <div className={styles.citationsList}>
          {citations.map((item, index) => (
            <motion.div
              key={index}
              className={styles.citationItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.citationPaper}>{item.paper}</div>
              <div className={styles.citationStats}>
                <span className={styles.citationCount}>{item.citations} citations</span>
                <span className={styles.citationYear}>{item.year}</span>
              </div>
              <div className={styles.citationBar}>
                <div 
                  className={styles.citationBarFill} 
                  style={{ width: `${(item.citations / 12) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Users className={styles.sectionIcon} />
          Collaborations & Mentors
        </h2>
        <div className={styles.collaborationsGrid}>
          <div className={styles.collabCard}>
            <div className={styles.collabAvatar}>👨‍🏫</div>
            <div>
              <h4>Dr. Anjali Sharma</h4>
              <p>Professor, AI Research Lab</p>
              <span className={styles.collabRole}>Research Advisor</span>
            </div>
          </div>
          <div className={styles.collabCard}>
            <div className={styles.collabAvatar}>👩‍🔬</div>
            <div>
              <h4>Dr. Vikram Mehta</h4>
              <p>ML Engineer, TechCorp</p>
              <span className={styles.collabRole}>Industry Mentor</span>
            </div>
          </div>
          <div className={styles.collabCard}>
            <div className={styles.collabAvatar}>🧑‍💻</div>
            <div>
              <h4>Neha Gupta</h4>
              <p>Research Assistant</p>
              <span className={styles.collabRole}>Co-author</span>
            </div>
          </div>
        </div>
      </section>

      <motion.div 
        className={styles.ctaSection}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <Star className={styles.ctaIcon} />
          <h2>Open for Collaboration</h2>
          <p>
            I'm actively looking for research collaborations and academic opportunities.
            If you're working on interesting problems in AI/ML, let's connect!
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch <ChevronRight size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Research;