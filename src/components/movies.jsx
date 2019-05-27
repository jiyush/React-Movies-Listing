import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from '../common/pagination';
import {paginate } from  '../utils/paginate';
import ListGroup from '../common/listGroup';
import MoviesTable from './moviesTable';


class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize: 4,
        selectedGenre: '',
        currentPage: 1
     }

     componentDidMount(){
         const genres = [{'name' : 'All Genres'},...getGenres()];
         this.setState({movies: getMovies(), genres});
     }

     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id);
         this.setState({ movies })
     }
     handlePageChange = page => {
         this.setState({currentPage: page});
     }
     handleLike = movie => {
         const movies = [...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index] = {...movies[index]};
         movies[index].like = !movies[index].like;
         this.setState({
             movies
         });
     }
     handleGenreSelect = genre => {
         this.setState({selectedGenre : genre, currentPage: 1});
     }

    render() { 
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies, selectedGenre } = this.state;
        if(count === 0)
            return <p>There are no movies in Database.</p>;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const movies = paginate(filtered,currentPage,pageSize);
        return ( 
            <div className="row">
                <div className="col-2">
                    <ListGroup  items={this.state.genres} selectedItem={this.state.selectedGenre} textProperties='_id' valueProperties='name' onItemSelect={this.handleGenreSelect} />
                </div>
                <div className="col">
                <p> Showing { count } movies from Database. </p>
                <MoviesTable  movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} />
                <Pagination  itemCount={filtered.length} currentPage={currentPage}  pageSize={pageSize} onPageChange={this.handlePageChange} />
                </div>
                
            </div>
            
         );
    }
}



export default Movies;