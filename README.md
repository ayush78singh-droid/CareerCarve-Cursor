# CareerCarve - AI Powered Resume Builder

A modern, responsive mobile web application designed for 6.7" Android devices that helps users build AI-powered resumes with an intuitive, accessible interface.

## 🚀 Features

### Core Functionality
- **AI-Powered Resume Building**: Intelligent resume creation with AI assistance
- **Project Showcase**: Display and manage your professional projects
- **Expert Connect**: Connect with industry professionals and mentors
- **Resume Discussions**: Get feedback and tips from the community
- **Daily Insights**: Receive personalized career tips and insights
- **Trending Topics**: Stay updated with industry trends and podcasts

### Design & UX
- **Scroll-Free Design**: Optimized for 6.7" Android screens without scrolling
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Responsive Layout**: Adapts perfectly to different screen sizes
- **Interactive Cards**: Clickable feature cards with hover effects
- **Bottom Navigation**: Intuitive navigation with icon-based tabs

### Accessibility Features
- **Screen Reader Support**: Full ARIA labels and semantic HTML
- **Keyboard Navigation**: Complete keyboard accessibility
- **High Contrast Mode**: Support for high contrast preferences
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators and proper tab order
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🎨 Design System

### Typography
- **Primary Font**: SF Pro Display
- **Font Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)
- **Hierarchy**: 
  - Welcome Text: 24px/700
  - Card Titles: 16px/600
  - Card Descriptions: 14px/400
  - Modal Headers: 20px/700

### Color Palette
- **Primary Gradient**: `#667eea` to `#764ba2`
- **Text Colors**: `#1a1a1a` (primary), `#666` (secondary)
- **Background**: White with subtle shadows
- **Interactive Elements**: Gradient backgrounds with hover states

### Components
- **Cards**: Rounded corners (16px), subtle shadows, hover animations
- **Buttons**: Gradient backgrounds, proper touch targets (48px minimum)
- **Icons**: Font Awesome 6.0, consistent sizing and spacing
- **Navigation**: Icon-only bottom navigation with active states

## 📱 Layout Structure

```
┌─────────────────────────────────┐
│ Header (Logo + User/Chat Icons) │
├─────────────────────────────────┤
│ Welcome Section (Gradient)      │
├─────────────────────────────────┤
│ Cards Grid (2x3 Layout)        │
│ ┌─────────┐ ┌─────────┐       │
│ │ Project │ │ Resume  │       │
│ │  Card   │ │  Card   │       │
│ └─────────┘ └─────────┘       │
│ ┌─────────┐ ┌─────────┐       │
│ │ Expert  │ │  Daily  │       │
│ │  Card   │ │  Card   │       │
│ └─────────┘ └─────────┘       │
│ ┌─────────┐ ┌─────────┐       │
│ │ Mentor  │ │Trending │       │
│ │  Card   │ │  Card   │       │
│ └─────────┘ └─────────┘       │
├─────────────────────────────────┤
│ Bottom Navigation (5 Icons)    │
└─────────────────────────────────┘
```

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icon library (v6.0.0)

### Key Technologies
- **CSS Grid**: Responsive card layout
- **Flexbox**: Header and navigation layouts
- **CSS Custom Properties**: Consistent theming
- **CSS Animations**: Smooth transitions and hover effects

## 📦 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Quick Start
1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Test** on a 6.7" device or use browser dev tools

### Development Setup
```bash
# If using a local server (optional)
python -m http.server 8000
# or
npx serve .
```

### File Structure
```
CareerCarve/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎯 Usage

### Navigation
- **Header Icons**: User profile and chat functionality
- **Feature Cards**: Click any card to see "Coming Soon" modal
- **Bottom Navigation**: 
  - 🏠 Homepage (active)
  - 📅 Schedule
  - 🔔 Notifications
  - 💡 Learning Hub
  - 🎤 Podcasts

### Accessibility
- **Keyboard Navigation**: Use Tab to navigate, Enter to activate
- **Screen Readers**: Full ARIA support with descriptive labels
- **High Contrast**: Automatically adapts to system preferences
- **Reduced Motion**: Respects user motion preferences

## 🔧 Customization

### Modifying Colors
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text colors */
color: #1a1a1a; /* Primary text */
color: #666;     /* Secondary text */
```

### Adding New Cards
```html
<button class="card" onclick="showComingSoon()" role="gridcell" aria-label="New Feature - Description">
    <div class="card-icon">
        <i class="fas fa-icon-name" aria-hidden="true"></i>
    </div>
    <h3 class="card-title">New Feature</h3>
    <p class="card-description">Description</p>
</button>
```

### Responsive Breakpoints
```css
/* 6.7" screen adjustments */
@media (max-height: 800px) {
    /* Reduced spacing and font sizes */
}
```

## 🚀 Performance Features

### Optimizations
- **Minimal Dependencies**: Only Font Awesome for icons
- **Efficient CSS**: Optimized selectors and properties
- **Smooth Animations**: Hardware-accelerated transitions
- **Lazy Loading**: Images and resources load efficiently

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Works without JavaScript (basic functionality)

## 🎨 Design Principles

### Mobile-First
- Designed specifically for 6.7" Android devices
- Touch-friendly interface with proper touch targets
- Optimized for portrait orientation

### Accessibility-First
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Comprehensive ARIA support
- Keyboard navigation support

### User Experience
- Intuitive navigation patterns
- Clear visual hierarchy
- Consistent interaction patterns
- Smooth animations and feedback

## 🔮 Future Enhancements

### Planned Features
- [ ] User authentication system
- [ ] Resume builder functionality
- [ ] Real-time chat integration
- [ ] Push notifications
- [ ] Offline support
- [ ] Dark mode theme
- [ ] Multi-language support

### Technical Improvements
- [ ] PWA (Progressive Web App) capabilities
- [ ] Service worker for caching
- [ ] Advanced animations
- [ ] Performance monitoring
- [ ] Analytics integration

## 🤝 Contributing

### Development Guidelines
1. **Accessibility**: Maintain WCAG 2.1 AA compliance
2. **Performance**: Keep bundle size minimal
3. **Design**: Follow established design system
4. **Testing**: Test on actual mobile devices

### Code Style
- **HTML**: Semantic markup with proper ARIA attributes
- **CSS**: BEM methodology for class naming
- **JavaScript**: ES6+ with clear function names

## 📄 License

This project is created for CareerCarve and is proprietary software.

## 📞 Support

For questions or support regarding this project, please contact the development team.

---

**Built with ❤️ for CareerCarve** 