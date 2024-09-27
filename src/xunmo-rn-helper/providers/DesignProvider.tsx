import { createContext, PropsWithChildren } from "react";

const DesignContext = createContext({
    width: 375,
    height: 812
})

type DesignProviderProps = {
    design: {
        width: number,
        height: number
    }
} & PropsWithChildren
export default function DesignProvider(props: DesignProviderProps) {
    return (
        <DesignContext.Provider value={props.design}>
            {props.children}
        </DesignContext.Provider>
    )
}

function useDesign(){
    
}