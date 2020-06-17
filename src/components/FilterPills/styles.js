import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  pillContainer: {
    backgroundColor: colors.SHARK,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: getWidth(9),
    paddingRight: getWidth(5),
    paddingTop: getHeight(3),
    paddingBottom: getHeight(5),
    borderRadius: getWidth(180),
    alignItems: 'center',
    marginRight: getWidth(9)
  },
  pillText: {
    textTransform: 'uppercase',
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    color: colors.WHISPER,
    textAlign: 'center',
    fontSize: 12,
    paddingLeft: 5
  },
  plus: {
    paddingLeft: 5,
    paddingRight: 5
  },
  x: {
    width: 7,
    height: 7,
    marginLeft: 7
  }
});

export default styles;
