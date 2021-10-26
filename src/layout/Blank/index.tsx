import {HashRouter as Router, Route, Switch} from "react-router-dom";
import ZFSPage from "../../pages/ZFS";
import StoragePage from "../../pages/Storage";
import PartsPage from "../../pages/Parts";
import DisksPage from "../../pages/Disks";
import UsersPage from "../../pages/Users";
import ShareFolder from "../../pages/ShareFolder";
import AppsPage from "../../pages/Apps";
import * as React from "react";
import BaseLayout from "../Base";
import LoginPage from "../../pages/Login";
import AccountPage from "../../pages/Account";
import DashboardPage from "../../pages/DashBoard";
import ShareFolderDetail from "../../pages/ShareFolderDetail";
import useLayoutModel from "../../model/layout";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import GroupsPage from "../../pages/Groups";
import GroupDetailPage from "../../pages/GroupDetail";
import PoolDetailPage from "../../pages/PoolDetail";
import {OptionsObject, SnackbarMessage, useSnackbar} from "notistack";
import {useEffect} from "react";
import SystemPage from "../../pages/System";
import UserDetail from "../../pages/UserDetail";
import DiskDetailPage from "../../pages/DiskDetail";
import NetworkPage from "../../pages/Network";
import NetworkDetail from "../../pages/NetworkDetail";
import LogsPage from "../../pages/Logs";

export interface BlankLayoutPropsType {

}

const BlankLayout = ({}: BlankLayoutPropsType) => {
    const layoutModel = useLayoutModel()
    const {enqueueSnackbar} = useSnackbar()
    const onGlobalSnackMessage = (e: any) => {
        const {message, options}: { message: SnackbarMessage, options?: OptionsObject } = e.detail
        enqueueSnackbar(message, options)
    }
    useEffect(() => {
        document.addEventListener("globalMessage", onGlobalSnackMessage)
    }, [])
    return (
        <div>
            <Dialog open={layoutModel.confirmDialogController.open}
                    onClose={layoutModel.confirmDialogController.onClose}>
                <DialogTitle>
                    {layoutModel.confirmDialogController.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {layoutModel.confirmDialogController.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {
                        layoutModel.confirmDialogController.onOk &&
                        <Button onClick={() => {
                            if (layoutModel.confirmDialogController.onOk) {
                                layoutModel.confirmDialogController.onOk()
                            }
                            layoutModel.confirmDialogController.onClose()
                        }}>
                            OK
                        </Button>
                    }
                    {
                        <Button onClick={layoutModel.confirmDialogController.onClose}>
                            Cancel
                        </Button>
                    }
                </DialogActions>
            </Dialog>
            <Router>
                <Switch>
                    <Route path="/zfs">
                        <BaseLayout>
                            <ZFSPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/pool/:name/info">
                        <BaseLayout>
                            <PoolDetailPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/storage">
                        <BaseLayout>
                            <StoragePage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/parts">
                        <BaseLayout>
                            <PartsPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/disks">
                        <BaseLayout>
                            <DisksPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/network/:name">
                        <BaseLayout>
                            <NetworkDetail/>
                        </BaseLayout>
                    </Route>
                    <Route path="/network">
                        <BaseLayout>
                            <NetworkPage/>
                        </BaseLayout>
                    </Route>

                    <Route path="/disk/:name">
                        <BaseLayout>
                            <DiskDetailPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/users">
                        <BaseLayout>
                            <UsersPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/user/:name">
                        <BaseLayout>
                            <UserDetail/>
                        </BaseLayout>
                    </Route>
                    <Route path="/folders">
                        <BaseLayout>
                            <ShareFolder/>
                        </BaseLayout>
                    </Route>
                    <Route path="/folder/:name/info">
                        <BaseLayout>
                            <ShareFolderDetail/>
                        </BaseLayout>
                    </Route>
                    <Route path="/my/account">
                        <BaseLayout>
                            <AccountPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/apps">
                        <BaseLayout>
                            <AppsPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/groups">
                        <BaseLayout>
                            <GroupsPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/group/:name/info">
                        <BaseLayout>
                            <GroupDetailPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/home">
                        <BaseLayout>
                            <DashboardPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/system">
                        <BaseLayout>
                            <SystemPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/logs">
                        <BaseLayout>
                            <LogsPage/>
                        </BaseLayout>
                    </Route>
                    <Route path="/">
                        <LoginPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default BlankLayout;
