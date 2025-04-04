
import React from 'react';
import { Milestone } from '@/types';

interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline = ({ milestones }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pgnavy/20"></div>
      
      <div className="space-y-24">
        {milestones.map((milestone, index) => (
          <div 
            key={index} 
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            } scroll-reveal`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-pgnavy border-4 border-white shadow-lg z-10"></div>
            
            {/* Content */}
            <div 
              className={`w-5/12 ${
                index % 2 === 0 ? 'pr-12' : 'pl-12'
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {milestone.image && (
                  <img 
                    src={milestone.image} 
                    alt={milestone.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="inline-block px-4 py-1 rounded-full bg-pglight text-pgnavy font-bold mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-pgnavy mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-pgnavy/70">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
