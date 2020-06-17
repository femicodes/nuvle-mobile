import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GUN_POWDER,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerContainer: {
    marginTop: 38,
    paddingLeft: 48
  },
  header: {
    color: colors.GOLD,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 48
  },
  cardContainer: {
    marginTop: 22,
    marginLeft: 48
  },
  cardHeader: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    color: colors.WHISPER,
    fontWeight: 'bold',
    fontSize: 16
  },
  savedCard: {
    backgroundColor: colors.BLACK,
    height: 44,
    marginLeft: 48,
    marginRight: 52,
    marginTop: 23,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21
  },
  arrowIcon: {
    width: 42,
    height: 14
  },
  cardIcon: {
    width: 25,
    height: 17
  },
  savedCardText: {
    color: colors.WHITE,
    fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
    fontSize: 16,
    marginLeft: 20
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  applePayContainer: {
    marginTop: 20,
    marginLeft: 50
  },
  applePayText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.WHISPER
  },
  applePayButton: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    borderRadius: 5,
    marginLeft: 49,
    marginRight: 51,
    height: 44,
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  applePayLogo: {
    width: 62,
    height: 27
  },
  paypalButton: {
    backgroundColor: colors.GOLD
  },
  paypalLogo: {
    width: 84,
    height: 84
  },
  couponButton: {
    marginTop: 42,
    marginHorizontal: 50,
    backgroundColor: colors.SCARPA,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 19,
    marginBottom: 30
  },
  couponText: {
    color: colors.WHITE,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: '600',
    fontSize: 13
  }
});

export default styles;
