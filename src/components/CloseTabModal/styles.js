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
    marginTop: 31,
    paddingLeft: 40
  },
  headerText: {
    color: colors.GOLD,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 48,
  },
  tipHeaderContainer: {
    marginTop: 20,
    paddingLeft: 48
  },
  tipHeader: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: '600',
    fontSize: 16,
    color: colors.WHISPER
  },
  tipContainer: {
    flexDirection: 'row',
    marginTop: 18,
    marginHorizontal: 48,
    flex: 1,
    justifyContent: 'center'
  },
  tipText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    color: colors.WHISPER,
    fontWeight: '600',
    fontSize: 16,
  },
  tipBox: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTipContainer: {
    paddingRight: 12,
    paddingHorizontal: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  noTipText: {
    fontSize: 14
  },
  middleContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20
  },
  lastContainer: {
    paddingLeft: 8,
    paddingHorizontal: 20,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  customAmountContainer: {
    marginTop: 11
  },
  customAmountHeader: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: '600',
    fontSize: 16,
    color: colors.WHISPER,
    paddingLeft: 48
  },
  customAmountInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 5,
    marginLeft: 53,
    marginRight: 48,
    color: colors.WHITE,
    fontSize: 24,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  },
  totalContainer: {
    marginHorizontal: 48,
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalHeader: {
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.GOLD,
    fontSize: 30,
  },
  totalAmount: {
    color: colors.WHISPER,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: '600',
    fontSize: 30
  },
  includesContainer: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 38
  },
  includesText: {
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 12,
    color: colors.WHISPER,
    letterSpacing: 0.3
  }
});

export default styles;
