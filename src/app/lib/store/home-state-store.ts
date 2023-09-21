import {makeAutoObservable} from 'mobx'

interface IHomeStateStore {
    value: string
    percent: string
    initialValue: string
    installationCost: string
}

class HomeStateStore implements IHomeStateStore {
    value = ''
    percent = ''
    initialValue = ''
    installationCost = ''


    constructor() {
        makeAutoObservable(this)
    }

    setValue(val: string) {
        this.value = val
    }
    setPercent(val: string) {
        this.percent = val
    }
    setInitialValue(val: string) {
        this.initialValue = val
    }
    setInstallationCost(val: string) {
        this.installationCost = val
    }
}

export default new HomeStateStore()
