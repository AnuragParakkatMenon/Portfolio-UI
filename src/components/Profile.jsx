import React from 'react'
import profile from '../assets/profile.png';
import BlurText from './BlurText'
import { ArcherContainer, ArcherElement } from '@gitii/react-archer';

const Profile = ({ onProfileClick }) => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }



  return (
    <div className='flex w-full h-full  items-center justify-center text-center mt-11'>
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6">
        <ArcherContainer strokeColor="white">

          <div className="flex items-start gap-24">

            {/* PROFILE IMAGE */}
            <ArcherElement
              id="profileImage">
              <img
                src={profile}
                alt="Anurag Profile"
                onClick={onProfileClick}
                className="w-56 md:w-72 cursor-pointer hover:scale-110 transition-transform duration-300 ml-80"
              />
            </ArcherElement>

            {/* TEXT */}
            <ArcherElement id="clickLabel" relations={[
              {
                targetId: "profileImage",
                sourceAnchor: "left",
                targetAnchor: "right",
                style: {
                  strokeWidth: 2,
                  strokeDasharray: "6,6"
                },
                curveness: 0.4
              }
            ]}>
              <div className="text-white font-semibold text-xl mt-20 animate-pulse ml-6">
                Click Here to interact with me!
              </div>
            </ArcherElement>

          </div>

        </ArcherContainer>

        {/* Heading */}
        <BlurText
          text="Hey, Its Anurag Menon"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        />
        <BlurText
          text="A Senior Front end Developer"
          delay={300}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        />

        {/* Subtext */}
        <BlurText
          text="A passionate developer with 6+ years of experience building scalable and innovative solutions."
          delay={450}
          animateBy="words"
          direction="top"
          className="text-lg md:text-xl text-white max-w-2xl leading-relaxed mb-8"
        />

        {/* Button */}
        <button className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 z-20">
          View My Work
        </button>

      </section>
    </div>
  );
};

export default Profile;

