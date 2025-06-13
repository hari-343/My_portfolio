import React from 'react';

export default function About() {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <img src="/images/profile.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full" />
      <p className="mt-4 max-w-xl mx-auto">I am a passionate web developer skilled in modern web technologies, always pushing to innovate and build unique digital experiences.</p>
    </section>
  );
}