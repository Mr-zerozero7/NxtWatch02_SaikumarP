import styles from 'styled-components'

export const SidebarMenuContainer = styles.div`
background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
color: ${props => (props.dark ? '#ffffff' : '#000000')};
height: 100%;
width: 23%;
display: flex;
flex-direction: column;
justify-content:space-between;
font-family: Roboto;
`
export const MenuContainer = styles.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 150px;
color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
// export const MenuItemButton = styles.button`
// padding: 10px;
// border: none;
// display:flex;
// align-items:center;
// font-weight: 600;
// background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
// color: ${props => (props.dark ? '#ffffff' : '#000000')};
// `
// export const MenuIconSpan = styles.span`
// margin-right: 20px;
// font-size: 20px;
// margin-top: 4px;
//  `
export const FooterContainer = styles.div`
font-weight: 500;
padding: 10px;
`
export const ContactUsTag = styles.p``
export const SocialIconsContainer = styles.div`
display: flex;
width: 200px;
`
export const MediaIcon = styles.img`
width: 30px;
height: 30px;
margin-right: 15px;
`
export const MsgNote = styles.p`

`
