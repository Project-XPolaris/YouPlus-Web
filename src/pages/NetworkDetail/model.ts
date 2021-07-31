import {createModel} from "hox";
import {useState} from "react";
import {fetchNetworkStatus, Network} from "../../api/network";

const NetworkDetailModel = () => {
    const [network, setNetwork] = useState<Network>()
    const refresh = async (name: string) => {
        const response = await fetchNetworkStatus()
        setNetwork(response.networks.find(it => it.name === name))
    }
    return {
        network,refresh
    }
}
const useNetworkDetailModel = createModel(NetworkDetailModel)
export default useNetworkDetailModel
