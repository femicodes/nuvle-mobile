import { StyleSheet } from 'react-native';
import { getWidth, getHeight } from '../../utils/styles';
import { colors, fontFamily } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
    paddingBottom: 0
  },
  topNav: {
    flexDirection: 'row',
    marginTop: getHeight(21),
    justifyContent: 'space-between',
    paddingLeft: getWidth(41),
    paddingRight: getWidth(16)
  },
  searchIcon: {
    width: 25,
    height: 25
  },
  waiterCall: {
    width: 25,
    height: 25
  },
  tabContainer: {
    marginTop: getHeight(23),
    marginLeft: getWidth(22),
  },
  tabList: {
    paddingHorizontal: getWidth(13),
    alignItems: 'center',
    marginLeft: getWidth(16),
    paddingBottom: getHeight(12),
  },
  activeTabText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    color: colors.GOLD,
    fontSize: getWidth(16),
  },
  inactiveTabText: {
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    color: 'rgba(71, 69, 81, 0.9)',
    fontSize: getWidth(16),
  },
  tabActiveBottom: {
    borderBottomColor: colors.GOLD,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  filterContainer: {
    marginTop: getHeight(23),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: getWidth(25),
    marginRight: getWidth(14)
  },
  filterImage: {
    width: 38,
    height: 24,
  },
  filterImageContainer: {
    marginRight: 5
  },
  filterPills: {
    flexDirection: 'row',
  },
  filterPillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  clearPill: {
    marginLeft: 20
  },
  orderContainer: {
    backgroundColor: colors.WHITE,
    width: 64,
    height: 59,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: getHeight(50),
    right: getWidth(22)
  },
  goldTick: {
    width: 24,
    height: 17,
    marginBottom: 4
  },
  orderText: {
    color: colors.GUN_POWDER,
    fontFamily: fontFamily.IBM_PLEX_BOLD,
    fontSize: 12
  },
  menuList: {
    marginTop: getHeight(25)
  },
  modalContainer: {
    paddingHorizontal: 48
  },
  modalStyle: {
    backgroundColor: 'rgba(71, 69, 81, 0.9)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontFamily: fontFamily.BLUU_NEXT,
    color: colors.GOLD,
    fontSize: 48,
    marginTop: getHeight(66)
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
    marginTop: 58,
    marginBottom: 40
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
