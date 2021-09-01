import Button from '$components/Button';
import Container from '$components/Container';
import TextInputLogin from '$components/TextInputLogin';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import AppContext, {AppContextInterface} from '$components/AppContext';
import navigationReset from '$helpers/navigationReset';
const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {user, updateUser} = React.useContext<AppContextInterface>(AppContext);

  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate('Home');
  };

  console.log('user', user);

  const onSubmit = async (data: {email: string; password: string}) => {
    console.log('dâta', data);
    await auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(value => {
        if (value.user) {
          // navigation.navigate('Home');
          // console.log('User account created & signed in!', value.user?._user);
          updateUser(value.user?._user);
          navigationReset(navigation, 'Home');
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <Container paddingHorizontal style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputLogin
            placeholder={'Email'}
            value={value}
            onChangeText={onChange}
            containerStyle={styles.email}
            keyboardType="email-address"
          />
        )}
        name="email"
        defaultValue="tudev@gmail.com"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputLogin
            placeholder={'Password'}
            value={value}
            containerStyle={styles.password}
            onChangeText={onChange}
            secureTextEntry={true}
          />
        )}
        name="password"
        defaultValue="123456"
      />

      <Button
        // loading={loading}
        style={styles.btnLogin}
        title={'Login'}
        onPress={handleSubmit(onSubmit)}
      />
      <Button
        // loading={loading}
        style={styles.btnLogin}
        title={'Skip'}
        onPress={handleSkip}
      />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  email: {
    marginTop: 87,
  },
  input: {
    height: 50,

    backgroundColor: 'red',
    paddingHorizontal: 16,
  },
  password: {
    marginTop: 5,
  },
  btnLogin: {marginTop: 52},
});
