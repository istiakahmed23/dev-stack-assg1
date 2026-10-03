import React from 'react';
import type { Technology } from '../types';
import TechListCard from './TechListCard';

interface TechListProps {
    technologies: Technology[];
}

const TechList = ({ technologies }: TechListProps) => {
    
    return (
        <>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
                <TechListCard 
                key={tech.id} 
                tech={tech} />
                
            ))}

        </div>
        </>
    );
};

export default TechList;