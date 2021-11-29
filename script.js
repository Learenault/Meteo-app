
let degres = document.getElementById("degres");
let app = document.getElementById("app");
let temps = document.getElementById("temps");
let submit = document.getElementById("submit");
let date = document.getElementById("date");
let heure = document.getElementById("heure");
let destination = document.getElementById('destination');
let resultatsAPI;
const tableau = ["Rains","Clear","Clouds","neige"];
const tab_jour = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const tab_mois= ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

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
 
UpdateDate = () => {
    let dates = new Date();
date.innerHTML = tab_jour[dates.getDay()]+ " "+ dates.getDate()+ " " + tab_mois[dates.getMonth()] + " " + dates.getFullYear();
heure.innerHTML = "à " + dates.getHours() + "h " + dates.getMinutes(); 


}

submit.addEventListener("click", () => {
    appelApi();
    UpdateDate();
});




   





  
  