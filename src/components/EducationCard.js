import React from 'react';
import { List, Container, Header, Segment } from 'semantic-ui-react';
import resumeData from '../resumeJson';

class EducationCard extends React.Component {

   renderMetaList()  {
      return resumeData.education.meta.map( listItem => <List.Item>{listItem}</List.Item>)
   }

   render () {
      return(
         <Container>
            <Segment basic clearing>         
               <Header as='h1' floated='left'>
                  <Header.Content>
                     {resumeData.education.schoolName}
                     <Header.Subheader style={{ marginLeft:"1em"}}>{resumeData.education.major}</Header.Subheader>
                  </Header.Content>
               </Header>
               <Segment floated='right' basic style={{ padding: '1em', margin: '0em'}}>
                  <Header as='h5' disabled style={{ padding: '0em', margin: '0em'}}>
                     {resumeData.education.gradDate}
                  </Header>
                  <Header as='h5'  disabled style={{ padding: '0em', margin: '0em' }}>
                     {resumeData.education.GPA}
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