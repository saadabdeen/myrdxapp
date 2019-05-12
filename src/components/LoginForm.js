import React, {Component} from 'react';
import {CustomButton , Card , CardSection , Input} from './common';
import {connect} from "react-redux";
import {emailChanged} from "../actions"

class LoginForm extends Component {
    onEmailChange (text) {

    }
    render (){
        return (
<Card>
    <CardSection>
        <Input label = "Email: "
        placeholder = "user@gmail.com" 
        onChangeText = {this.onEmailChange.bind(this)}/>
        
    </CardSection>

    <CardSection>
        <Input secureTextEntry
        placeholder = "password"
        label = "password"/>
    </CardSection>

    <CardSection>
        <CustomButton>Sign In</CustomButton>
    </CardSection>
</Card>
        );

    }
}
export default connect (null , emailChanged) (LoginForm);