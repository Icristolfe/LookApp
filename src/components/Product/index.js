import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Touchable, Text, Cover, Spacer } from "..";

// Componente de produto =>


const Product = ({cover, brand,  title, price, selected = false}) => {

    const { navigate } = useNavigation()
    
    return (
        <Touchable
        onPress={() => navigate('Product')}
        hasPadding={!selected}
        row
        background="light"
        spacing={selected ? "5px 0" : "0 0 1px 0"}
        >
            <Cover width="80px" height="80px" image={cover} />

            <Box hasPadding style={{paddingTop:0 , paddingBottom:0, paddingRight:0}}>

                { !selected && <Text color="dark">{brand}</Text> }
                <Text color="dark" weight="bold">{title}</Text>

                <Spacer/>

                {selected && (
                    <Box>
                        <Text color="dark">Size: GG</Text>
                    </Box>
                )}

                <Box row width="100%" justify="space-between" >
                    <Text color="dark">{price}</Text>
                    <Text color="danger">{selected ? "Remove" : "Add to cart"}</Text>
                </Box>
            </Box>
        </Touchable>
    )
}

export default Product