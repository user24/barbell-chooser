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
      <div>
        Mostly powerlifting barbells at present, but will eventually expand the list to include everything I can find.<br />
      </div>
      <table className='barbell-table table table-striped'>
        <thead>
          <tr>
            <th></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("name")}>
              <span className='header'>Name</span>
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("price")}>
              <span className='header'>Price</span>
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("diameter")}>
              <span className='header'>Diameter</span><br />
              28mm is standard. Thicker bars are designed for powerlifting.
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("psi")}>
              <span className='header'>PSI / kg rating</span><br />
              The higher PSI the stronger &amp; stiffer the bar. Ideal general range 190-220 according to Rogue.
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("knurlDepth")}>
              <span className='header'>Knurl</span><br />
              Matter of personal preference
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("centreKnurl")}>
              <span className='header'>Centre Knurl?</span><br />
              Supposed to be good for squats and bad for cleans.
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("knurlMarks")}>
              <span className='header'>Marks</span><br />
              IPF=81cm between marks, IWF=91cm. You usually want IPF or Dual.
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("bearings")}>
              <span className='header'>Bearings</span><br />
              Determines how fast the sleeves spin. Faster is better for Olympic, Slower is better on bench press. From fast to slow: needle, ball, bushing.
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("sleeves")}>
              <span className='header'>Sleeves</span><br />
              Snap ring attachment is more durable. Bolted sleeves work loose over time.
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("finishes")}>
              <span className='header'>Finishes</span><br />
              Determines how rust and wear resistant the bar is.<br />
              From worse to better: bare steel->black oxide->Cerakote->Chrome->Zinc
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("warrantyMonths")}>
              <span className='header'>Warranty</span>
            </span></th>
            <th><span className='header-trigger' onClick={() => this.setSortProp("notes")}>
              <span className='header'>Notes</span>
            </span></th>
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