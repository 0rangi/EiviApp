import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Mensagem } from '../screens/Mensagem';
import { Perfil } from '../screens/Perfil';
import { colors } from '../styles/globalstyle';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { MessageNavigation } from './message.navigation';

type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.primary,
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.third,
                tabBarInactiveTintColor: colors.primary,
            }}
        >

            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color={ colors.fourth } /> 
                    ),
}}
/>
            <Tab.Screen name='Mensagem' component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="message1" size={24} color={ colors.fourth } />
),
}}
/>
        </Tab.Navigator>
    )
}

