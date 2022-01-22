import React from 'react';
// import { connect } from 'react-redux';
import { useHistory } from 'react-router';
// import { Button, TextField, Grid } from '@material-ui/core';

// import { getData } from '../store/actions/home';
import './css/Home.css';
import NavBar from './NavBar';
import newLogo from '../images/LogoNoBack.png';
import bussinessLogImg from '../images/BussinessLogExample.jpg';
import calendarImg from '../images/CalendarExample.jpg';
import logImg1 from '../images/LogExample1.jpg';
// import { Button } from '@mui/material';

const Home = () => {
    const history = useHistory();
    // useEffect(() => {
    //     function getData1() {
    //         props.getData();
    //     }
    //     getData1()
    // }, [])

    return (<>
        <div className="black" >
            <NavBar />
            <div>
                <img src={newLogo} alt={newLogo} className="mainLogo" />
                <p className="sec_slogen" >
                    <label>.פלאנגו</label>
                    <br />
                    <br />
                    מתכננים ונפגשים
                    <br />
                    !יותר פשוט מזה, אין
                    <br />
                </p>
            </div >
        </div>
        <div className="examples" >
            <div className="example" >
                <img src={logImg1} alt={logImg1} onClick={() => { }}
                    className="img_for_example_left" />
                { /* <img src={logImg2} className="img_for_example"/> */}
                <div className="wrap_title_p" >
                    <h3> קביעת מפגש / יציאה </h3>
                    <p >
                        כדי לתכנן מפגש, כל מה שאתה עושה זה פותח יומן,
                        <br />
                        בוחר תאריכים אופציונאליים למפגש ושולח לינק לחברי הקבוצה
                        <br />
                        כל אחד מחברי הקבוצה בוחר כמה ימים שבהם הוא פנוי
                        <br />
                        ולאחר מכן המערכת בוחרת את היום שמתאים לכולם
                        <br />
                        ככה אפשר לצאת בקלות וללא טרחה מיותרת
                    </p>
                    <a href="/LogList" > למעבר לכל המפגשים </a>
                </div >
            </div>

            <div className="example" >
                <div className="wrap_title_p" >
                    <h3 > קביעת פגישה עסקית </h3>
                    <p>
                        אם אתה רוצה לבצע פגישה עסקית
                        <br />
                        כל שתצטרך לעשות זה לוודא שאתה פותח יומן לפגישה עסקית,
                        <br />
                        כפתור קטן שגורם להגדרות להשתנות טיפה
                        <br />
                        גורם לכל פגישה עסקית להיות קלה בהרבה
                    </p>
                    <a href="/LogList" > למעבר לכל המפגשים </a>
                </div >
                <img src={bussinessLogImg} alt={bussinessLogImg} onClick={() => { }}
                    className="img_for_example_right" />
            </div>

            <div className="example" >
                <img src={calendarImg} alt={calendarImg} onClick={() => { }}
                    className="img_for_example_left" />
                <div className="wrap_title_p" >
                    <h3 > לוח שנה </h3>
                    <p >

                    </p>
                    <a href="/CalendarList" > למעבר לכל לוחות השנה </a>
                </div >
            </div>
        </div>
    </>)
}
export default Home;

// const myMapStateToProps = (state) => {
//     return {}
// }

// export default connect(myMapStateToProps, { getData })(Home);