import { DIALOG_FILE_UPLOAD_OPEN, DIALOG_FILE_UPLOAD_CLOSE, DIALOG_FILE_UPLOAD_TOGGLE } from '../actions/dialogs'

let initialState = {
  fileUpload: false
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
    default:
      return state;
  }
}

export default dialogs;
