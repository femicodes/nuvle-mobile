import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B2B30',
    width: 343,
    height: 240,
    marginBottom: getHeight(12),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: getWidth(32),
    paddingTop: getHeight(32),
    paddingRight: getWidth(26)
  },
  mealName: {
    color: colors.GOLD,
    fontSize: 30,
    fontFamily: fontFamily.BLUU_NEXT
  },
  slateBackground: {
    width: 280,
    height: 216,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: getHeight(14),
    justifyContent: 'flex-start',
  },
  bottomContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13
  },
  orderIconContainer: {
    backgroundColor: colors.HARVEST_GOLD,
    width: 49,
    height: 49,
    alignItems: 'center',
    borderRadius: getHeight(50),
    paddingVertical: getHeight(13)
  },
  orderTick: {
    width: 17,
    height: 13
  },
  orderText: {
    textTransform: 'lowercase',
    color: colors.WHITE,
    fontSize: 9,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    paddingTop: 2
  },
  amountContainer: {
    flexDirection: 'row',
    marginTop: getHeight(30)
  },
  dollar: {
    color: colors.GOLD,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 18
  },
  amount: {
    color: colors.WHITE,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 18,
  },
  foodItemImage: {
    width: 129,
    height: 157,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    bottom: 62
  }
});

export default styles;
