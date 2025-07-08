// Smooth scrolling for navigation links with error handling
document.addEventListener('DOMContentLoaded', function() {
    try {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
        });
    });
    } catch (error) {
    console.log('Smooth scrolling not supported, using default scrolling');
    }

    let mainObserver;
    try {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    mainObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        mainObserver.observe(el);
    });
    } catch (error) {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible');
    });
    }

    try {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
        });

        navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + current) {
            link.classList.add('active');
        }
        });
    });
    } catch (error) {
    console.log('Navigation highlighting not available');
    }

    const animateProgressBars = () => {
    try {
        const progressBars = document.querySelectorAll('.skill-progress-bar');
        progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width') || '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
        });
    } catch (error) {
        console.log('Progress bar animation not available');
    }
    };

    try {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection && 'IntersectionObserver' in window) {
        const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            animateProgressBars();
            skillsObserver.unobserve(entry.target);
            }
        });
        }, { threshold: 0.5 });

        skillsObserver.observe(skillsSection);
    } else {
        setTimeout(animateProgressBars, 1000);
    }
    } catch (error) {
    console.log('Section animations not available');
    }

    try {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('project/')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<div class="loading-spinner d-inline-block me-2"></div>Loading...';
            
            setTimeout(() => {
            this.innerHTML = originalText;
            }, 1000);
        }
        });
    });
    } catch (error) {
    console.log('Button loading animation not available');
    }

    try {
    const scrollProgressBar = document.querySelector('.scroll-progress-bar-inner');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgressBar.style.width = `${scrollPercentage}%`;
    });
    } catch (error) {
    console.log('Scroll progress bar not available.');
    }

    const timelineList = document.getElementById('timeline-list');
    try {
    if (timelineList && 'IntersectionObserver' in window) {
        const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            timelineObserver.unobserve(entry.target);
            }
        });
        }, { threshold: 0.2 });
        timelineObserver.observe(timelineList);
    }
    } catch (error) {
    console.log('Timeline animation not available.');
    }

    // --- Timeline Data & Dynamic Rendering ---
    const githubRepoBaseUrl = 'https://github.com/kulkarnishub377/Projects-manasvi/blob/main/'; // Corrected Repo URL
    
    /**
     * Parses a date string in DD/MM/YYYY or DD-MM-YYYY format.
     * @param {string} dateString - The date string to parse.
     * @returns {Date} The parsed Date object.
     */
    const parseCustomDate = (dateString) => {
    const parts = dateString.replace(/-/g, '/').split('/');
    // new Date(year, monthIndex, day)
    return new Date(parts[2], parts[1] - 1, parts[0]);
    };

    const timelineData = [
    {
        date: "08/07/2025",
        title: "Manasvi E-Learning Website: Launch & Analytics Integration",
        description: "Launched a modern e-learning platform for Manasvi Tech, featuring course modules, interactive lessons, and student progress analytics. Added project to portfolio and timeline with code analysis.",
        technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Data Analysis"],
        items: [
            { icon: "bi bi-mortarboard text-primary", text: "Created E-Learning website structure and UI" },
            { icon: "bi bi-journal-richtext text-info", text: "Integrated course modules and resources" },
            { icon: "bi bi-bar-chart-line-fill text-success", text: "Added analytics for student progress" },
            { icon: "bi bi-link-45deg text-secondary", text: "Linked project in portfolio and timeline" }
        ],
        link: "Manasvi Elerning wesite/index.html",
        featured: true
    },
    {
        date: "07/07/2025",
        title: "JavaScript Essentials: DOM Manipulation & Event Handling",
        description: "Developed interactive features using JavaScript, focusing on DOM selection, event listeners, and dynamic content updates. Implemented smooth scrolling, animated progress bars, and timeline rendering for a modern portfolio.",
        technologies: ["JavaScript", "DOM", "Events", "ES6+"],
        items: [
            { icon: "bi bi-cursor-fill text-info", text: "Implemented smooth scrolling for navigation" },
            { icon: "bi bi-lightning-charge-fill text-info", text: "Animated skill progress bars on scroll" },
            { icon: "bi bi-calendar2-range text-info", text: "Dynamically rendered timeline from data" },
            { icon: "bi bi-eye-fill text-info", text: "Used IntersectionObserver for animations" }
        ],
        link: "project/day6_07_07.html",
    },
    {
        date: "05/07/2025",
        title: "Bootstrap 5 Showcase: Components & Responsive Design",
        description: "Built a travel-themed website to demonstrate a wide array of Bootstrap 5 components, including responsive navigation, modals, carousels, and forms.",
        technologies: ["Bootstrap 5", "Responsive UI", "Component Library", "FontAwesome"],
        items: [
        { icon: "bi bi-bootstrap-fill text-primary", text: "Implemented Responsive Navbar & Navigation" },
        { icon: "bi bi-window-stack text-primary", text: "Created interactive Modals and Accordions" },
        { icon: "bi bi-card-image text-primary", text: "Designed a dynamic Carousel/Slider" },
        { icon: "bi bi-input-cursor-text text-primary", text: "Developed a comprehensive Booking Form" }
        ],
        link: "project/day5_05_07.html",
    },
    {
        date: "04-07-2025",
        title: "Interactive Flexbox Playground",
        description: "Comprehensive flexbox demonstration with live controls, dynamic property manipulation, and real-time visual feedback. Features interactive learning tools and completed successfully.",
        technologies: ["Advanced Flexbox", "JavaScript ES6+", "Interactive UI"],
        items: [
        { icon: "bi bi-fullscreen-exit text-success", text: "Built a live, interactive Flexbox container" },
        { icon: "bi bi-sliders text-success", text: "Added controls for all major Flexbox properties" },
        { icon: "bi bi-code-slash text-success", text: "Generated real-time CSS code snippets" },
        { icon: "bi bi-lightbulb-fill text-success", text: "Created a hands-on learning experience" }
        ],
        link: "project/Flexbox.html",
        featured: true
    },
    {
        date: "04/07/2025",
        title: "Advanced CSS: Variables, Animations & Positioning",
        description: "Explored modern CSS features, including custom properties (variables) for theming, keyframe animations, transitions, and advanced element positioning.",
        technologies: ["CSS Variables", "Animations", "Transitions", "Positioning"],
        items: [
        { icon: "bi bi-paint-bucket text-success", text: "Utilized CSS Variables for theming" },
        { icon: "bi bi-film text-success", text: "Created Keyframe Animations & Transitions" },
        { icon: "bi bi-layers-fill text-success", text: "Mastered Z-Index and element stacking" },
        { icon: "bi bi-aspect-ratio-fill text-success", text: "Applied advanced Positioning techniques" }
        ],
        link: "project/day4_04_07.html"
    },
    {
        date: "03/04/2025",
        title: "My Portfolio",
        description: "Modern, responsive portfolio website showcasing my development journey, skills, and projects. Features advanced CSS animations, interactive elements, and professional design.",
        technologies: ["HTML5", "Advanced CSS3", "Bootstrap 5", "JavaScript"],
        items: [
        { icon: "bi bi-person-workspace text-primary", text: "Designed a professional, modern UI/UX" },
        { icon: "bi bi-palette-fill text-primary", text: "Implemented advanced CSS animations and transitions" },
        { icon: "bi bi-git text-primary", text: "Showcased skills and a dynamic project timeline" },
        { icon: "bi bi-speedometer2 text-primary", text: "Ensured full responsiveness and performance" }
        ],
        link: "index.html",
        featured: true
    },
    {
        date: "03/07/2025",
        title: "CSS Fundamentals: The Box Model & Flexbox Layouts",
        description: "Gained a solid understanding of the CSS box model and used the Flexbox layout system to build responsive and flexible page structures.",
        technologies: ["CSS3", "Flexbox", "Box Model", "Responsive Design"],
        items: [
        { icon: "bi bi-bounding-box text-info", text: "Mastered the CSS Box Model concepts" },
        { icon: "bi bi-layout-three-columns text-info", text: "Built layouts with the Flexbox system" },
        { icon: "bi bi-distribute-horizontal text-info", text: "Used justify-content and align-items" },
        { icon: "bi bi-phone-flip text-info", text: "Created basic responsive containers" }
        ],
        link: "project/day3_03_07.html"
    },
    {
        date: "02/07/2025",
        title: "Advanced HTML: Structuring Data with Lists, Tables & Forms",
        description: "Learned to structure complex data using various list types, created well-formed data tables, and built comprehensive user input forms.",
        technologies: ["HTML5", "Tables", "Forms", "Data-Entry"],
        items: [
        { icon: "bi bi-list-ol text-warning", text: "Created Ordered & Unordered Lists" },
        { icon: "bi bi-table text-warning", text: "Structured data using HTML Tables" },
        { icon: "bi bi-input-cursor-text text-warning", text: "Designed comprehensive Forms" },
        { icon: "bi bi-check2-square text-warning", text: "Implemented various Input Types" }
        ],
        link: "project/day2_02_07.html"
    },
    {
        date: "01/07/2025",
        title: "HTML Fundamentals & Semantic Structure",
        description: "Mastered the basics of HTML, focusing on semantic tags for better structure and accessibility, text formatting, and embedding external content.",
        technologies: ["HTML5", "Semantic HTML", "CSS"],
        items: [
        { icon: "bi bi-filetype-html text-danger", text: "Learned core HTML document structure" },
        { icon: "bi bi-braces-asterisk text-danger", text: "Used Semantic Tags (header, nav, etc.)" },
        { icon: "bi bi-type-bold text-danger", text: "Applied various text formatting tags" },
        { icon: "bi bi-box-arrow-up-right text-danger", text: "Created hyperlinks and embedded iframes" }
        ],
        link: "project/day1_01_07.html"
    }
    ].sort((a, b) => parseCustomDate(b.date) - parseCustomDate(a.date));

    // --- Add Load More / Show Less Buttons if not present ---
    let loadMoreBtn = document.getElementById('timeline-loadmore-btn');
    let showLessBtn = document.getElementById('timeline-showless-btn');
    const initialItems = 3;
    const incrementItems = 3;
    let itemsLoaded = 0;

    // Always create and insert Load More / Show Less buttons after timelineList
    if (timelineList) {
        // Remove any existing button container to avoid duplicates
        const oldBtnContainer = document.querySelector('.timeline-btn-container');
        if (oldBtnContainer) oldBtnContainer.remove();

        // Create button container
        const btnContainer = document.createElement('div');
        btnContainer.className = 'timeline-btn-container text-center my-4';

        // Create Load More button
        loadMoreBtn = document.createElement('button');
        loadMoreBtn.id = 'timeline-loadmore-btn';
        loadMoreBtn.className = 'btn btn-outline-primary mx-2';
        loadMoreBtn.textContent = 'Load More';

        // Create Show Less button
        showLessBtn = document.createElement('button');
        showLessBtn.id = 'timeline-showless-btn';
        showLessBtn.className = 'btn btn-outline-secondary mx-2';
        showLessBtn.textContent = 'Show Less';
        showLessBtn.style.display = 'none';

        btnContainer.appendChild(loadMoreBtn);
        btnContainer.appendChild(showLessBtn);
        timelineList.parentNode.insertBefore(btnContainer, timelineList.nextSibling);
    }

    function renderTimeline(isInitial = false) {
        if (!timelineList) return;

        const fragment = document.createDocumentFragment();
        const startIndex = isInitial ? 0 : itemsLoaded;
        const itemsToLoad = isInitial ? initialItems : incrementItems;
        const endIndex = Math.min(startIndex + itemsToLoad, timelineData.length);

        for (let i = startIndex; i < endIndex; i++) {
            const item = timelineData[i];
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item', 'fade-in');

            const techBadges = item.technologies?.map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join(' ') || '';
            const itemsList = item.items ? `<ul class="list-unstyled mt-3 timeline-sub-items">${item.items.map(subItem => `<li><i class="${subItem.icon} me-2"></i>${subItem.text}</li>`).join('')}</ul>` : '';
            const featuredBadge = item.featured ? '<span class="badge bg-warning text-dark ms-2">Featured</span>' : '';

            timelineItem.innerHTML = `
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${item.date}</span>
                    <h5 class="timeline-title">${item.title}${featuredBadge}</h5>
                    <p>${item.description}</p>
                    ${itemsList}
                    <div class="timeline-tech mt-3">${techBadges}</div>
                    <div class="timeline-btns mt-3">
                        <a href="${item.link}" target="_blank" class="btn btn-sm btn-outline-primary"><i class="bi bi-display-fill me-1"></i> View Project</a>
                        <a href="${githubRepoBaseUrl}${item.link}" target="_blank" class="btn btn-sm btn-outline-secondary"><i class="bi bi-github me-1"></i> View Code</a>
                    </div>
                </div>
            `;
            fragment.appendChild(timelineItem);
        }

        timelineList.appendChild(fragment);
        itemsLoaded = endIndex;

        // Update button visibility
        if (loadMoreBtn) {
            loadMoreBtn.style.display = itemsLoaded >= timelineData.length ? 'none' : 'inline-block';
        }
        if (showLessBtn) {
            showLessBtn.style.display = itemsLoaded > initialItems ? 'inline-block' : 'none';
        }

        // Animate new items
        const newItems = timelineList.querySelectorAll('.timeline-item.fade-in:not(.visible)');
        newItems.forEach((item) => {
            if (mainObserver) {
                mainObserver.observe(item);
            } else {
                item.classList.add('visible');
            }
        });
    }

    function resetTimeline() {
        if (!timelineList) return;
        timelineList.innerHTML = '';
        itemsLoaded = 0;
        renderTimeline(true);
    }

    if (timelineList) {
        // Initial render
        renderTimeline(true);

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => renderTimeline(false));
        }
        if (showLessBtn) {
            showLessBtn.addEventListener('click', resetTimeline);
        }
    }
});

window.addEventListener('error', function(e) {
    console.log('JavaScript error occurred, but page should still work', e);
});
