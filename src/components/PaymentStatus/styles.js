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
    marginTop: 47,
    marginHorizontal: 48
  },
  header: {
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 48,
    color: colors.GOLD
  },
  informationHeader: {
    marginTop: 10,
    marginLeft: 48,
  },
  information: {
    color: colors.WHISPER,
    fontSize: 14,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
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
    marginTop: 113
  }
});

export default styles;
