import React from 'react';
import { Image } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={styles.headerStyle}>
      <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          titleStyle={styles.headerTitleStyle}
          title="Login"
          initial
        />
        </Scene>
        <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          titleStyle={styles.headerTitleStyle}
          title="Employee List"
          rightTitle={<Image
            source={require('./assets/images/add_contact.png')}
          />}
          onRight={() => { Actions.employeeCreate(); }}
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          titleStyle={styles.headerTitleStyle}
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          titleStyle={styles.headerTitleStyle}
          title="Edit Employee"
        />
        <Scene
          key="employeeDetail"
          component={EmployeeDetail}
          titleStyle={styles.headerTitleStyle}
          title="Employee Detail"
        />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  headerStyle: {
    borderBottomWidth: 1,
    borderColor: '#007aff',
    shadowColor: '#007aff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  headerTitleStyle: {
    alignSelf: 'center',
   fontSize: 30,
   color: '#007aff'
}
};

export default RouterComponent;
