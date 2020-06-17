import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
    flex: 1
  },
  mainContainer: {
    paddingLeft: 26,
    marginTop: 28
  },
  cancelIcon: {
    width: 20,
    height: 20
  },
  cancelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 19
  },
  headerText: {
    fontSize: 30,
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.GOLD
  },
  sliderContainer: {
    marginTop: 15
  },
  sliderHeader: {
    color: 'rgba(71, 69, 81, 0.9)',
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 17
  },
  sidesImageContainer: {
    marginTop: 10,
    marginBottom: 24
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
