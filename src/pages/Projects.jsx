import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code, Database, Brain, Cpu, Activity, BarChart, Award, CheckCircle, ArrowRight, Sparkles, Target, Zap } from 'lucide-react';
import { mlProjects } from '../data/mockData';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>ML & AI Projects</h1>
        <p className={styles.subtitle}>
          A showcase of my machine learning and artificial intelligence projects, featuring research implementations and practical applications
        </p>
      </motion.div>

      <div className={styles.projectsList}>
        {mlProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.projectWrapper}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.projectStatus}>
                    <span className={`${styles.statusBadge} ${styles.statusFeatured}`}>
                      {project.featured ? 'Featured Project' : 'ML Project'}
                    </span>
                  </div>
                </div>
                <div className={styles.projectTitleSection}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{project.dataset || 'Custom Dataset'}</span>
                    </div>
                    <div className={styles.metrics}>
                      <div className={styles.metricBadge}>
                        <Target size={14} />
                        <span>{project.accuracy || project.fps}</span>
                      </div>
                    </div>
                    <div className={styles.projectLinks}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                        <Github size={18} />
                        Repository
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.liveButton}`}>
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <Brain size={18} />
                    Overview
                  </h3>
                  <p className={styles.overviewText}>{project.longDescription}</p>
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <Code size={18} />
                    Technologies Used
                  </h3>
                  <div className={styles.techStack}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={styles.techTag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <Sparkles size={18} />
                    Key Features
                  </h3>
                  <ul className={styles.featuresList}>
                    <li>
                      <CheckCircle size={16} />
                      <span>State-of-the-art model architecture achieving {project.accuracy || project.fps} performance</span>
                    </li>
                    <li>
                      <CheckCircle size={16} />
                      <span>Comprehensive data preprocessing and augmentation pipeline</span>
                    </li>
                    <li>
                      <CheckCircle size={16} />
                      <span>Model interpretability using SHAP/Grad-CAM techniques</span>
                    </li>
                    <li>
                      <CheckCircle size={16} />
                      <span>Optimized inference for production deployment</span>
                    </li>
                  </ul>
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    <Zap size={18} />
                    Results & Impact
                  </h3>
                  <div className={styles.resultsGrid}>
                    <div className={styles.resultCard}>
                      <div className={styles.resultValue}>{project.accuracy || project.fps}</div>
                      <div className={styles.resultLabel}>Model Performance</div>
                    </div>
                    <div className={styles.resultCard}>
                      <div className={styles.resultValue}>98%</div>
                      <div className={styles.resultLabel}>Inference Speed</div>
                    </div>
                    <div className={styles.resultCard}>
                      <div className={styles.resultValue}>10x</div>
                      <div className={styles.resultLabel}>Faster Training</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;