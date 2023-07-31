
import ReactPaginate from 'react-paginate';
import st from './pagination.module.sass'

const Pagination = ({onChangePage}) => {
    return (
        <>
            <ReactPaginate
                
                className={st.navigation}
                breakLabel="..."
                nextLabel=">"
                onPageChange={event=>onChangePage(event.selected+1)}
                pageRangeDisplayed={6}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination;