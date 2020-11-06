import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, HeaderContainer, HeaderInput, HeaderInputContainer, BoxContainer, FeedBoxContainer, ScrollContainer, PostBoxTitle, PostBoxDesc, PostContainer, Logo, PageTitle, PageDesc, InputTitle, TextInput, BtnPrimary, TxtBtnPrimary } from '../assets/styles/styled';

export const Header = (props) => {

  return (
    <HeaderContainer>
      <HeaderInputContainer>
        <FontAwesome name="search" size={20} color="#B4BCC8" style={{ marginRight: 10 }} />
        <HeaderInput placeholder="Buscar" />
      </HeaderInputContainer>
      <TouchableOpacity style={{ borderRadius: 50, width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "#FF2856", padding: 10 }} >
        <FontAwesome name="plus" size={25} color="#fff"/>
      </TouchableOpacity>
    </HeaderContainer>
  );
}

