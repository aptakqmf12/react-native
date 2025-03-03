import {
  Keyboard,
  KeyboardAvoidingViewProps,
  TouchableWithoutFeedback,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import React from 'react';
interface DisMissKeyboardViewProps extends KeyboardAvoidingViewProps {
  children: React.ReactNode;
}

export default function DisMissKeyboardView({
  children,
  ...props
}: DisMissKeyboardViewProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView style={props.style} {...props}>
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}
