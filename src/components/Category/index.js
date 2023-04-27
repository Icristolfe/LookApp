import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Text, Touchable, Cover, Title, Spacer, Box } from "..";
import util from "../../util";
import { colors } from '../../styles/theme.json'

const Category = ({title, description}) => {

    const { navigate } = useNavigation()

    return (
        <Touchable
        onPress={() => navigate('Category')}
        width="100%"
        height="180px"
        radius="10px"
        spacing="10px 0px"
        >
            <Cover width="100%" height="100%" image="https://icon-library.com/images/icon-developer/icon-developer-12.jpg">
                <Box
                width="100%"
                justify="center"
                align="center"
                hasPadding
                background={util.toAlpha(colors.black, 50)}
                >
                    <Title color="light" weight="bold">{title}</Title>
                    <Text color="light">{description}</Text>
                </Box>
            </Cover>
        </Touchable>
    )
}

export default Category