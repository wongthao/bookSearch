import React, {Component} from 'react'; 

class SearchBar extends Component{
    render(){

        onSubmitForm = (e) => {
            e.preventDefault()
            // e.target['inputName'] references `<input name='inputName' />`
            this.props.onAddItem(e.target.itemToAdd.value)
          }
        return(
            <div className="SearchBar">
              <form onSubmit ={this.}>
                <input 
                    placeholder="Henry" value={this.props.searchTerm}/>
                <button 
                    type="submit" >Search</button>
              </form>      
            </div>
        );
    }
}


export default SearchBar;