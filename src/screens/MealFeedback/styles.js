import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK
  },
  backIcon: {
    width: 42,
    height: 14,
  },
  searchInput: {
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 31,
    width: 120,
    color: colors.ROLLING_STONE
  },
  waiterCall: {
    width: 25,
    height: 25
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    marginLeft: 51,
    justifyContent: 'space-between',
    marginRight: 12
  },
  headerSubContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTextContainer: {
    marginTop: 21,
    marginLeft: 48
  },
  headerText: {
    color: colors.GOLD,
    fontSize: 30,
    fontFamily: fontFamily.BLUU_NEXT,
  },
  mealListContainer: {
    marginTop: 36,
    marginHorizontal: 16,
  },
  checkMark: {
    width: 18,
    height: 13
  },
  buttonText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.GUN_POWDER,
    textTransform: 'uppercase'
  },
  button: {
    backgroundColor: colors.GOLD,
    borderRadius: 4,
    height: 56,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 20,
  }
});

export default styles;
