import React from 'react';
import CopyButton from "../../../UI/CopyButton/CopyButton";
import installationsOverviewStateStore from "../../../../lib/store/installations-overview-state-store";
import './Info.scss'

interface Interface {
    isDarkTheme: any
}

const Info = ({isDarkTheme}: Interface) => {
    const {
        numberInstallations
    } = installationsOverviewStateStore;
    const totalNumber = numberInstallations.reduce((a, b) => a + b, 0)
    const summ = (numberInstallations.reduce((a, b) => a + b, 0) * Number(isDarkTheme.installationCost))
    return (
        <div className='info flex'>
            {
                Object.keys(isDarkTheme).length !== 0 && (isDarkTheme.value !== '' || isDarkTheme.installationCost !== '' || isDarkTheme.initialValue !== '' || isDarkTheme.percent !== '') ?
                    <>
                        <div className='info__item badge badge-neutral'>
                            Общее количество
                            - {isNaN(totalNumber) ? '0' : totalNumber.toLocaleString('ru')}
                        </div>
                        <div className='info__item badge badge-neutral'>
                            Сумма
                            - {isNaN(summ) ? '0' : summ.toLocaleString('ru')} ₽
                        </div>
                        <div className='info__item badge badge-neutral'>
                            Колличество дней
                            - {numberInstallations.length}
                        </div>
                        <CopyButton data={numberInstallations} isDarkTheme={isDarkTheme}/>
                    </>
                    : null
            }
        </div>
    );
};

export default Info;
