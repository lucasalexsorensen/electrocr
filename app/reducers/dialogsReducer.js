import { DIALOG_FILE_UPLOAD_OPEN, DIALOG_FILE_UPLOAD_CLOSE, DIALOG_FILE_UPLOAD_TOGGLE, DIALOG_SCANNER_OPEN, DIALOG_SCANNER_CLOSE, DIALOG_SCANNER_TOGGLE } from '../actions/dialogs'

let initialState = {
  fileUpload: false,
  scanner: false
};

let dialogs = (state = initialState, action) => {
  switch (action.type){
    case DIALOG_FILE_UPLOAD_OPEN:
      return {
        ...state,
        fileUpload: true
      };
    case DIALOG_FILE_UPLOAD_CLOSE:
      return {
        ...state,
        fileUpload: false
      };
    case DIALOG_FILE_UPLOAD_TOGGLE:
      return Object.assign({}, state, {
        fileUpload: !state.fileUpload
      });
    case DIALOG_SCANNER_OPEN:
      return {
        ...state,
        scanner: true
      };
    case DIALOG_SCANNER_CLOSE:
      return {
        ...state,
        scanner: false
      };
    case DIALOG_SCANNER_TOGGLE:
      return Object.assign({}, state, {
        scanner: !state.scanner
      });
    default:
      return state;
  }
}

export default dialogs;
