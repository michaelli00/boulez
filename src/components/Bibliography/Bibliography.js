import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';

import './Bibliography.css';

class Bibliography extends React.Component {
  render() {
    return (
      <Container className="Bibliography">
        <Row>
          <h1 className="title">Bibliography</h1>
        </Row>
        <Row className="content">
          <p>
            Bleek, Tobias. “Explore the Score | Pierre Boulez: Notations | History and Context  | a Journeyman Composition.” explorethescore.org, n.d. <a href="https://explorethescore.org/pierre-boulez-douze-notations-history-and-context-a-journeyman-composition.html">https://explorethescore.org/pierre-boulez-douze-notations-history-and-context-a-journeyman-composition.html</a>.
          </p>
          <p>
            Boulez, Pierre. <i>Le Marteau Sans Maître</i>. Universal Edition, 1964. <a href="https://search.alexanderstreet.com/view/work/bibliographic_entity%7Cscore%7C553558">https://search.alexanderstreet.com/view/work/bibliographic_entity%7Cscore%7C553558</a>.
          </p>
          <p>
            Boulez, Pierre. <i>Structures for 2 Pianos, 1st Book</i>. Universal Edition, 1955. <a href="https://search.alexanderstreet.com/view/work/bibliographic_entity%7Cscore%7C554289">https://search.alexanderstreet.com/view/work/bibliographic_entity%7Cscore%7C554289</a>. 
          </p>
          <p>
            Boulez, Pierre, and Jean-Jacques Nattiez. <i>Orientations : Collected Writings</i>. London: Faber And Faber, 1990.
          </p>
          <p>
            Deyoung, Lynden. “Pitch Order and Duration Order in Boulez’ Structure Ia.” <i>Perspectives of New Music</i> 16, no. 2 (1978): 27. <a href="https://doi.org/10.2307/832676">https://doi.org/10.2307/832676</a>.
          </p>
          <p>
            Griffiths, Paul. “Serialism.” <i>Oxford Music Online</i>, 2001. <a href="https://doi.org/10.1093/gmo/9781561592630.article.25459">https://doi.org/10.1093/gmo/9781561592630.article.25459</a>.
          </p>
          <p>
            Lev Koblyakov. <i>Pierre Boulez : A World of Harmony</i>. Reading: Harwood Academic Publishers, 1992.
          </p>
          <p>
            Smith, Nicholas. “React-Abc.” GitHub, June 16, 2018. <a href="https://github.com/fuhton/react-abc">https://github.com/fuhton/react-abc</a>.
          </p>
          <p>
            Samadi, Saman. “An Analytical Study on Pierre Boulez’s Le Marteau sans Maître.” <i>Research Catalogue</i>, September 28, 2020. <a href="https://www.researchcatalogue.net/view/718708/718709">https://www.researchcatalogue.net/view/718708/718709</a>.
          </p>
          <p>
            Toronyilalic, Igor. “Theartsdesk Q&A: Composer Pierre Boulez.” theartsdesk.com, January 7, 2016. <a href="https://www.theartsdesk.com/classical-music/theartsdesk-qa-composer-pierre-boulez">https://www.theartsdesk.com/classical-music/theartsdesk-qa-composer-pierre-boulez</a>.
          </p>
        </Row>
      </Container>
    )
  }
}

export default Bibliography;
