import {useState} from 'react';
export const useForm = (InitialValues) => {
    const[values , setValues] = useState(InitialValues);
    return [values , e => {
        setValues({
            ...values, [e.target.name] : e.target.value
        });
    }];
} 