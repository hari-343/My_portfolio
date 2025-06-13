# My_portfolio
# 🌐 3D Portfolio Website (React + Tailwind + Three.js)

A visually striking, interactive developer portfolio built using **React**, **Tailwind CSS**, and **Three.js**. The project highlights 3D animation in the hero section, showcases projects, and offers a clean contact form.

## 🚀 Live Demo

[Live Site](#) – *(Add your deployment link here)*

---

## 📁 Project Structure

/portfolio-3d
├── public/
│ └── images/
│ ├── profile.jpg
│ ├── project1.jpg
│ ├── project2.jpg
│ └── project3.jpg
├── src/
│ ├── components/
│ │ ├── Hero.js
│ │ ├── About.js
│ │ ├── Projects.js
│ │ └── Contact.js
│ ├── App.js
│ ├── index.js
│ └── index.css
├── tailwind.config.js
├── postcss.config.js
└── README.md


---

## 🛠️ Tech Stack

- **React** – Component-based UI development
- **Tailwind CSS** – Utility-first styling
- **Three.js** – WebGL 3D rendering
- **Vite / CRA** – For fast dev environment *(choose based on your setup)*

---

## 📦 Installed Packages

```bash
npm install react react-dom
npm install -D tailwindcss postcss autoprefixer
npm install three
npx tailwindcss init -p
Then configure tailwind.config.js:
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

🖼️ Assets Used
/images/profile.jpg – Avatar or professional profile image

/images/project1.jpg – Task manager web app preview

/images/project2.jpg – E-commerce frontend snapshot

/images/project3.jpg – Landing page with 3D elements

Ensure all images are placed inside /public/images/.

✨ Features
Interactive 3D cube using three.js in Hero

Responsive design using Tailwind's grid and flex

Smooth scroll & transitions

Form validation in Contact section

Reusable React components

🧠 Ideas to Expand
Add motion animations with framer-motion

Integrate email sending with EmailJS or Formspree

Deploy on Vercel, Netlify, or GitHub Pages

🖥️ Run Locally
bash
Copy
Edit
git clone https://github.com/yourusername/portfolio-3d.git
cd portfolio-3d
npm install
npm run dev   # or npm start if using CRA
📄 License
MIT © [Your Name]

🙌 Acknowledgements
Three.js Examples

Tailwind CSS Docs

React Official

yaml
Copy
Edit

---

Let me know if you want a dark mode toggle, animated route transitions, or deploy instructions for GitHub Pages or Netlify.






