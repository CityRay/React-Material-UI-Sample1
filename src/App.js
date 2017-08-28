/*
* @Author: RayLin
* @Date:   2017-08-23 13:48:44
* @Last Modified by:   RayLin
* @Last Modified time: 2017-08-25 16:35:20
*/

import React, { Component } from 'react';
import { Indigo500, Indigo700, Cyan500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Styles from './Styles';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  plaette: {
    primary1Color: '#21412a',
    primary2Color: Indigo700,
    accent1Color: Cyan500,
    textColor: Indigo500
  },
  appBar: {
    height: 48
  },
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            errText: {
                fname: '',
                femail: ''
            },
            dialogOpen: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSendForm = this.onSendForm.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onDialogClose = this.onDialogClose.bind(this);
    }

    onInputChange(n, date) {
        console.log(date);
    }

    onCheck() {
        this.setState({
            checked: !this.state.checked
        });
    }

    onDialogClose() {
        this.setState({
            dialogOpen: false
        });
    }

    onSendForm(e) {
        // e.preventDefault();
        console.log('onSendForm');
        const _data = {
            name: document.getElementById('fname').value.trim(),
            email: document.getElementById('femail').value.trim(),
            phone: document.getElementById('fphone').value.trim()
        };
        let _errCount = 0;
        let _errText = {
            fname: '',
            femail: ''
        };

        if (!_data.name) {
            _errText = Object.assign({}, _errText, { fname: 'is Required' });
            _errCount++;
        }
        if (!_data.email) {
            _errText = Object.assign({}, _errText, { femail: 'is Required' });
            _errCount++;
        }

        if (_errCount > 0) {
            e.preventDefault();

            this.setState({
                errText: _errText,
                dialogOpen: true
            });

            return false;
        } else {
            this.setState({
                errText: _errText,
                dialogOpen: false
            });
        }

        console.log(_data);
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onDialogClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.onDialogClose}
            />
        ];


        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div className="container">
                <AppBar
                    title="Title"
                    titleStyle={Styles.header}
                    showMenuIconButton={false}
                />

                <div style={Styles.contentStyle}>
                    <form method="post" onSubmit={this.onSendForm} action="/test">
                        <TextField
                            id="fname"
                            name="fname"
                            hintText="Input Your Name"
                            floatingLabelText="Name"
                            fullWidth={true}
                            errorText={this.state.errText.fname}
                        />
                        <TextField
                            id="femail"
                            name="femail"
                            hintText="Input Your Email"
                            floatingLabelText="Email"
                            type="email"
                            fullWidth={true}
                            errorText={this.state.errText.femail}
                        />
                        <TextField
                            id="fphone"
                            name="fphone"
                            hintText="Input Your Phone"
                            floatingLabelText="Phone"
                            type="phone"
                            fullWidth={true}
                        />

                        <DatePicker
                            id="date"
                            hintText="Select Date"
                            openToYearSelection={false}
                            onChange={this.onInputChange}
                        />

                        <Checkbox
                            label="Simple with controlled value"
                            checked={this.state.checked}
                            onCheck={this.onCheck}
                        />

                        <RaisedButton
                            type="submit"
                            style={Styles.sendBtnStyle}
                            label="Full width"
                            fullWidth={true}
                            secondary={true}
                        />

                        <Dialog
                            title="Dialog With Actions"
                            actions={actions}
                            modal={false}
                            open={this.state.dialogOpen}
                            onRequestClose={this.onDialogClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </form>
                </div>
            </div>
          </MuiThemeProvider>
        );
    }
}

export default App;
