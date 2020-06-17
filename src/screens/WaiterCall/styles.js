import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.TWINE,
  },
  mainContainer: {
    paddingHorizontal: 40,
  },
  ovalBackground: {
    width: 294,
    height: 294,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: getHeight(87),
  },
  waiterIcon: {
    width: 95,
    height: 95,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  instructionsContainer: {
    marginTop: getHeight(50),
  },
  instructions: {
    textAlign: 'center',
    color: colors.WHITE,
    fontSize: 28,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  },
  cancelContainer: {
    marginTop: getHeight(95)
  },
  cancelText: {
    textAlign: 'center',
    color: colors.BLACK,
    fontSize: 18,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  }
});

export default styles;
