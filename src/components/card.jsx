import { useState } from "react";
import Button from "./button";

export default function Card(props) {
    const { name, price, stock, addProduct } = props;

    const [myStock, setMyStock] = useState(stock);
    const [inCart, setInCart] = useState(0);

    const handlerClickAdd = () => {
        addProduct(name)

        if (myStock > 0) {
            setMyStock((currentStock) => currentStock - 1);
            setInCart((currentStock) => currentStock + 1);
        }
    };

    const handlerClickRemove = () => {
        if (inCart > 0) {
            setMyStock((currentStock) => currentStock + 1);
            setInCart((currentStock) => currentStock - 1);
        };
    };

    let stockMessage = <p>{myStock} darab van készleten</p>;

    if (myStock === 0) {
        stockMessage = <p>Nincs Készleten!</p>
    }


    return (
        <div className="card">
            <div className="card-title">
                <h2>{name}</h2>
            </div>
            <div className="card-body">
                <p>{price} $</p>
                {stockMessage}
                <ul>
                    <Button onClick={handlerClickAdd} isLast={myStock === 1} isntActive={myStock === 0}>Hozzáadás a kosárhoz</Button>

                    {inCart > 0 && (
                        <Button onClick={handlerClickRemove} color="red">Kivenni a kosárból</Button>
                    )}
                </ul>

            </div>

        </div>
    )

}


