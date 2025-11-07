pessoa = {
    "nome": "adriano",
    "idade": 18,
    "curso": "TSI"
}
conversão_json = JSON.stringify(pessoa)
console.log(conversão_json)

//------------------------------------------------------------------------------------------------------------------------------------------------

virar_objeto = JSON.parse(conversão_json)
console.log(virar_objeto)