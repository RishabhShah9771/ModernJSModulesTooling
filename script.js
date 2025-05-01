import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import 'core-js/stable';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateClone2 = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateClone2);
