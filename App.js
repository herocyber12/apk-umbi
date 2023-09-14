
import React, { useEffect } from 'react'
import Navigator from './App/Dependencies/Navigator'
import { StatusBar } from 'react-native'
import RNBootSplash from "react-native-bootsplash";

export default function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      // console.log("Bootsplash has been hidden successfully");
    });

    StatusBar.setBackgroundColor('#fff')
    StatusBar.setBarStyle('dark-content')

    
  })
  return <Navigator/>
}
