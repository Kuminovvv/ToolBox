import {useState} from "react";

interface ICopyButton {
    data: number[]
    isDarkTheme: any
    className?: string
}

const CopyButton = ({data, isDarkTheme, className}: ICopyButton) => {
    const [name, setName] = useState(false)
    console.log(isDarkTheme)
    const handleCopyClick = () => {
        const preData: number[] = JSON.parse(JSON.stringify(data))
        const totalNumInstall = preData.reduce((a: number, b: number) => a + b, 0).toLocaleString('ru')
        const sum = (preData.reduce((a: number, b: number) => a + b, 0) * Number(isDarkTheme.installationCost)).toLocaleString('ru')
        const length = preData.length
        const textToCopy = preData.map((item, index) => `${index + 1}  день - ${item}`).join('\n'); // Преобразование массива в текст с переносами строки
        navigator.clipboard.writeText(`Начальное число - ${isDarkTheme.value}\nПрогрессия - ${isDarkTheme.percent}%\nСтоимость 1-ой установки - ${isDarkTheme.installationCost}\nОбщее количество установок - ${totalNumInstall} \nСумма - ${sum} ₽\nКоличество дней - ${length}\n ${textToCopy}`); // Копирование текста в буфер обмена
        setName(true)
        setTimeout(() => setName(false), 4000)

    };

    return (

        Object.keys(isDarkTheme).length !== 0 ?
            <div style={name ? {background: '#229a22', color: 'white'} : {}} className={`btn copy-button ${className}`}
                 onClick={handleCopyClick}>{name ? "Текст скопирован" : "Копировать"}</div> :
            <div/>
    );
};

export default CopyButton
