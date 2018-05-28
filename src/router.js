import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreateForm from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
       <Stack key='root'>
         <Scene
           key='login'
           component={LoginForm}
           title='Please Login'
           backTitle=' '
         />
         <Scene
           key='employeeList'
           component={EmployeeList}
           title='Employees'
           rightTitle='Add'
           onRight={() => Actions.employeeCreate()}
         />
         <Scene
           key='employeeCreate'
           title='Create Employee'
           component={EmployeeCreateForm}
         />
       </Stack>
     </Router>
  );
};

export default RouterComponent;
