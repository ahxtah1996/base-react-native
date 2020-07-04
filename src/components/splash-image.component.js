import {NativeModules} from 'react-native';

export const SplashImage = (props) => {
  if (!props.loading) {
    NativeModules.SplashScreen.close({
      animationType: 2,
      duration: 500,
    });
  }

  return null;
};
