import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { TimeUnitPickerProps } from '../types'

const TimeUnitPicker = ({ form, handleChange }: TimeUnitPickerProps) => {
  return (
    <Picker
        selectedValue={form.timeUnit}
        onValueChange={ (value)=> {
            // console.log(value);
            handleChange('timeUnit', value)
        } }
    >
        <Picker.Item label='Year' value="year" />
        <Picker.Item label='Month' value="month" />
        <Picker.Item label='Week' value="week" />
        <Picker.Item label='Day' value="day" />
    </Picker>
  )
}

export default TimeUnitPicker