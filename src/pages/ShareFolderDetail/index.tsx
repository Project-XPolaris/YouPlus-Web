import React, {ReactElement, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import useShareFolderDetailModel from "./model";
import useStyles from "./style";
import InfoCard from "../../components/InfoCard";
import {Button, Grid} from "@material-ui/core";
import UserListCard from "../../components/UserListCard";
import UserSelectDialog from "../../components/UserSelectDialog";
import SwitchSelectDialog from "../../components/SwitchSelectDialog";
import {getSwitchText} from "../../utils/values";
import {Delete} from "@material-ui/icons";
import useLayoutModel from "../../model/layout";

export interface ShareFolderDetailPropsType {

}

type UserPickModeType = "valid user" | "write list"
type SwitchSelectTargetType = "public" | 'readonly'  | "writable"
const ShareFolderDetail = ({}: ShareFolderDetailPropsType): ReactElement => {
    const {name}: any = useParams();
    const classes = useStyles()
    const model = useShareFolderDetailModel()
    const layoutModel = useLayoutModel()
    const history = useHistory()
    useEffect(() => {
        model.initData(name)
    }, [])
    const [pickUpUserMode, setPickUpUserMode] = useState<UserPickModeType | undefined>()
    const [pickUserExcept, setPickUserExcept] = useState<string[]>([])
    const [switchSelectTarget, setSwitchSelectTarget] = useState<SwitchSelectTargetType | undefined>()
    const onOk = async (user: string) => {
        if (!model.folder) {
            return
        }
        if (pickUpUserMode == "valid user") {
            model.update({
                validUsers: [...(model.folder?.validateUsers ?? []).map(it => it.name), user]
            })
        } else if (pickUpUserMode == 'write list') {
            model.update({
                writeList: [...(model.folder?.writeableUsers ?? []).map(it => it.name), user]
            })
        }
        setPickUpUserMode(undefined)
    }
    const onSwitchSelect = (value: boolean | undefined) => {
        switch (switchSelectTarget) {
            case "public":
                model.update({
                    public: getSwitchText(value)
                })
                break;
            case 'readonly':
                model.update({
                    readonly: getSwitchText(value)
                })
                break;
            case 'writable':
                model.update({
                    writable: getSwitchText(value)
                })
        }
        setSwitchSelectTarget(undefined)

    }
    return (
        <div className={classes.root}>
            <UserSelectDialog
                onCancel={() => setPickUpUserMode(undefined)}
                onOk={onOk}
                open={Boolean(pickUpUserMode)}
                except={pickUserExcept}
            />
            <SwitchSelectDialog
                onOk={onSwitchSelect}
                onClose={() => setSwitchSelectTarget(undefined)}
                open={Boolean(switchSelectTarget)}
            />
            <div className={classes.header}>
                <div className={classes.title}>
                    {model.folder?.name}
                </div>
                <Button
                    variant={'contained'}
                    size={"small"}
                    startIcon={<Delete />}
                    onClick={() => {
                        layoutModel.showConfirmDialog({
                            title: 'Remove Confirm',
                            message: 'Remove folder will lost ALL DATA in folder',
                            onOk:async () => {
                                await model.remove()
                                history.goBack()
                            }
                        })
                    }}
                >
                    Remove folder
                </Button>
            </div>

            <Grid container spacing={4} className={classes.grid}>
                <Grid xs={2} item>
                    <InfoCard label={"folder name"} value={model.folder?.name} valueSize={18}
                              className={classes.infoCard}/>
                </Grid>
                <Grid xs={2} item>
                    <InfoCard label={"storage"} value={model.folder?.storage.id} valueSize={18}
                              className={classes.infoCard}/>
                </Grid>
                <Grid xs={2} item>
                    <InfoCard
                        label={"public"}
                        value={model.folder?.public}
                        valueSize={18}
                        className={classes.infoCard}
                        onEdit={() => setSwitchSelectTarget("public")}
                    />
                </Grid>
                <Grid xs={2} item>
                    <InfoCard
                        label={"readonly"}
                        value={model.folder?.readonly}
                        valueSize={18}
                        className={classes.infoCard}
                        onEdit={() => setSwitchSelectTarget("readonly")}
                    />
                </Grid>
                <Grid xs={2} item>
                    <InfoCard
                        label={"writable"}
                        value={model.folder?.writable}
                        valueSize={18}
                        className={classes.infoCard}
                        onEdit={() => setSwitchSelectTarget("writable")}
                    />
                </Grid>
            </Grid>
            <Grid className={classes.grid} container spacing={4}>
                <Grid xs={12} sm={6} xl={4} item>

                    <UserListCard
                        users={model.folder?.validateUsers}
                        title={"valid user"}
                        actions={
                            <>
                                <Button onClick={() => {
                                    setPickUserExcept((model.folder?.validateUsers ?? []).map(it => it.name))
                                    setPickUpUserMode("valid user")
                                }}>
                                    add user
                                </Button>
                            </>
                        }
                        onRemove={(name) => {
                            model.update({
                                validUsers: model.folder?.validateUsers.map(it => it.name).filter(it => it !== name)
                            })
                        }}
                    />
                </Grid>
                <Grid xs={12} sm={6} xl={4} item>
                    <UserListCard
                        users={model.folder?.writeableUsers}
                        title={"write list"}
                        onRemove={(name) => {
                            model.update({
                                writeList: model.folder?.writeableUsers.map(it => it.name).filter(it => it !== name)
                            })
                        }}
                        actions={
                            <>
                                <Button onClick={() => {
                                    setPickUserExcept((model.folder?.writeableUsers ?? []).map(it => it.name))
                                    setPickUpUserMode("write list")
                                }}>
                                    add user
                                </Button>
                            </>
                        }
                    />
                </Grid>
            </Grid>


        </div>
    )
}

export default ShareFolderDetail
