import { showProductsTable }  from '../../pages/produtos'
const inputCodProduct = document.querySelector("#productCode");


//Fetch que busca todos os produtos

export const searchAllProduct = () => {
    const headers = new Headers();
  
    fetch(`${url}/produto/todos`, { headers: headers, mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        showProductsTable(jsonData);
        inputCodProduct.setAttribute("placeholder", idProduct);
        return idProduct;
    });
};