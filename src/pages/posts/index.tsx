import PostList from "../../components/PostList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PostPage() {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}
