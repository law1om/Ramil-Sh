import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Language School Platform",
            description: "An online platform for a language school with user registration, roles (student, teacher, administrator), courses, reviews, and a class booking system. Includes admin functionality and personal dashboards.",
            shortDescription: "Language school platform",
            technologies: ["React", "Node.js", "Express", "PostgreSQL"],
            liveUrl: "https://language-school-1-dsa7.onrender.com",
            githubUrl: "https://github.com/law1om/language-school",
        },
        {
            id: 2,
            title: "Testing Platform",
            description: "An interactive platform for creating, conducting, and grading tests. Supports multiple question types, automatic answer validation, result tracking, and an admin panel.",
            shortDescription: "Knowledge testing platform",
            technologies: ["Python", "Django", "PostgreSQL"],
            liveUrl: "https://testing-platform-demo.com",
            githubUrl: "https://github.com/law1om/testing-platform",
        },
        {
            id: 3,
            title: "Budget Tracker",
            description: "A full-featured budget tracking application with user registration, income/expense management, category management, transaction history, and analytics. Includes cloud storage for data synchronization across devices.",
            shortDescription: "Mobile budget management app",
            technologies: ["Flutter", "Spring Boot", "PostgreSQL", "JWT", "REST API"],
            liveUrl: "#",
            githubUrl: "https://github.com/law1om/budget-tracker",
        },
        {
            id: 4,
            title: "Happy Tails Platform",
            description: "A full-stack mobile platform for managing animal shelters and pet adoption. Designed for social impact, featuring comprehensive shelter management capabilities.",
            shortDescription: "Animal shelter management app",
            technologies: ["Flutter", "Dart", "Java", "Spring Boot", "PostgreSQL", "JWT"],
            liveUrl: "#",
            githubUrl: "https://github.com/law1om/happy-tails-platform",
        },
        {
            id: 5,
            title: "Bank Analytics Platform",
            description: "An interactive dashboard for monitoring strategic bank goals, analyzing division performance, tracking task progress, and generating analytical reports. Features Excel import functionality for actual plans.",
            shortDescription: "Banking KPI dashboard",
            technologies: ["React", "Spring Boot", "PostgreSQL", "Recharts", "Apache POI"],
            liveUrl: "#",
            githubUrl: "https://github.com/law1om/analytics_platform",
        }
    ];
    

    const toggleExpanded = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    const sectionVariants = (delay) => ({
        initial: { opacity: 0, y: -20, filter: "blur(10px)"},
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.3, delay }
    });

    return (
        <div className="container" id="projects">
            <motion.div {...sectionVariants(0)}>
                <div className="projects-header">
                    <h1 className="projects-title">My Projects</h1>
                    <p className="projects-subtitle">Portfolio of my work and projects</p>
                </div>
            </motion.div>

            <motion.div {...sectionVariants(0.1)}>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onClick={() => toggleExpanded(project.id)}
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className={`project-status ${project.statusClass}`}>{project.status}</div>
                                </div>
                                <p className="project-description">
                                    {expandedProject === project.id 
                                        ? project.description 
                                        : project.shortDescription
                                    }
                                </p>
                                
                                {expandedProject === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="project-details"
                                    >
                                        <div className="project-technologies">
                                            <h4>Technology:</h4>
                                            <div className="tech-tags">
                                                {project.technologies.map((tech, idx) => (
                                                    <span key={idx} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="project-links">
                                            <a 
                                                href={project.liveUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link live-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                                </svg>
                                                view the project
                                            </a>
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link github-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                                GitHub
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
