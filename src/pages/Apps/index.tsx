import React from 'react';
import {
    Box,
    Button,
    Chip,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select
} from "@material-ui/core";
import useAppsPageModel from "./model";
import useStyles from "./style";
import InstallAppDialog from "../../components/InstallAppDialog";
import useLayoutModel from "../../model/layout";
import {Add, Delete, DeleteForever, PlayArrow, Stop} from "@material-ui/icons";
import {useInterval} from "ahooks";
import PageHead from "../../components/PageHead";
import {usePageHeadController} from "../../components/PageHead/hook";
import {App} from "../../api/apps";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";


interface AppsPagePropsType {

}


export default function AppsPage({}: AppsPagePropsType) {
    const classes = useStyles();
    const model = useAppsPageModel()
    const layoutModel = useLayoutModel()
    const pageHeadController = usePageHeadController({})
    useInterval(() => {
        model.loadApp();
    }, 3000, {immediate: true})
    const [typeFilter, setTypeFiler] = React.useState<string[]>(["Service","Container"]);
    const onTypeFilterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTypeFiler(event.target.value as string[]);
    };
    const getAppListRow = (): App[]  => {
        return model.appList.filter(app => {
            return typeFilter.find(it => it === app.type) !== undefined
        })
    }
    const appColumns:GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
            editable: false,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 320,
            editable: false,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: false,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 150,
            editable: false,
        },
        {
            field: 'action',
            headerName: 'Actions',
            type: 'number',
            flex: 1,
            editable: false,
            disableExport: true,
            disableReorder: true,
            disableColumnMenu: true,
            renderCell:params => {
                return (
                    <div>
                        {
                            params.row.status === "Stop" &&
                            <IconButton size={"small"} onClick={() => {
                                model.start(params.row.id)

                            }}>
                                <PlayArrow />
                            </IconButton>
                        }
                        {
                            params.row.status === "Running" &&
                            <IconButton size={"small"} onClick={() => {
                                model.stop(params.row.id)

                            }}>
                                <Stop />
                            </IconButton>
                        }
                        {
                            params.row.status === "Stop" &&
                            <IconButton size={"small"} onClick={() => {
                                model.uninstall(params.row.id)
                            }}>
                                <DeleteForever />
                            </IconButton>
                        }
                    </div>

                )
            }
        },
    ];
    return (
        <div className={classes.root}>
            <InstallAppDialog
                open={layoutModel.getDialogOpen('installApp')}
                onClose={() => {
                    layoutModel.switchDialog("installApp")
                }}
                onOk={() => {
                    layoutModel.switchDialog("installApp")
                }}
            />
            <PageHead
                title={"Apps"}
                className={classes.pageHead}
                controller={pageHeadController}
                actions={<>
                    <Button
                        variant="text"
                        onClick={() => layoutModel.switchDialog("installApp")}
                        color="secondary"
                        startIcon={<Add/>}
                    >
                        Install App
                    </Button>
                </>}
            />
            <div className={classes.content}>
                <Paper className={classes.appListContainer}>

                    <div className={classes.appListHeader}>
                        <FormControl>
                            <InputLabel variant="standard">
                                Filter by type
                            </InputLabel>
                        <Select
                            className={classes.appTypeFilter}
                            multiple
                            value={typeFilter}
                            onChange={onTypeFilterChange}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            <MenuItem
                                key="1"
                                value="Service"
                            >
                                Service
                            </MenuItem>
                            <MenuItem
                                key="2"
                                value="Container"
                            >
                                Container
                            </MenuItem>
                        </Select>
                        </FormControl>

                    </div>
                    <div className={classes.appList}>
                        <DataGrid
                            rows={getAppListRow()}
                            columns={appColumns}
                            disableSelectionOnClick
                            autoPageSize={false}
                            disableColumnSelector
                        />
                    </div>
                </Paper>
            </div>

        </div>
    );
}
