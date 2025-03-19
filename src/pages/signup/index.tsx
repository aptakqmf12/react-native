import {
  Pressable,
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function SignUpScreen() {
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email && password;

  return (
    <KeyboardAvoidingView style={styles.container}>
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
        style={
          isValid
            ? StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
            : styles.loginButton
        }>
        <Text style={styles.loginButtonText}>회원가입</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 24,
    padding: 24,
  },
  inputWrapper: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
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
