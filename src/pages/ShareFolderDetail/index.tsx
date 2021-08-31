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
import UserGroupSelectDialog from "../../components/UserGroupSelectDialog";
import UserAndGroupListCard from "../../components/UserAndGroupListCard";
import {usePageHeadController} from "../../components/PageHead/hook";
import PageHead from "../../components/PageHead";

export interface ShareFolderDetailPropsType {

}

type UserAndGroupPickModeType = "readUsers" | "writeUsers" | "validUsers" | "invalidUsers" | "validGroup" | "invalidGroup" | 'readGroup' | 'writeGroup'
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
    const [pickUpUserMode, setPickUpUserMode] = useState<UserAndGroupPickModeType | undefined>()
    const [pickUpGroupMode, setPickUpGroupMode] = useState<UserAndGroupPickModeType | undefined>()
    const [pickUserExcept, setPickUserExcept] = useState<string[]>([])
    const [pickGroupExcept, setPickGroupExcept] = useState<string[]>([])
    const [switchSelectTarget, setSwitchSelectTarget] = useState<SwitchSelectTargetType | undefined>()
    const pageHeadController = usePageHeadController({})
    const onPickupUserOk = async (name: string) => {
        if (!model.folder) {
            return
        }
        const option = {
            public: model.folder.public,
            enable: model.folder.enable,
            readonly: model.folder.readonly
        }
        switch (pickUpUserMode) {
            case "readUsers":
                model.update({
                    ...option,
                    readUsers: [...(model.folder?.readUsers ?? []).map(it => it.name), name]
                })
                break;
            case "writeUsers":
                model.update({
                    ...option,
                    writeUsers: [...(model.folder?.writeUsers ?? []).map(it => it.name), name]
                })
                break;
            case "validUsers":
                model.update({
                    ...option,
                    validUsers: [...(model.folder?.validUsers ?? []).map(it => it.name), name]
                })
                break;
            case "invalidUsers":
                model.update({
                    ...option,
                    invalidUsers: [...(model.folder?.invalidUsers ?? []).map(it => it.name), name]
                })
                break;
            case 'validGroup':
                model.update({
                    ...option,
                    validGroups: [...(model.folder?.validGroups ?? []).map(it => it.name), name]
                })
                break;
        }
        setPickUpUserMode(undefined)
    }
    const onPickupGroupOk = (name:string) => {
        if (!model.folder) {
            return
        }
        const option = {
            public: model.folder.public,
            enable: model.folder.enable,
            readonly: model.folder.readonly
        }
        switch (pickUpGroupMode) {
            case 'validGroup':
                model.update({
                    ...option,
                    validGroups: [...(model.folder?.validGroups ?? []).map(it => it.name), name]
                })
                break;
            case 'invalidGroup':
                model.update({
                    ...option,
                    invalidGroups: [...(model.folder?.invalidGroups ?? []).map(it => it.name), name]
                })
                break;
            case 'readGroup':
                model.update({
                    ...option,
                    readGroups: [...(model.folder?.readGroups ?? []).map(it => it.name), name]
                })
                break;
            case 'writeGroup':
                model.update({
                    ...option,
                    writeGroups: [...(model.folder?.writeGroups ?? []).map(it => it.name), name]
                })
                break;
        }
        setPickUpGroupMode(undefined)
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
                onOk={onPickupUserOk}
                open={Boolean(pickUpUserMode)}
                except={pickUserExcept}
            />
            <UserGroupSelectDialog
                onCancel={() => setPickUpGroupMode(undefined)}
                onOk={onPickupGroupOk}
                open={Boolean(pickUpGroupMode)}
                except={pickGroupExcept}
            />
            <SwitchSelectDialog
                onOk={onSwitchSelect}
                onClose={() => setSwitchSelectTarget(undefined)}
                open={Boolean(switchSelectTarget)}
            />

                <PageHead
                    title={model.folder?.name ?? ""}
                    controller={pageHeadController}
                    actions={
                        <>
                            <Button
                                variant={'text'}
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
                        </>
                    }
                />

            <div className={classes.content}>
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
                        <UserAndGroupListCard
                            users={model.folder?.validUsers}
                            groups={model.folder?.validGroups}
                            title={"valid list"}
                            actions={
                                <>
                                    <Button onClick={() => {
                                        setPickUserExcept((model.folder?.validUsers ?? []).map(it => it.name))
                                        setPickUpUserMode("validUsers")
                                    }}>
                                        add user
                                    </Button>
                                    <Button onClick={() => {
                                        setPickGroupExcept((model.folder?.validGroups ?? []).map(it => it.name))
                                        setPickUpGroupMode("validGroup")
                                    }}>
                                        add group
                                    </Button>
                                </>
                            }
                            onRemoveUser={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    validUsers: model.folder?.validUsers.map(it => it.name).filter(it => it !== name)
                                })
                            }}
                            onRemoveGroup={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    validGroups: model.folder?.validGroups.map(it => it.name).filter(it => it !== name)
                                })
                            }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} xl={4} item>
                        <UserAndGroupListCard
                            users={model.folder?.invalidUsers}
                            groups={model.folder?.invalidGroups}
                            title={"invalid list"}
                            actions={
                                <>
                                    <Button onClick={() => {
                                        setPickUserExcept((model.folder?.invalidUsers ?? []).map(it => it.name))
                                        setPickUpUserMode("invalidUsers")
                                    }}>
                                        add user
                                    </Button>
                                    <Button onClick={() => {
                                        setPickGroupExcept((model.folder?.invalidGroups ?? []).map(it => it.name))
                                        setPickUpGroupMode("invalidGroup")
                                    }}>
                                        add group
                                    </Button>
                                </>
                            }
                            onRemoveUser={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    public: model.folder.public,
                                    enable: model.folder.enable,
                                    readonly: model.folder.readonly,
                                    invalidUsers: model.folder?.invalidUsers.map(it => it.name).filter(it => it !== name)
                                })
                            }}
                            onRemoveGroup={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    public: model.folder.public,
                                    enable: model.folder.enable,
                                    readonly: model.folder.readonly,
                                    invalidGroups: model.folder?.invalidGroups.map(it => it.name).filter(it => it !== name)
                                })
                            }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} xl={4} item>
                        <UserAndGroupListCard
                            users={model.folder?.readUsers}
                            groups={model.folder?.readGroups}
                            title={"read list"}
                            actions={
                                <>
                                    <Button onClick={() => {
                                        setPickUserExcept((model.folder?.readUsers ?? []).map(it => it.name))
                                        setPickUpUserMode("readUsers")
                                    }}>
                                        add user
                                    </Button>
                                    <Button onClick={() => {
                                        setPickGroupExcept((model.folder?.readGroups ?? []).map(it => it.name))
                                        setPickUpGroupMode("readGroup")
                                    }}>
                                        add group
                                    </Button>
                                </>
                            }
                            onRemoveUser={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    readUsers: model.folder?.readUsers.map(it => it.name).filter(it => it !== name)
                                })
                            }}
                            onRemoveGroup={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    readGroups: model.folder?.readGroups.map(it => it.name).filter(it => it !== name)
                                })
                            }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} xl={4} item>
                        <UserAndGroupListCard
                            users={model.folder?.writeUsers}
                            groups={model.folder?.writeGroups}
                            title={"write list"}
                            onRemoveUser={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    writeUsers: model.folder?.writeUsers.map(it => it.name).filter(it => it !== name)
                                })
                            }}
                            onRemoveGroup={(name) => {
                                if (!model.folder) {
                                    return
                                }
                                model.update({
                                    writeGroups: model.folder?.writeGroups.map(it => it.name).filter(it => it !== name)
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
                                    <Button onClick={() => {
                                        setPickGroupExcept((model.folder?.writeGroups ?? []).map(it => it.name))
                                        setPickUpGroupMode("writeGroup")
                                    }}>
                                        add group
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default ShareFolderDetail
