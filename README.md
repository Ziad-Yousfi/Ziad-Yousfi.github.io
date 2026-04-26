# Portfolio Ziad Yousfi

🌐 **Language / Langue :** 🇬🇧 English (current) | [🇫🇷 Français](README.fr.md)

---

A modern, responsive, and fully functional web portfolio for Ziad Yousfi, a student in Computer Science and Network Engineering.

## 🚀 Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Fast and modern build tool
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Icons** - Icon library

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository or download the files
2. Install the dependencies:

```bash
npm install
```

## 🏃 Getting Started

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` folder.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Features

- ✅ Modern and professional design
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Subtle hover animations
- ✅ Functional contact form
- ✅ Accessibility (ARIA labels)
- ✅ SEO optimized

## 📱 Portfolio Sections

1. **Home (Hero)** - Main introduction with call-to-action buttons
2. **About** - Profile and contact details
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with technologies used
5. **Education & Certifications** - Academic background and certifications
6. **Experience & Involvement** - Professional experience and activities
7. **Contact** - Contact form and social links

## 🎯 Customization

### Colors

Colors can be modified in `tailwind.config.js`:

```javascript
colors: {
  'dark-blue': '#00004d',
  'accent-blue': '#00d4ff',
  'accent-green': '#39ff14',
}
```

### Content

Edit the components in the `src/components/` folder to update the content.

## 📧 Contact Form Configuration (EmailJS)

The contact form uses EmailJS to send emails. To enable it:

1. **Create an EmailJS account**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account (200 emails/month)

2. **Set up an email service**:
   - In the EmailJS dashboard, go to "Email Services"
   - Add a service (Gmail, Outlook, etc.)
   - Note your `Service ID`

3. **Create a template**:
   - Go to "Email Templates"
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message
   - Note your `Template ID`

4. **Get the public key**:
   - Go to "Account" > "General"
   - Copy your `Public Key`

5. **Configure environment variables**:

   **For local development**: Create a `.env` file at the root of the project:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   **For Vercel (deployment)**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Go to **Settings** > **Environment Variables**
   - Add the following three variables:
     - `VITE_EMAILJS_SERVICE_ID` = your_service_id
     - `VITE_EMAILJS_TEMPLATE_ID` = your_template_id
     - `VITE_EMAILJS_PUBLIC_KEY` = your_public_key
   - **Important**: Select all environments (Production, Preview, Development)
   - Click **Save**
   - **Redeploy your project** for the variables to take effect

6. **Restart the development server** after creating the `.env` file (for local development)

## 📝 Notes

- GitHub links for projects can be added in the `Projects.jsx` component
- Animations can be adjusted via Tailwind CSS classes

## 📄 License

This project is a personal portfolio.

## 👤 Author

**Ziad Yousfi**
- Email: yousfiziadpro@gmail.com
- LinkedIn: [ziadyousfi](https://www.linkedin.com/in/ziadyousfi/)
- GitHub: [Ziad-Yousfi](https://github.com/Ziad-Yousfi)

---

Developed with ❤️ using React and Tailwind CSS
