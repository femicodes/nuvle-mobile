import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    textTransform: 'uppercase',
    color: colors.GRAY
  },
  textInput: {
    color: colors.GRAY,
    height: 40,
    borderBottomColor: 'rgba(199, 199, 212, 0.4)',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
  }
});

export default styles;
