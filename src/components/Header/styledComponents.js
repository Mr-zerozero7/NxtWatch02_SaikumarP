import styles from 'styled-components'

export const NavContainer = styles.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 0px 10px 20px;
box-shadow: 3px 4px 14px 4px ${props => (props.dark ? '#ff0000' : '#000000')};
border-radius: 10px 10px 0px 0px;
background-color: ${props => (props.dark ? '#000000' : 'ffffff')};
`
export const WebsiteLogo = styles.img`
width: 130px;
height: 35px;

`
export const UtilityContainer = styles.div`
width: 200px;
display: flex;
justify-content: space-evenly;
align-items: center;
`
export const ThemeButton = styles.button`
font-size: 25px;
margin-top: 10px;
border: none;
background-color: transparent;
cursor: pointer;

`
export const ProfileImage = styles.img`
width: 35px;
height: 35px;
`
export const LogoutButton = styles.button`
font-weight: 600;
border: 1px solid #3b82f6;
color: #3b82f6;
background-color: transparent;
border-radius: 8px;
padding: 10px;
cursor: pointer;
box-shadow: 1px 2px 11px 2px;
`
