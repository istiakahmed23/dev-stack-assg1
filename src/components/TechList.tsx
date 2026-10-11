
import type { Technology } from '../types';
import TechListCard from './TechListCard';

interface TechListProps {
    technologies: Technology[];
    stack: Technology[];
    onAdd: (tech: Technology) => void;
}

const TechList = ({ technologies, stack, onAdd }: TechListProps) => {


    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {technologies.map((tech) => {
                    const isAdded = stack.some(
                        (stackItem) => stackItem.id === tech.id
                    );

                    return (
                        <TechListCard
                            key={tech.id}
                            tech={tech}
                            onAdd={onAdd}
                            isAdded={isAdded}
                        />
                    );
                })}

            </div>
        </>
    );
};

export default TechList;