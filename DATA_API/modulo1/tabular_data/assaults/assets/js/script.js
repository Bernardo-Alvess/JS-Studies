async function getData(){
    const response = await fetch('/assets/csv/assaults.csv');
    const data = await response.text();
    const table = data.split('\n').splice(1);
    table.forEach(row =>{
        const line = row.split(',');
        console.log(`Local: ${line[2]}, Victims: ${line[3]}`);
    })

}

getData();