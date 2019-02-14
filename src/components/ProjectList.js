import React from 'react'
import { Item, Label, Segment, Header, Container } from 'semantic-ui-react'
import resumeJson from '../resumeJson';

class ProjectList extends React.Component {

  listPropjects() {
    return resumeJson.projects.map((project, key) => {
      return (
        <Item key={key}>
          <Item.Content>
            <Segment clearing basic style={{ padding: '0em', margin: '0em'}}>
              <Header as='h1' floated='left'>{project.name}</Header>
              <Segment floated='right' basic style={{ padding: '1em', margin: '0em'}}>
                <Header as='h5' disabled style={{ padding: '0em', margin: '0em'}}>
                  {project.date}
                </Header>
              </Segment>
            </Segment>
              <Item.Description style={{ padding: '0em 2em' }}>{project.description}</Item.Description>
              <Item.Extra style={{ padding: '0em 2em' }}>
                {project.skills.map((skill, key) => <Label key={key}>{skill}</Label>)}
              </Item.Extra>
          </Item.Content>
        </Item>
      )
    })
  }

  render () { 
    return (  
      <Container text>
        <Item.Group divided>
          {this.listPropjects()}
        </Item.Group>
      </Container>
    );
  }    
}

export default ProjectList