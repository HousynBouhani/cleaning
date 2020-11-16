import React, { useContext, useEffect } from "react";
import PostsContext from "../../context/posts/postsContext";
import {Link} from "react-router-dom";
import Moment from "react-moment";

const Infonews = (props) => {

    const postsContext  = useContext(PostsContext);

    const {fetchNews,posts} = postsContext;


    useEffect(() => {
      fetchNews();

  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.history])


  return (
    <div className="container">
      <div className="row" >
        <div className="w-100 col">
          <div  className="my-5 d-flex justify-content-center" >
            <h2>
              Aktuelle Informationen
            </h2>
          </div>
        </div>
      </div>

{
    posts.length === 0 ? 
   <div className="d-flex justify-content-center w-100" style={{height:"350px"}}> Noch keine Beiträge </div>
    :

            <div className="row">

                {
                    posts.map((post)=> {

                        return (
                            <div className="col-md-4" key={post._id}>
                            <div
                              className="card mb-4 box-shadow"
                              style={{ boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05)" }}
                            >
                              <img
                                className="card-img-top"
                                src={`http://localhost:5000/${post.image}`}
                                alt="Card"
                              />
                              <div className="card-body">
                                <p className="card-text">
                                 {post.title}
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="btn-group mt-5">
                                     <Link to={`/post/${post._id}`}>
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-outline-secondary"
                                    >
                                    Weiterlesen
                                    </button>
                                    </Link>
                                  </div>
                                  
                                  <small className="text-muted mt-5"><Moment date={post.date} format="DD/MM/YY"></Moment></small>
                                </div>
                              </div>
                            </div>
                          </div>
                        )


                    })
                }

   
          </div>

    }
    </div>
  );
};

export default Infonews;
