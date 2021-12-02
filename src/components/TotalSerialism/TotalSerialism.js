import React from 'react';
import Button from 'react-bootstrap/button';
import Container from 'react-bootstrap/container';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/row';
import Table from 'react-bootstrap/table';
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
      }
    });
    this.setState({notation: notation});
  }

  render() {
    const {
      sequence,
      notation,
    } = this.state;

    return (
      <Container className="TotalSerialism">
        <Row>
          <h1 className="title">Total Serialism</h1>
        </Row>
        <Row className="content">
          <p>
            Total serialism focuses on the idea of applying serial techniques  to other aspects of music, not just pitch classes. As a high level discussion of serialism, the technique order the "12 notes of the equal-tempered chromatic scale (i.e. the 12 pitch classes) so that each appears once." There are multiple ways of operating on these series, for example transpositions and inversions.<sup>4</sup>
          </p>
          <p>
            These serial techniques can be applied to rhythm, dynamics, articulation, etc. For this webapp, we will focus on rhythmic serialism where note duration is based on a "‘chromatic’ duration series – one consisting of 12 values, each a different whole number of demisemiquavers from one to 12."<sup>4</sup> For example, numbers can be assigned to pitch durations in ascending order. Boulez specifically used the duration set from Division I of Olivier Messiaen's <i>Mode de valeurs</i> that "begins with a thirty-second note, and each succeeding duration is increased by that value, so that the last is a dotted quarter note."<sup>5</sup> Below is the corresponding pitch duration classes defined by Messiaen's Division I pitch duration organization and a tool that produces a sequence of notes that uses this pitch duration organization.
          </p>
          <div className="img-container">
            <img src={Pitch_Duration_Organization} alt="Messiaen Division I"/>
          </div>
          <Form onSubmit={e => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="transposeNumber">
              <Form.Label className="form-label">Pitch Duration Values (Comma delimited)</Form.Label>
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
            <Notation notation={`X:1\nK:C\nL:1/32\n${notation}`} />
          }
          <p>
            The pitch duration organization can be expanded to start at a different pitch duration, for example a 16th node instead of a 32nd note.
          </p>
          
        </Row>
      </Container>
    );
  }
}

export default TotalSerialism;
