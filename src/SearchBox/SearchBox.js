import React, { Component } from 'react'; 
import SearchBar from '../SearchBar/SearchBar';
import FilterList  from '../FilterList/FilterList';
class SearchBox extends Component{
    render(){
        return(
            <div className= "SearchBox">
                <h1>Google Book Search</h1>
                <SearchBar 
                searchTerm = {this.props.searchTerm}/>
                <FilterList />
            </div>
        );
    }
}


export default SearchBox;