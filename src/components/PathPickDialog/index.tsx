import useStyles from './style'
import clsx from 'clsx'
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    TextField
} from "@material-ui/core";
import {ArrowBack, Folder} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {fetchDirContent, PathItem} from "../../api/path";

export interface PathPickDialogPropsType {
    className?: string,
    open?: boolean
    onClose: () => void
    onOk: (selectPath:string) => void
}

const PathPickDialog = ({className,open = false,onClose,onOk}: PathPickDialogPropsType): React.ReactElement => {
    const classes = useStyles()
    const [content,setContent] = useState<PathItem[]>([])
    const [inputPath,setInputPath] = useState<string>("/")
    const [currentPath,setCurrentPath] = useState<string>(inputPath)
    const refreshContent = async (target = currentPath) => {
        const response = await fetchDirContent(target)
        setContent(response.filter(it => it.type === "Directory"))
        setInputPath(target)
        setCurrentPath(target)
    }
    const onDialogOk = () => {
        if (currentPath !== "/") {
            onOk(currentPath)
        }
    }
    const onGoBack = () => {
        let backPath = currentPath;
        if (!backPath || backPath === "/") {
            return
        }
        if (backPath.startsWith("/")) {
            backPath = backPath.slice(1)
        }
        const parts = backPath.split("/")
        parts.pop()
        if (parts.length == 0) {
            setCurrentPath("/")
            return
        }
        setCurrentPath(parts.join("/"))
    }
    useEffect(() => {
        refreshContent()
    },[currentPath])
    return (
        <Dialog onClose={onClose} open={open} className={clsx(className,classes.root)}>
            <div className={classes.header}>
                <IconButton className={classes.backButton} size={"small"} onClick={() => onGoBack()}>
                    <ArrowBack />
                </IconButton>
                <TextField
                    className={classes.pathInput}
                    size={"small"}
                    value={inputPath}
                    onChange={(e) => {
                        setInputPath(e.target.value)
                    }}
                />
                <Button
                    className={classes.goButton}
                    size={"small"}
                    onClick={() => refreshContent(inputPath)}
                >
                    Go
                </Button>
            </div>
            <List className={classes.list}>
                {
                    content.map(it => (
                        <ListItem
                            button key={it.path}
                                  onClick={() => {
                                      setInputPath(it.path)
                                      setCurrentPath(it.path)
                                  }}>
                            <ListItemAvatar>
                                <Folder />
                            </ListItemAvatar>
                            <ListItemText primary={it.name}/>
                        </ListItem>
                    ))
                }
            </List>
            <DialogActions>
                <Button onClick={onDialogOk}>
                    Select
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PathPickDialog