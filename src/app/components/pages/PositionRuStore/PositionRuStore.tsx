import {observer} from "mobx-react-lite";

import React, {ChangeEvent, useCallback, useState} from "react";
import positionRustoreStateStore from "../../../lib/store/position-ru-store-state-store";
import CustomInput from "../../UI/CustomInput/CustomInput";
import './PositionRuStore.scss'
import Container from "../../UI/Container/Container";

export default observer(() => {
    const [valInput, setValInput] = useState('')
    const [request, setRequest] = useState('')

    const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValInput(e.target.value)
    }, [valInput, setValInput])
    const onChangeRequest = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setRequest(e.target.value)
    }, [request, setRequest])

    const mainData = positionRustoreStateStore.listApps.filter((val: any) =>
        val.appName.toLowerCase().startsWith(valInput.toLowerCase())
    )
    const onClickBtn = () => (
        positionRustoreStateStore.positionRuStore(request)
    )

    return (
        <Container >
            <div className='position-ru-store__form'>
                <CustomInput title={'Название запроса'}
                             onChange={onChangeRequest}
                             value={request}
                             className="input input-bordered w-full max-w-xs"/>
                <CustomInput title={'Название приложения'}
                             onChange={onChangeValue}
                             value={valInput}
                             className="input input-bordered w-full max-w-xs"/>
                <button onClick={onClickBtn} className="btn">Найти</button>
            </div>

            <br/>
            <div className="overflow-x-auto">
                {positionRustoreStateStore.listApps.length !== 0 &&
                    <table className="table  table-pin-rows table-pin-cols">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Название</th>
                        </tr>
                        </thead>
                        {
                            mainData.map((item: any) => (

                                <tbody key={`position-ru-store-${item.appName}-${item.positionRate}`}>
                                <tr>

                                    <td>
                                        {item.positionRate}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.icon}
                                                        alt="Avatar Tailwind CSS Component"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">   {item.appName}</div>
                                                <div className="text-sm opacity-50">{request}</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            ))
                        }
                    </table>
                }
            </div>
        </Container>
    )
})



