import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';


class App  extends Component {
    render(){
        return(
            <main className="container">
                <Movies/>
            </main>
        );
    }
}
 
export default App;

// <tr key={movie['_id']}>
                            //     <td>{ movie['title'] }</td>
                            //     {/* <td>{ movie['genre'] }</td> */}
                            //     {/* <td>{ movie['genre'] }</td>
                            //     <td>{ movie['numberInStock'] }</td>
                            //     <td>{ movie['dailyRentalRate'] }</td> */}
                            //     <td>
                            //         <button className="btn btn-danger">Delete</button>
                            //     </td>
                            // </tr>
                
                            // state = {
                            //     movies: getMovies()
                            //   };
                            //   render() { 
                            //     console.log(this.state.movies);
                            //     this.handleDelete = () => {
                            //        console.log('Clicked');
                            //     }
                            //     return (
                            //         <main className="container">
                            //         <h3>Toatal Number of Movies : { this.state.movies.length }</h3>
                            //             <table className="table">
                            //                 <thead className="thead-dark">
                            //                     <tr>
                            //                         <th>Title</th>
                            //                         <th>Genre</th>
                            //                         <th>Stock</th>
                            //                         <th>Rate</th>
                            //                         <th>Action</th>
                            //                     </tr>
                            //                 </thead>
                            //                 <tbody>
                            //                     {this.state.movies.map(movie => (
                            //                         <tr key={movie['_id']}>
                            //                             <td>{movie['title']}</td>
                            //                             <td>{movie['genre'].name}</td>
                            //                             <td>{movie['numberInStock']}</td>
                            //                             <td>{movie['dailyRentalRate']}</td>
                            //                             <td>
                            //                                <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>
                            //                              </td>
                            //                         </tr>
                            //                     ))}
                            //                 </tbody>
                            //             </table>
                            //         </main>
                            //       );
                            // }