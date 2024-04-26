const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".Show-All")
const buttonMapAll = document.querySelector(".Map-All")
const buttonSumAll = document.querySelector(".Sum-All")
const buttonFilterAll = document.querySelector(".Filter-All")

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
})

return newValue
}


function showAll(productArray) {
  let myLi = ''

  productArray.forEach((product) => {
    myLi += `
               <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
              </li>
            `

  })
  list.innerHTML = myLi


}

function mapAllItems() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, //dar 10% 
  }))


  showAll(newPrice)
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
                         <li>
                           <p>Ó valor total dos itens são R$ ${totalValue} </p>
                        </li>
                  `


}

function filterAllItems() {
  const filterJustVegans = menuOptions.filter((product) => product.vegan === true)

  showAll(filterJustVegans)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems)
buttonSumAll.addEventListener("click", sumAllItems)
buttonFilterAll.addEventListener("click", filterAllItems)
