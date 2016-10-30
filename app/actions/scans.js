var reader = require('../../demo');

export const SCAN_FILE_START = 'SCAN_FILE_START';
export const SCAN_FILE_SUCCESS = 'SCAN_FILE_SUCCESS';
export const SCAN_FILE_FAILURE = 'SCAN_FILE_FAILURE';
export const SCAN_FILE_PROGRESS = 'SCAN_FILE_PROGRESS';

export function startScanFile(fileObj) {
  return dispatch => {
    dispatch({type: SCAN_FILE_START, file: fileObj, result: null })

    reader.readImage();

  }
}
