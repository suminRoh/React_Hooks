export const useTabs=(initialTab,allTabs)=>{ //initialTab:index, allTabs:array
    const [currentIndex,SetCurrentIndex]=useState(initialTab);
    //setCurrentIndex : state를 update시켜줌
    if(!allTabs ?? !Array.isArray(allTabs)){
      return ; //array가 아니면 실행 x
    }
    return{ 
      currentItem:allTabs[currentIndex],//선택한 인덱스의 배열 값
      changeItem:SetCurrentIndex  //map의 idex를 통해 변화하는 인덱스로 업데이트 하기 위한 변수
    };
  }