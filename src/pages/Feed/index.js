import React from "react";

import { Box, Spacer, ScrollView } from "../../components";
import Header from "../../components/Header";
import PostList from "../../components/Post/list";
import StoryList from "../../components/Story/list";


const Feed = () => {
    return (
        <Box background="light">
            <Header title="explore"/>
            <ScrollView>

                <StoryList />
                <Spacer size="50px" />
                <PostList />

            </ScrollView>
        </Box>
    )
}

export default Feed