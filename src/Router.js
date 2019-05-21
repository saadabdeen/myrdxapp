import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import { Actions } from "react-native-router-flux";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        rightTitle="Add"
                        onRight={() => {
                            Actions.employeeCreate();
                        }}
                        component={EmployeeList}
                        title="Employees"
                    />
                    <Scene
                        key="employeeCreate"
                        title="Add Employee"
                        component={EmployeeCreate}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;