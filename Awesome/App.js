import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View, Icon,Left} from 'native-base';
import {StyleSheet,ImageBackground} from 'react-native';


export default class InlineLabelExample extends Component {
  render() {
    return (
      
      
     
      <Container>

        <ImageBackground source={require('./app/img/analyst.jpg')} style={styles.img} >
        <View style={styles.inner}>

        <View style={{flex:1}} />
          <Text style={styles.head}>Insfra Tech</Text>

        
        
          <View style={styles.userback} />
          <View style={{maxWidth:'85%', marginLeft:33}}>
          <Form>
            <Item inlineLabel rounded style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
            <Icon active name='person' style={{marginLeft:10}} />
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last rounded style={{marginTop:10,backgroundColor: 'rgba(255,255,255,0.5)'}}>
            <Icon active name='lock' />
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </Form>

          <View style={styles.btn}><Button full light rounded>
          <Text> Sign in </Text>
          </Button>
          </View>
          </View>

          <View style={{flex:3}}/>
          <View style={{alignSelf:'center', paddingVertical:65}}>
          <Button rounded>
            <Icon name='logo-facebook' />
            <Text>Login with facebook</Text>
          </Button>
          </View>
          
         </View> 
          
          </ImageBackground>

      </Container>
   
   
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
    alignContent: 'center',
    },

  btn:{
    marginTop:10    
  },

  img:{
    
    width: 'auto',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },

  inner:{
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: 'rgba(175,175,175,0.2)'  
    
  },

  userback:{
    flex: 2,
    maxWidth: '85%',
    
   },

   head:{
     fontSize: 90,
     fontFamily: 'freescpt',
     textAlign: 'center',
     color: 'black'
   }
  
});
