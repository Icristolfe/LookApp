import React from "react";
import Header from "../../components/Header";
import CategoryList from "../../components/Category/list";

import { SimpleLineIcons } from '@expo/vector-icons';

import { Box, Text, Touchable } from "../../components";


const Marketplace = () => {
    return ( 
        <>
            <Header title={'Categories'} right={() =>(
                <Touchable width="70px" hasPadding>
                <SimpleLineIcons name="bag" size={20} color="black" />
                </Touchable>
            )} />
            <CategoryList />
        </>
    )
}

export default Marketplace