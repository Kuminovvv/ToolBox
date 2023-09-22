import {makeAutoObservable} from 'mobx'

interface IHomeStateStore {

}

class HomeStateStore implements IHomeStateStore {



    constructor() {
        makeAutoObservable(this)
    }


}

export default new HomeStateStore()
