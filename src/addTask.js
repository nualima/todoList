import React, {  useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DialogActions, Dialog, DialogContent,DialogContentText,DialogTitle } from '@mui/material';

export function AddTask(props) {
    const [isOpen, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="newTask">

            <a variant="outlined" onClick={() =>handleClickOpen()}>+ajouter une nouvelle tâche à votre Todo-List</a>
            <Dialog open={isOpen} onClose={() => handleClose()}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        texte
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleClose()}>Cancel</Button>
                    <Button onClick={() => handleClose()}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
} 
