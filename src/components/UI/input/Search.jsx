import { useContext } from 'react';
import st from './search.module.sass'

const Search = ({ searchValue, setSearhValue }) => {

    // const value = useContext()

    return (
        <div className={st.input_wrapper}>
            <img
                className={st.search__img}
                src="https://cdn.icon-icons.com/icons2/1129/PNG/512/searchmagnifierinterfacesymbol_79894.png" alt="" />
            <input
                value={searchValue}
                onChange={(event) => setSearhValue(event.target.value)}
                className={st.search}
                type="text" placeholder="Поиск..." />
            {searchValue &&
                <img
                    onClick={()=>setSearhValue('')}
                    className={st.clear}
                    src="https://cdn.icon-icons.com/icons2/3553/PNG/512/cancel_remove_delete_del_close_ecommerce_icon_224955.png" alt="" />}
        </div>

    );
}

export default Search;