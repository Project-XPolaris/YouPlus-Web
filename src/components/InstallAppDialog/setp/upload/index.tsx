import useStyles from './style'
import clsx from 'clsx'
import {Button, LinearProgress, Typography} from "@material-ui/core";
import {ChangeEvent} from "react";
import styled from "@emotion/styled";

export interface UploadStepPropsType {
    className?: string
    filename?:string
    onFileChange:(file:File) => void
    isUpload:boolean

}
const Input = styled('input')({
    display: 'none',
});
const UploadStep = ({className,filename,onFileChange,isUpload}: UploadStepPropsType): React.ReactElement => {
    const classes = useStyles()
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }
        const file = e.target.files[0]
        onFileChange(file)
    }
    return (
       <div className={clsx(className,classes.root)}>
           <div>
               <div>
                   {
                       filename && <Typography variant={"h6"}>{filename}</Typography>
                   }
               </div>
               {
                   isUpload &&  <LinearProgress className={classes.progress} />
               }

           </div>

           <label htmlFor="contained-button-file">
               <Input accept=".upk" id="contained-button-file" type="file" onChange={onInputChange}/>
               <Button variant="contained" component="span" disabled={isUpload}>
                   Upload
               </Button>
           </label>
       </div>
    )
}

export default UploadStep
