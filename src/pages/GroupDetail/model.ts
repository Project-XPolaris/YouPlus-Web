import {createModel} from "hox";
import {useEffect, useState} from "react";
import {
    addUserToUserGroup,
    fetchGroupDetail,
    removeGroup,
    removeUserFromUserGroup,
    UserGroupDetail
} from "../../api/users";
import {strict} from "assert";
import {hexToRgb} from "@material-ui/core";

const GroupDetailModel = () => {
    const [groupDetail,setGroupDetail]  = useState<UserGroupDetail | undefined>()
    const [groupName,setGroupName] = useState<string | undefined>()

    const fetchData = async (name:string) => {
        const detail = await fetchGroupDetail(name)
        setGroupDetail(detail)
    }
    const removeUser = async (users:string[]) => {
        if (groupName) {
            await removeUserFromUserGroup(groupName,users)
            await fetchData(groupName)
        }
    }
    const addUser = async (users:string[]) => {
        if (groupName) {
            await addUserToUserGroup(groupName,users)
            await fetchData(groupName)
        }
    }
    const remove = async () => {
        if (groupName) {
            await removeGroup(groupName)
        }
    }
    useEffect(() => {
        if (groupName) {
            fetchData(groupName)
        }
    },[groupName])
    return {
        groupDetail,setGroupName,addUser,removeUser,remove
    }
}
const useGroupDetailModel = createModel(GroupDetailModel)
export default useGroupDetailModel
