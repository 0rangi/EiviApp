import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/globalstyle';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigation } from './tab.navigation';
import { Camera } from '../screens/Camera';
import { Imagens } from '../screens/Imagens';
import { QrCode } from '../screens/Qrcode';
type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    QrCode: undefined
    Imagem: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: colors.primary,
            drawerStyle: {
                backgroundColor: colors.primary,
            },
            drawerActiveTintColor: colors.third,
            drawerInactiveTintColor: colors.third

        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.third} />
                    ),
                }} />

            <Drawer.Screen name='Camera' component={Camera}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="camera" size={24} color={colors.third} />
                    ),
                }} />
            <Drawer.Screen name='Imagem' component={Imagens}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="picture-o" size={24} color={colors.third} />
                    ),
                }} />

            <Drawer.Screen name='QrCode' component={QrCode}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="qrcode" size={24} color={colors.third} />
                    ),
                }}       />

        </Drawer.Navigator>



    )
}