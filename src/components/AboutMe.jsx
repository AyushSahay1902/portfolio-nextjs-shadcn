import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-scroll w-full px-8 py-16 bg-gray-100 text-black gap-10 relative">
      <div
        className="absolute inset-0 bg-white/&apos;50 backdrop-blur-md"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-full mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a pre-final year student at Vellore Institute of Technology - AP, majoring in Computer Science and Engineering. I am a Full Stack Developer and I have a keen interest in coding using C++ or Java. My passion lies in building exceptional software that can make a positive difference in the lives of the people around me. I possess a strong foundation in data structures and algorithms, and I strive to learn and implement new technologies. In addition to my academic pursuits, I actively contribute to open-source projects and participate in coding competitions that help me to improve my problem-solving skills. I am a team player who thrives in collaborative environments, and I am committed to delivering high-quality solutions that meet the end-users requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;