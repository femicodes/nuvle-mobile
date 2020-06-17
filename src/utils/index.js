// get color names here: http://chir.ag/projects/name-that-color
export const colors = {
  DARK: '#2B2B30',
  GOLD: '#E5C27A',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  RED: '#CC0000',
  BLUE: '#1977F2',
  GRAY: '#9F9FAF',
  LIGHT_GRAY: '#B5B5B9',
  GHOST: '#C7C7D4',
  TWINE: '#C0A368',
  LASER: '#D1B170',
  WHISPER: '#F2F2F9',
  MERCURY: '#E5E5E5',
  SHARK: '#252526',
  ATHENS: '#F0EFF5',
  GUN_POWDER: '#474551',
  ABBEY: '#46464B',
  HARVEST_GOLD: '#DAB974',
  NEVADA: '#686C72',
  TROUT: '#4C4B5E',
  DUSTY_GRAY: '#979797',
  BALTIC: '#25242A',
  CATSKILL: '#F1F5F8',
  FIN: '#2B2B30',
  SCARPA: '#595864',
  PUTTY: '#E7CB8D',
  MID_GRAY: '#605F6A',
  SILVER: '#C0C0C0',
  HAZE: '#F2F6F8',
  ROLLING_STONE: '#797B7C'
}

export const fontFamily = {
  BLUU_NEXT: 'BluuNext-Bold',
  IBM_PLEX_BOLD: 'IBMPlexMono-Bold',
  IBM_PLEX_REGULAR: 'IBMPlexMono',
  SF_PRO_DISPLAY_REGULAR: 'SFProDisplay-Regular',
  SF_PRO_DISPLAY_BOLD: 'SFProDisplay-Bold'
}

export const formatText = (text) => {
  const wordArray = text.split(' ');
  if (wordArray.length > 1) {
    const firstWord = wordArray.splice(0, 1);
    const otherWords = wordArray.join(' ');
    return `${firstWord}\n${otherWords}`
  }
  return text;
}