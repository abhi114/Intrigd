import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {copilot, CopilotStep} from 'react-native-copilot';

import Fonts from '../Theme/Fonts';

const {width, height} = Dimensions.get('screen');

const Step1 = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../Assets/Icons/information.png')}
        style={styles.image}></Image>
      <View style={styles.textbox}>
        <Text style={[styles.cardText, {fontFamily: Fonts.regular}]}>
          Press The (i) button to know about{' '}
          <Text style={{fontWeight: 'bold'}}>Topic</Text>.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#FBF8FF',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width,
    height: '24.86%',
  },
  textbox:{
    justifyContent:'center',
    alignSelf:'center',
    top:'59.5%',

  },
  cardText: {
    fontSize:width/23,
    textAlign:'center' },

  imageContainer: {
    flexDirection:'row',

    
  },
  image:{
    position:'absolute',
    left:'44.2%',
    top:'27.3%',
    width:'11.3%',
    height:'25.6%',
    resizeMode:"contain"

  }

});

export default Step1;
