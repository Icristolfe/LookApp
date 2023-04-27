import React from "react";
import Header from '../../components/Header'
import ProductList from "../../components/Product/list";

import { Box, Text, Touchable } from "../../components";
import { SimpleLineIcons } from '@expo/vector-icons';

const Category = () => {
    return ( 
       <>
       <Header title="Category X" right={() =>(
                <Touchable width="70px" hasPadding>
                <SimpleLineIcons name="bag" size={20} color="black" />
                </Touchable>
            )}/>
            <ProductList />
       </>
    )
}

export default Category