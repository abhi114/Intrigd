import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useReducer, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Dimensions,
  ViewComponent,
} from 'react-native';
import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
import Card from './Components/cards';
import {blue} from 'chalk';
import Step1 from './Screens/Step1.js';
import Step2 from './Screens/Step2';
import Step6 from './Screens/Step6';
import Step6_starter from './Screens/Step6_starter';
import Step9 from './Screens/Step9';
import Step9_mid from './Screens/Step9_mid';
import Step10 from './Screens/Step10';



const App = props => {
  const [secondstepActive, setsecondStepActive] = useState(true);
  const WalkthroughableText = walkthroughable(Text);
  const WalkthroughableImage = walkthroughable(Image);
  const [step2,setstep2] = useState(false);

  useEffect(() => {
    props.copilotEvents.on('stepChange', handleStepChange);
    //props.start();
  }, []);
  const handleStepChange = step => {
    console.log(`handle step change: ${step.name}`);
  };
  const activateStep2 = ()=>{
    setstep2("add-step");
  }
  return (
    <View style={styles.container}>
      <View style={styles.containers}></View>
      <CopilotStep text="this is a image" order={3} name="thirdUniqueKey">
        <WalkthroughableImage
          source={require('./Constants/abcvcv.jpg')}
          style={styles.image}
        />
      </CopilotStep>

      <CopilotStep
        text="this is a card"
        order={2}
        name="fourthuniqueKey"
        active={secondstepActive}>
        <TouchableOpacity onPress={activateStep2}>
          <Card />
        </TouchableOpacity>
      </CopilotStep>
      <CopilotStep text="heading" order={1} name="firstUniqueKey">
        <WalkthroughableText
          style={{fontSize: 24, height: 70, textAlign: 'center', margin: 20}}>
          HEADER
        </WalkthroughableText>
      </CopilotStep>

      {/* iamges */}

      <View style={styles.activeSwitchContainer}>
        <CopilotStep
          active={secondstepActive}
          text="This is the second text"
          order={4}
          name="SecondUniqueKey">
          <WalkthroughableText style={{height: 60}}>
            Default text
          </WalkthroughableText>
        </CopilotStep>
      </View>
      {/*start button */}
      <View style={styles.middleView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start App Tour</Text>
        </TouchableOpacity>
      </View>
      {!step2 && <Step1 />}
      {step2 && <Step2 />}
      
    </View>
  );
};
const WIDTH = Dimensions.get('window').width;
export default copilot({
  overlay: 'svg', // or 'view'
  animated: true, // or false
  tooltipStyle: {
    
  },
  backdropColor: 'rgba(0, 10, 49, 0.79)',
  verticalOffset: 25,
})(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 10, 49, 0.79)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleView: {flex: 1, alignItems: 'center'},
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  activeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  image: {
    width: 140,
    height: 150,
    borderRadius: 70,
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    padding: 20,
    color: 'blue',
  },
});
