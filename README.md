# Atividade2Parte1

### Questão-01
Explique o que é JSON e por que ele se tornou tão popular para troca de dados
entre aplicações.

R:

JSON é uma notação de objetos JavaScript para troca de dados entre aplicações, que pode ser representada seguindo um certo padrão entre as linguagens de programação.

Ele ficou popular por vários motivos, como por exemplo:

- simplicidade
- compatibilidade
- Formato leve

### EXEMPLO: 

```js
{
    "nome": "adriano",
    "idade": 18,
    "instituição": "ifpb"
}
```

### Questão-02
Qual a diferença fundamental entre JSON.stringify() e JSON.parse()? Dê um
exemplo prático de quando usar cada um.

R:

**JSON.stringify()**: O metodo JSON.stringify() converte um objeto para um JSON 

**JSON.parse()**: Enquanto o JSON.parse() converte uma string JSON para um objeto 

### EXEMPLO: 

```js
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
```

### Questão-03
Considerando a string "JavaScript é baseada em ECMA Script", quais métodos
você usaria para:
-​ Verificar se contém a palavra "Script";
- Remover a palavra "JavaScript" e gerar uma nova string;
- Substituir "baseada" por "tem origem"

R:

Metodos que eu usaria:

- includes(): o metodo includes() permite que possamos fazer uma busca em uma string e se tiver ele vai retornar um True e se não um False
- replace(): o método replace() permite escolher qual palavra queremos remover ou substituir através dos argumentos.
Também podemos inserir uma nova string opcional como substituição

```js

let string = "JavaScript é baseada em ECMA Script"

verificar = string.includes("Script")

console.log(verificar)

//------------------------------------------------------------------------------------------------------------------------------------------------

let removedor = string.replace("JavaScript", "")

console.log(removedor)

//------------------------------------------------------------------------------------------------------------------------------------------------

let substituir = string.replace("baseada", "tem origem")

console.log(substituir)

```

### Questão-04
Qual a vantagem de usar template strings (**`**) em vez de concatenação com +
para criar strings complexas?

R:

**``** consegue ser mais fácil de se formatar as strings, deixando o código mais limpo e mais fácil de ler, além de permitir escrever mais de uma linha por string, possibilitando fazer quebras de linha.

EXEMPLO:

```js
let nome = "adriano"

console.log(`olá, seja bem vindo ${nome} espero que esteja gostando de JS`)

console.log("olá seja bem vindo " + nome + "espero que esteja gostando de JS")
```
