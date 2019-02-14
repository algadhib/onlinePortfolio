import React from 'react';
import { Item, Label, Container } from 'semantic-ui-react'
import resumeJson from '../resumeJson';

class SkillList extends React.Component {

   listSkills() {
      const {skills} = resumeJson;
      return (
         skills.map((skillItem, key) => {
            console.log(skillItem);
            return (
               <Item key={key}>
                  <Item.Content>
                     <Item.Header>{skillItem.skillHeader}</Item.Header>
                     <Item.Extra style={{ padding: '0em 1em' }}>
                        {skillItem.skillList.map((skill, key) => <Label key={key}>{skill}</Label>)}
                     </Item.Extra>
                  </Item.Content>
               </Item>
            );
         })
      );
   }
  
   render () { 
      return (  
        <Container text>
          <Item.Group divided>
            {this.listSkills()}
          </Item.Group>
        </Container>
      );
   }   
}

export default SkillList;