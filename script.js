
let degres = document.getElementById("degres");
let app = document.getElementById("app");
let temps = document.getElementById("temps");
let submit = document.getElementById("submit");
let destination = document.getElementById('destination');
let tableau = ["Rains","Clear","Clouds","neige"];
let resultatsAPI;

 appelApi = () => {
     if(app.classList.contains(temps.innerHTML)){
        app.classList.remove(temps.innerHTML);
     }
let ville = document.getElementById('searchInput').value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=ec0b856f18a13865681b046eea95030b`)
  .then((reponse) => {
      return reponse.json();
  })
  .then((data)=>{
      console.log(data);
      resultatsAPI = data;
      destination.innerHTML = resultatsAPI.name + ", "+ resultatsAPI.sys.country
      temps.innerText = resultatsAPI.weather[0].main;
      degres.innerText = resultatsAPI.main.temp + "°";
      app.classList.add(temps.innerHTML);

})
};

  




submit.addEventListener("click", () => {
    appelApi();

});




   





  
  