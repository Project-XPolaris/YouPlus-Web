import {ReactElement, useEffect} from "react";
import useStyles from "./style";
import useGroupDetailModel from "./model";
import {useHistory, useParams} from "react-router-dom";
import {Button, Paper, Typography} from "@material-ui/core";
import UserListCard from "../../components/UserListCard";
import UserSelectDialog from "../../components/UserSelectDialog";
import useLayoutModel from "../../model/layout";
import {Delete} from "@material-ui/icons";

export interface GroupDetailPagePropsType {

}

const GroupDetailPage = ({}: GroupDetailPagePropsType): ReactElement => {
    const {name}: any = useParams()
    const classes = useStyles()
    const model = useGroupDetailModel()
    const layoutModel = useLayoutModel()
    const history = useHistory()
    useEffect(() => {
        model.setGroupName(name)
    }, [])
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant={"h4"} className={classes.title}>
                    {model.groupDetail?.name ?? ""}
                </Typography>
                <Button
                    variant={"contained"}
                    startIcon={<Delete/>}
                    onClick={() => {
                        layoutModel.showConfirmDialog({
                            title: "Remove confirm",
                            message:"confirm remove",
                            onOk:async () => {
                                await model.remove()
                                history.replace("/groups")
                            }
                        })
                    }}
                >
                    Remove
                </Button>
            </div>

            <UserSelectDialog
                onCancel={() => layoutModel.switchDialog("group/addUser")}
                onOk={(username) => {
                    layoutModel.switchDialog("group/addUser")
                    model.addUser([username])
                }}
                except={(model.groupDetail?.users ?? []).map(it => it.name)}
                open={layoutModel.getDialogOpen("group/addUser")}
            />
            <UserListCard
                onRemove={(username) => {
                    model.removeUser([username])
                }}
                className={classes.userList}
                users={
                    model.groupDetail?.users ?? []
                }
                actions={<Button onClick={() => layoutModel.switchDialog("group/addUser")}>Add user</Button>}
            />
        </div>
    )
}

export default GroupDetailPage
