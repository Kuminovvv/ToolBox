import {makeAutoObservable} from 'mobx'

interface ILoansStateStore {
    stateURL: string
}

class AppStateStore implements ILoansStateStore {
    stateURL = ''

    constructor() {
        makeAutoObservable(this)
    }

    setStateURL(val: string) {
        this.stateURL = val
    }

}

export default new AppStateStore()
