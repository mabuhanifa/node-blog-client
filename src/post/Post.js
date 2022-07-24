import './post.css';

const Post = () => {
    return (
        <div className="post">
            <img
        className="postImg"
        src="https://images.pexels.com/photos/11427593/pexels-photo-11427593.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
        </div>
    );
};

export default Post;