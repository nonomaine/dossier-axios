/*const url= "https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending";
const axiosInstancePost = axios.create({
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded'
      'Accept': 'application/json'
    },
   //baseURL: 'https://lesoublisdelinfo.com/'
  });
  
  axiosInstancePost.get(url) /*new URLSearchParams({
    prenom: 'Steve'
  }))*/
    
  //import axios from "axios";
    const url="https://rickandmortyapi.com/api/character";
const axiosInstancePost = axios.create({
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded'
      'Accept': 'application/json'
    },
   //baseURL: 'https://lesoublisdelinfo.com/'
  });
  
  axiosInstancePost.get(url) /*new URLSearchParams({
    prenom: 'Steve'
  }))*/
    .then(function(donnees) {
      donnees.data.results.forEach(element => {
        console.log(element.name);
      });
    })
    .catch(function(erreur) {
      console.error(erreur);
    })
