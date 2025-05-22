import React, { useState } from 'react';
import { content } from '../data/content';

const Misc = () => {
  const categories = ['bookClubs', 'socialMedia', 'talks', 'courses'];
  const [activeCategory, setActiveCategory] = useState('bookClubs');
  
  const getCategoryTitle = (category) => {
    switch(category) {
      case 'bookClubs': return 'Book Clubs';
      case 'socialMedia': return 'Social Media';
      case 'talks': return 'Talks & Sharing';
      case 'courses': return 'Courses';
      default: return '';
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-purple-600 pb-2 inline-block">
        Misc
      </h2>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {getCategoryTitle(category)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-purple-600 mb-4">
          {getCategoryTitle(activeCategory)}
        </h3>
        
        {activeCategory === 'bookClubs' && (
          <div className="space-y-6">
            {content.misc.bookClubs.length > 0 ? content.misc.bookClubs.map((club, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{club.name}</h4>
                <p className="text-gray-600 mb-2">{club.period}</p>
                <p className="text-gray-700 mb-3">{club.description}</p>
                {club.books && club.books.length > 0 && (
                  <div className="mt-3">
                    <h5 className="font-medium text-gray-800 mb-1">Books Read:</h5>
                    <ul className="list-disc list-inside text-gray-700 ml-2">
                      {club.books.map((book, bookIndex) => (
                        <li key={bookIndex}>{book}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )) : (
              <p className="text-gray-600">No book clubs to display yet.</p>
            )}
          </div>
        )}
        
        {activeCategory === 'socialMedia' && (
          <div className="space-y-6">
            {content.misc.socialMedia.length > 0 ? content.misc.socialMedia.map((account, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                    {account.platform === 'xiaohongshu' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M11 11h2v6h-2zm0-4h2v2h-2z"/>
                      </svg>
                    )}
                    {account.platform === 'instagram' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{account.name}</h4>
                </div>
                <p className="text-gray-700 mb-3">{account.description}</p>
                <p className="text-gray-600 mb-3">Followers: {account.followers}</p>
                {account.url && (
                  <a 
                    href={account.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800"
                  >
                    Visit Account
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            )) : (
              <p className="text-gray-600">No social media accounts to display yet.</p>
            )}
          </div>
        )}
        
        {activeCategory === 'talks' && (
          <div className="space-y-6">
            {content.misc.talks.length > 0 ? content.misc.talks.map((talk, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{talk.title}</h4>
                <p className="text-gray-600 mb-2">{talk.date} • {talk.venue}</p>
                <p className="text-gray-700 mb-3">{talk.description}</p>
                {talk.slides && (
                  <a 
                    href={talk.slides} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 mr-4"
                  >
                    View Slides
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {talk.video && (
                  <a 
                    href={talk.video} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800"
                  >
                    Watch Video
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            )) : (
              <p className="text-gray-600">No talks to display yet.</p>
            )}
          </div>
        )}
        
        {activeCategory === 'courses' && (
          <div className="space-y-6">
            {content.misc.courses.length > 0 ? content.misc.courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h4>
                <p className="text-gray-600 mb-2">{course.institution} • {course.period}</p>
                <p className="text-gray-700 mb-3">{course.description}</p>
                {course.syllabus && (
                  <a 
                    href={course.syllabus} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800"
                  >
                    View Syllabus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            )) : (
              <p className="text-gray-600">No courses to display yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Misc;