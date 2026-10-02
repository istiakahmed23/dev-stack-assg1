import React from 'react';
import banner from '../assets/banner-stack.png'
import '../App.css';

const Hero = () => {
    return (
        <>
            <div className="container mx-auto flex items-center justify-between py-[100px] mb-7">
                <div className="">
                    <h2 className="text-[60px] font-extrabold">Build Your Ideal <br /> <span className="text-brand-gradient">Development Stack</span>
                    </h2>
                    <p className="text-[18px] font-normal text-[#475569] pt-[15px] pb-[35px]">Explore frontend, backend, database, and tooling options,
                        <br />compare them side by side, and put together the stack that fits your<br />
                        next project.</p>

                    <div className="flex gap-3">
                        <button className="btn bg-[linear-gradient(to_right,#f97316,#ec4899,#8b5cf6)] text-white text-[14px] rounded-[10px] px-[10px] py-[15px]">Explore Technologies</button>
                        <button className="btn text-[14px] bg-transparent px-[45px] rounded-[10px] py-[15px]">Learn More</button> 

                    </div>



                </div>
                <img src={banner} alt="Banner" className="max-w-full h-full" />

            </div>
        </>
    );
};

export default Hero;