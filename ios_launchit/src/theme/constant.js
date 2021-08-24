import {StyleSheet} from 'react-native';


export const colors = {
    PRIMARY: "#428AE9",

    APP_LIGHT_GRAY: "lightgray",
    APP_GREY:'#888888',

    //card colors
    CARD_PRIMARY_COLOR : '#F3F3F3',
    CARD_SECONDARY_COLOR : '#F6F8FB',
    CARD_BORDER_COLOR: '#CCCCCC',


    //View
    VIEW_BACKGROUND: '#f2f2f2',
    APPLY_VIEWBAR_COLOR:'#D6D6D6',
    // text
    TEXT_PRIMARY: "black",
    TEXT_SECONDARY: "#524D4D",
    TEXT_LIGHT_GRAY: "#9A8989",
    TEXT_DARK_GRAY: "#666666",
    TEXT_CUSTOM_GRAY: "#BDBDBD",
    BACKGROUND_LIGHT_GRAY: "#F3F3F3",

    //new text colors
    TEXT_BROWN_COLOR : '#333333',
    TEXT_DARKGREY_COLOR : '#666666',
    TEXT_LIGHTGREY_COLOR : '#999999',
    TEXT_BLUE_COLOR : '#1E5297',
    TEXT_RED_COLOR : '#EB5757',
    TEXT_ORANGE_COLOR : '#F2994A',
    TEXT_GREEN_COLOR : '#27AE60',
    TEXT_BROWNRED_COLOR: '#C0291E',
    TEXT_GREY:'#544E4E',
    TEXT_GREEN:'#1B8646',
    TEXT_YELLOW:'#E2A812',
    TEXT_DISABLE:'#C4C4C4',

    // background
    BACKGROUND_WHITE: "white",

    // errors
    ERROR: "#FF6363",

};

export const austinColors = {
    PRIMARY: "#1E5297",
    APP_LIGHT_GRAY: "lightgray",
    // text
    TEXT_PRIMARY: "black",
    TEXT_SECONDARY: "#524D4D",

    // background
    BACKGROUND_WHITE: "white",
    BACKGROUND_LIGHT_GRAY: "#F3F3F3",

    // errors
    ERROR: "#FF6363",

};

export const themes = {
    austinColors,
    colors,
};

export const Poppins_Regular = "HELVETICANEUE"
export const Poppins_Bold = "HELVETICANEUE-BOLD"
export const poppins_Light = "HELVETICANEUE-LIGHT"

export const FONT_FAMILY = Poppins_Regular //"DINRoundPro-Medium"
export const FONT_FAMILY_REGULAR = Poppins_Regular //"DINRoundPro-Regular"
export const FONT_FAMILY_LITE = Poppins_Regular //"DINRoundPro-Light"
export const FONT_FAMILY_BOLD =  Poppins_Bold //"DINRoundPro-Bold"


export const fonts = StyleSheet.create({
    Title: {
        fontSize: 25,
        lineHeight: 23,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    TITLE_BOLD: {
        fontSize: 25,
        lineHeight: 23,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent',
        fontWeight: '500',
    },
    HEADING: {
        // fontFamily: FONT_FAMILY_BOLD,
        fontSize: 20,
        lineHeight: 23,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    HEADING_BOLD: {
        // fontFamily: FONT_FAMILY_BOLD,
        fontSize: 20,
        lineHeight: 23,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent',
        fontWeight: 'bold',

    },
    SUB_HEADING: {
        // fontFamily: FONT_FAMILY,
        fontSize: 17,
        lineHeight: 21,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    SUB_HEADING_BOLD: {
        // fontFamily: FONT_FAMILY,
        fontSize: 16,
        lineHeight: 21,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },
    BODY: {
        fontSize: 13,
        lineHeight: 18,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent',
    },
    BODY_BOLD: {
        fontSize: 13,
        lineHeight: 18,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
    },
    SMALL: {
        fontSize: 9,
        lineHeight: 14,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent',
    },
    H2: {
        fontFamily: FONT_FAMILY,
        fontSize: 15,
        lineHeight: 19,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    H2_SHADED: {
        fontFamily: FONT_FAMILY,
        fontSize: 15,
        lineHeight: 19,
        color: colors.TEXT_SECONDARY,
        backgroundColor: 'transparent'
    },
    P1: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    P1_SEMI_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 14,
        lineHeight: 18,
        color: colors.TEXT_PRIMARY,
        fontWeight: '500',
        backgroundColor: 'transparent'
    },
    P1_UPPER_GREEN: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        color: colors.GREEN,
        backgroundColor: 'transparent'
    },
    P2: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        lineHeight: 17,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },

    P2_SEMI_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 13,
        lineHeight: 17,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    P2_ERROR: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        lineHeight: 17,
        color: colors.ERROR,
        backgroundColor: 'transparent'
    },


    MEDIUM: {
        fontFamily: FONT_FAMILY,
        fontSize: 15,
        lineHeight: 19,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    BIG_T1: {
        fontFamily: FONT_FAMILY,
        fontSize: 36,
        lineHeight: 46,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    BIG_T2: {
        fontFamily: FONT_FAMILY,
        fontSize: 24,
        lineHeight: 31,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    BIG_T2_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 24,
        lineHeight: 31,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },

    NOTE: {
        fontFamily: FONT_FAMILY,
        fontSize: 12,
        lineHeight: 21,
        color: colors.TEXT_SECONDARY,
        backgroundColor: 'transparent'
    },

   H1_Regular : {
    fontFamily: Poppins_Regular,
    fontSize: 24,
    lineHeight: 36,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H2_Regular : {
    fontFamily: Poppins_Regular,
    fontSize: 18,
    // lineHeight: 27,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H3_Regular : {
    fontFamily: Poppins_Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H4_Regular : {
    fontFamily: Poppins_Regular,
    fontSize: 14,
    lineHeight: 21,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H5_Regular : {
    fontFamily: Poppins_Regular,
    fontSize: 12,
    lineHeight: 17,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },

   H1_Bold : {
    fontFamily: Poppins_Bold,
    fontSize: 24,
    lineHeight: 36,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H2_Bold : {
    fontFamily: Poppins_Bold,
    fontSize: 20,
    lineHeight: 27,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H3_Bold : {
    fontFamily: Poppins_Bold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H4_Bold : {
    fontFamily: Poppins_Bold,
    fontSize: 14,
    lineHeight: 21,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H5_Bold : {
    fontFamily: Poppins_Bold,
    fontSize: 12,
    lineHeight: 16,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
   H4_Light : {
    fontFamily: poppins_Light,
    fontSize: 14,
    lineHeight: 21,
    color: colors.TEXT_PRIMARY,
    backgroundColor: 'transparent'
   },
})

