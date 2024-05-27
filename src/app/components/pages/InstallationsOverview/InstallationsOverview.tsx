import { observer } from "mobx-react-lite";
import { CalcPercentSeq } from "../../generic/Function/CalcPercentSeq";
import CustomInput from "../../UI/CustomInput/CustomInput";
import './InstallationsOverview.scss';
import React, { ChangeEvent, useCallback, useEffect } from "react";
import installationsOverviewStateStore from "../../../lib/store/installations-overview-state-store";
import Container from "../../UI/Container/Container";
import { useLocalStorage } from 'usehooks-ts';
import Info from "./Info/Info";
import { toast } from "react-toastify";

export default observer(() => {
    const [state, setState] = useLocalStorage<any>('installationsOverviewStateStore', {});
    const { numberInstallations } = installationsOverviewStateStore;

    useEffect(() => {
        CalcPercentSeq(Number(state.percent), Number(state.value), Number(state.initialValue));
    }, [state]);

    const handleChange = useCallback((field: string) => (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value < 0) {
            toast.warning("Число не может быть отрицательным");
        } else {
            setState((prevState:any) => ({ ...prevState, [field]: value }));
        }
    }, [setState]);

    return (
        <Container className='' panelElement={<Info isDarkTheme={state} />}>
            <div className='installations-overview__body'>
                <div className='installations-overview__form'>
                    {['value', 'percent', 'initialValue', 'installationCost'].map(field => (
                        <CustomInput
                            key={field}
                            title={getTitle(field)}
                            onChange={handleChange(field)}
                            value={state[field]}
                            type="number"
                            className="input input-bordered w-full max-w-xs"
                        />
                    ))}
                </div>
                <div className='installations-overview__table'>
                    {numberInstallations.length > 2 && numberInstallations.map((num, index) => (
                        <div key={`installations-overview-${index}`} className='mb-2'>
                            {index + 1}-й день - {num}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );

    function getTitle(field: string) {
        switch (field) {
            case 'value':
                return 'Начальное число';
            case 'percent':
                return 'Прогрессия';
            case 'initialValue':
                return 'Количество установок';
            case 'installationCost':
                return 'Стоимость 1-ой установки';
            default:
                return '';
        }
    }
});
