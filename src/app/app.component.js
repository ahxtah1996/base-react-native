import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {AppNavigator} from '../navigation/app.navigator';
import {AppLoading, LoadFontsTask} from './app-loading.component';
import {SplashImage} from '../components/splash-image.component';
import reducer from '../reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </Provider>
);

const loadingTasks = [
  () =>
    LoadFontsTask({
      'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
      'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
    }),
];

const defaultConfig = {
  mapping: 'eva',
  theme: 'light',
};

const Splash = ({loading}) => (
  <SplashImage
    loading={loading}
    source={require('../assets/images/image-splash.png')}
  />
);

const Loading = () => (
  <AppLoading
    tasks={loadingTasks}
    initialConfig={defaultConfig}
    placeholder={Splash}>
    {(props) => <App {...props} />}
  </AppLoading>
);

export default Loading;
