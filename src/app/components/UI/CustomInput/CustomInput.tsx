import {observer} from "mobx-react-lite"
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import './CustomInput.scss'

export default observer(({
                             title,
                             onChange,
                             value,
                             placeholder,
                             type
                         }: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {

    return (
        <div className='custom-input w-full '>
            <div className='custom-input__title'>{title}</div>
            <input  onChange={onChange} value={value} type={type?type:'text'}
                   placeholder={placeholder ? placeholder : title} className="input input-bordered w-full"/>

        </div>
    )
})
