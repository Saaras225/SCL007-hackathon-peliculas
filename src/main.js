// Aqui debe ir el manejo del Dom


// Probando Data desde OMDB, solo funcion Data con ¿console Log?
const dataMovie =['tt5164214', 'tt0195685','tt0451279', 'tt0266697', 'tt2326554', 'tt1289401', 'tt1392190','tt0147800', 'tt0076759', 'tt0090605']

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
   