//Data from: https://data.giss.nasa.gov/gistemp/
const xlabels = [];
const ytemps = [];
createChart();

async function getData(){
    const response = await fetch('assets/csv/ZonAnn.Ts+dSST.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];
        xlabels.push(year);
        ytemps.push(parseFloat(temp) + 14);
        console.log(year, temp)
    })
};

async function createChart(){
    await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in C°',
                data: ytemps,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks){
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}

