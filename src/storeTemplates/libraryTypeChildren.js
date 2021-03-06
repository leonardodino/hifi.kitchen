import {normalize} from 'perplexed'
import {
  cacheMapList,
  createMapListSelector,
  AsyncMapListReducer,
} from '@stayradiated/mandarin'

export default function createLibraryTypeChildrenStore (options) {
  const {
    type: TYPE,
    constant: FETCH_TYPE_CHILDREN,
    rootSelector,
    reducerOptions = {},
    fetchItems = ({library}, id, start, end) =>
      normalize(library.metadataChildren(
        id, TYPE, {start, size: end - start, includeRelated: 1})),
  } = options

  const selectors = createMapListSelector(rootSelector)

  const forceFetchTypeChildren = (id, start, end) => ({
    types: FETCH_TYPE_CHILDREN,
    payload: {id, start, end},
    meta: {
      plex: (plex) => fetchItems(plex, id, start, end),
    },
  })

  const fetchTypeChildren = cacheMapList(
    (id, start = 0, end = 50) => ({
      id,
      range: [start, end],
      selectors,
      dispatch: (range) => forceFetchTypeChildren(
        id, range[0], range[1]),
    }),
  )

  const asyncReducer = new AsyncMapListReducer({
    getId: (action) => action.payload.id,
    getTotal: (action) => action.value.result.id.totalSize,
    ...reducerOptions,
  })

  const reducer = (state = asyncReducer.initialState, action) => {
    switch (action.type) {
      case FETCH_TYPE_CHILDREN.REQUEST:
        return asyncReducer.handleRequest(state, action)

      case FETCH_TYPE_CHILDREN.FAILURE:
        return asyncReducer.handleFailure(state, action)

      case FETCH_TYPE_CHILDREN.SUCCESS:
        return asyncReducer.handleSuccess(state, action)

      default:
        return state
    }
  }

  return {
    reducer,
    fetchTypeChildren,
    forceFetchTypeChildren,
    selectors,
  }
}
