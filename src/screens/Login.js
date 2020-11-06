import React from 'react';
import { ImageBackground, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, BoxContainer, Logo, PageTitle, PageDesc, InputTitle, TextInput, BtnPrimary, TxtBtnPrimary } from '../assets/styles/styled';
import logo from '../assets/images/logo.png';
import bg from '../assets/images/bg-1.png';
import { LinearGradient } from "expo-linear-gradient";

export const Login = ({ navigation }) => {


  const [userToLogin, setUserToLogin] = React.useState({
    email: '',
    password: ''
  });

  const loginUser = (user) => {
    if (user.email == 'caio@teste.com.br' && user.password == '123456')
      navigation.navigate('Home');
    else
      Alert.alert('Erro', 'Usuário ou senha incorretos');
  }

  return (
    <Container>
      <ImageBackground source={bg} style={{ width: "100%", height: "100%", resizeMode: "cover", justifyContent: "flex-start", alignItems: "center" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.9 }}
          colors={['#ffffff', '#ffffff', '#ffffff', "transparent"]}
          style={{ flex: 1, width: "100%", height: "100%", paddingTop: 30, alignItems: "center", justifyContent: "flex-start" }}
        >
          <BoxContainer>
            <PageTitle>Olá!</PageTitle>
            <PageDesc>Está pronto para mudar sua vida?</PageDesc>
          </BoxContainer>
          <BoxContainer>
            <InputTitle>Seu Login</InputTitle>
            <TextInput placeholder="contato@teste.com.br" onChangeText={(value) => setUserToLogin({ ...userToLogin, email: value })} />
            <InputTitle>Senha</InputTitle>
            <TextInput placeholder="••••••••" secureTextEntry onChangeText={(value) => setUserToLogin({ ...userToLogin, password: value })} />
          </BoxContainer>
          <BtnPrimary onPress={() => loginUser(userToLogin)}>
            <TxtBtnPrimary>Fazer login</TxtBtnPrimary>
          </BtnPrimary>
          <BoxContainer>
            <Logo source={logo} style={{ resizeMode: 'stretch', }} />
          </BoxContainer>
        </LinearGradient>
      </ImageBackground>
    </Container>
  );
};
