import React, { Component } from 'react';

import logo from '../images/toaster.gif';
import './App.css';
import Icon from './Icon';

const icons = [
  {icon: ['fab', 'instagram'], link: 'https://www.instagram.com/danstarner/'},
  {icon: ['fab', 'twitter'], link: 'https://twitter.com/standarner'},
  {icon: ['fab', 'facebook'], link: 'https://www.facebook.com/dancstarner'},
  {icon: ['fab', 'dev'], link: 'https://dev.to/dstarner', big: true},
  {icon: ['fas', 'rss-square'], link: 'https://blog.danstarner.com', big: true},
  {icon: ['fab', 'github'], link: 'https://github.com/dstarner'},
  {icon: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/danstarner/'},
  {icon: ['fas', 'envelope'], link: 'mailto:starner.daniel5@gmail.com'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{marginBottom: '.3px'}}>Dan Starner</h1>
          <p>
            I write code and go on adventures.
          </p>
          <div className='icon-row'>
            {icons.map((icon, index) => {
              return <Icon key={index} {...icon}/>
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
