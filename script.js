async function start() {
   try {
       const response = await fetch("https://dog.ceo/api/breeds/list/all")
   const data = await response.json()
   createBreedList(data)
   } catch(e){
     console.log("There was a problem fetching the data")
     alert("Bhag Bhosri Ke")
   }
}
start();
function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
       <select onChange="loadByBreed(this.value)"> 
       <option> Select the breed </option>

         ${Object.keys(breedList.message).map(function(breed){
      return `<option>${breed}</option>`
    })}
       </select>
    `
}

async function loadByBreed(breed) {
   if(breed != "Select the breed"){
     const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
     const data = await response.json()
     // console.log(data.message)
     createShow(data.message);
   }
}

function createShow(image){
    console.log(image)
  document.getElementById("slideShow").innerHTML = `
  
  <div class="slide" style="background-image : url('${image[0]}')">
  </div>
   
  `
}