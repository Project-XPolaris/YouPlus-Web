import React, {ReactElement, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import useShareFolderDetailModel from "./model";
import useStyles from "./style";
import InfoCard from "../../components/InfoCard";
import {Button, Grid} from "@material-ui/core";
import UserListCard from "../../components/UserListCard";
import UserSelectDialog from "../../components/UserSelectDialog";
import SwitchSelectDialog from "../../components/SwitchSelectDialog";
import {Delete} from "@material-ui/icons";
import useLayoutModel from "../../model/layout";

export interface ShareFolderDetailPropsType {

}

type UserPickModeType = "readUsers" | "writeUsers"
type SwitchSelectTargetType = "public" | 'readonly' | "writable" | 'enable'
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
        const option = {
            public: model.folder.public,
            enable: model.folder.enable,
            readonly: model.folder.readonly
        }
        if (pickUpUserMode == "readUsers") {
            model.update({
                ...option,
                readUsers: [...(model.folder?.readUsers ?? []).map(it => it.name), user]
            })
        } else if (pickUpUserMode == 'writeUsers') {
            model.update({
                ...option,
                writeUsers: [...(model.folder?.writeUsers ?? []).map(it => it.name), user]
            })
        }
        setPickUpUserMode(undefined)
    }
    const onSwitchSelect = (value: boolean) => {
        if (!model.folder) {
            return
        }
        const option = {
            public: model.folder.public,
            enable: model.folder.enable,
            readonly: model.folder.readonly
        }
        switch (switchSelectTarget) {
            case "public":
                option.public = value
                break;
            case 'readonly':
                option.readonly = value
                break;
            case 'enable':
                option.enable = value
        }
        model.update(option)
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
                    startIcon={<Delete/>}
                    onClick={() => {
                        layoutModel.showConfirmDialog({
                            title: 'Remove Confirm',
                            message: 'Remove folder will lost ALL DATA in folder',
                            onOk: async () => {
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
                <Grid xs={12} sm={6} md={4} lg={3} xl={3} item>
                    <InfoCard label={"folder name"} value={model.folder?.name} valueSize={18}
                              className={classes.infoCard}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3} xl={3} item>
                    <InfoCard label={"storage"} value={model.folder?.storage.id} valueSize={18}
                              className={classes.infoCard}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3} xl={3} item>
                    <InfoCard
                        label={"public"}
                        value={model.folder?.public ? "yes" : "no"}
                        valueSize={18}
                        className={classes.infoCard}
                        onEdit={() => setSwitchSelectTarget("public")}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3} xl={3} item>
                    <InfoCard
                        label={"readonly"}
                        value={model.folder?.readonly ? "yes" : "no"}
                        valueSize={18}
                        className={classes.infoCard}
                        onEdit={() => setSwitchSelectTarget("readonly")}
                    />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3} xl={3} item>
                    <InfoCard
                        label={"enable"}
                        value={model.folder?.enable ? "yes" : "no"}
                        valueSize={18}
                        className={classes.infoCard}
                        onEdit={() => setSwitchSelectTarget("enable")}
                    />
                </Grid>
            </Grid>
            <Grid className={classes.grid} container spacing={4}>
                <Grid xs={12} sm={6} xl={4} item>

                    <UserListCard
                        users={model.folder?.readUsers}
                        title={"read users"}
                        actions={
                            <>
                                <Button onClick={() => {
                                    setPickUserExcept((model.folder?.readUsers ?? []).map(it => it.name))
                                    setPickUpUserMode("readUsers")
                                }}>
                                    add user
                                </Button>
                            </>
                        }
                        onRemove={(name) => {
                            if (!model.folder) {
                                return
                            }
                            model.update({
                                public: model.folder.public,
                                enable: model.folder.enable,
                                readonly: model.folder.readonly,
                                readUsers: model.folder?.readUsers.map(it => it.name).filter(it => it !== name)
                            })
                        }}
                    />
                </Grid>
                <Grid xs={12} sm={6} xl={4} item>
                    <UserListCard
                        users={model.folder?.writeUsers}
                        title={"write list"}
                        onRemove={(name) => {
                            if (!model.folder) {
                                return
                            }
                            model.update({
                                public: model.folder.public,
                                enable: model.folder.enable,
                                readonly: model.folder.readonly,
                                writeUsers: model.folder?.writeUsers.map(it => it.name).filter(it => it !== name)
                            })
                        }}
                        actions={
                            <>
                                <Button onClick={() => {
                                    setPickUserExcept((model.folder?.writeUsers ?? []).map(it => it.name))
                                    setPickUpUserMode("writeUsers")
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
