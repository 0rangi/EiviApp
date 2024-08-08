import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {CadMensagem} from '../screens/CadMensagem'
import {Mensagem} from '../screens/Mensagem'


type MessageStackParamList = {
    Message: undefined
    CadMessage: undefined
}

type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Message'>
export type MessageTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Message' component={Mensagem} />
            <Stack.Screen name='CadMessage' component={CadMensagem} />
        </Stack.Navigator>
    )
}