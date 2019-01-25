// Aqui debe ir el manejo del Dom
// Probando Data desde OMDB, solo funcion Data con ¿console Log?
cardCreate=(data)=>{
    return   `
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

              <i class="material-icons" id="icon">sentiment_very_dissatisfied</i><a>15</a>
              <i class="material-icons" id="icon">tag_faces</i><a>10</a>
              <i class="material-icons" id="icon">favorite_border</i><a>8</a>
              <i class="material-icons" id="icon">fitness_center</i><a>12</a>
              </div>
        </div>
      </div>




          `;
      }

// Probando Data desde OMDB, solo funcion Data con ¿console Log?

const dataMovie =['tt0879870', 'tt0304415', 'tt1217209','tt2294629', 'tt0185125', 'tt4677348', 'tt0211915','tt6045466', 'tt2446980', 'tt1365519','tt0356910','tt0212346','tt0105417','tt3521164','tt0213847','tt0458352',
    'tt3077214','tt0107798','tt1135503', 'tt0116313','tt0092605', 'tt0089755','tt0031381', 'tt0096463','tt0088939','tt1186830', 'tt1054580', 'tt0266697','tt1568346','tt1454029','tt3316960',
    'tt3319508','tt1784538','tt0278435', 'tt1587310',  'tt1035736', 'tt0467406']



const randomMovie = dataMovie.map( function(item) {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
  .then(res => res.json())
   .then(data => {

   document.getElementById('allMovies').innerHTML += cardCreate(data);

})

})


//Strong Movies

document.getElementById("strong").addEventListener("click", () => {
    femeMovie ()
    document.getElementById('allMovies').innerHTML  = '';
 })
  const strongMovies =['tt3319508','tt1784538','tt1054580','tt1126590','tt3077214','tt0088939']

   function femeMovie () {
    strongMovies.map( function(item) {
   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
     .then(res => res.json())
      .then(data => {
    document.getElementById('allMovies').innerHTML += cardCreate(data);

      })

   })
   }


//cry Movies

document.getElementById("cry").addEventListener("click", () => {
    femeMovietwo ()
    document.getElementById('allMovies').innerHTML  = '';

   
   })
const cryMovies =['tt0120762','tt0151137','tt0467200','tt1035736']
   

   function femeMovietwo () {
    cryMovies.map( function(item) {
   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
     .then(res => res.json())
      .then(data => {
    document.getElementById('allMovies').innerHTML += cardCreate(data);
      })


      
   });
   }
   


   //smile Movies

document.getElementById("smile").addEventListener("click", () => {
    femeMoviethree ()
    document.getElementById('allMovies').innerHTML  = '';

   })
const smileMovies =['tt3316960','tt0031381','tt0096463','tt0092605','tt0195685',
'tt0105417','tt1135503','tt0116313','tt2446980','tt0467406']

   function femeMoviethree () {
    smileMovies.map( function(item) {
   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
     .then(res => res.json())
      .then(data => {
    document.getElementById('allMovies').innerHTML += cardCreate(data);
      })

   });
   }


   //liberation Movies

document.getElementById("liberation").addEventListener("click", () => {
    femeMoviefour ()

   
   })
const liberationMovies =['tt0266697','tt1568346','tt1454029', 'tt1217209', 'tt3521164', 'tt0089755', 'tt1186830', 'tt0278435']
   

   function femeMoviefour () {
    liberationMovies.map( function(item) {
   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
     .then(res => res.json())
      .then(data => {
    document.getElementById('allMovies').innerHTML += cardCreate(data);
      })


   });
   }



   //achieve Movies

document.getElementById("achieve").addEventListener("click", () => {
    femeMoviefive ()
    document.getElementById('allMovies').innerHTML  = '';

   })
const achieveMovies =['tt0879870', 'tt1587310']

   function femeMoviefive () {
    achieveMovies.map( function(item) {
   fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
     .then(res => res.json())
      .then(data => {
    document.getElementById('allMovies').innerHTML += cardCreate(data);
      })

   });
   }

   //all Movies

document.getElementById("all").addEventListener("click", () => {
   femeMovieall()
   document.getElementById('allMovies').innerHTML  = '';

      
   });
   }
   


  })
const allMovies = ['tt0879870', 'tt0304415', 'tt1217209','tt2294629', 'tt0185125', 'tt4677348', 'tt0211915','tt6045466', 'tt2446980', 'tt1365519','tt0356910','tt0212346','tt0105417','tt3521164','tt0213847','tt0458352',
'tt3077214','tt0107798','tt1135503', 'tt0116313','tt0092605', 'tt0089755','tt0031381', 'tt0096463','tt0088939','tt1186830', 'tt1054580', 'tt0266697','tt1568346','tt1454029','tt3316960',
'tt3319508','tt1784538','tt0278435', 'tt1587310',  'tt1035736', 'tt0467406']

  function femeMovieall () {
   allMovies.map( function(item) {
  fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=cc1c0d5d')
    .then(res => res.json())
     .then(data => {
   document.getElementById('allMovies').innerHTML += cardCreate(data);
     })

  });
  }
