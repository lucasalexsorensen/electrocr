export const DIALOG_FILE_UPLOAD_OPEN = 'DIALOG_FILE_UPLOAD_OPEN'
export const DIALOG_FILE_UPLOAD_CLOSE = 'DIALOG_FILE_UPLOAD_CLOSE'
export const DIALOG_FILE_UPLOAD_TOGGLE = 'DIALOG_FILE_UPLOAD_TOGGLE'

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
