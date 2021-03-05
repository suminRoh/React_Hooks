export const useFadeIn=(duration=1,delay=0)=>{
  
    const element=useRef();  
  
    useEffect(()=>{
      if(element.current){//.current는 우리가 원하는 DOM을 가리킴
        const{current}=element;
        current.style.transition=`opacity ${duration}s ease-in-out ${delay}s` ;//${} : 처리된 값을 문자열로 반환
        current.style.opacity=1;
      }
    },[])
    if(typeof duration !=="number" || typeof delay !=="number"){return;}
    
    return {ref:element,style:{opacity:0}}; //opacity:투명도
  //component가 mount되면 Hello가 opacity,ease-in-out에 따라 서서히 나타남
  };