export const useNotification=(title,options)=>{
    if(!("Notification"in window)){
      return;
    }
    const fireNotif=()=>{
      if(Notification.permission !== "granted"){ //granted:사용자가 알림받길 허가
        Notification.requestPermission().then(permission=>{
          if(permission ==="granted"){
            new Notification(title,options);
          } else{
            return;
          }
        });
      } else{
        new Notification(title,options);
      }
    };
    return fireNotif;
  };
  
