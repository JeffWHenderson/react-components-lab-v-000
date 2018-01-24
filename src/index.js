// Make sure to import React and ReactDOM
import React;
import ReactDOM;

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// const OlderCoaster = React.createClass({
//   render(){
//     return React.createElement('ul', {}, [
//       React.createElement('li', {}, 'Bananas'),
//       React.createElement('li', {}, 'Vanilla ice cream'),
//       React.createElement('li', {}, 'Chocolate'),
//     ]);
//   }
//   }
// })

// Define these exported classes
export class OlderCoaster extends React.Component {};
export class InFrontOfYou extends React.Component {};
export class ButcherShop extends React.Component {};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
