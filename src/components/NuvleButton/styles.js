import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../utils';
import { getWidth, getHeight } from '../../utils/styles';

const styles = StyleSheet.create({
  buttonContainer: {
    height: 56,
    borderRadius: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: getWidth(32),
    paddingRight: getWidth(27)
  },
  arrowIcon: {
    width: 42,
    height: 14
  },
  buttonText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    letterSpacing: 0.3
  }
});

export default styles;
