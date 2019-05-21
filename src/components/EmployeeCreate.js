import React, { Component } from 'react';
import { CustomButton, Card, CardSection, Input,SelectBox } from './common';
import {Picker , Text} from 'react-native';
import { connect } from "react-redux";
import { employeeUpdate,addEmployee } from "../actions";

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Name" placeholder="Zahid" onChangeText={text => this.props.employeeUpdate({ prop: "name", value: text })} value={this.props.name} />
                </CardSection>
                <CardSection>
                    <Input label="Phone" placeholder="+55-555-5555555" onChangeText={text => this.props.employeeUpdate({ prop: "phone", value: text })}  value={this.props.phone} />
                </CardSection>
                <CardSection>
                <SelectBox
                    label="Select Shift" 
                    selectedValue={this.props.shift}
                    onValueChange={day => this.props.employeeUpdate({ prop: "shift", value: day })}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                </SelectBox>
                </CardSection>
                <CardSection>
                    <CustomButton onPress={()=>{ 
                        this.props.addEmployee(this.props)
                    }}>Add Employee</CustomButton>
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

const mapStateToProps = ({employeeForm}) => {
    const { name, phone, shift,error } = employeeForm;
    return { name, phone, shift, error };
};

export default connect(
    mapStateToProps,
    { employeeUpdate,addEmployee }
)(EmployeeCreate);