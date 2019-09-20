import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Particles from 'react-particles-js';
//import Accesssql from './components/Mybusiness/accesssql';

const particlesOptions={
  particles: {
    number: {
      value:250,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

function App() {
  return (
<div className="demo-big-content">
<Particles className='particles' params={particlesOptions}/>
    <Layout>
        <Header title="bworld.ca" scroll>
            <Navigation>
                <a href="/services">Services</a>
                <a href="/customer">Customer</a>
                <a href="/tutorials">Tutorials</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Header>

        <Drawer title="Menu">
            <Navigation>
                <a href="/services">Services</a>
                <a href="/customer">Customer</a>
                <a href="/tutorials">Tutorials</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        
        </Content>
    </Layout>
</div>
  );
}

export default App;
