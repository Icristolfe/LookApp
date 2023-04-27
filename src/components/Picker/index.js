import React, { useState, useEffect } from 'react'

import { StyleSheet } from 'react-native'
import { Text, Box, Touchable, Spacer } from '..'
import { colors } from '../../styles/theme.json'

const Picker = ({options = [], initialValue= "", title= ""}) => {

    const [ selected, setSelected] = useState('')

    useEffect(() => {
        setSelected(initialValue)
    },[])


    return (
        <>
            <Text weight="bold" color="dark">{title}</Text>

            <Spacer size="25px" />

            <Box fluid row height="50px" justify="space-around">
                {
                    options?.map(opt => (
                        <Touchable 
                        onPress={() => { setSelected(opt?.value)}}
                        style={[styles.base, styles[selected === opt?.value ? 'checked' : 'unchecked']]}>
                            <Text style={selected === opt?.value ? styles.textChecked : 'undefined'}>{opt?.label}</Text>
                        </Touchable>
                    ))
                }
            </Box>
        </>
   
    )
    
}

const styles = StyleSheet.create({
    base: {
        maxWidth: 45,
        height: 45,
        marginRight: 10,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
    },
    unchecked: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.muted,
    }, 
    checked: {
        backgroundColor: colors.primary
    },
    textChecked: {
        color: colors.light,
    },
    
    texthecked: {
        color: colors.light,
    },
})

export default Picker