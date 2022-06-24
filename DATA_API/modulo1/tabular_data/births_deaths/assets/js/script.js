createChart();

async function getData(){

    const response = await fetch('/assets/csv/bd-dec21-births-deaths-natural-increase.csv');
    const data = await response.text();
    const table = data.split('\n').splice(1);

    const deaths = [];
    const births = [];
    const naturalIncrease = [];
    const years = []

    table.forEach(row =>{
        const line = row.split(',')
        const data = line[2];

        if(!years.includes(line[0]) && line[0] != ''){
            years.push(line[0]);
        }

        switch(line[1]){
            case 'Births':
                births.push(data);
                break;
            case 'Deaths':
                deaths.push(data);
                break;
            case 'Natural_Increase':
                naturalIncrease.push(data)
                break;
        }
    })
    
    const datas = {
        deaths: deaths,
        births: births,
        naturalIncrease: naturalIncrease,
        years: years
    }


    return datas;
}

async function createChart(){
    const data = await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.years,
            datasets: [{
                label: 'number of birth deaths in New Zealand',
                data: data.deaths,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'number of births in New Zealand',
                data: data.births,
                backgroundColor: '#4C00F5',
                borderColor: '#4C22F5',
                borderWidth: 1
            },
            {
                label: 'number of natural increase in New Zealand',
                data: data.naturalIncrease,
                backgroundColor: '#0076F5',
                borderColor: '#002DF5',
                borderWidth: 1
            }]   
        },
        // options: {
        //     scales: {
        //         y: {
        //             beginAtZero: true
        //         }
        //     }
        // }
    })
}

