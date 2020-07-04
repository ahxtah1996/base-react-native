import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {Icon} from '@ui-kitten/components';

const KeyboardAvoidingView = (props) => {
  const lib = require('react-native-keyboard-aware-scroll-view');

  const defaultProps = {
    style: {flex: 1},
    contentContainerStyle: {flexGrow: 1},
    bounces: false,
    bouncesZoom: false,
    alwaysBounceVertical: false,
    alwaysBounceHorizontal: false,
  };

  return React.createElement(lib.KeyboardAwareScrollView, {
    enableOnAndroid: true,
    ...defaultProps,
    ...props,
  });
};

export const LoginScreen = ({navigation}) => {
  const EyeIcon = (props) => <Icon {...props} name="eye" />;

  const EyeOffIcon = (props) => <Icon {...props} name="eye-off" />;

  const PersonIcon = (props) => <Icon {...props} name="person" />;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate('SignUp2');
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSignInButtonPress = () => {
    if ((email == 'onmit' || email == 'Onmit') && password == '123456') {
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Xin Chào
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          Đăng nhập vào tài khoản của bạn
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          placeholder="Tài khoản"
          icon={PersonIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          placeholder="Mật khẩu"
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic">
            Quên mật khẩu?
          </Button>
        </View>
      </Layout>
      <Button
        style={styles.signInButton}
        size="giant"
        onPress={onSignInButtonPress}>
        Đăng nhập
      </Button>
      <Button style={styles.signUpButton} appearance="ghost" status="basic">
        Chưa có tài khoản? Đăng ký
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
