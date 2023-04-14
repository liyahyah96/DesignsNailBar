export default function More() {
    return(
        <section id="more">
            <div className="grid">
                <article>
                    <h2> For Kids 10 & Under </h2>
                    <p> Gel +$10 </p>
                    <div className="price-table">
                        <span>Manicure</span> <span>$15</span>
                        <span>Pedicure</span> <span>$20</span>
                        <span>Polish change hands</span> <span>$8</span>
                        <span>Polish change feet</span> <span>$10</span>
                    </div>
                </article>
                <article>
                    <h2> Complimentery Drinks </h2>
                    <div className="list">
                    {/* <span>Classics</span> */}
                        <ul >
                            <li>Water</li>
                            <li>Soda (Coke, Sprite, Dr Pepper)</li>
                            {/* <li>Juice (Orange, Apple, Cranberry)</li> */}
                            <li>Coffee</li>
                            <li>Hot Tea</li>
                        </ul>
                    </div>
                    
                </article>
            </div>
        </section>
    )
}