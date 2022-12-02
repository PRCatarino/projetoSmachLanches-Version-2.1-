import { clearField } from './fieldClear.mjs';

export function fillData(item){
    let quantity = document.querySelector("#quantity").value = 1;
    let product = document.querySelector("#product").value = item.product;
    let price = document.querySelector('#price').value = `R$ ${item.price},00`;
    let addProduct = document.querySelector('#addProduct');
    addProduct.removeAttribute('disabled')
    addProduct.classList.remove('disabled')
}

export function fillTable(item){
    let noRequest = document.querySelector('.noRequest');
    let bag = document.querySelector('#bag');
    let codeProduct = document.querySelector('#productCode');
    let quantity = document.querySelector('#quantity');
    let product = document.querySelector("#product");
    let price = document.querySelector('#price');
    let saveOrder = document.querySelector('.saveOrder');
    saveOrder.classList.remove('disabled');
    saveOrder.removeAttribute('disabled');

    noRequest.innerHTML = ''

    bag.innerHTML += `
    <tr>
        <td>${codeProduct.value}</td>
        <td>${product.value}</td>
        <td>${quantity.value}</td>
        <td>${price.value}</td  
    </tr>
    `
    clearField()
}
