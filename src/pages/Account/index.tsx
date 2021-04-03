import {ReactElement} from "react";
import useStyles from "./style";
import {Button, Grid, Typography} from "@material-ui/core";
import InfoCard from "../../components/InfoCard";
import useLayoutModel from "../../model/layout";
import ChangePasswordDialog from "../../components/ChangePasswordDialog";
import {changePassword} from "../../api/account";
import {useSnackbar} from "notistack";

export interface AccountPagePropsType {

}

const AccountPage = ({}: AccountPagePropsType): ReactElement => {
    const classes = useStyles()
    const layoutModel = useLayoutModel()
    const {enqueueSnackbar} = useSnackbar()
    return (
        <div className={classes.root}>
            <ChangePasswordDialog
                open={layoutModel.getDialogOpen("changePassword")}
                onCancel={() => layoutModel.switchDialog("changePassword")}
                onOk={async (password) => {
                    await changePassword(password)
                    enqueueSnackbar("password changed", {variant: 'success'})
                    layoutModel.switchDialog("changePassword")
                }}
            />
            <Typography variant={"h5"}>
                {localStorage.getItem("user")}
            </Typography>
            <Grid container spacing={4} className={classes.content}>
                <Grid item>
                    <InfoCard
                        className={classes.card}
                        label={"Password"}
                        value={"******"}
                        bottom={
                            <>
                                <Button onClick={() => layoutModel.switchDialog("changePassword")}>
                                    Change
                                </Button>
                            </>
                        }
                    />
                </Grid>
            </Grid>

        </div>
    )
}

export default AccountPage
