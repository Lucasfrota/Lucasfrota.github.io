import React from 'react'

import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

import { getAllPosts } from '../static/text/Posts'
import PostCard from '../components/PostCard'

const HomeScreen = ({ history }) => {
    
    const posts = getAllPosts()

    const navigateToPost = (postId) => {
        console.log(postId)
        history.push('/post/' + postId)
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <List>
                {posts.map((post, index) => (
                    <ListItem key={index}>
                        <PostCard
                            postTitle={post.postTitle}
                            postContent={post.postContent}
                            onClick={() => {navigateToPost(index)}}/>
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
    
}

export default withRouter(HomeScreen)