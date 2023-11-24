import toastr from "toastr";
//import "toastr/build/toastr.min.css";

export const TOAST_ERROR = "error"
export const TOAST_WARNING = "warning"
export const TOAST_INFO = "info"
export const TOAST_SUCCESS = "success"


export const notifyError = (toastMessage, toastTitle) => showNotifyMessage(toastMessage, toastTitle, TOAST_ERROR);
export const notifyWarning = (toastMessage, toastTitle) => showNotifyMessage(toastMessage, toastTitle, TOAST_WARNING);
export const notifyInfo = (toastMessage, toastTitle) => showNotifyMessage(toastMessage, toastTitle, TOAST_INFO);
export const notifySuccess = (toastMessage, toastTitle) => showNotifyMessage(toastMessage, toastTitle, TOAST_SUCCESS);

function showNotifyMessage(toastMessage, toastTitle, toastType) {
    toastr.options = {
        positionClass: "toast-top-right",
        closeButton: false,
        debug: false,
        progressBar: true,
        preventDuplicates: false,
        newestOnTop: true,
        showDuration: 300,
        hideDuration: 1000,
        extendedTimeOut: 1000,
        timeOut: 3000,
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };

    switch(toastType){
        case TOAST_SUCCESS: {
            toastr.success(toastMessage, toastTitle);
            break;
        }
        case TOAST_INFO: {
            toastr.info(toastMessage, toastTitle);
            break;
        }
        case TOAST_WARNING: {
            toastr.warning(toastMessage, toastTitle);
            break;
        }
        case TOAST_ERROR: {
            toastr.error(toastMessage, toastTitle);
            break;
        }
        default:{
            toastr.info(toastMessage, toastTitle);
            break;
        }
    }
}