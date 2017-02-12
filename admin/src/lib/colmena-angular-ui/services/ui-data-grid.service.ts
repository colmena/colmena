import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of'

@Injectable()
export class UiDataGridService {

  private _columns = []

  get columns() {
    return this._columns
  }

  set columns(columns) {
    this._columns = columns
  }

  get columnFields() {
    return this._columns.map(column => column.field)
  }


  private _sorting = {}

  get columnSorting() {
    return this._sorting
  }

  private _filters: any = {
    where: {},
    limit: 20,
    offset: 0,
    order: ''
  }

  private _page = 1


  public getFilters() {
    return this._filters
  }

  public getWhereFilters() {
    return this._filters.where
  }

  getItems() {
    return Observable.of([])
  }

  getItemCount() {
    return Observable.of([])
  }

  get currentPage() {
    return this._page
  }

  get limit() {
    return this._filters.limit
  }


  set limit(limit) {
    this._filters.limit = limit
  }

  set offset(offset) {
    this._filters.offset = offset
  }

  set search(query) {
    if (!query || query === '') {
      this._filters.where = {}
      return
    }

    // The query is an 'and' query
    const andQuery = []

    // Search for each word separated by a space
    query.split(' ').forEach(queryPart => {

      // Each word has an 'or' query
      const orQuery = []

      // Fuzzy match the word on all of the fields
      this.columnFields.forEach(field => {
        orQuery.push({ [field]: { like: queryPart, options: 'i' } })
      })

      // Add the 'or' query as a segment of the 'and' query
      andQuery.push({
        or: orQuery
      })
    })
    //
    // Update the filters
    this._filters.where = {
      and: andQuery
    }
  }

  set order(fieldName) {
    // Clear the sorting if the field name is undefined
    if (typeof fieldName === 'undefined') {
      this._sorting = {}
      this._filters.order = ''
      return
    }

    // Delete the sorting if it's not on the current field
    // Removing this method allows sorting on multiple fields :)
    for (const field in this._sorting) {
      if (field !== fieldName) {
        delete this._sorting[ field ]
      }
    }

    // Determine the sorting order (asc/desc/not sorted)
    if (typeof this._sorting[ fieldName ] === 'undefined') {
      this._sorting[ fieldName ] = 'asc'
    }
    else if (this._sorting[ fieldName ] === 'asc') {
      this._sorting[ fieldName ] = 'desc'
    }
    else if (this._sorting[ fieldName ] === 'desc') {
      this._filters.order = ''
      delete this._sorting[ fieldName ]
    }

    // Get a list of keys that's being sorted on
    const orderKeys = []

    // Loop over the keys and add them to the array
    Object.keys(this._sorting).forEach(key => {
      orderKeys.push(`${key} ${this._sorting[ key ]}`)
    })

    // Join the array in the actual sort order string
    this._filters.order = orderKeys.join(',')
  }

}
