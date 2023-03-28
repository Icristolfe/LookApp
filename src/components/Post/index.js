import React from "react";
import { Box, Text, Title, Cover, Touchable, Spacer }
from "..";import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


import { colors } from '../../styles/theme.json'

const Post = () => {
    return (
        <Box //Box principal 
        hasPadding> 

            <Box //Box contendo o header
            row
            align="center"
            >
                  
                  <Cover //Cover da foto de perfil circular
                  image="https://icon-library.com/images/icon-developer/icon-developer-12.jpg" 
                  spacing="0px 15px 0px 0px"
                  width="40px"
                  height="40px"
                  circle 
                  />
               
                <Box //Box contendo nome do user e tempo que foi postado
                spacing="0px 0px 0px 10px">
                    <Title weight="bold" color="dark">Ícaro Cristolfe</Title>
                    <Text variant="small">10 minutes ago</Text>
                </Box>

                <Touchable //Touchable contendo o ícone de options
                align="flex-end"
                height="50px"
                width="50px"
                >
                <SimpleLineIcons name="options" size={24} color={colors.muted} />
                </Touchable>

            </Box>

            <Cover //Cover da imagem principal do post
            image="https://icon-library.com/images/icon-developer/icon-developer-12.jpg"
            spacing="10px 0px"
            width="320px"
            radius="10px"
            height="190px"
            />

            <Box //Box contendo imagem de quem curtiu, numero de curtidas e ícones
            row  
            fluid
            align="center"> 

            <Box //Box contendo img e quantidade de curtidas
            row
            fluid
            align="center"
            >
                {Array.from(Array(3))?.map(item => (
              
              <Cover key={Math.random()}  image="https://icon-library.com/images/icon-developer/icon-developer-12.jpg"
              border={`solid 1px ${colors.light}`}
              width="30px"
              height="30px"
              circle
              spacing="0px -15px 0px 0px"
              />
         ))}
                <Text small spacing="0px 0px 0px 20px">Liked by 10,098</Text>
            </Box>

                <Box //Box ícones
                row
                justify="flex-end"
                >

                <Touchable
                width="24px"
                height="24px"
                spacing="0px 15px 0px 0px" 
                >

                    <SimpleLineIcons name="heart" size={24} color={colors.danger} />

                </Touchable>

                <Touchable
                width="24px"
                height="24px"
                spacing="0px 15px 0px 0px"
                >

                    <SimpleLineIcons name="bubble" size={24} color="#999999" />

                </Touchable>

                <Touchable
                width="24px"
                height="24px"
                >
                    <SimpleLineIcons name="share" size={24} color="#999999" />

                </Touchable>

                </Box>
            </Box>

                <Spacer />
                
                <Box
                fluid //Box contendo o post 
                >

                <Text
                color="dark"
                small
                >
                    
                Interview: Shoe Designer John Fluevog On New Book, Spirituality And 'Slow Fashion'
            </Text>
                </Box>
           

        </Box>
    )
}

export default Post