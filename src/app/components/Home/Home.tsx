import {observer} from "mobx-react-lite"
import './Home.scss'
import {NavbarData} from "../../lib/projectData/NavbarData";
import {Link} from "react-router-dom";
import Container from "../UI/Container/Container";

export default observer(() => {


    return (
        <Container className='home'>
            <div className='home__cards'>
                {
                    NavbarData.map((dataItem, index) => (
                        index !== 0 &&
                        <Link key={`home-${index}-card`} to={dataItem.to} className='home__card'>
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
        </Container>
    )
})
