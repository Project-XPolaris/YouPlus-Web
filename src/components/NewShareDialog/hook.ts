import {useState} from "react";

export interface FormController<T> {
    form: T
    updateValue: (values: any) => void
}

export const useForm = <T>(init:T): FormController<T> => {
    const [form, setForm] = useState<T>(init)

    const updateValue = (values: any) => {
        console.log(values)
        setForm({
            ...form,
            ...values
        })
    }
    return {
        form, updateValue
    }
}
