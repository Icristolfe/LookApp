import React from 'react'
import { Box, Text } from '../../components'
import Post from '.'


const PostList = () => {
    return (
    
            <Box>
                {Array.from(Array(20))?.map(item => (
                    <Box key={Math.random()} >
                      < Post />
                    </Box>
                ))}
            </Box>
       
    )
}

export default PostList