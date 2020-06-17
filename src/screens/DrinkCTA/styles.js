import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
    paddingBottom: 0
  },
  closeModal: {
    marginTop: getHeight(24),
    paddingHorizontal: getWidth(50),
    justifyContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  upsellContainer: {
    marginTop: getHeight(83),
    paddingHorizontal: getWidth(108)
  },
  upsell: {
    width: 160,
    height: 160
  },
  headerContainer: {
    marginTop: getHeight(56),
  },
  header: {
    fontSize: 48,
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.WHISPER,
    textAlign: 'center'
  },
  subHeaderContainer: {
    marginTop: getHeight(20)
  },
  subHeader: {
    color: colors.GOLD,
    textAlign: 'center',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16
  },
  descriptionContainer: {
    marginTop: getHeight(40)
  },
  description: {
    color: colors.WHISPER,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  },
  next: {
    width: 84,
    height: 80
  },
  nextContainer: {
    marginTop: getHeight(40),
    paddingHorizontal: getWidth(148),
    marginBottom: 30
  }
});

export default styles;
