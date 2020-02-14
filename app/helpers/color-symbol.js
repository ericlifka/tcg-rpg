import { helper } from '@ember/component/helper';
import {ManaIcons} from "../utils/symbols";

export default helper(function colorSymbol([color]/*, hash*/) {
  return ManaIcons[ color ];
});
