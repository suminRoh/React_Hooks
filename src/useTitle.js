export const useTitle=(initialTitle)=>{
    const [title,setTitle]=useState(initialTitle);
    const updateTitle=()=>{
      const htmlTitle=document.querySelector("title") //html tag의 title을 얻어야함
      htmlTitle.innerText=title;
    };
    useEffect(updateTitle,[title]);//componentDidMount이거나 title이 업데이트되면, updateTitle함수 호출
    return setTitle;
  };