import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import HomepageHeading from './HomepageHeading';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    //const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
         <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
         >
         <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
         >
            <HomepageHeading />
         </Segment>
         </Visibility>
         {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


class MobileContainer extends Component {
   state = {}
 
   handleSidebarHide = () => this.setState({ sidebarOpened: false })
 
   handleToggle = () => this.setState({ sidebarOpened: true })
 
   render() {
     const { children } = this.props
     const { sidebarOpened } = this.state
 
     return (
       <Responsive
         as={Sidebar.Pushable}
         getWidth={getWidth}
         maxWidth={Responsive.onlyMobile.maxWidth}
       >
         <Sidebar.Pusher dimmed={sidebarOpened}>
           <Segment
             inverted
             textAlign='center'
             style={{ minHeight: 350, padding: '1em 0em' }}
             vertical
           >
             <HomepageHeading mobile />
           </Segment>
 
           {children}
         </Sidebar.Pusher>
       </Responsive>
     )
   }
 }
 
 MobileContainer.propTypes = {
   children: PropTypes.node,
 }
 
 const ResponsiveContainer = ({ children }) => (
   <div>
     <DesktopContainer>{children}</DesktopContainer>
     <MobileContainer>{children}</MobileContainer>
   </div>
 )
 
 ResponsiveContainer.propTypes = {
   children: PropTypes.node,
 } 

export default ResponsiveContainer;