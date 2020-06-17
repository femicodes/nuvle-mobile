import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK
  },
  backIconContainer: {
    marginTop: 28,
    paddingLeft: 51
  },
  backIcon: {
    width: 42,
    height: 14
  },
  headerContainer: {
    marginTop: 80
  },
  headerText: {
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.WHISPER,
    textAlign: 'center',
    fontSize: 48
  },
  codeContainer: {
    marginTop: 64,
  },
  groupCode: {
    color: colors.CATSKILL,
    textAlign: 'center',
    fontSize: 64,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  },
  copyCodeContainer: {
    marginTop: 41,
  },
  copyCode: {
    color: colors.TWINE,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  },
  backButtonContainer: {
    marginHorizontal: 42,
    marginTop: 128,
    height: 56,
  },
  backButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.GUN_POWDER
  }
});

export default styles;
