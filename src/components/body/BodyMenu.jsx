import PizzaCart from "../pizza/Pizza";
import Skeleton from "../skeleton/Skeleton";
import Categories from '../UI/categories/Categories'
import Sort from "../UI/sort/Sort";

import st from './body.module.sass'
import { useState, useEffect } from "react";

const BodyMenu = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [categoryType, setCategoryType] = useState(0)
    const [currentSort, setCurrentSort] = useState('популярности')
    const [sortType, setSortType] = useState('')

    console.log(sortType);

    const order = sortType.startsWith('-') ? 'desc' : 'asc';
    const sortBy = sortType.replace('-', '');

    useEffect(() => {
        setLoading(true)
        fetch(`https://64bff1b70d8e251fd111baab.mockapi.io/items__pizza?${
            categoryType > 0 ? `category=${categoryType}` : ''
            }&sortBy=${sortBy}&order=${order}`)
            
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
    }, [categoryType, sortType]);


    return (

        <>
            <div className={st.category__container}>
                <Categories
                    value={categoryType}
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
                    ? [... new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => (<PizzaCart key={obj.id} {...obj} />))
                }

            </div>
            <button >Next Page</button>

        </>
    )
}

export default BodyMenu;