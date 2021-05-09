import useStyles from "./style";
import {Avatar, Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import clsx from "clsx";
import {Task} from "../../api/task";
import {Apps} from "@material-ui/icons";
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(RelativeTime)
export interface InstallAppTaskCardPropsType {
    className?: any
    task: Task
}

const InstallAppTaskCard = ({className, task}: InstallAppTaskCardPropsType) => {
    const classes = useStyles()
    const getUpdateTimeText = () => {
        return dayjs(task.updated).toNow()
    }
    return (
        <Card className={clsx(className, classes.root)}>
            <CardHeader
                avatar={
                    <Avatar sizes="small" className={classes.avatar}>
                        <Apps/>
                    </Avatar>
                }
                title={task.extra.appName}
                subheader={task.type}
                action={<Typography variant={"caption"}>{getUpdateTimeText()}</Typography>}
            />
            <CardContent>
                <Typography variant="h6">
                    {task.status}
                </Typography>
                {task.errorMessage}
            </CardContent>
        </Card>
    )
}

export default InstallAppTaskCard
