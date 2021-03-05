export const useBeforeLeave=(onBefore)=>{
    if(typeof onBefore !=="function"){
      return;
    }
    
    const handle=(event)=>{
      /*console.log로 event결과를 확인했을 때, 
      clientY는 마우스가 위로 벗어나면 음수. 아래로 벗어나면 양수 나옴*/
  
      const{clientY}=event;
  
      if(clientY<=0){onBefore();}//마우스가 위로 벗어난경우만 
    }; 
    //mouse가 위로 벗어나면 argument 함수가 실행돼서 "pls don't leave"가 console에 뜸
  
    useEffect(()=>{
      document.addEventListener("mouseleave",handle);
      return()=> document.removeEventListener("mouseleave",handle);
      //componentWillUnmount일 때 eventlistner 제거
    },[]);
  
  };