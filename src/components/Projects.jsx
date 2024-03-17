'use client';
import React, { useEffect, useRef } from 'react';
import './styles.css';
import Image  from '../assets/bgimage.jpg';

const searchSuggestions = [
  {
    icon: '➡',
    suggestion: 'Try searching',
  },
  {
    icon: '🍕',
    suggestion: 'The history of pizza',
  },
  {
    icon: '🪆',
    suggestion: 'The history of matryoshka dolls',
  },
  {
    icon: '🦪',
    suggestion: 'When does the oyster season end?',
  },
  {
    icon: '🎃',
    suggestion: "What's the history of Halloween?",
  },
  {
    icon: '🪆',
    suggestion: 'The history of matryoshka dolls',
  },
  {
    icon: '🦪',
    suggestion: 'When does the oyster season end?',
  },
  {
    icon: '🎃',
    suggestion: "What's the history of Halloween?",
  },
  {
    icon: '🪆',
    suggestion: 'The history of matryoshka dolls',
  },
  {
    icon: '🦪',
    suggestion: 'When does the oyster season end?',
  },
  {
    icon: '🎃',
    suggestion: "What's the history of Halloween?",
  },
];

const Projects = () => {
  const suggestionListRef1 = useRef(null);
  const suggestionListRef2 = useRef(null);
  const suggestionListRef3 = useRef(null);

  useEffect(() => {
    const suggestionList1 = suggestionListRef1.current;
    const suggestionList2 = suggestionListRef2.current;
    const suggestionList3 = suggestionListRef3.current;

    const scrollSuggestions1 = () => {
      suggestionList1.scrollLeft += 1;
      if (suggestionList1.scrollLeft >= suggestionList1.scrollWidth - suggestionList1.offsetWidth) {
        suggestionList1.scrollLeft = 0;
      }
      requestAnimationFrame(scrollSuggestions1);
    };

    const scrollSuggestions2 = () => {
      suggestionList2.scrollLeft -= 1;
      if (suggestionList2.scrollLeft <= 0) {
        suggestionList2.scrollLeft = suggestionList2.scrollWidth - suggestionList2.offsetWidth;
      }
      requestAnimationFrame(scrollSuggestions2);
    };

    const scrollSuggestions3 = () => {
      suggestionList3.scrollLeft += 1;
      if (suggestionList3.scrollLeft >= suggestionList3.scrollWidth - suggestionList3.offsetWidth) {
        suggestionList3.scrollLeft = 0;
      }
      requestAnimationFrame(scrollSuggestions3);
    };

    requestAnimationFrame(scrollSuggestions1);
    requestAnimationFrame(scrollSuggestions2);
    requestAnimationFrame(scrollSuggestions3);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full">
        <div ref={suggestionListRef1} className="flex overflow-hidden whitespace-nowrap animate-scroll suggestion-bar">
          {searchSuggestions.map((suggestion, index) => (
            <div key={index} className="flex items-center space-x-2 px-4">
              <span>{suggestion.icon}</span>
              <span>{suggestion.suggestion}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div ref={suggestionListRef2} className="flex overflow-hidden whitespace-nowrap animate-scroll suggestion-bar">
          {searchSuggestions.map((suggestion, index) => (
            <div key={index} className="flex items-center space-x-2 px-4">
              <span>{suggestion.icon}</span>
              <span>{suggestion.suggestion}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div ref={suggestionListRef3} className="flex overflow-hidden whitespace-nowrap animate-scroll suggestion-bar">
          {searchSuggestions.map((suggestion, index) => (
            <div key={index} className="flex items-center space-x-2 px-4">
              <span>{suggestion.icon}</span>
              <span>{suggestion.suggestion}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 mt-5">
      <div className="md:w-full mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">My Work</h2>
        <div className="flex justify-between items-center">
          {/* Card 1 */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg mr-4 h-full">
            <img className="w-full object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Project 1</div>
              <p className="text-gray-700 text-base">Description of Project 1 goes here.</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Live
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg mr-4 h-full">
            <img className="w-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Project 2</div>
              <p className="text-gray-700 text-base">Description of Project 2 goes here.</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Live
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg mr-4 h-full">
            <img className="w-full object-cover" src="https://avatars.githubusercontent.com/u/94383604?v=4" alt="Card 3" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">My portfolio Website</div>
              <p className="text-gray-700 text-base">Description of Project 3 goes here.</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
