const container = document.querySelector('#container');



for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('key', `row-${i}`);

    
    // container.appendChild(row); 
    for (let index = 1; index <= 16; index++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('key', `cell-${index}`);
        
        row.appendChild(cell);    
    }
    container.appendChild(row);    
}








