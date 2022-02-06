import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, button, chevron_left, header_text, next, personal, textInput } from  '../Tasks/Colors';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: backgroundColor },
  title: { textAlign: 'center', fontSize: 30 },
  cell: {
    width: 50,
    height: 60,
    lineHeight: 70,
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: textInput,
    textAlign: 'center',
    color: next
  },
  focusCell: {
    borderColor: textInput,
  },
});
const CELL_COUNT = 4;
const that = this
const Verification = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });


  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={backgroundColor} />
      <ScrollView>
        <Text
          style={{
            fontSize: 25,
            marginTop: 60,
            alignSelf: 'center',
            color: personal,

          }} >Enter verifications code</Text>
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            marginTop: 20,
            alignSelf: 'center',
            color: textInput,

          }} >The OPT code has been sent</Text>
        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            alignSelf: 'center',
            color: textInput,

          }} >to your Email</Text>
        <View style={{ padding: 60, marginTop: 30 }}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: -30 }}>
          <Text
            style={{
              fontSize: 19,
              textAlign: 'center',
              color: textInput,

            }} >Didn't get the code ?</Text>
          <TouchableOpacity><Text style={{ fontSize: 19, textDecorationLine: 'underline', color: button }}>Resend</Text></TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={
            () => {
              that.props.navigation.navigate('resetPassword')
            }
          }
          style={{
            width: width - 20,
            height: width - 305,
            backgroundColor: button,
            alignSelf: 'center',
            marginTop: 60,
            borderRadius: 15
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 13,
              color: next
            }}>Verify</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verification;
