import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import {copilot, CopilotStep} from 'react-native-copilot';

import Fonts from '../Theme/Fonts';

const {width, height} = Dimensions.get('screen');

const Step3 = () => {
  return (
    <View style={styles.card}>
      <View style={styles.textbox}>
        <Text style={[styles.cardText, {fontFamily: Fonts.regular}]}>
          This section showcases the overall Topic. A Topic usually is a mix of
          a fact and its implication/ reasoning/ outcome. It is a broad
          questioning on current affairs of India and the world with the
          possibility of multiple Opinions.
        </Text>
      </View>
      <View style={styles.Next}>
        <View style={styles.NextBox}>
          <Text style={styles.Nexttitle}>Next</Text>
        </View>
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
    height: '31.92%',
  },
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '11.87%',
    paddingLeft: '2.17%',
    paddingRight: '2.17%',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },

  Nexttitle: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#ffff',
    fontWeight:"600",
  },
  Next: {
    width: '16.42%',
    height: '11.06%',
    backgroundColor: '#2C324A',
    position: 'absolute',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '82.55%',
    left: '79.9%',
  },
  NextBox:{
      top:'7.6%'
    }
});

export default Step3;
