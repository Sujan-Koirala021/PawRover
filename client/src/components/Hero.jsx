// Import necessary dependencies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/pet-sitter-hero.jpg';
import tortoiseImg from '../assets/images/turtle2.gif';
import rabbitImg from '../assets/images/rabbit1.gif';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import './HeroTour.css'; // Import CSS file for tour styling

const Hero = () => {
    useEffect(() => {
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                classes: 'shadow-md bg-purple-dark',
                scrollTo: { behavior: 'smooth', block: 'center' }
            },
            useModalOverlay: true
        });

        tour.addStep({
            id: 'welcome',
            text: `
                <div class="tour-step">
                    <img src="${tortoiseImg}" alt="Tortoise" class="tour-image">
                    <div>
                        <h3>Welcome! I am Turbo the Tortoise.</h3>
                        <p>Yes, I'm the one who beat the rabbit in the race. Let's see if I can guide you through Paw Rover faster than Speedy!</p>
                    </div>
                </div>
            `,
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        // Add more steps for the tour

        tour.start();
    }, []);

    return (
        <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroImage})`, height: 'calc(100vh - 64px)' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto flex flex-col justify-center text-white relative z-10 h-full">
                <div className="text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-10">Paw Rover</h1>
                    <p className="text-lg md:text-xl max-w-md">Uncover special homestays across the globe, exchanging care for adorable pets for a free stay.</p>
                    <Link to='/find-pet-sitter'>
                        <button className="hero-button mr-12">Find a Pet Sitter &gt;</button>
                    </Link>
                    <Link to='/find-house-sit'>
                        <button className="hero-button ml-6">Explore Homes to Sit &gt;</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
