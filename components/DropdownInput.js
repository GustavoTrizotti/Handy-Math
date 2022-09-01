import { Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

export default function DropdownInput() {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        {label: 'Student', value: 'student'},
        {label: 'Teacher', value: 'teacher'},
        {label: 'Tutor', value: 'tutor'},
    ]);

    return (
      <View>
        <DropDownPicker 
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            
            disableBorderRadius={true}
            dropDownContainerStyle={{borderColor: '#ddd'}}
            placeholderStyle={{color: '#fff'}}
            arrowIconStyle={{color: '#fff'}}
            zIndex={1000}
            containerStyle={{
                width: "80%",
                alignSelf: "center",
            }}
            style={{
                borderColor: 'transparent',
                backgroundColor: '#444',
                elevation: 3,
                borderRadius: 5,
            }}
            labelStyle={{
                color: '#fff',
            }}
            props = {{
                activeOpacity: 0.9,
            }}
        />
      </View>
    )
}