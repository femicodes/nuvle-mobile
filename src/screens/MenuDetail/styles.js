import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  jumbotron: {
    backgroundColor: colors.FIN,
  },
  jumbotronContainer: {
    paddingLeft: 48,
    paddingTop: 38,
    height: getHeight(288)
  },
  closeIcon: {
    width: 29,
    height: 26,
  },
  slateBackground: {
    height: '100%',
    position: 'absolute',
    bottom: -30,
  },
  amountContainer: {
    backgroundColor: colors.NEVADA,
    paddingLeft: 51,
    paddingTop: 14,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dollar: {
    paddingRight: 3
  },
  amount: {
    color: colors.GOLD,
    fontSize: 18,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  },
  descriptionContainer: {
    marginTop: 19,
    marginLeft: 51
  },
  descriptionHeader: {
    color: 'rgba(71, 69, 81, 0.9)',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16
  },
  description: {
    marginTop: 16,
    width: 290,
    color: 'rgba(71, 69, 81, 0.9)',
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.3
  },
  sidesContainer: {
    marginTop: 14,
    marginLeft: 51,
    marginBottom: 40
  },
  sidesImageContainer: {
    marginTop: 10,
  },
  sidesImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 3,
  },
  sidesName: {
    marginTop: 11,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 14,
    color: colors.TROUT,
    width: 100,
    fontWeight: '500'
  },
  sidesUnits: {
    marginTop: 2,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 13,
    color: colors.DUSTY_GRAY
  },
  orderButton: {
    height: 56,
    backgroundColor: colors.GUN_POWDER,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 21,
    justifyContent: 'center'
  },
  orderText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    color: colors.WHITE,
    textAlign: 'center',
  },
  mealName: {
    marginTop: getHeight(32),
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.GOLD,
    fontSize: 30
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: getHeight(14),
    justifyContent: 'flex-start',
  },
  mealGram: {
    marginTop: 11,
    fontSize: 14,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    color: colors.GRAY
  },
  mealImage: {
    width: 147,
    height: 178,
    position: 'absolute',
    right: 0,
    top: getHeight(82)
  },
  sidesAmountContainer: {
    backgroundColor: colors.GOLD,
    width: 36,
    height: 25,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 3
  },
  sidesAmount: {
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 13,
    color: 'rgba(71, 69, 81, 0.9)'
  },
  sidesCurrency: {
    marginRight: 2
  },
  checkMarkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: '40%'
  },
  sidesCheckmark: {
    width: 24,
    height: 17.33,
  },
  overlay: {
    backgroundColor: colors.GOLD,
    opacity: 0.7,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 3
  }
});

export default styles;
