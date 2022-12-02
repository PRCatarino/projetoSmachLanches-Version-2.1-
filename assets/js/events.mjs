import { searchProduct } from './search.mjs';
import { fillTable } from './fillData.mjs';
import  saveOrder from './saveOrder.mjs';

export default function addEvent(){
    document.querySelector('.buttonMain').addEventListener('click',searchProduct);
    document.querySelector('#addProduct').addEventListener('click', fillTable);
    document.querySelector('.saveOrder').addEventListener('click', saveOrder)
}