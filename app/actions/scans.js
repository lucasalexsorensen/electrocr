import Tesseract from 'tesseract.js'

export const SCAN_FILE_START = 'SCAN_FILE_START';
export const SCAN_FILE_SUCCESS = 'SCAN_FILE_SUCCESS';
export const SCAN_FILE_FAILURE = 'SCAN_FILE_FAILURE';
export const SCAN_FILE_PROGRESS = 'SCAN_FILE_PROGRESS';

import { DIALOG_SCANNER_OPEN } from './dialogs'

export function startScanFile(fileObj) {
  return dispatch => {
    dispatch({type: SCAN_FILE_START, file: fileObj, result: null })
    dispatch({type: DIALOG_SCANNER_OPEN })

    Tesseract.recognize(fileObj)
      .progress(message => dispatch({type: SCAN_FILE_PROGRESS, file: fileObj, result: message}) )
      .catch(err => dispatch({type: SCAN_FILE_FAILURE, file: fileObj, result: err }))
      .then(result => dispatch({type: SCAN_FILE_SUCCESS, file: fileObj, result: result }))

  }
}
