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
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - 7
      }">${totalPages - 7}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - 6
      }">${totalPages - 6}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - 5
      }">${totalPages - 5}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - 4
      }">${totalPages - 4}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - 3
      }">${totalPages - 3}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - 2
      }">${totalPages - 2}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        totalPages - 1
      }">${totalPages - 1}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${totalPages}">${totalPages}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page + 1
      }">&#65125</button></li>`;
}

export function pageLessThanNine(page) {
  return ` 
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page - 1
      }" disabled="true">&#65124</button></li>
    <li class="pagination-item">
      <button class="pagination-button active" type="button" data-page="1">1</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="2">2</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="3">3</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="4">4</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="5">5</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="6">6</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="7">7</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="8">8</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button pagination-dots" type="button" data-page="9">...</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-page="${
        page + 1
      }">&#65125</button></li>`;
}

export function betweenFirstAndLastPages(page, totalPages) {
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
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-visible data-page="${page}">${page}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-visible="true" data-page="${
        page + 1
      }">${page + 1}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-visible="true" data-page="${
        page + 2
      }">${page + 2}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-visible="true" data-page="${
        page + 3
      }">${page + 3}</button>
    </li>
    <li class="pagination-item">
      <button class="pagination-button" type="button" data-visible="true" data-page="${
        page + 4
      }">${page + 4}</button>
    </li>
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
