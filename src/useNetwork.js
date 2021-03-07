export const useNetwork =onChange=>{//network 상태가 바뀔때마다 function을 부름
    const [status,setStatus]=useState(navigator.onLine);//navigator.online:웹사이트가 온라인인지 아닌지 T/F나타냄
    
    const handleChange=()=>{
      if(typeof onChange=="function"){
        onChange(navigator.onLine);//onChange: 이벤트가 변경됐을 때 작동되는 함수 
      }
      setStatus(navigator.onLine);
    };
  
    useEffect(()=>{
      console.log("when");
      window.addEventListener("online",handleChange);
      window.addEventListener("offline",handleChange);
      return()=>{
        window.removeEventListener("online",handleChange);
        window.removeEventListener("offline",handleChange);
      };
    },[]);
    return status;
  };