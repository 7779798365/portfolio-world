// Mock data for Muhammad Moosa's Portfolio

export const portfolioData = {
  hero: {
    name: "Muhammad Moosa",
    title: "Web Developer & AI Enthusiast",
    subtitle: "Specialized in Node.js, REST APIs, and modern web applications.",
    location: "Karachi, Pakistan"
  },
  
  about: {
    description: "Motivated and detail-oriented Web Developer & AI Enthusiast with strong expertise in Node.js, Express, and MongoDB. Currently enrolled in Certified Agentic AI & Robotics Engineering (PIAIC), passionate about building scalable backend systems and real-world applications.",
    location: "Karachi, Pakistan",
    focus: ["Backend Development", "APIs", "AI", "Scalability"]
  },
  
  skills: {
    backend: ["Node.js", "Express.js", "REST APIs"],
    frontend: ["HTML", "CSS", "JavaScript (ES6+)", "React.js (Beginner)"],
    databases: ["MongoDB", "MySQL (Basic)", "Firebase (Basic)"],
    aiTech: ["Agentic AI", "Prompt Engineering", "Robotics Fundamentals"],
    tools: ["Git & GitHub", "VS Code", "Postman", "Figma", "Vercel", "Netlify"]
  },
  
  projects: [
    {
      id: 1,
      title: "QuickCart",
      subtitle: "E-Commerce Web Application",
      description: "A modern e-commerce web application providing smooth product browsing and cart functionality with a clean, responsive UI.",
      features: [
        "Product listing",
        "Cart functionality",
        "Responsive design",
        "Production-ready deployment"
      ],
      techStack: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://quick-cart-ten-lake.vercel.app/",
      githubUrl: "https://github.com/7779798365/QuickCart.git"
    },
    {
      id: 2,
      title: "Task Management System",
      subtitle: "Backend-Focused Task Manager",
      description: "A secure backend-focused task management system emphasizing REST API architecture.",
      features: [
        "User authentication & authorization",
        "Full CRUD operations",
        "REST APIs",
        "Clean HTML/CSS UI"
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
      liveUrl: null,
      githubUrl: null
    }
  ],
  
  education: [
    {
      id: 1,
      institution: "PIAIC",
      degree: "Certified Agentic AI & Robotics Engineering",
      status: "Ongoing",
      year: "2024 - Present"
    },
    {
      id: 2,
      institution: "GIAIC",
      degree: "Generative AI & Cloud Computing",
      status: "Ongoing",
      year: "2024 - Present"
    },
    {
      id: 3,
      institution: "Saylani Mass IT Training (SMIT)",
      degree: "Web & Mobile App Development",
      status: "Ongoing",
      year: "2024 - Present"
    },
    {
      id: 4,
      institution: "Hamdard Intermediate College",
      degree: "Pre-Engineering",
      status: "Completed",
      year: "Completed"
    }
  ],
  
  contact: {
    email: "marketing.moosa10@gmail.com",
    phone: "0333-2172037",
    location: "Karachi, Pakistan",
    cta: "Let's build something impactful together."
  },
  
  social: {
    github: "https://github.com/7779798365",
    linkedin: "#",
    twitter: "#"
  }
};

// Mock contact form submission
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.warn("Mock form submission:", formData);
      resolve({ success: true, message: "Message sent successfully! (Mock)" });
    }, 1000);
  });
};