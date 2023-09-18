const mysql = require('mysql')


module.exports = class User{
    #config = {
        host: "94.228.126.172",
        port: 3306,
        user: "inordic_sch_usr",
        password: "VANCfzNsov9GDt1M",
        database: "inordic_school",
        connectionLimit :  1000,
        connectTimeout  :  60 * 60 * 1000,
        acqureTimeout   :  60 * 60 * 1000,
        timeout         :  60 * 60 * 1000
    }

    getAll(res){
        //Создаем соединение с базой данных
        const connect = mysql.createPool(this.#config)
        //Отправим запрос к базе данных 
        connect.query(
            'SELECT * FROM users',
            //Функция обратного вызова
            function(error, result){
                res.send(result)
        }
        )
    }

    getItem(res, id){
        const connect = mysql.createPool(this.#config)
        connect.query(
            `SELECT * FROM users WHERE ID='${id}'`,
            function(error, result) {
                 res.send(result)
            }
        )
    }
    delItem(res, id){
        const connect = mysql.createPool(this.#config)
        connect.query(
            `SELECT * FROM users WHERE ID='${id}'`,
            function(error, result) {
                 res.send(result)
            }
        )
    }
  
}