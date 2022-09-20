export function onePagePagination() {
  return `<li class="pagination-item">
      <button class="pagination-button active" type="button" data-page="1">1</button>
    </li>`;
}

export function totalPagesLessThanTenPagination(page, totalPages) {
  let markup = [];
  for (let i = 1; i <= totalPages; i += 1) {
    markup.push(`<li class="pagination-item">
      <button class="pagination-button ${
        i === 1 ? 'active' : ''
      }" type="button" data-page="${i}">${i}</button>
    </li>`);
  }
  return `<li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page - 1
      }" disabled="true">&#65124</button></li> 
      ${markup.join('')}
      <li class="pagination-item">
      ${
        totalPages !== 1
          ? `<button class="pagination-button" type="button" data-page="${
              page + 1
            }">&#65125</button></li>`
          : ''
      }`;
}

export function lastPagesPagination(page, totalPages) {
  let markup = [];
  for (let i = 7; i >= 1; i -= 1) {
    markup.push(`<li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - i
      }">${totalPages - i}</button>
    </li>`);
  }
  return ` 
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page - 1
      }" disabled="true">&#65124</button></li>
    <li class="pagination-item">
      <button class="pagination-button active pagination-dots" type="button" data-page="${
        totalPages - 8
      }">...</button>
    </li>
    ${markup.join('')}
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${totalPages}">${totalPages}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page + 1
      }">&#65125</button></li>`;
}

export function pageLessThanNine(page) {
  let markup = [];
  for (let i = 1; i <= 8; i += 1) {
    markup.push(`<li class="pagination-item">
      <button class="pagination-button ${
        i === 1 ? ' active' : ''
      }" type="button" data-page="${i}">${i}</button>
    </li>`);
  }
  return ` 
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page - 1
      }" disabled="true">&#65124</button></li>
      ${markup.join('')}
    <li class="pagination-item">
      <button class="pagination-button pagination-dots" type="button" data-page="9">...</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page + 1
      }">&#65125</button></li>`;
}

export function betweenFirstAndLastPages(page, totalPages) {
  let markup = [];
  let lastVisiblePage = page + 4;

  for (let i = page; i <= lastVisiblePage; i += 1) {
    markup.push(`<li class="pagination-item">
      <button class="pagination-button" type="button" data-visible="true" data-page="${i}">${i}</button>
    </li>`);
  }
  return `
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page - 1
      }" >&#65124</button></li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="1">1</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button pagination-dots" type="button" data-page="${
        page - 5
      }">...</button>
    </li>
    ${markup.join('')}
    <li class="pagination-item">
      <button class="pagination-button pagination-dots" type="button" data-page="${
        page + 5
      }">...</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${totalPages}">${totalPages}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page + 1
      }">&#65125</button>
    </li>
  `;
}
