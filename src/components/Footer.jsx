import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, Brain } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, url: 'https://github.com/adityaraj70500', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/aditya-raj-215524297/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/adityaraj', label: 'Twitter' },
    { icon: Mail, url: 'mailto:araj30909@gmail.com', label: 'Email' }
  ];

  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.brand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.logo}>
              <Brain className={styles.logoIcon} />
              <span>Aditya Raj</span>
            </div>
            <p className={styles.tagline}>
              AI & Machine Learning Engineer
            </p>
            <p className={styles.description}>
              Building intelligent systems that solve real-world problems using cutting-edge AI and ML technologies.
              Passionate about creating impactful solutions through machine learning.
            </p>
          </motion.div>

          <motion.div 
            className={styles.links}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.linksTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className={styles.social}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.socialTitle}>Connect With Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Aditya Raj. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;