import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        currentPage: 1
    };

    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
        console.log(this.state)
    };
    render() {
        return (
            <div>
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
                                            backgroundColor: "#555",
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
            </div>
        )
    }
}

export default Pagination
