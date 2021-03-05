export const useConfirm=(message="",onConfirm,onCancel)=>{
    if(!onConfirm || typeof onConfirm !=="function"){
      return;
    }
    if(onCancel && typeof onCancel !=="function"){
      return;
    }
    const confirmAction=()=>{
        if(window.confirm(message)){
          onConfirm();
          //ok를 누르면 실행 
        }
        else{
          onCancel();
          //취소를 누르면 실행
        }
    }
    return confirmAction;
  };