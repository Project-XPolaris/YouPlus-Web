import {createModel} from "hox";
import {useState} from "react";
import {fetchNetworkStatus, Network} from "../../api/network";

const NetworkModel = () => {
    const [networks,setNetworks] = useState<Network[]>([])
    const refresh = async () => {
        const response = await fetchNetworkStatus()
        setNetworks(response.networks)
    }
    return {refresh,networks}
}
const useNetworkModel = createModel(NetworkModel)
export default useNetworkModel
