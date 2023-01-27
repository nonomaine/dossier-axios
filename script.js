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
        console.log(donnees.data.results[0].name);
    })
    .catch(function(erreur) {
      console.error(erreur);
    })
