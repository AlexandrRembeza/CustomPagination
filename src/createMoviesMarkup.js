export function createMoviesMarkup(movies) {
  return movies
    .map(({ original_title }) => {
      return `
      <li class="movies-item">${original_title}</li>
    `;
    })
    .join('');
}
