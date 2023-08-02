import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation } from '@react-navigation/native';
// import OTPInputView from '@twotalltotems/react-native-otp-input';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState('');

  const navigation = useNavigation()
  // console.log(mobile)
  const signInWithPhoneNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber('+91' + mobile);
    setConfirm(confirmation);
    console.log('optp senddd');
  };

  const verifyCode = async () => {
    try {
      const res = await confirm.confirm(otp);
      navigation.navigate("Home")
      console.log(res);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View>
          <Image
            source={require('../images/banners.jpeg')}
            style={styles.banner}
          />
        </View>
      </View>
      <Text style={styles.loginTitle}>India no. 1 Food </Text>
      <View style={styles.divider}>
        <View
          style={[
            styles.dividerView,
            {marginRight: 20, marginLeft: 20},
          ]}></View>
        <Text style={styles.dividerText}>Login or Sign up</Text>
        <View
          style={[
            styles.dividerView,
            {marginRight: 20, marginLeft: 20},
          ]}></View>
      </View>

      {confirm === null ? (
        <View>
          <TextInput
            placeholderTextColor="#8e8e8e"
            keyboardType={'number-pad'}
            placeholder="mobile number"
            style={styles.mobileInput}
            value={mobile}
            onChangeText={txt => {
              // console.log(txt)
              setMobile(txt);
            }}
            color="black"
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              signInWithPhoneNumber();
            }}>
            <Text style={styles.loginBTnText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <OTPInputView
            style={{width: '80%', height:50 , alignSelf: 'center', marginTop:50, marginBottom:50}}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              setOtp(code);
            }}
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              verifyCode();
            }}>
            <Text style={styles.loginBTnText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}
      <View></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topView: {
    height: responsiveHeight(35),
  },
  banner: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderBottomLeftRadius: Platform.OS == 'ios' ? 50 : 0,
    borderBottomRightRadius: Platform.OS == 'ios' ? 50 : 0,
  },
  loginTitle: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: '800',
    color: '#000',
    alignSelf: 'center',
    width: '85%',
    textAlign: 'center',
    marginTop: responsiveHeight(5),
  },
  divider: {
    flexDirection: 'row',
    width: '100%',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dividerView: {
    height: 1,
    backgroundColor: '#BeBeBe',
    width: '25%',
    opacity: 0.5,
  },
  dividerText: {
    fontSize: responsiveFontSize(2.5),
    color: '#8e8e8e',
  },
  mobileInput: {
    marginTop: responsiveHeight(5),
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: '#8e8e8e',
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 10,
  },
  loginBtn: {
    backgroundColor: '#fc0434',
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginTop: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginBTnText: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: 'white',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    // borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: 'red',
  },
});
