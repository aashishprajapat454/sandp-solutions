// Select the button and the body
const themeButton = document.getElementById('theme');
const body = document.body;

// Function to toggle theme
function toggleTheme() {
    // Toggle the 'dark-theme' class on the body
    body.classList.toggle('dark-theme');
    
    // Change the button text based on the current theme
    if (body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Light';
    } else {
        themeButton.textContent = 'Dark';
    }
}

// Add click event listener to the button
themeButton.addEventListener('click', toggleTheme);
;
