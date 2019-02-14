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

const DividerLine = props => (
  <Divider
      as='h2'
      className='header'
      horizontal
      style={{ margin: '1em 0em', textTransform: 'uppercase' }}
    >
      <Icon name={props.iconName}/>
      {props.title}
    </Divider>
);

const HomepageLayout = () => (
  <ResponsiveContainer>

    <DividerLine iconName='suitcase' title='Experience' />
    <Container style={{ padding: '4em 0em' }}>
      <Container text>
        <ExperienceList />
      </Container>
    </Container>

    <DividerLine iconName='graduation' title='Education' />
    <Container style={{ padding: '4em 0em' }}>
      <Container text>
        <EducationCard />
      </Container>
    </Container>

    <DividerLine iconName='lightbulb outline' title='Projects' />
    <Container style={{ padding: '4em 0em' }}>
      <ProjectList />
    </Container>

    <DividerLine iconName='code' title='Software Skills' />
    <Container style={{ padding: '4em 0em' }}>
      <Container text>
        <SkillList />
      </Container>
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
