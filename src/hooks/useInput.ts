import React, { useState } from "react"

export const useTextInput = () => {
    const [value, setValue] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)   
    }

    return [value, onChange] as const
}

export const useNumberInput = () => {
    const [value, setValue] = useState<number>(0)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))   
    }

    return [value, onChange] as const
}

export const useDateInput = () => {
    const [value, setValue] = useState<Date>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(new Date(e.target.value))
    }

    return [value, onChange] as const
}