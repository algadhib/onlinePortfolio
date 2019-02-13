import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

const ProjectList = () => (
   
   
  <Item.Group divided>

    <Item>
      {/* <Item.Image src='/images/wireframe/image.png' /> */}

      <Item.Content>
        <Item.Header as='h1'>Crypto Clicker</Item.Header>
        <Item.Meta>
          <span className='cinema'>Winter 2018</span>
        </Item.Meta>
        <Item.Description>
        Collaborated in the design and implementation of a clicker game that utilize Coinbase API to get real time crypto currency exchange rates to enable the player to invest in virtual money. 
        </Item.Description>
        <Item.Extra>
          <Label>Java</Label>
          <Label>Android Studio</Label>
          {/* <Label icon='globe' content='Additional Languages' /> */}
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      {/* <Item.Image src='/images/wireframe/image.png' /> */}

      <Item.Content>
        <Item.Header as='a'>Crypto Clicker</Item.Header>
        {/* <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta> */}
        <Item.Description>
        Collaborated in the design and implementation of a clicker game that utilize Coinbase API to get real time crypto currency exchange rates to enable the player to invest in virtual money. 
        </Item.Description>
        <Item.Extra>
          <Label>Java</Label>
          <Label>Android Studio</Label>
          {/* <Label icon='globe' content='Additional Languages' /> */}
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      {/* <Item.Image src='/images/wireframe/image.png' /> */}

      <Item.Content>
        <Item.Header as='a'>Crypto Clicker</Item.Header>
        {/* <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta> */}
        <Item.Description>
        Collaborated in the design and implementation of a clicker game that utilize Coinbase API to get real time crypto currency exchange rates to enable the player to invest in virtual money. 
        </Item.Description>
        <Item.Extra>
          <Label>Java</Label>
          <Label>Android Studio</Label>
          {/* <Label icon='globe' content='Additional Languages' /> */}
        </Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ProjectList