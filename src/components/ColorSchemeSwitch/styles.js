// switch styles.js
import {StyleSheet} from 'react-native';
import {radius} from '../../config/layout';
import {fillColors, textColors} from '../../config/theme';
import {textSizes} from '../../config/typography';
export default StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 30,
    height: 50,
    width: 50,
  },
  toggleLightTheme: {
    flex: 1,
    borderRadius: radius.sm,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: fillColors.light_primary,
  },
  toggleDarkTheme: {
    flex: 1,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: fillColors.dark_secondary,
  },
  textLight: {
    textAlign: 'center',
    fontSize: textSizes.md,
    color: textColors.light_primary,
  },
  textDark: {
    textAlign: 'center',
    fontSize: textSizes.md,
    color: textColors.dark_primary,
  },
});
