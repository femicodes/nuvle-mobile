import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  closeIcon: {
    width: 23,
    height: 20,
  },
  mainContainer: {
    paddingHorizontal: 30,
    paddingTop: 38
  },
  searchContainer: {
    marginTop: 44
  },
  searchInput: {
    fontFamily: fontFamily.IBM_PLEX_REGULAR,
    fontSize: 18,
    color: colors.GOLD
  },
  resultsContainer: {
    marginTop: 35,
  },
  searchResults: {
    fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
    color: colors.WHITE,
    fontWeight: '600',
    fontSize: 17,
    paddingBottom: 38
  }
});

export default styles;
