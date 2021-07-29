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

const Step7 = () => {
  return (
    <View style={styles.card}>
      <View style={styles.textbox}>
        <Text style={[styles.cardText, {fontFamily: Fonts.regular}]}>
          For a given Opinion, there is a list of Articles that support that
          opinion.
        </Text>
      </View>
      <View style={styles.Next}>
        <View style={styles.NextBox}>
          <Text style={styles.Nexttitle}>Next</Text>
        </View>
      </View>
      <View style={styles.readmore}>
        <View style={styles.textbox}>
          <Text style={styles.title}>Read More</Text>
        </View>
      </View>
      <View style={styles.circle}>
        <View style={styles.circleTextBox}>
          <Text style={styles.circleText}>1</Text>
        </View>
      </View>
      <View style={styles.lineView}></View>
      <View style={styles.lineView2}></View>
      <View style={styles.circlefaint}>
        <View style={styles.circleTextBox}>
          <Text style={styles.circleTextfaint}>2</Text>
        </View>
      </View>
      <View style={[styles.circlefaint2, {left: '67.5%'}]}>
        <View style={styles.circleTextBox}>
          <Text style={styles.circleTextfaint2}>3</Text>
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
    height: '19.56%',
  },
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '11.87%',
    paddingLeft: '3.17%',
    paddingRight: '3.17%',
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
    fontWeight: '600',
  },
  Next: {
    width: '16.42%',
    height: '18.06%',
    backgroundColor: '#2C324A',
    position: 'absolute',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '72.55%',
    left: '79.9%',
  },
  NextBox: {
    top: '7.6%',
  },
  circle: {
    width: '4.83%',
    height: '12.8%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '47.2%',
    left: '27.5%',
  },
  circleText: {
    color: '#fff',
    fontSize: 10,
  },
  circleTextBox: {
    alignSelf: 'center',
  },
  lineView: {
    position: 'absolute',
    height: 3,
    width: '15.2%',
    borderBottomColor: '#F14336',
    borderBottomWidth: 2,
    left: '32.3%',
    top: '51.9%',
  },
  lineView2: {
    position: 'absolute',
    height: 3,
    width: '15.2%',
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 2,
    left: '52.3%',
    top: '51.9%',
  },
  circlefaint: {
    width: '4.83%',
    height: '12.8%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '47.2%',
    left: '47.5%',
  },
  circleTextfaint: {
    color: '#FFF',
    fontSize: 10,
  },
  circlefaint2: {
    width: '4.83%',
    height: '12.8%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#C6C6C6',
    backgroundColor: '#FFF',
    top: '47.2%',
  },
  circleTextfaint2: {
    color: '#C6C6C6',
    fontSize: 10,
  },
  readmore: {
    position: 'absolute',
    width: '22.29%',
    height: '18.75%',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '73.1%',
    left: '4.3%',
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
});

export default Step7;
