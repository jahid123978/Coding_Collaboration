import {useState, useEffect} from "react";
import useWindowDimensions from "./useWindowDimentions";

//This hook is used to hide sidebar and other components when keyboard is open on  
//mobile devices and to adjust the height of the sidebar views and editor
function useResponsive(){
    const [minHeightReached, setMinHeightReached] = useState(false);
    const {height, isMobile} = useWindowDimensions();
    const [viewHeight, setViewHeight] = useState(height);

    useEffect(()=>{
        if(height < 500 && isMobile){
            setMinHeightReached(true);
            setViewHeight(height);
        }
        else if(isMobile){
            setMinHeightReached(false);
            setViewHeight(height);
        }else{
            setMinHeightReached(false);
            setViewHeight(height);
        }
    },[height, isMobile, viewHeight])

   return {viewHeight, minHeightReached};
}

export default useResponsive;