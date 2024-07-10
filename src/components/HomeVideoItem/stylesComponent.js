import styles from 'styled-components'

export const HomeVideoItemContainer = styles.div`
font-family: roboto;
width: 350px;
padding: 5px;
margin: 10px;
`

export const ThumbnailImage = styles.img`
width: 350px;
height: 200px;
`
export const ThumbnailContentContainer = styles.div`
display: flex;
border: solid 1px lightgrey;
border-top:none;
`
export const ProfileImage = styles.img`
width: 50px;
height: 50px;
`
export const TitleAndChannelContainer = styles.div`

`
export const VideoTitle = styles.p`
font-weight: 600;
overflow: hidden;
padding: 0px;
margin: 2px;
`
export const ChannelName = styles.p`
padding: 5px 0px;
margin: 2px;
`
export const ViewsAndPublishedContainer = styles.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px;
margin: 0px;
`
export const ViewsCount = styles.p`
padding: 0px;
margin: 0px 0px 5px 0px;
`
export const PublishedTime = styles.li`
margin: 0px 8px 5px 0px;
`
