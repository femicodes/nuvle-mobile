import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARK,
    flex: 1,
  },
  mainContainer: {
    marginTop: getHeight(40),
    paddingHorizontal: getWidth(40)
  },
  header: {
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: getHeight(40),
    color: colors.GOLD,
    marginTop: getHeight(36),
  },
  logo: {
    width: 49,
    height: 49
  },
  formContainer: {
    marginTop: getHeight(37)
  },
  signIn: {
    color: colors.TWINE,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  signInContainer: {
    marginTop: 60,
    alignItems: 'center'
  }
});

export default styles;
