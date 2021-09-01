/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import {AppContextProvider} from '$components/AppContext';
import RootNavigation from '$navigation/navigator';
// import {store} from '$redux/store';
import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContextProvider} from '$components/AppContext';
import {User} from '$models/User';

const App = () => {
  const [user, updateUser] = useState<User | undefined>(undefined);
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />

        <AppContextProvider
          value={{
            user: user,
            updateUser: updateUser,
          }}>
          <View style={styles.container}>
            <RootNavigation />
          </View>
        </AppContextProvider>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  btnAccounts: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnMedicine: {
    marginHorizontal: 10,
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3BBF6E',
    transform: [{translateY: -30}],
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
