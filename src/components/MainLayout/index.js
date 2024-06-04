import React from 'react';
import {SafeAreaView, StyleSheet, View, useColorScheme} from 'react-native';
import {fillColors, textColors} from '../../config/theme';
import {textSizes} from '../../config/typography';
import ColorSchemeSwitch from '../ColorSchemeSwitch';
const MainLayout = ({children, topScreen, endScreen}) => {
  const mode = useColorScheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: fillColors[`${mode}_primary`]},
      ]}>
      <View>
        <View
          style={[
            styles.topScreenContainer,
            {backgroundColor: fillColors[`${mode}_secondary`]},
          ]}>
          <ColorSchemeSwitch customStyle={styles.switch} />
          {topScreen}
        </View>
        <View style={styles.buttonContainer}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topScreenContainer: {
    height: '38%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  switch: {
    position: 'absolute',
    left: 0,
    top: 20,
  },
  buttonContainer: {
    gap: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 34,
    paddingVertical: 45,
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

export default MainLayout;
