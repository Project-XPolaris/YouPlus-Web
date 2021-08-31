import useStyles from './style'
import clsx from 'clsx'
import {List, ListItem, Paper} from "@material-ui/core";
import useAppsPageModel from "../../model";

export interface AppListPanelPropsType {
    className?: string
}

const AppListPanel = ({className}: AppListPanelPropsType): React.ReactElement => {
    const classes = useStyles()
    const model = useAppsPageModel()
    return (
        <div>
            <Paper>
                <List>
                    {
                        model.appList
                    }
                    <ListItem>

                    </ListItem>
                </List>
            </Paper>
        </div>
    )
}

export default AppListPanel