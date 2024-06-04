// button styles.js
import {StyleSheet} from 'react-native';
import {radius} from '../../config/layout';
import {fillColors} from '../../config/theme';
import {textSizes} from '../../config/typography';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    width: 60,
    height: 60,
  },

  // theme btn
  light_primary: {
    backgroundColor: fillColors.light_primaryBtn,
  },
  light_secondary: {
    backgroundColor: fillColors.light_secondaryBtn,
  },
  dark_primary: {
    backgroundColor: fillColors.dark_primaryBtn,
  },
  dark_secondary: {
    backgroundColor: fillColors.dark_secondaryBtn,
  },

  // Highlighted style
  isActive: {
    borderColor: 'black',
  },

  //size btn
  large: {
    width: 150,
  },
  rounded: {
    borderRadius: radius.lg,
  },
  // text
  text: {
    textAlign: 'center',
    fontSize: textSizes.md,
  },
});
