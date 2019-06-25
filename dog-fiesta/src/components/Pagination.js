import React, { Component } from 'react'
import Pagination from "react-paginating";

class Page extends Component {
    state = {
        currentPage: 1
    };

    handlePageChange = (page, e) => {
        console.log(page)
        this.setState({
            currentPage: page
        });
    };
    render() {
        const { total, limit, pageCount } = this.props;
        return (
            <Pagination
                total={total}
                limit={limit}
                pageCount={pageCount}
                currentPage={this.state.currentPage}
            >
                {({
                    pages,
                    currentPage,
                    hasNextPage,
                    hasPreviousPage,
                    previousPage,
                    nextPage,
                    totalPages,
                    getPageItemProps
                }) => (
                        <div>
                            <button className='btn green'
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                Прва
                            </button>
                            {hasPreviousPage && (
                                <button className='btn green'
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {"<"}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                }
                                return (
                                    <button className='btn green'
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: this.handlePageChange
                                        })}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {hasNextPage && (
                                <button className='btn green'
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {">"}
                                </button>
                            )}

                            <button className='btn green'
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                Последна
                            </button>
                        </div>
                    )}
            </Pagination>
        )
    }
}
export default Page
