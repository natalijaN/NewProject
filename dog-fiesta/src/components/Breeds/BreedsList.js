import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BreedSummary from './BreedSummary'
import { render } from "react-dom";
import Pagination from "react-paginating";

class BreedsList extends Component {
    state = {
        currentPage: 1
    };

    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
    };

    render() {
        const limit = 2;
        const breeds = this.props.breeds;
        const pageCount = 3;
        const total = breeds.length * limit;
        const { currentPage } = this.state;
        return (
            <div>
                <ul>
                    {breeds.map((breed, index) => (
                        <Link to={'/breed/' + breed.id} key={breed.id}>
                            {index >= ((currentPage - 1) * limit) && index < (currentPage * limit) ? <BreedSummary breed={breed} /> : null}
                        </Link>
                    ))}
                </ul>
                <div className='row center'>
                    <Pagination
                        total={total}
                        limit={limit}
                        pageCount={pageCount}
                        currentPage={currentPage}
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
                    </Pagination>
                </div>
            </div>
        );
    }
}

export default BreedsList

