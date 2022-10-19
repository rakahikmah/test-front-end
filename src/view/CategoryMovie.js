import React,{useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import {getCategoryMovie} from "../stores/actions/categoryMovie/getCategoryMovie";

const CategoryMovie = () => {
  const dispatch = useDispatch();
  const dataCategoryMovie = useSelector(state => state.categoryMovie);

  useEffect(() => {
      dispatch(getCategoryMovie());
  }, [dispatch]);

  if(dataCategoryMovie.data.length === 0){
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
                  <h1 className="m-0">Category</h1>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Category</h3>
                    </div>
                    <div className="card-body">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th style={{width: 10}}>No</th>
                            <th>Category Name</th>
                          </tr>
                        </thead>
                        <tbody>
                        {dataCategoryMovie.data.genres.map((item, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                          </tr>
                        ))}
                          
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer clearfix">
                      <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            «
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            »
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
  
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
};

export default CategoryMovie;
