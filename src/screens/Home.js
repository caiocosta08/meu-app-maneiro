import React from 'react';
import { ImageBackground, RefreshControl, Alert } from 'react-native';
import { FeedBoxContainer, ScrollContainer, FeedPostBoxTitle, FeedPostBoxDesc, FeedPostContainer, PageTitle, } from '../assets/styles/styled';
import bg from '../assets/images/bg-1.png';
import { Header } from "../components/Header";
import * as api from "../services/api.service";
export const Home = ({ navigation }) => {

  const [posts, setPosts] = React.useState(false);

  const handleGetPosts = async () => {
    let response = await api.getPosts();
    if (!response.status) {
      Alert.alert('Erro', 'Não foi possível carregar os posts, tente novamente mais tarde. \n' + response.error, [
        {
          text: 'OK',
          onPress: () => {  }
        },
      ]);
      return;
    }
    setPosts(response.data);
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await handleGetPosts();
    setRefreshing(false);
  }

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <ImageBackground source={bg} style={{ width: "100%", height: "100%", alignItems: "center" }}>
      <FeedBoxContainer>
        <Header />
        <PageTitle>Notícias ({posts && posts.length})</PageTitle>
      </FeedBoxContainer>
      <ScrollContainer refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />} >
        {posts && posts.map(p => {
          return (
            <FeedPostContainer key={p.id} onPress={() => navigation.navigate("Post", { post: { id: p.id, title: p.title, body: p.body } })}>
              <FeedPostBoxTitle>{p.title}</FeedPostBoxTitle>
              <FeedPostBoxDesc>{p.body}</FeedPostBoxDesc>
            </FeedPostContainer>
          );
        })}
      </ScrollContainer>
    </ImageBackground>
  );
};
