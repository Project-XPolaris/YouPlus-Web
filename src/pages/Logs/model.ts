import {createModel} from "hox";
import {useEffect, useState} from "react";
import {fetchLogs, Log} from "../../api/log";

export interface LogsFilter {
    page: number
    pageSize: number
    order: string
    levels: string[]
}

const LogsModel = () => {
    const [logs, setLogs] = useState<Log[]>([])
    const [filter, setFilter] = useState<LogsFilter>({
        page: 1,
        pageSize: 20,
        order: '-time',
        levels: ['2', '3', '4', '5']
    })

    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        initData()
    }, [filter])
    const initData = async () => {
        const response = await fetchLogs({
            page: filter.page,
            pageSize: filter.pageSize,
            order: filter.order,
            level: filter.levels
        })
        setLogs(response.result)
        setTotal(response.count)
    }
    const updatePage = (page: number) => {
        setFilter({
            ...filter,
            page: page + 1
        })
    }
    const updatePageSize = (pageSize: number) => {
        console.log(pageSize)
        setFilter({
            ...filter,
            pageSize,
            page: 1
        })
    }
    const updateLevels = (levels: string[]) => {
        setFilter(
            {
                ...filter,
                levels,
                page: 1
            }
        )
    }
    return {
        logs, initData, filter, total, updatePage, updatePageSize, updateLevels
    }
}
const useLogsModel = createModel(LogsModel)
export default useLogsModel
