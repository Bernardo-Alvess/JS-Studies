async function getCrimeData(){
    const response = await fetch('assets/csv/atlcrime.csv');
    const tab = await response.text();
    const data = $.csv.toArray(tab);

    console.log(data);
}

getCrimeData();

// $.get('assets/csv/atlcrime.csv', function(CSVdata){
//     data = $.csv.toArray(CSVdata);
//     console.log(data);
// })