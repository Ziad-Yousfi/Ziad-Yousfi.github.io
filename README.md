# Portfolio Ziad Yousfi

> 🌐 **Language / Langue** — [🇬🇧 English](#english-version) · [🇫🇷 Français](#version-française)

---

<a name="english-version"></a>

## 🇬🇧 English Version

> [Jump to French version ⬇️](#version-française)

Modern, responsive, and fully functional web portfolio for Ziad Yousfi, a student in Computer Engineering and Networks.

### 🚀 Technologies Used

- **React** – JavaScript library for building user interfaces
- **Vite** – Modern and fast build tool
- **Tailwind CSS** – Utility-first CSS framework for styling
- **React Icons** – Icon library

### 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### 🛠️ Installation

1. Clone the repository or download the files
2. Install the dependencies:

```bash
npm install
```

### 🏃 Getting Started

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 📦 Production Build

To create an optimised production build:

```bash
npm run build
```

The optimised files will be generated in the `dist/` folder.

To preview the production build:

```bash
npm run preview
```

### 📁 Project Structure

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

### 🎨 Features

- ✅ Modern and professional design
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Subtle hover animations
- ✅ Functional contact form
- ✅ Accessibility (ARIA labels)
- ✅ SEO optimised

### 📱 Portfolio Sections

1. **Home (Hero)** – Main introduction with action buttons
2. **About** – Profile and contact details
3. **Skills** – Technical skills organised by category
4. **Projects** – Featured projects with technologies used
5. **Education & Certifications** – Academic background and certifications
6. **Experience & Involvement** – Professional experience and activities
7. **Contact** – Contact form and social links

### 🎯 Customisation

#### Colours

Colours can be changed in `tailwind.config.js`:

```javascript
colors: {
  'dark-blue': '#00004d',
  'accent-blue': '#00d4ff',
  'accent-green': '#39ff14',
}
```

#### Content

Edit the components in the `src/components/` folder to update the content.

### 📧 Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails. To enable it:

1. **Create an EmailJS account**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account (200 emails/month)

2. **Set up an email service**:
   - In the EmailJS dashboard, go to "Email Services"
   - Add a service (Gmail, Outlook, etc.)
   - Note your `Service ID`

3. **Create a template**:
   - Go to "Email Templates"
   - Create a new template with these variables:
     - `{{from_name}}` – Sender's name
     - `{{from_email}}` – Sender's email
     - `{{message}}` – Message
   - Note your `Template ID`

4. **Get the public key**:
   - Go to "Account" > "General"
   - Copy your `Public Key`

5. **Configure environment variables**:

   **For local development**: Create a `.env` file at the project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   **For Vercel (deployment)**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Go to **Settings** > **Environment Variables**
   - Add the three variables:
     - `VITE_EMAILJS_SERVICE_ID` = your_service_id
     - `VITE_EMAILJS_TEMPLATE_ID` = your_template_id
     - `VITE_EMAILJS_PUBLIC_KEY` = your_public_key
   - **Important**: Select all environments (Production, Preview, Development)
   - Click **Save**
   - **Redeploy your project** for the variables to take effect

6. **Restart the development server** after creating the `.env` file (for local development)

### 📝 Notes

- GitHub links for projects can be added in the `Projects.jsx` component
- Animations can be adjusted via Tailwind CSS classes

### 📄 Licence

This project is a personal portfolio.

### 👤 Author

**Ziad Yousfi**
- Email: yousfiziadpro@gmail.com
- LinkedIn: [ziadyousfi](https://www.linkedin.com/in/ziadyousfi/)
- GitHub: [Ziad-Yousfi](https://github.com/Ziad-Yousfi)

---

Built with ❤️ using React and Tailwind CSS

[⬆️ Back to top](#portfolio-ziad-yousfi) · [🇫🇷 Lire en français](#version-française)

---

<a name="version-française"></a>

## 🇫🇷 Version Française

> [Revenir à la version anglaise ⬆️](#english-version)

Portfolio web moderne, responsive et entièrement fonctionnel pour Ziad Yousfi, étudiant en Ingénierie en Informatique et Réseaux.

### 🚀 Technologies Utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build moderne et rapide
- **Tailwind CSS** - Framework CSS utilitaire pour le design
- **React Icons** - Bibliothèque d'icônes

### 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### 🛠️ Installation

1. Clonez le repository ou téléchargez les fichiers
2. Installez les dépendances :

```bash
npm install
```

### 🏃 Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:5173`

### 📦 Build pour Production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

Pour prévisualiser la version de production :

```bash
npm run preview
```

### 📁 Structure du Projet

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

### 🎨 Caractéristiques

- ✅ Design moderne et professionnel
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec scroll smooth
- ✅ Animations subtiles au survol
- ✅ Formulaire de contact fonctionnel
- ✅ Accessibilité (ARIA labels)
- ✅ SEO optimisé

### 📱 Sections du Portfolio

1. **Accueil (Hero)** - Présentation principale avec boutons d'action
2. **À Propos** - Profil et coordonnées
3. **Compétences** - Compétences techniques organisées par catégories
4. **Projets** - Projets phares avec technologies utilisées
5. **Formation & Certifications** - Parcours académique et certifications
6. **Expérience & Engagement** - Expérience professionnelle et activités
7. **Contact** - Formulaire de contact et liens sociaux

### 🎯 Personnalisation

#### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.js` :

```javascript
colors: {
  'dark-blue': '#00004d',
  'accent-blue': '#00d4ff',
  'accent-green': '#39ff14',
}
```

#### Contenu

Modifiez les composants dans le dossier `src/components/` pour mettre à jour le contenu.

### 📧 Configuration du Formulaire de Contact (EmailJS)

Le formulaire de contact utilise EmailJS pour envoyer les emails. Pour l'activer :

1. **Créer un compte EmailJS** : Allez sur [https://www.emailjs.com/](https://www.emailjs.com/) et créez un compte gratuit (200 emails/mois)

2. **Configurer un service email** :
   - Dans le dashboard EmailJS, allez dans "Email Services"
   - Ajoutez un service (Gmail, Outlook, etc.)
   - Notez votre `Service ID`

3. **Créer un template** :
   - Allez dans "Email Templates"
   - Créez un nouveau template avec ces variables :
     - `{{from_name}}` - Nom de l'expéditeur
     - `{{from_email}}` - Email de l'expéditeur
     - `{{message}}` - Message
   - Notez votre `Template ID`

4. **Obtenir la clé publique** :
   - Allez dans "Account" > "General"
   - Copiez votre `Public Key`

5. **Configurer les variables d'environnement** :

   **Pour le développement local** : Créer un fichier `.env` à la racine du projet :
   ```
   VITE_EMAILJS_SERVICE_ID=votre_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_public_key
   ```

   **Pour Vercel (déploiement)** :
   - Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
   - Sélectionnez votre projet
   - Allez dans **Settings** > **Environment Variables**
   - Ajoutez les trois variables suivantes :
     - `VITE_EMAILJS_SERVICE_ID` = votre_service_id
     - `VITE_EMAILJS_TEMPLATE_ID` = votre_template_id
     - `VITE_EMAILJS_PUBLIC_KEY` = votre_public_key
   - **Important** : Sélectionnez tous les environnements (Production, Preview, Development)
   - Cliquez sur **Save**
   - **Redéployez votre projet** pour que les variables soient prises en compte

6. **Redémarrer le serveur de développement** après avoir créé le fichier `.env` (pour le développement local)

### 📝 Notes

- Les liens GitHub des projets peuvent être ajoutés dans le composant `Projects.jsx`
- Les animations peuvent être ajustées dans les classes Tailwind CSS

### 📄 Licence

Ce projet est un portfolio personnel.

### 👤 Auteur

**Ziad Yousfi**
- Email: yousfiziadpro@gmail.com
- LinkedIn: [ziadyousfi](https://www.linkedin.com/in/ziadyousfi/)
- GitHub: [Ziad-Yousfi](https://github.com/Ziad-Yousfi)

---

Développé avec ❤️ en utilisant React et Tailwind CSS

[⬆️ Haut de page](#portfolio-ziad-yousfi) · [🇬🇧 Read in English](#english-version)
