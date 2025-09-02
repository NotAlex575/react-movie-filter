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
    //lista film iniziale
    const [films, setFilms] = useState(FilmList)
    //lista film filtrati per genere
    const [searchGenre, setSearchGenre] = useState("");
    //lista film filtrati per titolo
    const [searchTitle, setSearchTitle] = useState("");

    //non appena viene eseguito un filter (tramite input), 
    //la lista aggiorna il contenuto in base a quello che abbiamo
    //cercato
    useEffect(() => {

        //uso il filter per aggiornare la lista in base alla value
        //che viene inserita nell'input(se si trova la mette nella lista)
        const filteredFilms = FilmList.filter((film) => {

            //converte la ricerca del genere o del title (o di entrambi) del film in minuscolo
            return film.genre.toLowerCase().includes(searchGenre.toLowerCase()) &&
                   film.title.toLowerCase().includes(searchTitle.toLowerCase())
        })

        //aggiorna la lista con i film filtrati
        setFilms(filteredFilms);
        
    }, [searchGenre, searchTitle]); //questo useEffect si esegue ogni volta 
                                    //che uno dei 2 "seach" (in input->value) cambia


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
                    placeholder="Cerca Film per genere" 
                    className="w-100per"
                    value={searchGenre}
                    onChange={(event) => setSearchGenre(event.target.value)}
                    //ogni volta che si inserisce un contenuto qui (che si trovi o non si trovi nella lista),
                    //la lista si aggiorna
                />
                <input 
                    type="text" 
                    placeholder="Cerca Film per titolo" 
                    className="w-100per"
                    value={searchTitle}
                    onChange={(event) => setSearchTitle(event.target.value)}
                />
            </div>
        </main>
    )
}

export default Main;