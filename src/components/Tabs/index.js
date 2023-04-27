import React from "react";

import { Text, Touchable, ScrollView } from '..'
import { colors } from '../../styles/theme.json'

const Tabs = ({tabs, active = "", onChange = (tab) => {}}) => {
   const activeTabStyle = {
    borderBottomWidth: 3,
    borderBottomColor: colors.danger
   }
    
    return (
        <ScrollView
        horizontal 
        style={{
            maxHeight: 70,
            backgroundColor: colors.light
        }}
        >
            {
                tabs?.map(tab => (
                    <Touchable
                    onPress={() => onChange(tab.value)}
                    key={Math.random()}
                    height="70px"
                    width={"200px"}
                    hasPadding
                    style={[{
                        alignItems: "center" ,
                    },
                    active === tab.value ? activeTabStyle : { }
                ]}
                    >
                <Text color={active === tab.value ? "primary" : undefined}>{tab?.label}</Text>
            </Touchable>
                ))
            }
        </ScrollView>
    )
}

export default Tabs