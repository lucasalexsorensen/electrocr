import Tesseract from 'tesseract.js'

window.Tesseract = Tesseract.create({
  workerPath: './ts/worker.js',

})

export const SCAN_FILE_START = 'SCAN_FILE_START';
export const SCAN_FILE_SUCCESS = 'SCAN_FILE_SUCCESS';
export const SCAN_FILE_FAILURE = 'SCAN_FILE_FAILURE';
export const SCAN_FILE_PROGRESS = 'SCAN_FILE_PROGRESS';

export function startScanFile(fileObj) {
  return dispatch => {
    dispatch({type: SCAN_FILE_START, file: fileObj, result: null })

    Tesseract.recognize(fileObj)
      .progress(message => dispatch({type: SCAN_FILE_PROGRESS, file: fileObj, result: message}) )
      .catch(err => dispatch({type: SCAN_FILE_FAILURE, file: fileObj, result: err }))
      .then(result => dispatch({type: SCAN_FILE_SUCCESS, file: fileObj, result: result }))

  }
}
