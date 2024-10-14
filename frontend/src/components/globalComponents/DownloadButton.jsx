import React from 'react'
import { Button } from '@mui/material'
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { get } from 'firebase/database';

const DownloadButton = ({ text, onClick }) => {
    // const [downloadUrl, setDownloadUrl] = useState('');

    // const handleDownload = async () => {
    //     const db = getDatabase();
    //     const syllabusRef = ref(db, 'syllabus');
    //     try {
    //         const snapshot = await get(syllabusRef);
    //         if (snapshot.exists()) {
    //             const data = snapshot.val();
    //             const firstKey = Object.keys(data)[0]; // Get the first syllabus entry
    //             const fileData = data['-O1C13XzhcvTCt5UJPwa'].docBase64;
    //             const link = document.createElement('a');
    //             link.href = fileData;
    //             link.download = 'syllabus.pdf';
    //             link.click();
    //             console.log('File downloaded');
    //         } else {
    //             console.log('No data available');
    //         }
    //     } catch (error) {
    //         console.error('Error downloading file:', error.message);
    //     }
    // };

    return (
        <>
            <Button
                onClick={onClick}
                variant="contained"
                color="primary"
                style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: 500,
                }}
            >
                {text}
            </Button>
        </>
    )
}

export default DownloadButton;
