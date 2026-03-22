import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Star, Trophy, Code, Brain, Database, Sparkles, FileText, AlertCircle } from 'lucide-react';
import { certifications } from '../data/mockData';
import styles from './Certifications.module.css';

const Certifications = () => {
  const allCertifications = certifications;
  const [errorMessages, setErrorMessages] = useState({});

  // Function to open certificate file with better error handling
  const openCertificate = (filePath, certName) => {
    if (!filePath || filePath === '#') {
      alert(`Certificate file not available for: ${certName}`);
      return;
    }

    try {
      // Create a new window/tab
      const newWindow = window.open(filePath, '_blank');
      
      // If popup is blocked or file doesn't exist
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert('Please allow popups for this site to view certificates');
        return;
      }

      // Set a timeout to check if file loaded successfully
      setTimeout(() => {
        try {
          // This is a workaround to detect if file failed to load
          if (newWindow.document.title === '404 Not Found' || 
              newWindow.document.body.innerHTML.includes('404') ||
              newWindow.document.body.innerHTML.includes('Not Found')) {
            newWindow.close();
            alert(`Certificate file not found: ${filePath}\n\nPlease check if the file exists in the public/assets/ folder.`);
          }
        } catch (e) {
          // Cross-origin error, file might have loaded successfully
          console.log('File may have loaded successfully');
        }
      }, 500);
      
    } catch (error) {
      console.error('Error opening certificate:', error);
      alert(`Unable to open certificate: ${error.message}`);
    }
  };

  // Debug: Log all file paths to console
  React.useEffect(() => {
    console.log('Certification files:');
    allCertifications.forEach((cert, index) => {
      console.log(`${index + 1}. ${cert.name}: ${cert.file}`);
    });
  }, []);

  const categories = [
    { name: 'Deep Learning & GenAI', icon: <Brain />, color: '#6366f1', certifications: allCertifications.filter(c => c.name.includes('Deep') || c.name.includes('GenAI') || c.name.includes('ChatGPT') || c.name.includes('Generative')) },
    { name: 'Machine Learning & AI', icon: <Code />, color: '#8b5cf6', certifications: allCertifications.filter(c => c.name.includes('ML') || c.name.includes('Machine') || c.name.includes('AI')) },
    { name: 'Data Science & Programming', icon: <Database />, color: '#ec489a', certifications: allCertifications.filter(c => c.name.includes('Data') || c.name.includes('Python') || c.name.includes('R Programming') || c.name.includes('Web Design')) },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Award size={16} />
            <span>Professional Certifications</span>
          </motion.div>
          <h1 className={styles.title}>
            Verified <span className={styles.gradientText}>Credentials</span>
          </h1>
          <p className={styles.subtitle}>
            Industry-recognized certifications demonstrating expertise in AI, Machine Learning, 
            and Data Science technologies.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <motion.div 
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.statIcon}>
            <Award size={28} />
          </div>
          <div className={styles.statValue}>10+</div>
          <div className={styles.statLabel}>Certifications</div>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.statIcon}>
            <Trophy size={28} />
          </div>
          <div className={styles.statValue}>5</div>
          <div className={styles.statLabel}>Specializations</div>
        </motion.div>
        <motion.div 
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.statIcon}>
            <Star size={28} />
          </div>
          <div className={styles.statValue}>100%</div>
          <div className={styles.statLabel}>Verified</div>
        </motion.div>
      </div>

      {/* All Certifications Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Credentials</span>
          <h2 className={styles.sectionTitle}>
            All <span className={styles.gradientText}>Certifications</span>
          </h2>
        </div>

        <div className={styles.certGrid}>
          {allCertifications.map((cert, index) => (
            <motion.div
              key={index}
              className={styles.certCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.certIcon}>
                <Award size={32} />
              </div>
              <div className={styles.certInfo}>
                <h3>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <div className={styles.certMeta}>
                  <span className={styles.certYear}>
                    <Calendar size={14} />
                    {cert.year}
                  </span>
                  <span className={styles.certCredential}>
                    <CheckCircle size={14} />
                    {cert.credential || 'Verified'}
                  </span>
                </div>
                <button 
                  onClick={() => openCertificate(cert.file, cert.name)} 
                  className={styles.certLink}
                >
                  <FileText size={14} />
                  View Certificate
                  <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rest of your component remains the same */}
      {/* Categories Section, Skills Badges Section, CTA Section */}
      
      {/* Categories Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>By Category</span>
          <h2 className={styles.sectionTitle}>
            Certification <span className={styles.gradientText}>Domains</span>
          </h2>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className={styles.categoryCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.categoryIcon} style={{ background: `${category.color}20`, color: category.color }}>
                {category.icon}
              </div>
              <h3>{category.name}</h3>
              <div className={styles.categoryCerts}>
                {category.certifications.slice(0, 5).map((cert, idx) => (
                  <div key={idx} className={styles.categoryCert}>
                    <CheckCircle size={14} />
                    <span>{cert.name.length > 40 ? cert.name.slice(0, 40) + '...' : cert.name}</span>
                  </div>
                ))}
                {category.certifications.length > 5 && (
                  <div className={styles.categoryCertMore}>
                    +{category.certifications.length - 5} more certifications
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Badges Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Skills</span>
          <h2 className={styles.sectionTitle}>
            Verified <span className={styles.gradientText}>Competencies</span>
          </h2>
        </div>

        <div className={styles.skillsBadges}>
          <motion.div 
            className={styles.badgeGroup}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.badgeItem}>Deep Learning</span>
            <span className={styles.badgeItem}>Computer Vision</span>
            <span className={styles.badgeItem}>Natural Language Processing</span>
            <span className={styles.badgeItem}>TensorFlow</span>
            <span className={styles.badgeItem}>PyTorch</span>
            <span className={styles.badgeItem}>MLOps</span>
            <span className={styles.badgeItem}>Data Science</span>
            <span className={styles.badgeItem}>Python</span>
            <span className={styles.badgeItem}>SQL</span>
            <span className={styles.badgeItem}>Cloud Computing</span>
            <span className={styles.badgeItem}>Model Deployment</span>
            <span className={styles.badgeItem}>Research</span>
            <span className={styles.badgeItem}>Prompt Engineering</span>
            <span className={styles.badgeItem}>Generative AI</span>
            <span className={styles.badgeItem}>R Programming</span>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.div 
        className={styles.ctaSection}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <Sparkles className={styles.ctaIcon} />
          <h2>Always Learning</h2>
          <p>
            I'm continuously expanding my knowledge and pursuing new certifications 
            to stay at the forefront of AI/ML technology.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Connect with Me
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;