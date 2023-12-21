// import { Component } from "react";
// export default class Header extends Component {
//     constructor() {
//         super()
//         this.titre = "Application mon premier classe composant"
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.titre}</h1>
//                 <hr />
//             </div>)
//     }
// }

// import React from 'react'

const Header = () => {

    let titre = "Application mon premier classe composant"


    return (
        <div>
            <h1>{titre}</h1>
            <hr />
        </div>
    )
}

export default Header
