import React from "react";
import { ScrollView, Box,  } from "..";
import Product from ".";

const ProductList = () => {

   return (
    <ScrollView 
    fluid
    >
        
        {Array.from(Array(40))?.map(item => (
                      
                     <Product cover="https://icon-library.com/images/icon-developer/icon-developer-12.jpg"
                     brand="Raf Simons" 
                     title="Large striped cardigan"
                     price="$1080"
                     />
                        
                ))}
    </ScrollView>
   )
}

    export default ProductList