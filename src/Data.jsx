import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/java.svg';
import skillsImg6 from './assets/mysql.svg';
import skillsImg7 from './assets/mongodb.svg';
import skillsImg8 from './assets/springBoot.svg';
import skillsImg9 from './assets/python.svg';
import skillsImg10 from './assets/machine-learning.svg';
import skillsImg11 from './assets/Pandas.svg';
import skillsImg12 from './assets/scikit-learn.svg';
import skillsImg13 from './assets/tensorflow.svg';
import skillsImg14 from './assets/power-bi.svg';


import projectImg1 from './assets/online-shopping.jpg';
import projectImg2 from './assets/stock-market.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';


export const links = [
    {
      name: 'Home',
      icon: <FaHome className='nav-icon' />,
      path: '/',
    },
  
    {
      name: 'About',
      icon: <FaUser className='nav-icon' />,
      path: '/about',
    },
  
    {
      name: 'Projects',
      icon: <FaFolderOpen className='nav-icon' />,
      path: '/projects',
    },
  
    {
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav-icon' />,
      path: '/contact',
    },
  ];

  export const personalInfo = [
    {
      title: 'First Name : ',
      description: 'Murali',
    },
  
    {
      title: 'Last Name : ',
      description: 'Manohar',
    },
  
    {
      title: 'DOB : ',
      description: '6th Jun, 2001',
    },
  
    {
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      title: 'Address : ',
      description: 'Visakhapatnam, Andhra Pradesh',
    },
  
    {
      title: 'Phone : ',
      description: '8309184986',
    },
  
    {
      title: 'Email : ',
      description: 'bonimuralimanohar1999@mail.com',
    },
  
    {
      title: 'Langages : ',
      description: 'English, Telugu, Hindi, Tamil',
    },
  ];


  export const skill = [
    {
      id: 1,
      img: skillsImg1,
      title: 'HTML',
      level: 'Intermediate',
      category: 'developer',
    },
  
    {
      id: 2,
      img: skillsImg2,
      title: 'CSS',
      level: 'Intermediate',
      category: 'developer',
    },
  
    {
      id: 3,
      img: skillsImg3,
      title: 'JavaScript',
      level: 'Intermediate',
      category: 'developer',
    },
  
    {
      id: 4,
      img: skillsImg4,
      title: 'React',
      level: 'Basic',
      category: 'developer',
    },
  
    {
      id: 5,
      img: skillsImg5,
      title: 'Java',
      level: 'Intermediate',
      category: 'developer',
    },
  
    {
      id: 6,
      img: skillsImg6,
      title: 'Mysql',
      level: 'Advanced',
      category: 'developer',
    },
  
    {
      id: 7,
      img: skillsImg7,
      title: 'mongoDB',
      level: 'Basic',
      category: 'developer',
    },
  
    {
      id: 8,
      img: skillsImg8,
      title: 'springBoot',
      level: 'Beginner',
      category: 'developer',
    },
  
    {
      id: 9,
      img: skillsImg9,
      title: 'Python',
      level: 'Intermediate',
      category: 'data-scientist',
    },
  
    {
      id: 10,
      img: skillsImg10,
      title: 'Machine Learning',
      level: 'Intermediate',
      category: 'data-scientist',
    },
    
    {
      id: 11,
      img: skillsImg11,
      title: 'Pandas',
      level: 'Intermediate',
      category: 'data-scientist',
    },
    
    {
      id: 12,
      img: skillsImg12,
      title: 'scikit-learn',
      level: 'Intermediate',
      category: 'data-scientist',
    },
    
    {
      id: 13,
      img: skillsImg13,
      title: 'Tensorflow',
      level: 'Intermediate',
      category: 'data-scientist',
    },
    
    {
      id: 14,
      img: skillsImg14,
      title: 'Power BI',
      level: 'Intermediate',
      category: 'data-scientist',
    },
  ];


  export const resume = [
    {
      id: 1,
      category: 'education',
      icon: <RiGraduationCapFill />,
      year: '2023 - Ongoing',
      title: 'Master\'s Degree in Artificial Intelligence & Data Science <span> VIT University </span>',
      desc: 'CGPA - 8.67/10',
    },
  
    {
      id: 2,
      category: 'education',
      icon: <RiGraduationCapFill />,
      year: '2018 - 2022',
      title: 'Bachelor\'s Degree in Mechanical Engineering <span> SRM University </span>',
      desc: 'CGPA - 8.83/10',
    },
  
    {
      id: 3,
      category: 'education',
      icon: <RiGraduationCapFill />,
      year: '2016 - 2018',
      title: 'Intermediate <span> Sri chaitanya jr college </span>',
      desc: 'Percentage - 94.9%',
    },

    {
      id: 4,
      category: 'education',
      icon: <RiGraduationCapFill />,
      year: '2015 - 2016',
      title: '10th Class<span> Vijnana Vihara Residential School </span>',
      desc: 'Percentage - 70.1%',
    },
  ];


  export const projects = [
    {
      id: 1,
      img: projectImg1,
      title: 'Online Shopping Website',
      description:
        'Built a full-stack e-commerce application using ReactJS, Spring Boot, and MySQL that supports user registration, product listings, cart, and order management.',
      skills: [skillsImg1, skillsImg2, skillsImg4, skillsImg5, skillsImg6, skillsImg8],
      link: '',
    },
  
    {
      id: 2,
      img: projectImg2,
      title: 'Stock Price Prediction',
      description:
        'Implemented a stock prediction model using Python and an Attention-GRU network, integrating historical stock data and sentiment analysis for accurate forecasting.',
      skills: [skillsImg9, skillsImg10, skillsImg11, skillsImg13],
      link: '',
    },
  ];


  export const themes = [
    {
      img: Theme1,
      hue: '4',
    },
  
    {
      img: Theme2,
      hue: '271',
    },
  
    {
      img: Theme3,
      hue: '225',
    },
  
    {
      img: Theme4,
      hue: '339',
    },
  
    {
      img: Theme5,
      hue: '80',
    },
  
    {
      img: Theme6,
      hue: '19',
    },
  
    {
      img: Theme7,
      hue: '42',
    },
  ];
  
  
