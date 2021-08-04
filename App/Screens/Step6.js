import React,{useState} from 'react';
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

const Step6 = () => {
  const [state, setstate] = useState(false);
  
  const triggerSetComp = () => {
    setstate('add-comp');
  };
  return (
    <React.Fragment>
      {!state && (
        <View style={styles.card}>
          <View style={styles.textbox}>
            <Text style={[styles.cardText, {fontFamily: Fonts.regular}]}>
              An <Text style={{fontWeight: 'bold'}}>Opinion</Text> is a{' '}
              <Text style={{fontFamily:Fonts.sbi}}>Point of View</Text> on a given
              Topic. It answers the Topic in a <Text style={{fontFamily:Fonts.sbi}}>specific</Text> way. A Topic can have{' '}
              <Text style={{fontFamily:Fonts.sbi}}>multiple</Text> Opinions.
            </Text>
          </View>
          <View style={styles.Next} onStartShouldSetResponder={triggerSetComp}>
            <View style={styles.NextBox}>
              <Text style={styles.Nexttitle}>Next</Text>
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
          <View style={[styles.circlefaint, {left: '67.5%'}]}>
            <View style={styles.circleTextBox}>
              <Text style={styles.circleTextfaint}>3</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step7 />}
    </React.Fragment>
  );
};

const Step7 = () => {
  const [state, setstate] = useState(false);
  const triggerSetComp = () => {
    setstate('add-comp');
  };
  const [nextstate,setNextState] = useState(false);
  const triggerNextSetComp = () =>{
    setNextState('add-next-comp');
  }
  return (
    <React.Fragment>
      {(!state || !nextstate) && (
        <View style={styles1.card}>
          <View style={styles1.textbox}>
            <Text style={[styles1.cardText, {fontFamily: Fonts.regular}]}>
              For a given Opinion, there is a{' '}
              <Text
                style={{
                  fontFamily: Fonts.sbi,
                }}>
                list
              </Text>{' '}
              of{' '}
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Articles
              </Text>{' '}
              that{' '}
              <Text
                style={{
                  fontFamily: Fonts.sbi,
                }}>
                support
              </Text>{' '}
              that opinion.
            </Text>
          </View>
          <View
            style={styles1.Next}
            onStartShouldSetResponder={triggerNextSetComp}>
            <View style={styles1.NextBox}>
              <Text style={styles1.Nexttitle}>Next</Text>
            </View>
          </View>
          <View
            style={styles1.readmore}
            onStartShouldSetResponder={triggerSetComp}>
            <View style={styles1.textbox}>
              <Text style={styles1.title}>Read More</Text>
            </View>
          </View>
          <View style={styles1.circle}>
            <View style={styles1.circleTextBox}>
              <Text style={styles1.circleText}>1</Text>
            </View>
          </View>
          <View style={styles1.lineView}></View>
          <View style={styles1.lineView2}></View>
          <View style={styles1.circlefaint}>
            <View style={styles1.circleTextBox}>
              <Text style={styles1.circleTextfaint}>2</Text>
            </View>
          </View>
          <View style={[styles1.circlefaint2, {left: '67.5%'}]}>
            <View style={styles1.circleTextBox}>
              <Text style={styles1.circleTextfaint2}>3</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step7readMore />}
      {nextstate && <Step8 />}
    </React.Fragment>
  );
};

const Step7readMore = () =>{
  const [state,setState] = useState(false);
  const triggerNextComp = () =>{
    setState("set-state");
  }
 
  return (
    <React.Fragment>
      {!state && (
        <View style={styles_readmore.card}>
          <View style={styles_readmore.textbox}>
            <Text
              style={[styles_readmore.cardText, {fontFamily: Fonts.regular}]}>
              For a given Opinion, there is a{' '}
              <Text style={{fontFamily: Fonts.sbi}}>list</Text> of{' '}
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Articles
              </Text>{' '}
              that{' '}
              <Text
                style={{
                  fontFamily: Fonts.sbi,
                }}>
                support
              </Text>{' '}
              that opinion. The articles are carefully curated for quality from
              reputed publishers/journals/blogs. The most{' '}
              <Text
                style={{
                  fontFamily: Fonts.sbi,
                }}>
                recent
              </Text>{' '}
              articles appear on top.
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

}

const Step8 = () => {
  const [state, setState] = useState(false);
  const [step9state,setNextState] = useState(false);
  const triggerStep9Comp = ()=>{
    setNextState('step9_state');
  }
  const triggerNextComp = () => {
    setState('set-state');
  };
  return (
    
    <React.Fragment>
      {(!state || !step9state) && (
      <View style={styles2.card}>
        <View style={styles2.textbox}>
          <Text style={[styles2.cardText, {fontFamily: Fonts.regular}]}>
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
            the article is for a general-purpose consumption
          </Text>
        </View>
        <View style={styles2.Next} onStartShouldSetResponder = {triggerStep9Comp}>
          <View style={styles2.NextBox}>
            <Text style={styles2.Nexttitle}>Next</Text>
          </View>
        </View>
        <View style={styles2.readmore} onStartShouldSetResponder={triggerNextComp}>
          <View style={styles2.textbox}>
            <Text style={styles2.title}>Read More</Text>
          </View>
        </View>
        <View style={styles2.circle}>
          <View style={styles2.circleTextBox}>
            <Text style={styles2.circleText}>1</Text>
          </View>
        </View>
        <View style={styles2.lineView}></View>
        <View style={styles2.lineView2}></View>
        <View style={styles2.circlefaint}>
          <View style={styles2.circleTextBox}>
            <Text style={styles2.circleTextfaint}>2</Text>
          </View>
        </View>
        <View style={[styles2.circlefaint2, {left: '67.5%'}]}>
          <View style={styles2.circleTextBox}>
            <Text style={styles2.circleTextfaint2}>3</Text>
          </View>
        </View>
      </View>)}
      {state && <Step8_readmore/>}
      {step9state && <Step9_starter/>}
    </React.Fragment>
  );
};

const Step8_readmore = () => {
  const [state, setState] = useState(false);
  const triggerNextComp = () => {
    setState('set-state');
  };

  return (
    <React.Fragment>
      {!state && (
        <View style={Step8_styles_readmore.card}>
          <View style={Step8_styles_readmore.textbox}>
            <Text
              style={[
                Step8_styles_readmore.cardText,
                {fontFamily: Fonts.regular},
              ]}>
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
            style={Step8_styles_readmore.Next} onStartShouldSetResponder={triggerNextComp}>
            <View style={Step8_styles_readmore.NextBox}>
              <Text style={Step8_styles_readmore.Nexttitle}>Next</Text>
            </View>
          </View>
          <View style={Step8_styles_readmore.circle}>
            <View style={Step8_styles_readmore.circleTextBox}>
              <Text style={Step8_styles_readmore.circleText}>1</Text>
            </View>
          </View>
          <View style={Step8_styles_readmore.lineView}></View>
          <View style={Step8_styles_readmore.lineView2}></View>
          <View style={Step8_styles_readmore.circlefaint}>
            <View style={Step8_styles_readmore.circleTextBox}>
              <Text style={Step8_styles_readmore.circleTextfaint}>2</Text>
            </View>
          </View>
          <View style={[Step8_styles_readmore.circlefaint2, {left: '67.5%'}]}>
            <View style={Step8_styles_readmore.circleTextBox}>
              <Text style={Step8_styles_readmore.circleTextfaint2}>3</Text>
            </View>
          </View>
        </View>
      )}
      {state && <Step9_starter/>}
    </React.Fragment>
  );
};

const Step9_starter = () => {
  return (
    <View style={Step9_start.card}>
      <Image
        source={require('../Assets/Icons/information.png')}
        style={Step9_start.image}></Image>
      <View style={Step9_start.textbox}>
        <Text style={[Step9_start.cardText, {fontFamily: Fonts.regular}]}>
          Tap arrow to change <Text style={{fontWeight: 'bold'}}>Opinion</Text>.
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
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '11.87%',
    paddingLeft: '3.17%',
    paddingRight: '3.17%',
  },
  cardText: {
    fontSize: width / 22.67,
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
    width: '16.38%',
    height: '15.06%',
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
  circle: {
    width: '4.83%',
    height: '10.06%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '63.9%',
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
    height: '1.8%',
    width: '15.2%',
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 2,
    left: '32.3%',
    top: '67.9%',
  },
  lineView2: {
    position: 'absolute',
    height: '1.8%',
    width: '15.2%',
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 2,
    left: '52.3%',
    top: '67.9%',
  },
  circlefaint: {
    width: '4.83%',
    height: '10.06%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    top: '63.9%',
    left: '47.5%',
  },
  circleTextfaint: {
    color: '#C6C6C6',
    fontSize: width / 35.75,
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
    fontSize: width / 22.87,
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
    fontSize: width / 35.75,
  },
  circleTextBox: {
    alignSelf: 'center',
  },
  lineView: {
    position: 'absolute',
    height: '2.5%',
    width: '15.2%',
    borderBottomColor: '#F14336',
    borderBottomWidth: 2,
    left: '32.3%',
    top: '51.9%',
  },
  lineView2: {
    position: 'absolute',
    height: '2.5%',
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
    fontSize: width / 35.75,
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
    fontSize: width / 35.75,
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
    fontSize: width / 30.5,
  },
});

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
    borderBottomColor: '#C6C6C6',
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
    borderColor: '#C6C6C6',
    backgroundColor: '#FFF',
    top: '66.6%',
  },
  circleTextfaint2: {
    color: '#C6C6C6',
    fontSize: width / 35.75,
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
    height: '21.73%',
  },
  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: '8.1%',
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
    height: '18.06%',
    backgroundColor: '#2C324A',
    position: 'absolute',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '73.75%',
    left: '79.9%',
  },
  NextBox: {
    top: '7.6%',
  },
  circle: {
    width: '4.83%',
    height: '11.5%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '56.25%',
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
    height: '2.2%',
    width: '15.2%',
    borderBottomColor: '#F14336',
    borderBottomWidth: 2,
    left: '32.3%',
    top: '60.9%',
  },
  lineView2: {
    position: 'absolute',
    height: '2.2%',
    width: '15.2%',
    borderBottomColor: '#F14336',
    borderBottomWidth: 2,
    left: '52.3%',
    top: '60.9%',
  },
  circlefaint: {
    width: '4.83%',
    height: '11.5%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '56.25%',
    left: '47.5%',
  },
  circleTextfaint: {
    color: '#FFF',
    fontSize: width / 35.75,
  },
  circlefaint2: {
    width: '4.83%',
    height: '11.5%',
    position: 'absolute',
    borderRadius: width / 2,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F14336',
    top: '56.25%',
  },
  circleTextfaint2: {
    color: '#FFF',
    fontSize: width / 35.75,
  },
  readmore: {
    position: 'absolute',
    width: '22.29%',
    height: '18.75%',
    borderColor: '#2C324A',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    top: '73.75%',
    left: '4.3%',
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: width / 28.5,
  },
});

const Step8_styles_readmore = StyleSheet.create({
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

const Step9_start = StyleSheet.create({
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
    top: '50.5%',
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
    top: '19.3%',
    width: '11.3%',
    height: '25.6%',
    resizeMode: 'contain',
  },
  skipbox: {
    width,
    height: '12.02%',
    top: '57.96%',
    left: '85.9%',
  },
  skipText: {
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 16,
  },
});


export default Step6;



