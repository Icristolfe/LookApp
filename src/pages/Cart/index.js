import React, { useState } from "react";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Product from "../../components/Product";
import PaymentForm from "../../components/Forms/payment";
import CongratsModal from "../../components/Modals/congrats";

import  { ScrollView, Spacer, Box, Title, Text, Button } from '../../components'
import { colors } from '../../styles/theme.json'
import util from '../../util'


const Cart = () => {

    const [ tab, setTab ] = useState('payment')
    const [ showCongrats, setShowCongrats ] = useState(false)

    return (
        <>

            {
                showCongrats && 
                <CongratsModal />
            }
            

            <Header title="Cart" goBack/>
            <Tabs tabs={[
                {label: "Cart", value: "cart"},
                {label: "Payment", value: "payment"}
            ]}
                active={tab}
                onChange={(value) => setTab(value)}
            />

            <ScrollView hasPadding background="light">

                <Spacer size="50px" />

                   <Title variant="small">Order number is 458765342</Title> 
                   
                <Spacer size="50px" />

                {
                    tab === "cart" && (
                    <>
                          {Array.from(Array(3))?.map(item => (
                      
                      <Product cover="https://icon-library.com/images/icon-developer/icon-developer-12.jpg"
                      brand="Raf Simons" 
                      title="Large striped cardigan"
                      price="$1080"
                      selected
                      />
                         
                 ))}

                    <Spacer size="40px" />

                    <Box row width="100%" justify="space-between" height="30px" >
                        <Text color="dark">Order:</Text>
                        <Text color="dark">$445.00</Text>
                    </Box>

                    <Box row width="100%" justify="space-between" height="30px" >
                        <Text color="dark">Discount:</Text>
                        <Text color="discountColor">$-44.50</Text>
                    </Box>

                    <Box row width="100%" justify="space-between" height="30px" >
                        <Text color="dark">Delivery:</Text>
                        <Text color="dark">$410.50</Text>
                    </Box>

                    <Box row width="100%" justify="space-between"  height="30px" >
                        <Text weight="bold" color="dark">Total Order:</Text>
                        <Text weight="bold" color="dark">$445.00</Text>
                    </Box>

                    <Spacer size="50px" />

                    <Button
                    onPress={() => setTab("payment")}
                    spacing="0px 0px 30px 0px"
                    block
                    background="danger"
                    >
                        <Text color='light' weight="300">Place Order</Text>
                    </Button>
                    
                    <Spacer size="50px" />
                    </>
                    )
                }

                
                {
                    tab === "payment" && (
                    <>

                    <Spacer size="30px" />

                        <Box row width="100%"
                        justify="space-between"
                        style={{
                            borderBottomWidth:0.5,
                            borderBottomColor: util.toAlpha(colors.muted, 50),
                            paddingBottom: 5
                        }}
                        >
                            <Text weight="bold" color="dark">Shipping addres</Text>
                            <Text color="danger">Change</Text>
                        </Box>
                        <Spacer />

                        <Text color="dark" weight="300">Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495 United States</Text>

                        <Spacer size="30px" />

                        <Box row width="100%"
                        justify="space-between"
                        style={{
                            borderBottomWidth:0.5,
                            borderBottomColor: util.toAlpha(colors.muted, 50),
                            paddingBottom: 5
                        }}
                        >
                            <Text weight="bold" color="dark">Shipping addres</Text>
                            <Text color="danger">Change</Text>
                        </Box>

                        <Spacer />

                        <Text color="dark" weight="300">Standard Delivery</Text>
                        <Text color="dark" weight="300">Saturday 27 - Tuesday 30</Text>
                        <Text color="dark" weight="300">Cost: $10</Text>

                        <Spacer size="70px" />

                        <PaymentForm onChange={ (creditCardData) => console.log(creditCardData)}/>

                        <Spacer size="30px" />

                        <Button
                        onPress={() => { setShowCongrats(true)}}
                        spacing="0px 0px 30px 0px"
                        block
                        background="danger"
                        >
                        <Text color='light' weight="300">Confirmation</Text>
                    </Button>

                    <Spacer size="50px" />
                    </>
                    )
                }

            </ScrollView>
        </>
    )
}

export default Cart