import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Mail, User, ChevronDown, Briefcase, MessageSquare } from 'lucide-react';
import './index.css';

const projects = [
  {
    id: 1,
    title: 'DarkTech',
    description: 'A modern, sleek dark-themed technology showcase application with seamless transitions and a premium glassmorphism user interface.',
    tags: ['React', 'Framer Motion', 'CSS'],
    link: '#',
    github: '#',
    color: '#8b5cf6'
  },
  {
    id: 2,
    title: 'Vooda Auth System',
    description: 'A robust and secure authentication flow with beautiful form validation, dynamic state management, and real-time feedback.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
    github: '#',
    color: '#38bdf8'
  },
  {
    id: 3,
    title: 'AI Dashboard Pro',
    description: 'An intelligent analytics dashboard that visualizes complex datasets using cutting-edge chart libraries and responsive layouts.',
    tags: ['React', 'D3.js', 'Vite'],
    link: '#',
    github: '#',
    color: '#f43f5e'
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav style={styles.nav} className="glass">
        <div style={styles.navContent}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={styles.logo}
          >
            <Code2 color="#8b5cf6" size={28} />
            <span>Adam Redjimi</span>
          </motion.div>
          <div style={styles.navLinks}>
            {['Home', 'Projects', 'About'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                style={{
                  ...styles.navButton,
                  color: activeSection === item.toLowerCase() ? '#8b5cf6' : '#e2e8f0'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={styles.heroContent}
        >
          <motion.h2 variants={itemVariant} style={styles.greeting}>
            Hello, I am
          </motion.h2>
          <motion.h1 variants={itemVariant} style={styles.heroTitle}>
            Adam Redjimi
          </motion.h1>
          <motion.h3 variants={itemVariant} style={styles.heroSubtitle}>
            Building <span style={{ color: '#8b5cf6' }}>Digital Experiences</span> that Wow.
          </motion.h3>
          <motion.p variants={itemVariant} style={styles.heroText}>
            I specialize in crafting premium, high-performance web applications using modern technologies. Let's turn your ideas into reality.
          </motion.p>
          <motion.div variants={itemVariant} style={styles.heroActions}>
            <button onClick={() => scrollTo('projects')} style={styles.primaryButton}>
              View My Work
            </button>
            <button onClick={() => scrollTo('about')} style={styles.secondaryButton} className="glass">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={styles.scrollIndicator}
          onClick={() => scrollTo('projects')}
        >
          <ChevronDown size={32} color="#94a3b8" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={styles.sectionHeader}
        >
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={styles.titleUnderline}></div>
        </motion.div>

        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass"
              style={styles.projectCard}
            >
              <div style={{...styles.projectDecoration, background: `linear-gradient(135deg, ${project.color} 0%, transparent 100%)`}}></div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <div style={styles.tagsContainer}>
                {project.tags.map(tag => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <div style={styles.projectLinks}>
                <a href={project.github} style={styles.iconLink} title="View Source">
                  <Code2 size={20} />
                </a>
                <a href={project.link} style={styles.iconLink} title="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section, ...styles.aboutSection}}>
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={styles.sectionHeader}
        >
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.titleUnderline}></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={styles.contactCard}
        >
          <div style={styles.contactInfo}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Let's work together</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              I'm currently available for freelance work and new opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialButton} className="glass">
                <Code2 size={24} />
              </a>
              <a href="#" style={styles.socialButton} className="glass">
                <Briefcase size={24} />
              </a>
              <a href="#" style={styles.socialButton} className="glass">
                <MessageSquare size={24} />
              </a>
              <a href="mailto:contact@example.com" style={styles.socialButton} className="glass">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Adam Redjimi. Crafted with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '1200px',
    padding: '15px 30px',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  navContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.2rem',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  navButton: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    position: 'relative',
  },
  heroContent: {
    maxWidth: '800px',
    textAlign: 'center',
    marginTop: '60px',
  },
  greeting: {
    color: 'var(--accent-color)',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  heroTitle: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    margin: '0 0 10px 0',
    background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    color: '#e2e8f0',
    marginBottom: '30px',
    fontWeight: 500,
  },
  heroText: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
  },
  heroActions: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  primaryButton: {
    background: 'var(--accent-color)',
    color: '#fff',
    border: 'none',
    padding: '15px 35px',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: 600,
    transition: 'transform 0.2s ease, background 0.3s ease',
    boxShadow: '0 10px 20px -10px rgba(139, 92, 246, 0.5)',
  },
  secondaryButton: {
    color: '#fff',
    padding: '15px 35px',
    fontSize: '1.1rem',
    fontWeight: 600,
    transition: 'transform 0.2s ease, background 0.3s ease',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    cursor: 'pointer',
  },
  section: {
    minHeight: '100vh',
    padding: '100px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#fff',
    marginBottom: '15px',
  },
  titleUnderline: {
    height: '4px',
    width: '60px',
    background: 'var(--accent-color)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    padding: '40px 30px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  },
  projectDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '150px',
    opacity: 0.1,
    zIndex: -1,
  },
  projectTitle: {
    fontSize: '1.8rem',
    marginBottom: '15px',
    color: '#fff',
  },
  projectDesc: {
    color: 'var(--text-muted)',
    marginBottom: '25px',
    lineHeight: 1.7,
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '30px',
  },
  tag: {
    padding: '6px 12px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: '#cbd5e1',
  },
  projectLinks: {
    display: 'flex',
    gap: '15px',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
    transition: 'background 0.3s ease, transform 0.3s ease',
  },
  aboutSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactCard: {
    maxWidth: '700px',
    width: '100%',
    padding: '50px',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    transition: 'transform 0.3s ease, background 0.3s ease',
    color: 'var(--accent-color)'
  },
  footer: {
    textAlign: 'center',
    padding: '40px 20px',
    color: 'var(--text-muted)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    marginTop: '500px',
  }
};
