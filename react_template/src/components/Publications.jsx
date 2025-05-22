import React from 'react';
import { content } from '../data/content';

const Publications = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-teal-500 pb-2 inline-block">
        Publications
      </h2>
      
      {/* Papers Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Papers</h3>
        <div className="space-y-6">
          {content.publications.papers.length > 0 ? (
            content.publications.papers.map((paper, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-3">{paper.authors}</p>
                <p className="text-gray-700 mb-4">{paper.abstract}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags && paper.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {paper.url && (
                  <a 
                    href={paper.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Read Paper
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center py-8">No papers to display yet.</p>
          )}
        </div>
        
        {/* Portfolio Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-12">Portfolio</h3>
        <div>
          {content.publications.portfolio.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.publications.portfolio.map((work, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  {work.image && (
                    <div className="mb-4 h-48 overflow-hidden rounded-md">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x250.png?text=Portfolio+Item";
                        }}
                      />
                    </div>
                  )}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{work.title}</h3>
                    {work.year && <span className="text-sm font-medium text-teal-600">{work.year}</span>}
                  </div>
                  <p className="text-gray-700 mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {work.url && (
                      <a 
                        href={work.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-teal-600 hover:text-teal-800"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {work.alternateUrl && (
                      <a 
                        href={work.alternateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        {work.alternateLabel || "Alternate Version"}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">No portfolio items to display yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;