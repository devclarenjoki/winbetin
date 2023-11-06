import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DropdownComponent({initialItems, onItemSelect, placeholderText}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(initialItems);

    const handleValueChange = (val) => {
        setValue(val);
        onItemSelect(val);
    }

    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={handleValueChange}
                    setItems={setItems}
                    placeholder={placeholderText}
                />
            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* <Text>Chosen fruit: {value === null ? 'none' : value}</Text> */}
            </View>
        </View>
    );
}