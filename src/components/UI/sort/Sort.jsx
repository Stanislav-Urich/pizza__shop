
import { useState } from 'react';
import vector from './img/Vector.svg'

import st from './sort.module.sass'

const Sort = ({ onClickSort, value, currentValue, changeCurrentValue }) => {
    const [active, setActive] = useState(true)
    const [sort, setSort] = useState ([
        {
            name: "популярности (ASK)",
            sortProperty: '-rating'
        },
        {
            name: "популярности (DESK)",
            sortProperty: 'rating'
        },
        {
            name: "по цене (ASK)",
            sortProperty: '-price'
        },
        {
            name: "по цене (DESK)",
            sortProperty: 'price'
        },
        {
            name: "по алфавиту (ASK)",
            sortProperty: '-name'
        },
        {
            name: "по алфавиту (DESK)",
            sortProperty: 'name'
        },
    ])
   
   
    
   const changeSort = (name, sortProperty )=> {
    
        changeCurrentValue(name)
        onClickSort(sortProperty)
        setActive(!active)
   }

    return (
        <div className={st.container}>
            <img src={vector} className={st.vector} />
            <b>Cортировка по :</b>
            <ul className={st.sort}>
                <li
                    className={st.item_active}
                    onClick={() => setActive(!active)}>
                    {currentValue}
                </li>
            </ul>

            <ul className={active ? `${st.hidden_block} ${st.disActive}` : st.hidden_block}>
                {sort.map((el, index) => (
                    <li
                        key={el.name}
                        onClick={()=>changeSort(el.name, el.sortProperty )}
                        className={st.item}>
                        {el.name}
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Sort;