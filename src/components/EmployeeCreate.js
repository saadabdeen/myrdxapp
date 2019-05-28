import React, { Component } from "react";
import { Picker, Text } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import { Card, CardSection, Input, CustomButton } from "./common";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Zahid"
            value={this.props.name}
            // onChangeText={text =>
            //   this.props.employeeUpdate({ prop: "name", value: text })
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            } //employeeUpdate is Defined in EmployeeActions.js
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="+55-555-5555555"
            value={this.props.phone}
            // onChangeText={text =>
            //   this.props.employeeUpdate({ prop: "phone", value: text })
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>
        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Select Shift:</Text>
          <Picker
            // style={{ flex: 1 }}
            selectedValue={this.props.shift}
            // onValueChange={day => this.props.employeeUpdate({ prop: "shift", value: day })
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            } //value:value is also correct
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <CustomButton onPress={this.onButtonPress.bind(this)}>
            Add Employee
          </CustomButton>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};
const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm; //This is registered in reducers/index.js
  return { name, phone, shift };
};
export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
