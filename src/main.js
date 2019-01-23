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


// selectHouse.addEventListener('change', () => {
//   let condition = selectHouse.options[selectHouse.selectedIndex].text;
//   let filtered = filterHouse(DATA, condition);
//   console.log(filtered)
//   // limpio div
//   containerRoot.innerHTML = '';

//   filtered.forEach(element => {
//     containerRoot.innerHTML += `
//     <div>
//       <div class="card">
//         <div class="box">
//           <div class="img">
//               <img src="${element.image}">
//           </div>
//           <h2>${element.name}<br><span>${element.house}</span></h2>
//           <p>Patronus: ${element.patronus}</p>
//         </div>
//       </div>
//     </div>` 
//   })
// })


// const showData = (data) => {
//   console.log(data)
//  data.forEach(element => {
//    // element --> DATA[i]
//    console.log(element)
//    document.getElementById('allMovies').innerHTML +=  `
//      <div> <img src="${element.Poster}">
//           <h2>${element.Title}</h2>
           
      
//      </div>`
   
//  });
 
// }



