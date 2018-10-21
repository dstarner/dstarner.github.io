import React, { Component } from 'react';

import logo from '../images/toaster.gif';
import './App.css';
import Icon from './Icon';

const taglines = [
  'I adventure and write code',
  'DevOps & Site Reliability Engineer',
  'Computer & Nature Lover',
  'Cars, Computers, & the Outdoors'
]

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

  constructor() {
    super();
    this.state = {
      timer: null,
      tagline: this.getTagline(),
    };

    this.getTagline = this.getTagline.bind(this);
  }

  componentDidMount() {
    let timer = setInterval(this.tick.bind(this), 2000);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    this.setState({
      tagline: this.getTagline()
    });
  }

  getTagline() {
    return taglines[Math.floor(Math.random() * taglines.length)];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{marginBottom: '.3px'}}>Dan Starner</h1>
          <p id='tagline'>
            {this.state.tagline}
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
