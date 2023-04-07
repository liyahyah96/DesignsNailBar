
export default function CarouselItem({item, index}) {
    return (
        <div className="carousel-item">
            <div></div>
            {/* <img className="carousel-img" src="" alt="" /> */}
            <div id={"item-" + index} key={index} className="item-details">
                <p>"{item.comment}"</p>
                <p>- {item.name} </p>
            </div>
        </div>
    )
}