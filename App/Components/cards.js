import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {copilot, CopilotStep} from 'react-native-copilot';

export default function cards({copilot}) {
    const [state,setState] = useState({})
    
    return (
      <View {...copilot} style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardContent}>
            Centre's amendment to pension plans for Intelligence officers:Is is
            justified?
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation: 3,
        shadowOffset: {width:1,height:1},
        backgroundColor:'#fff',
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6,
        height:150
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:20,
        fontSize:20
    }
});
