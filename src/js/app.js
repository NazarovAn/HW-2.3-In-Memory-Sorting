import data from './data';

const dataCopy = [...data];
const container = document.querySelector('.container');
const upArrow = '&uarr;';
const downArrow = '&darr;';
const sortByArr = [
  { param: 'id', direction: 'ascending' },
  { param: 'id', direction: 'descending' },
  { param: 'title', direction: 'ascending' },
  { param: 'title', direction: 'descending' },
  { param: 'year', direction: 'ascending' },
  { param: 'year', direction: 'descending' },
  { param: 'imdb', direction: 'ascending' },
  { param: 'imdb', direction: 'descending' },
];

export default function createTableRow(object) {
  const { id } = object;
  const { title } = object;
  const { year } = object;
  const imdb = `${object.imdb.toFixed(2)}`;
  return `<tr class="row">
            <td class="cell">${id}</td>
            <td class="cell">${title}</td>
            <td class="cell">${year}</td>
            <td class="cell">imdb: ${imdb}</td>
          </tr>`;
}

function sortBy(array, param, direction) {
  if (direction === 'ascending') {
    array.sort((first, second) => first[param] < second[param]);
    return;
  }
  array.sort((first, second) => first[param] > second[param]);
}

function sortAndDrawTable(array) {
  const { param } = array;
  const { direction } = array;
  container.innerHTML = `<tr class="row container-header">
                          <td class="id cell">id</td>
                          <td class="title cell">title</td>
                          <td class="year cell">year</td>
                          <td class="imdb cell">imdb</td>
                        </tr>`;

  const arrowCell = document.querySelector(`.${param}`);
  if (direction === 'ascending') {
    arrowCell.insertAdjacentHTML('beforeend', `  ${upArrow}`);
  } else {
    arrowCell.insertAdjacentHTML('beforeend', `  ${downArrow}`);
  }

  sortBy(dataCopy, param, direction);
  dataCopy.forEach((item) => {
    container.insertAdjacentHTML('beforeend', createTableRow(item));
  });
}

let counter = 0;
setInterval(() => {
  if (counter > 7) {
    counter = 0;
  }
  sortAndDrawTable(sortByArr[counter]);
  counter += 1;
}, 2000);
