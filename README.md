# Portfolio Ziad Yousfi

Portfolio web moderne, responsive et entièrement fonctionnel pour Ziad Yousfi, étudiant en Ingénierie en Informatique et Réseaux.

## 🚀 Technologies Utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build moderne et rapide
- **Tailwind CSS** - Framework CSS utilitaire pour le design
- **React Icons** - Bibliothèque d'icônes

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. Clonez le repository ou téléchargez les fichiers
2. Installez les dépendances :

```bash
npm install
```

## 🏃 Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:5173`

## 📦 Build pour Production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 📁 Structure du Projet

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

## 🎨 Caractéristiques

- ✅ Design moderne et professionnel
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec scroll smooth
- ✅ Animations subtiles au survol
- ✅ Formulaire de contact fonctionnel
- ✅ Accessibilité (ARIA labels)
- ✅ SEO optimisé

## 📱 Sections du Portfolio

1. **Accueil (Hero)** - Présentation principale avec boutons d'action
2. **À Propos** - Profil et coordonnées
3. **Compétences** - Compétences techniques organisées par catégories
4. **Projets** - Projets phares avec technologies utilisées
5. **Formation & Certifications** - Parcours académique et certifications
6. **Expérience & Engagement** - Expérience professionnelle et activités
7. **Contact** - Formulaire de contact et liens sociaux

## 🎯 Personnalisation

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.js` :

```javascript
colors: {
  'dark-blue': '#00004d',
  'accent-blue': '#00d4ff',
  'accent-green': '#39ff14',
}
```

### Contenu

Modifiez les composants dans le dossier `src/components/` pour mettre à jour le contenu.

## 📧 Configuration du Formulaire de Contact (EmailJS)

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

5. **Créer un fichier `.env`** à la racine du projet :
   ```
   VITE_EMAILJS_SERVICE_ID=votre_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_public_key
   ```

6. **Redémarrer le serveur de développement** après avoir créé le fichier `.env`

## 📝 Notes

- Les liens GitHub des projets peuvent être ajoutés dans le composant `Projects.jsx`
- Les animations peuvent être ajustées dans les classes Tailwind CSS

## 📄 Licence

Ce projet est un portfolio personnel.

## 👤 Auteur

**Ziad Yousfi**
- Email: yousfiziadpro@gmail.com
- LinkedIn: [ziadyousfi](https://www.linkedin.com/in/ziadyousfi/)
- GitHub: [Ziad-Yousfi](https://github.com/Ziad-Yousfi)

---

Développé avec ❤️ en utilisant React et Tailwind CSS

