import React from 'react';
import { Dispatch, SetStateAction, useState } from 'react'
import { Slide2 } from './src/screens/Slide2'
import { Slide1 } from './src/screens/Slide1'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, PaytoneOne_400Regular } from '@expo-google-fonts/paytone-one';
import { StatusBar } from 'expo-status-bar';
{/*não funciona, não reconhece a export do navigations*/}
import { Navigation } from './src/navigations';

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}

export default function App() {


  const [page, setPage] = useState(1)

  let [fontsLoaded] = useFonts({
    PaytoneOne_400Regular
  })
  if (!fontsLoaded) {
    return null
  }

switch(page){

   case 1:
    return <Slide1 setPage={setPage}/>
    case 2:
      return <Slide2 setPage={setPage}/>
}

return (
<>
<Navigation />
<StatusBar style="auto" />
</>
);
 
}



