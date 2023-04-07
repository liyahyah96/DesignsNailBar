export default function More() {
    return(
        <section id="more">
            <div className="grid">
                <article>
                    <h3> For Kids 10 & Under </h3>
                    <p> Gel +$10 </p>
                    <div className="price-table">
                        <span>Manicure</span> <span>$15</span>
                        <span>Pedicure</span> <span>$15</span>
                        <span>Polish change hands</span> <span>$8</span>
                        <span>Polish change feet</span> <span>$10</span>
                    </div>
                </article>
                <article>
                    <h3> Complimentery Drinks </h3>
                    <div className="list">
                    <span>Classics</span>
                        <ul >
                            <li>Water</li>
                            <li>Soda (Coke, Sprite, Dr Pepper)</li>
                            <li>Juice (Orange, Apple, Cranberry)</li>
                        </ul>
                    </div>
                    <div className="list">
                        <span> Non-Alcoholic Cocktails </span>
                        <ul>
                            <li>Pina Colada</li>
                            <li>Mojito</li>
                            <li>Mimosa</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}