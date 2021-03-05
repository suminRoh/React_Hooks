export const useClick=(onClick)=>{
    if(typeof onClick !=="function"){
      return;
    }
    const element=useRef(); //모든 것들은 reference가 있어서 작동하는 것 
    useEffect(()=>{
      if(element.current){
        element.current.addEventListener("click",onClick);
        //component가 mount되었을 때 실행 
      }
      //component가 unmount 일 때, 이벤트가 발생한 후 정리할 필요가 있음 
      return ()=>{
        if(element.current(){
          element.current.removeEventListener("click",onClick);
        }
      };//componentWillunmount일때 return의 function 호출 
    },[]);//no dependency
    return element;
  };