# Himanshu Gairola | Professional Student Portfolio Website
**Designed for Recruiters, HR Professionals, and Engineering Teams**

A modern, minimalist, corporate-standard portfolio website tailored specifically for a **second-year B.Tech undergraduate student seeking web development internships and entry-level opportunities**.

Built exclusively with pure **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**—with zero external frameworks, dependencies, or bloated libraries.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                  # Semantic, accessible HTML5 structure
├── css/
│   └── style.css               # Corporate design system, responsive styles, animations
├── js/
│   └── script.js               # Mobile nav, scroll spy, filtering, form validation
├── assets/
│   ├── profile-placeholder.svg # High-contrast corporate profile avatar placeholder
│   └── resume.pdf              # Valid placeholder PDF with resume replacement guide
└── README.md                   # Comprehensive setup and customization documentation
```

---

## 🎨 Design System & Palette

- **Primary Navy (`#14243A`)**: Headings, dark accents, footer, and structural borders.
- **Accent Blue (`#3569A8`)**: Interactive buttons, active links, category kickers, and focus indicators.
- **Slate Gray (`#64748B`)**: Secondary descriptive text and metadata.
- **Light Slate Background (`#F8FAFC`)**: Clean, corporate canvas that reduces eye strain.
- **Pure White (`#FFFFFF`)**: Clean card surfaces and content elevation.
- **Typography**: Clean hierarchy using `Inter` with system sans-serif fallback.

---

## 🚀 How to Run the Website Locally

You can run this website on any operating system without installing package managers or build tools.

### Option 1: Direct File Launch (Fastest)
1. Navigate to the project folder.
2. Double-click `index.html` (or right-click -> **Open with Google Chrome / Microsoft Edge / Firefox**).
3. The portfolio will run immediately in your browser.

### Option 2: VS Code Live Server (Recommended for Development)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey from the VS Code Extensions Marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/` with automatic page reloads on every file save.

### Option 3: Python Built-in HTTP Server
If you have Python installed:
```bash
# In the project directory:
python -m http.server 8000
```
Open your browser and navigate to `http://localhost:8000`.

### Option 4: Node.js `npx serve`
If you have Node.js installed:
```bash
npx serve .
```

---

## ✏️ Step-by-Step Customization Guide

All placeholders in `index.html` are clearly marked with brackets like `[Your Name]` for rapid search-and-replace.

### 1. Personal Identity & Headings
Open `index.html` and update:
- `<title>[Your Name] | Aspiring Web Developer & B.Tech Student</title>` (Line 9)
- Meta tags description and author (Lines 10-12)
- Logo initials and name: `<span class="logo-initials">YN</span>` and `[Your Name].dev` (Lines 37-38)
- Hero heading: `Hi, I'm <span class="highlight">[Your Name]</span>` (Line 89)

### 2. About Me & Candidate Summary
In `index.html` (`#about` section):
- Replace `[Your Branch / e.g. Computer Science and Engineering]` with your department.
- Replace `[Your College Name]` with your university or institute.
- Update the **Candidate Summary** table with your city, preferred work mode, and current semester.

### 3. Technical Skills
In `index.html` (`#skills` section):
- The skills are divided into **"Core Frontend Technologies"** (learned & applied) and **"Current Learning Roadmap"** (actively studying).
- Add or modify skills based on your actual experience. 
- *Pro-tip for HR:* Keep the honest distinction between mastered skills and currently learning technologies—recruiters respect self-awareness and honesty.

### 4. Projects
In `index.html` (`#projects` section):
- Three practical student project templates are provided:
  1. **Personal Portfolio Website**
  2. **Responsive Task Manager App**
  3. **Weather Forecast App (Public API)**
- Update the `project-title`, `project-problem`, `project-desc`, and feature bullet points.
- Replace the repository links `https://github.com/[your-username]/...` with your actual GitHub repository URLs.
- Update the live demo links with your hosted GitHub Pages or Vercel URLs.

### 5. Education & Coursework
In `index.html` (`#education` section):
- Update your expected graduation year (e.g., `2023 – 2027`).
- Update your college name and branch.
- Add your current CGPA or percentage (or omit if your university only reports grades at final graduation).
- Update the listed coursework to match the subjects completed in semesters 1 through 4 (e.g., Data Structures, OOP, DBMS).

### 6. Email, LinkedIn, and GitHub Links
Search for these placeholders in `index.html` (appears in Hero, Contact, and Footer):
- `[your.email@example.com]` -> Your professional email address
- `[your-username]` -> Your GitHub profile handle
- `[your-username]` -> Your LinkedIn vanity URL

### 7. Profile Image
To use your real photograph instead of the SVG placeholder:
1. Crop a clear, well-lit, professional headshot (square aspect ratio, at least 400x400 pixels).
2. Save it as `assets/profile.jpg` or `assets/profile.png`.
3. In `index.html` around line 130, update:
   ```html
   <img src="assets/profile.jpg" alt="[Your Name] - Professional Profile" class="profile-image" width="180" height="180">
   ```

---

## 📄 Adding Your Actual Resume PDF

The download buttons in the Hero section and Resume section are already configured to download `assets/resume.pdf`.

1. Prepare your clean, 1-page resume (export as PDF).
2. Name the file **`resume.pdf`**.
3. Place it in the `assets/` folder, replacing the placeholder `assets/resume.pdf`.
4. Test the download button by opening the website in your browser and clicking **"Download Resume"**.

---

## 📬 Connecting the Contact Form to Real Email Delivery

The contact form currently has complete **client-side JavaScript validation** (validating name length, email format, subject, and message length) and provides accessible visual feedback.

Because this is a static website, to have submissions delivered directly to your personal email without maintaining a backend server, you can use any free form handler:

### Option A: Formspree (Free & Takes 2 Minutes)
1. Go to [formspree.io](https://formspree.io) and sign up for a free account.
2. Click **"+ New Form"** and enter your email address.
3. Copy your unique Formspree endpoint (looks like `https://formspree.io/f/xbjnqpyz`).
4. In `index.html`, update the `<form>` tag:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. In `js/script.js`, you can either let standard form submission post to Formspree, or use `fetch()` to post as JSON for an asynchronous experience.

### Option B: Web3Forms (No Registration Required)
1. Go to [web3forms.com](https://web3forms.com) and get an access key sent to your email.
2. Add a hidden input to the form:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Set form action to `https://api.web3forms.com/submit`.

---

## 🌐 How to Publish to GitHub Pages (Free Hosting)

GitHub Pages provides free SSL-secured hosting directly from your repository.

### Step 1: Initialize Git and Commit
Open PowerShell or your terminal in this portfolio directory:
```bash
git init
git add .
git commit -m "feat: complete initial portfolio release"
```

### Step 2: Create a Repository on GitHub
1. Log in to your GitHub account at [github.com](https://github.com).
2. Click the **"+"** icon in the upper right -> **"New repository"**.
3. Name your repository (e.g., `portfolio` or `<your-username>.github.io`).
4. Set visibility to **Public**.
5. Do *not* check "Initialize with README" (you already have one).
6. Click **"Create repository"**.

### Step 3: Push Your Code to GitHub
```bash
# Rename branch to main
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# Push your code
git push -u origin main
```

### Step 4: Activate GitHub Pages
1. On your GitHub repository page, click the **Settings** tab.
2. In the left navigation sidebar, click **Pages** (under the "Code and automation" section).
3. Under **"Build and deployment"**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait 1–2 minutes. Refresh the page to see your live URL:
   ```text
   https://<your-username>.github.io/<your-repo-name>/
   ```

---

## ✅ Final Launch & Verification Checklist

Before sharing your portfolio link with recruiters or adding it to your resume:

- [ ] **Personal Information**: Replaced all `[Your Name]`, `[Your Branch]`, and `[Your College]` placeholders.
- [ ] **Contact Links**: Tested `mailto:` link, LinkedIn link, and GitHub repository links in a new tab.
- [ ] **Resume PDF**: Dropped your real `resume.pdf` into `assets/` and verified that clicking "Download Resume" downloads the correct document.
- [ ] **Form Validation**: Tested submitting the contact form with empty fields, invalid emails, and short messages to verify error states.
- [ ] **Mobile Responsiveness**: Inspected in Chrome DevTools under iPhone, iPad, and desktop viewports (`Ctrl+Shift+M` or `F12`). Checked that the hamburger menu opens and closes smoothly.
- [ ] **Accessibility**: Navigated the entire website using only the `Tab` and `Shift+Tab` keys, testing visible focus rings and skip-to-content functionality.
- [ ] **Reduced Motion**: Checked that smooth scrolling respects user operating system motion reduction preferences.
- [ ] **Cross-Browser Check**: Verified appearance and performance on Chrome, Edge, and Firefox.

---

## 📜 License
This template is open-source and free to adapt for personal and educational portfolio use.

