import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
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
  }
});

export default styles;
