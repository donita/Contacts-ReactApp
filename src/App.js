import React, { Component } from 'react' 
import ListContacts from './ListContacts' // import the list contacts

//make a component, to receive the contacts and then display them to the view
//pass the contacts to thew component. 
//component displays them 


const contacts = [   //map over to display list of contacts
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
]

class App extends Component {
   render() {
     return (
       <div>
         Hello World
         <ListContacts contacts={contacts} />
       </div>
     )
   }
}
export default App