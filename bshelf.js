

librarysize = -1;
const myLibrary = [];

function Book(title,author,pages){
  this.author = author
  this.title = title
  this.pages = pages
  return this
}

//saves form data to a new book variable. Creates the book div and inserts all the proper data
function addBookToLibrary() { 
  const fbn = document.querySelectorAll("input")
  console.log(fbn[1].value)

  newbook = Book(fbn[0].value,fbn[1].value,fbn[2].value)

  let main = document.querySelector(".shelf")
  let p1 = document.createElement("p.p1")
  let p2 = document.createElement("p.p2")
  let p3 = document.createElement("p.p3")

  myLibrary.push(newbook)
  librarysize = librarysize + 1
  console.log(myLibrary[0].author)
  p1.textContent = ("By ") + myLibrary[librarysize].author
  p2.textContent = myLibrary[librarysize].title
  p3.textContent = myLibrary[librarysize].pages + (" Pages") 
  div = document.createElement("div");
  div.classList.toggle("book")
  p1.classList.toggle("inform")
  p2.classList.toggle("inform2")
  p3.classList.toggle("inform")
  div.appendChild(p2)
  div.appendChild(p1)
  div.appendChild(p3)
  
  div2 = document.createElement("div");
  b1 = document.createElement("button")
  b2 = document.createElement("button")
  div2.classList.toggle("bs")
  b1.classList.toggle("opt1")
  b2.classList.toggle("opt2")
  b1.textContent = "In Progress"
  b2.textContent = "Delete"

  //deletes the delete buttons parent element which is the whole book
  b2.onclick = function(event){
    let target = event.target
    console.log(b2.parentElement.parentElement.classList)
    target.parentElement.parentElement.remove()
  }

  b1.onclick = function(event){
    let target = event.target
    target.classList.toggle("completed")
    target.textContent = "Completed"
  }

  div2.appendChild(b1)
  div2.appendChild(b2)
  div.appendChild(div2)
  main.appendChild(div)
    
}

function display(){

}

const btn = document.querySelector('.add');
btn.addEventListener('click', function (e) {
  let popup = document.getElementById('thepopup');
  popup.classList.toggle('show');

});

//toggles the show class of popup for invilibility

const sbn = document.querySelector('#addbook')
const ibn = document.querySelector("form")

//checks if any of the inputs are invalid, if not it closes
//the popup and calls the addbook function

sbn.addEventListener('click', function (f){
  change = 0;
  const fbn = document.querySelectorAll("input")
  let popup = document.getElementById('thepopup');
  fbn.forEach(s => {if(!s.checkValidity()){ change++;}})
  if(change == 0){
    addBookToLibrary()
    ibn.reset()
    popup.classList.toggle('show');

  }
  
})

function dim(){
  let nodark = document.querySelector('.popup');
  let heading = document.querySelector('.add')
  nodark.classList.add('dim');
}


window.onclick = function(event) {
  let popup2 = document.getElementById('thepopup')
  if(popup2.className == "popup dim show"){
    if(event.target.className != popup2.className && event.target.className != "add"
    && event.target.className != "info" && event.target.parentElement.className != "info"
    && event.target.parentElement.className != "forl" && event.target.parentElement.className != 
    "add" && event.target.parentElement.className != "dlabel"){
      popup2.classList.toggle("show")
    }
    console.log("jsjsj")
 
}
} 