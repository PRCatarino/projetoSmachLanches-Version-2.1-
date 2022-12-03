import { showCurrentDate } from '../../assets/js/date.mjs';

//Fetch que inclui todo produto novo na api
export const includeProducts = (initProduct) => {
    fetch(`${url}/produto`, initProduct)
      .then((response) => {
        if (response.ok) {
          alert("Sucesso! Produto cadastrado");
          return response.json();
        } else {
          throw new Error("ERRO! Produto já cadastrado");
        }
      })
      .catch((err) => {
        alert(err.message);
    });
};

//Fetch que atualiza produto já cadastrado na api
export const updateProduct = (product, initProduct) => {
    let answer;
    fetch(`${url}/produto/${product.id}/atualizar`, initProduct)
      .then(async (response) => {
        if (response.ok) {
          answer = await response.json();
          alert("Produto editado com sucesso!");
        } else {
          throw new Error("Desculpe, algo não saiu como esperado");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
};
  //Fetch para deletar produto da api
export const deleteProduct = (id) => {
    fetch(`${url}/produto/${id}/deletar`, { method: "POST" })
      .then((response) => {
        if (response.ok) {
          alert("Produto excluído com sucesso");
          return response.json();
        } else {
          throw new Error("Não foi possível deletar o elemento selecionado");
        }
      })
      .catch((err) => {
        alert(err.message);
    });
};
//Botão do editar
export const editProductForm = (button) => {
    let idElement = button.target.dataset.index;
    let trProduct = document.querySelector(`#${idElement}`);
    let tdProducts = trProduct.querySelectorAll("td");
    inputCodProduct.value = tdProducts[0].innerText;
    inputProductName.value = tdProducts[1].innerText;
    inputProductPrice.value = tdProducts[2].innerText;
};

//Exibe tabela renderizada no html da terceira seção (seção produto)
export const showProductsTable = (products) => {
  let template = "";
  products.forEach((element, index) => {
    template += `<tr id="tr_${index}">`;
    template += `<td data-td="td_id">${element.id}</td>`;
    template += `<td>${element.nome}</td>`;
    template += `<td>${element.preco}</td>`;
    template += `<td><button class="edit"><img data-index="tr_${index}" src="./assets/img/Icons/pencil.png"/></button><button class="delete"><img data-index="tr_${index}" src="./assets/img/Icons/grayTrash.png"></button></td>`;
    template += `<tr>`;
    idProduct = element.id + 1;
    tableBodyThirdySection.innerHTML = template;
  });
  [...document.querySelectorAll(".edit")].forEach((element) => {
    element.addEventListener("click", editProductForm);
  });
  [...document.querySelectorAll(".delete")].forEach((element) => {
    element.addEventListener("click", btnDeleteProduct);
  });
  inputCodProduct.value = idProduct;
};
//Esse tbm é teste
export const serachProductById = (id) => {
  const headers = new Headers();

  fetch(`${url}/produto/${id}`, { headers: headers, mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      showOrdersForm(jsonData);
    });
};

showCurrentDate()
