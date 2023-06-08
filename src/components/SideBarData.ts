import {RoutesPaths} from "../routes/routes";
import HomeIcon from './../assets/Home.png'
import SearchIcon from './../assets/Search.png'
import TableIcon from './../assets/Tables.png'
import CalendarIcon from './../assets/Calendar.png'
import MapsIcon from './../assets/Maps.png'
import WidgetsIcon from './../assets/Widgets.png'

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
