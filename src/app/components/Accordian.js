// components/Accordion.js
import { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto">
      <button
        className="flex items-center justify-between w-full p-4 font-medium text-left text-gray-900 bg-[#f4dcb4] border border-black rounded-lg hover:bg-gray-200 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>Discription</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`flex flex-col mt-2 p-4 text-gray-700 bg-[#ffa763] border border-t-0 border-gray-200 rounded-b-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        Tailwind CSS is a utility-first CSS framework for building custom designs directly in your
        markup. It’s a low-level CSS framework that gives you full control over your design without
        leaving your HTML.
        <div className='flex justify-end'>  <button className='flex items-center rounded-lg text-white justify-center bg-[#6e3117] w-[250px] mt-4 h-[45px]'>Submit</button></div>
      
      </div>
    </div>
  );
};

export default Accordion;
