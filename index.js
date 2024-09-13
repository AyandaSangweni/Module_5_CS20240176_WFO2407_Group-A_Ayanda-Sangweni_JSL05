// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Go All the Way", artist: "Raspberries", genre: "Rock" },
    { title: "Mr Blue Sky", artist: "Electric Light Orchestra", genre: "Rock"},
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock"},
    { title: "Brandy (You're a Fine Girl", artist: "Looking Glass", genre: "Pop"},
    { title: "Come a Little Bit Closer", artist: "Jay and the Americans", genre: "Pop"},
    { title: "Wham Bam Shang-A-Lang", artist: "Silver", genre: "Pop"}
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "R&B",
    "Rocket" : "Rock",
    "Groot" : "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

        // Go through each Guardian
    
        Object.keys(guardians).forEach(guardian => {
    
            // Songs filtered based on the Guardian's genre preference
            const genrePreference = guardians[guardian];
            const playlist = songs.filter(song => song.genre === genrePreference);

            // Create elements to display the Guardian's playlist
            const guardianDiv = document.createElement('div');
            guardianDiv.classList.add('playlist');

            const guardianName = document.createElement('h2');
            guardianName.textContent = `${guardian}'s Playlist`;
    
            const songList = document.createElement('ul');
            playlist.forEach(song => {
                const songItem = document.createElement('li');
                songItem.classList.add('song')
                songList.appendChild(songItem);

                // Span for the song
                const songTitle = document.createElement('span');
                songTitle.classList.add('song-title');
                songTitle.textContent = song.title;
                
                // Span for artist name 
                const songArtist = document.createElement('span');
                songArtist.textContent = `${song.artist}`;

                songItem.appendChild(songTitle);
                songItem.appendChild(songArtist);

                songList.appendChild(songItem);
            });
    
            guardianDiv.appendChild(guardianName);
            guardianDiv.appendChild(songList);
    
            document.getElementById('playlists').appendChild(guardianDiv);
        }); 
    }

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


