import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  feedbackCard: {
    backgroundColor: colors.WHITE,
    height: 105,
    borderRadius: 1,
    flexDirection: 'row',
    marginBottom: 13
  },
  feedbackImage: {
    width: 84,
    height: 84,
  },
  feedbackHeader: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.GUN_POWDER
  },
  reactions: {
    width: 30,
    height: 30,
    marginRight: 6
  },
  reactionLine: {
    marginTop: 6,
    flexDirection: 'row'
  },
  mealImageContainer: {
    marginTop: 10
  },
  mainContainer: {
    flexDirection: 'column',
    marginTop: 28
  }
});

export default styles;
