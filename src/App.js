import React from 'react';
import NewsContentProvider from './contexts/NewContext';
import { StoriesContainer } from './containers/StoriesContainer';
import Search from './components/Search';


function App() {

  return (
    <NewsContentProvider>
      <Search/>
      <StoriesContainer />
    </NewsContentProvider>
  )
}

export default App;
