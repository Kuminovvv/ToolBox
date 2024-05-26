import {makeAutoObservable} from 'mobx'
import services from "../services/services";

interface IPositionRuStore {
    listApps: any

}

class PositionRuStore implements IPositionRuStore {
    listApps: any = []

    constructor() {
        makeAutoObservable(this)
    }

    setListApps(val: any) {
        this.listApps = val
    }

    positionRuStore(request:string) {
        services.getPositionRuStore(request)
            .then((res: any) => {
                res.map((item: any, index: number) => (
                    item['positionRate'] = index + 1
                ))
                this.setListApps(res)
            })
    }

}

export default new PositionRuStore()
