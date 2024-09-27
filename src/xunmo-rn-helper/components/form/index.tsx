import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from "react";

type XmFormData = {
    update?: () => void
    dataCache: Record<string, any>
}
const FormContext = createContext<XmFormData>({
    dataCache: {}
})
type FormProps = {
    form: any
} & PropsWithChildren


function Form(props: FormProps) {

    const [formData, setFormData] = useState<any>({})


    function updateFormData() {

    }

    return (
        <FormContext.Provider value={{
            dataCache: formData
        }} >
            {props.children}
        </FormContext.Provider>
    )
}



function useForm(formName: string) {
    const proxy = useMemo(() => {
        return new Proxy<any>({}, {
            set(target, p, newValue) {
                target[p] = newValue
                return true
            },
        })
    }, [formName])
}

const form = useForm("name")


