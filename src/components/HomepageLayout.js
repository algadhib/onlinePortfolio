import React from 'react';
import {
  Container,
  Divider,
  Icon,
  Segment
} from 'semantic-ui-react';
import ResponsiveContainer from './ResponsiveContainer';
import ProjectList from './ProjectList';
import EducationCard from './EducationCard';
import ExperienceList from './ExperianceList';
import SkillList from './SkillList';

const HomepageLayout = () => (
  <ResponsiveContainer>

    <Divider
      as='h2'
      className='header'
      horizontal
      style={{ margin: '1em 0em', textTransform: 'uppercase' }}
    >
      <Icon name='suitcase'/>
      Experience
    </Divider>

    <Container style={{ padding: '8em 0em' }}>
      <Container text>
        <ExperienceList />
      </Container>
    </Container>

    <Divider
      as='h2'
      className='header'
      horizontal
      style={{ margin: '1em 0em', textTransform: 'uppercase' }}
    >
      <Icon name='code'/>
      Software Skills
    </Divider>

    <Container style={{ padding: '8em 0em' }}>
      <Container text>
        <SkillList />
      </Container>
    </Container>

    <Divider
      as='h2'
      className='header'
      horizontal
      style={{ margin: '1em 0em', textTransform: 'uppercase' }}
      >
        <Icon name='graduation'/>
        Education
    </Divider>

    <Container style={{ padding: '8em 0em' }}>
      <Container text>
        <EducationCard />
      </Container>
    </Container>

    <Divider
      as='h2'
      className='header'
      horizontal
      style={{ margin: '1em 0em', textTransform: 'uppercase' }}
    >
      <Icon name='lightbulb outline'/>
      Projects
    </Divider>

    <Container style={{ padding: '8em 0em' }}>
      <ProjectList />
    </Container>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        {/* <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Container>
    </Segment>

  </ResponsiveContainer>
)

export default HomepageLayout;
