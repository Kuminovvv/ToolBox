import {observer} from "mobx-react-lite";
import {CalcPercentSeq} from "../../generic/Function/CalcPercentSeq";
import CustomInput from "../../UI/CustomInput/CustomInput";
import './InstallationsOverview.scss'
import React, {ChangeEvent, useCallback, useEffect} from "react";
import installationsOverviewStateStore from "../../../lib/store/installations-overview-state-store";
import Container from "../../UI/Container/Container";
import {useLocalStorage} from 'usehooks-ts'
import Info from "./Info/Info";
import Toaster from "../../../../core/lib/toaster/toaster";
import {toast} from "react-toastify";

export default observer(() => {
    const [isDarkTheme, setDarkTheme] = useLocalStorage<any>('installationsOverviewStateStore', {})
    const {
        numberInstallations
    } = installationsOverviewStateStore;

    useEffect(() => {
        CalcPercentSeq(Number(isDarkTheme.percent), Number(isDarkTheme.value), Number(isDarkTheme.initialValue))
    }, [isDarkTheme])
    const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            new Toaster({msg: 'Число не может быть отрицательным', type: toast.TYPE.WARNING})
        } else {
            setDarkTheme({...isDarkTheme, value: e.target.value})
        }
    }, [isDarkTheme, setDarkTheme])
    const onChangePercent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            new Toaster({msg: 'Число не может быть отрицательным', type: toast.TYPE.WARNING})
        } else {
            setDarkTheme({...isDarkTheme, percent: e.target.value})
        }
    }, [isDarkTheme, setDarkTheme])

    const onChangeInitialValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            new Toaster({msg: 'Число не может быть отрицательным', type: toast.TYPE.WARNING})
        } else {
            setDarkTheme({...isDarkTheme, initialValue: e.target.value})
        }
    }, [isDarkTheme, setDarkTheme])
    const onChangeInstallationCost = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            new Toaster({msg: 'Число не может быть отрицательным', type: toast.TYPE.WARNING})
        } else {
            setDarkTheme({...isDarkTheme, installationCost: e.target.value})
        }
    }, [isDarkTheme, setDarkTheme])
    return (
        <Container className='installations-overview' panelElement={<Info isDarkTheme={isDarkTheme}/>}>
            <div className='installations-overview__body'>
                <div className='installations-overview__form'>
                    <CustomInput title={'Начальное число'}
                                 onChange={onChangeValue}
                                 value={isDarkTheme.value} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Прогрессия'}
                                 onChange={onChangePercent}
                                 value={isDarkTheme.percent} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Количество установок'}
                                 onChange={onChangeInitialValue}
                                 value={isDarkTheme.initialValue} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Стоимость 1-ой установки'}
                                 onChange={onChangeInstallationCost}
                                 value={isDarkTheme.installationCost} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                </div>

                <div className='installations-overview__table'>
                    {
                        numberInstallations.length > 2 &&
                        numberInstallations.map((num, index) => (
                            <div key={`installations-overview-${index}`} className='mb-2'>
                                {index + 1}-й день - {num}
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
})



