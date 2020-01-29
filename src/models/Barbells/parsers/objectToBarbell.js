import { Barbell, KNURL_DEPTHS, KNURL_MARK_TYPES, UNKNOWN_BARBELL_FIELD } from '../barbell';

const objectToBarbell = (obj) => {
  const barbell = { ...obj };
  if (barbell.knurlDepth) {
    barbell.knurlDepth = KNURL_DEPTHS[barbell.knurlDepth.toUpperCase()] || UNKNOWN_BARBELL_FIELD;
  }
  if (barbell.knurlMarks) {
    barbell.knurlMarks = KNURL_MARK_TYPES[barbell.knurlMarks.toUpperCase()] || UNKNOWN_BARBELL_FIELD;
  }
  return new Barbell(barbell)
};

export default objectToBarbell;