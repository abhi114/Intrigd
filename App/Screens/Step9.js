import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Fonts from '../Theme/Fonts';
const {width, height} = Dimensions.get('screen');

const Step9 = () => {
  return (
    <View style={Step6_start.card}>
      <Image
        source={require('../Assets/Icons/information.png')}
        style={Step6_start.image}></Image>
      <View style={Step6_start.textbox}>
        <Text style={[Step6_start.cardText, {fontFamily: Fonts.regular}]}>
          Tap to Open article
        </Text>
      </View>
      <View style={Step6_start.skipbox}>
        <Text style={Step6_start.skipText}>skip</Text>
      </View>
    </View>
  );
};

const Step6_start = StyleSheet.create({
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
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '55.5%',
    paddingLeft: '2.17%',
    paddingRight: '2.17%',
  },
  cardText: {
    fontSize: width / 23,
    textAlign: 'center',
  },

  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    position: 'absolute',
    left: '44.2%',
    top: '25.3%',
    width: '11.3%',
    height: '25.6%',
    resizeMode: 'contain',
  },
  skipbox: {
    width,
    height: '12.02%',
    top: '65.96%',
    left: '85.9%',
  },
  skipText: {
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 16,
  },
});

export default Step9;
