import React, { Component } from 'react';
import {
    View,
    Image,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';
import {  Header, Left, Body, Right, Icon } from 'native-base';
class HeaderInts extends Component {
    state = {  }
    render() {
        const {
            isdarkmode,
            theme,
            setdarkmode
        }=this.props
        const {
            darkmode,
            defaultmode
        }=theme
        const styledark=isdarkmode?darkmode:defaultmode 
        return (
            <Header style={{elevation:2,...styledark}}>
                <StatusBar backgroundColor={isdarkmode?'black':'gray'} barStyle={'light-content'}/>
                <Left>
                    <TouchableWithoutFeedback onPress={()=>setdarkmode(!isdarkmode)}>
                        <Icon name='camera' type='Feather' style={{color:isdarkmode?darkmode.color:defaultmode.color}}/>
                    </TouchableWithoutFeedback>
                </Left>
                <Body>
                    <View>
                        <Image
                            style={{width:150,height:45,tintColor:isdarkmode?darkmode.color:defaultmode.color}}
                            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                            }}
                        />
                    </View>
                </Body>
                <Right>
                    <Icon name='paper-plane-outline' style={{fontSize:30,color:isdarkmode?darkmode.color:defaultmode.color}}  />
                </Right>
            </Header>
        );
    }
}
 
export default HeaderInts;