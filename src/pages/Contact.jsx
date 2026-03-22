import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, TrendingUp, MessageSquare, Brain, Sparkles } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'araj30909@gmail.com',
      link: 'mailto:araj30909@gmail.com'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+91 70500 13162',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Punjab, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github />, url: 'https://github.com/adityaraj70500', label: 'GitHub' },
    { icon: <Linkedin />, url: 'https://www.linkedin.com/in/aditya-raj-215524297/', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/adityaraj', label: 'Twitter' },
    { icon: <TrendingUp />, url: 'https://kaggle.com/adityaraj', label: 'Kaggle' }
  ];

  const researchTopics = [
    'Computer Vision', 'Natural Language Processing', 'Generative AI', 'MLOps'
  ];

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Brain className={styles.headerIcon} />
        <h1 className={styles.title}>Let's Collaborate</h1>
        <p className={styles.subtitle}>
          Have a research idea, project collaboration, or just want to discuss AI/ML? I'd love to hear from you.
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div 
          className={styles.infoSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.infoTitle}>Get in Touch</h2>
          <p className={styles.infoText}>
            I'm actively looking for research collaborations, internship opportunities, 
            and AI/ML projects. Feel free to reach out!
          </p>

          <div className={styles.contactList}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className={styles.contactItem}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.contactIcon}>{info.icon}</div>
                <div>
                  <h3>{info.label}</h3>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Connect on Social</h3>
            <div className={styles.socialGrid}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  whileHover={{ y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.researchSection}>
            <h3 className={styles.researchTitle}>
              <Sparkles size={16} />
              Research Interests
            </h3>
            <div className={styles.researchTags}>
              {researchTopics.map((topic, index) => (
                <span key={index} className={styles.researchTag}>{topic}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.formSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Aditya Raj"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="aditya@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Research Collaboration / Project Inquiry"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your research idea, project, or collaboration opportunity..."
                rows="5"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;