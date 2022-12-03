import { showCurrentDate } from '../../assets/js/date.mjs';


function addEvent(){
  document.querySelector("#newOrder").addEventListener("click", newOrder);
  document.querySelector("#searchProduct").addEventListener("click", valueInputSearch);
  document.querySelector("#addProduct").addEventListener("click", addProduct);
  document.querySelector("#cancel").addEventListener("click", cancelOrder);
  document.querySelector("#saveOrder").addEventListener("click", saveOrder);
}

import { editProductForm } from '../'

showCurrentDate()
addEvent()