import React from "react";

import { StretchyScrollView } from "react-native-stretchy";
import Header from "../../components/Header";
import { Box, Text, Touchable, Title, Spacer, Button } from "../../components";
import { SimpleLineIcons } from '@expo/vector-icons';

import util from "../../util";
import { colors } from '../../styles/theme.json'
import Picker from "../../components/Picker";
// Página de produto =>


const Product = () => {
    return ( 
        <>
        <Header 
        goBack
        title="Striped Cardigan"
        right={() =>(
            <Touchable width="70px" hasPadding>
            <SimpleLineIcons name="bag" size={20} color="black" />
            </Touchable>
             )}/>

             <StretchyScrollView
            image={{
                uri: "https://shoppingcity.com.br/media/catalog/product/cache/51a80c9da94f85ac42b65ba251e9fd91/c/a/cardigan_masculino_preto_malha_longo_3_.jpg"
            }}

            imageOverlay={
                <Box background={util.toAlpha(colors.dark,40)} >

                </Box>
            }

            foreground={
                <Box hasPadding justify="flex-end">
                    <Title weight="bold" color="light" variant="big">$1080</Title>
                </Box>
            }
             >
                <Box hasPadding background="light">
                <Text color="black">T-SHIRT</Text>

                <Spacer size="20px" />

                <Title color="black">A.P.C. Collection Spring 2015</Title>

                <Spacer size="30px" />

                <Text color="black">
                Enjoy the beauty of italian cotton all over your body. This item will fit your body and warm you up all over and during spring. This item will fit your body and warm you up all over and during spring.
            
                And over and over again, this is the text.
                </Text>

                <Spacer size="30px" />

                <Picker 
                title="Size"
                options={[
                   { label: 'P', value: 'P' },
                   { label: 'M', value: 'M' },
                   { label: 'G', value: 'G' },
                   { label: 'XG', value: 'XG' },
                ]}
                initialValue="M"
                />

                <Spacer size="30px" />

                <Button block>
                    <Text color="light">Add to cart</Text>
                </Button>
                </Box>

             </StretchyScrollView>
        </>
    )
}

export default Product