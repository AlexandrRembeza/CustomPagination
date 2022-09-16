export function createMoviesMarkup(movies) {
  return movies
    .map(({ original_title, poster_path }) => {
      const image = poster_path
        ? `<div class="movie-item__image-wrap">                         
                <img class="movie-item__image" src="https://www.themoviedb.org/t/p/w780${poster_path}" loading="lazy" alt="${original_title}" />
            </div>`
        : `<div class="movie-item__placeholder">
                <svg class="movie-item__placeholder-image" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>image</title>
                    <g id="icomoon-ignore">
                    </g>
                    <path d="M479.942 64c0.020 0.017 0.041 0.038 0.058 0.058v383.885c-0.017 0.020-0.038 0.041-0.058 0.058h-447.885c-0.020-0.017-0.041-0.038-0.057-0.058v-383.886c0.017-0.020 0.038-0.041 0.057-0.057h447.885zM480 32h-448c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32v0z"></path>
                    <path d="M416 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"></path>
                    <path d="M448 416h-384v-64l112-192 128 160h32l112-96z"></path>
                </svg>     
           </div>`;
      return `
      <li class="movies-item">
        ${image}
        <p>${original_title}</p>
      </li>
    `;
    })
    .join('');
}
