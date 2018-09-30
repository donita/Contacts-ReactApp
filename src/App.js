import React, { Component } from 'react' 
import ListContacts from './ListContacts' // import the list contacts

//make a component, to receive the contacts and then display them to the view
//pass the contacts to thew component. 
//component displays them 




class App extends Component {
  state = {
    contacts: [   //map over to display list of contacts
      {
        "id": "Dada",
        "name": "Kidada Jones",
        "email": "kidada@kidadajones.com",
        "avatarURL": "http://localhost:5001/kidada.jpg"
      },
      {
        "id": "Bow",
        "name": "Rainbow Johnson",
        "email": "rainbow@rainbowjohnsons.com",
        "avatarURL": "http://localhost:5001/rainbow.jpg"
      },
      {
        "id": "Tiff",
        "name": "Tiffany Dubois",
        "email": "tiffany@thedubois.com",
        "avatarURL": "http://localhost:5001/dubois.jpg"
      }
    ]
  }
   render() {
     return (
       <div>
         My Favorite Girls
         <ListContacts contacts={this.state.contacts} />
       </div>
     )
   }
}
export default App