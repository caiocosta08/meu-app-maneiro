import React from 'react';
import { ImageBackground, Alert } from 'react-native';
import { Container, BoxContainer, CommentAuthor, CommentEmail, CommentBody, PostSectionTitle, PostContentScroll, PostBoxTitle, PostBody, PostContainer, PostHeaderContainer } from '../assets/styles/styled';
import bg from '../assets/images/bg-1.png';
import * as api from "../services/api.service";

export const Post = (props) => {

  const [comments, setComments] = React.useState(false);
  const [post, setPost] = React.useState(false);

  const handleGetPostComments = async (post_id) => {
    let response = await api.getPostComments(post_id);
    if (!response.status) {
      Alert.alert('Erro', 'Não foi possível carregar os comentários do post, tente novamente mais tarde. \n' + response.error, [
        {
          text: 'OK',
          onPress: () => { }
        },
      ]);
      return;
    }
    setComments(response.data);
  }

  React.useEffect(() => {
    setPost(props.route.params.post)
    handleGetPostComments(props.route.params.post.id)
  }, []);

  return (
    <Container>
      <PostContentScroll style={{ width: "100%" }}>
        <ImageBackground source={bg} style={{ width: "100%", alignItems: "center" }}>
          <PostHeaderContainer>
            <PostBoxTitle>{post && post.title}</PostBoxTitle>
          </PostHeaderContainer>
        </ImageBackground>
        <PostContainer>
          <PostBody>{post && post.body}</PostBody>
          <PostSectionTitle>Comentários ({comments.length})</PostSectionTitle>
          {comments && comments.map(c => {
            return (
              <BoxContainer key={c.id}>
                <CommentAuthor>{c.name}</CommentAuthor>
                <CommentEmail>{c.email}</CommentEmail>
                <CommentBody>{c.body}</CommentBody>
              </BoxContainer>
            );
          })}
        </PostContainer>
      </PostContentScroll>
    </Container>
  );
};
