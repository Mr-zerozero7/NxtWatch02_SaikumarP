import {Component} from 'react'
import {IoSearch} from 'react-icons/io5'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {
  HomePageMainContainer,
  SidebarAndVideosContainer,
  HomeVideoBannerContainer,
  VideoAndSearchContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  VideoListContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureNote,
  RetryButton,
  NoVideosViewContainer,
  NoVideosViewImage,
  NoVideosHeading,
  NoVideosNote,
} from './styledComponents'
import Banner from '../Banner'

import Header from '../Header'
import SidebarMenu from '../SidebarMenu'
import HomeVideoItem from '../HomeVideoItem'
import ThemeContext from '../../context/ThemeContext'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
  noVideos: 'NOVIDEOS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {searchInput} = this.state
    const homeVideosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(homeVideosUrl, options)
    const data = await response.json()
    if (response.ok) {
      if (data.total === 0) {
        this.setState({apiStatus: apiConstants.noVideos})
      } else {
        const updateData = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          channel: {
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          },
          publishedAt: eachVideo.published_at,
          thumbnailUrl: eachVideo.thumbnail_url,
          title: eachVideo.title,
          viewCount: eachVideo.view_count,
        }))
        this.setState({videosList: updateData, apiStatus: apiConstants.success})
      }
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickCloseButton = () => {
    this.setState(prevState => ({
      showBanner: !prevState.showBanner,
    }))
  }

  handleSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  handleSearchBtn = () => {
    this.loadData()
  }

  renderSearchBar = dark => {
    const {searchInput} = this.state
    return (
      <SearchBarContainer>
        <SearchInput
          type="text"
          dark={dark}
          value={searchInput}
          placeholder="Search"
          onChange={this.handleSearchInput}
        />
        <SearchButton type="button" dark={dark} onClick={this.handleSearchBtn}>
          <IoSearch />
        </SearchButton>
      </SearchBarContainer>
    )
  }

  renderVideosView = dark => {
    const {videosList} = this.state
    return (
      <VideoListContainer dark={dark}>
        {videosList.map(eachVideo => (
          <HomeVideoItem videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideoListContainer>
    )
  }

  renderLoadingView = dark => {
    const loaderColor = dark ? '#ffffff' : '#000000'
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
      </LoaderContainer>
    )
  }

  handleRetryBtn = () => {
    this.loadData()
  }

  renderFailureView = dark => (
    <FailureViewContainer dark={dark}>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure pic"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureNote>
        We are having some trouble to complete your request. Please try again.
      </FailureNote>
      <RetryButton type="button" onClick={this.handleRetryBtn}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderNoVideosView = dark => (
    <NoVideosViewContainer dark={dark}>
      <NoVideosViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideosHeading>No saved videos found</NoVideosHeading>
      <NoVideosNote>You can save your videos while watching them</NoVideosNote>
    </NoVideosViewContainer>
  )

  renderVideos = dark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoadingView(dark)
      case apiConstants.failure:
        return this.renderFailureView(dark)
      case apiConstants.success:
        return this.renderVideosView(dark)
      case apiConstants.noVideos:
        return this.renderNoVideosView(dark)
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomePageMainContainer dark={darkTheme}>
              <Header />
              <SidebarAndVideosContainer>
                <SidebarMenu />
                <HomeVideoBannerContainer dark={darkTheme}>
                  {showBanner && (
                    <Banner onClickCloseButton={this.onClickCloseButton} />
                  )}
                  <VideoAndSearchContainer>
                    {this.renderSearchBar(darkTheme)}
                    {this.renderVideos(darkTheme)}
                  </VideoAndSearchContainer>
                </HomeVideoBannerContainer>
              </SidebarAndVideosContainer>
            </HomePageMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
