import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DateBox from 'devextreme-react/date-box';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './css/DatePicker.css';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const DatePicker = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { setOpen(true) };
  const handleClose = () => { setOpen(false) };

  const [startValue, setStartValue] = React.useState(new Date());
  const handleMinValue = (e) => { setStartValue(e.value) };

  const [endValue, setEndValue] = React.useState(new Date());
  const handleMaxValue = (e) => { setEndValue(e.value) };

  const close = function () {
    console.log('aa');
  }

  return (<>
    <div dir="rtl">
      <Button onClick={handleOpen}>בחירת טווח תאריכים</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <div className="wrap_pickers">
            <h3>אנא בחר טווח תאריכים</h3>
            <DateBox
              type="datetime"
              className="date_picker"
              value={startValue}
              // max={endValue}
              onValueChanged={handleMinValue}
              showClearButton={true}
              displayFormat=" HH:mm dd/MM/yyyy"
            />
            <DateBox
              type="datetime"
              className="date_picker"
              value={endValue}
              min={startValue}
              onValueChanged={handleMaxValue}
              showClearButton={true}
              onClosed={close}
              displayFormat=" HH:mm dd/MM/yyyy"
            />
            <Button bgcolor="primary">פתח יומן</Button>
          </div>
        </Box>
      </Modal>
    </div>
  </>);
}

export default DatePicker;