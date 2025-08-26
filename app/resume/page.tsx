'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// --- DATA CONSTANTS ---
// Update your information here easily
const personalInfo = {
  name: 'Mirza Safiulla Baig',
  email: 'safiullabaig786@gmail.com',
  phone: '+91-8328091274',
  location: 'Hyderabad, India',
  linkedin: 'linkedin.com/in/safibaig03',
  github: 'github.com/safibaig03',
};

const educationHistory = [
  {
    degree: 'B.Tech - Computer Science and Engineering (AI & ML)',
    institution: 'Keshav Memorial Institute of Technology',
    period: '2021 - 2025',
    grade: 'CGPA: 8.3',
    location: 'Hyderabad, India',
  },
  {
    degree: 'Intermediate (XII)',
    institution: 'M S Junior College',
    period: '2019 - 2021',
    grade: '95.6%',
    location: 'Hyderabad, India',
  },
  {
    degree: 'X (SSC)',
    institution: 'Sri Chaitanya',
    period: '2018 - 2019',
    grade: 'CGPA: 10',
    location: 'Hyderabad, India',
  },
];

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  web: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Git', 'Docker'],
};

const projects = [
  {
    title: 'Leafyze - AI-Powered Plant Disease Detection',
    description: [
      'Built a Convolutional Neural Network (CNN) in TensorFlow to classify tomato leaves as healthy, early blight, or late blight.',
      'Deployed an interactive web app with Streamlit that allows real-time diagnosis from image uploads.',
      'Created an image preprocessing pipeline with PIL for data augmentation and improved model accuracy.',
    ],
    technologies: 'Python, TensorFlow, Keras, Streamlit, PIL',
  },
  {
    title: 'BookIt - Bookstore Application',
    description: [
      'Developed a MERN-based bookstore with authentication, user profiles, and book management.',
      'Designed RESTful APIs for handling user data and book operations efficiently.',
      'Built a responsive frontend with React functional components and hooks.',
    ],
    technologies: 'MongoDB, Express.js, React.js, Node.js',
  },
  {
    title: 'JobJet - Job Board Platform',
    description: [
      'Built a full-stack job board platform with multi-role authentication (job seekers, companies, and admin).',
      'Developed company profiles, job postings, and application workflows with resume uploads.',
      'Implemented secure authentication with Passport.js and session management.',
      'Created responsive dashboards with filtering, search, and dark/light UI modes.',
      'Integrated Express.js backend with Drizzle ORM and PostgreSQL to support CRUD APIs.',
    ],
    technologies: 'React, Tailwind CSS, Shadcn UI, React Query, Express.js, Drizzle ORM, PostgreSQL, Passport.js',
  },
  {
    title: 'CommentAizer - YouTube Comment Summarizer',
    description: [
      'Developed a web app using Google\'s Gemini API to generate concise summaries of YouTube video comments.',
      'Integrated the official YouTube Data API v3 to dynamically fetch comment data from any public video.',
      'Utilized LangChain to orchestrate the AI workflow, implementing an efficient `stuff` chain to manage API calls.',
      'Built a clean and interactive user interface with Streamlit for a seamless user experience.',
    ],
    technologies: 'Streamlit, LangChain, Google Gemini API, Python, YouTube Data API v3',
  },
];

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
    issuer: 'Oracle',
    date: 'June 10, 2024',
    details: 'Validated expertise in OCI Generative AI services, from model deployment to security.',
  },
  {
    title: 'Oracle Certified Foundations Associate, OCI AI',
    issuer: 'Oracle',
    date: 'June 5, 2024',
    details: 'Recognized for foundational knowledge of Oracle Cloud Infrastructure and AI services.',
  },
  {
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft & LinkedIn',
    date: 'June 21, 2024',
    details: 'Completed learning path covering core concepts in Programming & Software Development.',
  },
  {
    title: 'Build Your Generative AI Productivity Skills',
    issuer: 'Microsoft & LinkedIn',
    date: 'June 22, 2024',
    details: 'Learned skills in AI for Business and Design Productivity Improvement.',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    date: 'May 4, 2025',
    details: 'Completed practical tasks in data analysis and forensic technology.',
  },
  {
    title: 'Software Engineer & SQL (Intermediate)',
    issuer: 'HackerRank',
    date: 'April 2025',
    details: 'Passed role-based and skill-based certification tests for software engineering and SQL.',
  },
];

// --- TYPES ---
interface SectionProps {
  children: ReactNode;
  delay?: number;
}

interface SectionTitleProps {
  title: string;
}

interface SkillBadgeProps {
  skill: string;
}

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  location: string;
}

interface ProjectItemProps {
  title: string;
  description: string[];
  technologies: string;
}

interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  details: string;
}

// --- REUSABLE COMPONENTS ---
const Section = ({ children, delay = 0 }: SectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-8"
  >
    {children}
  </motion.section>
);

const SectionTitle = ({ title }: SectionTitleProps) => (
  <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
);

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
    {skill}
  </span>
);

const EducationItem = ({ degree, institution, period, grade, location }: EducationItemProps) => (
  <div className="border-l-4 border-gray-600 pl-4">
    <h3 className="text-lg font-semibold text-white">{degree}</h3>
    <p className="text-gray-400">{institution}</p>
    <p className="text-gray-500 text-sm">{period} • {grade}</p>
    <p className="text-gray-500 text-sm">{location}</p>
  </div>
);

const ProjectItem = ({ title, description, technologies }: ProjectItemProps) => (
  <div className="border-l-4 border-gray-600 pl-4">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <ul className="list-disc list-inside text-gray-400 space-y-1 mb-2">
      {description.map((point, index) => <li key={index}>{point}</li>)}
    </ul>
    <p className="text-gray-500 text-sm">
      <span className="font-semibold">Tech Stack:</span> {technologies}
    </p>
  </div>
);

const CertificationItem = ({ title, issuer, date, details }: CertificationItemProps) => (
  <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
    <div className="mt-1.5 w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
    <div>
      <span className="text-gray-300 font-medium">{title}</span>
      <p className="text-sm text-gray-500 mt-1">{issuer} • {date}</p>
      <p className="text-sm text-gray-400 mt-1">{details}</p>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mirza Safiulla Baig</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aspiring AI Engineer & Full-Stack Developer creating intelligent, user-centric applications.
          </p>
        </motion.div>

        {/* Personal Information */}
        <Section delay={0.1}>
          <SectionTitle title="Personal Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div><strong>Name:</strong> {personalInfo.name}</div>
            <div><strong>Email:</strong> {personalInfo.email}</div>
            <div><strong>Phone:</strong> {personalInfo.phone}</div>
            <div><strong>Location:</strong> {personalInfo.location}</div>
            <div><strong>LinkedIn:</strong> <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">{personalInfo.linkedin}</a></div>
            <div><strong>GitHub:</strong> <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">{personalInfo.github}</a></div>
          </div>
        </Section>

        {/* Education */}
        <Section delay={0.2}>
          <SectionTitle title="Education" />
          <div className="space-y-6">
            {educationHistory.map((edu, index) => <EducationItem key={index} {...edu} />)}
          </div>
        </Section>

        {/* Technical Skills */}
        <Section delay={0.3}>
          <SectionTitle title="Technical Skills" />
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill) => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">AI/ML & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai_ml.map((skill) => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
          </div>
        </Section>

        {/* Key Projects */}
        <Section delay={0.4}>
          <SectionTitle title="Key Projects" />
          <div className="space-y-8">
            {projects.map((project, index) => <ProjectItem key={index} {...project} />)}
          </div>
        </Section>

        {/* Certifications */}
        <Section delay={0.5}>
          <SectionTitle title="Certifications" />
          <div className="space-y-4">
            {certifications.map((cert, index) => <CertificationItem key={index} {...cert} />)}
          </div>
        </Section>
        
        {/* Career Aspirations */}
        <Section delay={0.6}>
          <SectionTitle title="Career Aspirations"/>
          <div className="space-y-3 text-gray-300">
            <p>Seeking to leverage my skills in AI/ML and full-stack development to build innovative, data-driven applications that solve complex, real-world problems.</p>
            <p>Eager to contribute to a collaborative team at the forefront of technology and committed to continuous learning and professional growth.</p>
          </div>
        </Section>
      </div>
    </div>
  )
}
