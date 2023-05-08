import mongojs from 'mongojs'

const connectionUrl ="mongodb+srv://admin:root@cluster0.cwczp38.mongodb.net/srvretryWrites=true&w=majority"

const db=mongojs(connectionUrl)

db.on()