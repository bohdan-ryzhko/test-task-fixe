import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { ApplicationRoot, Basket } from './screens';
import { colors } from './constants';

import { BasketNavigation } from './components/BasketNavigation';
import { ClearBasket } from './components/ClearBasket';

import Toast from 'react-native-toast-message';

const MainStack = createStackNavigator();

const titleStyle = {
  color: "#fff",
}

const headerStyle = {
  backgroundColor: colors.accentColor,
  height: 110,
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <MainStack.Navigator initialRouteName="Main">
              <MainStack.Screen
                options={{
                  title: "Product list",
                  headerTitleStyle: titleStyle,
                  headerStyle,
                  headerRightContainerStyle: {
                    paddingRight: 20,
                  },
                  headerLeftContainerStyle: {
                    paddingLeft: 20,
                  },
                  headerRight: () => <BasketNavigation />
                }}
                name="Main"
                component={ApplicationRoot}
              />
              <MainStack.Screen
                options={{
                  headerStyle,
                  headerTintColor: titleStyle.color,
                  headerTitleStyle: titleStyle,
                  headerRightContainerStyle: {
                    paddingRight: 20,
                  },
                  headerLeftContainerStyle: {
                    paddingLeft: 15,
                  },
                  headerRight: () => <ClearBasket />
                }}
                name="Basket"
                component={Basket}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast />
    </>
  );
}
