export const DIALOG_FILE_UPLOAD_OPEN = 'DIALOG_FILE_UPLOAD_OPEN'
export const DIALOG_FILE_UPLOAD_CLOSE = 'DIALOG_FILE_UPLOAD_CLOSE'
export const DIALOG_FILE_UPLOAD_TOGGLE = 'DIALOG_FILE_UPLOAD_TOGGLE'

export const DIALOG_SCANNER_OPEN = 'DIALOG_SCANNER_OPEN'
export const DIALOG_SCANNER_CLOSE = 'DIALOG_SCANNER_CLOSE'
export const DIALOG_SCANNER_TOGGLE = 'DIALOG_SCANNER_TOGGLE'

export function openFileUploadDialog(){
  return {
    type: DIALOG_FILE_UPLOAD_OPEN
  };
}

export function closeFileUploadDialog(){
  return {
    type: DIALOG_FILE_UPLOAD_CLOSE
  };
}

export function toggleFileUploadDialog(){
  return {
    type: DIALOG_FILE_UPLOAD_TOGGLE
  };
}

export function openScannerDialog(){
  return {
    type: DIALOG_SCANNER_OPEN
  };
}

export function closeScannerDialog(){
  return {
    type: DIALOG_SCANNER_CLOSE
  };
}

export function toggleScannerDialog(){
  return {
    type: DIALOG_SCANNER_TOGGLE
  };
}
