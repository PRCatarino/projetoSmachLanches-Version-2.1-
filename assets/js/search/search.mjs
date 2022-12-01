import listProduct from "../product.mjs";
import { fillData, fillTable } from "../fill/fillData.mjs";

export function searchProduct(){

    const codeProduct = document.querySelector('#productCode').value
    let productFound = ''

    if(codeProduct != ''){
        listProduct.map((item)=>{
            if(item.codigo == codeProduct){
                return productFound = item
            }
        })
    }
    fillData(productFound)
    
}







