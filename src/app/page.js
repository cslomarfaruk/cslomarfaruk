import React from 'react';
import { 
  Github, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  WhatsApp, 
  PhoneCall
} from 'lucide-react';
import Image from 'next/image';

const OmarPortfolio = () => {
  const socialLinks = [
    { 
      icon: <Github size={32} className="text-gray-800 hover:text-black transition-colors" />, 
      href: "https://github.com/cslomarfaruk" 
    },
    { 
      icon: <Facebook size={32} className="text-sky-700 hover:text-blue-800 transition-colors" />, 
      href: "https://facebook.com/cslomarfaruk1" 
    },
    { 
      icon: <PhoneCall size={32} className="text-green-500 hover:text-green-700 transition-colors" />, 
      href: "https://wa.me/+8801839467728" 
    },
    { 
      icon: <Linkedin size={32} className="text-sky-700 hover:text-blue-900 transition-colors" />, 
      href: "https://linkedin.com/in/csl-omarfaruk" 
    },
    { 
      icon: <Instagram size={32} className="text-pink-600 hover:text-pink-800 transition-colors" />, 
      href: "https://instagram.com/cslomarfaruk" 
    },
    { 
      icon: <Twitter size={32} className="text-sky-500 hover:text-sky-700 transition-colors" />, 
      href: "https://x.com/cslomarfaruk" 
    }
  ];

  const skills = [
    "React.js", "Next.js", "Firebase", 
    "MongoDB", "MySQL", "Full-stack Development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 m-2 max-w-lg w-full transform hover:ease-in transition-transform duration-300">
        <div className="text-center">
          <div className="relative inline-block">
            <Image 
              src="https://i.ibb.co.com/M53nJc5/dp.jpg" 
              height={48}
              width={48}
              alt="Omar Faruk" 
              className="mx-auto size-48 rounded-full border-4 border-blue-500 object-cover mb-4 shadow-lg"
            />
            <div className="absolute bottom-4 right-0 bg-green-500 w-6 h-6 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Omar Faruk</h1>
          <p className="text-lg text-gray-600 mb-4">
            Computer Science & Engineering Student
            <br />
            Sylhet Engineering College
          </p>
          
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">Tech Skills</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            Tech enthusiast passionate about web development, ready to collaborate on complex production-level projects.
          </p>
          
          <a 
            href="mailto:cslomarfaruk@gmail.com" 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default OmarPortfolio;