import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );


    useEffect(() => {
      setFormState(initialForm)
    }, [initialForm])
    
    // asigna el estado
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    // resetea el estado
    const onResetForm = () => {
        setFormState( initialForm );
    }

   
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}