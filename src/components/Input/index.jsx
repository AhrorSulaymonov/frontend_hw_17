import React from 'react';
import { InputWrapper } from './Input.styles';

function Input(props) {
    return (
        <InputWrapper>
            <input {...props} />
        </InputWrapper>
    );
}

export default Input;