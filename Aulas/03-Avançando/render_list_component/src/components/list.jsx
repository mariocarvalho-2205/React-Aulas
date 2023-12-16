

const List = ({id, brand, color, newCar}) => {
    return (
        <div className="List">
            <ul>
                <li>{id} - {brand} - {color}{newCar && " - Esse é zero"}</li>
            </ul>
        </div>
    )
}

export default List