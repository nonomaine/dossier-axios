
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
 
  let option = document.querySelector('#aa');

      donnees.data.results.forEach(element => {
        //console.log(element.image);
        //let img= document.createElement('img');
        //cont.append(img);
       // img.src = element.image;

      let selects =document.createElement('option');
      selects.value=element.id;
      selects.textContent=element.name;
      option.append(selects);
      
      function afficher(){
        let img = document.createElement('img');
        cont.append(img);
        img.src = element.image;
         
      };
      
      if(element.id === selects.value){
        return afficher();
      }
      
      afficher();
      selects.addEventListener('click', afficher)
      
      });
    })
    .catch(function(erreur) {
      console.error(erreur);
    })

  

    
 


  

