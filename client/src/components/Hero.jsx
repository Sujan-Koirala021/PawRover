import React from 'react';
import heroImage from '../assets/images/pet-sitter-hero.jpg';

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroImage})`, height: 'calc(100vh - 64px)' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto flex flex-col justify-center text-white relative z-10 h-full">
                <div className="text-left">

                    <h1 className="text-4xl md:text-6xl font-bold mb-10">Paw Rover</h1>
                    <p className="text-lg md:text-xl max-w-md">Uncover special homestays across the globe, exchanging care for adorable pets for a free stay.
                    </p>
                    {/* <Link to='/home'> */}
                    <button className="hero-button mr-12">Find a Pet Sitter &gt;</button>
                    <button className="hero-button ml-6">Explore Homes to Sit &gt;</button>

                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
