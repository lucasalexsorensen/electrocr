import { SCAN_FILE_START, SCAN_FILE_PROGRESS, SCAN_FILE_SUCCESS, SCAN_FILE_FAILURE } from '../actions/scans';

let initialState = {
  file: '',
  progress: 0.0,
  result: {}
}

let scans = (state = initialState, action) => {
  switch(action.type){
    case SCAN_FILE_START:
      return Object.assign({}, state, {
        file: action.file,
        progress: 0.0,
        result: {}
      });
    case SCAN_FILE_PROGRESS:
      if (action.result.status == "recognizing text"){
        return Object.assign({}, state, {
          progress: action.result.progress,
        })
      }
    case SCAN_FILE_SUCCESS:
      return Object.assign({}, state, {
        file: action.file,
        result: action.result
      });
    default:
      return state;
  }
}

export default scans;


