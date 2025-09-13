// Dummy data for the website
const dummyData = {
    skills: [
        'JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 
        'MongoDB', 'Express.js', 'Git', 'AWS', 'Docker'
    ],
    projects: [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'E-Commerce Demo'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            technologies: ['Vue.js', 'Firebase', 'Socket.io', 'CSS3'],
            image: 'Task Manager Demo'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.',
            technologies: ['JavaScript', 'Chart.js', 'API', 'Bootstrap'],
            image: 'Weather App Demo'
        },
        {
            id: 4,
            title: 'Blog CMS',
            description: 'A content management system for bloggers with markdown support, user roles, comments system, and SEO optimization.',
            technologies: ['PHP', 'MySQL', 'Laravel', 'Redis'],
            image: 'CMS Demo'
        }
    ],
    testimonials: [
        {
            name: 'Sarah Johnson',
            company: 'Tech Solutions Inc.',
            message: 'John delivered exceptional work on our web application. His attention to detail and technical expertise exceeded our expectations.'
        },
        {
            name: 'Mike Chen',
            company: 'Digital Marketing Pro',
            message: 'Working with John was a pleasure. He transformed our ideas into a beautiful, functional website that drives real results.'
        }
    ]
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    loadSkills();
    loadProjects();
    setupEventListeners();
    console.log('Website initialized with dummy data');
}

// Load skills into the DOM
function loadSkills() {
    const skillList = document.getElementById('skillList');
    if (!skillList) return;
    
    skillList.innerHTML = '';
    dummyData.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillTag.addEventListener('click', () => {
            showAlert(`You clicked on ${skill} skill!`);
        });
        skillList.appendChild(skillTag);
    });
}

// Load projects into the DOM
function loadProjects() {
    const projectGrid = document.getElementById('projectGrid');
    if (!projectGrid) return;
    
    projectGrid.innerHTML = '';
    dummyData.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => showProjectDetails(project);
    
    card.innerHTML = `
        <div class="project-image">${project.image}</div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect for header
    window.addEventListener('scroll', handleScroll);
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Simulate form submission with dummy response
    setTimeout(() => {
        showAlert(`Thank you ${data.name}! Your message has been received. We'll get back to you soon.`);
        e.target.reset();
    }, 1000);
    
    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1000);
    
    console.log('Contact form submitted with data:', data);
}

// Handle scroll events
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#1a252f';
    } else {
        header.style.backgroundColor = '#2c3e50';
    }
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Show project details
function showProjectDetails(project) {
    const details = `
        Project: ${project.title}
        
        Description: ${project.description}
        
        Technologies: ${project.technologies.join(', ')}
        
        This is dummy data for demonstration purposes.
    `;
    showAlert(details);
}

// Show alert function
function showAlert(message) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.innerHTML = `
        <div>${message}</div>
        <button onclick="this.parentElement.remove()" style="
            background: none; 
            border: none; 
            color: white; 
            float: right; 
            font-size: 20px; 
            cursor: pointer;
            margin-left: 10px;
        ">×</button>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Generate random dummy data functions
function generateRandomProject() {
    const titles = ['AI Assistant', 'Mobile Game', 'Data Visualization', 'Social Platform'];
    const descriptions = [
        'An innovative project solving real-world problems',
        'A cutting-edge application with modern features',
        'A user-friendly solution for everyday challenges',
        'A scalable platform for growing businesses'
    ];
    const techStacks = [
        ['React', 'TypeScript', 'GraphQL'],
        ['Flutter', 'Dart', 'Firebase'],
        ['D3.js', 'Python', 'Pandas'],
        ['Next.js', 'PostgreSQL', 'Redis']
    ];
    
    const randomIndex = Math.floor(Math.random() * titles.length);
    
    return {
        id: Date.now(),
        title: titles[randomIndex],
        description: descriptions[randomIndex],
        technologies: techStacks[randomIndex],
        image: `${titles[randomIndex]} Demo`
    };
}

// Add interactive features
function addRandomProject() {
    const newProject = generateRandomProject();
    dummyData.projects.push(newProject);
    loadProjects();
    showAlert(`New project "${newProject.title}" added!`);
}

// Simulate loading data with animation
function simulateDataLoad() {
    showAlert('Loading new data...');
    
    setTimeout(() => {
        // Refresh all data
        loadSkills();
        loadProjects();
        showAlert('Data refreshed successfully!');
    }, 2000);
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        dummyData,
        loadSkills,
        loadProjects,
        showAlert,
        generateRandomProject
    };
}

// Add some interactive functionality to demonstrate dummy data
document.addEventListener('keydown', function(e) {
    // Press 'R' key to refresh data
    if (e.key.toLowerCase() === 'r' && e.ctrlKey) {
        e.preventDefault();
        simulateDataLoad();
    }
    
    // Press 'P' key to add random project
    if (e.key.toLowerCase() === 'p' && e.ctrlKey) {
        e.preventDefault();
        addRandomProject();
    }
});

console.log('Script loaded successfully with dummy data:', dummyData);