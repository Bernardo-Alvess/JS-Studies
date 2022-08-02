const getData = async () =>{
    const response = await fetch('/api');
    const data = await response.json();

    for(item of data){
        console.log(item.name)
        const root = document.createElement('div');
        const name = document.createElement('div');
        const date = document.createElement('div');
        const location = document.createElement('div');
        const image = document.createElement('img')

        name.textContent = `Name: ${item.name}`;
        location.textContent = `Latitude: ${item.lat}\nLongitude: ${item.lon}`;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = dateString;
        image.src = item.image64
        
        root.append(name, date, location, image);
        root.classList.add('root')
        document.body.append(root);
    }

    console.log(data)
}

getData();