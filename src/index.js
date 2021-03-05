import React, { useState,useEffect,useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn=(duration=1,delay=0)=>{
  
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

const App=()=>{
  //주어진 reference를 fadeInH1,fadeInP에 줌
  const fadeInH1=useFadeIn(1,2); 
  const fadeInP=useFadeIn(5,10);
  return(
    <div className="App">
      <h1{...fadeInH1}>Hello</h1>
      <p{...fadeInP}>alala</p>
      //속성들이 참고돼서 reference,style이 들어옴 
    </div>
  );
};


 
const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement);
