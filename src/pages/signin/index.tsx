import {
  Pressable,
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useUserStore} from '../../store/userStore.ts';

export default function SignInScreen() {
  const {setIsLogin} = useUserStore();
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email && password;

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <KeyboardAvoidingView behavior={'position'} style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={'이메일을 입력해주세요'}
          value={email}
          onChangeText={setEmail}
          importantForAutofill={'yes'}
          autoComplete={'email'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={'비밀번호를 입력해주세요'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          ref={passwordRef}
        />
      </View>

      <Pressable
        onPress={handleLogin}
        style={StyleSheet.compose(
          styles.loginButton,
          styles.loginButtonActive,
        )}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 24,
  },
  inputWrapper: {
    alignItems: 'flex-start',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    gap: 4,
    padding: 8,
    borderRadius: 4,
  },
  loginButton: {
    textAlign: 'center',
    backgroundColor: 'gray',
    color: 'white',
    padding: 8,
    borderRadius: 8,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
