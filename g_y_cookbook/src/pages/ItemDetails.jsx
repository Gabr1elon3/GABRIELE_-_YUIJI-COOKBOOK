import { useParams } from "react-router-dom";

export default function ItemDetails() {
    const { id } = useParams();
    return(
        <div className="item-details">
            <h1>Item Details</h1>
            <p>Details for item with ID: {id}</p>
        </div>
    )
}