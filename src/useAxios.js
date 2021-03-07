import defaultAxios from "axios";
import{ useState,useEffect } from "react";



const useAxios=(opts,axiosInstance=defaultAxios)=>{//opts:configuration
    /*axiosinstance 요청 ,
    axios는 약간의 customization(맞춤화)과 configuration(구성)허용
    만약 얻지 못했다면 import한 axios 전달*/ 
    const[trigger,setTrigger]=useState(0);

    const[state,setState]=useState({
        loading:true,
        error:null,
        data:null
    });
    useEffect(()=>{
        axiosInstance(opts)
            .then(data=>{
                setState({
                    ...state,
                    loading:false,
                    data
                });
            })
            .catch(error=>{
                setState({...state,loading:false,error});    
            });
    },[trigger]);
  
    if(!opts.url){return;}//url이 필요하기 때문

    const refetch=()=>{//trigger일때도 useEffect실행시키기 위해 만든 함수
        setState({
            ...state,
            loading:true
        });
        setTrigger(Date.now());//Date.now():숫자를 줌
    };
    
    return {...state,refetch};
};

export default useAxios;