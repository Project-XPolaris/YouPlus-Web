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

export interface BlankLayoutPropsType {

}

const BlankLayout = ({}: BlankLayoutPropsType) => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>

                <Route path="/zfs">
                    <BaseLayout>
                        <ZFSPage/>
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
                <Route path="/users">
                    <BaseLayout>
                        <UsersPage/>
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
                <Route path="/">
                    <BaseLayout>
                        <DashboardPage />
                    </BaseLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default BlankLayout;
