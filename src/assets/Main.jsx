import { useEffect, useState } from "react"
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
    const [films, setFilms] = useState(FilmList)
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filteredFilms = FilmList.filter((film) => {
            return film.genre.toLowerCase().includes(search.toLowerCase())
        })

        setFilms(filteredFilms);
    }, [search]);


    return (
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
                        {films.map((film) => {
                            return <Lista key={film.title} film={film}></Lista> 
                        })}
                    </tbody>
                </table>
                <input 
                    type="text" 
                    placeholder="Cerca Film" 
                    className="w-100per"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>
        </main>
    )
}

export default Main;