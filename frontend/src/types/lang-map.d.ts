declare module "lang-map"{
    export function languages(extention: string): string[]
    export function extentions(language: string): string[]
    interface LangMap{
        languages: {[key: string]: string[]}
        extentions: {[key: string]: string[]}
    }

    const langMap:{
        ():LangMap
        languages: typeof languages
        extentions: typeof extentions
    }

    export default langMap;
}