import axios from "axios";
import {toast} from "react-toastify";

export default {
    async getPositionRuStore(request: string) {
        const positionSize = 500;
        const url = `https://backapi.rustore.ru/applicationData/apps?query=${request}&pageSize=${positionSize}`;
        const id = toast.loading("Данные загружаются...");

        try {
            const res = await axios.get(url);
            toast.update(id, {
                render: "Запрос выполнился",
                type: "success",
                isLoading: false,
                closeButton: true,
                autoClose: 5000
            });
            return res.data.body.content;
        } catch {
            toast.update(id, {render: "Запрос не удался", type: "warning", isLoading: false});
            return null;
        }
    }


}
