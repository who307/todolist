import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

class CustomAlert extends React.Component {

    render() {
        const { modalOpen, modalClose ,message } = this.props;
        

        return (
            <Snackbar
                open={modalOpen}
                autoHideDuration={6000}
                onClose={()=> modalClose()}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}>

                <Alert onClose={() =>modalClose()} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        )
    }
}

export default CustomAlert;