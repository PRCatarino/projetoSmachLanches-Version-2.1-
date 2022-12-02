export function clearField(){
    let codeProduct = document.querySelector('#productCode').value = ''
    let quantity = document.querySelector("#quantity").value = ''
    let product = document.querySelector("#product").value = ''
    let price = document.querySelector('#price').value = `R$ 00,00`
    let addProduct = document.querySelector('#addProduct')
    addProduct.setAttribute('disabled', 1)
    addProduct.classList.add('disabled')
}