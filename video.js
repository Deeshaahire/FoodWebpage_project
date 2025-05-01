const video = document.getElementById('foodVideo');
        const playButton = document.getElementById('playButton');

        function toggleVideo() {
            if (video.paused) {
                video.play();
                playButton.style.display = 'none';
            } else {
                video.pause();
                playButton.style.display = 'flex';
            }
        }

        video.addEventListener('click', toggleVideo);
        playButton.addEventListener('click', toggleVideo);

        video.addEventListener('pause', () => {
            playButton.style.display = 'flex';
        });

        video.addEventListener('play', () => {
            playButton.style.display = 'none';
        });