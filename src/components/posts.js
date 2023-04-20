
function Posts(props) {
    return (      
    <div className="Posts container">
        <div className="row">
          <h2 className='text-center text-danger'>Query Result total number: {props.posts.length}</h2>
            { props.posts.map( post => (
                <div className="col-sm-4" key={post.id}>
                    <div className={`card m-2 ${props.color}`}>
                    <div  className={`card-header ${props.color} text-center`}>Post {post.id}</div>
                        <div className="card-body ">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                        </div>  
                    </div>
                </div>
            ))}
        </div>   
    </div>
    
  );
  
}

export default Posts;
