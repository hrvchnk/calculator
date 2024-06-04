import React from 'react';
import {StyleSheet, Text, useColorScheme} from 'react-native';
import {textColors} from '../../config/theme';
import {textSizes} from '../../config/typography';

const CalculationDisplay = ({displayText, result}) => {
  const colorScheme = useColorScheme();
  const textStyle = colorScheme === 'dark' ? styles.textLight : styles.textDark;

  return (
    <Text style={textStyle} adjustsFontSizeToFit numberOfLines={1}>
      {displayText}
      {result !== undefined && result !== null ? `${result}` : ''}
    </Text>
  );
};

export default CalculationDisplay;

const styles = StyleSheet.create({
  textLight: {
    textAlign: 'right',
    fontSize: textSizes.lg,
    color: textColors.dark_primary,
    width: '100%',
  },
  textDark: {
    textAlign: 'right',
    fontSize: textSizes.lg,
    color: textColors.light_primary,
    width: '100%',
  },
});
