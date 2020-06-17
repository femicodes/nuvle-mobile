import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK
  },
  topContainer: {
    marginTop: 38,
    paddingLeft: 48
  },
  closeIcon: {
    width: 29,
    height: 26
  },
  headingContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headingText: {
    color: colors.GOLD,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 30
  },
  groupCodeContainer: {
    backgroundColor: colors.TWINE,
    width: getWidth(99),
    borderRadius: getWidth(180),
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    marginRight: 23
  },
  groupCodeText: {
    textAlign: 'center',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  sectionHeader: {
    color: '#fff',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    color: colors.WHISPER
  },
  orderCard: {
    height: 113,
    width: 255,
    marginRight: 30
  },
  mainCardContainer: {
    backgroundColor: colors.FIN,
    height: 82,
    paddingTop: 14,
    paddingLeft: 13
  },
  foodName: {
    color: colors.GOLD,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 14
  },
  priceContainer: {
    backgroundColor: '#5A5C60',
    height: 31,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5.5,
    paddingLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSlateImage: {
    position: 'absolute',
    width: 177,
    height: 80,
    right: 0,
    bottom: 0,
    top: 16
  },
  cardFoodImage: {
    width: 66,
    height: 89,
    position: 'absolute',
    right: 14,
  },
  categoryPill: {
    paddingHorizontal: 8,
    backgroundColor: colors.GOLD,
    borderRadius: 90,
    justifyContent: 'center',
    marginTop: 17,
    paddingTop: 3,
    paddingBottom: 3,
    /* height: 14, */
    /* flexDirection: 'row',*/
    alignItems: 'center'
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 9,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    textTransform: 'uppercase'
  },
  priceHeader: {
    color: colors.GOLD,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 13
  },
  amountContainer: {
    marginLeft: 8,
    flexDirection: 'row'
  },
  amount: {
    color: colors.GRAY,
    fontFamily: fontFamily.IBM_PLEX_REGULAR
  },
  counterIcon: {
    width: 12,
    height: 13,
    marginRight: 5
  },
  counterContainer: {
    flexDirection: 'row',
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    color: colors.GRAY,
    fontSize: 13,
    marginRight: 5
  },
  midContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeTabButton: {
    backgroundColor: colors.GOLD,
    marginHorizontal: 40,
    height: 56,
    marginTop: 52,
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 32,
    paddingRight: 15
  },
  closeTabIcon: {
    width: 42,
    height: 14
  },
  closeTabText: {
    fontWeight: 'bold',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 16,
    color: colors.GUN_POWDER
  }
});

export default styles;
