import React, {useCallback, useState} from 'react';
import CopyButton from "../../../UI/CopyButton/CopyButton";
import installationsOverviewStateStore from "../../../../lib/store/installations-overview-state-store";
import './Info.scss'

interface Interface {
    isDarkTheme: any
}

const Info = ({isDarkTheme}: Interface) => {
    const [state, setState] = useState<boolean>(false)

    const {numberInstallations} = installationsOverviewStateStore;

    const totalNumber = numberInstallations.reduce((a, b) => a + b, 0)

    const summ = (numberInstallations.reduce((a, b) => a + b, 0) * Number(isDarkTheme.installationCost))

    const toggle = useCallback(() => {
        setState((prevState) => !prevState);
    }, []);
    return (
        <div className='info flex'>
            {
                Object.keys(isDarkTheme).length !== 0 && (isDarkTheme.value !== '' || isDarkTheme.installationCost !== '' || isDarkTheme.initialValue !== '' || isDarkTheme.percent !== '') ?

                    <div className={`dropdown dropdown-end ${state && "dropdown-open"}`}>
                        <label onClick={toggle} className='btn'>Доп.Инф</label>
                        <ul
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='p-2'>
                                Общ.колл
                                - {isNaN(totalNumber) ? '0' : totalNumber.toLocaleString('ru')}
                            </li>
                            <li className='p-2'>
                                Сумма
                                - {isNaN(summ) ? '0' : summ.toLocaleString('ru')} ₽

                            </li>
                            <li className='p-2'>Колл.дн
                                - {numberInstallations.length}</li>
                            <CopyButton data={numberInstallations} isDarkTheme={isDarkTheme}/>
                        </ul>
                    </div>

                    : null
            }
        </div>
    );
};

export default Info;
