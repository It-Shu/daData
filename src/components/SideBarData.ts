import {RoutesPaths} from "../routes/routes";
import HomeIcon from '../assets/home.svg'
import SearchIcon from './../assets/search.svg'
import CalendarIcon from './../assets/calendar.svg'
import MapsIcon from './../assets/maps.svg'
import WidgetsIcon from './../assets/widget.svg'

import TableIcon from './../assets/tables.svg'

type SideBarDataType = {
    title: string
    path: string
    icon: string
}

export const SidebarData: SideBarDataType[] = [
    {
        title: 'Главная',
        path: RoutesPaths.News,
        icon: HomeIcon
    },
    {
        title: 'Поиск адресов',
        path: RoutesPaths.SearchAddress,
        icon: SearchIcon
    },
    {
        title: 'Таблицы',
        path: RoutesPaths.Tables,
        icon: TableIcon
    },
    {
        title: 'Календарь',
        path: RoutesPaths.Calendar,
        icon: CalendarIcon
    },
    {
        title: 'Карты',
        path: RoutesPaths.Maps,
        icon: MapsIcon
    },
    {
        title: 'Виджеты',
        path: RoutesPaths.Widgets,
        icon: WidgetsIcon
    },
    ]
