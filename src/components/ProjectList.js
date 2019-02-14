import React from 'react'
import { Button, Icon, Image, Item, Label, Segment, Header } from 'semantic-ui-react'
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
            <Item.Description>{project.description}</Item.Description>
            <Item.Extra>
              {project.skills.map((skill, key) => <Label key={key}>{skill}</Label>)}
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    })
  }

  render () { 
    return (  
      <Item.Group divided>
        {this.listPropjects()}
      </Item.Group>
    );
  }    
}

export default ProjectList