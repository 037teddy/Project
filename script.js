// Sample data structure for CAT marks
const catMarks = {
    science: [
        { student: "John Doe", course: "Physics", cat1: 25, cat2: 28 },
        { student: "Jane Smith", course: "Chemistry", cat1: 27, cat2: 26 },
        { student: "Mike Johnson", course: "Biology", cat1: 24, cat2: 29 }
    ],
    arts: [
        { student: "Sarah Wilson", course: "History", cat1: 26, cat2: 27 },
        { student: "Tom Brown", course: "Literature", cat1: 28, cat2: 25 },
        { student: "Emma Davis", course: "Psychology", cat1: 29, cat2: 28 }
    ],
    business: [
        { student: "Alex Turner", course: "Marketing", cat1: 27, cat2: 26 },
        { student: "Lisa Anderson", course: "Finance", cat1: 25, cat2: 28 },
        { student: "Chris Martin", course: "Economics", cat1: 26, cat2: 27 }
    ],
    api: [
        { student: "David Clark", course: "Programming", cat1: 28, cat2: 29 },
        { student: "Rachel Green", course: "Database", cat1: 27, cat2: 26 },
        { student: "Kevin White", course: "Networking", cat1: 25, cat2: 28 }
    ],
    education: [
        { student: "Mary Johnson", course: "Educational Psychology", cat1: 26, cat2: 27 },
        { student: "Paul Wilson", course: "Teaching Methods", cat1: 28, cat2: 26 },
        { student: "Susan Brown", course: "Curriculum Development", cat1: 27, cat2: 29 }
    ]
};

// Define CAT codes for each faculty
const facultyCATCodes = {
    science: [
        // First Year - First Semester
        { code: 'CMT 100', name: 'Physics for Computer Science' },
        { code: 'CMT 102', name: 'Fundamental of Computing' },
        { code: 'CMT 104', name: 'Entrepreneurship' },
        { code: 'CMT 106', name: 'Elements of Accounting' },
        { code: 'CMT 110', name: 'Programming Methodology' },
        { code: 'MAT 104', name: 'Elements of Linear Algebra' },
        
        // First Year - Second Semester
        { code: 'CMT 101', name: 'Hardware and Software Maintenance' },
        { code: 'CMT 107', name: 'Computer Networks' },
        { code: 'CMT 109', name: 'Database Systems' },
        { code: 'MAT 111', name: 'Discrete Mathematics' },
        { code: 'CMT 108', name: 'Introduction to Web Development' },
        
        // Second Year - First Semester
        { code: 'CMT 201', name: 'Logic Circuits' },
        { code: 'CMT 203', name: 'Introduction to System Administration' },
        { code: 'CMT 205', name: 'Computer Architecture' },
        { code: 'CMT 210', name: 'Object Oriented Programming I' },
        { code: 'CMT 212', name: 'Cloud Computing Essentials' },
        { code: 'MAT 200', name: 'Integral Calculus' },
        
        // Second Year - Second Semester
        { code: 'CMT 206', name: 'Operating Systems' },
        { code: 'CMT 208', name: 'Introduction to Artificial Intelligence' },
        { code: 'CMT 209', name: 'Web Development' },
        { code: 'CMT 211', name: 'Object Oriented Programming II' },
        { code: 'MAT 262', name: 'Probability & Statistics' },
        
        // Third Year - First Semester
        { code: 'CMT 304', name: 'Data Structures and Algorithms' },
        { code: 'CMT 307', name: '.NET Programming' },
        { code: 'CMT 308', name: 'Distributed Systems' },
        { code: 'CMT 310', name: 'Object Oriented System Analysis and Design' },
        { code: 'CMT 311', name: 'Fundamentals of Software Engineering' },
        
        // Fourth Year - Advanced Units
        { code: 'CMT 408', name: 'Software Project Management' },
        { code: 'CMT 429', name: 'Introduction to Data Science' },
        { code: 'CMT 436', name: 'Security and Privacy for Big Data' },
        { code: 'CMT 438', name: 'Ethical Hacking' }
    ],
    arts: [
        { code: 'ENG 101', name: 'English Literature' },
        { code: 'HIS 100', name: 'History' },
        { code: 'SOC 101', name: 'Sociology' }
    ],
    business: [
        { code: 'BUS 101', name: 'Business Management' },
        { code: 'ACC 100', name: 'Accounting Basics' },
        { code: 'ECO 101', name: 'Economics' }
    ],
    api: [
        { code: 'API 101', name: 'API Fundamentals' },
        { code: 'API 102', name: 'Advanced API' },
        { code: 'API 103', name: 'API Integration' }
    ],
    education: [
        { code: 'EDU 101', name: 'Education Basics' },
        { code: 'EDU 102', name: 'Teaching Methods' },
        { code: 'EDU 103', name: 'Curriculum Development' }
    ]
};

// Sample CATs data structure
const unitCATs = {
    'CMT 100': [
        { name: 'CAT', date: '2024-01-15', type: 'Theory' }
    ],
    // Add similar structure for other units
};

// Function to create view button
function createViewButton(catCode) {
    const button = document.createElement('button');
    button.className = 'view-btn';
    button.innerHTML = '<span>View CAT</span>';
    button.addEventListener('click', () => {
        showCATsModal(catCode);
    });
    return button;
}

// Function to show CATs modal
function showCATsModal(unitCode) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h3>${unitCode} - Available CAT</h3>
        <button class="close-modal">&times;</button>
    `;

    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    // Get CATs for this unit (or use sample data if not available)
    const cats = unitCATs[unitCode] || [
        { name: 'CAT', date: '2024-01-15', type: 'Theory' }
    ];

    // Create CATs list
    const catsList = document.createElement('div');
    catsList.className = 'cats-list';
    cats.forEach(cat => {
        const catItem = document.createElement('div');
        catItem.className = 'cat-item';
        catItem.innerHTML = `
            <div class="cat-info">
                <h4>${cat.name}</h4>
                <p>Type: ${cat.type}</p>
                <p>Date: ${cat.date}</p>
            </div>
            <button class="download-cat-btn" onclick="downloadCAT('${unitCode}', '${cat.name}')">
                Download
            </button>
        `;
        catsList.appendChild(catItem);
    });

    modalBody.appendChild(catsList);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalOverlay.appendChild(modalContent);

    // Add close functionality
    modalOverlay.querySelector('.close-modal').addEventListener('click', () => {
        modalOverlay.remove();
    });

    // Close on outside click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.remove();
        }
    });

    document.body.appendChild(modalOverlay);
}

// Function to handle CAT download
function downloadCAT(unitCode, catName) {
    alert(`Downloading ${catName} for ${unitCode}`);
    // Implement actual download functionality here
}

// Function to display CAT codes for selected faculty
function displayCATCodes(faculty) {
    const selectedFacultyElement = document.getElementById('selected-faculty');
    const marksTableElement = document.getElementById('marks-table');
    
    selectedFacultyElement.textContent = `${faculty.charAt(0).toUpperCase() + faculty.slice(1)} Faculty CAT Codes`;
    
    // Clear previous content
    marksTableElement.innerHTML = '';
    
    // Create table
    const table = document.createElement('table');
    table.className = 'cat-table';
    
    // Create table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>CAT Code</th>
            <th>Course Name</th>
            <th>Action</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    facultyCATCodes[faculty].forEach(cat => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cat.code}</td>
            <td>${cat.name}</td>
            <td></td>
        `;
        const viewCell = tr.querySelector('td:last-child');
        viewCell.appendChild(createViewButton(cat.code));
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    marksTableElement.appendChild(table);
}

// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkTheme();
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            enableDarkTheme();
            localStorage.setItem('theme', 'dark');
        } else {
            enableLightTheme();
            localStorage.setItem('theme', 'light');
        }
    });

    function enableDarkTheme() {
        root.style.setProperty('--cuea-light-red', '#1a1a1a');
        root.style.setProperty('--cuea-red', '#990000');
        root.style.setProperty('--cuea-dark-red', '#660000');
        document.body.style.color = '#ffffff';
        document.querySelector('#marks-display').style.backgroundColor = '#2d2d2d';
        document.querySelector('#marks-display').style.color = '#ffffff';
        const tables = document.querySelectorAll('.cat-table');
        tables.forEach(table => {
            table.style.backgroundColor = '#2d2d2d';
            table.style.color = '#ffffff';
        });
    }

    function enableLightTheme() {
        root.style.setProperty('--cuea-light-red', '#ffebee');
        root.style.setProperty('--cuea-red', '#8B0000');
        root.style.setProperty('--cuea-dark-red', '#660000');
        document.body.style.color = '#000000';
        document.querySelector('#marks-display').style.backgroundColor = '#ffffff';
        document.querySelector('#marks-display').style.color = '#000000';
        const tables = document.querySelectorAll('.cat-table');
        tables.forEach(table => {
            table.style.backgroundColor = '#ffffff';
            table.style.color = '#000000';
        });
    }

    // Search and Filter Functionality
    const searchInput = document.getElementById('searchInput');
    let currentFaculty = null;
    let currentYear = 'all';
    let showSemesters = false;
    let sortBy = 'code';
    let sortDirection = 'asc';

    // Initialize year filters
    function initializeYearFilters() {
        // Update the quick filters HTML
        document.querySelector('.quick-filters').innerHTML = `
            <button class="filter-btn active" data-year="all">All Years</button>
            <button class="filter-btn" data-year="1">Year 1</button>
            <button class="filter-btn" data-year="2">Year 2</button>
            <button class="filter-btn" data-year="3">Year 3</button>
            <button class="filter-btn" data-year="4">Year 4</button>
        `;

        // Attach event listeners to the new buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentYear = btn.dataset.year;
                if (currentFaculty) {
                    displayFilteredCATCodes(currentFaculty);
                }
            });
        });
    }

    // Initialize year filters immediately
    initializeYearFilters();

    searchInput.addEventListener('input', () => {
        if (currentFaculty) {
            displayFilteredCATCodes(currentFaculty);
        }
    });

    function getYearFromCode(code) {
        const number = parseInt(code.match(/\d+/)[0]);
        if (number >= 400) return '4';
        if (number >= 300) return '3';
        if (number >= 200) return '2';
        return '1';
    }

    function displayFilteredCATCodes(faculty) {
        const searchTerm = searchInput.value.toLowerCase();
        let filteredCodes = facultyCATCodes[faculty];

        // Apply search filter
        if (searchTerm) {
            filteredCodes = filteredCodes.filter(cat => 
                cat.code.toLowerCase().includes(searchTerm) ||
                cat.name.toLowerCase().includes(searchTerm)
            );
        }

        // Apply year filter
        if (currentYear !== 'all') {
            filteredCodes = filteredCodes.filter(cat => getYearFromCode(cat.code) === currentYear);
        }

        // Group by year and semester
        const groupedCodes = groupCodesByYear(filteredCodes);
        displayGroupedCATCodes(groupedCodes);

        // Show toast with results
        showToast(`Found ${filteredCodes.length} matching units`);
    }

    function groupCodesByYear(codes) {
        const grouped = {};
        codes.forEach(code => {
            const year = getYearFromCode(code.code);
            if (!grouped[year]) grouped[year] = [];
            grouped[year].push(code);
        });
        return grouped;
    }

    function displayGroupedCATCodes(groupedCodes) {
        const marksTableElement = document.getElementById('marks-table');
        marksTableElement.innerHTML = '';

        const table = document.createElement('table');
        table.className = 'cat-table';
        
        // Create table header
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>CAT Code</th>
                <th>Course Name</th>
                <th>Action</th>
            </tr>
        `;
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        
        Object.keys(groupedCodes).sort().forEach(year => {
            // Add year header
            const yearHeader = document.createElement('tr');
            yearHeader.className = 'year-header';
            yearHeader.innerHTML = `<td colspan="3">Year ${year}</td>`;
            tbody.appendChild(yearHeader);

            // Add courses for this year
            groupedCodes[year].forEach(cat => {
                const tr = document.createElement('tr');
                tr.className = `semester-group semester-${cat.code.includes('2') ? '2' : '1'}`;
                tr.innerHTML = `
                    <td>${cat.code}</td>
                    <td>${cat.name}</td>
                    <td></td>
                `;
                const viewCell = tr.querySelector('td:last-child');
                viewCell.appendChild(createViewButton(cat.code));
                tbody.appendChild(tr);
            });
        });

        table.appendChild(tbody);
        marksTableElement.appendChild(table);
    }

    // Toast Notification
    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = toast.querySelector('.toast-message');
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Update faculty click handler
    document.querySelectorAll('.faculty-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.faculty-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            currentFaculty = button.dataset.faculty;
            displayFilteredCATCodes(currentFaculty);
        });
    });
});