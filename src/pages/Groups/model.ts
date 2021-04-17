import {createModel} from "hox";
import {useState} from "react";
import {createGroup, fetchGroupList, UserGroup} from "../../api/users";

const UserGroupsModel = () => {
    const [groups,setGroups] = useState<UserGroup[]>([])
    const fetchData = async () => {
        const response = await fetchGroupList()
        setGroups(response.groups)
    }
    const create = async (name:string) => {
        await createGroup(name)
        await fetchData()
    }
    return {
        groups,fetchData,create
    }
}
const useUserGroupsModel = createModel(UserGroupsModel)
export default useUserGroupsModel
