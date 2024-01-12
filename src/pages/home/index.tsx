import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PostList from "../posts";

export default function Home () {
    return (
        <div>
            <Header/>
            <PostList/>
            <Footer/>
        </div>
    )
}