const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'NA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Naheemah Adeleke',
  role: 'Front End Engineer',
  description:
    'Self driven software engineer with a knack for clever tech solutions, seeking to make an impact by solving real world problems through technology. React is my primary front-end language, however, my past experience as a PHP/Laravel/OOP developer gives me a robust view of the development value chain.',
  resume: 'https://drive.google.com/file/d/1syzJgHzUpj_F0HNJlF_cjuw4zlryNry3/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/naheemah-adeleke/',
    github: 'https://github.com/Funminaima',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Trail',
    description:
      'Trail helps development organizations to easily track, measure and report impact results in real time. Using the Theory of Change logic, Trail simplifies monitoring and evaluation so you can align your project activities, outcomes, and indicators with the Sustainable Development Goals.',
    stack: ['SASS', 'TypeScript', 'React', 'Redux'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.mytrail.io',
  },
  {
    name: 'Archymdes App',
    description:
      'A CRUD react app which was a proof of concept for a project I was shortlisted for',
    stack: ['React', 'Typescript', 'CSS'],
    sourceCode: 'https://github.com/Funminaima/archimydes/tree/master',
    // livePreview: 'https://github.com/Funminaima/Tailor_Hub_web_app',
  },
  {
    name: 'TailorHub',
    description:
      'A peer to peer webApp where customers anywhere can connect with tailors. Tailors can upload the gallery of their work for view. An end to end plateform from viewing to payment.',
    stack: ['HTML', 'CSS', 'PHP/OOP', 'MySQL'],
    sourceCode: 'https://github.com/Funminaima/Tailor_Hub_web_app',
    // livePreview: 'https://github.com/Funminaima/Tailor_Hub_web_app',
  },
  
  {
    name: 'Powergas Admin Dashboard',
    description:
      'An automated employee management system used to manage employee/employer exchanges. Some of which include automatic monthly payslip disbursment, employee history, anniversary correspondence etc. ',
    stack: ['HTML', 'CSS', 'PHP/OOP', 'MySQL'],
    // sourceCode: 'https://github.com',
    livePreview: 'http://www.powergas.com.ng',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'ANTD UI',
  'Git',
  'Cypress',
  'Jest',
  'Enzyme',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'funminaima@gmail.com',
}

export { header, about, projects, skills, contact }
