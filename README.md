# 🎮 HangMan - Cyber Terminal Edition

<div align="center">

![Hangman Game](https://img.shields.io/badge/Game-Hangman-brightgreen?style=for-the-badge&logo=gamepad)
![Built with](https://img.shields.io/badge/Built%20with-HTML%2FCSS%2FJS-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A sleek, cyber-themed Hangman game with glassmorphism design and a terminal aesthetic.**

[Play Now](#-quick-start) • [Features](#-features) • [Demo](#-demo) • [Contributing](#-contributing)

</div>

---

## 🚀 Features

✨ **Glassmorphism UI** - Modern, frosted-glass aesthetic with smooth animations  
🎯 **Terminal Boot Sequence** - Immersive automated startup sequence for that authentic hacker vibe  
📱 **Fully Responsive** - Looks amazing on desktop, tablet, and mobile devices  
🎨 **High-Visibility Design** - ASCII gallows with bold brackets for maximum clarity  
⚡ **Seamless Word Loading** - Automatic fallback dictionary system with GitHub Pages integration  
🌐 **Zero Dependencies** - Pure HTML, CSS, and JavaScript — no bloat, just pure performance  
♿ **Accessible** - Built with accessibility in mind for all users

---

## 🎮 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/DaRk77NesS/HangMan.git
cd HangMan
```

### 2. Open in Browser
Simply open `index.html` in your favorite web browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### 3. Play!
- Start guessing letters to reveal the hidden word
- You have limited attempts before the hangman is complete
- Try to beat your high score! 🏆

---

## 🎨 Design Highlights

### Glassmorphism Terminal UI
Our custom-built interface features:
- **Smooth rounded corners** for a modern aesthetic
- **Frosted glass effect** with backdrop blur
- **High-contrast text** against semi-transparent backgrounds
- **Glowing accents** for interactive elements

### ASCII Gallows
A responsive ASCII art gallows that progressively appears as you make wrong guesses:
```
    ┌─────┐
    │     │
    O     │
   /|\    │
   / \    │
         ─┘
```

### Terminal Boot Sequence
Experience an authentic hacker terminal with:
- Typewriter-style text animation
- System boot messages
- Matrix-style cascading effects
- Smooth transition into the game

---

## 📊 Tech Stack

| Technology | Usage | Percentage |
|-----------|-------|-----------|
| **JavaScript** | Game Logic & Interactivity | 47.1% |
| **CSS** | Styling & Animations | 33.1% |
| **HTML** | Markup & Structure | 19.8% |

---

## 🔧 How It Works

### Word Dictionary System
The game features an intelligent dictionary loading system:

1. **Primary Source**: Words are pulled from a repository-hosted word list via GitHub Pages
2. **Fallback Mechanism**: If the network request fails, a built-in fallback dictionary ensures the game still works
3. **Seamless Sync**: The fallback dictionary stays synchronized with the main repository

### Game Logic
- Random word selection from the loaded dictionary
- Letter-by-letter guess tracking
- Visual feedback for correct/incorrect guesses
- Win/lose detection with game state management
- Score tracking and statistics

---

## 🎯 How to Play

1. **Guess a Letter**: Click a letter or use your keyboard to guess
2. **Correct Guess**: The letter appears in the word
3. **Wrong Guess**: The hangman appears piece by piece
4. **Win**: Reveal the entire word before the hangman is complete
5. **Lose**: The hangman is fully drawn or you run out of guesses
6. **Play Again**: Start a new game and try to beat your score!

---

## 🌟 Features in Detail

### Responsive Design
```
📱 Mobile    | Tablet    | 💻 Desktop
Optimized   | Flexible  | Full Experience
Experience  | Layout    | 
```

The UI adapts beautifully to any screen size without compromising the gaming experience.

### Smart Word Loader
- Attempts to load words from GitHub Pages
- Falls back to built-in dictionary if needed
- Ensures consistent gameplay across all scenarios

### Interactive Feedback
- Letter selection animations
- Real-time gallows drawing
- Score and statistics tracking
- Win/lose state transitions

---

## 🚀 Performance

- **Zero External Dependencies**: No libraries needed, just pure vanilla JavaScript
- **Lightweight**: Minimal file sizes for fast loading
- **Smooth Animations**: CSS transitions for buttery-smooth gameplay
- **Optimized Assets**: Carefully crafted for performance across all devices

---

## 🎓 Getting Started for Developers

### File Structure
```
HangMan/
├── index.html          # Main game file
├── styles.css          # Styling and animations
├── script.js           # Game logic and interactivity
├── README.md           # This file
└── words.json          # (Optional) Fallback word dictionary
```

### Customization

**Change the difficulty:**
Edit the `ATTEMPTS` constant in `script.js`:
```javascript
const ATTEMPTS = 6; // Increase for easier, decrease for harder
```

**Modify the theme:**
Update the CSS variables in `styles.css` for custom colors and effects.

---

## 🤝 Contributing

We'd love your contributions! Whether it's bug fixes, new features, or design improvements:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ideas for Contributions
- 🎨 New themes and color schemes
- 🌍 Multi-language support
- 🎵 Sound effects and background music
- 📊 Leaderboard system
- 🎯 Difficulty levels
- ⚙️ Additional customization options

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Inspired by the classic word-guessing game
- Built with a passion for cyberpunk aesthetics
- Crafted for gamers who appreciate minimalist design

---

## 📞 Support & Feedback

Have questions or feedback? We'd love to hear from you!

- 🐛 **Found a bug?** Open an [Issue](https://github.com/DaRk77NesS/HangMan/issues)
- 💡 **Have an idea?** Start a [Discussion](https://github.com/DaRk77NesS/HangMan/discussions)
- 📧 **Want to chat?** Reach out on GitHub

---

<div align="center">

### 🎮 Ready to play?

[⬆ Back to Top](#-hangman---cyber-terminal-edition)

**Made with ❤️ by [DaRk77NesS](https://github.com/DaRk77NesS)**

</div>