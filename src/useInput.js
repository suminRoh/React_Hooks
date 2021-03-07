
export const useInput=(initialValue,validator)=>{
    const [value,setValue]=useState(initialValue);
    const onChange=event=>{
      const {
        target:{value}
      }=event;
      let willUpadate=true;
      if(typeof validator==="function"){
        willUpadate=validator(value);
      }
      if(willUpadate){
        setValue(value);
      }
  
    };
    return {value,onChange};
  };