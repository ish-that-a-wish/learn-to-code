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

// Function to update the gradient based on mouse position
function updateGradient(event) {
  // Get the mouse position relative to the viewport
  const x = event.clientX;
  const y = event.clientY;

  // Convert mouse position to percentage (0-100%)
  const xPercentage = (x / window.innerWidth) * 100;
  const yPercentage = (y / window.innerHeight) * 100;

  // Set the background gradient to follow the mouse position
  document.body.style.background = `linear-gradient(45deg, rgba(125, 213, 203, 1) ${xPercentage}%, rgba(44, 166, 164, 1) ${yPercentage}%)`;
}

// Event listener to track mouse movement
document.addEventListener('mousemove', updateGradient);
