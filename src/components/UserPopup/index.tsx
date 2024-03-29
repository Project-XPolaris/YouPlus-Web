import useStyles from "./style";
import {Avatar, Button, ButtonBase, Card, Divider, Popover, PopoverProps, Typography} from "@material-ui/core";
import {Person} from "@material-ui/icons";

export interface UserPopupPropsType  {
    username: string
    onLogout: () => void
}

const UserPopup = ({onLogout,username,...other}: UserPopupPropsType & PopoverProps) => {
    const classes = useStyles()
    return (
        <Popover {...other}>
            <Card className={classes.root}>
                <Avatar className={classes.avatar} >
                    <Person />
                </Avatar>
                <Typography variant={"h5"}>
                    {username}
                </Typography>
                <Divider/>
                <Button variant={"outlined"} onClick={onLogout}>
                    Sign out
                </Button>
            </Card>
        </Popover>
    )
}

export default UserPopup;
