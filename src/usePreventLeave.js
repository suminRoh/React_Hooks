export const usePreventLeave=()=>{
    const listener=(event)=>{
      event.preventDefault();//표준에 따라 기본동작 방지
      event.returnValue=""; //chrome에서는 returnvalue설정이 필요함 
    }
    const enablePrevent=()=>window.addEventListener("beforeunload",listener);
    const disablePrevent=()=>window.removeEventListener("beforeunload",listener);
    return (enablePrevent,disablePrevent);
  };