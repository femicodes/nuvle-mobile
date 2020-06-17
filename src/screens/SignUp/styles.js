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
    fontSize: getHeight(48),
    color: colors.GOLD,
    marginTop: getHeight(36)
  },
  logo: {
    width: 49,
    height: 49
  },
  formContainer: {
    marginTop: getHeight(49)
  },
  signupButton: {
    marginTop: getHeight(25)
  },
  signIn: {
    color: colors.TWINE,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  signInContainer: {
    marginTop: 19,
    alignItems: 'center'
  },
  authOption: {
    marginTop: getHeight(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionText: {
    textTransform: 'uppercase',
    color: colors.LASER,
    fontSize: 16,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    letterSpacing: 0.3
  },
  optionLine: {
    width: 126,
    height: 1
  },
  socials: {
    marginTop: 24,
    height: 132,
    justifyContent: 'space-between',
    marginBottom: 40
  }
});

export default styles;
