const dataMovie =["tt1201607"]
let data;
 fetch('https://www.omdbapi.com/?i='+ dataMovie + '&apikey=cc1c0d5d')
  .then(res => res.json())
   .then(Data => {
     
    data = Data;
   
 })

const containerRoot = document.getElementById('allMovies');
const showData = (data) => {
  console.log(data);
  let result = '';
  
 data.forEach(element => {
   // element --> DATA[i]
  //  console.log(element);

     result = containerRoot.innerHTML += `
     <div><img src="${element.Poster}">
           <h2>${element.Title}</h2>
      
     </div>`
   
 });
 return result;
}

window.onload = showData(data);











