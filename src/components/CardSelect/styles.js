import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    height: 60,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 21,
    justifyContent: 'space-between',
    marginBottom: 20
  },
  cardImage: {
    width: 34,
    height: 34
  },
  selectedIcon: {
    width: 16,
    height: 16
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumber: {
    marginLeft: 18,
    fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
    fontWeight: '500',
    fontSize: 16
  }
});

export default styles;
