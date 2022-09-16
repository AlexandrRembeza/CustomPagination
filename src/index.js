import refs from './refs';
import { createMoviesMarkup } from './createMoviesMarkup';
import * as MARKUP from './paginationMarkups';

const API_KEY = '6308d1a98819d8ffdd4916cbcea5cd95';
let page = 1;
let query = 'war';
let totalPages = 0;

async function fetchMovies(query, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}`
  );
  const movies = await response.json();
  totalPages = movies.total_pages;
  if (totalPages === 0) return;
  console.log(movies);
  return movies.results;
}

fetchMovies(query, page).then(response => {
  refs.moviesList.insertAdjacentHTML('beforeend', createMoviesMarkup(response));
  if (totalPages <= 10) changePaginationMarkup(1, false);
});

refs.form.addEventListener('submit', onSubmit);
async function onSubmit(e) {
  e.preventDefault();
  const value = e.currentTarget.elements.query.value.trim();
  if (value === query) return alert('Equal request');
  page = 1;
  const movies = await fetchMovies(value, page);
  if (totalPages === 0) {
    refs.form.reset();
    return alert('No results');
  }
  query = value;
  refs.moviesList.innerHTML = '';
  refs.moviesList.insertAdjacentHTML('beforeend', createMoviesMarkup(movies));
  changePaginationMarkup(page, false);
  refs.form.reset();
}

refs.paginationList.addEventListener('click', loadNextPage);
async function loadNextPage(e) {
  e.preventDefault();
  const currentPage = Number(e.target.dataset.page);
  if (currentPage === page) return;
  console.log(currentPage);
  page = currentPage;

  const movies = await fetchMovies(query, page);
  refs.moviesList.innerHTML = '';
  refs.moviesList.insertAdjacentHTML('beforeend', createMoviesMarkup(movies));

  const visible = e.target.dataset.visible ? true : false;
  changePaginationMarkup(page, visible);

  if (page > 1) refs.prevButton.removeAttribute('disabled');
  if (page === totalPages) {
    refs.nextButton.setAttribute('disabled', true);
  } else {
    refs.nextButton.removeAttribute('disabled');
  }

  refs.buttons.forEach(el => el.classList.remove('active'));
  refs.buttons.forEach(el => {
    if (currentPage === Number(el.dataset.page) && Number(el.textContent)) {
      el.classList.add('active');
    }
  });
}

function changePaginationMarkup(page, visible) {
  let paginationMarkup = '';

  if (totalPages === 1) {
    paginationMarkup = MARKUP.onePagePagination();
    return createPaginationMarkup(paginationMarkup);
  }

  if (totalPages <= 10) {
    paginationMarkup = MARKUP.totalPagesLessThanTenPagination(page, totalPages);
    return createPaginationMarkup(paginationMarkup);
  }

  if (totalPages === page || page > totalPages - 8) {
    paginationMarkup = MARKUP.lastPagesPagination(page, totalPages);
    return createPaginationMarkup(paginationMarkup);
  }

  if (page === 1 || page < 9) {
    paginationMarkup = MARKUP.pageLessThanNine(page);
    return createPaginationMarkup(paginationMarkup);
  }

  if (visible) {
    refs.prevButton.dataset.page = page - 1;
    refs.nextButton.dataset.page = page + 1;
    return;
  }

  if (page > 9 || page < totalPages - 8) {
    paginationMarkup = MARKUP.betweenFirstAndLastPages(page, totalPages);
    return createPaginationMarkup(paginationMarkup);
  }
}

function createPaginationMarkup(paginationMarkup) {
  refs.paginationList.innerHTML = '';
  refs.paginationList.insertAdjacentHTML('beforeend', paginationMarkup);

  refs.buttons = document.querySelectorAll('.pagination-button');
  refs.prevButton = document.querySelector(
    '.pagination-item:first-child button'
  );
  refs.nextButton = document.querySelector(
    '.pagination-item:last-child button'
  );
}
