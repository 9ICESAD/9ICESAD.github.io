// Example playlists (can be dynamic)
const playlists = [
    {
        title: "Love Songs",
        image: "https://via.placeholder.com/300x300",
        songs: [
            { title: "Song 1", file: "music/love_song_1.mp3" },
            { title: "Song 2", file: "music/love_song_2.mp3" }
        ]
    },
    {
        title: "Workout Vibes",
        image: "https://via.placeholder.com/300x300",
        songs: [
            { title: "Song 1", file: "music/workout_song_1.mp3" },
            { title: "Song 2", file: "music/workout_song_2.mp3" }
        ]
    }
];

// Display playlists
const playlistContainer = document.getElementById('playlists');
playlists.forEach((playlist, index) => {
    const playlistCard = document.createElement('div');
    playlistCard.classList.add('playlist-card');
    playlistCard.innerHTML = `
        <img src="${playlist.image}" alt="${playlist.title}">
        <h3>${playlist.title}</h3>
    `;

    playlistCard.addEventListener('click', () => {
        displaySongs(playlist.songs, playlist.title);
    });

    playlistContainer.appendChild(playlistCard);
});

// Display songs of a playlist
function displaySongs(songs, playlistTitle) {
    const player = document.getElementById('player');
    const songTitleElement = document.getElementById('song-title');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    
    songTitleElement.innerText = `Now Playing: ${songs[0].title}`;
    audioSource.src = songs[0].file;
    audioPlayer.load();
    audioPlayer.play();

    player.style.display = 'block'; // Show the player section
}
