let Lista = ({film}) => {
    const {title, genre} = film;  
    return (
        <tr>
            <td>{title}</td>
            <td>{genre}</td>
        </tr>
    );
};

export default Lista;