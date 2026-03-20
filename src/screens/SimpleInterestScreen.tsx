import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { calculateSimpleInterest } from '../utils/interest'
import { convertToYears } from '../utils/convertToYears'
import TimeUnitPicker from '../components/TimeUnitPicker'
import { FormType } from '../types'

const defaultState : FormType = {
  principal: 100,
  time: 1,
  timeUnit: 'year',
  interestRate: 12
}

const SimpleInterestScreen = () => {

  const [form, setForm] = useState(defaultState)

  const handleChange = (key: keyof FormType, value: string | number) =>
  {
    setForm({
      ...form,
      [key]: key === 'timeUnit' ? value : Number(value)
    });
  };

  const interest = calculateSimpleInterest(
    form.principal,
    form.interestRate,
    convertToYears(form.time, form.timeUnit)
  )

  const total = form.principal + interest

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Simple Interest</Text>

      <Text style={styles.label}>Principal</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(form.principal)}
        onChangeText={(value) => handleChange('principal', value)}
      />

      <Text style={styles.label}>Time ({form.timeUnit})</Text>
      <TimeUnitPicker form={form} handleChange={handleChange}  />
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(form.time)}
        onChangeText={(value) => handleChange('time', value)}
      />

      <Text style={styles.label}>Interest Rate (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(form.interestRate)}
        onChangeText={(value) => handleChange('interestRate', value)}
      />

      <View style={{ marginTop: 20 }}>
        <Text style={styles.result}>Interest: ₹ {interest}</Text>
        <Text style={styles.result}>Total: ₹ {total}</Text>
      </View>

    </View>
  )
}

export default SimpleInterestScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#355872',
    flex: 1
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#F7F8F0',
    marginBottom: 10
  },
  label: {
    color: '#F7F8F0',
    marginTop: 10
  },
  input: {
    backgroundColor: '#F7F8F0',
    borderRadius: 5,
    padding: 10,
    marginTop: 5
  },
  result: {
    color: '#F7F8F0',
    fontSize: 16,
    marginTop: 5
  }
})