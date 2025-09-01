import { useState } from "react"
import Lista from "./Lista"

const FilmList =  [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]


const Main = () => {
    return(
        <main>
            <div className="container">
                <h2>Lista film</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Titolo</th>
                            <th>Genere</th>
                        </tr>
                    </thead>
                    <tbody>
                        {FilmList.map((film) => {
                            return <Lista key={FilmList.id} film={film}></Lista> 
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Main;