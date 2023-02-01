
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
 let box= document.querySelector('.container');
  let option = document.querySelector('#aa');

      donnees.data.results.forEach(element => {
        

      const selects =document.createElement('option');
      selects.value=element.id;
      selects.textContent=element.name;
      option.append(selects);
      
    
      option.addEventListener('click', (e) =>{
        
        if(e.target.value === selects.value){
          img.src = element.image;
        
        }
        
      })
      
      });
      let img = document.createElement('img');
      box.append(img);
    })
    .catch(function(erreur) {
      console.error(erreur);
    })