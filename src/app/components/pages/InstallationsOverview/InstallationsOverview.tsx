import {observer} from "mobx-react-lite";
import {CalcPercentSeq} from "../../generic/Function/CalcPercentSeq";
import CustomInput from "../../UI/CustomInput/CustomInput";
import './InstallationsOverview.scss'
import React, {useEffect} from "react";
import installationsOverviewStateStore from "../../../lib/store/installations-overview-state-store";
import Container from "../../UI/Container/Container";
import {useLocalStorage} from 'usehooks-ts'
import Info from "./Info/Info";

export default observer(() => {
    const [isDarkTheme, setDarkTheme] = useLocalStorage<any>('installationsOverviewStateStore', {})
    const {
        numberInstallations
    } = installationsOverviewStateStore;

    useEffect(() => {
        CalcPercentSeq(Number(isDarkTheme.percent), Number(isDarkTheme.value), Number(isDarkTheme.initialValue))
    }, [isDarkTheme])

    return (
        <Container className='installations-overview' panelElement={<Info isDarkTheme={isDarkTheme}/>}>
            <div className='installations-overview__body'>
                <div className='installations-overview__form'>
                    <CustomInput title={'Начальное число'}
                                 onChange={(e) => setDarkTheme({...isDarkTheme, value: e.target.value})}
                                 value={isDarkTheme.value} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Прогрессия'}
                                 onChange={(e) => setDarkTheme({...isDarkTheme, percent: e.target.value})}
                                 value={isDarkTheme.percent} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Количество установок'}
                                 onChange={(e) => setDarkTheme({...isDarkTheme, initialValue: e.target.value})}
                                 value={isDarkTheme.initialValue} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Стоимость 1-ой установки'}
                                 onChange={(e) => setDarkTheme({...isDarkTheme, installationCost: e.target.value})}
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



