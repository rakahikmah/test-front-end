import React,{useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import {getAllMovie} from "../stores/actions/listMovie/getAllMovie";

const Movie = () => {
  const dispatch = useDispatch();
  const listMovie = useSelector(state => state.listMovie);
  console.log(listMovie);
  useEffect(() => {
      dispatch(getAllMovie());
  }, [dispatch]);
  
  if(listMovie.data.length === 0){
    return "Loading..."
  }else{
    return (
      <div>
        <Header></Header>
        <Menu></Menu>
        <div className="content-wrapper" style={{ minHeight: 503 }}>
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Movie</h1>
                </div>
                <div className="col-sm-6">
                  
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row"> 
                  {listMovie.data.results.map((item, i) => (
                    <div className="col-sm-4">
                      <div className="card card-row card-default">
                        <div className="card-header">
                          <h5 className="card-title">{item.original_title} </h5>
                        </div>
                        <div className="card-body">
                          <img className="card-img-top"  alt="100%x180" style={{height: 500, width: '100%', display: 'block'}} src={"https://image.tmdb.org/t/p/w342/"+ item.poster_path} data-holder-rendered="true" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
  
};

export default Movie;
