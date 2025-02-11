function showTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Add leading zero to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Create the time string
    const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    // Update the element
    document.getElementById('currentTime').innerHTML = timeString;
}

// Initial call to show the time
showTime();

// Update the time every second
setInterval(function () {
    showTime();
}, 1000);

// Variables to store the mouse position
let mouseX = 0;
let mouseY = 0;

// Set a smoothing factor for the gradient movement
const smoothness = 0.1; // Higher value for slower movement

// Function to update the gradient based on mouse position
function updateGradient() {
  // Calculate the percentage of the mouse's position on the screen
  const xPercentage = (mouseX / window.innerWidth) * 100;
  const yPercentage = (mouseY / window.innerHeight) * 100;

  // Update the background gradient based on the mouse's position
  document.body.style.background = `linear-gradient(45deg, rgba(125, 213, 203, 1) ${xPercentage}%, rgba(44, 166, 164, 1) ${yPercentage}%, rgba(255, 111, 97, 1) ${100 - xPercentage}%, rgba(209, 196, 233, 1) ${100 - yPercentage}%)`;
}

// Function to track mouse movement
function trackMouse(event) {
  // Store the mouse position relative to the viewport
  mouseX = event.clientX;
  mouseY = event.clientY;
}

// Event listener for mouse movement
document.addEventListener('mousemove', trackMouse);

// Smooth the gradient update every frame
function animate() {
  updateGradient();
  requestAnimationFrame(animate); // Keep updating the gradient smoothly
}

// Start the animation loop
animate();
