import React from 'react';
import InputField from './InputField';

interface TextFieldProps {
    value: string;
    onChange: (value: string) => void;
    title?: string;
    placeholder?: string;
    type?: string;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange, title, placeholder, type = "text" }) => {
    return (
        <InputField value={value} onChange={onChange} title={title} placeholder={placeholder} type={type}>
            {/* If for some reason we need to pass some component here (we shouldn't) */}
        </InputField>
    );
};

export default TextField;
