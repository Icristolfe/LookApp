import React from "react";
import { ScrollView, Box,  } from "..";
import Order from '.'

const OrderList = () => {

   return (
    <ScrollView 
    fluid
    background="light"
    hasPadding
    >
        {
        Array.from(Array(4))?.map(item => (
                <Order />
                        
                ))}
    </ScrollView>
   )
}

    export default OrderList