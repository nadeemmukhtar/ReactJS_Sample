export const TRENDING_LISTS = 'tribalist/trendingLists/LOAD';
export const TRENDING_LISTS_SUCCESS = 'tribalist/trendingLists/LOAD_SUCCESS';
export const TRENDING_LISTS_FAIL = 'tribalist/trendingLists/LOAD_FAIL';
export const SECTIONS_LIST = 'tribalist/repos/sections/LOAD';
export const SECTIONS_LIST_SUCCESS = 'tribalist/repos/sections/LOAD_SUCCESS';
export const SECTIONS_LIST_FAIL = 'tribalist/repos/sections/LOAD_FAIL';
export const TOPTRIBE_LIST = 'tribalist/trendingLists/TOPTRIBE';
export const TRIBEMEMBER_LIST_SUCCESS = 'tribalist/trendingLists/TOPTRIBE_SUCCESS';
export const TRIBEMEMBER_LIST_FAIL = 'tribalist/trendingLists/TOPTRIBE_FAIL';
export const TRENDING_RESULTS = "tribalist/results/LOAD";

let initialState = {
    loadingTrendingLists: false,
    loadingSections: false,
    loadingMemberLists: false,
    showSearching: false,
    trendingLists: [],
    sections: [],
    members: [],
    resultsList: []
}

export default homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRENDING_LISTS:
            return { ...state, loadingTrendingLists: true };
        case TRENDING_LISTS_SUCCESS:
            console.log("trending lists got it");
            return { ...state, trendingLists: action.payload.data.data.result, loadingTrendingLists: false };
        case TRENDING_LISTS_FAIL:
            console.log("trending lists failed");
            return { ...state, loadingTrendingLists: false };
        case SECTIONS_LIST:
            return { ...state, loadingSections: true };
        case SECTIONS_LIST_SUCCESS:
            return { ...state, sections: action.payload.data.data.sections, loadingSections: false };
        case SECTIONS_LIST_FAIL:
            return { ...state, loadingSections: false };
        case TRENDING_RESULTS:
            const newState = Object.assign({}, state);
            let searchText = action.payload;
            if (!searchText || searchText.trim() === "")
            {
                newState.showSearching = false;
            }
            else
            {
              newState.showSearching = true;
            }
            newState.resultsList = state.trendingLists.slice(0,10);
            return newState;
        case TOPTRIBE_LIST:
              return { ...state, loadingMemberLists: true }
        case TRIBEMEMBER_LIST_SUCCESS:
              return { ...state, members: action.payload.data.data.result, loadingMemberLists: false };
        case TRIBEMEMBER_LIST_FAIL:
              return { ...state, loadingMemberLists: false };
        default:
            return state;
    }
}

// MARK: - Action Creators

export function fetchTrendingLists() {
    return {
        type: TRENDING_LISTS,
        payload: {
            request: {
                url: `/lists`,
            }
        }
    }
}

export function fetchSections() {
    return {
        type: SECTIONS_LIST,
        payload: {
            request: {
                url: `/sections`,
            }
        }
    }
}

export const fetchResults = (text) => {
    return {
        type: TRENDING_RESULTS,
        payload: text
    }
}

export function fetchTopTribeMembers(api_token){
    return {
        type: TOPTRIBE_LIST,
        payload: {
            request: {
                url: '/top-tribe-members',
            }
        }
    }
}
