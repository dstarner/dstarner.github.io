import React, { Component } from 'react';

import logo from '../images/toaster.gif';
import './App.css';
import Icon from './Icon';

const taglines = [
  'Site Reliability Engineer',
  'Skilled breaker of things',
  'Sucker for cute online cat videos',
  'Systems management Kind of guy',
  'Doesn\'t want to discuss politics',
  '...including if generics should be in Go',
  'Enjoys a good Italian sub',
  'Takes long hikes when bored',
  'Unashamedly a die-hard Ansible user',
  'Writes more Groovy than one should',
  '"Testing in Prod" is was my nickname',
  'Occasionally writes a post to dev.to',
  'Is slowly running out of tagline ideas',
]

const icons = [
  {icon: ['fab', 'instagram'], link: 'https://www.instagram.com/danstarner/'},
  {icon: ['fab', 'twitter'], link: 'https://twitter.com/standarner'},
  {icon: ['fab', 'facebook'], link: 'https://www.facebook.com/dancstarner'},
  {icon: ['fab', 'dev'], link: 'https://dev.to/dstarner'},
  {icon: ['fab', 'github'], link: 'https://github.com/dstarner'},
  {icon: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/danstarner/'},
  {icon: ['fas', 'envelope'], link: 'mailto:starner.daniel5@gmail.com'},
]

class App extends Component {

  constructor() {
    super();
    this.state = {
      timer: null,
      tagline: taglines[0],
      index: 0,
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
    let index = this.state.index + 1;
    if (index === taglines.length) index = 0;
    this.setState({index});
    return taglines[this.state.index];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{marginBottom: '.3px'}}>Dan Starner</h1>
          <p id='tagline'>
            <strong>Some facts about me</strong><br/>
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
