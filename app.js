'use strict';


// let maxRound = 25;
let currentRound = 0;
let timesViewed = 0;

// create constructor function that takes in name, filepath and times viewed as arguements
function Product (name, src, clicked = 0){
  this.name = name;
  this.src = src;
  this.clicked = clicked;

}
// Array of all products that take in name, file path, and times viewed as parameters
let allProducts = [

  new Product ('bag','./assets/bag.jpg', timesViewed),
  new Product ('banana', './assets/banana.jpg', timesViewed ),
  new Product ('bathroom', './assets/bathroom.jpg', timesViewed),
  new Product ('boots', './assets/boots.jpg', timesViewed),
  new Product ('breakfast','./assets/breakfast.jpg', timesViewed),
  new Product ('bubblegum','./assets/bubblegum.jpg', timesViewed),
  new Product ('chair', './assets/chair.jpg', timesViewed),
  new Product ('cthulhu', './assets/cthulhu.jpg', timesViewed),
  new Product ('dog-duck', './assets/dog-duck.jpg', timesViewed),
  new Product ('dragon', './assets/dragon.jpg', timesViewed),
  new Product ('pen', './assets/pen.jpg', timesViewed),
  new Product ('pet-sweep', './assets/pet-sweep.jpg', timesViewed),
  new Product ('scissors', './assets/scissors.jpg', timesViewed),
  new Product ('shark', './assets/shark.jpg', timesViewed),
  new Product ('sweep','./assets/sweep.png', timesViewed),
  new Product ('tauntaun', './assets/tauntaun.jpg', timesViewed),
  new Product ('unicorn', './assets/unicorn.jpg', timesViewed),
  new Product ('water-can', './assets/water-can.jpg', timesViewed),
  new Product ('wine-glass', './assets/wine-glass.jpg', timesViewed),
];

console.log(allProducts);

// Random Image that will generate a random image (number)

function randomImage(){

  return Math.floor(Math.random () * allProducts.length);
}



// let button = document.getElementById('button');
// button.addEventListener('click', showNewImage);

// // create function showNewImage
// function showNewImage(event){

//   let product = allProducts[randomImage()];

//   let img = document.getElementById('productImages');
//   img.src = `assets/${product.name}.jpg`;
//   img.alt = product.name;
//   img.title = product.name;
//   //   increment shown products
//   product.click++;
//   currentRound++;
//   if (currentRound === maxRound){
//     button.removeEventListener('click', showNewImage);
//   }
// }
// showNewImage();


function randomizer () {
  let randomArray = [];

  while (randomArray.length < 3) {

    let randomIndex = randomImage();


    // eslint-disable-next-line no-empty
    if (randomArray.includes(randomIndex)){

    }
    else {
      randomArray.push(randomIndex);
    }

  }
  //   console.log(randomArray);
  return randomArray;
}
randomizer();

// return randomArray

// grab the elements that i need to assign to.
// listeners

let image = document.getElementById('productImage1');
image.addEventListener('click', buttonrandomizer);

let imageTwo = document.getElementById('productImage2');
imageTwo.addEventListener('click', buttonrandomizer);

let imageThree = document.getElementById('productImage3');
imageThree.addEventListener('click', buttonrandomizer);

function buttonrandomizer(){

  let product = randomizer();


  console.log(product);

  let img = document.getElementById('productImage1');
  img.src = allProducts[product[0]].source;
  img.alt = product.name;
  img.title = product.name;
  // increment shown products
  product.click++;
  currentRound++;
  let img2 = document.getElementById('productImage2');
  img2.src = allProducts[product[1]].source;
  img2.alt = product.name;
  img2.title = product.name;
  //   increment shown products
  product.click++;
  currentRound++;
  let img3 = document.getElementById('productImage3');
  img3.src = allProducts[product[2]].source;
  img3.alt = product.name;
  img3.title = product.name;
  //   increment shown products
  product.click++;
  currentRound++;
  if (currentRound === 5){
    product.removeEventListener('click', buttonrandomizer);
  }
}
buttonrandomizer();

// function renderImage(){
//   let threeNewImages = randomizer();
//   let product1, product2, product3;
//   product1 = allProducts[threeNewImages[0]];
//   product2 = allProducts[threeNewImages[1]];
//   product3 = allProducts[threeNewImages[2]];

//   let img = document.getElementById('productImage1');
//   img.src = product1.src;
//   img.alt = product1.alt;
//   img.title = product1.title;
//   product1.timesViewed++;

//   let img2 = document.getElementById('productImage2');
//   img2.src = product2.src;
//   img2.alt = product2.alt;
//   img2.title = product2.title;
//   product2.timesViewed++;
//   let img3 = document.getElementById('productImage3');
//   img3.src = product3.src;
//   img3.alt = product3.alt;
//   img3.title = product3.title;
//   product3.timesViewed++;

// }
// // incorp into handleTheEvent after for loop
// renderImage();



// function handleTheEvent(e){
//   e.preventDefault();
// let clickedProduct = e.target.alt;
// // for loop it. through array .name
// // compare clicked product to allProducts
// }
