import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Fonts from '../Theme/Fonts';
const {width, height} = Dimensions.get('screen');
const Step8_readmore = () => {
  const [state, setState] = useState(false);
  const triggerNextComp = () => {
    setState('set-state');
  };

  return (
    <React.Fragment>
      {!state && (
        <View style={styles_readmore.card}>
          <View style={styles_readmore.textbox}>
            <Text
              style={[styles_readmore.cardText, {fontFamily: Fonts.regular}]}>
              Every Article has a{' '}
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Complexity
              </Text>{' '}
              parameter that indicates how{' '}
              <Text
                style={{
                  fontFamily: Fonts.sbi,
                }}>
                complex
              </Text>{' '}
              the article is for a general-purpose consumption. Complexity is
              decided based on{' '}
              <Text
                style={{
                  fontFamily: Fonts.sbi,
                }}>
                verbosity, language and reasonings
              </Text>{' '}
              of an article.
            </Text>
          </View>
          <View
            style={styles_readmore.Next}
            onStartShouldSetResponder={triggerNextComp}>
            <View style={styles_readmore.NextBox}>
              <Text style={styles_readmore.Nexttitle}>Next</Text>
            </View>
          </View>
          <View style={styles_readmore.circle}>
            <View style={styles_readmore.circleTextBox}>
              <Text style={styles_readmore.circleText}>1</Text>
            </View>
          </View>
          <View style={styles_readmore.lineView}></View>
          <View style={styles_readmore.lineView2}></View>
          <View style={styles_readmore.circlefaint}>
            <View style={styles_readmore.circleTextBox}>
              <Text style={styles_readmore.circleTextfaint}>2</Text>
            </View>
          </View>
          <View style={[styles_readmore.circlefaint2, {left: '67.5%'}]}>
            <View style={styles_readmore.circleTextBox}>
              <Text style={styles_readmore.circleTextfaint2}>3</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step8 />}
    </React.Fragment>
  );
};

const styles_readmore = StyleSheet.create({
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
    height: '28.56%',
  },
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '7.87%',
    paddingLeft: '3.17%',
    paddingRight: '3.17%',
  },
  cardText: {
    fontSize: width / 23.87,
    textAlign: 'center',
    fontWeight: '400',
  },

  Nexttitle: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: width / 28.5,
    color: '#ffff',
    fontWeight: '600',
  },
  Next: {
    width: '16.42%',
    height: '12.3%',
    backgroundColor: '#2C324A',
    position: 'absolute',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '80.47%',
    left: '79.9%',
  },
  NextBox: {
    top: '7.6%',
  },
  circle: {
    width: '4.83%',
    height: '8.5%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '66.6%',
    left: '27.5%',
  },
  circleText: {
    color: '#fff',
    fontSize: width / 35.75,
  },
  circleTextBox: {
    alignSelf: 'center',
  },
  lineView: {
    position: 'absolute',
    height: '1.5%',
    width: '15.2%',
    borderBottomColor: '#F14336',
    borderBottomWidth: 2,
    left: '32.3%',
    top: '70.4%',
  },
  lineView2: {
    position: 'absolute',
    height: '1.5%',
    width: '15.2%',
    borderBottomColor: '#F14336',
    borderBottomWidth: 2,
    left: '52.3%',
    top: '70.4%',
  },
  circlefaint: {
    width: '4.83%',
    height: '8.5%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '66.6%',
    left: '47.5%',
  },
  circleTextfaint: {
    color: '#FFF',
    fontSize: width / 35.75,
  },
  circlefaint2: {
    width: '4.83%',
    height: '8.5%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '66.6%',
  },
  circleTextfaint2: {
    color: '#FFF',
    fontSize: width / 35.75,
  },
});

export default Step8_readmore
