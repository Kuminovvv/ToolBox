import {makeAutoObservable} from 'mobx'

interface ILoansStateStore {
}

class AppStateStore implements ILoansStateStore {


    constructor() {
        makeAutoObservable(this)
    }


}

export default new AppStateStore()
