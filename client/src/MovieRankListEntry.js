import React from 'react';

export default function MovieRankListEntry({
  movie,
  handleCardClick,
  movie: { runtime, rating, title, medium_corver_image, genres },
}) {
  return (
    <div
      className="card"
      onClick={() => {
        handleCardClick(movie);
      }}
    >
      <div style={{ flex: 3 }}>
        <img width="100%" height="100%" src={medium_corver_image} alt="cover" />
      </div>
      <div style={{ flex: 7 }}>
        <h3 className="title">{title}</h3>
        <p className="rating">rating : {rating}</p>
        <p className="running-time">running time : {runtime} min</p>
        <p>Genres</p>
        <div className="tag-list">
          {genres.map((genre) => (
            <div className="tag" key={genre}>
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
