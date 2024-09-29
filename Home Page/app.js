onmouseover="console.log('Mouse over on dressup'); this.querySelector('img').classList.add('hover-effect');" 
onmouseout="console.log('Mouse out on dressup'); this.querySelector('img').classList.remove('hover-effect');"

const songs = [
    {
        title: 'Celebration',
        artist: 'Kool & The Gang',
        url:'spotifydown.com - Celebration.mp3',
        thumbnail: 'p1.png'
    },
    {
        title: 'You Should Be Dancing',
        artist: 'Bee Gees',
        url:'https://open.spotify.com/embed/track/2xiOdusRnZezQok1RgLNeS?utm_source=generator',
        thumbnail: 'p2.png'
    },
    {
        title: 'Voulez-Vous',
        artist: 'ABBA',
        url:'https://open.spotify.com/embed/track/17OqI90oTFZ3J8PVu6j07V?utm_source=generator',
        thumbnail: 'p3.png'
    },
    {
        title: 'Disco Inferno-Single Edit',
        artist: 'The Trammps',
        url:'https://open.spotify.com/embed/track/22ff60cZy4APp7bzESHLR8?utm_source=generator',
        thumbnail: 'p4.png'
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('play');
    const audioPlayer = document.getElementById('audio-player');
    let isPlaying = false; // Track whether the audio is playing

    playButton.addEventListener('click', function() {
        if (isPlaying) {
            audioPlayer.pause(); // Pause the audio
            playButton.textContent = 'Play'; // Update button text to 'Play'
        } else {
            audioPlayer.play(); // Play the audio
            playButton.textContent = 'Pause'; // Update button text to 'Pause'
        }
        isPlaying = !isPlaying; // Toggle the playing state
    });


});