import React, { createContext, useState, useContext } from 'react';

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      skills: 'Compétences',
      projects: 'Projets',
      education: 'Formation',
      experience: 'Expérience',
      contact: 'Contact',
    },
    hero: {
      cyber: 'Cybersécurité',
      ai: 'Intelligence Artificielle',
      tutor: 'tuteur pour les étudiants de première année',
    },
    about: {
      title: 'À Propos',
      p1: "Actuellement en formation d'Ingénierie Informatique et Réseaux, je me concentre sur les enjeux majeurs de la <span class='text-blue-400'>Cybersécurité</span> et de l'<span class='text-blue-400'>Intelligence Artificielle</span>. Ma démarche est guidée par une curiosité technologique constante, me poussant à explorer de nouvelles solutions pour répondre aux défis numériques actuels.",
      p2: "En tant que <span class='text-blue-400'>tuteur pour les étudiants de première année</span>, je m'engage à faciliter leur intégration et à renforcer leurs bases techniques. Cette expérience m'a permis de développer d'excellentes capacités de communication et une pédagogie adaptée pour vulgariser des concepts complexes.",
      detailsTitle: 'Coordonnées',
      location: 'Maroc',
    },
    skills: {
      title: 'Compétences Techniques',
      categories: {
        languages: 'Langages',
        web: 'Web & Frameworks',
        cyber: 'Cyber & Spécialités',
        network: 'Réseaux & Administration',
        tools: 'Outils & Hardware',
        design: 'Conception & Modélisation',
      },
      items: {
        malware: 'Analyse de malwares',
        ai: 'Intelligence Artificielle',
        linux_admin: 'Administration Linux',
        firewall: 'VPN/Pare-feu'
      }
    },
    projects: {
      title: 'Projets Phares',
      code: 'Code',
      demo: 'Démo',
      items: {
        smarttender: 'Solution d\'automatisation de consolidation des prix pour réduire les erreurs humaines dans le BTP.',
        atlasguard: 'Plateforme de surveillance de la faune en temps réel avec gestion de drones et coordination des rangers.',
        uniride: 'Conception Full-Stack d\'une plateforme complète de partage de trajets.',
        exchange: 'Application web pour publier et trouver des annonces d\'échange de campus. Les utilisateurs peuvent publier leur campus actuel, le campus souhaité et un contact.',
        twitter: 'Collaboration sur le développement d\'un clone de réseau social avec fonctionnalités complètes.',
        chatbot: 'Développement d\'un chatbot interactif avec traitement du langage naturel et intégration d\'API pour répondre aux questions des utilisateurs.',
      }
    },
    education: {
      title: 'Formation & Certifications',
      formation: 'Formation',
      certifications: 'Certifications',
      degree: 'Cursus Ingénieur en Informatique et Réseaux',
      school: 'EMSI / École d\'Ingénierie',
      keyModules: 'Modules clés :',
      modules: [
        'POO (C++ / Java / Java Swing)',
        'Cybersécurité & Réseaux TCP/IP',
        'Intelligence Artificielle',
        'Algorithmique & Structures de données',
        'SQL / PL-SQL / NoSQL',
        'SSMS & Administration BD',
        'Linux (Administration & Shell)',
        'Développement Full-Stack (Laravel, React)'
      ]
    },
    experience: {
      title: 'Expérience & Engagement',
      professional: 'Expérience Professionnelle',
      extra: 'Activités Parascolaires',
      intern: 'Stagiaire (Stage d\'immersion)',
      onicl: 'Office National Interprofessionnel des Céréales et des Légumineuses Maroc',
      duration: 'Durée : 1 mois',
      nexus: 'Membre actif du club Nexus IA EMSI',
      nexusDesc: 'Participation à des débats, animation de workshops techniques IA',
      tutor: 'Tuteur Étudiant EMSI',
      tutorDesc: 'Accompagnement académique des étudiants de 1ère année',
    },
    contact: {
      title: 'Contact',
      stayInTouch: 'Restons en contact',
      description: "Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter. Je serai ravi de discuter avec vous !",
      location: 'Localisation',
      sendMessage: 'Envoyez un message',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      placeholderName: 'Votre nom',
      placeholderEmail: 'votre.email@example.com',
      placeholderMessage: 'Votre message...',
      sending: 'Envoi en cours...',
      sendButton: 'Envoyer le message',
      success: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
      error: 'Une erreur est survenue. Cliquez ici pour envoyer un email directement : ',
      sendEmailNow: 'Envoyer un email maintenant',
      fallback: "Votre client email s'ouvre. Si ce n'est pas le cas, envoyez un email à yousfiziadpro@gmail.com"
    },
    footer: {
      rights: 'Tous droits réservés.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      cyber: 'Cybersecurity',
      ai: 'Artificial Intelligence',
      tutor: 'tutor for first-year students',
    },
    about: {
      title: 'About Me',
      p1: "Currently in Computer Engineering and Networks training, I focus on the major challenges of <span class='text-blue-400'>Cybersecurity</span> and <span class='text-blue-400'>Artificial Intelligence</span>. My approach is guided by a constant technological curiosity, pushing me to explore new solutions for today's digital challenges.",
      p2: "As a <span class='text-blue-400'>tutor for first-year students</span>, I am committed to facilitating their integration and strengthening their technical foundations. This experience has allowed me to develop excellent communication skills and an adapted pedagogy to simplify complex concepts.",
      detailsTitle: 'Contact Details',
      location: 'Morocco',
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        languages: 'Languages',
        web: 'Web & Frameworks',
        cyber: 'Cyber & Specialities',
        network: 'Networks & Administration',
        tools: 'Tools & Hardware',
        design: 'Design & Modeling',
      },
      items: {
        malware: 'Malware Analysis',
        ai: 'Artificial Intelligence',
        linux_admin: 'Linux Administration',
        firewall: 'VPN/Firewall'
      }
    },
    projects: {
      title: 'Featured Projects',
      code: 'Code',
      demo: 'Demo',
      items: {
        smarttender: 'Price consolidation automation solution to reduce human error in the construction industry.',
        atlasguard: 'Real-time wildlife monitoring platform with drone management and ranger coordination.',
        uniride: 'Full-Stack design of a complete ride-sharing platform.',
        exchange: 'Web application to post and find campus exchange ads. Users can post their current campus, desired campus, and contact info.',
        twitter: 'Collaboration on developing a social network clone with full features.',
        chatbot: 'Development of an interactive chatbot with natural language processing and API integration to answer user questions.',
      }
    },
    education: {
      title: 'Education & Certifications',
      formation: 'Education',
      certifications: 'Certifications',
      degree: 'Computer and Network Engineering Program',
      school: 'EMSI / Engineering School',
      keyModules: 'Key Modules:',
      modules: [
        'OOP (C++ / Java / Java Swing)',
        'Cybersecurity & TCP/IP Networks',
        'Artificial Intelligence',
        'Algorithms & Data Structures',
        'SQL / PL-SQL / NoSQL',
        'SSMS & DB Administration',
        'Linux (Administration & Shell)',
        'Full-Stack Development (Laravel, React)'
      ]
    },
    experience: {
      title: 'Experience & Engagement',
      professional: 'Professional Experience',
      extra: 'Extracurricular Activities',
      intern: 'Intern (Immersion Internship)',
      onicl: 'National Interprofessional Office of Cereals and Legumes Morocco',
      duration: 'Duration: 1 month',
      nexus: 'Active member of Nexus AI EMSI club',
      nexusDesc: 'Participation in debates, facilitation of technical AI workshops',
      tutor: 'EMSI Student Tutor',
      tutorDesc: 'Academic support for 1st-year students',
    },
    contact: {
      title: 'Contact',
      stayInTouch: 'Stay in touch',
      description: "Have a project in mind or a question? Feel free to contact me. I'll be happy to discuss with you!",
      location: 'Location',
      sendMessage: 'Send a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholderName: 'Your name',
      placeholderEmail: 'your.email@example.com',
      placeholderMessage: 'Your message...',
      sending: 'Sending...',
      sendButton: 'Send message',
      success: 'Message sent successfully! I will get back to you as soon as possible.',
      error: 'An error occurred. Click here to send an email directly: ',
      sendEmailNow: 'Send email now',
      fallback: "Your email client is opening. If not, send an email to yousfiziadpro@gmail.com"
    },
    footer: {
      rights: 'All rights reserved.',
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
