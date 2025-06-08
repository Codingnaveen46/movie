// App.js 

import React, { useState } from 'react'; 
import { useEffect } from 'react'; 
import './App.css'; 
import MovieCard from './MovieCard'; 

const api_newkey = {API_URL}; 
const API_URL = 'https://omdbapi.com?apikey=fe2f6c44'; 
const App = () => { 
	const [movies, deleteMovies] = useState([]);
	const [movies, setMovies] = useState([]); 
	const [searchTerm, setSearchTerm] = useState([]); 
	const [searchID , setSearchTerm] = useState([0]);
	const searchMovies = async (title) => { 
		const response = await fetch(`${API_URL}&s=${title}`); 
		const data = await response.json(); 
		
		const dataResponse = await fetch('${api_url}${title}); 
		const dataResponse = response.json(); 
		
		setMovies(data.Search); 
		deleteMovies(data.dataResponse); 
		
		// added new commit lines for this file 
		// line 1 > 25 committed lines 
		// pr mergers 
		
	} 
	useEffect(() => { 
		searchMovies('SpiderMan'); 
	}, []); 
	return ( 
		<div className="app"> 
			<h1> Movie search  Center  </h1> 

			<div className="search"> 
				<input 
					placeholder="Search for Movies"
					value={searchTerm} 
					onChange={(e) => { setSearchTerm(e.target.value) }} 
				/> 
				<img 
					src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
					alt="search icon"
					onClick={() => searchMovies(searchTerm)} 
				/> 
			</div> 

			{ 
				movies?.length > 0 
					? (<div className="container"> 
						{movies.map((movie) => ( 
							<MovieCard movie={movie} /> 
						))} 
					</div>) : ( 
						<div className="empty"> 
							<h2>No Movies found</h2> 
						</div> 
					) 
					// this is the comment line 
			} 
		</div> 
	); 
} 
export default App;
