function highlight(table) {
  let headers = [];
  for (let header of table.tHead.rows[0].cells) { 
    headers.push(header.innerText);
  }

  for (let row of table.tBodies[0].rows) {
    let availability = row.cells[headers.indexOf('Status')].dataset.available;
    if (availability === undefined) {
      row.setAttribute('hidden', true);
    } else if (availability === 'true') { 
      row.classList.add('available');
    } else if (availability === 'false') {
      row.classList.add('unavailable');
    }

    let gender = row.cells[headers.indexOf('Gender')].innerText;
    if (gender === 'm') { 
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    } 

    let age = Number(row.cells[headers.indexOf('Age')].innerText);

    if (age < 18) { 
      row.style['text-decoration'] = 'line-through';
    }
  }
}
