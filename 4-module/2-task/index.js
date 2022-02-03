function makeDiagonalRed(table) {
  let curRowNumber = 0;
  let curColNumber = 0;
  
  for (let row of table.rows) { 
    curColNumber = 0;
  
    for (let cell of row.cells) { 
      if (curRowNumber === curColNumber) { 
        cell.style.backgroundColor = 'red';
      }
  
      curColNumber++;
    }
  
    curRowNumber++;
  }
}

