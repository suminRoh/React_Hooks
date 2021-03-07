export const useFullscreen=(callback)=>{
    const element=useRef();
    const triggerFull=()=>{
      if(element.current){
        if(element.current.requestFullscreen){
          element.current.requestFullscreen();//fullscreen으로 만들어줌 
        } else if(element.current.mozRequestFullscreen){
          element.current.mozRequestFullscreen();
        } else if(element.current.webkitRequestFullscreen){
          element.current.webkitRequestFullscreen();
        } else if(element.current.msRequestFullscreen){
          element.current.msRequestFullscreen();
        }
        if(callback && typeof onFulls==="function"){
          callback(true); //onFulls함수에 인자로 true를 줘서 we are full 출력
        }
      }
    };
    const exitFull=()=>{
      document.exitFullscreen();
      
      if(document.current){
        if(document.current.requestFullscreen){
          element.current.requestFullscreen();//fullscreen으로 만들어줌 
        } else if(element.current.mozRequestFullscreen){
          element.current.mozRequestFullscreen();
        } else if(element.current.webkitRequestFullscreen){
          element.current.webkitRequestFullscreen();
        } else if(element.current.msRequestFullscreen){
          element.current.msRequestFullscreen();
        }
        if(callback && typeof onFulls==="function"){
          callback(false); //onFulls함수에 false를 줘서 we are small 출력
        }
      }
    };
    //
    return {element,triggerFull,exitFull}; 
    //내부함수 자체가 return값이라면 내부함수 외부에서 사용 가능 
  };
  