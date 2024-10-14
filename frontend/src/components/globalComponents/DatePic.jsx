
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';

function Label({ label }) {
  const content = (
    <span>
     {label}
    </span>
  );

  return content;
}

export default function DatePic({ label, onChange, value }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label={<Label label={label} />}>
        <DatePicker value={value} onChange={onChange} />
      </DemoItem>
    </LocalizationProvider >
  );
}


