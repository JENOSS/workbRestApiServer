module.exports = function (app,Contract) {

    const request = require('request');

    app.get('/api/getPendingPTJContract/:phoneNumber',  (req, res) => {
        var phoneNumber = req.params.phoneNumber;
        let answer = null;
       // console.log(phoneNumber);
        //const request = require('request');
        let url = "http://54.180.107.228:3000/api/queries/selectPendingPTJContractByPhoneNumber?employeePhoneNumber="+phoneNumber+"&employerPhoneNumber="+phoneNumber;
        //console.log(phoneNumber);
        //console.log(url);
        //console.log(phoneNumber);
        request(url,(error, response, body) => {
            if(error) {
                // If there is an error, tell the user 
                //console.log('hello');
                res.send('An erorr occured');
            }
            // Otherwise do something with the API data and send a response
            else {
                console.log(body);
                //res.json(body);
                res.send(body);
                
            }
        }); 
    });    

    app.get('/api/getCompletePTJContract/:phoneNumber',  (req, res) => {
        var phoneNumber = req.params.phoneNumber;
        let answer = null;
       // console.log(phoneNumber);
        //const request = require('request');
        let url = "http://54.180.107.228:3000/api/queries/selectCompletePTJContractByPhoneNumber?employeePhoneNumber="+phoneNumber+"&employerPhoneNumber="+phoneNumber;
        //console.log(phoneNumber);
        console.log(url);
        console.log(phoneNumber);
        request(url,(error, response, body) => {
            if(error) {
                // If there is an error, tell the user 
                //console.log('hello');
                res.send('An erorr occured');
            }
            // Otherwise do something with the API data and send a response
            else {
                console.log(body);
                //res.json(body);
                res.json(body[0]);
                
            }
        }); 

    });    


    app.post("/api/createPTJContract", function (req, res) {
        //console.log("Call to /token");
        //var token = "a"
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        var options = {
            url: 'http:/54.180.107.228:3000/api/CreateNewPTJContract',
            method: 'POST',
            headers: headers,
            body: {
                "$class": "org.ssu.workb.CreateNewPTJContract",
                "company": req.body.company,
                "employeeName": req.body.employeeName,
                "employerName": req.body.employerName,
                "employeePhoneNumber": req.body.employeePhoneNumber,
                "employerPhoneNumber": req.body.employerPhoneNumber,
                "year": req.body.year,
                "month": req.body.month,
                "day": req.body.day,
                "stat": "pendding",
                "wage": req.body.wage,
                "workday": req.body.workday,
                "workHour": req.body.workHour,
                "period": req.body.period
               
            },
            json : true
        }
        console.log(req.body.company)
        console.log(req.body.employeeName)
        console.log(req.body.employerName)
        console.log(req.body.employeePhoneNumber)
        console.log(req.body.employerPhoneNumber)
        console.log(req.body.year)
        console.log(req.body.month)
        console.log(req.body.day)
        console.log(req.body.wage)
        console.log(req.body.workday)
        console.log(req.body.workHour)
        console.log(req.body.period)

        request(options, function (error, response, body) {
            if (!error && res.statusCode == 200) {
                console.log(body)
                res.json({result: 1})
            } else {
                console.log(body)
                res.json({result: 0})
            }
        });
    });
}