import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ABBEY,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: getWidth(9),
    paddingRight: getWidth(5),
    paddingTop: getHeight(3),
    paddingBottom: getHeight(5),
    borderRadius: getWidth(180),
    alignItems: 'center',
    minWidth: 53,
    marginRight: 8
  },
  tagText: {
    textTransform: 'uppercase',
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    color: colors.WHISPER,
    textAlign: 'center',
    fontSize: 12,
    paddingLeft: 12,
    paddingRight: 12
  }
});

export default styles;
