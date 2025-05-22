import React from 'react';
import { content } from '../data/content';

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-fuchsia-600 pb-2 inline-block">
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-fuchsia-600">
          <img 
            src="/assets/images/profile.jpg" 
            alt={content.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/200x200.png?text=Profile+Photo";
            }}
          />
        </div>
        
        <div className="flex-grow">
          <div className="prose prose-lg max-w-none">
            {content.about.introduction.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
            <p className="flex items-center text-fuchsia-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a 
                href={`mailto:${content.about.email}`} 
                className="hover:underline"
              >
                {content.about.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;