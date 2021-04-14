import {Card} from "@material-ui/core";
import {ReactElement} from "react";
import useStyles from "./style";

export interface DiskCardPropsType {

}

const DiskCard = ({}: DiskCardPropsType): ReactElement => {
    const classes = useStyles()
    return (
        <Card>

        </Card>
    )
}

export default DiskCard
