import React, { useEffect, useState } from 'react';
const Music = () => {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        getMusicData();
    }, []);

    function getMusicData() {
        const API_KEY = 'fc11047c30497b840faa3ee08c8e5ceb';
        try {
            fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`)
                .then(response => response.json())
                .then(data => {
                    setMusic(data.artists.artist);
                    //console.log(data.artists.artist)
                });
        } catch (error) {
            console.log('Error is ', error);
        }
    }

    return (
        <>
            <main id="main">
                {
                music.map((values, index, imgIndex) => (
                    <div key={index} className="movie">
                         {values.image.length > 0 && (
                            <img src={values.image[0]['#text']} alt={values.name} />
                        )}
                        <div className="movie-info">
                            <h2>{values.name}</h2>
                        </div>
                    </div>
                ))
                }
            </main>
        </>
    );
}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', Music)
 } else {
    Music()
 }
export default Music;
