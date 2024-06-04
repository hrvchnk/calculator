import PropTypes from 'prop-types';
//import * as R from 'ramda';
import React from 'react';
import {View} from 'react-native';
import I from 'react-native-vector-icons/MaterialCommunityIcons';

import {textColors} from '../../config/theme';
import {iconSizes} from '../../config/typography';

function SvgIcon({name, size, theme, customSize, customStyles}) {
  const iconSize = customSize ? customSize : iconSizes[size];

  return (
    <View style={[{width: iconSize, height: iconSize}, customStyles]}>
      <I name={name} size={iconSize} color={textColors[theme]} />
    </View>
  );
}

SvgIcon.defaultProps = {
  size: 'xs',
  theme: 'primary',
  customSize: null,
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(iconSizes)),
  theme: PropTypes.oneOf(Object.keys(textColors)),
  customSize: PropTypes.number,
  customStyles: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default SvgIcon;
