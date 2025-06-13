import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const validate = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) return 'All fields are required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) setError(err);
    else {
      setError('');
      alert('Message sent!');
    }
  };

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-2 border" onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" className="w-full p-2 border h-32" onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}
