import React from 'react';
import { useField, Field } from 'formik';
import './TextField.css';


export const TextField = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex relative my-2">
            <Field type={props.type} id={field.name} name={field.name} className="block px-2.5 pb-2.5 pt-4 w-full text-[13px] text-gray-600 bg-gray-50  border focus:outline-none focus:border-gray-400  appearance-none  peer" placeholder=" " onBlur={e => {
                field.onBlur(e);
                if (field.name == "email_or_phone")
                    console.log("handleblur", field.name);
            }} />
            <label htmlFor={field.name} className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-[0.8] top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.8] peer-focus:-translate-y-4">{props.placeHolder}</label>
            <div className="icons">
                {meta.touched && meta.error ?
                    <div className="icon_1">
                        <i className="fa-sharp fa-regular fa-circle-xmark"></i>
                    </div>
                    :
                    <div className="icon_2">
                        <i className="fa-sharp fa-regular fa-circle-check"></i>
                    </div>
                }
            </div>
        </div>
    )
}


