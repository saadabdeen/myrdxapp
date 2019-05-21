import React from "react";
import { View, Picker, Text} from "react-native";

const SelectBox = ({
  label,
  selectedValue,
  onValueChange,
  children
}) => {
  // Destructure the Sytles Object
  const { pickerStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Picker
       style={pickerStyle}
       selectedValue={selectedValue}
       onValueChange={onValueChange}
      >
        {children}
      </Picker>
    </View>
  );
};

const styles = {
  pickerStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { SelectBox };