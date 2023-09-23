interface ICopyButton {
    data: number[]
    isDarkTheme: any
}

const CopyButton = ({data, isDarkTheme}: ICopyButton) => {
    console.log(isDarkTheme)
    const handleCopyClick = () => {
        const preData: number[] = JSON.parse(JSON.stringify(data))
        const totalNumInstall = preData.reduce((a: number, b: number) => a + b, 0).toLocaleString('ru')
        const summ = (preData.reduce((a: number, b: number) => a + b, 0) * Number(isDarkTheme.installationCost)).toLocaleString('ru')
        const length = preData.length
        const textToCopy = preData.map((item, index) => `${index + 1}  день - ${item}`).join('\n'); // Преобразование массива в текст с переносами строки
        navigator.clipboard.writeText(`Общее количество установок - ${totalNumInstall} \nСумма - ${summ} ₽\nКоличество дней - ${length}\n ${textToCopy}`); // Копирование текста в буфер обмена
    };

    return (

        Object.keys(isDarkTheme).length !== 0 ? <div className='btn' onClick={handleCopyClick}>Копировать</div>:<div/>
    );
};

export default CopyButton
