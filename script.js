var form_submit = document.querySelector('#form-submit')

form_submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    var first_name = document.querySelector('[placeholder="firstname"]')
    var last_name = document.querySelector('[placeholder="lastname"]')
    var address = document.querySelector('[placeholder="address"]')
    var pincode = document.querySelector('[placeholder="pincode"]')
    var gender = document.querySelector('[placeholder="gender"]')
    var foods = document.querySelector('#food')
    var state = document.querySelector('[placeholder="state"]')
    var city = document.querySelector('[placeholder="city"]')
    console.log('form submitted')
    console.log(first_name,last_name,address,pincode,gender,foods,state,city)

    var datas = [first_name,last_name,address,pincode,gender,foods,state,city]

    var creating_tr = document.createElement('tr')

    for(var i=0;i<datas.length;i++){
        var creating_td = document.createElement('td')
        creating_td.innerText = datas[i].value
        creating_tr.append(creating_td)
    }

    document.querySelector('tbody').append(creating_tr)
    for(let i of datas){
        i.value = ''
    }
})


//calculator

function calc_func(e){
    var data_calc = document.querySelector('.one-field')
    var value_calc = data_calc.innerText
    console.log(e.innerText)

    var last_element = value_calc.slice(-1)[0]

    exp_arr = ['+','-','*','/']
    if(!exp_arr.includes(last_element) && data_calc.innerText!=''){
        data_calc.innerText = value_calc + e.innerText
    }
    else if(!exp_arr.includes(e.innerText)){
        data_calc.innerText = value_calc + e.innerText
    }
    else{
        console.log('last element is already expression')
    }
}


var key_trigger = document.querySelector('body')

key_trigger.addEventListener('keypress',(e)=>{
    console.log(e)
    var data_calc = document.querySelector('.data')
    if(e.code.includes('Digit') || e.code.includes('Numpad')){
        var value_calc = data_calc.innerText
        data_calc.innerText = value_calc + e.key
    }
    else{
        console.log('Not a number')
    }
    var last_element = value_calc.slice(-1)[0]
    exp_arr = ['+','-','*','/']

    if(!exp_arr.includes(last_element)){
        data_calc.innerText = value_calc + e.key
    }
    else if(!exp_arr.includes(e.innerText)){
        data_calc.innerText = value_calc + e.key
    }
    else{
        console.log('last element is already expression')
    }
})