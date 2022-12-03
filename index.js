import { showCurrentDate } from './assets/js/date.mjs';
import { printBtn } from './assets/js/buttons.mjs';

function addEvent(){
    document.querySelector("#print").addEventListener("click", printBtn);
    document.querySelector("#selectType").addEventListener("change", filterOrdersByType);
    document.querySelector("#selectStatus").addEventListener("change", filterOrdersByStatus);
    document.querySelector("#checkboxHeader").addEventListener("click", selectAllCheckbox);
    document.querySelector(".delete").addEventListener("click", deleteOrder);
}
addEvent()
showCurrentDate()

//Esse código precisa ir na seção de troca de página, no caso onde a função pra ir pra página de produtos acontece
//[...document.querySelectorAll(".edit")].forEach((element) => {
//    element.addEventListener("click", productServers.editProductForm);
//});
  //[...document.querySelectorAll(".delete")].forEach((element) => {
    //element.addEventListener("click", productServers.btnDeleteProduct);
  //});
