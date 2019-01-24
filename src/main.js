// Aqui debe ir el manejo del Dom


// Probando Data desde OMDB, solo funcion Data con ¿console Log?
const dataMovie =['tt0879870', 'tt0304415', 'tt1217209','tt2294629', 'tt0185125', 'tt4677348', 'tt0211915','tt6045466', 'tt2446980', 'tt1365519','tt0356910','tt0212346','tt0105417','tt3521164','tt0213847','tt0458352',
    'tt3077214','tt0107798','tt1135503', 'tt0116313','tt0092605', 'tt0089755','tt0031381', 'tt0096463','tt0088939','tt1186830', 'tt1054580', 'tt0266697','tt1568346','tt1454029','tt3316960',
    'tt3319508','tt1784538','tt0278435', 'tt1587310',  'tt1035736', 'tt0467406']


const randomMovie = dataMovie.map( function(item) {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
  .then(res => res.json())
   .then(Data => {
       console.log(Data)
   document.getElementById('allMovies').innerHTML +=  `
    <div class="col s12 m4">
         <div class="card large">
             <div class="card-image waves-effect waves-block waves-light">
                 <img class="activator" src="${Data.Poster}">
             </div>
             <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
                  <h6>${Data.Title}</h6>
             </div>
         <div class="card-reveal">
           <span class="card-title grey-text text-darken-4">${Data.Title}<i class="material-icons right">close</i></span>
           <p>Country : ${Data.Country}</p>
           <p>Year : ${Data.Year}  </p>
           <p>Director : ${Data.Director}</p>
           <p>${Data.Plot}</p>
           <p>IMDB : ${Data.imdbRating}</p>
           <i class="material-icons">sentiment_very_dissatisfied</i>
           <i class="material-icons">tag_faces</i>
           <i class="material-icons">favorite_border</i>
           <i class="material-icons">fitness_center</i>
           </div> 
     </div>
</div> 

       
       
       
       `


                      
                   
})

})


//Strong Movies

document.getElementById("strong").addEventListener("click", () => {
    femeMovie ()
    document.getElementById('allMovies').innerHTML  = '';
   
   })
   
   
   const strongMovies =['tt0195685', 'tt0120762', 'tt1126590', 'tt2294629', 'tt1186830', 'tt0266697', 'tt1568346']
   
   function femeMovie () {
    strongMovies.map( function(item) {
   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
     .then(res => res.json())
      .then(data => {
    document.getElementById('allMovies').innerHTML +=  `
            <div class="col s12 m4">
                 <div class="card large">
                     <div class="card-image waves-effect waves-block waves-light">
                         <img class="activator" src="${data.Poster}">
                     </div>
                     <div class="card-content">
                          <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
                          <h6>${data.Title}</h6>
                     </div>
                 <div class="card-reveal">
                   <span class="card-title grey-text text-darken-4">${data.Title}<i class="material-icons right">close</i></span>
                   <p>Country : ${data.Country}</p>
                   <p>Year : ${data.Year}  </p>
                   <p>Director : ${data.Director}</p>
                   <p>${data.Plot}</p>
                   <p>IMDB : ${data.imdbRating}</p>
                   <i class="material-icons">sentiment_very_dissatisfied</i>
                   <i class="material-icons">tag_faces</i>
                   <i class="material-icons">favorite_border</i>
                   <i class="material-icons">fitness_center</i>
                   </div> 
             </div>
        </div> 
        
               
               
               
               `
        
      })
      
   })
   }


//cry Movies

document.getElementById("cry").addEventListener("click", () => {
    femeMoviedos ()
    document.getElementById('allMovies').innerHTML  = '';
   
   })
   
   
   const cryMovies =['tt0195685', 'tt0120762', 'tt1126590', 'tt2294629', 'tt1186830', 'tt0266697', 'tt1568346']
   
   function femeMoviedos () {
    strongMovies.map( function(item) {
   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
     .then(res => res.json())
      .then(data => {
    document.getElementById('allMovies').innerHTML +=  `
            <div class="col s12 m4">
                 <div class="card large">
                     <div class="card-image waves-effect waves-block waves-light">
                         <img class="activator" src="${data.Poster}">
                     </div>
                     <div class="card-content">
                          <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
                          <h6>${data.Title}</h6>
                     </div>
                 <div class="card-reveal">
                   <span class="card-title grey-text text-darken-4">${data.Title}<i class="material-icons right">close</i></span>
                   <p>Country : ${data.Country}</p>
                   <p>Year : ${data.Year}  </p>
                   <p>Director : ${data.Director}</p>
                   <p>${data.Plot}</p>
                   <p>IMDB : ${data.imdbRating}</p>
                   <i class="material-icons">sentiment_very_dissatisfied</i>
                   <i class="material-icons">tag_faces</i>
                   <i class="material-icons">favorite_border</i>
                   <i class="material-icons">fitness_center</i>
                   </div> 
             </div>
        </div> 
        
               
               
               
               `
        
      })
      
   })
   }
   