import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARK,
    flex: 1,
  },
  mainContainer: {
    marginTop: getHeight(40),
    paddingHorizontal: getWidth(40)
  },
  backIcon: {
    width: 42,
    height: 14
  },
  header: {
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: getHeight(40),
    color: colors.GOLD,
    marginTop: getHeight(36),
  },
  instructionsContainer: {
    marginTop: 64,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 14,
    color: 'rgba(159, 159, 175, 0.9)'
  },
  codeContainer: {
    marginTop: 70,
    flexDirection: 'row',
  },
  codeFieldRoot: {
    width: getWidth(324),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
  },
  cellText: {
    color: colors.MERCURY,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 45
  },
});

export default styles;
