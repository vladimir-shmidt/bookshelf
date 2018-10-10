import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BooksAPI from '../booksapi'
import State from '../State';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BookDetails from '../DetailsComponent/Details';

let Books = observer(class Books extends Component {
    constructor(props){
        super(props);

        this.api = new BooksAPI('http://localhost:5000');

        this.onTableChange.bind(this.onTableChange);
    }

    componentDidMount() {
        this.onTableChange({ page: State.BooksStore.Page, sizePerPage: State.BooksStore.Count });
    }

    priceFormater (authors) {
        return authors ? authors.map((author) => `${author.Name} ${author.Surname};`) : '';
    }

    onSelect(row, isSelect, rowIndex, e) {
        State.CurrentBook = row;
    }

    columns = [{
        dataField: 'Title',
        text: 'Title',
      }, {
        dataField: 'ISBN',
        text: 'ISBN'
      }, {
          dataField: 'Authors',
          text: 'Authors',
          formatter: this.priceFormater
      }, {
          dataField: 'Id',
          hidden: true
      }];

    onTableChange (pagination) {
        this.api.getBooks(pagination.page, pagination.sizePerPage).then(json => {
            State.BooksStore.Books = json.Data;
            State.BooksStore.Page = pagination.page;
            State.BooksStore.SearchText = pagination.searchText;
            State.BooksStore.Count = pagination.sizePerPage;
            State.BooksStore.SortField = pagination.sortField;
            State.BooksStore.SordOrder = pagination.sortOrder;
            State.BooksStore.Total = json.Total;
        })
        .catch();
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <button onClick={() => this.api.getBook(1).then(json => State.Book = json)}>get book 1</button>
                    <p>{JSON.stringify(State.Book)}</p>
                    <BootstrapTable
                        remote
                        keyField="Id"
                        columns={this.columns} 
                        data={ State.BooksStore.Books }
                        pagination={ paginationFactory({ page: State.BooksStore.Page, sizePerPage: State.BooksStore.Count, totalSize: State.BooksStore.Total, sizePerPageList: [5, 10, 25, 30, 50] }) }
                        onTableChange={ (page, pagination) => this.onTableChange(pagination) }
                        selectRow = {{
                            mode: 'radio',
                            clickToSelect: true,
                            hideSelectColumn: true,
                            bgColor: '#00BFFF',
                            onSelect: this.onSelect
                        }}
                        striped
                        hover
                        condensed
                        noDataIndication={ State.Request.InProgress ? "loading..." : "no data" }
                    />
                </div>
                <div className="col">
                    <BookDetails />
                </div>
            </div>

        );
    }
});

export default Books;