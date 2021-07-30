import useStyles from './style'
import clsx from 'clsx'
import {TreeItem, TreeView} from "@material-ui/lab";
import {Vdev} from "../../api/zfs";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {randomText} from "../../utils/random";
import {
    AppsRounded,
    DnsRounded,
    LayersRounded,
    Memory,
    SettingsBackupRestoreRounded,
    StorageRounded
} from "@material-ui/icons";
export interface ZFSTreeViewPropsType {
    className?: string
    root:Vdev
}

const ZFSTreeView = ({className,root}: ZFSTreeViewPropsType): React.ReactElement => {
    const classes = useStyles()
    console.log(root)
    const renderRootIcon = (node:Vdev) => {
        switch (node.type) {
            case "disk":
                return (
                    <StorageRounded />
                )
            case "mirror":
                return (
                    <LayersRounded />
                )
            case "raidz":
                return (
                    <DnsRounded />
                )
        }
    }

    const renderTree = (node:Vdev) => {
        const getLabel = () => {
            if (node.path) {
                return node.path
            }
            return node.type
        }
        return (
            <TreeItem nodeId={randomText()} label={getLabel()} icon={renderRootIcon(node)}>
                {
                    node.devices &&  <TreeItem nodeId={randomText()} label="devices" icon={<AppsRounded />}>
                        {
                            node.devices?.map(it => renderTree(it))
                        }
                    </TreeItem>
                }
                {
                    node.l2 &&  <TreeItem nodeId={randomText()} label="l2" icon={<Memory />}>
                        {
                            node.l2?.map(it => renderTree(it))
                        }
                    </TreeItem>
                }
                {
                    node.spares &&  <TreeItem nodeId={randomText()} label="spares" icon={<SettingsBackupRestoreRounded />} >
                        {
                            node.spares?.map(it => renderTree(it))
                        }
                    </TreeItem>
                }

            </TreeItem>
        )
    }
    return (
        <TreeView
            className={classes.root}
            disableSelection
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}

        >
            {
                renderTree(root)
            }
        </TreeView>
    );
}

export default ZFSTreeView
