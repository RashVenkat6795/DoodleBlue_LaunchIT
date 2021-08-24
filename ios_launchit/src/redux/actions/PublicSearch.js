import PublicSearch from '../constants/PublicSearch';

export function publicSearchResults(data){
    return {
        type: PublicSearch.FOLDERRSNSEARCHLIST,
        payload: data
    }
}
