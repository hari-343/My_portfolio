import React from 'react';

const projects = [
  {
    title: 'Nxt-Trendz Ecommerce site',
    image: '/images/project1.jpg',
    description: 'A modern eCommerce platform offering handpicked products, designed to make shopping simple, smart, and satisfying.',
    link: 'https://trendapp.ccbp.tech/'
  },
  {
    title: 'Pitch-ready Product using 10+ AI Tools',
    image: '/images/project2.jpg',
    description: 'Built a pitch-ready product in the Generative AI Mega Workshop 2.0 using 10+ GenAI tools for rapid prototyping—leveraging ChatGPT, DALL·E, Runway, and more with web frameworks, automation, and API integrations.',
    link: 'http://fin-lit.wegic.app'
  },
  {
    title: '🎬 Prime Video Clone – Student Project',
    image: '/images/project3.jpg',
    description: 'An interactive React application mimicking the Prime Video interface using React Slick for sliding thumbnails and React Popup + React Player for video previews.',
    link: 'https://videosprime44.ccbp.tech/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="shadow-lg p-4 rounded">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
            <p className="text-sm mt-1">{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-2 inline-block">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}