import { deleteProduct, searchAllProduct } from '../../pages/produtos'
//Limpa o formulário assim que clicar no botão Salvar Produto
const inputProductName = document.querySelector("#productName");
import { searchAllProduct } from './searchAllProduct.mjs'
const inputProductPrice = document.querySelector("#productPrice");

export let cleanForm = () => {
    inputProductName.value = "";
    inputProductPrice.value = "";
};

  //Botão excluir
export const btnDeleteProduct = (button) => {
    let idElementDelete = button.target.dataset.index;
    let trProduct = document.querySelector(`#${idElementDelete}`);
    let tdProducts = trProduct.querySelectorAll("td");
    let idProduct = tdProducts[0].innerText;
    let msg = "Deseja realmente exluir esse produto?";
  
    if (confirm(msg) == true) {
      deleteProduct(idProduct);
      searchAllProduct();
    }
};