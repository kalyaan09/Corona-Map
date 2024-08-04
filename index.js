function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                var latitude = element.latitude;
                var longitude = element.longitude;
                var cases = element.infected;
                // Add a marker for each latitude and longitude
                L.marker([latitude, longitude]).addTo(map)
                    .bindPopup(`Cases: ${cases}`)
                    .openPopup();
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

updateMap();