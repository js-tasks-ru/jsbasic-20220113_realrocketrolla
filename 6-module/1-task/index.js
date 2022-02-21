/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.elem.innerHTML = `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
    `;

    let tbody = this.elem.querySelector('tbody');
    
    for (let i = 0; i < rows.length; i++) {
      let row = document.createElement('tr');
      tbody.append(row);

      for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        tbody.lastElementChild.append(td);
      }

      let button = document.createElement('button');
      button.innerHTML = 'X';
      tbody.lastElementChild.lastElementChild.append(button);

      rows.forEach( () => {
        tbody.rows[i].cells[0].innerHTML = rows[i].name;
        tbody.rows[i].cells[1].innerHTML = rows[i].age;
        tbody.rows[i].cells[2].innerHTML = rows[i].salary;
        tbody.rows[i].cells[3].innerHTML = rows[i].city;
      });
    }

    let trs = tbody.querySelectorAll('tr');
    for (let tr of trs) {
      let removeButton = tr.lastElementChild.querySelector('button');
      removeButton.addEventListener('click', function() {
        tr.remove();
      });
    }
  }    
}
