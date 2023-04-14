export default function Manicure() {
    return (
        <section id="manicure">
            <div className="grid">
                <div className="package-type">
                    <span> * Any package or set with color gel is $10 extra. </span>
                    <article>
                        <h2>Classic Manicure</h2> <span className="highlight">$20</span>
                        <p>
                            Nail soak, trim, shaping, cuticle removal, 
                            buffing, and choice of regular polish.
                        </p>
                    </article>
                    <article>
                        <h2>Deluxe Manicure</h2> <span className="highlight">$27</span>
                        <p>
                            This treatment is a blend of fragrances and ingredients
                            that will hydrate your skin leaving it feel velvety smooth.
                            It includes an exfoliating sea salt scrub followed by a soothing mask,
                            hot towel wrap, then hand massage to finish. 
                        </p>
                    </article>
                    <article>
                        <h2>Luxury Manicure</h2> <span className="highlight">$35</span>
                        <p>
                            Hydrate and smooth out the wrinkles on your skin with deluxe treatement 
                            PLUS paraffin wax application and collagen gloves. 
                        </p>
                    </article>
                </div>
                <div className="nail-type">
                <span> * Any package or set with color gel is $10 extra. </span>
                    <article>
                        <h2>Acrylic</h2>
                        <div className="price-table">
                            <span>Full Set</span> <span className="price">$35</span>
                            <span>Refills</span> <span className="price">$25</span>
                            <span>White or American tip set</span> <span className="price">$40</span>
                            <span>Solar white & pink set</span> <span className="price">$55</span>
                            <span>White & pink fills</span> <span className="price">$45</span>
                            <span>Ombre set</span> <span className="price">$55</span>
                            <span>Color set</span> <span className="price">$45</span>
                            <span>Acrylic set with gel</span> <span className="price">$48</span>
                            <span>Acrylic gel fill </span> <span className="price">$38</span>
                        </div>
                    </article>
                    <article>
                        <h2>Dipping</h2>
                        <div className="price-table">
                            <span>Dipping powder overlay</span> <span className="price">$40</span>
                            <span>Dipping powder with tip</span> <span className="price">$45</span>
                            <span>Dipping ombre</span> <span className="price">$55</span>
                            <span>Dipping powder with french</span> <span className="price">$50</span>
                            <span>French dipping powder with tip</span> <span className="price">$55</span>
                        </div>
                    </article>
                    <article>
                        <h2>A La Carte</h2>
                        <div className="price-table">
                            <span>Nail shape</span> <span className="price">$5</span>
                            <span>Nail repair</span> <span className="price">$5</span>
                            <span>Trim down</span> <span className="price">$5</span>
                            <span>Cuticle removal</span> <span className="price">$7</span>
                            <span>Nail removal</span> <span className="price">$10</span>
                            <span>Nail polish change</span> <span className="price">$10</span>
                            <span>Toe polish change</span> <span className="price">$15</span>
                            <span>Gel polish change</span> <span className="price">$25</span>
                            <span>Designs</span> <span className="price">$10</span>
                        </div>
                    </article>
                </div>
            </div>
            
        </section>
    )
}