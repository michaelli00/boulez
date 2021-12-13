import React from 'react';
import Button from 'react-bootstrap/button';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Form from 'react-bootstrap/form';
import Navbar from 'react-bootstrap/Navbar';
import { Notation, Midi } from 'react-abc';

import Pitch_Duration_Organization from '../../assets/pitch-duration-organization.jpg';
import P1_Ordinal from '../../assets/p1-ordinal.png';
import Structures_Ia from '../../assets/structures-ia.png';
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
              Total serialism focuses on the idea of applying serial techniques  to other aspects of music, not just pitch classes. As a high level discussion of serialism, the technique order the "12 notes of the equal-tempered chromatic scale (i.e. the 12 pitch classes) so that each appears once."<sup>4</sup>
            </p>
            <p>
              These serial techniques can be applied to rhythm, dynamics, articulation, etc. For this webapp, we will focus on rhythmic serialism where pitch duration is based on a "‘chromatic’ duration series – one consisting of 12 values, each a different whole number of demisemiquavers from one to 12."<sup>4</sup> For example, numbers can be assigned to pitch durations in ascending order. Boulez specifically used the duration set from Division I of Olivier Messiaen's <i>Mode de valeurs</i> that "begins with a thirty-second note, and each succeeding duration is increased by that value, so that the last is a dotted quarter note."<sup>5</sup> Below is a picture with the corresponding pitch duration classes defined by Messiaen's Division I pitch duration organization mentioned in Boulez's book <i>Orientations: Collected Writings</i>.<sup>6</sup>
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
              <React.Fragment>
                <Notation
                  notation={notationString}
                  engraverParams={{scale: 1.3}}
                />
                <Midi 
                  key={notationString}
                  notation={notationString}
                  midiParams={{qpm: 45}}
                />
              </React.Fragment>
            }
          </Row>
          <Row className="content">
            <p>
              An important thing to note is that pitch duration organization can easily be modified to start at a different pitch duration, for example the number 1 might correspond to a 16th note instead of a 32nd note.
            </p>
            <p>
              Taking the ideas from pitch duration organization, Boulez also serializes other musical factors, such as dynamics, articulations, tempi, etc. in a similar fashion. In fact, Boulez believed that "a series in general can be defined by a frequency function f(F), which may be extended to a duration function f(t), an intensity function f(i), etc., where the function does not change, but only the variable changes."<sup>6</sup> This means that the same serial organization or function can be applied to multiple factors of music.
            </p>
            <p>
              An example of where Boulez used serial pitch duration is in his <i>Structures Ia</i>. Looking at the first couple of measures of the movement, one can see that the pitches and pitch durations are based on the pitch class set (3 2 9 10 7 6 4 1 0 10 5 11), which corresponds to (E♭ D A, A♭, G, F#, E, C#, C, B♭, F, B). In particular
            </p>
            <ul>
              <li> 
                Notes for the piano 1 part are determined by P<sub>0</sub> (translation by 0) so the pitch class set is (3 2 9 10 7 6 4 1 0 10 5 11) and notes are (E♭ D A, A♭, G, F#, E, C#, C, B♭, F, B). Furthermore, these pitches are assigned ordinal numbers in the following manner:<sup>5</sup>
                <div className="img-container">
                  <img src={P1_Ordinal} alt="Piano 1 Ordinals"/>
                </div> 
                The ordinal numbers will be important when analyzing pitch durations
              </li>
              <li> Pitch durations for the piano 1 part are determined by RI<sub>4</sub> (retrograde inversion by 4) so the pitch class set is (11 5 0 10 9 6 4 3 2 1 8 7), which corresponds to (B F C B♭ A F# E E♭ D C# A♭ G). However, since we are dealing with pitch duration, we map each pitch class to its respective ordinal number, resulting in the pitch duration set (12 11 9 10 3 6 7 1 2 8 4 5). Ignoring the pitch classes of the notes, these values are the length of the note, in terms of multiplies of 32nd notes, and determine the order in which pitch durations occur. For example, the first two notes of the piano 1 part are 12 times the length of a 32nd note (dotted quarter) and 11 times the length of a 32nd note, respectively.<sup>5</sup> </li>
              <li> Notes for the piano 2 part are determined by I<sub>0</sub> (inversion by 0) so the pitch class set is (3 4 9 10 11 0 2 5 6 8 1 7) and notes are (E♭ E A B♭ B C D F F# A♭ C# G).<sup>5</sup> </li>
              <li> Pitch durations for the piano 2 part are determined by R<sub>8</sub> (retrograde by 8) so the pitch class set is (7 1 6 8 9 0 2 3 4 5 10 11), which corresponds to (G C# F# A♭ A C D E♭ E F B♭ B). However, since we are dealing with pitch duration, we map each pitch class to its respective ordinal number, resulting in the pitch duration set (5 8 6 4 3 9 2 1 7 11 10 12). Ignoring the pitch classes of the notes, these values are the length of the note, in terms of multiplies of 32nd notes, and determine the order in which pitch durations occur. For example, the first two notes of the piano 2 part are 5 times the length of a 32nd note and 8 times the length of a 32nd note (eighth note), respectively.<sup>5</sup> </li>
            </ul>
            <p>
              Throughout the movement, pitch and duration are determined by pairings, similar to the one above. In particular, the "first progression (mm. 1-64) displays P-I pairings for pitch and RI-R for duration; the second involves combinations of RI-R for pitch and I-P for duration."<sup>5</sup>
            </p>
            <p>
              Below is a score of the first few measures of <i>Structures Ia</i> provided by Alexander Street.<sup>7</sup>
            </p>
            <div className="img-container">
              <img src={Structures_Ia} alt="Structures Ia" className="music"/>
            </div> 
            <p>
              <br/>
              Based on the discussion above on the piano 1 and piano 2 parts, we can see that Boulez did in fact use the serial pairing described above to determine pitch classes and pitch durations.
            </p>
          </Row>
        </Container>
        <Navbar bg="light" variant="light" expand="lg" className="Footer">
          <Container>
            4. Paul Griffiths, “Serialism,” Oxford Music Online, 2001, https://doi.org/10.1093/gmo/9781561592630.article.25459.
            <br/>
            5. Lynden Deyoung, “Pitch Order and Duration Order in Boulez’ Structure Ia,” Perspectives of New Music 16, no. 2 (1978): 27, https://doi.org/10.2307/832676, 2.
            <br/>
            6. Pierre Boulez and Jean-Jacques Nattiez, Orientations : Collected Writings (London: Faber And Faber, 1990), 140-141.
            <br/>
            7. Pierre Boulez, Structures for 2 Pianos, 1st Book, Universal Edition, 1955, https://search.alexanderstreet.com/view/work/bibliographic_entity%7Cscore%7C554289.
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default TotalSerialism;
