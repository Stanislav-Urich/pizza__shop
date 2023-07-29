

import st from './basket.module.sass'

const Basket = () => {
    return (
        // <div className={st.basket__container}>
        //     <h2 className={st.title}>Корзина пустая 😕</h2>
        //     <p className={st.text}>Вероятней всего, вы не заказывали ещё пиццу. <br />
        //         Для того, чтобы заказать пиццу, перейди на главную страницу.
        //     </p>
        //     <img className={st.basket__img} src="/img/basket.png" alt="basket" />
        //     <button className={st.go_back}>Вернуться назад</button>
        // </div>


        <div className={st.wrapper}>
            <div className={st.basket__header}>
                <h2>
                    <img src="img/basket.svg" alt="" />
                    <i>Корзина</i>
                </h2>

                <button className={st.delete}>
                    <img className={st.delete__img} src="img/delete.svg" alt="" />
                    <span>Очистить корзину</span>
                </button>
            </div>
        </div>
    );
}

export default Basket;