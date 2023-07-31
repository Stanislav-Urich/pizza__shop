import Pagination from "../../pagination/Pagination";
import PizzaCart from "../pizza/Pizza";
import Skeleton from "../skeleton/Skeleton";
import Categories from '../UI/categories/Categories'
import Sort from "../UI/sort/Sort";

import st from './body.module.sass'
import { useState, useEffect } from "react";

const BodyMenu = ({searchValue}) => {
//                                      С_О_С_Т_О_Я_Н_И_Я
    const [items, setItems] = useState([])                                 // состояние товаров, содержит массив объектов с товарами, которые приходят с бекэнда        
    const [loading, setLoading] = useState(true)                           // для переключения между скелетоном и загруженным товаром
    const [categoryType, setCategoryType] = useState(0)                    // для сортировки по категориям
    const [currentSort, setCurrentSort] = useState('популярности')         // для работы с меню сортировки
    const [sortType, setSortType] = useState('')                           // состояние сортировки, (для изменения отображения по сортировке )                        
    const [currentPage, setCurrentPage] = useState(1)                      // отвечает за текущее состояние страницы и переключение между ними
//                                       КОНСТАНТЫ
    const order = sortType.startsWith('-') ? 'desc' : 'asc';
    const sortBy = sortType.replace('-', '');
    const category = categoryType > 0 ? `category=${categoryType}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';


    

    useEffect(() => {
        setLoading(true)
        fetch(`https://64bff1b70d8e251fd111baab.mockapi.io/items__pizza?page=${currentPage}&limit=8&${
            
            category}&sortBy=${sortBy}&order=${order}${search}`)
            
            .then((res) => res.json())
            .then((arr) => {
                // const limitedItems = arr.slice(0, 8);
                setItems(arr)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            })
        window.scrollTo(0, 0)
    }, [categoryType, sortType, searchValue, currentPage ]);

    // console.log(searchValue);
    // console.log(search);


    //       ___________________________РЕАЛИЗАЦИЯ ПОИСКА ПО СТАТИЧНОМУ МАССИВУ__________________________
    // const pizzaItems = items.filter( (obj) => {
    //     if (obj.title.toLowerCase().includes(serchValue)) {
    //        return true
    //     } else {
    //       return  false
    //     }
    // }).map((obj) => <PizzaCart key={obj.id} {...obj} />)

    const pizzaItems = items.map((obj) => <PizzaCart key={obj.id} {...obj} />)
    
    const skeleton = [... new Array(8)].map((_, index) => <Skeleton key={index} />)


    return (

        <>
            <div className={st.category__container}>
                <Categories
                    onClickCategory={(index) => setCategoryType(index)} />

                <Sort
                    currentValue={currentSort}
                    changeCurrentValue={setCurrentSort}
                    value={sortType}
                    onClickSort={setSortType} />
            </div>

            <h1 >Все пиццы</h1>

            <div className={st.container}>

                {loading
                    ? skeleton
                    : pizzaItems 
                }

            </div>
            <Pagination onChangePage={(number)=>setCurrentPage(number)} />

        </>
    )
}

export default BodyMenu;