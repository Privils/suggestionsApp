import React, { useEffect, useState } from 'react';

const Anime = () => {
  const [anime, setAnime] = useState([]);
  
  useEffect(() => {
    myAnime();
  }, []);

  async function myAnime() {
    const id = "150";
    const url = `https://api.jikan.moe/v4/anime/${id}/recommendations`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      setAnime(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main id="main">
        {anime.map((values) => (
          <div className="movie" key={values.entry.title}>
            <img src={values.entry.images.jpg.image_url} alt="" />
            <div className="movie-info">
              <h2>{values.entry.title}</h2>
              <span>Votes: {values.votes}</span>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Anime;
