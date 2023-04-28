export default function More() {
    return(
        <section className="services-sections" id="more">
            <article>
                <h2> For Kids 10 & Under </h2>
                <p> Gel +$10 </p>
                <div className="price-table">
                    <span className="type">Manicure</span> <span className="price">$15</span>
                    <span className="type">Pedicure</span> <span className="price">$20</span>
                    <span className="type">Polish change hands</span> <span className="price">$8</span>
                    <span className="type">Polish change feet</span> <span className="price">$10</span>
                </div>
            </article>
            <article>
                <h2> Complimentery Drinks </h2>
                <div>
                    <ul className="drinks-list">
                        <li>Water</li>
                        <li>Soda (Coke, Sprite, Dr Pepper)</li>
                        {/* <li>Juice (Orange, Apple, Cranberry)</li> */}
                        <li>Coffee</li>
                        <li>Hot Tea</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}