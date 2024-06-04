// Button.js
import React from 'react';
import {Text, TouchableOpacity, View, useColorScheme} from 'react-native';
import {textColors} from '../../config/theme';
import styles from './styles';
const Button = ({children, onPress, theme, isRounded, isLarge, isActive}) => {
  const mode = useColorScheme();
  const buttonStyles = [
    styles.button,
    styles[`${mode}_${theme}`],
    isRounded && styles.rounded,
    isLarge && styles.large,
    isActive && styles.isActive,
  ];
  const textStyles = [styles.text];

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={[textStyles, {color: textColors[`${mode}_primary`]}]}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
Button.defaultProps = {theme: 'primary'};
export default Button;
