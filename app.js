


// VERY EASY ---------------------------------------------------------------
// function App() {
//   return (
//     <div className="App">
//       <ul>
//         <li> name: Isaac</li>
//         <li> age: 26</li>
//         <li> number: 10</li>
//       </ul>
//     </div>
//   );
// }

// export default App;

// EASY --------------------------------------------------------------------

// import React, { Component } from 'react'

// export default class App extends Component {

//   //Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set 
//   //‘this.state’ to an empty object 

//   //inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and 
//   //set it to an empty object

//   Constructor(props) {
//     super(props);
//     this.state ={
//       person: {
//       }
//     }
//   }


//   render() {
//     return (
//       <div>{this.state.person}</div>
//     )
//   }
// }

// MEDIUM --------------------------------------------------------------------

// import React, { Component } from 'react'
// import BasicInfo from './basicInfo';

// export default class App extends Component {

//   Constructor(props) {
//     super(props);
//     this.state ={
//       person: {
//         name: 'Isaac',
//         lastName: 'Chavez',
//         age: '26'
//       }
//     }
//   }
//   render() {
//     return (
//       <BasicInfo />
//     )
//   }
// }

// MEDIUM --------------------------------------------------------------------

import React, { Component } from 'react'
import BasicInfo from './basicInfo';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      people: [{
        name: 'Isaac',
        lastName: 'Chavez',
        age: '26'
      },
      {
        name: 'MESSI',
        lastName: 'LIONEL',
        age: '32'
      },
      {
        name: 'DI MARIA',
        lastName: 'Dont know',
        age: '40'
      }]
    }
  }
  render() {
    return (
      <>
        {this.state.people.map((person) => {
          return <BasicInfo info={person} />
        })}
      </>
    )
  }
}






