const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
function navigateTo(url) {
    window.location.href = url;
}
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('real-time');
    const dateElement = document.getElementById('real-date');
    
    const options = { hour: 'numeric', minute: 'numeric' }; // Remove 'second' from options
    const timeString = now.toLocaleTimeString('en-US', options);
    const dateString = now.toDateString();
    
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

setInterval(updateTime, 1000); // Update time every second
