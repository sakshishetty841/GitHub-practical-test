# Sakshi Shetty — Personal Portfolio

**Full Name:** Sakshi Shetty  
**URN Number:** [Enter your URN]  
**Semester:** [Enter your semester]  
**Section:** [Enter your section]  
**Subject:** Git and GitHub  

> **Note:** Please fill in your specific **URN Number**, **Semester**, and **Section** above where indicated by the placeholders.

---

## Project Description
A modern, responsive personal developer portfolio website created using HTML5, CSS3, and vanilla JavaScript for the Git and GitHub practical examination. The project showcases personal projects in Artificial Intelligence and Machine Learning, technical skills, academic background, and an interactive contact interface developed with dedicated Git feature branches (`feature-navbar` and `feature-footer`).

## Technologies Used
- **HTML5:** Semantic document structure and accessible markup
- **CSS3:** Custom responsive layout, CSS Grid, Flexbox, smooth transitions, and dark violet theme
- **Vanilla JavaScript:** Mobile menu toggling, smooth scrolling, active section tracking on scroll, dynamic footer year, and contact form validation
- **Git & GitHub:** Distributed version control, feature branching (`feature-navbar`, `feature-footer`), 3-way merge integration into `main`, and remote repository synchronization

## Repository Link
- **GitHub Repository:** [https://github.com/sakshishetty841/GitHub-practical-test](https://github.com/sakshishetty841/GitHub-practical-test)

## Features of the Portfolio
- **Responsive Navigation Bar (`feature-navbar`):** Sticky header with brand logo, smooth-scroll navigation links, mobile hamburger menu with animated toggle, and dynamic active link highlight on scroll.
- **Hero Introduction Section:** Welcoming header introducing background in Computer Science and AI/ML with a direct call-to-action button.
- **About Me Section:** Background details, education (BTech CSE - AI & ML at Alta School of Technology, Pune), and areas of focus.
- **Technical Skills Matrix:** Structured grid categorizing proficiencies across Languages, Web Development, AI/ML & Data, Backend APIs, and Developer Tools.
- **Featured Projects Showcase:** Highlighted work including NetraDrishti (Healthcare AI), Smart City Traffic Flow Simulator, and Glowing Lily (Computer Vision & Creative Coding).
- **Interactive Contact Form:** Accessible contact form with client-side validation and immediate user feedback.
- **Professional Responsive Footer (`feature-footer`):** Multi-column footer layout with bio, quick navigation links, direct social/contact links, back-to-top shortcut, and dynamic copyright year.
- **Back-to-Top Button:** Floating scroll-to-top shortcut with smooth window scrolling.

## Project Structure
```text
sakshi_portfolio/
├── index.html     # Main HTML5 webpage structure
├── style.css      # Custom styling, dark purple theme, and media queries
├── script.js      # Interactive navigation, scroll tracking, and form logic
└── README.md      # Project documentation, practical test details, and repo link
```

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/sakshishetty841/GitHub-practical-test.git
   ```
2. Navigate into the project folder:
   ```bash
   cd GitHub-practical-test
   ```
3. Open `index.html` in any web browser, or launch a local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

## Git Branching Workflow
1. **`main`:** Production branch containing the completed, integrated portfolio.
2. **`feature-navbar`:** Feature branch where the responsive navigation bar was developed and pushed.
3. **`feature-footer`:** Feature branch where the responsive multi-column footer was developed and pushed.
4. **Merge Integration:** Both feature branches merged into `main` preserving all code and history.
