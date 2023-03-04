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
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet ?
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b> Shourov </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          eveniet culpa temporibus porro quisquam est veniam eaque voluptatem
          adipisci iure. At, vero? Distinctio, cum sunt, saepe quae dolores nemo
          laboriosam soluta ea modi deserunt vero placeat et. Ut quisquam totam
          suscipit, amet numquam quod iure, molestiae voluptates quidem alias
          vitae eveniet expedita autem quis ea sit harum nulla, rem quaerat
          placeat beatae nostrum. Explicabo aliquam, fugit officia asperiores
          facere consequuntur optio quaerat? Qui reprehenderit provident magnam
          aperiam hic. Natus cupiditate aspernatur minima quis, sed voluptate
          magnam velit tenetur ex neque optio dolores eveniet, nisi rem sequi
          dignissimos iste aliquid. Qui ratione nisi voluptas atque esse, vitae,
          inventore explicabo incidunt ipsum necessitatibus tenetur eius
          asperiores! Distinctio ut debitis voluptatibus molestiae temporibus
          dolorem possimus aut pariatur nobis architecto qui iste placeat nam
          neque, labore libero. Rerum, amet ratione incidunt nulla quasi
          explicabo et quisquam est iste fugiat esse eum animi odit sit dolore
          atque nemo tempore accusamus. Laborum libero molestiae inventore autem
          veritatis aliquam cumque. Commodi dicta illum dolorum aperiam eveniet
          facere magni accusantium minus laboriosam, molestias eaque quasi vel
          consectetur assumenda ab. Quisquam quae eveniet accusamus sint,
          recusandae similique sed aperiam eius magnam pariatur earum. Deserunt
          porro commodi magni nihil saepe!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
