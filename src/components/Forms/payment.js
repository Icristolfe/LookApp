import React, { useState, useRef, useEffect } from "react";
import SegmentedPicker from 'react-native-segmented-picker';

import { Text, Input, Spacer, Box, Title, Touchable } from "..";

const PaymentForm = ({onChange = (creditCart) =>{}}) => {

    const pickerRef = useRef(null)
    const [data, setData] = useState({
        holder_name : "",
        number: "",
        valid_date: "",
        cvv: ""

    })

    useEffect(() => {
        onChange(data)
    }, [data])

    return (

        <>

        <SegmentedPicker
        ref={pickerRef}
        onConfirm={data => setData({
            ...data,
            valid_date: `${data.month}/${data.year}`
        })}
        options={[
          {
            key: 'month',
            items: [
              { label: 'Option 1', value: 'option_1' },
              { label: 'Option 2', value: 'option_2' },
            ],
          },
          {
            key: 'year',
            items: [
              { label: 'Option 3', value: 'option_3' },
            ],
          },
        ]}
        />


        <Box>
            <Title variant="small">Select and enter your payment details</Title>

            <Spacer />

            <Text color="dark">By continuing you agree to our <Text color="danger">Terms</Text></Text>

            <Spacer size="20px" />

            <Input placeholder="Holder Name"
            value={data.holder_name}
            onChangeText={ holder_name => setData({...data, holder_name})} />

            <Spacer />

            <Input placeholder="Credit Card Number"
            value={data.number}
            onChangeText={ number => setData({...data, number})} />

            <Spacer />

            <Touchable width="100%" height="50px" onPress={() => pickerRef.current.show()}>
                <Input pointerEvents="none" editable={false} placeholder="07/2025" />
            </Touchable>
            

            <Spacer />

            <Box row>
                <Box spacing="0px 10px 0px 0px">
                    <Input placeholder="CVV" 
                    value={data.cvv}
                    onChangeText={ cvv => setData({...data, cvv})} />

                </Box>

                <Box align="center" style={{paddingTop:10}}>
                    <Text variant="small">3 or 4 digits usually found on the signature strip</Text>
                    
                </Box>
            </Box>

        </Box>
        </>
        
       
    )
}

export default PaymentForm
