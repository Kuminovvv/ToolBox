import {makeAutoObservable} from 'mobx'

interface IInstallationsOverviewStateStore {
    value: string
    percent: string
    initialValue: string
    installationCost: string
    numberInstallations:number[]
}

class InstallationsOverviewStateStore implements IInstallationsOverviewStateStore {
    value = ''
    percent = ''
    initialValue = ''
    installationCost = ''
    numberInstallations :number[]=[]


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
    setNumberInstallations(val: number[]) {
        this.numberInstallations = val
    }
}

export default new InstallationsOverviewStateStore()
