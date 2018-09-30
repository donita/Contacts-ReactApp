import React, { Component } from 'react' // component that list our contacts

//whenever you make a react component, import react aka import React from 'react'

//map over our contacts

class ListContacts extends Component {
  render () {
    return (
      <ol className= 'contact-list'>
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className='contact-list-item'>
          <div className='contact-avatar' style={{
            backgroundImage:`url(${contact.avatarURL})`
          }}/>
          <div className='contact-details'>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          </div>
          <button className='contact-remove'>
             Remove
           </button>
          </li>
        ))}
      </ol>
      )
    }
}
export default ListContacts






  