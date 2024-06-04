import React, {useState} from 'react';
import {
  Appearance,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import styles from './styles';

const ColorSchemeSwitch = ({customStyle}) => {
  const switchStyles = [styles.switch];
  const colorScheme = useColorScheme();
  const [icon, setIcon] = useState(colorScheme === 'dark' ? '☼' : '☾');
  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setIcon(newColorScheme === 'light' ? '☾' : '☼');
    Appearance.setColorScheme(newColorScheme);
  };

  return (
    <View style={[switchStyles, customStyle]}>
      <TouchableOpacity
        onPress={toggleColorScheme}
        style={
          colorScheme === 'dark'
            ? styles.toggleLightTheme
            : styles.toggleDarkTheme
        }>
        <Text
          style={colorScheme === 'dark' ? styles.textLight : styles.textDark}>
          {icon}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

ColorSchemeSwitch.defaultProps = {theme: 'primary'};

export default ColorSchemeSwitch;
