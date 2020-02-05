import React, { Fragment, PureComponent } from 'react';
import barbells from '../../models/Barbells';
import { UNKNOWN_BARBELL_FIELD } from '../../models/Barbells/barbell';
import BarbellRow from './barbellRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bars.scss';
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

    const newState = {};
    newState.sortProp = sortProp;
    newState.sortAsc = this.state.sortAsc;

    if (this.state.sortProp === newState.sortProp) {
      // Toggle sort direction if setting sortProp to what it already is.
      newState.sortAsc = !this.state.sortAsc;
    } else {
      newState.sortAsc = true;
    }

    this.setState(newState);
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
      <table className='barbell-table table table-striped'>
        <thead>
          <tr>
            <th></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("name")}>Name</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("price")}>Price</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("diameter")}>Diameter</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("psi")}>PSI / kg rating</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("knurlDepth")}>Knurl</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("centreKnurl")}>Centre Knurl?</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("knurlMarks")}>Marks</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("bearings")}>Bearings</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("sleeves")}>Sleeves</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("finishes")}>Finishes</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("warrantyMonths")}>Warranty</span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("notes")}>Notes</span></th>
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