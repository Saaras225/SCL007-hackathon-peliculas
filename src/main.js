// Aqui debe ir el manejo del Dom


// Probando Data desde OMDB, solo funcion Data con ¿console Log?
const dataMovie =['tt5164214', 'tt0451279', 'tt0266697', 'tt2326554', 'tt1289401', 'tt1392190','tt0147800', 'tt0076759', 'tt0090605']

const randomMovie = dataMovie.map( function(item) {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
  .then(res => res.json())
   .then(Data => {

         document.getElementById('allMovies').innerHTML +=  `
         <div class="col s12 m4 movie-card">
                                <div class="card small center-align white">
                               
                                    <div class="card-content white-text">
                                        <img class="responsive-img" src="${Data.Poster}">
                                    </div>

                                    <div class="card-action">
                                    <a class="" href="#section-movie">${Data.Title}</a>
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



