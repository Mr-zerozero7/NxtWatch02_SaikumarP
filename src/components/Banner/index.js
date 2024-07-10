import {IoMdClose} from 'react-icons/io'
import ThemeContext from '../../context/ThemeContext'

import {
  BannerContainer,
  LogoAndIconContainer,
  WebsiteBannerLogo,
  CancelButton,
  BannerPaymentTagLine,
  GetItNowBtn,
} from './styledComponents'

const Banner = props => {
  const {onClickCloseButton} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <BannerContainer dark={darkTheme}>
            <LogoAndIconContainer>
              <WebsiteBannerLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website banner logo"
              />
              <CancelButton type="button" onClick={onClickCloseButton}>
                <IoMdClose />
              </CancelButton>
            </LogoAndIconContainer>
            <BannerPaymentTagLine>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerPaymentTagLine>
            <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
          </BannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Banner
