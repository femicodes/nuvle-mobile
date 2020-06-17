import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C32'
  },
  topContainer: {
    marginTop: 52,
    backgroundColor: '#2C2C32',
    height: 268,
    paddingLeft: 32,
  },
  slateBackground: {
    height: 268,
    width: 268,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  mealName: {
    color: colors.GOLD,
    fontSize: 30,
    fontFamily: fontFamily.BLUU_NEXT
  },
  mealImage: {
    width: 161,
    height: 196,
    position: 'absolute',
    right: 0,
    top: 52
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: getHeight(14),
    justifyContent: 'flex-start',
  },
  quantityText: {
    marginTop: 17,
    fontSize: 14,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    color: colors.GRAY,
    fontWeight: '600'
  },
  quantityContainer: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityNumber: {
    fontSize: 16,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    color: colors.GRAY,
    fontWeight: 'bold',
    marginRight: 6
  },
  quantityIcon: {
    width: 20,
    height: 20,
    marginRight: 6
  },
  middleContainer: {
    paddingLeft: 28,
    paddingRight: 10
  },
  preferenceHeader: {
    marginTop: 24,
    color: colors.GOLD,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    letterSpacing: 0.3
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: getHeight(2),
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  selectSideContainer: {
    marginTop: 18
  },
  selectSideHeader: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.GOLD
  },
  sideCount: {
    color: colors.GRAY,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 14,
    marginTop: 3
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 17,
    alignItems: 'center'
  },
  priceText: {
    marginRight: 9,
    color: colors.GOLD,
    fontSize: 16,
    fontFamily: fontFamily.IBM_PLEX_BOLD
  },
  amountContainer: {
    flexDirection: 'row'
  },
  amount: {
    color: colors.GRAY,
    fontSize: 14,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
  },
  noteContainer: {
    marginTop: 28,
    paddingRight: 37
  },
  noteHeader: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 13,
    textTransform: 'uppercase',
    color: colors.GRAY
  },
  noteInput: {
    borderBottomColor: 'rgba(199, 199, 212, 0.4)',
    borderBottomWidth: 1,
    marginTop: 9,
    paddingBottom: 20,
    color: colors.GRAY,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 16
  },
  takeAwayContainer: {
    marginTop: 35,
  },
  takeAwayHeader: {
    color: colors.GOLD,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 11,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 16,
    color: 'rgba(71, 69, 81, 0.9)',
    paddingTop: 3,
  },
  buttonContainer: {
    backgroundColor: '#1D1C20',
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sendOrder: {
    height: 60,
    flex: 1,
    backgroundColor: colors.GOLD,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelOrder: {
    height: 60,
    flex: 1,
    backgroundColor: '#3C3C40',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendOrderText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    color: colors.BALTIC
  },
  cancelOrderText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    color: colors.GOLD
  },
  pillContainer: {
    width: getWidth(120),
    marginTop: 15
  }
});

export default styles;
