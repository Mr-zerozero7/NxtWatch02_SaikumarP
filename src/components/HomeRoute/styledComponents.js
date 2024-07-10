import styles from 'styled-components'

export const HomePageMainContainer = styles.div`
height: 100vh;
padding: 0px;
margin: 0px;
background-color: ${props => (props.dark ? '#000000' : '#F8F8F4')};
`

export const SidebarAndVideosContainer = styles.div`
display: flex;
margin-top: 10px;
height: 95vh;
`
export const HomeVideoBannerContainer = styles.div`
width: 100%;
over-flow: hidden;
background-color: ${props => (props.dark ? '#000000' : '#F8F8F4')};
color: ${props => (props.dark ? '#F8F8F4' : '#000000')};
`
export const VideoAndSearchContainer = styles.div`
min-height: 100%;
padding: 20px;

`

export const SearchBarContainer = styles.div`
display:flex;
align-items:center;
padding: 5px 13px;
`
export const SearchInput = styles.input`
padding: 10px;
width: 300px;
border: solid 1px lightgrey;
background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
color: ${props => (props.dark ? 'lightgrey' : '#000000')};
outline: none;
`
export const SearchButton = styles.button`
padding: 7px;
border: solid 1px lightgrey;
width: 60px;
font-size: 18px;
background-color: transparent;
color: ${props => (props.dark ? 'lightgrey' : '#000000')};
`
export const VideoListContainer = styles.div`
display: flex;
flex-wrap: wrap;
padding: 10px;
background-color: ${props => (props.dark ? '#000000' : '#F8F8F4')};
`
export const LoaderContainer = styles.div``

export const FailureViewContainer = styles.div`
font-family: roboto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const FailureViewImage = styles.img`
margin: 15px;
width: 400px;
height: 360px;
`
export const FailureHeading = styles.h2``
export const FailureNote = styles.p``
export const RetryButton = styles.button`
background-color: #4f46e5;
border: none;
color: #ffffff;
font-weight: 600;
padding: 12px;
border-radius: 7px;
width: 80px;
`

export const NoVideosViewContainer = styles(FailureViewContainer)``
export const NoVideosViewImage = styles(FailureViewImage)``
export const NoVideosHeading = styles.h2``
export const NoVideosNote = styles.p``
