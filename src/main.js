
import './style.css';

// Main application
const app = document.querySelector("#app");

app.innerHTML = `
  <!-- NAVBAR -->
  <header class="sticky top-0 z-40 border-b border-white/10 bg-[#090b17]/90 backdrop-blur-xl">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="#home" class="logo text-xl font-bold tracking-tight">
        Ra<span class="text-cyan-300">Fi</span>Q
      </a>

      <div class="hidden items-center gap-4 text-sm text-slate-300 md:flex">
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#skills">Skills</a>
        <a class="nav-link" href="#current-work">Current Work</a>
        <a class="nav-link" href="#projects">Projects</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>

      <button
        id="menu-toggle"
        class="rounded-lg border border-white/15 px-3 py-2 md:hidden"
        aria-expanded="false"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation"
        type="button"
      >☰</button>
    </nav>

    <!-- MOBILE MENU -->
    <div
      id="mobile-menu"
      class="hidden flex-col gap-1 border-t border-white/10 px-5 py-3 md:hidden"
    >
      <a class="nav-link py-2" href="#about">About</a>
      <a class="nav-link py-2" href="#skills">Skills</a>
      <a class="nav-link py-2" href="#current-work">Work</a>
      <a class="nav-link py-2" href="#projects">Projects</a>
      <a class="nav-link py-2" href="#contact">Contact</a>
    </div>
  </header>

  <main>
    <!-- HERO BANNER -->
    <section id="home" class="hero-banner">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-text">
          <span class="hero-badge">
            <span class="hero-dot"></span>
            CSE STUDENT · DEVELOPER IN PROGRESS
          </span>

          <p class="hero-greeting">HELLO, I'M</p>

          <h1 class="hero-name">
            Mohammed Rafiqul <span>Islam</span>
          </h1>

          <h2 class="hero-title">
            Aspiring Software Developer
          </h2>

          <p class="hero-description">
            I'm passionate about learning new technologies,
            building projects, and improving my programming skills.
            Currently exploring web development.
          </p>

          <div class="hero-buttons">
            <a
              href="/resume.pdf"
              class="hero-btn hero-btn-primary"
              id="resume-button"
              download
            >
              Download Resume ↓
            </a>

            <a href="#contact" class="hero-btn hero-btn-outline">
              Contact Me
            </a>
          </div>

          <div class="hero-social-text">
            <span class="hero-line"></span>
            LEARN · BUILD · GROW
          </div>
        </div>

        <div class="hero-image-frame">
          <img
            src="/pic.png"
            alt="Md. Rafiqul Islam"
            class="hero-profile-image"
          />
        </div>
      </div>

      <a href="#about" class="hero-scroll">
        <span></span>
        Scroll to explore
      </a>
    </section>

    <!-- ABOUT ME SECTION -->
    <section id="about" class="section about-section">
      <div class="about-container">

        <div class="about-heading">
          <span class="section-label">GET TO KNOW ME</span>

          <h2 class="section-title">
            About <span class="gradient-text">Me</span>
          </h2>
        </div>

        <div class="about-grid">
          <div class="about-content">
            <p>
              Hi, I'm Rafiqul Islam, a Computer Science and Engineering
              student at Port City International University.
            </p>

            <p>
              I'm passionate about programming, web development, and
              exploring new technologies. I enjoy learning step by step
              and applying my knowledge through practical projects.
            </p>

            <p>
              Currently, I'm strengthening my programming fundamentals
              and developing my skills in modern web technologies.
              My goal is to keep learning, build useful projects, and
              grow as a software developer.
            </p>
          </div>

          <!-- EDUCATION -->
          <div class="about-info">
            <article class="about-info-card panel">
              <div class="about-icon">🎓</div>

              <div class="about-info-content">
                <span class="journey-category">EDUCATION</span>

                <h4>B.Sc. in Computer Science &amp; Engineering</h4>

                <p class="journey-place">
                  Port City International University
                </p>

                <p class="journey-description">
                  Studying computer science and developing a foundation
                  in programming, software development, and computing.
                </p>

                <span class="journey-status">
                  Currently Studying
                </span>
              </div>
            </article>

            <!-- SKILL DEVELOPMENT -->
            <article class="about-info-card panel">
              <div class="about-icon">💻</div>

              <div class="about-info-content">
                <span class="journey-category">SKILL DEVELOPMENT</span>

                <h3>Exploring Web Development</h3>

                <p class="journey-place">
                  Learning Through Practice
                </p>

                <p class="journey-description">
                  Practicing HTML, CSS, JavaScript, TypeScript, and React
                  while building projects and improving my development skills.
                </p>

                <span class="journey-status">
                  Learning &amp; Practicing
                </span>
              </div>
            </article>

            <!-- FUTURE DIRECTION -->
            <article class="about-info-card panel">
              <div class="about-icon">🚀</div>

              <div class="about-info-content">
                <span class="journey-category">FUTURE DIRECTION</span>

                <h3>Growing as a Software Developer</h3>

                <p class="journey-place">
                  My Next Chapter
                </p>

                <p class="journey-description">
                  My goal is to strengthen my fundamentals, build more
                  meaningful projects, and explore new areas of technology.
                </p>

                <span class="journey-status">
                  Future Goal
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section
      id="skills"
      class="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div class="mx-auto w-full max-w-6xl">

        <!-- HEADING -->
        <div class="mx-auto mb-10 max-w-2xl text-center">
          <p class="mb-3 text-xs font-bold uppercase tracking-[3px] text-violet-400">
            Skills &amp; Technologies
          </p>

          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            My Technical <span class="text-violet-400">Arsenal</span>
          </h2>

          <p class="text-sm leading-7 text-gray-400">
            The languages, frameworks, and tools I use to turn ideas into projects
            and grow as a developer.
          </p>
        </div>

        <!-- SKILLS GRID -->
        <div class="grid grid-cols-1 gap-4 rounded-[22px] border border-violet-400/20 bg-slate-900/20 p-3 sm:grid-cols-2 sm:gap-5 sm:p-6">

          <!-- PROGRAMMING LANGUAGES -->
          <article class="min-w-0 rounded-2xl border border-violet-400/15 bg-violet-400/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.06] sm:p-6">
            <h3 class="mb-5 text-base font-semibold leading-relaxed text-violet-50">
              👨‍💻 Programming Languages
            </h3>

            <div class="flex flex-wrap items-center gap-3">
              <img src="https://img.shields.io/badge/C-%2300599C.svg?style=plastic&logo=c&logoColor=white" alt="C" />
              <img src="https://img.shields.io/badge/C%2B%2B-%2300599C.svg?style=plastic&logo=c%2B%2B&logoColor=white" alt="C++" />
              <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
              <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white" alt="TypeScript" />
            </div>
          </article>

          <!-- WEB DEVELOPMENT -->
          <article class="min-w-0 rounded-2xl border border-violet-400/15 bg-violet-400/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.06] sm:p-6">
            <h3 class="mb-5 text-base font-semibold leading-relaxed text-violet-50">
              🌐 Web Development
            </h3>

            <div class="flex flex-wrap items-center gap-3">
              <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white" alt="HTML5" />
              <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=plastic&logo=css3&logoColor=white" alt="CSS3" />
              <img src="https://img.shields.io/badge/React-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB" alt="React" />
              <img src="https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=plastic&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
              <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=plastic&logo=vite&logoColor=white" alt="Vite" />
            </div>
          </article>

          <!-- DATABASE -->
          <article class="min-w-0 rounded-2xl border border-violet-400/15 bg-violet-400/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.06] sm:p-6">
            <h3 class="mb-5 text-base font-semibold leading-relaxed text-violet-50">
              🗄️ Database
            </h3>

            <div class="flex flex-wrap items-center gap-3">
              <img src="https://img.shields.io/badge/Oracle-F80000?style=plastic&logo=oracle&logoColor=white" alt="Oracle" />
            </div>
          </article>

          <!-- TOOLS & PLATFORMS -->
          <article class="min-w-0 rounded-2xl border border-violet-400/15 bg-violet-400/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.06] sm:p-6">
            <h3 class="mb-5 text-base font-semibold leading-relaxed text-violet-50">
              🛠️ Tools &amp; Platforms
            </h3>

            <div class="flex flex-wrap items-center gap-3">
              <img src="https://img.shields.io/badge/Git-%23F05033.svg?style=plastic&logo=git&logoColor=white" alt="Git" />
              <img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=plastic&logo=github&logoColor=white" alt="GitHub" />
              <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=plastic&logo=Canva&logoColor=white" alt="Canva" />
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- CURRENT WORK SECTION -->
    <section
      id="current-work"
      class="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div class="mx-auto w-full max-w-6xl">

        <!-- HEADING -->
        <div class="mx-auto mb-10 max-w-2xl text-center">
          <p class="mb-3 text-xs font-bold uppercase tracking-[3px] text-violet-400">
            CURRENT ACTIVITIES
          </p>

          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What I'm <span class="text-violet-400">Working On</span>
          </h2>

          <p class="text-sm leading-7 text-gray-400">
            Projects, research, and initiatives I'm currently working on
            or preparing to start.
          </p>
        </div>

        <!-- WORK CARDS -->
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          <!-- PCIU COMPUTER CLUB CAMPAIGN -->
          <article class="group flex min-w-0 flex-col rounded-2xl border border-violet-400/20 bg-slate-900/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50">
            <div class="mb-5 flex items-center justify-between gap-3">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-2xl">
                📣
              </div>

              <span class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                In Progress
              </span>
            </div>

            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
              Club &amp; Leadership
            </p>

            <h3 class="mb-3 text-xl font-bold leading-snug text-white">
              PCIU Computer Club Campaign
            </h3>

            <p class="mb-6 flex-1 text-sm leading-7 text-gray-400">
              Working on my Executive Member campaign, presenting my vision,
              commitments, and plans for the PCIU Computer Club.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">Leadership</span>
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">Campaign</span>
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">PCIU</span>
            </div>
          </article>

          <!-- STUDENT BURNOUT RESEARCH -->
          <article class="group flex min-w-0 flex-col rounded-2xl border border-violet-400/20 bg-slate-900/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50">
            <div class="mb-5 flex items-center justify-between gap-3">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-2xl">
                🧠
              </div>

              <span class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                In Progress
              </span>
            </div>

            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              Academic Research
            </p>

            <h3 class="mb-3 text-xl font-bold leading-snug text-white">
              Student Burnout Research
            </h3>

            <p class="mb-6 flex-1 text-sm leading-7 text-gray-400">
              A comparative evaluation of machine learning models for student
              burnout prediction based on AI dependency and career anxiety.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">Machine Learning</span>
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">Research</span>
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">Python</span>
            </div>
          </article>

          <!-- PHARMACARE -->
          <article class="group flex min-w-0 flex-col rounded-2xl border border-violet-400/20 bg-slate-900/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50">
            <div class="mb-5 flex items-center justify-between gap-3">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-2xl">
                💊
              </div>

              <span class="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                <span class="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                Planning
              </span>
            </div>

            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              Database Project
            </p>

            <h3 class="mb-3 text-xl font-bold leading-snug text-white">
              PharmaCare
            </h3>

            <p class="mb-6 flex-1 text-sm leading-7 text-gray-400">
              Preparing a pharmaceutical inventory management system for
              medicine stock, suppliers, purchases, sales, and expiry tracking.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">DBMS</span>
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">Oracle</span>
              <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300">SQL</span>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="scroll-mt-24 px-5 py-20 lg:px-8">
      <div class="mx-auto max-w-6xl">

        <!-- Heading -->
        <div class="mb-12 text-center">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            My Work & Creations
          </p>

          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Featured <span class="text-purple-400">Projects</span>
          </h2>

          <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A selection of projects I've built while learning and exploring web development.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">

          <!-- DevStack -->
          <article class="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151126] transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-950/30">

            <div class="h-52 overflow-hidden border-b border-white/10 bg-[#090b17]">
              <img
                src="/devstack.png"
                alt="DevStack project preview"
                class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div class="flex flex-1 flex-col p-6">
              <div class="mb-4 flex items-center justify-between gap-2">
                <span class="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                  Web Application
                </span>
                <span class="text-xs text-gray-500">01 / 03</span>
              </div>

              <h3 class="text-xl font-bold text-white transition group-hover:text-purple-300">
                DevStack
              </h3>

              <p class="mt-3 flex-1 text-sm leading-7 text-gray-400">
                A technology and resources platform for exploring technologies
                and managing selected technology items with a responsive interface.
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">React</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">TypeScript</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">Tailwind CSS</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">DaisyUI</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">Vite</span>
              </div>

              <div class="mt-6 flex gap-3">
                <a
                  href="https://dev-stack-teal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 rounded-lg bg-purple-600 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-purple-500"
                >
                  Live Demo 
                </a>
                <a
                  href="https://github.com/rafiqsd85/Dev-Stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 rounded-lg border border-white/15 px-3 py-3 text-center text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  GitHub 
                </a>
              </div>
            </div>
          </article>

          <!-- Vote for Ayas -->
          <article class="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151126] transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-950/30">

            <div class="h-52 overflow-hidden border-b border-white/10 bg-[#090b17]">
              <img
                src="/vote-for-ayas.png"
                alt="Vote for Ayas campaign website preview"
                class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div class="flex flex-1 flex-col p-6">
              <div class="mb-4 flex items-center justify-between gap-2">
                <span class="rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-300">
                  Campaign Website
                </span>
                <span class="text-xs text-gray-500">02 / 03</span>
              </div>

              <h3 class="text-xl font-bold text-white transition group-hover:text-purple-300">
                Vote for Ayas
              </h3>

              <p class="mt-3 flex-1 text-sm leading-7 text-gray-400">
                A responsive campaign website for Saidul Karim Ayas,
                a Vice President candidate for the PCIU Computer Club,
                highlighting his profile, experience, vision, and commitments.
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">HTML5</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">Tailwind CSS</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">JavaScript</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">Vite</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">Vercel</span>
              </div>

              <div class="mt-6 flex gap-3">
                <a
                  href="https://vote-for-ayas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 rounded-lg bg-purple-600 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-purple-500"
                >
                  Live Demo 
                </a>
                <a
                  href="https://github.com/rafiqsd85/PCC-Campaign-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 rounded-lg border border-white/15 px-3 py-3 text-center text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  GitHub 
                </a>
              </div>
            </div>
          </article>

          <!-- DevConf 2026 -->
          <article class="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151126] transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-950/30">

            <div class="h-52 overflow-hidden border-b border-white/10 bg-[#090b17]">
              <img
                src="/devconf.png"
                alt="DevConf 2026 website preview"
                class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div class="flex flex-1 flex-col p-6">
              <div class="mb-4 flex items-center justify-between gap-2">
                <span class="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Conference Website
                </span>
                <span class="text-xs text-gray-500">03 / 03</span>
              </div>

              <h3 class="text-xl font-bold text-white transition group-hover:text-purple-300">
                DevConf 2026
              </h3>

              <p class="mt-3 flex-1 text-sm leading-7 text-gray-400">
                A responsive developer conference website featuring speaker
                profiles, pricing information, an AI coding challenge,
                and registration links.
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">HTML5</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">CSS3</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">Google Fonts</span>
                <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300">Font Awesome</span>
              </div>

              <div class="mt-6 flex gap-3">
                <a
                  href="https://rafiqsd85.github.io/Dev-conf-26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 rounded-lg bg-purple-600 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-purple-500"
                >
                  Live Demo 
                </a>
                <a
                  href="https://github.com/rafiqsd85/Dev-conf-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 rounded-lg border border-white/15 px-3 py-3 text-center text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  GitHub 
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- Contact Section -->
    
    <section id="contact" class="scroll-mt-24 border-t border-white/10 bg-[#090b17] px-5 py-20 lg:px-8">
      <div class="mx-auto max-w-6xl">

        <!-- Heading -->
        <div class="mb-12 text-center">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Get In Touch
          </p>

          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Let's <span class="text-purple-400">Connect</span>
          </h2>

          <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, collaboration opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        <!-- Contact Layout -->
        <div
          id="contact-layout"
          class="mx-auto flex w-full max-w-xl flex-col items-center gap-8 transition-all duration-500"
        >

          <!-- Social Card -->
          <div
            id="contact-social-panel"
            class="w-full rounded-2xl border border-white/10 bg-[#151126] p-6 text-center transition-all duration-500 sm:p-8"
          >

            <p class="mt-3 text-sm leading-7 text-gray-400">
              Find me on social media or send me an email.
            </p>

            <!-- Social Icons -->
            <div class="mt-7 flex flex-wrap justify-center gap-4">

              <!-- Discord -->
              <a
                href="https://discord.gg/rafiq_85"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                title="Discord"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300"
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M19.7 5.3A18 18 0 0 0 15.3 4l-.5 1a16 16 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 1.3C1.5 9.4.8 13.4 1.2 17.3A18 18 0 0 0 6.6 20l1.2-2a11 11 0 0 1-1.9-.9l.5-.4a13 13 0 0 0 11.2 0l.5.4a11 11 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.5-.8-8.5-3.1-12ZM8.8 14.7c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="https://instagram.com/md_ra_fi_q"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-pink-400 hover:bg-pink-500/20 hover:text-pink-300"
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://linkedin.com/in/mdrafiqulislam2085"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-300"
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11H3.5Zm5.5 0h3.3v1.5h.1A3.6 3.6 0 0 1 15.7 8c3.5 0 4.1 2.3 4.1 5.3V20h-3.4v-5.9c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V20H9Z"/>
                </svg>
              </a>

              <!-- X -->
              <a
                href="https://x.com/Rafiqul9378"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-gray-400 hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8ZM17.8 20h1.7L7.8 3.9H6Z"/>
                </svg>
              </a>

            </div>

            <!-- Email Button -->
            <button
              id="email-me-btn"
              type="button"
              class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 font-bold text-white transition hover:bg-purple-500"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
              </svg>
              Email Me</button>

            <p class="mt-3 text-center text-xs text-gray-500">
              Click to open the contact form.
            </p>
          </div>

          <!-- Contact Form -->
          <div
            id="contact-form-panel"
            class="hidden w-full rounded-2xl border border-purple-400/20 bg-[#151126] p-6 sm:p-8"
          >
            <h3 class="text-xl font-bold text-white">
              Send a Message
            </h3>

            <p class="mt-3 text-sm leading-7 text-gray-400">
              Fill out the form to prepare your message in Gmail.
            </p>

            <form id="contact-form" class="mt-6 space-y-5">

              <div>
                <label for="contact-name" class="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  class="w-full rounded-xl border border-white/10 bg-[#090b17] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400"
                />
              </div>

              <div>
                <label for="contact-email" class="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-white/10 bg-[#090b17] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400"
                />
              </div>

              <div>
                <label for="contact-message" class="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message..."
                  class="w-full resize-y rounded-xl border border-white/10 bg-[#090b17] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full rounded-xl bg-purple-600 px-5 py-3.5 font-bold text-white transition hover:bg-purple-500"
              >
                Open Gmail 
              </button>

              <p class="text-xs leading-5 text-gray-500">
                Your email app will not send automatically. Review and send the message in Gmail.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>

  </main>
  <!-- Footer -->
<footer class="border-t border-white/10 bg-[#070611] px-5 py-7">
  <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
    <a href="#home" class="text-lg font-extrabold text-white">
       Ra<span class="text-cyan-300">Fi</span>Q
    </a>

    <p class="text-sm text-gray-500">
      © ${new Date().getFullYear()} Rafiqul Islam. Built with passion.
    </p>

    <a href="#home" class="text-sm text-purple-300 transition hover:text-cyan-300">
      Back to Top ↑
    </a>
  </div>
</footer>

`;

// MOBILE NAVIGATION
const menuButton = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after selecting a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}


const emailMeBtn = document.querySelector("#email-me-btn");
const contactFormPanel = document.querySelector("#contact-form-panel");
const contactLayout = document.querySelector("#contact-layout");
const contactSocialPanel = document.querySelector("#contact-social-panel");
const contactForm = document.querySelector("#contact-form");

if (
  emailMeBtn &&
  contactFormPanel &&
  contactLayout &&
  contactSocialPanel
) {
  emailMeBtn.addEventListener("click", () => {
    const isOpening = contactFormPanel.classList.contains("hidden");

    if (isOpening) {
      // Open form and show two cards side by side on desktop
      contactFormPanel.classList.remove("hidden");

      contactLayout.classList.remove("max-w-xl");
      contactLayout.classList.add("max-w-6xl");

      contactLayout.classList.remove("flex-col");
      contactLayout.classList.add("md:flex-row");

      contactSocialPanel.classList.remove("max-w-xl", "text-center");
      contactSocialPanel.classList.add("text-left", "md:flex-1");

      contactFormPanel.classList.add("md:flex-1");

      emailMeBtn.textContent = "Close Form ×";
    } else {
      // Close form and center social card again
      contactFormPanel.classList.add("hidden");

      contactLayout.classList.remove("max-w-6xl", "md:flex-row");
      contactLayout.classList.add("max-w-xl", "flex-col");

      contactSocialPanel.classList.remove(
        "text-left",
        "md:flex-1"
      );
      contactSocialPanel.classList.add("max-w-xl", "text-center");

      contactFormPanel.classList.remove("md:flex-1");

      emailMeBtn.innerHTML = `
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none"
          stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="m3 7 9 6 9-6"/>
        </svg>
        Email Me <span>↗</span>
      `;
    }
  });
}

// Submit form through Gmail compose
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=mdrafiqulislam9378@gmail.com` +
      `&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  });
}
