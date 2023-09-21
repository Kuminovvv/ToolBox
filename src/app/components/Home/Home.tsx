import {observer} from "mobx-react-lite"
import './Home.scss'
import homeStateStore from "../../lib/store/home-state-store";
import CustomInput from "../UI/CustomInput/CustomInput";
import {CalcPercentSeq} from "../generic/Function/CalcPercentSeq";
import Navbar from "../../../core/components/UI/Navbar/Navbar";

export default observer(() => {

    return (
        <div className='home'>
            <Navbar/>
            <div className='home__body'>
                <div className='home__form'>
                    <CustomInput title={'Начальное число'} onChange={(e) => homeStateStore.setValue(e.target.value)}
                                 value={homeStateStore.value} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Процент'} onChange={(e) => homeStateStore.setPercent(e.target.value)}
                                 value={homeStateStore.percent} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Количество инсталов'}
                                 onChange={(e) => homeStateStore.setInitialValue(e.target.value)}
                                 value={homeStateStore.initialValue} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                    <CustomInput title={'Стоимость 1-го инстала'}
                                 onChange={(e) => homeStateStore.setInstallationCost(e.target.value)}
                                 value={homeStateStore.installationCost} type="number"
                                 className="input input-bordered w-full max-w-xs"/>
                </div>
                <div className='home__info'>
                    <div className='home__total-number'>
                        Общее количество
                        - {CalcPercentSeq(Number(homeStateStore.percent), Number(homeStateStore.value), Number(homeStateStore.initialValue)).reduce((a, b) => a + b, 0).toLocaleString('ru')}
                    </div>
                    <div className='home__sum'>
                        Сумма
                        - {(CalcPercentSeq(Number(homeStateStore.percent), Number(homeStateStore.value), Number(homeStateStore.initialValue)).reduce((a, b) => a + b, 0) * Number(homeStateStore.installationCost)).toLocaleString('ru')} ₽
                    </div>
                </div>
                {
                    CalcPercentSeq(Number(homeStateStore.percent), Number(homeStateStore.value), Number(homeStateStore.initialValue)).map((num, index) => (
                        <div key={`home-${index}`} className='mb-2'>
                            {index + 1} День - {num}
                        </div>
                    ))
                }
            </div>
        </div>
    )
})
