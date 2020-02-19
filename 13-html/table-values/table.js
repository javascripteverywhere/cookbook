let sum = 0;

// use querySelector to find all second table cells
const cells = document.querySelectorAll('td + td');

// iterate over each
cells.forEach(cell => {
  sum += Number.parseFloat(cell.firstChild.data);
});

// now add sum to end of table
const newRow = document.createElement('tr');

// first cell
const firstCell = document.createElement('td');
const firstCellText = document.createTextNode('Sum:');
firstCell.appendChild(firstCellText);
newRow.appendChild(firstCell);

// second cell with sum
const secondCell = document.createElement('td');
const secondCellText = document.createTextNode(sum);
secondCell.appendChild(secondCellText);
newRow.appendChild(secondCell);

// add row to table
document.getElementById('table1').appendChild(newRow);
