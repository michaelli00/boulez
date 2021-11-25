import React, { useState } from 'react';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/navbar';
import Row from 'react-bootstrap/row';
import Select from 'react-select'
import Abcjs from 'react-abcjs';
import { 
  TWELVE_TONE_DROPDOWN_OPTIONS,
  TWELVE_TONE_TO_NOTE_MAPPING 
} from '../../utils/Constants';

import './PitchMultiplication.css';

function PitchMultiplication(props) {
  const [pm1Selection, setPM1Selection] = useState([]);
  const [pm2Selection, setPM2Selection] = useState([]);

  const handlePM1Changes = (vals) => {
    const newPM1 = vals.map(val=>val.value);
    newPM1.sort((a,b) => a - b);
    setPM1Selection(newPM1);
  };

  const handlePM2Changes = (vals) => {
    const newPM2 = vals.map(val=>val.value);
    newPM2.sort((a,b) => a - b);
    setPM2Selection(newPM2);
    
  };

  const pm1NotesString = pm1Selection.length === 1 ? `${TWELVE_TONE_TO_NOTE_MAPPING[pm1Selection[0]]}2` : `${pm1Selection.map(v => TWELVE_TONE_TO_NOTE_MAPPING[v]).join('2')}2`;
  const pm2NotesString = pm2Selection.length === 1 ? `${TWELVE_TONE_TO_NOTE_MAPPING[pm2Selection[0]]}2` : `${pm2Selection.map(v => TWELVE_TONE_TO_NOTE_MAPPING[v]).join('2')}2`;

  const pmResultSet = new Set();
  pm1Selection.map(p1 => pm2Selection.map(p2 => pmResultSet.add((p1 + p2) % 12)));
  const pmResultSelection = [...pmResultSet];
  pmResultSelection.sort((a,b) => a - b);
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
            asd
          </p>

          <p>
            Below is a tool that showcases how pitch multiplication can be used to generate a new pitch class set from two existing pitch class sets. To use it, select pitch classes from the dropdown for both the first and second operand. The resulting pitch class set from pitch multipication will be displayed below
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
          <Abcjs
            abcNotation={`X:1\nK:C\nL:4\n${pm1NotesString}`}
            parserParams={{}}
            engraverParams={{}}
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
          <Abcjs
            abcNotation={`X:1\nK:C\nL:4\n${pm2NotesString}`}
            parserParams={{}}
            engraverParams={{}}
            renderParams={{ viewportHorizontal: true }}
          />
          <div className="row-info">
            {pm2Selection.length ? `Pitch classes used: ${pm2Selection.join(', ')}` : ''}
          </div>
        </Row>
        <Row className="pitch-multiplication-row">
          <h3>Resulting Pitch Classes from Pitch Multiplication</h3>
          <Abcjs
            abcNotation={`X:1\nK:C\nL:4\n${pmResultString}`}
            parserParams={{}}
            engraverParams={{}}
            renderParams={{ viewportHorizontal: true }}
          />
          <div className="row-info">
            {pmResultSelection.length ? `Resulting pitch classes: ${pmResultSelection.join(', ')}` : ''}
          </div>
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
