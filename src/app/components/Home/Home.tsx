import {observer} from "mobx-react-lite"
import './Home.scss'
import {NavbarData} from "../../lib/projectData/NavbarData";
import {Link} from "react-router-dom";
import appStateStore from "../../lib/store/app-state-store";
import {useEffect} from "react";

export default observer(() => {

    useEffect(() => {
        appStateStore.setStateURL(window.location.pathname)
    }, [])

    return (
        <div className='home container mx-auto pt-8'>
           <div className='home__cards'>
               {
                   NavbarData.map((dataItem,index) => (
                       index!==0&&
                       <Link key={`home-${index}-card`} to={dataItem.to} className='home__card' onClick={() => appStateStore.setStateURL(dataItem.to)}>
                           <div className='home__title'>
                               {dataItem.title}
                           </div>
                           <div className='home__desc'>
                               {dataItem.desc}
                           </div>
                       </Link>
                   ))
               }
           </div>
        </div>
    )
})
