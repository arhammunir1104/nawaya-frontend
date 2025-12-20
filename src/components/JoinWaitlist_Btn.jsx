import React, { useState, useEffect } from 'react';
import '../index.css';
import SurveyModal from './SurveyModal';

const JoinWaitlist_Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0,0)
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <>
      <button 
        type="button" 
        className="btn-join  cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="btn-join__text xs:text-Paragraph6 2xl:text-Paragraph4">
          Join the waitlist
        </span>
      </button>

      {isModalOpen && <SurveyModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default JoinWaitlist_Btn;