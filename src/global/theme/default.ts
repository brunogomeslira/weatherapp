import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

export default {
  fontFamily: {
    NunitoBold: 'Nunito-Bold',
    NunitoExtraBold: 'Nunito-ExtraBold',
    NunitoMedium: 'Nunito-Medium',
    NunitoSemiBold: 'Nunito-SemiBold',
  },

  padding: {
    XXS: `${responsive(1)}px`, //8px
    XS: `${responsive(1.5)}px`, //12px
    SM: `${responsive(2)}px`, //16px
    MD: `${responsive(3)}px`, //24px
    LG: `${responsive(4)}px`, //32px
    XMD: `${responsive(6)}px`, //48px
    XLG: `${responsive(7.5)}px`, //60px
    XXLG: `${responsive(15.5)}px`, //124px
    XXXLG: `${responsive(20)}px`, //160px
  },
  margin: {
    XXXS: `${responsive(0.6)}px`, //5px
    XXS: `${responsive(1)}px`, //8px
    XS: `${responsive(1.5)}px`, //12px
    SM: `${responsive(2)}px`, //16px
    MD: `${responsive(3)}px`, //24px
    LG: `${responsive(4)}px`, //32px
    XMD: `${responsive(6)}px`, //48px
    XLG: `${responsive(7.5)}px`, //60px
  },
  lineHeight: {
    XXXS: `${responsive(1)}px`, //8px
    XXS: `${responsive(1.5)}px`, //12px
    XS: `${responsive(1.7)}px`, //14px
    SM: `${responsive(2)}px`, //16px
    MD: `${responsive(3)}px`, //24px
    LG: `${responsive(4)}px`, //32px
    XL: `${responsive(5.2)}px`, //42px
  },
  letterSpacing: {
    SM: `${responsive(2)}px`,
    MD: `${responsive(2)}px`,
    LG: `${responsive(2)}px`,
  },
  fontSize: {
    XXXS: `${responsive(1)}px`, //8px
    LXXS: `${responsive(1.4)}px`, //10px
    XXS: `${responsive(1.5)}px`, //12px
    XS: `${responsive(1.8)}px`, //14px
    SM: `${responsive(2)}px`, //16px
    XMD: `${responsive(2.2)}px`, //18px
    MMD: `${responsive(2.5)}px`, //20px
    MD: `${responsive(3)}px`, //24px
    LG: `${responsive(3.3)}px`,
    XL: `${responsive(4)}px`, //32px
  },
  colors: {
    //linear Gradiente
    LINEAR_GREEN: ['#6FF7E4', '#71F4E7', '#57E0D1'],
    LINEAR_BLUE: ['#5EE6FD', '#5AD3F9', '#5CCAF7'],
    LINEAR_ORANGE: ['#FAE180', '#FCD28A', '#FFBF99'],
    LINEAR_BLUE_DARK: ['#70BBD2', '#4F8A93', '#072D3E'],

    // assets color
    BLUE_DARK: '#2F2E60',

    //B
    BLACK: '#000000',
    BLACK_RGB: 'rgba(0, 0, 0, 1)',
    BLACK_RGB_0: 'rgba(0, 0, 0, 0)',
    BLACK_RGB_03: 'rgba(0, 0, 0, 0.03)',
    BLACK_RGB_06: 'rgba(0, 0, 0, 0.06)',
    BLACK_2B: '#0000002b',
    BRAND_DARK: '#DD5D00',
    BRIGHT_GRAY: '#EAEAEA',
    BORDER: '#C8C8C8',

    //T
    TRANSPARENT: 'transparent',

    //W
    WHITE: '#FFFFFF',
    WHITE85: '#ffffff55',
    WHITE50: '#ffffff80',
    WHITE30: '#ffffff45',
    WHITE20: '#ffffff33',
    WHITE10: '#ffffff1A',
    WHITE_RGB: 'rgba(255, 255, 255, 0.5)',
    WHITE_SMOKE: '#f4f4f4',
  },
};
