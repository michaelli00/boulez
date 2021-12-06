import React from 'react';
import Button from 'react-bootstrap/button';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Form from 'react-bootstrap/form';
import Navbar from 'react-bootstrap/Navbar';
import { Notation, Midi } from 'react-abc';

import Pitch_Duration_Organization from '../../assets/pitch-duration-organization.jpg';
import './TotalSerialism.css';

class TotalSerialism extends React.Component {
  constructor() {
    super();
    this.state = {
      sequence: "",
      notation: "",
    };
  }

  handleCreateNotation = () => {
    const { sequence } = this.state;
    let notation = "";
    sequence.split(',').forEach(num => {
      if (isNaN(num)) {
        alert("Please enter a valid input");
        return;
      }
      switch(parseInt(num)) {
        case 1:
          notation += "C";
          break;
        case 2:
          notation += "C2";
          break;
        case 3:
          notation += "C3";
          break;
        case 4: 
          notation += "C4";
          break;
        case 5:
          notation += "(C4C)";
          break;
        case 6:
          notation += "C6";
          break;
        case 7:
          notation += "(C6C)";
          break;
        case 8:
          notation += "C8";
          break;
        case 9:
          notation += "(C8C)";
          break;
        case 10:
          notation += "(C8C2)";
          break;
        case 11:
          notation += "(C8C3)";
          break;
        case 12:
          notation += "C12";
          break;
        default:
          alert("Please enter a valid input");
      }
    });
    this.setState({notation: notation});
  }

  render() {
    const {
      sequence,
      notation,
    } = this.state;

    const notationString = `X:1\nK:C\nL:1/32\n${notation}`;

    return (
      <React.Fragment>
        <Container className="TotalSerialism">
          <Row>
            <h1 className="title">Total Serialism</h1>
          </Row>
          <Row className="content">
            <p>
              Total serialism focuses on the idea of applying serial techniques  to other aspects of music, not just pitch classes. As a high level discussion of serialism, the technique order the "12 notes of the equal-tempered chromatic scale (i.e. the 12 pitch classes) so that each appears once."<sup>3</sup>
            </p>
            <p>
              These serial techniques can be applied to rhythm, dynamics, articulation, etc. For this webapp, we will focus on rhythmic serialism where note duration is based on a "‘chromatic’ duration series – one consisting of 12 values, each a different whole number of demisemiquavers from one to 12."<sup>3</sup> For example, numbers can be assigned to pitch durations in ascending order. Boulez specifically used the duration set from Division I of Olivier Messiaen's <i>Mode de valeurs</i> that "begins with a thirty-second note, and each succeeding duration is increased by that value, so that the last is a dotted quarter note."<sup>4</sup> Below is a picture with the corresponding pitch duration classes defined by Messiaen's Division I pitch duration organization mentioned in Boulez's book <i>Orientations: Collected Writings</i>.<sup>5</sup>
            </p>
            <div className="img-container">
              <img src={Pitch_Duration_Organization} alt="Messiaen Division I"/>
            </div> 
            <p>The tool below visualizes Messiaen's Division I pitch duration organization. It takes a sequence of numbers (between 1 and 12) and outputs the resulting pitch duration sequence. The tool also provides an audio player of what the resulting pitch duration input sequence sounds like.</p>
            <Form onSubmit={e => e.preventDefault()}>
              <Form.Group className="mb-3" controlId="transposeNumber">
                <Form.Label className="form-label">Pitch Duration Values (Comma delimited numbers between 1 and 12 inclusive. For example "1, 2, 6, 12")</Form.Label>
                <span className="form-row">
                  <Form.Control 
                    type="text"
                    value={sequence}
                    onChange={e => this.setState({sequence: e.target.value})}
                  />
                  <Button variant="dark" type="button" onClick={this.handleCreateNotation} className="pull-right">
                    Serialize
                  </Button>
                </span>
              </Form.Group>
            </Form>
            {notation && 
              <div>
              <Notation notation={notationString}/>
              <Midi 
                key={notationString}
                notation={notationString}
                midiParams={{qpm: 45}}
              />
              </div>
            }
            <p>
              (TODO make music output larger).
              <br/>
              (TODO Insert quote from Boulez book on how serialism can be applied to dynamics, articulation, etc. in the same fashion).

              <br/>

              The pitch duration organization can also be expanded to start at a different pitch duration, for example a 16th node instead of a 32nd note.
              <br/>
              (TODO insert examples of pitch duration serialization from Boulez's works).
            </p>
          </Row>
        </Container>
        <Navbar bg="light" variant="light" expand="lg" className="Footer">
          <Container>
            3. Paul Griffiths, “Serialism,” Oxford Music Online, 2001, https://doi.org/10.1093/gmo/9781561592630.article.25459.
            <br/>
            4. Lynden Deyoung, “Pitch Order and Duration Order in Boulez’ Structure Ia,” Perspectives of New Music 16, no. 2 (1978): 27, https://doi.org/10.2307/832676, 2.
            <br/>
            5. Pierre Boulez and Jean-Jacques Nattiez, Orientations : Collected Writings (London: Faber And Faber, 1990), 140.
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default TotalSerialism;
