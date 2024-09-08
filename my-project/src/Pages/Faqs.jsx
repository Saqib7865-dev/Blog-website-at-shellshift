import { useState } from 'react';
import Layout from '../components/Layout';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies."
    },
    {
      question: "How does React work?",
      answer: "React creates a virtual DOM in memory, which represents the UI components. When state changes occur, React efficiently updates and re-renders only the necessary parts of the DOM."
    },
    {
      question: "What are React components?",
      answer: "Components are independent, reusable pieces of code that serve as the building blocks of a React application. They can be either class-based or function-based."
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f7f9fc',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '2.5rem',
      color: 'rgb(71,71,71)',
      fontWeight: 'bold',
      letterSpacing: '1px',
    },
    faqList: {
      borderTop: '1px solid #e0e0e0',
    },
    faqItem: {
      cursor: 'pointer',
      padding: '15px 20px',
      borderBottom: '1px solid #e0e0e0',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      position: 'relative',
      borderRadius: '5px',
      marginBottom: '10px',
      backgroundColor: '#fff',
    },
    faqItemHover: {
      backgroundColor: '#f0f4ff',
      transform: 'scale(1.02)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    question: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: 'rgb(0,198,200)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
    },
    questionActive: {
      color: 'rgb(71,71,71)',
    },
    answer: {
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease',
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
      padding: '0 20px',
      opacity: 0,
    },
    answerVisible: {
      maxHeight: '200px', 
      opacity: 1,
      padding: '10px 20px',
    },
    icon: {
      transition: 'transform 0.3s ease',
      fontSize: '1.2rem',
      transform: 'rotate(0deg)',
      color: 'rgb(0,198,200)',
    },
    iconActive: {
      transform: 'rotate(180deg)',
      color: 'rgb(71,71,71)',
    }
  };

  return (
<Layout>
<div style={styles.container}>
<h2 style={styles.heading}>Frequently Asked Questions</h2>
<div style={styles.faqList}>
  {faqs.map((faq, index) => (
    <div 
      key={index} 
      style={{ 
        ...styles.faqItem, 
        ...(activeIndex === index ? styles.faqItemHover : {}) 
      }}
      onClick={() => handleToggle(index)}
    >
      <div style={{ 
        ...styles.question, 
        ...(activeIndex === index ? styles.questionActive : {}) 
      }}>
        {faq.question}
        <span 
          style={{ 
            ...styles.icon, 
            ...(activeIndex === index ? styles.iconActive : {}) 
          }}
        >
          ▼
        </span>
      </div>
      <div style={{ 
        ...styles.answer, 
        ...(activeIndex === index ? styles.answerVisible : {}) 
      }}>
        {faq.answer}
      </div>
    </div>
  ))}
</div>
</div>
</Layout>
  );
};

export default FAQs;



