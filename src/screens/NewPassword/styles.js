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
  formContainer: {
    marginTop: getHeight(65)
  },
  resetButton: {
    marginTop: getHeight(28)
  }
});

export default styles;
