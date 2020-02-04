import React, { PureComponent } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class Filters extends PureComponent {
  render() {
    return <section>
      <h3>Type of lifting</h3>
      "Olympic" bars tend to have high spin and no centre knurl. "Powerlifting" bars tend to have higher tensile strengh and less spin.
      <br />
      <ButtonGroup toggle className="mt-3">
        <ToggleButton type="radio" name="radio" defaultChecked value="1">
          Olympic
        </ToggleButton>
        <ToggleButton type="radio" name="radio" value="2">
          Powerlifting
        </ToggleButton>
      </ButtonGroup>
    </section>;
  }
}

export default Filters;