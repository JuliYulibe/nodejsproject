module.exports = class DataBase {
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
    #table_name
    #table_name2
    getConnect(){
        // Создаем соединение с базой данных
        const connect = mysql.createPool(this.#config)
        // Вернем установленное соединение
        return connect
    }
    getAll(res){

        //Обратимся к файлу конфигурации и пепедадим его параметры в функцию подключения к базе данных
        
        
        //Функция для отправки запроса в базду данных
        this.getConnect.query(
           `SELECT * FROM ${this.#table_name}`,
           function(error, result) {
                res.send(result)
           }

        )

       
    }
    getItem(res, id){
        
        this.getConnect.query(
            `SELECT * FROM ${this.#table_name} WHERE ID='${id}'`,
            function(error, result) {
                 res.send(result)
            }
        )
    }
    delItem(res, id){
        
        this.getConnect.query(
            `DELETE FROM ${this.#table_name} WHERE ID='${id}'`,
            function(error, result) {
                 res.send(result)
            }
        )
    }

    getAll(res){

        //Обратимся к файлу конфигурации и пепедадим его параметры в функцию подключения к базе данных
        
        
        //Функция для отправки запроса в базду данных
        this.getConnect.query(
           `SELECT * FROM ${this.#table_name2}`,
           function(error, result) {
                res.send(result)
           }

        )

       
    }
    getItem(res, id){
        
        this.getConnect.query(
            `SELECT * FROM ${this.#table_name2} WHERE ID='${id}'`,
            function(error, result) {
                 res.send(result)
            }
        )
    }
    delItem(res, id){
        
        this.getConnect.query(
            `DELETE FROM ${this.#table_name2} WHERE ID='${id}'`,
            function(error, result) {
                 res.send(result)
            }
        )
    }
}