const Pokemon = ({name, url, id}) => {
    return (
        <li id={id} className="collection-item"><a href={url}>{name}</a></li>
    )
}

export default Pokemon;