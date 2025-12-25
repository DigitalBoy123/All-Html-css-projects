document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.video-container');
    const playButton = document.getElementById('playButton');
    const playerFrame = document.getElementById('youtubePlayer');

    // YouTube requires a specific format for autoplay to work
    const videoId = 'So5REm9ZGKs'; // Get this from your iframe src
    const autoplayURL = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&controls=1`;

    playButton.addEventListener('click', function () {
        // 1. Swap the iframe source to include `autoplay=1`
        playerFrame.src = autoplayURL;

        // 2. Add the class to the container to hide the poster via CSS
        container.classList.add('video-playing');
    });

    // Optional: If you click anywhere on the poster, it should play
    const videoPoster = document.querySelector('.video-poster');
    videoPoster.addEventListener('click', function () {
        // If the video isn't already playing, trigger the click
        if (!container.classList.contains('video-playing')) {
            playButton.click();
        }
    });
});