var db = require('../db');

exports.booking = function(req, res) {

    const staffId = res.locals.userDetails.id;

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    
    db.query(q, (err, result)=>{
        
        if(err) {
            console.log(err);
        }
        else {
            const academicYear = result[0].academic_year,
                semester = result[0].semester,
                programme = req.body.programme,
                year = req.body.year,
                lab = req.body.lab,
                date = req.body.date,
                from = req.body.from,
                to = req.body.to,
                purpose = req.body.purpose,
                day = weekday[new Date(date).getDay()],
                tdyDate = new Date(new Date().getTime()+ 330*60*1000).toISOString().slice(0, 10).replace('T', ' ');

            q = `SELECT * FROM schedule WHERE academicYear="${academicYear}" AND semester="${semester}" AND lab="${lab}" AND _day="${day}" AND period>=${from} AND period<=${to};`;

            db.query(q, (err, result) => {
                
                if(err) {
                    console.log(err);
                }
                else {
                    if(result.length != 0 ) {
                        console.log("Already Scheduled");
                        res.render("to_book", {title: "Lab Booking", menu: "To Book", alert: "Already Scheduled!", role: res.locals.role});
                    }
                    else {
                        q = `SELECT * FROM blocking WHERE academic_year="${academicYear}" AND semester="${semester}" AND lab="${lab}" AND _day="${day}" AND (((${from} BETWEEN fromperiod AND toperiod) OR (${to} BETWEEN fromperiod AND toperiod)) OR (fromperiod>=${from} AND toperiod<=${to}));`;

                        db.query(q, (err, result) => {
                            if(err) {
                                console.log(err);
                            }
                            else {
                                if(result.length != 0) {
                                    console.log("Already Blocked");
                                    res.render("to_book", {title: "Lab Booking", menu: "To Book", alert: "Already Blocked!", role: res.locals.role});
                                }
                                else {

                                    q = `INSERT INTO booking VALUES("${staffId}", "${academicYear}", "${semester}", "${programme}", ${year}, "${lab}", "${date}", "${tdyDate}", ${from}, ${to}, "${purpose}");`;

                                    db.query(q, (err, result) => {
                                        if(err) {
                                            console.log(err);
                                        }
                                        else {
                                            console.log("Booked Successfully");
                                            res.render("to_book", {title: "Lab Booking", menu: "To Book", success: "Booked Successfully!", role: res.locals.role});
                                        }

                                    })
                                    
                                }
                            }
                        })
                    }
                }
            })
        }
    })
}

exports.bookingDetails = function(req, res) {

    const start = req.body.sdate,
        end = req.body.edate;
    
    const q = `SELECT * FROM booking WHERE bookingDate >= "${start}" AND bookingDate <= "${end}" order by bookingDate;`;
    db.query(q, (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            // console.log(result);
            res.render("booking_details", {title: "Lab Booking", menu: "Booking Details", table: result });
        }
    })

}


exports.view_booking = (req, res)=>{
    const staffid = res.locals.userDetails.id;

    let q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;

    db.query(q, (err, result)=>{
        if(err){
            console.log(err)
        }
        else{         
            q = `SELECT * FROM booking WHERE staffId="${staffid}" and academic_year="${result[0].academic_year}" and semester="${result[0].semester}" order by entryDate desc;`;
            db.query(q, (err, result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.render("view_booking", {title: "Lab Booking", menu: "View Booking", bookings: result, role: res.locals.role});
                }
            })
        }
    })
}

exports.cancelBooking = function(req, res) {

    let q = `SELECT academic_year, semester from course_dates where '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date and end_date;`;
    
    db.query(q, (err, result)=>{
        
        if(err) {
            console.log(err);
        }
        else {

            const staffId = res.locals.userDetails.id;

            const academicYear = result[0].academic_year,
                semester = result[0].semester,
                tdyDate = new Date(new Date().getTime()+ 330*60*1000).toISOString().slice(0, 10).replace('T', ' ');
            
            q = `SELECT * FROM booking WHERE academic_year="${academicYear}" AND semester="${semester}" AND staffId="${staffId}" AND bookingDate>="${tdyDate}";`;

            db.query(q, (err, result) => {
                if(err) {
                    console.log(err);
                }
                else {
                    // console.log(result);
                    res.render("cancel_booking", {title: "Lab Booking", menu: "Cancel Booking", table: result, role: res.locals.role});
                }
            })

        }
    })
}

exports.toCancel = function(req, res) {

    let q = `SELECT academic_year, semester from course_dates WHERE '${new Date().toISOString().slice(0, 10)}' BETWEEN start_date AND end_date;`;
    
    db.query(q, (err, result)=>{
        
        if(err) {
            console.log(err);
        }
        else {

            const staffId = res.locals.userDetails.id;

            const academicYear = result[0].academic_year,
                semester = result[0].semester,
                year = req.body.year,
                programme = req.body.programme,
                lab = req.body.lab,
                date = req.body.date,
                from = req.body.from,
                to = req.body.to,
                purpose = req.body.purpose;

            q = `DELETE FROM booking WHERE academic_year="${academicYear}" AND semester="${semester}" AND staffId="${staffId}" AND _year=${year} AND programme="${programme}" AND lab="${lab}" AND bookingDate="${date}" AND fromperiod=${from} AND toperiod=${to} AND purpose="${purpose}";`;

            db.query(q, (err, result) => {
                if(err) {
                    console.log(err);
                }
                else {
                    res.redirect("/cancel-booking");
                }
            })
        }
    })
}

