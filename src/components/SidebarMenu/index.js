import ThemeContext from '../../context/ThemeContext'
import {
  SidebarMenuContainer,
  MenuContainer,
  FooterContainer,
  ContactUsTag,
  SocialIconsContainer,
  MediaIcon,
  MsgNote,
} from './styledComponents'
import LinkMenu from '../LinkMenu'

const SidebarMenu = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <SidebarMenuContainer dark={darkTheme}>
          <MenuContainer dark={darkTheme}>
            <LinkMenu />
          </MenuContainer>
          <FooterContainer>
            <ContactUsTag>CONTACT US</ContactUsTag>
            <SocialIconsContainer>
              <MediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <MediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <MediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <MsgNote>
              Enjoy! Now to see your channels and recommendations!
            </MsgNote>
          </FooterContainer>
        </SidebarMenuContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SidebarMenu

/* <MenuItemButton onClick={handleMenuButton}>
                <MenuIconSpan>
                  <MdHome />
                </MenuIconSpan>
                Home
              </MenuItemButton>
              <MenuItemButton>
                <MenuIconSpan>
                  <FaFire />
                </MenuIconSpan>
                Trending
              </MenuItemButton>
              <MenuItemButton>
                <MenuIconSpan>
                  <SiYoutubegaming />
                </MenuIconSpan>
                Gaming
              </MenuItemButton>
              <MenuItemButton>
                <MenuIconSpan>
                  <CgPlayListAdd />
                </MenuIconSpan>
                Saved Videos
              </MenuItemButton> */
