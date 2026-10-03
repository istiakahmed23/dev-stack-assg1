import React from 'react';
import type { Technology } from '../types';
interface TechListCardProps {
    tech: Technology;
    onAdd: (tech: Technology) => void;
    isAdded: boolean;
    
}

const TechListCard = ({ tech, onAdd, isAdded }: TechListCardProps) => {


    return (
        <>


            <div className="w-full rounded-xl border border-gray-200 bg-white p-3 shadow-sm">

                {/* Top section */}
                <div className="mb-3 flex items-start justify-between">

                    {/* Technology icon */}
                    <div className="flex h-[50px] w-[35px] items-center justify-center">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-15 w-15 object-contain"
                        />
                    </div>

                    {/* Badge */}
                    <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[22px] font-medium text-purple-500">
                        {tech.badge}
                    </span>
                </div>

                {/* Technology name */}
                <h3 className="mb-1 text-[36px] font-semibold text-gray-900">
                    {tech.name}
                </h3>

                {/* Description */}
                <p className="mb-3 line-clamp-3  text-[22px] text-gray-400">
                    {tech.description}
                </p>

                {/* Category + difficulty + rating */}
                <div className="mb-2 flex items-center justify-between border-t border-gray-100 pt-2">

                    {/* Category */}
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[18px] text-gray-500">
                        {tech.category}
                    </span>

                    {/* Difficulty */}
                    <span className="text-[18px] text-gray-400">
                        {tech.difficulty}
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-0.5 text-[18px] text-gray-700">
                        <span className="text-yellow-400">★</span>
                        {tech.rating}
                    </span>
                </div>

                {/* Add button */}
                <button
                    onClick={() => onAdd(tech)}
                    disabled={isAdded}
                    className={`w-full rounded-lg bg-black py-2 text-[18px] font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40
                    ${isAdded ? "cursor-not-allowed bg-gray-400 opacity-50 blur-[1px]" : "bg-slate-950 hover:bg-slate-700"}`}
                >
                    {isAdded ? "Added to Stack" : "Add to Stack"}
                </button>
            </div>



        </>
    );
};

export default TechListCard;