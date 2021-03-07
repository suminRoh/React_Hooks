export const useScroll=()=>{
    const[state,setState]=useState({
      x:0,
      y:0
    });
    const onScroll=()=>{
      console.log(window.scrollY);
      setState({y :window.scrollY},{x :window.scrollX});//측정한 window의 scroll으로 set 
    };
    useEffect(()=>{
      window.addEventListener("scroll",onScroll);
      return()=>{
        window.removeEventListener("scroll",onScroll);
      };
    },[]);
    return state;
  };