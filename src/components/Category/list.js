import React from "react";
import { ScrollView, Box,  } from "..";
import Category from ".";

const CategoryList = () => {

    const categorias = ['Women', 'Man', 'Kids', 'Clothing', ]

    const randomNumber = (Math.random() * 1000).toFixed(0);

   return (
    <ScrollView 
    style={{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom: 100,
    }}
    fluid
    >
        
        {Array.from(Array(1))?.map(item => (
                    <Box key={item} >
                       {
                        categorias.map(categoria => {
                            return <Category title={categoria} description={randomNumber + ' ITEMS'} />
                        })
                       }
                    </Box>
                ))}
    </ScrollView>
   )
}

    export default CategoryList