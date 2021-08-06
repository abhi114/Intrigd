import React, {Component,useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Button,
  Alert,
  AppRegistry,
  
} from 'react-native';
import {copilot} from 'react-native-copilot';
import cards from '../Components/cards';

import Fonts from '../Theme/Fonts';

const {width, height} = Dimensions.get('screen');



const Step2 = () => {
  const [state, setstate] = useState(false)
  const [nextState, setNextState] = useState(false);
  const triggerNextComp = () => {
    setNextState('add-read-more');
  };
  const triggerSetComp = ()=>{
    
    setstate('add-comp')
    
  }
  
  return (
    <React.Fragment>
      {(!state || !nextState) && (
        <View style={styles.card}>
          <View style={styles.textbox}>
            <Text style={[styles.cardText, {fontFamily: Fonts.regular}]}>
              This section showcase the overall{' '}
              <Text style={{fontWeight: 'bold'}}>Topic</Text>.A{' '}
              <Text style={{fontWeight: 'bold'}}>Topic</Text> usually is a mix
              of a fact and its{' '}<Text style={{fontWeight: 'bold',fontStyle:'italic'}}>
                 implications/reasoning/oucomes</Text> 
              ...
            </Text>
          </View>
          <View
            style={styles.readmore}
            onStartShouldSetResponder={triggerSetComp}>
            <View>
              <Text style={styles.title}>Read More</Text>
            </View>
          </View>

          <View style={styles.Next} onStartShouldSetResponder={triggerNextComp}>
            <View>
              <Text style={styles.Nexttitle}>Next</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step3 />}
      {nextState && <Step4 />}
    </React.Fragment>
  );
  
};

const Step3 = () => {
  const [state, setstate] = useState(false);
  const triggerSetComp = () => {
    setstate('add-comp');
  };
  return (
    <React.Fragment>
      {!state && (
        <View style={styles1.card}>
          <View style={styles1.textbox}>
            <Text style={[styles1.cardText, {fontFamily: Fonts.regular}]}>
              This section showcases the overall{' '}
              <Text style={{fontWeight: 'bold'}}>Topic</Text>. A{' '}
              <Text style={{fontWeight: 'bold'}}>Topic</Text> usually is a mix
              of a fact and its <Text style={{fontWeight: 'bold'}}>Topic</Text>{' '}
              usually is a mix of a fact and its{' '}
              <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                implications/reasoning/oucomes
              </Text>
              . It is a broad questioning on current affairs of India and the
              world with the possibility of multiple{' '}
              <Text style={{fontWeight: 'bold'}}>Opinions</Text>.
            </Text>
          </View>
          <View style={styles1.Next} onStartShouldSetResponder={triggerSetComp}>
            <View style={styles1.NextBox}>
              <Text style={styles1.Nexttitle}>Next</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step4 />}
    </React.Fragment>
  );
};

const Step4 = () => {
  return (
    <View style={styles2.card}>
      <Image
        source={require('../Assets/Icons/information.png')}
        style={styles2.image}></Image>
      <View style={styles2.textbox}>
        <Text style={[styles2.cardText, {fontFamily: Fonts.regular}]}>
          Tap to Bookmark Topic
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
    height: '21.73%',
  },
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '11.87%',
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
    fontSize: width / 29.5,
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



const styles1 = StyleSheet.create({
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
    paddingTop:'4%',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: width / 29.5,
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
    top: '82.55%',
    left: '79.9%',
  },
  NextBox: {
    top: '7.6%',
  },
});

const styles2 = StyleSheet.create({
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
    top: '27.3%',
    width: '11.3%',
    height: '25.6%',
    resizeMode: 'contain',
  },
});

export default Step2;
