const palette = {
  mango: {
    /**
     * #FFB900
     */
    0: '#FFB900',
    /**
     * #FFD566
     */
    1: '#FFD566'
  },
  midnightBlue: {
    /**
     * #262835
     */
    0: '#262835',
    // TODO: Make this grey.11 to be in-line with designs, align other colours with design as well
    /**
     * #090B18
     */
    1: '#090B18',
    /**
     * #090a13
     */
    2: '#090a13'
  },
  skyBlue: {
    /**
     * #F7FAFD
     */
    0: '#F7FAFD',
    /**
     * #E5F2FC
     */
    1: '#E5F2FC',
    /**
     * #C0DEF8
     */
    2: '#C0DEF8',
    /**
     * #99CAF4
     */
    3: '#99CAF4',
    /**
     * #75B6EF
     */
    4: '#75B6EF',
    /**
     * #5DA6EC
     */
    5: '#5DA6EC',
    /**
     * #4C97E8
     */
    6: '#4C97E8',
    /**
     * #4689DA
     */
    7: '#4689DA',
    /**
     * #3871C2
     */
    8: '#3871C2',
    /**
     * #3260B0
     */
    9: '#3260B0'
  },
  seaGreen: {
    /**
     * #D5F1F3
     */
    0: '#D5F1F3',
    /**
     * #C1EAED
     */
    1: '#C1EAED',
    /**
     * #ACE3E7
     */
    2: '#ACE3E7',
    /**
     * #9CDEE1
     */
    3: '#9CDEE1',
    /**
     * #82D5DA
     */
    4: '#82D5DA',
    /**
     * #6DCDD3
     */
    5: '#6DCDD3',
    /**
     * #59C7CE
     */
    6: '#59C7CE',
    /**
     * #2FB9C2
     */
    7: '#2FB9C2',
    /**
     * #238B92
     */
    8: '#238B92',
    /**
     * #185D61
     */
    9: '#185D61'
  },
  grey: {
    /**
     * #F7F8FC
     */
    0: '#F7F8FC',
    /**
     * #EDEDF4
     */
    1: '#EDEDF4',
    /**
     * #E1E1EA
     */
    2: '#E1E1EA',
    /**
     * #D4D5DD
     */
    3: '#D4D5DD',
    /**
     * #BCBCC9
     */
    4: '#BCBCC9',
    /**
     * #9699AA
     */
    5: '#9699AA',
    /**
     * #7C7E8D
     */
    6: '#7C7E8D',
    /**
     * #676978
     */
    7: '#676978',
    /**
     * #484A58
     */
    8: '#484A58',
    /**
     * #363842
     */
    9: '#363842'
  },
  red: {
    /**
     * #FFF2F1
     */
    0: '#FFF2F1',
    /**
     * #D95852
     */
    1: '#D95852',
    /**
     * #E89B97
     */
    2: '#E89B97',
    /**
     * #FF6C65
     */
    3: '#FF6C65'
  },
  yellow: {
    /**
     * #FFF8E4
     */
    0: '#FFF8E4',
    /**
     * #FF9C00
     */
    1: '#FF9C00'
  },
  green: {
    /**
     * #0BA866
     */
    0: '#0BA866'
  },
  white: {
    /**
     * #FFFFFF
     */
    0: '#FFFFFF'
  },
  black: {
    /**
     * #000000
     */
    0: '#000000'
  }
};

const alpha = {
  100: 'FF',
  99: 'FC',
  98: 'FA',
  97: 'F7',
  96: 'F5',
  95: 'F2',
  94: 'F0',
  93: 'ED',
  92: 'EB',
  91: 'E8',
  90: 'E6',
  89: 'E3',
  88: 'E0',
  87: 'DE',
  86: 'DB',
  85: 'D9',
  84: 'D6',
  83: 'D4',
  82: 'D1',
  81: 'CF',
  80: 'CC',
  79: 'C9',
  78: 'C7',
  77: 'C4',
  76: 'C2',
  75: 'BF',
  74: 'BD',
  73: 'BA',
  72: 'B8',
  71: 'B5',
  70: 'B3',
  69: 'B0',
  68: 'AD',
  67: 'AB',
  66: 'A8',
  65: 'A6',
  64: 'A3',
  63: 'A1',
  62: '9E',
  61: '9C',
  60: '99',
  59: '96',
  58: '94',
  57: '91',
  56: '8F',
  55: '8C',
  54: '8A',
  53: '87',
  52: '85',
  51: '82',
  50: '80',
  49: '7D',
  48: '7A',
  47: '78',
  46: '75',
  45: '73',
  44: '70',
  43: '6E',
  42: '6B',
  41: '69',
  40: '66',
  39: '63',
  38: '61',
  37: '5E',
  36: '5C',
  35: '59',
  34: '57',
  33: '54',
  32: '52',
  31: '4F',
  30: '4D',
  29: '4A',
  28: '47',
  27: '45',
  26: '42',
  25: '40',
  24: '3D',
  23: '3B',
  22: '38',
  21: '36',
  20: '33',
  19: '30',
  18: '2E',
  17: '2B',
  16: '29',
  15: '26',
  14: '24',
  13: '21',
  12: '1F',
  11: '1C',
  10: '1A',
  9: '17',
  8: '14',
  7: '12',
  6: '0F',
  5: '0D',
  4: '0A',
  3: '08',
  2: '05',
  1: '03',
  0: '00'
};

const sizes = {
  initial: 'initial',
  inherit: 'inherit',
  auto: 'auto',
  /*
   * Required for certain scenarios such as clamp
   */
  none: '0px',
  0: '0',
  1: '0.063rem',
  2: '0.125rem',
  3: '0.188rem',
  4: '0.25rem',
  5: '0.313rem',
  6: '0.375rem',
  7: '0.438rem',
  8: '0.5rem',
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  25: '1.563rem',
  26: '1.625rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  36: '2.25rem',
  40: '2.5rem',
  44: '2.75rem',
  48: '3rem',
  50: '3.125rem',
  52: '3.25rem',
  56: '3.5rem',
  60: '3.75rem',
  64: '4rem',
  68: '4.25rem',
  72: '4.5rem',
  80: '5rem',
  86: '5.375rem',
  92: '5.75rem',
  100: '6.25rem',
  110: '6.875rem',
  148: '9.25rem',
  180: '11.25rem',
  /**
   * Standard button width
   */
  220: '13.75rem',
  280: '17.5rem',
  /**
   * Standard height for Dropdown containers
   */
  300: '18.75rem',
  /**
   * Standard input width
   */
  444: '27.75rem',
  /**
   * Dropdown input width (due to the close button)
   */
  488: '30.5rem',
  /**
   * 100%
   */
  full: '100%',
  /**
   * 50%
   */
  half: '50%',
  /**
   * 224px
   */
  '3xs': '14rem',
  /**
   * 256px
   */
  '2xs': '16rem',
  /**
   * 320px
   */
  xs: '20rem',
  /**
   * 384px
   */
  sm: '24rem',
  /**
   * 444px
   */
  '1md': '27.75rem',
  /**
   * 448px
   */
  md: '28rem',
  /**
   * 512px
   */
  lg: '32rem',
  /**
   * 576px
   */
  xl: '36rem',
  /**
   * 672px
   */
  '2xl': '42rem',
  /**
   * 768px
   */
  '3xl': '48rem',
  /**
   * 896px
   */
  '4xl': '56rem',
  /**
   * 1024px
   */
  '5xl': '64rem',
  /**
   * 1152px
   */
  '6xl': '72rem',
  /**
   * 1440px
   */
  '7xl': '90rem'
};

const zIndices = {
  /**
   * -1
   */
  '-1': -1,
  /**
   * Auto
   */
  auto: 'auto',
  /**
   * 0
   */
  0: 0,
  /**
   * 5
   */
  5: 5,
  /**
   * 10
   */
  10: 10,
  /**
   * 1000
   */
  1000: 1000,
  /**
   * 1100
   */
  1100: 1100,
  /**
   * 1200
   */
  1200: 1200,
  /**
   * 1300
   */
  1300: 1300,
  /**
   * 1500
   */
  1500: 1500,
  /**
   * 1600
   */
  1600: 1600,
  /**
   * 1700
   */
  1700: 1700,
  /**
   * 1800
   */
  1800: 1800,
  /**
   * 9999
   */
  9999: 9999
};

const breakpoints = {
  /**
   * 375px
   */
  375: '23.438rem',
  /**
   * 480px
   */
  480: '30rem',
  /**
   * 768px
   *
   * The exact transition point from mobile to tablet.
   */
  768: '48rem',
  /**
   * 992px
   */
  992: '62rem',
  /**
   * 1024px
   *
   * The exact transition point from tablet to desktop.
   */
  1024: '64rem',
  /**
   * 1280px
   */
  1280: '80rem',
  /**
   * 1440px
   */
  1440: '90rem',
  /**
   * 1680px
   */
  1680: '105rem',
  /**
   * 1920px
   */
  1920: '120rem',
  /**
   * 2560px
   */
  2560: '160rem'
};

const transitionDurations = {
  /**
   * 500ms
   */
  500: '500ms',
  /**
   * 300ms
   */
  base: '300ms',
  /**
   * 200ms
   */
  fast: '200ms'
};

const fontWeights = {
  /**
   * Normal - 400
   */
  normal: 400,
  /**
   * Bold - 600
   */
  bold: 600,
  /**
   * Black - 700
   */
  black: 700
};

const textSizes: Record<
  'normal' | 'small' | 'info' | 'none' | 'h1' | 'h2' | 'h3' | 'h4',
  {
    fontSize: string;
    lineHeight: string;
    responsiveFontSize?: {
      /**
       * Font size in different breakpoints
       */
      [key in Breakpoints]?: string;
    };
    responsiveLineHeight?: {
      /**
       * Line heights in different breakpoints
       */
      [key in Breakpoints]?: string;
    };
  }
> = {
  /**
   * Normal - 16px
   */
  normal: {
    fontSize: '1rem',
    lineHeight: '1.75'
  },
  /**
   * Normal - 10px
   */
  small: {
    fontSize: '0.625rem',
    lineHeight: '1.8'
  },
  /**
   * Info Label - 13px;
   */
  info: {
    fontSize: '0.8125rem',
    lineHeight: '1.2'
  },
  /**
   * None
   */
  none: {
    fontSize: '0rem',
    lineHeight: '0'
  },
  /**
   * H1 - 32px
   */
  h1: {
    fontSize: '2rem',
    lineHeight: '1.3',
    responsiveFontSize: {
      /**
       * 36px
       */
      768: '2.25rem'
    }
  },
  /**
   * H2 - 22px, 32px
   */
  h2: {
    fontSize: '2rem',
    lineHeight: '1.3',
    responsiveFontSize: {768: '1.375rem'}
  },
  /**
   * H3 - 20px, 25px
   */
  h3: {
    fontSize: '1.5625rem',
    lineHeight: '1.4',
    responsiveFontSize: {768: '1.25rem'}
  },
  /**
   * H4 - 22
   */
  h4: {
    fontSize: '1.375rem',
    lineHeight: '1.4'
  }
};

export type Breakpoints = keyof typeof breakpoints;
export type Palette = keyof typeof palette;
export type Alpha = keyof typeof alpha;
export type Sizes = keyof typeof sizes;
export type ZIndices = keyof typeof zIndices;
export type TransitionDurations = keyof typeof transitionDurations;
export type FontWeights = keyof typeof fontWeights;
export type TextSizes = keyof typeof textSizes;

export const tokens = {
  alpha,
  transitionDurations,
  breakpoints,
  sizes,
  zIndices,
  palette,
  fontWeights,
  textSizes
};
