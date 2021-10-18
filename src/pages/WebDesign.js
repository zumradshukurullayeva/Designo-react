
  import SmallIntro from "../components/SmallIntro";
  import BlogCard from "../components/BlogCard";

export default function Webdesign() {
    const list = [
        {id: 1, title: "EXPRESS", img: "/images/new/fotos1.svg", text: "A multi-carrier shipping website for ecommerce businesses"},
        {id: 2, title: "EXPRESS", img: "/images/new/fotos6.svg", text: "A multi-carrier shipping website for ecommerce businesses"},
        {id: 3, title: "FACEIT", img: "/images/new/fotos3.svg", text: "A multi-carrier shipping website for ecommerce businesses"},
        {id: 4, title: "FACEIT", img: "/images/new/fotos4.svg", text: "A multi-carrier shipping website for ecommerce businesses"},
        {id: 5, title: "FACEIT", img: "/images/new/fotos5.svg", text: "A multi-carrier shipping website for ecommerce businesses"},
        {id: 6, title: "FACEIT", img: "/images/new/fotos6.svg", text: "A multi-carrier shipping website for ecommerce businesses"}
    ]

    return (
        <div className="pageContent">
            <SmallIntro
                title="Web Design"
                text="We build websites that serve as powerful marketing tools and bring memorable brand experiences." 
             />
            <div className="row">
                <div className="col-md-4">
                    <BlogCard items={list}/>
                </div>
            </div>
        </div>
    );
}