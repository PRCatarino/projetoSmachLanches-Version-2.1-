import listProduct from "./product.mjs";
import { fillData } from "./fillData.mjs";

export function searchProduct(){
    const codeProduct = document.querySelector('#productCode').value
    let productFound = ''
    let found = false
    if(codeProduct != '' && codeProduct.length != 0 && codeProduct != undefined){
        listProduct.map((item)=>{
            if(item.codigo == codeProduct){
                found = true
                return productFound = item 
            }
        })   
        if(!found){
            alert('foi n')
        } 
    }else{
        alert('foi n')
    }
    if(found){
        fillData(productFound)
    }
}







