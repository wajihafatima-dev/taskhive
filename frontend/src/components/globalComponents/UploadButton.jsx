import React, { useState } from 'react';
import { Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const UploadButton = ({ type, accept, handleFileChange,handleFileClick }) => {
    return (
        <Button
            variant="contained"
            component="label"
            startIcon={<UploadFileIcon />}
        >
            Upload PDF
            <input
                type={type}
                hidden
                accept={accept}
                onChange={handleFileChange}
                onClick={handleFileClick}
            />
        </Button>
    );
};

export default UploadButton;
