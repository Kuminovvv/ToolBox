import routes from "../routes";

export const NavbarData = [
    {
        to: routes.HOME,
        title: 'Главная'
    },
    {
        to: routes.INSTALLATIONS_OVERVIEW,
        title: 'Обзор установок',
        desc: 'Рассчитывает количество установок на день, общие количество установок, и сумму, которая будет потрачена на установки'
    },
    {
        to: routes.POSITION_RUSTORE,
        title: 'Позиция в RuStore',
        desc: 'Узнать позицию по определенному запросу'
    },
]
