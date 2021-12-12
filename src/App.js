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
          Interestingly enough, Boulez originally was studying mathematics before he move "from Lyons to Paris in order to devote himself entirely to music" in 1943.<sup>3</sup> He was 18 years old at the time. While in Paris, Boulez introduced himself to Olivier Messiaen, a distinguished composer at the time.<sup>3</sup> It was here where Boulez received most of his musical education. From thereon, it's clear that Boulez used his background in mathematics to help compose his music, which ultimately helped him develop total serialism.
        </div>
        <br/>
        <div className="blurb">
          Each page will feature a compositional method Boulez used, explain the mathematics behind the method, provide examples from Boulez's own works, and contain a tool that allows users to play with the compositional method. At the moment, pages have been developed for
        </div>
        <br/>
        <ul>
          <li> <NavLink to="/total-serialism" className="nav-link">Total Serialism</NavLink></li>
          <li> <NavLink to="/pitch-multiplication" className="nav-link">Pitch Multiplication</NavLink> </li>
        </ul>
        <br/>
        <br/>
        <Row className="blurb">
          <p> This webapp was developed using React and react-abc, a javascript library for rendering music using abc music notation (<a href="https://github.com/fuhton/react-abc" target="_blank" rel="noreferrer">https://github.com/fuhton/react-abc</a>).<sup>2</sup></p>
          <p>Source code can be found <a href="https://github.com/michaelli00/boulez" target="_blank" rel="noreferrer">here</a>.</p>
        </Row>
      </Container>
      <Navbar bg="light" variant="light" expand="lg" className="Footer">
        <Container>
          1. Igor Toronyilalic, “Theartsdesk Q&A: Composer Pierre Boulez,” theartsdesk.com, January 7, 2016, https://www.theartsdesk.com/classical-music/theartsdesk-qa-composer-pierre-boulez.
          <br/>
          2. Nicholas Smith, “React-Abc,” GitHub, June 16, 2018, https://github.com/fuhton/react-abc.
          <br/>
          3. Tobias Bleek, “Explore the Score | Pierre Boulez: Notations | History and Context  | a Journeyman Composition,” explorethescore.org, n.d., https://explorethescore.org/pierre-boulez-douze-notations-history-and-context-a-journeyman-composition.html.
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default App;
