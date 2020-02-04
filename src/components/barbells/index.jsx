import React, { Fragment, PureComponent } from 'react';
import barbells from '../../models/Barbells';
import { UNKNOWN_BARBELL_FIELD } from '../../models/Barbells/barbell';
import BarbellRow from './barbellRow';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Filters from '../filters';

class Barbells extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      sortProp: "price",
      sortAsc: true,
    };
  }

  setSortProp = (sortProp) => {

    const state = {};
    state.sortProp = this.state.sortProp;
    state.sortAsc = this.state.sortAsc;

    if (this.state.sortProp === sortProp) {
      // Toggle sort direction if setting sortProp to what it already is.
      state.sortAsc = !this.state.sortAsc;
    } else {
      state.sortAsc = true;
    }

    state.sortProp = sortProp;
    this.setState(state);
  };

  sortBars = () => {
    const sortProp = this.state.sortProp;
    const sortLower = this.state.sortAsc ? 1 : -1;
    const sortHigher = this.state.sortAsc ? -1 : 1;
    return [...barbells].filter(bar => bar.active).sort((barA, barB) => {
      if (barA[sortProp] === UNKNOWN_BARBELL_FIELD) {
        return sortHigher;
      }
      if (barB[sortProp] === UNKNOWN_BARBELL_FIELD) {
        return sortLower;
      }
      if (barA[sortProp] === barB[sortProp]) {
        return barA.name > barB.name ? sortLower : sortHigher;
      }
      return barA[sortProp] > barB[sortProp] ? sortLower : sortHigher;
    });
  };

  render() {
    const bars = this.sortBars();
    return <Fragment>
      <h1>Barbell Comparison Chart</h1>
      <div>Mostly powerlifting barbells at present, but will eventually expand the list to include everything I can find.</div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th></th>
            <th onClick={() => this.setSortProp("name")}>Name</th>
            <th onClick={() => this.setSortProp("price")}>Price</th>
            <th onClick={() => this.setSortProp("diameter")}>Diameter</th>
            <th onClick={() => this.setSortProp("psi")}>PSI / kg rating</th>
            <th onClick={() => this.setSortProp("knurlDepth")}>Knurl</th>
            <th onClick={() => this.setSortProp("centreKnurl")}>Centre Knurl?</th>
            <th onClick={() => this.setSortProp("knurlMarks")}>Marks</th>
            <th onClick={() => this.setSortProp("bearings")}>Bearings</th>
            <th onClick={() => this.setSortProp("sleeves")}>Sleeves</th>
            <th onClick={() => this.setSortProp("finishes")}>Finishes</th>
            <th onClick={() => this.setSortProp("warrantyMonths")}>Warranty</th>
            <th onClick={() => this.setSortProp("notes")}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {bars.map(barbell => <BarbellRow key={barbell.name} barbell={barbell} />)}
        </tbody>
      </table>
    </Fragment>
  };
};
export default Barbells;