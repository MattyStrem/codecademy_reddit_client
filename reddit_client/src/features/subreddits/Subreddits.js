import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card.js'
import '../../css/Subreddit.css'
import { selectSubreddit } from '../../store/subredditsSlice.js';

const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits)

    return (
        <Card className='subreddit-card'>
            <h2>Subreddits</h2>
        </Card>
    )

}

export default Subreddits;