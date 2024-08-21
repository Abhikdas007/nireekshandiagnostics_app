import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';



const Dashboard = () => {
    const [num, setNum]= useState(0);
    const [count, setCount]= useState(0);

    useEffect(()=>{
        console.warn('num component mounted');
    }, [num])

    useEffect(()=>{
        console.warn('count component mounted');
    }, [count])

    return (
        <View>
            <Text>
                Hello Dashboard - {num}
            </Text>


            <Text>
                Hello Count - {count}
            </Text>



            <Button title="Update Num" onPress={()=>{setNum(num + 1)}}/>
            <Button title="Update Count" onPress={()=>{setCount(count + 1)}}/>


        </View>
    )
}


export default Dashboard;