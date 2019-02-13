import React from 'react'
import { Image, List, Container, Header, Segment, Divider } from 'semantic-ui-react'

const ExperienceList = () => (
   <Container>
      <Container>   
         <Segment basic clearing>         
            <Header as='h1' floated='left'>
               <Header.Content>
                  Software Developer Intern
                  <Header.Subheader style={{ marginLeft:"1em"}}>Autodesk Inc | Portland, OR</Header.Subheader>
               </Header.Content>
            </Header>
            <Segment floated='right' basic style={{ padding: '0em', margin: '0em'}}>
               <Header as='h5' disabled style={{ padding: '1em 0em', margin: '0em'}}>
                  June 2018 - September 2018
               </Header>
            </Segment>
         </Segment>
         <Container text>
            <strong>Duties: </strong>
            Contributed to scrum team contributing to the development of HFDM “High Frequency Data Management” C++ SDK. by adding new product features, fixing bugs, testing, and integrating CI/CD tools.
         </Container>

         <List bulleted>
               <List.Item>Implemented new functionality to the SDK</List.Item>
               <List.Item>Debugged and fix reported bugs in the source code. </List.Item>
               <List.Item>Added new test cases using Google test framework. </List.Item>
               <List.Item>Integrated CI/CD, such as code coverage tools, to Jenkins pipeline. </List.Item>
         </List>
      </Container>

      <Divider />

      <Container>   
         <Segment basic clearing>         
            <Header as='h1' floated='left'>
               <Header.Content>
                  Software Developer Intern
                  <Header.Subheader style={{ marginLeft:"1em"}}>Autodesk Inc | Portland, OR</Header.Subheader>
               </Header.Content>
            </Header>
            <Segment floated='right' basic style={{ padding: '0em', margin: '0em'}}>
               <Header as='h5' disabled style={{ padding: '1em 0em', margin: '0em'}}>
                  June 2018 - September 2018
               </Header>
            </Segment>
         </Segment>
         <Container text>
            <strong>Duties: </strong>
            Contributed to scrum team contributing to the development of HFDM “High Frequency Data Management” C++ SDK. by adding new product features, fixing bugs, testing, and integrating CI/CD tools.
         </Container>

         <List bulleted>
               <List.Item>Implemented new functionality to the SDK</List.Item>
               <List.Item>Debugged and fix reported bugs in the source code. </List.Item>
               <List.Item>Added new test cases using Google test framework. </List.Item>
               <List.Item>Integrated CI/CD, such as code coverage tools, to Jenkins pipeline. </List.Item>
         </List>
      </Container>
   </Container>
)

export default ExperienceList;