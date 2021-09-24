import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

import { 
  useFonts,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
  Poppins_800ExtraBold as ExtraBold,
  Poppins_900Black as Black,
} from '@expo-google-fonts/poppins'

export default StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  display: {
    padding: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  activeDisplay: {
    backgroundColor: colors.white,
  },
  activeDisplayText: {},
  invalidDisplayText: {},
  displayText: {
    fontSize: 30,
    color: '#666',
  },
  placeholderDisplayText: {
    color: '#ddd',
  },
  cursor: {
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  pad: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '33.3%',
    color: colors.dark,
  },
  buttonText: {
    color: colors.dark,
    fontFamily: 'SemiBold',
    fontSize: 24,
    textAlign: 'center',
  },
  hide: {
    alignItems: 'center',
  },
  blinkOn: {
    borderBottomColor: '#ddd',
  },
  blinkOff: {
    borderBottomColor: 'transparent',
  },
});
