let Lista = ({film}) => {
    const {title, genre} = film;  
    return (
        <div>
            <ul>
                <li>{title}</li>
                <li>{genre}</li>
            </ul>
        </div>
    );
};

export default Lista;