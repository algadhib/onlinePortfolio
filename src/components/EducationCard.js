import React from 'react';
import { List, Container, Header, Segment } from 'semantic-ui-react';
import resumeJson from '../resumeJson';

class EducationCard extends React.Component {

   renderMetaList()  {
      return resumeJson.education.meta.map((listItem, itemKey) => <List.Item key={itemKey}>{listItem}</List.Item>);
   }

   render () {
      return(
         <Container>
            <Segment basic clearing>         
               <Header as='h1' floated='left'>
                  <Header.Content>
                     {resumeJson.education.schoolName}
                     <Header.Subheader style={{ marginLeft:"1em"}}>{resumeJson.education.major}</Header.Subheader>
                  </Header.Content>
               </Header>
               <Segment floated='right' basic style={{ padding: '1em', margin: '0em'}}>
                  <Header as='h5' disabled style={{ padding: '0em', margin: '0em'}}>
                     {resumeJson.education.gradDate}
                  </Header>
                  <Header as='h5'  disabled style={{ padding: '0em', margin: '0em' }}>
                     {resumeJson.education.GPA}
                  </Header>
               </Segment>
            </Segment>

            <List bulleted>
               {this.renderMetaList()}
            </List>
         </Container>
      );
   }
}

export default EducationCard