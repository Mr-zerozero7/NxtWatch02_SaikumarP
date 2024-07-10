import {
  HomeVideoItemContainer,
  ThumbnailImage,
  ThumbnailContentContainer,
  ProfileImage,
  TitleAndChannelContainer,
  VideoTitle,
  ChannelName,
  ViewsAndPublishedContainer,
  ViewsCount,
  PublishedTime,
} from './stylesComponent'

const HomeVideoItem = props => {
  const {videoDetails} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount} = videoDetails
  const {name, profileImageUrl} = channel
  return (
    <HomeVideoItemContainer>
      <ThumbnailImage src={thumbnailUrl} alt={name} />
      <ThumbnailContentContainer>
        <ProfileImage src={profileImageUrl} alt={name} />
        <TitleAndChannelContainer>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName>{name}</ChannelName>
          <ViewsAndPublishedContainer>
            <ViewsCount>{viewCount} views</ViewsCount>
            <PublishedTime>{publishedAt}</PublishedTime>
          </ViewsAndPublishedContainer>
        </TitleAndChannelContainer>
      </ThumbnailContentContainer>
    </HomeVideoItemContainer>
  )
}

export default HomeVideoItem
