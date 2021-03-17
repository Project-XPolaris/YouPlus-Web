import {createMuiTheme} from '@material-ui/core/styles';
import {blue, green, indigo, yellow} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[700],
        },
        secondary: {
            main: yellow[800],
        },

    },
});
export default theme