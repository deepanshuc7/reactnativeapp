import { useState, useContext } from 'react';
import { SafeAreaView, View, StyleSheet, Button, Platform} from 'react-native';
import FormTextField from '../components/FormTextField';
import axios from "../utils/axios";
import { login, loadUser } from "../services/AuthService";
import AuthContext from '../contexts/AuthContext';


export default function ({ navigation }) {

  const {setUser} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  async function handleLogin() {
    setErrors({});

    try {
      console.log('atempting login with:', {email, password});
      await login({
        email,
        password,
        // device_name: `${Platform.OS} ${Platform.Version}`,
      });

    const user = await loadUser();
    setUser(user);

    console.log('userdata: ' ,user);
    
    } catch (e) {
      console.error('login error: ', e);
      if(e.response?.status === 422){
          setErrors(e.response.data.errors);
      }
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FormTextField 
        label="Email address:" 
        value={email} 
        onChangeText={(text) => setEmail(text)} 
        keyboardType="email-address"
        errors={errors.email}
        />

        <FormTextField 
        label="password:" 
        secureTextEntry={true} 
        value={password} 
        onChangeText={(text) => setPassword(text)} />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Create an account" onPress={() => {
          navigation.navigate("Create account");
        }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {backgroundColor: 'fff', flex: 1},
  container: { padding: 20, rowGap: 16 },
})