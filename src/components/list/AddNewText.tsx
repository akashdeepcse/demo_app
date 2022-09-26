import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {Button} from '../core';
import {colors} from '../../theme';
import {AddTextComponentProps} from '../../types';
import {globalStyles} from '../../styles';

export const AddNewText: React.FC<AddTextComponentProps> = props => {
  const {text, placeholder, onTextChange, onPressDone} = props;
  const textInputRef = useRef<TextInput | null>(null);
  const disabelDoneButton = Boolean(text === '');

  const onFocusText = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <View
      style={[globalStyles.fullScreenContainerWhite, styles.contentContainer]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onFocusText}
        style={[styles.textinputContainerStyle, globalStyles.shadow]}>
        <TextInput
          ref={textInputRef}
          autoFocus
          placeholder={placeholder}
          value={text}
          onChangeText={onTextChange}
        />
      </TouchableOpacity>
      <Button
        title="Done"
        disabled={disabelDoneButton}
        style={styles.buttonStyle}
        onClick={onPressDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textinputContainerStyle: {
    minHeight: 250,
    borderRadius: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: '15%',
  },
  contentContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 15,
  },
  buttonStyle: {
    width: '75%',
    alignSelf: 'center',
  },
});
