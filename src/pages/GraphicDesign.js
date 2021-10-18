import SmallIntro from '../components/SmallIntro';
import BlogCard from '../components/BlogCard';

export default function GraphicDesign() {
    const list = [
        {id: 1, title: "TIM BROWN", img: "/images/new/vitmap.jpg", text: "A book cover designed for Tim Brown’s new release, ‘Change’"},
        {id: 2, title: "BOXED WATER", img: "/images/new/vitmap2.jpg", text: "A simple packaging concept made for Boxed Water"},
        {id: 3, title: "SCIENCE!", img: "/images/new/vitmap3.jpg", text: "A poster made in collaboration with the Federal Art Project"},
    ]
    return (
        <div className="pageContent">
            <SmallIntro
                title="Graphic Design"
                text="We deliver eye-catching branding materials that are tailored to meet your business objectives." 
            />
            <BlogCard items={list}/>
        </div>
    );
}