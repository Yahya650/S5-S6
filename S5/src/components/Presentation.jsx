// import React from 'react'
// export default class Presentation extends React.Component {
//     constructor() {
//         super()
//         this.nom = 'Rami';
//         this.prenom = "Ahmed"
//     }
//     render() {
//         return (
//             <div >
//                 <h2>Salut ici le {this.nom} et {this.prenom} </h2>
//             </div>
//         )
//     }
// }

import React from 'react'

const Presentation = () => {

    let nom = "yahya";
    let prenom = "Ahmed";

    return (
        <div>
            {
                nom && prenom && <h2>Salut ici le {nom} et {prenom} </h2>
            }
        </div>
    )
}

export default Presentation

