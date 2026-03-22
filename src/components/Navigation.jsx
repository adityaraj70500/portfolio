import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, FolderGit2, Award, Mail, Menu, X, 
  Moon, Sun, Download, Brain
} from 'lucide-react';
import { ThemeContext } from '../App';
import styles from './Navigation.module.css';
import Cv from '../assets/cv.pdf';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: FolderGit2 },
    { path: '/certifications', label: 'Certifications', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail }
  ];

  const handleDownloadCV = () => {
    // Place your CV file in the public folder as 'cv.pdf'
    // Then use this path:
    const cvPath = Cv;
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'aditya_raj_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav 
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        <div className={styles.container}>
          <NavLink to="/" className={styles.logo}>
            <motion.div 
              className={styles.logoMark}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className={styles.logoIcon} />
              <div className={styles.logoGlow} />
            </motion.div>
            <motion.div 
              className={styles.logoText}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={styles.logoName}>Aditya</span>
              <span className={styles.logoHighlight}>Raj</span>
            </motion.div>
          </NavLink>

          <div className={styles.desktopMenu}>
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                <motion.div
                  className={styles.navLinkContent}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={styles.icon} />
                  <span>{label}</span>
                  {location.pathname === path && (
                    <motion.div 
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </NavLink>
            ))}
            
            <div className={styles.divider} />
            
            <motion.button
              className={styles.themeToggle}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              className={styles.downloadBtn}
              onClick={handleDownloadCV}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download CV"
            >
              <Download size={16} />
              <span>CV</span>
            </motion.button>
          </div>

          <div className={styles.mobileActions}>
            <motion.button
              className={styles.mobileThemeToggle}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button 
              className={styles.mobileMenuBtn}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className={styles.mobileMenu}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className={styles.mobileMenuInner}>
                  {navItems.map(({ path, label, icon: Icon }, index) => (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={path}
                        className={({ isActive }) => 
                          `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className={styles.mobileIcon} />
                        <span>{label}</span>
                      </NavLink>
                    </motion.div>
                  ))}
                  
                  <div className={styles.mobileDivider} />
                  
                  <motion.button
                    className={styles.mobileDownloadBtn}
                    onClick={handleDownloadCV}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Download CV"
                  >
                    <Download size={18} />
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;