# Ruan's Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: Hover effects and micro-interactions
- **Accessibility**: Built with accessibility in mind
- **SEO Optimized**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── header.tsx
│   ├── intro.tsx
│   ├── project.tsx
│   ├── projects.tsx
│   ├── scroll-to-top.tsx
│   ├── section-divider.tsx
│   ├── section-heading.tsx
│   ├── skills.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── data.ts
└── public/
    ├── images/
    └── Software_Engineer_Ruan.pdf
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update your personal information in `lib/data.ts`:
- Personal details
- Experience history
- Project information
- Skills list
- Social media links

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`

### Images
- Replace images in the `public/` directory
- Update image references in `lib/data.ts`

## 🎨 Sections

1. **Intro**: Hero section with personal introduction
2. **About**: Personal background and interests
3. **Skills**: Technical skills and technologies
4. **Experience**: Work history and achievements
5. **Projects**: Portfolio of projects with descriptions
6. **Contact**: Contact form and social links

## 🌟 Features in Detail

### Dark Mode Toggle
- Persistent theme preference
- Smooth transitions between themes
- Accessible toggle button

### Smooth Navigation
- Active section highlighting
- Smooth scroll behavior
- Keyboard navigation support

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## 📱 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size
- Fast loading times

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: ruan@example.com
- **LinkedIn**: [Ruan Queiroz](https://linkedin.com/in/ruanqueiroz)
- **GitHub**: [@ruanql](https://github.com/ruanql)

---

Made with ❤️ by Ruan Queiroz Leite
