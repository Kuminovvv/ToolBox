import axios from "axios";
import Toaster from "../../../core/lib/toaster/toaster";
import {toast} from "react-toastify";

export default {
    async getPositionRuStore(request: string) {
        const positionSize = 500;

        let result;
        const url = `https://backapi.rustore.ru/applicationData/apps?query=${request}&pageSize=${positionSize}`;

        // Сообщение о начале запроса
        new Toaster({msg: 'Запрос выполняется...', type: toast.TYPE.INFO});

        await axios
            .get(url)
            .then((res) => {
                result = res.data.body.content;
            })
            .catch(() => {
                new Toaster({msg: 'Регион не определён', type: toast.TYPE.ERROR});
            })
            .finally(() => {
                new Toaster({msg: 'Запрос завершен', type: toast.TYPE.SUCCESS});
            });

        return result;
    }


}
