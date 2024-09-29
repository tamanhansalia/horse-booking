import React from 'react';
import img1 from '../assets/ai-generated-horses-picture (1).jpg'
import img2 from '../assets/ai-generated-horses-picture (4).jpg'

const AboutUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 text-lg leading-7 mb-8">
          Welcome to [Your Company Name], the premier destination for horseback riding enthusiasts.
          Whether you're a beginner or an experienced rider, we are passionate about offering unforgettable riding experiences in
          beautiful landscapes, with well-trained horses and expert instructors.
        </p>
        <div className="flex flex-wrap justify-center mb-8">
          <img
            className="w-64 h-64 rounded-full mx-4 shadow-lg object-cover"
            src={img2}
            alt="Beautiful Horse"
          />
          <img
            className="w-64 h-64 rounded-full mx-4 shadow-lg object-cover"
            src={img1}
            alt="Horseback Riding Experience"
          />
        </div>
        <p className="text-gray-600 text-lg leading-7">
          Our mission is to make horse riding accessible and enjoyable for everyone. We take pride in ensuring that all our
          riders feel confident, safe, and excited about their experience with us. From booking your session to your first ride,
          we are here to provide top-notch service every step of the way.
        </p>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          Our team is composed of experienced trainers, staff, and equestrian enthusiasts dedicated to making your time with us
          extraordinary. Come join us for an adventure you’ll never forget!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
