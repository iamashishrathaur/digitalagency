import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.png'
import blog3 from '../assets/images/blog-3.png'
import author1 from '../assets/images/author-1.png'
import author2 from '../assets/images/author-2.png'
import { IoArrowForward } from 'react-icons/io5'

const Blog = () => {
  
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "Designer's Checklist for Every UX Project.",
      tag: "Grid Layout",
      authorImage: author1,
      author: "Alice Williams",
      date: "2022-12-20",
      formattedDate: "December 20, 2022"
    },
    {
      id: 2,
      image: blog2,
      title: "Designer's Checklist for Every UX Project.",
      tag: "Grid Layout",
      authorImage: author2,
      author: "Jaxson Geldit",
      date: "2022-12-20",
      formattedDate: "December 20, 2022"
    },
    {
      id: 3,
      image: blog3,
      title: "Designer's Checklist for Every UX Project.",
      tag: "Grid Layout",
      authorImage: author1,
      author: "Cooper Saris",
      date: "2022-12-20",
      formattedDate: "December 20, 2022"
    }
  ];

  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">
            Our inside <span className="span">news</span>.
          </h2>
          <a href="#" className="btn-link">
            <span className="span">Check Our All News</span>

            <IoArrowForward size={'1.8rem'} display={'block'} aria-hidden="true"/>
          </a>
        </div>

        <ul className="grid-list">
          {blogPosts.map(post => (
            <li key={post.id}>
              <div className="blog-card">
                <div className="card-banner img-holder" style={{ "--width": 595, "--height": 391 }}>
                  <img
                    src={post.image}
                    width="595"
                    height="391"
                    loading="lazy"
                    alt={post.title}
                    className="img-cover"
                  />
                  <button className="card-tag">{post.tag}</button>
                </div>
                <div className="card-content">
                  <ul className="meta-list">
                    <li className="meta-item">
                      <img
                        src={post.authorImage}
                        width="18"
                        height="18"
                        loading="lazy"
                        alt={post.author}
                        className="author-img"
                      />
                      <p className="meta-item-text">{post.author}</p>
                    </li>
                    <li className="meta-item">
                      <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>
                      <time dateTime={post.date} className="meta-item-text">{post.formattedDate}</time>
                    </li>
                  </ul>
                  <h3 className="h3">
                    <a href="#" className="card-title hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <a href="#" className="btn-link">
                    <span className="span">Read more</span>
                    <IoArrowForward size={'1.8rem'} display={'block'} aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
