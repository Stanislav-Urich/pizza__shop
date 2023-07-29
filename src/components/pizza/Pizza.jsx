import { useState } from 'react';
// import items from '../../pizza';
import st from './pizza.module.sass'

const PizzaCart = ({ title, imageUrl, price, sizes, types, id, }) => {

    const [activeSize, setActiveSize] = useState(0)
    const [activeType, setActiveType] = useState(0)
    const [count, setCount] = useState(0)

    const prod = ["тонкое", "традиционное"]

    return (


        <div className={st.cart_product}>
            <img className={st.pizzaImg} src={imageUrl} alt="pizza" />

            <h3>{title}</h3>

            <div className={st.settings}>
                <ul className={st.size__block}>
                    {types.map((el, index) => (
                        <li
                            onClick={() => setActiveType(index)}
                            className={`${st.title} ${activeType === index ? st.active : ''}`}
                            key={`${id}-type-${el}`}>{prod[el]}
                        </li>
                    ))}
                </ul>

                <ul className={st.size__block}>
                    {sizes.map((size, index) => (
                        <li
                            key={`${id}-size-${size}`}
                            onClick={() => setActiveSize(index)}
                            className={`${st.sizes} ${activeSize === index ? st.active : ''}`}>
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>

            <div className={st.price__block}>

                <span className={st.price}> {price + " грн"} </span>

                <button
                    onClick={() => setCount(count + 1)}
                    className={st.basket__btn}>

                    <img className={st.plus} src="img/plus.svg" alt="" />

                    <span>Добавить</span>

                    <div
                        className={st.counter}>
                        {count}
                    </div>
                </button>
            </div>

        </div>


    );
}

export default PizzaCart;