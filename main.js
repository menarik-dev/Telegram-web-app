 let tg = window.Telegram.WebApp;
    let buy = document.getElementById('buy');
    let order = document.getElementById('order');
    tg.expand()

    buy.addEventListener('click', () => {
        document.getElementById('main').style.display = 'none';
        document.getElementById('form').style.display = 'block';
        // document.getElementById('name').value = tg.initDataUnsafe.user.first_name + '' + tg.initDataUnsafe.user.last_name;
    });

    order.addEventListener('click', ()=>{
        document.getElementById('error').innerText = '';

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;

        if (name.length < 5){
            document.getElementById('error').innerText = "Something is wrong with name";
            document.getElementById('error').style.color = "red";
            return;
        }
        if (email.length < 5){
            document.getElementById('error').innerText = "Something is wrong with email"
            document.getElementById('error').style.color = "red";
            return;
        }
        if (phone.length < 5){
            document.getElementById('error').innerText = "Something is wrong with phone"
            document.getElementById('error').style.color = "red";
            return;
        }

        let data = {
            'name': name,
            'email': email,
            'phone': phone
        }
        tg.sendData(JSON.stringify(data));
        tg.close(); 
    })
