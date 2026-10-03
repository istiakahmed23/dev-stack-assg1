import React from 'react';
import type { Technology } from '../types';
import { ImCross } from "react-icons/im";


interface SidebarProps {
    stack: Technology[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
}

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
    return (
        <>
            <aside className="w-full rounded-xl border border-gray-200 bg-white p-3 shadow-sm lg:sticky lg:top-20">
                <div className="mb-3">
                    <h2 className="text-[28px] font-semibold text-gray-900">
                        Your Stack
                    </h2>
                    <p className="mt-0.5 text-[18px] text-gray-400">
                        { stack.length} Technology Selected
                    </p>

                </div>

                <div className="mt-3 space-y-2">
                    {stack.length === 0 ? (<p className="rounded-md bg-slate-50 p-3 text-[14px] text-slate-500">
                        No technologies selected yet.
                    </p>) : (stack.map((tech) => (
                        <div key={tech.id}
                            className="flex items-center gap-2 rounded-lg border border-gray-100 p-2">
                            <img
                                src={tech.icon}
                                alt={`${tech.name} logo`}
                                className="h-13 w-13 shrink-0 object-contain"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-xs font-semibold text-slate-800">
                                    {tech.name}
                                </h3>

                                <p className="text-[10px] text-slate-400">
                                    {tech.category}
                                </p>

                            </div>

                            <button
                                onClick={() => onRemove(tech.id)}
                                aria-label={`Remove ${tech.name}`}
                                title={`Remove ${tech.name}`}
                                className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"
                            > 
                            <ImCross />


                            </button>

                        </div>
                    )
                    ))};

                </div>

                {/* Remove All */}
                <button
                    type="button"
                    onClick={onRemoveAll}
                    disabled={stack.length === 0}
                    className="mt-4 w-full rounded-md border border-red-200 bg-white py-2 text-[20px] font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Remove All
                </button>





            </aside>
        </>

    );
};

export default Sidebar;