
import { useState } from 'react';
import st from './categories.module.sass'

const Categories = ({onClickCategory}) => {

    const [active, setActive] = useState(0)
    
    const items = ['Все', 'Мясные', 'Вегетаринские', 'Гриль', 'Острые']


    const change = (index)=> {
        onClickCategory(index)
        setActive(index)

    }

    return (
        <div className={st.container}>
            <ul className={st.nav_category}>
                {items.map((item, index) => (
                    <li
                        onClick={()=>change(index)}
                        key={item}
                        className={`${st.nav__menu} ${active === index ? st.active : ''}`}> {item}
                    </li>
                ))}
            </ul>
        
        </div>
    );
}

export default Categories;