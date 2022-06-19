async function getData(){
    const response = await fetch('/assets/csv/bd-dec21-births-deaths-natural-increase.csv');
    const data = await response.text();

    const table = data.split('\n').splice(1);

    table.forEach(row =>{
        const line = row.split(',')

        switch(line[1]){
            case 'Births':
                console.log(`Year: ${line[0]} | Births: ${line[2]}`);
                break;
            case 'Deaths':
                console.log(`Year: ${line[0]} | Deaths: ${line[2]}`);
                break;
            case 'Natural_Increase':
                console.log(`Year: ${line[0]} | Natural increase: ${line[2]}`);
                break;
        }
    })
}

getData()
.then(response =>{
    console.log('Yay');
})
.catch(error =>{
    console.error(error);
});