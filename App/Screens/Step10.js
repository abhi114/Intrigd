import React,{useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Fonts from '../Theme/Fonts';
const {width, height} = Dimensions.get('screen');

const Step10 = () => {
  const [state, setstate] = useState(false);
  const [nextState, setNextState] = useState(false);
  const triggerNextComp = () => {
    setNextState('add-read-more');
  };
  const triggerSetComp = () => {
    setstate('add-comp');
  };

  return (
    <React.Fragment>
      {(!state || !nextState) && (
        <View style={styles10.card}>
          <View style={styles10.textbox}>
            <Text style={[styles10.cardText, {fontFamily: Fonts.regular}]}>
              The original article is{' '}
              <Text style={{fontWeight: 'bold'}}>summarized & re-phrased</Text>
              {' '}below in three-six bullet points.
            </Text>
          </View>
          <View
            style={styles10.readmore}
            onStartShouldSetResponder={triggerSetComp}>
            <View>
              <Text style={styles10.title}>Read More</Text>
            </View>
          </View>

          <View
            style={styles10.Next}
            onStartShouldSetResponder={triggerNextComp}>
            <View>
              <Text style={styles10.Nexttitle}>Next</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step11/>}
      {nextState && <Step12/>}
    </React.Fragment>
  );
};

const Step11 = () => {
  const [state, setstate] = useState(false);
  const triggerSetComp = () => {
    setstate('add-comp');
  };
  return (
    <React.Fragment>
      {!state && (
        <View style={styles11.card}>
          <View style={styles11.textbox}>
            <Text style={[styles11.cardText, {fontFamily: Fonts.regular}]}>
              The original article is{' '}
              <Text style={{fontWeight: 'bold'}}>summarized & re-phrased</Text>{' '}
              below in three-six bullet points. Each bullet point is represented
              in the form of an individual
              <Text style={{fontWeight: 'bold'}}>card.</Text> Only{' '}
              <Text style={{fontWeight: 'bold'}}>major & important</Text> points
              that support the Topic & Opinion at hand have been selected. Flow
              and Coherency have been maintained.
            </Text>
          </View>
          <View
            style={styles11.Next}
            onStartShouldSetResponder={triggerSetComp}>
            <View style={styles11.NextBox}>
              <Text style={styles11.Nexttitle}>Next</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step12/>}
    </React.Fragment>
  );
};
const Step12 = () => {
  return (
    <View style={stylesStep12.card}>
      <Image
        source={require('../Assets/Icons/information.png')}
        style={stylesStep12.image}></Image>
      <View style={stylesStep12.textbox}>
        <Text style={[stylesStep12.cardText, {fontFamily: Fonts.regular}]}>
          Bookmark Article
        </Text>
      </View>
    </View>
  );
};

const styles10 = StyleSheet.create({
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
    height: '21.73%',
  },
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '29.87%',
    paddingLeft: '2.17%',
    paddingRight: '2.17%',
  },
  cardText: {
    fontSize: width / 23,
    textAlign: 'center',
    fontWeight: '400',
  },

  readmore: {
    position: 'absolute',
    width: '22.29%',
    height: '18.75%',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '75.1%',
    left: '4.3%',
  },
  title: {
    paddingTop: '5%',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: width / 29.5,
    fontWeight: '600',
  },
  Nexttitle: {
    paddingTop: '5%',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: width / 25.5,
    color: '#ffff',
    fontWeight: '600',
  },
  Next: {
    width: '16.4%',
    height: '16.25%',
    backgroundColor: '#2C324A',
    position: 'absolute',
    height: '18.75%',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '75.6%',
    left: '79.9%',
  },
});

const styles11 = StyleSheet.create({
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
    fontSize: width / 22.5,
    textAlign: 'center',
    fontWeight: '400',
  },

  Nexttitle: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: width / 25.5,
    color: '#ffff',
    fontWeight: '600',
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
    top: '85.55%',
    left: '79.9%',
  },
  NextBox: {
    top: '7.6%',
  },
});

const stylesStep12 = StyleSheet.create({
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
    top: '59.5%',
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
    top: '29.3%',
    width: '11.3%',
    height: '25.6%',
    resizeMode: 'contain',
  },
  
});


export default Step10;
