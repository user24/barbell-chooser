import React, { Fragment, PureComponent } from 'react';
import barbells from '../../models/Barbells';
import BarbellRow from './barbellRow';
import 'bootstrap/dist/css/bootstrap.min.css';

class Barbells extends PureComponent {

  constructor(props) {
    super(props);

    const bars = [...barbells].sort((barA, barB) => {
      const sortField = 'psi';
      if (barA[sortField] === barB[sortField]) {
        return barA.name > barB.name ? 1 : -1;
      }
      return barA[sortField] > barB[sortField] ? 1 : -1;
    });

    this.state = {
      bars
    };
  }

  render() {
    return <Fragment>
      <h1>Barbell Comparison Chart</h1>
      <div>Mostly powerlifting barbells at present, but will eventually expand the list to include everything I can find.</div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Diameter</th>
            <th>PSI / kg rating</th>
            <th>Knurl</th>
            <th>Centre Knurl?</th>
            <th>Marks</th>
            <th>Bearings</th>
            <th>Sleeves</th>
            <th>Finishes</th>
            <th>Warranty</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {this.state.bars.map(barbell => <BarbellRow key={barbell.name} barbell={barbell} />)}
        </tbody>
      </table>
    </Fragment>
  };
};
export default Barbells;