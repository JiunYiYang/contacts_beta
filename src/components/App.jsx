import React, { Component } from 'react';
import { connect } from 'react-redux'; //
import { addContact, deleteContact } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    }
  }

  addContact() {
    this.props.addContact(this.state.name, this.state.phone);
    console.log('state in addContact', this.state);
  }

  deleteContact(id) {
    this.props.deleteContact(id);
  }

  renderContacts() {
    const { contacts } = this.props;
    return (
      <ul className="list-group col-sm-6">
        {
          contacts.map(contact => {
            return (
              <li key={contact.id} className="list-group-item">
                <div className="list-item">
                  <div>{contact.name}</div>
                  <div>{contact.phone}</div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteContact(contact.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">CONTACTS BETA 1.0</h2>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="His/her Name is..."
              onChange={event => this.setState({name: event.target.value})}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.addContact();
                }
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Phone Number is..."
              onChange={event => this.setState({phone: event.target.value})}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.addContact();
                }
              }}
            />
          </div>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addContact()}
          >
            Add to Contact
          </button>
        </div>
        { this.renderContacts() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state
  }
}

export default connect(mapStateToProps, { addContact, deleteContact })(App);
