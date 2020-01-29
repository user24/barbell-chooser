import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { Barbell, UNKNOWN_BARBELL_FIELD } from '../../models/Barbells/barbell';
import './bars.scss';

const unknownField = '?';

const show = (val) => {
  return val !== UNKNOWN_BARBELL_FIELD ? val : unknownField;
}

const showBool = (bool, y = '✓', n = 'x', q = unknownField) => {
  return bool === true ? y : bool === false ? n : q;
}

const sentenceCase = (words) => {
  return words.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

class BarbellRow extends PureComponent {

  render() {
    const bar = this.props.barbell;
    return <tr>
      <td>{bar.image ? <img className='bar-image' src={`./assets/${bar.image}`} alt={bar.name} /> : unknownField}</td>
      <td><a href={bar.url} target='_blank' rel='noopener noreferrer external'>{show(bar.name)}</a></td>
      <td>{bar.price ? `£${bar.price}` : unknownField}</td>
      <td>{bar.diameter ? `${bar.diameter}mm` : unknownField}</td>
      <td>{bar.psi || (bar.kgRating ? `${bar.kgRating}kg` : unknownField)}</td>
      <td>{bar.knurlDepth ? sentenceCase(bar.knurlDepth) : unknownField}</td>
      <td>{showBool(bar.centreKnurl)}</td>
      <td>{show(bar.knurlMarks)}</td>
      <td>{show(bar.bearings)}</td>
      <td>{bar.sleeves ? sentenceCase(bar.sleeves) : unknownField}</td>
      <td>{show(bar.finishes)}</td>
      <td>{bar.warrantyMonths ? `${bar.warrantyMonths} mo` : unknownField}</td>
      <td>{bar.notes ? bar.notes : '-'}</td>
    </tr>;
  };
}

BarbellRow.propTypes = {
  barbell: PropTypes.instanceOf(Barbell).isRequired
};

export default BarbellRow;