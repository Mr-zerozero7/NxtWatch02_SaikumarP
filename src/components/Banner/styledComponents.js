import styles from 'styled-components'

export const BannerContainer = styles.div`
padding: 15px;
height: 200px;
background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
background-size: cover;
flex-grow:1;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const LogoAndIconContainer = styles.div`
display:flex;
align-items: center;
justify-content: space-between;
`
export const WebsiteBannerLogo = styles.img`
width:200px;

`
export const CancelButton = styles.button`
border: none;
background-color: transparent;
font-weight: bold;
font-size: 19px;
cursor: pointer;
`
export const BannerPaymentTagLine = styles.p`
font-family: roboto;
font-weight: 500;
font-size: 18px;
`
export const GetItNowBtn = styles.button`
padding: 10px;
background-color: transparent;
border: solid 1px;
font-weight: 600;
width: 120px;
cursor: pointer;
`
