import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default ({navigation}) => {
    return (
        <View style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'transparent'
            }}>
            <TouchableOpacity style={{
                backgroundColor: 'white', 
                padding: 20,
            }}>
            <Text>TsxPending</Text> 
            </TouchableOpacity>
        </View>
    )
} 
