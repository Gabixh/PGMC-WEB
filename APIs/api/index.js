function Procurar(){

    let namep = document.getElementById("namep").value
    let finalURL= `https://swapi.dev/api/people/1/`
    
    console.log(finalURL)
    
    fetch(finalURL)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){
    
    console.log(data[0]).name;
    console.log(data[0].height);
    console.log(data[0].eye_color);
    console.log(data[0].birth_year);
    console.log(data[0].hair_color);
    
    let name = document.getElementById('name');
    let height = document.getElementById('height');
    let eye_color = document.getElementById('eye_color');
    let birth_year = document.getElementById('birth_year');
    let hair_color = document.getElementById('hair_color');

    name.innerHTML = data[0].name;
    height.innerHTML = data[0].height;
    eye_color.innerHTML = data[0].eye_color;
    birth_year.innerHTML = data[0].birth_year;
    hair_color.innerHTML = data[0].hair_color;
    })
    
    document.getElementById('').value = '';
    
    }