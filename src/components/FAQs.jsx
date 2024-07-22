import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid'; // or '@heroicons/react/outline' for an outline version

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase for a full refund.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay.'
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='p-4'>
      <h1 className='font-bold my-8 mx-10 md:mx-20 text-3xl relative before:absolute before:-bottom-3 before:left-0 before:w-[100px] before:h-1 before:bg-[#6C74CB] before:-z-10'>
        <span className='relative'>FAQ's</span>
      </h1> 
      <div className="w-[80vw] md:max-w-6xl mx-auto my-4">
        <div className="rounded-lg">
          {questions.map((item, index) => (
            <div key={index} className="group mb-4 border-2 border-black rounded-md">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={() => toggleExpand(index)}
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                <ChevronDownIcon 
                  className={`h-6 w-6 transition-transform ${expandedIndex === index ? 'transform rotate-180' : ''}`}
                />
              </div>
              {expandedIndex === index && (
                <div className="p-4 bg-white text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
