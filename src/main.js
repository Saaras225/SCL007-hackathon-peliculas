// Aqui debe ir el manejo del Dom


// Probando Data desde OMDB, solo funcion Data con ¿console Log?
const dataMovie =['tt1201607', 'tt0076759', 'tt0266697', 'tt1201607', 'tt0076759', 'tt0266697','tt1201607', 'tt0076759', 'tt0266697']

const randomMovie = dataMovie.map( function(item) {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
  .then(res => res.json())
   .then(Data => {
         document.getElementById('allMovies').innerHTML +=  `
         <div class="col s12 m4 movie-card">
                                <div class="card small center-align white">
                                <div class="card-action">
                                        <a href="#">${Data.Title}</a>
                                    </div>
                                    <div class="card-content white-text">
                                        <img class="responsive-img" src="${Data.Poster}">
                                    </div>
                                    
                                </div>
                            </div>
                            `
  

})

})




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




