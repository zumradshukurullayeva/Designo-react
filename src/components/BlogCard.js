export default function BlogCard(props) {
    return (
        <div className="wrapper">   
            <div className="blog-card  blogs">
                {
                    props.items.map(item => {
                        return (
                            <div key={item.id} className="blog-card__content">
                                <img src={item.img} alt="" className="foto" />
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__text">{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}