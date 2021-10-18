export default function SmallIntro(props) {
    return (
        <div className="small-intro">
            <h1 className="small-intro__title">{props.title}</h1>
            <div className="intro-text">
            <p className="small-intro__text">{props.text}</p>
            </div>
           
        </div>
    );
}