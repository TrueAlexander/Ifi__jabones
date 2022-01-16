import load from "./modules/load";
import loadProduct from "./modules/loadProduct";

load();

setTimeout(chooseProduct, 3000)

function chooseProduct() {

  const prodItems = document.querySelectorAll('.card')


  prodItems.forEach((prodItem) => {

    prodItem.addEventListener('click', () => {

      const mission = document.querySelector('.mission');
      const opinions = document.querySelector('.opinions');
      const main = document.querySelector('.main');
      const mainContainer = document.querySelector('.main > .container');

      const ind = prodItem.id;

      mission.style.display = 'none'
      opinions.style.display = 'none'
      main.style.background = '#c6e5b1'
      mainContainer.innerHTML = ''

      loadProduct(ind);

    })

  })

}

//to finish anchors after reload?
/*const missionBtn = document.querySelector('#mission-btn')
const productsBtn = document.querySelector('#products-btn')
const opinionsBtn = document.querySelector('#opinions-btn')

missionBtn.addEventListener('click', () => {

  document.location.reload()

})

productsBtn.addEventListener('click', () => {

  document.location.reload()

})

opinionsBtn.addEventListener('click', () => {

  document.location.reload()


})*/
