import React,{useState,useCallback,useRef}  from 'react';
import useWordSearch from "./useWordSearch";
import './App.css';

function App() {
  const [query,setQuery] = useState("");
  const [pageNumber,setPageNumber] = useState(1);

  //extract object value using object destructuring
  const {loading,error,books,hasMore} = useWordSearch(query,pageNumber);
  
  //persist data across rendering
  const observer = useRef();

  //using the useCallback hook
  const lastBookElement = useCallback((node) =>{
      // console.log(node);
      if(loading) return
      if(observer.current){
        observer.current.disconnect();
      }

      //go to the last word of the content
      observer.current = new IntersectionObserver(entries => {
          if(entries[0].isIntersecting && hasMore){
            console.log("visible");
            setPageNumber(prevPageNo => prevPageNo + 1 )
          }
      });
      if(node) observer.current.observe(node)
      
  },[loading,hasMore])

  //maintaining the state using input value using set value
  const handleSearch = (e) =>{
    setQuery(e.target.value);
    setPageNumber(1);
  }

  
  return (
      <>
        <input type="text" value={query} onChange={handleSearch}/>
        {
          books.map((book,index) =>{
              if(book.length === index + 1){
                return <div key={book} ref={lastBookElement}>{book}</div>;
              }
              else{
                return <div key={book}>{book}</div>;
              }
          })
        }
        <div>{loading && "Loading....."}</div>
        <div>{error && "Error"}</div>
      </>
  );
}

export default App;
