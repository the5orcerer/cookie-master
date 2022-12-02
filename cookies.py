import requests
dd = {
    'name': 'admin',
    'cookie': 'password=123'
}
req = requests.post('https://cookie-monstar.herokuapp.com/index.php', data=dd)
print(req.text)
print(req.status_code)