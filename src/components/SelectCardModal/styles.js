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
    marginTop: 31,
    marginHorizontal: 48
  },
  header: {
    color: colors.GOLD,
    fontFamily: fontFamily.BLUU_NEXT,
    fontSize: 24
  },
  cardContainer: {
    marginTop: 25,
    marginHorizontal: 21
  },
  addNewCard: {
    marginTop: 23,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: colors.SILVER,
    paddingHorizontal: 23,
    paddingVertical: 9,
    borderRadius: 20
  },
  addCardText: {
    color: colors.SILVER,
    fontFamily: fontFamily.SF_PRO_DISPLAY_REGULAR,
    fontSize: 14
  },
  buttonContainer: {
    marginTop: 54,
    marginHorizontal: 40,
    marginBottom: 20
  }
});

export default styles;
