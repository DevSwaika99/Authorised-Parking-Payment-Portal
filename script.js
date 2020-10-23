var emails = ['rahul@gmail.com', 'aditya@gmail.com']

var login_password = '1234567'

$(".auth-login").click(function () {

    var email = $('.email').val()
    var password = $('.password').val()

    var f = 0

    emails.forEach(element => {

        if (email == element) {
            f = 1
        }

    })

    if (f == 1) {

        if (password == login_password) {
            alert('logged in')

            window.location.replace("./parking.html")
        }
        else {
            alert('wrong password')
        }
    }
    else {
        alert('email doesn\'t exists ')
    }

})

//global variables for storing data

var car_nos = []
var car_brands = []
var time_in = []
var time_out = []
var fares = []
var place = 'MG Road'

document.getElementById("myTime1").defaultValue = new Date().toLocaleTimeString('it-IT')
document.getElementById("myTime2").defaultValue = new Date().toLocaleTimeString('it-IT')



$(".calc_fare").click(function () {


    car_nos.push($('.car_no').val())

    car_brands.push($('.car_type').val())

    time_in.push($('.time_in').val())

    time_out.push($('.time_out').val())


    var in1 = parseInt(($('.time_in').val())[0] + ($('.time_in').val())[1])
    var in2 = parseInt(($('.time_in').val())[3] + ($('.time_in').val())[4])

    var out1 = parseInt(($('.time_out').val())[0] + ($('.time_out').val())[1])
    var out2 = parseInt(($('.time_out').val())[3] + ($('.time_out').val())[4])


    var minutes_elapsed = 0

    if ((out1 - in1) * 60 + (out2 - in2) > 0) {

        minutes_elapsed += (out1 - in1) * 60 + (out2 - in2)

    }
    else {
        minutes_elapsed += (24 * 60) - (out1 - in1) * 60 + (out2 - in2)
    }

    // console.log(minutes_elapsed)

    var fare = 0

    if (minutes_elapsed <= 30) {
        fare += 10
    }
    else {
        fare += (10 + ((minutes_elapsed - 30) / 30) * 5)
    }
    fare=Math.round(fare*100)/100 
    fares.push(fare)

    alert('Your Fare is Rs. ' + fare)


})



$(".pay").click(function () {


    alert('Fare Paid !')

    $('.table').css("display", "initial")

    var table_data = ''


    for (let i = 0; i < car_nos.length; i++) {

        table_data += '<tr>'

        table_data += '<td>' + '23/10/2020' + '</td>'
        table_data += '<td>' + car_nos[i] + '</td>'
        table_data += '<td>' + car_brands[i] + '</td>'
        table_data += '<td>' + time_in[i] + '</td>'
        table_data += '<td>' + time_out[i] + '</td>'
        table_data += '<td>' + place + '</td>'
        table_data += '<td>' + fares[i] + '</td>'

        table_data += '</tr>'
    }


    $('.table').html('<table>' + ('<tr> <th>Date</th> <th>Car no.</th> <th>Car brand</th> <th>Time in</th> <th>Time out</th> <th>Street</th> <th>Fare</th> </tr>' + table_data) + '</table>')

})


