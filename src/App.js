import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
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
