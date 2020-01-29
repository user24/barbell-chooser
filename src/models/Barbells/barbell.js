import { Record } from 'immutable';

const UNKNOWN_BARBELL_FIELD = null;

const KNURL_MARK_TYPES = {
  NONE: "NONE",
  YES: "YES",
  IPF: "IPF",
  IWF: "IWF",
  DUAL: "DUAL",
};

const KNURL_DEPTHS = {
  LIGHT: "LIGHT",
  MEDIUM: "MEDIUM",
  HARD: "HARD",
  AGGRESSIVE: "AGGRESSIVE",
};

const _Barbell = {
  name: '',
  url: UNKNOWN_BARBELL_FIELD,
  image: UNKNOWN_BARBELL_FIELD,
  price: UNKNOWN_BARBELL_FIELD,
  diameter: UNKNOWN_BARBELL_FIELD,
  centreKnurl: UNKNOWN_BARBELL_FIELD,
  knurlMarks: UNKNOWN_BARBELL_FIELD,
  knurlDepth: UNKNOWN_BARBELL_FIELD,
  psi: UNKNOWN_BARBELL_FIELD,
  kgRating: UNKNOWN_BARBELL_FIELD,
  finishes: UNKNOWN_BARBELL_FIELD,
  bearings: UNKNOWN_BARBELL_FIELD,
  kgWeight: 20,
  notes: UNKNOWN_BARBELL_FIELD,
  warrantyMonths: UNKNOWN_BARBELL_FIELD,
  sleeves: UNKNOWN_BARBELL_FIELD
};

class Barbell extends Record(_Barbell) {
};

export default Barbell;

export {
  Barbell,
  KNURL_MARK_TYPES,
  KNURL_DEPTHS,
  UNKNOWN_BARBELL_FIELD,
};