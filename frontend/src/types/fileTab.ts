import {FileSystemItem} from "./file";

interface FileTabContext{
    activeFile: FileSystemItem | null,
    setActiveFile: (file: FileSystemItem)=>void,
    changeActiveFile: (filedId: string)=>void
}

export {FileTabContext}