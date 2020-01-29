import barbellData from '../../data/barbells.json'
import objectToBarbell from './parsers/objectToBarbell';

const barbells = Object.keys(barbellData).map((key) => {
  const props = { ...barbellData[key] };
  props.name = key;
  return objectToBarbell(props);
});

export default barbells;