import React, { useState } from 'react';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/navbar';
import Row from 'react-bootstrap/row';
import Table from 'react-bootstrap/table';
import Select from 'react-select'
import { Notation, Midi } from 'react-abc';
import { 
  TWELVE_TONE_DROPDOWN_OPTIONS,
  TWELVE_TONE_TO_NOTE_MAPPING 
} from '../../utils/Constants';

import Boulez_Frequency_Series from '../../assets/Boulez-Frequency-Series.jpg';
import PM_Mvmt3 from '../../assets/pm-mvmt3.png';
import './PitchMultiplication.css';

function PitchMultiplication(props) {
  const [pm1Selection, setPM1Selection] = useState([]);
  const [pm2Selection, setPM2Selection] = useState([]);

  const handlePM1Changes = (vals) => {
    const newPM1 = vals.map(val=>val.value);
    setPM1Selection(newPM1);
  };

  const handlePM2Changes = (vals) => {
    const newPM2 = vals.map(val=>val.value);
    setPM2Selection(newPM2);
    
  };

  const pm1NotesString = pm1Selection.length === 1 ? `${TWELVE_TONE_TO_NOTE_MAPPING[pm1Selection[0]]}2` : `${pm1Selection.map(v => TWELVE_TONE_TO_NOTE_MAPPING[v]).join('2')}2`;
  const pm2NotesString = pm2Selection.length === 1 ? `${TWELVE_TONE_TO_NOTE_MAPPING[pm2Selection[0]]}2` : `${pm2Selection.map(v => TWELVE_TONE_TO_NOTE_MAPPING[v]).join('2')}2`;

  const pmResultSet = new Set();
  pm1Selection.map(p1 => pm2Selection.map(p2 => pmResultSet.add((p1 + p2) % 12)));
  const pmResultSelection = [...pmResultSet];
  const pmResultString = pmResultSelection.length === 1 ? `${TWELVE_TONE_TO_NOTE_MAPPING[pmResultSelection[0]]}2` : `${pmResultSelection.map(v => TWELVE_TONE_TO_NOTE_MAPPING[v]).join('2')}2`;

  return (
    <React.Fragment>
      <Container className="PitchMultiplication">
        <Row>
          <h1 className="title">Pitch Multiplication</h1>
        </Row>
        <Row className="content">
          <p>
            The idea behind pitch multiplication is to take two sets from a group of pitch class sets and "sum of every possible pairing between them".<sup>2</sup> Note that any duplicate pitch classes in the resulting set are removed. For example, let a = (1 2) and b = (3 4) be pitch class sets. Then the pitch multipication of these two sets, denoted ab, yields (4 5 6). This comes from
          </p>
          <ul>
            <li> 1 + 3  = 4 </li>
            <li> 2 + 3  = 5 </li>
            <li> 1 + 4  = 5 (duplicate) </li>
            <li> 2 + 4  = 6 </li>
          </ul>
          <p>
            Below is a tool that showcases how pitch multiplication can be used to generate a new pitch class set from two existing pitch class sets. To use it, select pitch classes from the dropdown for both the first and second operand. The resulting pitch class set from pitch multiplication will be displayed in the third row.
            <br/>
            <br/>
          </p>
        </Row>
        <Row className="pitch-multiplication-row">
          <div className="pm-operand-title">
            <h3>Select Pitch Classes for the First Operand</h3>
            <Select
              isMulti
              closeMenuOnSelect={false}
              escapeClearsValue={false}
              isSearchable={false}
              placeholder="Select pitch classes"
              options={TWELVE_TONE_DROPDOWN_OPTIONS}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handlePM1Changes}
            />
          </div>
          <Notation
            notation={`X:1\nK:C\nL:4\n${pm1NotesString}`}
            renderParams={{ viewportHorizontal: true }}
          />
          <div className="row-info">
            {pm1Selection.length ? `Pitch classes used: ${pm1Selection.join(', ')}` : ''}
          </div>
        </Row>
        <Row className="pitch-multiplication-row">
          <div className="pm-operand-title">
            <h3>Select Pitch Classes for the Second Operand</h3>
            <Select
              isMulti
              closeMenuOnSelect={false}
              escapeClearsValue={false}
              isSearchable={false}
              placeholder="Select pitch classes"
              options={TWELVE_TONE_DROPDOWN_OPTIONS}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handlePM2Changes}
            />
          </div>
          <Notation
            notation={`X:1\nK:C\nL:4\n${pm2NotesString}`}
            renderParams={{ viewportHorizontal: true }}
          />
          <div className="row-info">
            {pm2Selection.length ? `Pitch classes used: ${pm2Selection.join(', ')}` : ''}
          </div>
        </Row>
        <Row className="pitch-multiplication-row">
          <h3>Resulting Pitch Classes from Pitch Multiplication</h3>
          <Notation
            notation={`X:1\nK:C\nL:4\n${pmResultString}`}
            renderParams={{ viewportHorizontal: true }}
          />
          <div className="row-info">
            {pmResultSelection.length ? `Resulting pitch classes: ${pmResultSelection.join(', ')}` : ''}
          </div>
        </Row>
        <Row className="content">
          <h2 className="subtitle">How Boulez Used Pitch Multiplication</h2>
          <p>
            Looking into Boulez's <i>Le marteau sans maître</i>, one can see that Pitch Multiplication is used in the 1st, 3rd, and 7th movements. In his book <i>Pierre Boulez A World of Harmony</i>, musicologist Lev Koblyakov writes that Boulez uses one general series (3 5 2 1 10 11 9 0 8 4 7 6) and uses different divisions to "create an ensemble of series of frequency groups". The divisions are based on the "proportion row 24213, which is consistently rotated," creating five different series. Below is a diagram from the book explaining how rotation of the proportion row generated the different series.<sup>3</sup>
          </p>
          <div className="img-container">
            <img src={Boulez_Frequency_Series} alt="Boulez Frequency Series" className="freq-series"/>
          </div>
          <p>
            From series I above, one can see that the proportion row 24213 is used to divide the general series (3 5 2 1 10 11 9 0 8 4 7 6) into frequency groups of size 2, 4, 2, 1, and 3.
          </p>
          <p>
            From series II above, one can see that the proportion row 24213 has been rotated into 42132, which is used to divide the general series into frequency groups of size 4, 2, 1, 3, 2. The other series follow a similar pattern of rotating the proportion row.
          </p>
          <p> 
            According to Koblyakov, these series, using pitch multiplication of frequency groups, create <i>harmonic fields</i> that construct new groups when multiplied by frequency groups from the same series.<sup>3</sup> Below is a table containing the harmonic fields (labeled using letters) of the series from the diagram above.
          </p>
          <Table striped bordered>
            <thead>
              <tr>
                <th></th>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>d</th>
                <th>e</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>3 5</td>
                <td>2 1 10 11</td>
                <td>9 0</td>
                <td>8</td>
                <td>4 7 6</td>
              </tr>
              <tr>
                <td>II</td>
                <td>3 5 2 1</td>
                <td>10 11</td>
                <td>9</td>
                <td>0 8 4</td>
                <td>7 6</td>
              </tr>
              <tr>
                <td>III</td>
                <td>3 5</td>
                <td>2</td>
                <td>1 10 11</td>
                <td>9 0</td>
                <td>8 4 7 6</td>
              </tr>
              <tr>
                <td>IV</td>
                <td>3</td>
                <td>5 2 1</td>
                <td>10 11</td>
                <td>9 0 8 4</td>
                <td>7 6</td>
              </tr>
              <tr>
                <td>V</td>
                <td>3 5 2</td>
                <td>1 10</td>
                <td>11 9 0 8</td>
                <td>4 7</td>
                <td>6</td>
              </tr>
            </tbody>
          </Table>
          <p>
            For example, taking frequency groups b and c from series I, multiplying them to gives the group bc = (11 2 10 1 7 8).
          </p>
          <p>
            Koblyakov found that pitch class sets from the 1st, 3rd, and 7th movements were derived from multiplying various harmonic fields. For example, the pitch classes used in measure 3 of the 3rd movement comes directly from multiplying harmonic fields b and c to get the group bc = (11 2 10 1 7 8).
          </p>
          <div className="img-container">
            <img src={PM_Mvmt3} alt="Le marteau sans maître mvmt 3" className="mvmt3"/>
          </div>
          <p>
            In the flute line, from left to right, the pitch classes are (2, 10, 1, 11, 8, 7)
          </p>
        </Row>
      </Container>
      <Navbar bg="light" variant="light" expand="lg" className="Footer">
        <Container>
          2. Saman Samadi, “An Analytical Study on Pierre Boulez’s Le Marteau sans Maître,” Research Catalogue, September 28, 2020, https://www.researchcatalogue.net/view/718708/718709.
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default PitchMultiplication;
