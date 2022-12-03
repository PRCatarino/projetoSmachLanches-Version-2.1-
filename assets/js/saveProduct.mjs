import { includeProducts, updateProduct } from '../../pages/produtos'
//Dar import das funções de buscar todos os produtos e cleanForm

const inputProductName = document.querySelector("#productName");
const inputProductPrice = document.querySelector("#productPrice");
const inputCodProduct = document.querySelector("#productCode");


//Botão salvar produto, recebe o objeto da API com a chave e valor correspondete,
// faz o fetch com metodo POST na api e testa se o id do produto é diferente da variável idProduct que é atualizada sempre,
// se for diferente, vai retornar a atualização do produto e se for igual ,vai criar um novo

export const saveProduct = () => {
    const product = {
      id: parseInt(inputCodProduct.value),
      nome: inputProductName.value,
      preco: parseFloat(inputProductPrice.value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    };
  
    const headers = new Headers();
  
    headers.append("content-type", "application/json");
  
    const initProduct = {
      headers: headers,
      method: "POST",
      body: JSON.stringify(product),
    };
  
    if (product.id !== idProduct) {
      updateProduct(product, initProduct);
    } else {
      includeProducts(initProduct);
      searchAllProduct();
    }
  
    cleanForm();
    searchAllProduct();
};
