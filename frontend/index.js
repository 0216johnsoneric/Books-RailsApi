const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/users`
const POKEMONS_URL = `${BASE_URL}/movies`
const toyFormContainer = document.querySelector(".container");

$(document).ready(() => {


});
// const addBtn = document.querySelector("#new-toy-btn");
// const toyFormContainer = document.querySelector(".container");
// let addToy = false;

// function getForm() {
//   return document.querySelector(".add-toy-form")
// }
 
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//       getForm().addEventListener("submit", addNewToy)
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });

//   function addNewToy(event) {
//     event.preventDefault();
//     console.log("test")

//     let name = document.getElementById("name-field")
//     let image = document.getElementById("image-field")

//     fetch("http://localhost:3000/toys", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify({
//         name: name.value,
//         image: image.value,
//         likes: 0
//       })
//     })
//   .then(responce => responce.json())
//   .then(data => createToy(data))
//   }

//   function getToys() {
//     console.log("toys test")
//     fetch("http://localhost:3000/toys")
//     .then(responce => responce.json())
//     .then(toys => toys.forEach(toy => createToy(toy)))
//   }

//   /* <div class="card">
//   <h2>Woody</h2>
//   <img src=toy_image_url class="toy-avatar" />
//   <p>4 Likes </p>
//   <button class="like-btn">Like <3</button>
// </div> */
  
  
//   function createToy(toyObj) {
//       console.log(toyObj)

//       let div = document.createElement("div")
//       div.classList.add("card")

//       let h2 = document.createElement("h2")
//       h2.innerText = toyObj.name

//       let img = document.createElement("img")
//       img.src = toyObj.image
//       img.classList.add("toy-avatar")

//       let p = document.createElement("p")
//       p.innerText = `${toyObj.likes} Likes`

//       let btn = document.createElement("button")
//       btn.addEventListener("click", updateLike)
//       btn.innerText = "Like <3"
//       btn.classList.add("like-btn")
//       btn.id = toyObj.id

//       div.append(h2, img, p, btn)
//       getToyDiv().appendChild(div)
//   }

//   function getToyDiv() {
//     return document.getElementById("toy-collection")
//   }

//   function updateLike(event) {

//     let id = event.currentTarget.id
//     let paragraph = event.currentTarget.previousSibling
//     let currentLike = event.currentTarget.previousSibling.innerText

//     currentLike = parseInt(currentLike.split(" ")[0])
//     currentLike += 1
//     console.log(currentLike)

//     fetch(`http://localhost:3000/toys/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       likes: currentLike
//     })
//   })
//     .then(responce => responce.json())
//     .then(data => {
//       paragraph.innerText = `${data.likes} Likes`
//     })
//   }



// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Hello World!")
//   getToys();
// })
