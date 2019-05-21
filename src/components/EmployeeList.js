import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CustomButton, Card, CardSection, Input, SelectBox } from './common';
import { connect } from 'react-redux';
import { loadEmployees } from "../actions";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.loadEmployees();
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>

        {Object.keys(this.props.employees).map((key, index) => (
          <Card>
            <CardSection>
              <View>
                <Text>{this.props.employees[key].name}</Text>
                <Text>{this.props.employees[key].phone}</Text>
                <Text>{this.props.employees[key].shift}</Text>
              </View>
            </CardSection>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { employees } = employeeForm;
  return { employees };
};

export default connect(
  mapStateToProps,
  { loadEmployees }
)(EmployeeList);

