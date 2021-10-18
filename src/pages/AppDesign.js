import SmallIntro from '../components/SmallIntro';
import BlogCard from '../components/BlogCard';

export default function Appdesign() {
    const list = [
        {id: 1, title: "AIRFILTER", img: "/images/new/foto1.svg", text: "Solving the problem of poor indoor air quality by filtering the air"},
        {id: 2, title: "EYECAM", img: "/images/new/foto2.svg", text: "Product that lets you edit your favorite photos and videos at any time"},
        {id: 3, title: "FACEIT", img: "/images/new/foto3.svg", text: "Get to meet your favorite internet superstar with the faceit app"},
        {id: 4, title: "TODO", img: "/images/new/foto3.svg", text: "A todo app that features cloud sync with light and dark mode"},
        {id: 5, title: "LOOPSTUDIOS", img: "/images/new/foto3.svg", text: "A VR experience app made for Loopstudios"}
    ]
    return (
        <div className="pageContent">
            <SmallIntro
                title="App Design"
                text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." 
            />
            <BlogCard items={list}/>
        </div>
    );
}