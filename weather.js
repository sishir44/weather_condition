var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var min = document.querySelector('.min-temp');
var max = document.querySelector('.max-temp');
var humdity = document.querySelector('.humidity');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e4811886ad5213b761877c134bad03b3')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']-273.15;
  var nameValue = data['name'];
  var humidity = data['main']['humidity'];
  var mintemp = data['main']['temp_min']-273.15;
  var maxtemp = data['main']['temp_max']-273.15;
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = ""+descValue;
  temp.innerHTML = "Temp - "+tempValue.toFixed(2);
  humdity.innerHTML = "Humidity - "+humidity;
  min.innerHTML = "Min-temp - "+mintemp.toFixed(2);
  max.innerHTML = "Max-temp - "+maxtemp.toFixed(2);
  input.value ="";
})

.catch(err => alert("Wrong city name!"));
})