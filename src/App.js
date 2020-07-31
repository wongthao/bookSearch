import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import BookListDisplay from './BookListDisplay/BookListDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
        items: [],
        searchTerm: 'Henry'
    };
}

  componentDidMount() {
    let url= `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}+inauthor:keyes&key=AIzaSyAV5PULVQw8_0zHvAyhJSa3h1qGRc0mznY`
    fetch(url)
    .then(response => {
      // check if response is ok
      console.log('About to check for errors');
      if(!response.ok) {
        console.log('An error did occur, let\'s throw an error.');
        throw new Error('Something went wrong'); // throw an error
      }
      return response; // ok, so just continue
    })
    .then(response => response.json())
    .then(data => {
     console.log(data)
      

    //  const title =  Object.keys(data)
    //  .map(key => data[key]);
    //  console.log(title);
      
  
    //  const items =  Object.keys(title)
    //   .map(key => data.items[key].volumeInfo);
    //   console.log(items);


      const items = data.items
        .map(item => item.volumeInfo);
        console.log(items)

       this.setState({items: items})

    })
    .catch(err => {
      // this catch handles the error condition
      console.log('Handling the error here.', err);
    });
}


searchTermUpdate(value){
  this.setState({
    serchTerm: value
  })
} 


  render() {
      

      
      
    return (
      <main className="App">
        <SearchBox
           searchTerm= {this.state.searchTerm}
           />
        <BookListDisplay
          item= {this.state.items}/>
         
       
         
         

          
      </main>
    );
  }
}  

export default App;
