// Select all video elements in the "Most Watched" section
const videoCards = document.querySelectorAll('.video-card video');

// Function to stop all videos
function stopAllVideos() {
    videoCards.forEach((video) => {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset the video to the start
    });
}

// Add event listeners to each video card for hover effects
videoCards.forEach((video) => {
    const videoParent = video.parentElement; // Get the parent container (video-card)

    // Play video on mouseover
    videoParent.addEventListener('mouseover', () => {
        stopAllVideos(); // Stop all other videos
        video.play(); // Play the hovered video
    });

    // Stop video on mouseleave
    videoParent.addEventListener('mouseleave', () => {
        video.pause(); // Stop the current video
        video.currentTime = 0; // Reset the video to the start
    });
});
