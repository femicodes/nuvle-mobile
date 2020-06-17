import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GUN_POWDER,
    height: 450,
    borderRadius: 4
  },
  header: {
    color: colors.GOLD,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 48,
    textAlign: 'center'
  },
  headerContainer: {
    marginTop: 37,
  },
  codeContainer: {
    marginTop: 70,
    flexDirection: 'row',
  },
  codeFieldRoot: {
    width: 290,
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
    paddingBottom: 13
  },
  applyCode: {
    backgroundColor: colors.PUTTY,
    marginTop: 91,
    marginHorizontal: 39,
    height: 56,
    justifyContent: 'center'
  },
  applyCodeText: {
    textAlign: 'center',
    color: colors.GUN_POWDER,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16
  },
  cancelButton: {
    backgroundColor: colors.MID_GRAY,
    marginTop: 20,
    marginHorizontal: 39,
    height: 56,
    justifyContent: 'center'
  },
  cancelText: {
    textAlign: 'center',
    color: colors.GOLD,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default styles;
