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