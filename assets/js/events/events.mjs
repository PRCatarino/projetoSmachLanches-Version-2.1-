import { searchProduct } from '../search/search.mjs';
import { fillTable } from '../fill/fillData.mjs';
import  saveOrder from '../saveOrder/saveOrder.mjs';

export default function addEvent(){
    document.querySelector('.buttonMain').addEventListener('click',searchProduct);
    document.querySelector('#addProduct').addEventListener('click', fillTable);
    document.querySelector('.saveOrder').addEventListener('click', saveOrder)
}