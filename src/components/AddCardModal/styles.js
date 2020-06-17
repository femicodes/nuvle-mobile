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
    marginHorizontal: 48
  },
  header: {
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.GOLD,
    fontSize: 25
  },
  cardNumberInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 41,
    paddingBottom: 11,
    marginHorizontal: 34,
    fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
    fontSize: 14,
    color: colors.SILVER,
    textAlign: 'center',
    letterSpacing: 1.8
  },
  codeContainer: {
    marginTop: 92,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardDetailInput: {
    borderBottomColor: colors.SILVER,
    borderBottomWidth: 1,
    width: 80,
    paddingBottom: 8,
    fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
    fontSize: 14,
    color: colors.SILVER,
    textAlign: 'center',
    letterSpacing: 1.8
  },
  checkMark: {
    width: 18,
    height: 13
  },
  addCardButton: {
    flexDirection: 'row',
    backgroundColor: colors.GOLD,
    marginTop: 76,
    marginLeft: 46,
    marginRight: 34,
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 32,
    paddingRight: 30,
    borderRadius: 4,
  },
  addCardText: {
    textTransform: 'uppercase',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.GUN_POWDER
  }
});

export default styles;
