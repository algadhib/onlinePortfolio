import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Header,
  Icon
} from 'semantic-ui-react'
import resumeJson from '../resumeJson';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content={resumeJson.personalInfo.name}
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content={resumeJson.personalInfo.objective}
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />

    <Container text>
      <a href={resumeJson.personalInfo.github} style={{color: 'inherit'}} target='_blank' rel='noopener noreferrer'>
         <Icon size='big' name='github' />
      </a>
      <a href={resumeJson.personalInfo.linkedin} style={{color: 'inherit'}} target='_blank' rel='noopener noreferrer'>
         <Icon size='big' name='linkedin' />
      </a>
      <a href={`mailto:${resumeJson.personalInfo.email}`} style={{color: 'inherit'}} target='_blank' rel='noopener noreferrer'>
         <Icon size='big' name='mail' />
      </a>
    </Container>

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;