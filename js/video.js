var video;

// Initialize the video element when the page loads
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    
    // Get the video element
    video = document.querySelector("#player1");
    
    // Turn off autoplay and turn off looping
    video.autoplay = false;
    video.loop = false;
    
    // Display initial volume information
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    
    // Update the volume information first
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
    
    // Then play the video
    video.play();
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

// Slow Down Button
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down Video");
    
    // Slow the current video speed by 10%
    video.playbackRate *= 0.9;
    
    // Log the new speed to the console
    console.log("New speed: " + video.playbackRate);
});

// Speed Up Button
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up Video");
    
    // Increase the speed proportionally to the slow down
    video.playbackRate /= 0.9;
    
    // Log the new speed to the console
    console.log("New speed: " + video.playbackRate);
});

// Skip Ahead Button
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    
    // Advance the video by 10 seconds
    video.currentTime += 10;
    
    // If the video length has been exceeded, go back to the start
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    
    // Log the current location of the video
    console.log("Current location: " + video.currentTime);
});

// Mute Button
document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute Video");
    
    // Toggle mute state
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
    
    // Update volume display when mute status changes
    document.querySelector("#volume").textContent = video.muted ? "0%" : Math.round(video.volume * 100) + "%";
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
    console.log("Change Volume");
    
    // Set the video volume based on the slider value
    video.volume = this.value / 100;
    
    // Update the volume information
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

// Old School Button (Styled)
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Apply Old School Style");
    
    // Add the oldSchool class to the video element
    video.classList.add("oldSchool");
});

// Original Button
document.querySelector("#orig").addEventListener("click", function() {
    console.log("Remove Old School Style");
    
    // Remove the oldSchool class from the video element
    video.classList.remove("oldSchool");
});
