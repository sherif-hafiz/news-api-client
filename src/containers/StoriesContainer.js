import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Story } from '../components/Story';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoryContainerStyles';


import { STORY_INCREMENT } from '../constants';
import { NewsContext } from '../contexts/NewContext';

const baseURL = 'https://newsapi.org/v2/everything';

export const StoriesContainer = () => {

  const { loading, isLoading } = useContext(NewsContext);
  const [newItems, setNewItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPages, setNumberPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleChange = event => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSend = () => {
    getSearch(searchTerm)    
  };
  
  const getSearch = async (term) => {
    let urlString;
    
    // 1.Check that it is not empty
    // 2. If empty then it should dafult
    if(!term){
      urlString = `${baseURL}?page=${currentPage}&pageSize=${STORY_INCREMENT}&domains=bbc.co.uk&apiKey=89e93d11b75c4ec4988a4e8ecd5744ec`;
    } else {
      urlString = `${baseURL}?q=${encodeURIComponent(term)}&domains=bbc.co.uk&apiKey=89e93d11b75c4ec4988a4e8ecd5744ec`
    }
    // console.log('getToken is being executed');
    // console.log(urlString);
    const { data } = await axios({
      method: 'get',
      url: urlString
    })
    .then(res => res)
    .catch(err => console.error(err));
    console.log(data);
    
    setTotalResults(data.totalResults);
    setNumberPages(Math.ceil(data.totalResults/ 20));
    setNewItems(data.articles);
  };


  useEffect(() => {
    console.log('Initial mount');
    getSearch();
  //eslint-disable-next-line
  }, [])
  

  return (
    <>
    <GlobalStyle />
    <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSend}>Send</button>
      <StoriesContainerWrapper data-test-id="stories-container">
      {newItems.map((article, index) => (
            
         article.url && article.title && <Story key={index} {...article} />
                        ))
      }
      </StoriesContainerWrapper>
    </>
  );
}

