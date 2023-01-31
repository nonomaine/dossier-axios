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
//et cont = document.querySelector('.class-container');
    
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
  let cont = document.querySelector('.class-container');
  let input = document.querySelector('.character');
  let option = document.querySelector('#aa');

      donnees.data.results.forEach(element => {
        //console.log(element.image);
        //let img= document.createElement('img');
        //cont.append(img);
       // img.src = element.image;

      let selects =document.createElement('option');
      selects.name=element.name;
      selects.textContent=element.name;
      option.append(selects);
      //let inputs=document.createElement('select');
      //let inputs = element.name;
      //input.appendChild(inputs);
      
       
       //input.type= 'text';
       //console.log(input);
       console.log(selects);

      });
    })
    .catch(function(erreur) {
      console.error(erreur);
    })

    
 
