import {useState} from "react";

export interface PageHeadController {
    tabIndex: number,
    setTabIndex: (index: number) => void
}

export const usePageHeadController = ({defaultTabIndex = 0}):PageHeadController => {
    const [tabIndex, setTabIndex] = useState<number>(defaultTabIndex)
    return {
        tabIndex, setTabIndex
    }
}