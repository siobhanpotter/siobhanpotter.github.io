import React from 'react';
import ReactDOM from 'react-dom';
import scollToComponent from 'react-scroll-to-component';

import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

import './scss/style.scss';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Home: false,
      Projects: false,
      About: false,
      Contact: false,
      Skills: false
    };
    // this.handleHover = this.handleHover.bind(this);
  }


  render() {
    return (
      <div>
        { this.state &&
          <main className="container">
            <Home
              switchVisibleComponent={this.switchVisibleComponent}
              handleHover={this.handleHover}
            />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
