import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class EmployeeCreateForm extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder='Amol'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder='0xx-xxx-xxx'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column'}} >
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
            style={{flex: 1}}
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
          {this.renderButton()}
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

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreateForm);