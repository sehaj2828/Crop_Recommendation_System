// document.getElementById('basic').addEventListener('click', displayInfo)
document.getElementById('irisForm').addEventListener('submit', displayInfo)

function displayPrediction() {
    document.getElementById('output').style.display = 'block'
}

function displayInfo (e) {
    e.preventDefault()

    let nitrogen_value = document.getElementById('nitrogen_value').value
    let phosphorus_value = document.getElementById('phosphorus_value').value
    let potassium_value = document.getElementById('potassium_value').value
    let humidity_value = document.getElementById('humidity_value').value
    let ph_value = document.getElementById('ph_value').value
    let temperature_value = document.getElementById('temperature_value').value
    let rainfall_value = document.getElementById('rainfall_value').value

    fetch('http://localhost:5000/', {
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify({
            "nitrogen_value" : nitrogen_value,
            "phosphorus_value" : phosphorus_value,
            "potassium_value" : potassium_value,
            "humidity_value" : humidity_value,
            "ph_value" : ph_value,
            "temperature_value" : temperature_value,
            "rainfall_value" : rainfall_value
         })
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (data.predicted_value == 1) {
                crop_name = 'Rice'
            }
            else if (data.predicted_value == 2) {
                crop_name = 'Maize'
            }
            else if (data.predicted_value == 3) {
                crop_name = 'chickpea'
            }
            else if (data.predicted_value == 4) {
                crop_name = 'kidney beans'
            }
            else if (data.predicted_value == 5) {
                crop_name = 'pigeon peas'
            }
            else if (data.predicted_value == 6) {
                crop_name = 'moth beans'
            }
            else if (data.predicted_value == 7) {
                crop_name = 'mungbean'
            }
            else if (data.predicted_value == 8) {
                crop_name = 'black gram'
            }
            else if (data.predicted_value == 9) {
                crop_name = 'lentil'
            }
            else if (data.predicted_value == 10) {
                crop_name = 'pomegranate'
            }
            else if (data.predicted_value == 11) {
                crop_name = 'banana'
            }
            else if (data.predicted_value == 12) {
                crop_name = 'mango'
            }
            else if (data.predicted_value == 13) {
                crop_name = 'grapes'
            }
            else if (data.predicted_value == 14) {
                crop_name = 'watermelon'
            }
            else if (data.predicted_value == 15) {
                crop_name = 'muskmelon'
            }
            else if (data.predicted_value == 16) {
                crop_name = 'apple'
            }
            else if (data.predicted_value == 17) {
                crop_name = 'orange'
            }
            else if (data.predicted_value == 18) {
                crop_name = 'papaya'
            }
            else if (data.predicted_value == 19) {
                crop_name = 'coconut'
            }
            else if (data.predicted_value == 20) {
                crop_name = 'cotton'
            }
            else if (data.predicted_value == 21) {
                crop_name = 'jute'
            }
            else {
                crop_name = 'coffee crops'
            }
            document.getElementById('output').innerHTML = `Recommended crop is ${crop_name}`
        })
}