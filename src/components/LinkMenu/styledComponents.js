import {Link} from 'react-router-dom'
import styles from 'styled-components'

export const LinkContainer = styles.li`
display: flex;
align-items:center;
width: 100%;
height: 45px;
background-color: ${props => props.bgColor};
list-style: none;
`
export const MenuLink = styles(Link)`
text-decoration: none;
width: 100%;
padding: 10px;
display: flex;
align-items: center;
`
export const LinkName = styles.p`
margin-left : 22px;
font-weight: 600;
font-family: roboto;
color: ${props => props.color}
`
