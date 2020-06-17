import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SCARPA,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  mainContainer: {
    paddingHorizontal: 40
  },
  headerText: {
    marginTop: 36,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 48,
    color: colors.GOLD
  },
  optionsContainer: {
    marginTop: getHeight(33)
  },
  optionCheckmark: {
    width: 18,
    height: 13
  },
  optionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  optionText: {
    color: colors.WHISPER,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 18
  },
  applyButton: {
    backgroundColor: colors.GOLD,
    marginHorizontal: 40,
    marginTop: getHeight(48),
    marginBottom: 25
  },
  applyText: {
    textAlign: 'center',
    paddingVertical: 16,
    color: colors.GUN_POWDER,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    textTransform: 'uppercase',
    fontSize: 16
  }
});

export default styles;
