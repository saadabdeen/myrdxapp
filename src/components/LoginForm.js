import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { CustomButton, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    emailChange = (text) => this.props.emailChanged(text)
    passwordChanged = (text) => this.props.passwordChanged(text)
    login = () => {
        this.props.loginUser(this.props)
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="user@email.com" onChangeText={this.emailChange} value={this.props.email} />
                </CardSection>
                <CardSection>
                    <Input secureTextEntry label="Password" placeholder="Password" onChangeText={this.passwordChanged} value={this.props.password} />
                </CardSection>
                <CardSection>
                    {this.props.loading ? <ActivityIndicator size={50} color="purple" /> : <CustomButton onPress={this.login}>Login</CustomButton>}
                </CardSection>
                {this.props.error ?
                    <CardSection>
                        <Text style={{ color: "blue", fontSize: 25, margin: 10, textAlign: "center" }}>{this.props.error}</Text>
                    </CardSection>
                : null}
            </Card>
        )
    }
}
const mapStateToProps = ({ auth }) => {
    return {
        email: auth.email,
        password: auth.password,
        loading: auth.loading,
        error: auth.error,
        user: auth.user
    };
}
export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm); 