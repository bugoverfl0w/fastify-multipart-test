# install
- npm install
- cp fastify-multipart.index.js node_modules/fastify-multipart/index.js

# build
bash -x b

# run
cd build/; nodemon index.js

# test
- file init/Middlewares.js, line 10: update removeBracketsOnFieldName to true/false (default is false)
- test curls

- removeBracketsOnFieldName: false
```bash
curl 2>/dev/null --location --request POST 'http://localhost:6969/test' --header 'x-access-token: ndMrZO9Y2CWaoUe1' --header 'Content-Type: multipart/form-data' --header 'Cookie: PHPSESSID=fd0k8qipgadolnqkv0jeomgpge' --form 'ids[]="27"' --form 'common="1"' --form 'ids[]="10"' | python -m json.tool
```
```json
{
    "common": "1",
    "ids[]": [
        "27",
        "10"
    ]
}
```

- removeBracketsOnFieldName: true
```bash
curl 2>/dev/null --location --request POST 'http://localhost:6969/test' --header 'x-access-token: ndMrZO9Y2CWaoUe1' --header 'Content-Type: multipart/form-data' --header 'Cookie: PHPSESSID=fd0k8qipgadolnqkv0jeomgpge' --form 'ids[]="27"' --form 'common="1"' --form 'ids[]="10"' | python -m json.tool
```
```json
{
    "common": "1",
    "ids": [
        "27",
        "10"
    ]
}
```