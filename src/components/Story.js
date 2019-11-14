import React from 'react';

import { StoryWrapper, StoryTitle } from '../styles/StoryStyles';
import { publishedTime } from '../mappers/publishedTime';

export const Story = (props) => {
    // console.log(props);
    return (
        <StoryWrapper data-qa-id="story">
            <StoryTitle>
                <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>    
                <span>{publishedTime(props.publishedAt)}</span>
            </StoryTitle>
            
            <p>{props.description}</p>
            
        </StoryWrapper>
    )
}