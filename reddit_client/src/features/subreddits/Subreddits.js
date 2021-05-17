import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card.js'
import '../../css/Subreddits.css'

import { selectSubreddits, fetchSubreddits } from '../../store/subredditsSlice.js';
import { selectSelectedSubreddit, setSelectedSubreddit } from "../../store/redditSlice"

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits)
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <Card className='subreddits-card'>
            <h2>Subreddits</h2>
            <ul className='subreddits-list'>
                {subreddits.map((subreddit) => (
                    <li 
                        key={subreddit.id}
                        className={`${
                            selectedSubreddit === subreddit.url && `selected-subreddit`
                          }`}
                    >
                        <button
                            type='button'
                            onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                        >
                            <img 
                                className="subreddit-icon"
                                alt={`${subreddit.display_name}`}
                                scr={
                                    subreddit.icon_img ||
                                    `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                                }
                                style={{ border: `3px solid ${subreddit.primary_color}` }}
                            />
                            {subreddit.display_name}    

                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Subreddits;