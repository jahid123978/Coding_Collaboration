function useLocalStorage(){
    const setItem = (key: string, value: string)=>{
        localStorage.setItem(key, value);
    }

    const getItem = (key: string)=>{
       let Key = localStorage.getItem(key)
       return Key;
    }

    const removeItem = (key: string)=>{
        localStorage.removeItem(key);
    }

    return {setItem, getItem, removeItem}
}

export default useLocalStorage;