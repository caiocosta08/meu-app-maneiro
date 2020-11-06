import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  /* padding-top: 30px; */
`;

export const HeaderContainer = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const HeaderInput = styled.TextInput`
  font-size: 16px;
  color: #303030;
  /* width: 90%; */
  /* background-color: #F1F2F6; */
  /* border-radius: 10px; */
  /* margin: 10px 0px; */
  /* padding: 20px; */
`;

export const HeaderInputContainer = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  background-color: #F1F2F6;
  padding: 10px;
  margin-right: 15px;
  flex: 1;
  border-radius: 50px;
`;

export const BoxContainer = styled.View`
  margin: 10px 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FeedBoxContainer = styled.View`
  margin: 0px;
  padding-top: 30px;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ScrollContainer = styled.ScrollView.attrs(props => ({
  contentContainerStyle: { alignItems: 'center', justifyContent: "flex-start" },
  showsVerticalScrollIndicator: false,
}))`

  background: transparent;
  width: 100%;
`;

export const PostContentScroll = styled.ScrollView.attrs(props => ({
  contentContainerStyle: { alignItems: 'center', justifyContent: "flex-start" },
  showsVerticalScrollIndicator: false,
}))`
  background: #ffffff;
  width: 90%;
`;

export const PostHeaderContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #0000003f;
  padding: 60px 0px 30px 0px;
`;

export const PostContainer = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

export const PostBoxTitle = styled.Text`
  font-size: 46px;
  font-weight: bold;
  color: #ffffff;
  width: 90%;
  margin: 5px 0px;
`;

export const PostBody = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #333;
  width: 100%;
  margin: 10px 0px 20px 0px;
`;

export const PostSectionTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #151F2F;
  width: 100%;
  margin: 10px 0px 20px 0px;
`;

export const CommentAuthor = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  width: 100%;
  margin: 5px 0px 0px 0px;
`;

export const CommentEmail = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #FF5275;
  width: 100%;
`;

export const CommentBody = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  width: 100%;
  margin: 20px 0px;
`;

export const FeedPostContainer = styled.TouchableOpacity`
  margin: 10px 0px;
  width: 90%;
  padding: 20px 10px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const FeedPostBoxTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #070707;
  width: 100%;
  margin: 5px 0px;
`;

export const FeedPostBoxDesc = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #999999;
  width: 100%;
  margin: 5px 0px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #121B2B;
  width: 90%;
  margin: 10px 0px;
`;

export const PageDesc = styled.Text`
  font-size: 16px;
  color: #303030;
  width: 90%;
`;

export const InputTitle = styled.Text`
  font-size: 16px;
  color: #303030;
  width: 80%;
  margin: 5px 0px;
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  color: #303030;
  width: 90%;
  background-color: #F1F2F6;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 20px;
`;

export const BtnPrimary = styled.TouchableOpacity`

  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #FF2956;
  /* margin: 5px 0px; */
  width: 90%;
  padding: 20px;

`;

export const TxtBtnPrimary = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Logo = styled.Image`
  width: 70%;
  height: 150px;
  margin: 25px 0px;
  /* resize: stretch; */
`;

export const BtnCTA = styled.TouchableOpacity`

  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 5px;
  border-color: #fff;
  background-color: #08D6A0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
  padding: 10px;

`;

export const TxtBtnCTA = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const SectionHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #18446B;
`;

export const SectionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SectionButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #108AB2;
`;

export const SubjectItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #108AB2;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  padding-left: 20px;
`;

export const SubjectTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;

export const TrashIcon = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  background-color: red;
`;

export const BtnSelect = styled.TouchableOpacity`

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: #fff;
  background-color: ${props => props.selected ? "#2A4F90" : "#999"};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  margin: 5px;

`;

export const TxtBtnSelect = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SelectionRow = styled.View`

  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;

`;

export const SelectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #2A4F90;
  width: 90%;
`;