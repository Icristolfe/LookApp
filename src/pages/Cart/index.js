import React, { useState } from "react";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

import  { Box, Text } from '../../components'

const Cart = () => {

    const [ tab, setTabe ] = useState('cart')

    return (
        <>
            <Header title="Cart" goBack/>
            <Tabs tabs={[
                {label: "Cart", value: "cart"},
                {label: "Payment", value: "payment"}
            ]}
                active={tab}
                onChange={(value) => setTabe(value)}
            />
        </>
    )
}

export default Cart