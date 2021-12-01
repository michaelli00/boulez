import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Blockquote from '@yozora/react-blockquote'
import '@yozora/react-blockquote/lib/esm/index.css'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Container className="Home">
        <h1 className="title">How Did Pierre Boulez Use Mathematics to Develop and Build upon Total Serialism?</h1>
        <div className="blurb">
          The goal of this project is to analyze mathematical ideas Boulez introduced into some of his total serialist works. As a convenient way of displaying these mathematical ideas, I developed a few web tools to allow readers to play around with how these ideas work. One of the reasons why I decided to build and use these tools as a way to analyze Boulez's music was because of a quote from an interview with Boulez:
        </div>
        <Blockquote>
          <div>
            Had computers existed at that time I would have put the data through them and made the piece that way. But I did it by hand. I was myself a small and very primitive computer. It was a demonstration through the absurd.<sup>1</sup>
          </div>
        </Blockquote>
        <div className="blurb">
          From this quote, it's clear that Boulez's total serialist techniques could be modeled using some sort of computer algorithm. In this project, I take this idea to heart. 
        </div>
        <br/>
        <div className="blurb">
          Each page will feature a compositional method Boulez used, explain the mathematics behind the method, provide examples from Boulez's own works, and contain a tool that allows users to play with the compositional method. At the moment, pages have been developed for
        </div>
        <br/>
        <ul>
          <li> <NavLink to="/total-serialism" className="nav-link">Total Serialism (WORK IN PROGRESS STILL)</NavLink></li>
          <li> <NavLink to="/pitch-multiplication" className="nav-link">Pitch Multiplication (Mostly done)</NavLink> </li>
        </ul>
        <br/>
        <br/>
        <Row className="blurb">
          <p> This webapp was developed using React and react-abc, a javascript library for rendering music using abc music notation (<a href="https://github.com/fuhton/react-abc" target="_blank" rel="noreferrer">https://github.com/fuhton/react-abc</a>).</p>
          <p>Source code can be found <a href="https://github.com/michaelli00/boulez" target="_blank" rel="noreferrer">here</a>.</p>
        </Row>
      </Container>
      <Navbar bg="light" variant="light" expand="lg" className="Footer">
        <Container>
      1. Igor Toronyilalic, “Theartsdesk Q&A: Composer Pierre Boulez,” theartsdesk.com, January 7, 2016, https://www.theartsdesk.com/classical-music/theartsdesk-qa-composer-pierre-boulez.
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default App;
