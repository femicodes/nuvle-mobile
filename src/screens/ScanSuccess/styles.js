import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK,
  },
  nextContainer: {
    marginTop: getHeight(32),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: getWidth(37)
  },
  next: {
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 18,
    color: colors.ATHENS,
  },
  headerContainer: {
    marginTop: getHeight(36),
    marginLeft: getWidth(48),
    marginRight: getWidth(36)
  },
  header: {
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.GOLD,
    fontSize: 48
  },
  subHeader: {
    marginTop: getHeight(8),
    marginLeft: getWidth(48),
  },
  subHeaderText: {
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    color: colors.WHISPER,
    fontSize: 14,
  },
  backgroundImage: {
    height: getHeight(262),
    marginTop: getHeight(77),
  },
  scanFrame: {
    width: 200,
    height: 150,
    marginLeft: getWidth(95),
    marginVertical: getWidth(50)
  },
  groupCodeContainer: {
    marginTop: getHeight(46),
  },
  groupCodeText: {
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: colors.WHISPER,
  },
  code: {
    marginTop: getHeight(14),
    fontSize: 36,
    textAlign: 'center',
    color: colors.WHISPER,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
  },
  copyCode: {
    marginTop: getHeight(10),
    color: colors.TWINE,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    paddingBottom: 20
  }
});

export default styles;
