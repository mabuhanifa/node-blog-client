import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/11427593/pexels-photo-11427593.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="single"
          className="singlePostImg"
        />
        <h1>Lorem ipsum, dolor sit amet ?</h1>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
