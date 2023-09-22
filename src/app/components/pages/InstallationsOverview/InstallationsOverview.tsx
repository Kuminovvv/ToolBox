import {observer} from "mobx-react-lite";
import {CalcPercentSeq} from "../../generic/Function/CalcPercentSeq";
import CustomInput from "../../UI/CustomInput/CustomInput";
import './InstallationsOverview.scss'

import {useEffect} from "react";
import installationsOverviewStateStore from "../../../lib/store/installations-overview-state-store";

export default observer(() => {
    const {
        value,
        percent,
        initialValue,
        installationCost,
        numberInstallations
    } = installationsOverviewStateStore;

    useEffect(() => {
        CalcPercentSeq(Number(percent), Number(value), Number(initialValue))
    }, [value, percent, initialValue, installationCost])

    return (
        <div className='installations-overview container mx-auto p-4'>
            <div className='installations-overview__body'>
                <div className='installations-overview__form'>
                    <CustomInput title={'Начальное число'}
                                 onChange={(e) => installationsOverviewStateStore.setValue(e.target.value)}
                                 value={value} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Процент'}
                                 onChange={(e) => installationsOverviewStateStore.setPercent(e.target.value)}
                                 value={percent} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Количество инсталов'}
                                 onChange={(e) => installationsOverviewStateStore.setInitialValue(e.target.value)}
                                 value={initialValue} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Стоимость 1-го инстала'}
                                 onChange={(e) => installationsOverviewStateStore.setInstallationCost(e.target.value)}
                                 value={installationCost} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                </div>
                <div className='installations-overview__info'>
                    <div className='installations-overview__total-number'>
                        Общее количество
                        - {numberInstallations.reduce((a, b) => a + b, 0).toLocaleString('ru')}
                    </div>
                    <div className='installations-overview__sum'>
                        Сумма
                        - {(numberInstallations.reduce((a, b) => a + b, 0) * Number(installationCost)).toLocaleString('ru')} ₽
                    </div>
                </div>
                {
                    numberInstallations.length > 2 &&
                    numberInstallations.map((num, index) => (
                        <div key={`installations-overview-${index}`} className='mb-2'>
                            {index + 1} День - {num}
                        </div>
                    ))
                }
            </div>
        </div>
    )
})
