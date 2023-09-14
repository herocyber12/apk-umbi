// import { createIconSetFromFontello } from 'react-native-vector-icons';
// import fontelloConfig from '../Assets/font/iring_icon_config.json';
// export const IringIcon = createIconSetFromFontello(fontelloConfig, 'iring_icon');
 

/**
 * font family
 */
export const font = {
    black_italic: 'gilroy_black_italic',
    black: 'gilroy_black',
    bold_italic: 'gilroy_bold_italic',
    bold: 'gilroy_bold',
    extrabold_italic: 'gilroy_extrabold_italic',
    extrabold: 'gilroy_extrabold',
    heavy_italic: 'gilroy_heavy_italic',
    heavy: 'gilroy_heavy',
    light_italic: 'gilroy_light_italic',
    light: 'gilroy_light',
    medium_italic: 'gilroy_medium_italic',
    medium: 'gilroy_medium',
    regular_italic: 'gilroy_regular_italic',
    regular: 'gilroy_regular',
    semibold_italic: 'gilroy_semibold_italic',
    semibold: 'gilroy_semibold',
    thin_italic: 'gilroy_thin_italic',
    thin: 'gilroy_thin',
    ultralight_italic: 'gilroy_ultralight_italic',
    ultralight: 'gilroy_ultralight',
}

/**
 * colors
 */
export const color = {
    transparent: '#00000000',

    /**
     * black color
     */
    black_dim: "#0008",
    black_dim_1: "#0001",
    black_dim_2: "#0002",
    black_dim_3: "#0003",
    black_dim_4: "#0004",
    black_dim_5: "#0005",
    black_dim_6: "#0006",
    black_dim_7: "#0007",
    black_dim_8: "#0008",
    black_dim_9: "#0009",
    black: '#333',

    /**
     * white color
     */
    white: '#ffffff',
    light_extra: '#f9f9f9',
    light: '#f5f5f5',
    light_bone: '#efeded',
    gray: '#b4b4b4',
    heavy: '#707070',
    dark: '#888',
    white_dim: '#fff8',
    white_dim_1: '#fff1',
    white_dim_2: '#fff2',
    white_dim_3: '#fff3',
    white_dim_4: '#fff4',
    white_dim_5: '#fff5',
    white_dim_6: '#fff6',
    white_dim_7: '#fff7',
    white_dim_8: '#fff8',
    white_dim_9: '#fff9',

    /**
     * green
     */

    green: "#36932a",

    /**
     * 
     * socmed primary icon
     */
    fb_color: '#3b5998',
    google_color: '#ea4235',


    /**
     * label
     */
    gradient_label: ["#7c4dff", "#e91e63"],

    /**
     * alert background
     */
    gradient_default: ['#fff', '#f5f5f5'],

    //warning
    warning: '#f5e09a',
    border_warning: '#dec983',
    text_warning: '#856404',
    label_warning: "#ff9818",
    gradient_warning: ['#ead95c', '#dab62b'],

    //success
    btn_success: '#47b04c',
    success: '#d4edda',
    border_success: '#c3e6cb',
    text_success: '#155724',
    label_success: "#7ecf2b",
    gradient_success: ['#5edb7f', '#47b04c'],

    //danger
    danger: '#f8d7da',
    border_danger: '#f5c6cb',
    text_danger: '#721c24',
    label_danger: "#ff2929",
    gradient_danger: ['#db5e5e', '#b04747'],

    //info
    info: '#d1ecf1',
    border_info: '#bee5eb',
    text_info: '#0c5460',


    // app basic
    theme: '#faf9fa',
    primary: '#6930c3',
    black_primary: '#404057',
    secondary: '#ed16c9',
    purple_1: '#f3d6fa',
    yellow : '#fc8e16',
    yellow_1 : '#fae7d8',
    yellow_2 : '#fa9b32',
    button_gradient_1 : ['#ffbe7b','#fc8706'],
    red: '#ea4235',
    
}

/**
 * typography
 */
export const typography = {
    h1 : {
        fontFamily: font.semibold,
        fontSize: 32,
        color: color.black_primary
    },
    h2 : {
        fontFamily: font.semibold,
        fontSize: 28,
        color: color.black_primary
    },
    h3: {
        fontFamily: font.semibold,
        fontSize: 26,
        color: color.black_primary
    },
    h4: {
        fontFamily: font.semibold,
        fontSize: 23,
        color: color.black_primary
    },
    h5: {
        fontFamily: font.semibold,
        fontSize: 19,
        color: color.black_primary
    },
    p : {
        fontFamily: font.regular,
        fontSize: 18, 
        lineHeight : 24,
        color : color.black
    },
}