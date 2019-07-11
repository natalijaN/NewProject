import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InterestSummary from './InterestSummary';
import Pagination from "react-paginating";

class InterestList extends Component {
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
        const interests = this.props.interests;
        const pageCount = 3;
        const total = interests.length * limit;
        const { currentPage } = this.state;
        return (
            <div>
                <ul>
                    {interests.map((interest, index) => (
                        <Link to={'/interest/' + interest.id} key={interest.id}>
                            {index >= ((currentPage - 1) * limit) && index < (currentPage * limit) ? <InterestSummary interest={interest} /> : null}
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
                                        })}>
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
                                            })}>
                                            {">"}
                                        </button>
                                    )}
                                    <button className='btn green'
                                        {...getPageItemProps({
                                            pageValue: totalPages,
                                            onPageChange: this.handlePageChange
                                        })}>
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

export default InterestList
