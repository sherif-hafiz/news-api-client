import React, { Component, createContext } from 'react';

export const NewsContext = createContext();

class NewsContextProvider extends Component {
    state = {
        loading: true
    };
    componentDidMount () {
        console.log('NewsContextProvider has mounted... Make a call to news-api');
    }

    isLoading = () => {
        this.setState({ loading: !this.state.loading });
    }
    
    render() { 
        return (
            <NewsContext.Provider value={{...this.state, isLoading: this.isLoading}}>
                {this.props.children}
            </NewsContext.Provider>
        );
    }
}

export default NewsContextProvider;