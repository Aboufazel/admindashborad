import {createTheme} from '@mui/material/styles';


const theme = createTheme({
    direction: 'rtl',
    spacing:16,
    palette: {
        primary: {
            main: '#0D6DFD',
            dark: '#005AE0',
            light: '#ABCDFF',
            extraLight: '#F2F6FB'
        },
        /**********************************neutralColor***********************************/
        neutralN100: {
            main: '#1C1B1F',
            contrastText:'#FFFFFF'
        },
        neutralN80:{
            main: '#49494C',
            contrastText:'#FFFFFF'
        },
        neutralN60:{
            main: '#777679',
            contrastText:'#FFFFFF'
        },
        neutralN40:{
            main: '#A4A4A5',
            contrastText:'#1C1B1F'
        },
        neutralN20:{
            main: '#D2D1D2',
            contrastText:'#1C1B1F'
        },
        neutralN10:{
            main: '#E8E8E9',
            contrastText:'#1C1B1F'
        },
        neutralN00:{
            main: '#FFFFFF',
            contrastText:'#1C1B1F'
        },
        /**********************************neutralColor***********************************/

        warning:{
            main:'#FFC107',
        },
        success:{
            main:'#28A745',
        },
        error:{
            main:'#DC3545'
        }
    },
    typography:{
        fontFamily:[
            'Regular'
        ].join(','),

       "h1":{
            fontSize:'14px'
       },
        "h2":{
            fontSize:'12px'
        },
        "h3":{
            fontSize:'10px'
        }
    },
    label:{
        direction:"rtl",
    },

})


export default theme;
