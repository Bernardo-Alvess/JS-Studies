async function getCrimeData(){
    const response = await fetch('assets/csv/atlcrime.csv');
    if(response.ok){
        const text = await response.text();
        const table = await text.split('\n').splice(1);
        table.forEach(row =>{
            const line = row.split(',');
            const crime = line[1];
            const dateString = line[3]
            const dateArray = dateString.split('/');
            console.log(dateArray);
        })
    }else{
        console.log('NÃO')
    }
}

getCrimeData();