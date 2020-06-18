import createTableRow from '../app';

test('createTableRow', () => {
  const testObject = {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  };

  expect(createTableRow(testObject)).toBe(`<tr class="row">
            <td class="cell">25</td>
            <td class="cell">Крёстный отец</td>
            <td class="cell">1972</td>
            <td class="cell">imdb: 9.20</td>
          </tr>`);
});
