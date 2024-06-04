import React from 'react';
import {View} from 'react-native';
import {gaps} from '../../config/layout';
import styles from './styles';

function Margin(props) {
  const {
    top,
    bottom,
    left,
    right,
    horizontal,
    vertical,
    flexible,
    gap,

    justifyContent,
    alignItems,
    customStyles,
    children,
    pointerEvents,
    onLayout,
  } = props;

  return (
    <View
      pointerEvents={pointerEvents}
      style={[
        top && {marginTop: gaps[top]},
        bottom && {marginBottom: gaps[bottom]},
        left && {marginLeft: gaps[left]},
        right && {marginRight: gaps[right]},
        horizontal && {
          marginHorizontal: gaps[horizontal],
        },
        vertical && {marginVertical: gaps[vertical]},
        flexible && styles.flexible,
        gap && {gap: gaps[gap]},

        justifyContent && {justifyContent: justifyContent},
        alignItems && {alignItems: alignItems},
        customStyles,
      ]}
      onLayout={onLayout}>
      {children}
    </View>
  );
}

Margin.defaultProps = {
  children: null,
};

export default Margin;
