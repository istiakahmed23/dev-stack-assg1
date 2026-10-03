import React from 'react';
import type { Technology } from '../types';
import TechList from './TechList';
import Sidebar from './Sidebar';

interface MainLayoutProps {
    technologies: Technology[];
}

const MainLayout = ({ technologies }: MainLayoutProps) => {


    return (
        <>
        <div className="container mx-auto">
            <div className="py-[25px]">
                <h2 className='font-extrabold text-[36px]'>Explore the <span className="text-brand-gradient">Technologies</span></h2>
            <p className="font-normal text-[24px] text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
        
            </div>


            {/* Main grid */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-4">
                {/* Technology cards- 3 columns */}
                <section className="lg:col-span-3">
                    <TechList 
                    technologies={technologies} 
                    />

                </section>
                
                {/* Sidebar: 1 column */}
                <aside className="lg:col-span-1">
                    <Sidebar/>


                </aside>

            </div>
        </div>
            
        </>
    );
};

export default MainLayout;