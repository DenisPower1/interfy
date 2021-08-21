
###### Esse tutorial pressupõe que você tenha pelo menos conhecimento intermediário em Javascript.

Para começar a usar o **Interfy** é muito simples, basta você importar ele em sua página a partir de uma tag script.

## Instalacção

```Javascript
<script src="https://cdn.jsdelivr.net/gh/DenisPower1/interfy@1.0.0/interfy.js"></script>
```

Você também pode baixar o arquivo js para poderes usar localmente, clique em [baixar](https://github.com/DenisPower1/interfy/releases/download/v1.0.0/interfy.min.js)

## Usando

O Interfy dá para nós um constructor, chamado de **Interfy** e quando nós instanciarmos ele teremos os seguintes métodos.

* createRouter() - É usado para criar o roteador, ele apenas aceita uma função como o seu argumento, a referida função será executada toda vez que uma requisição for feita.
* setPath() - Esse método é usado para mudar de rota, e a rota deve ser o argumento desse método.
* useHash() - Esse método funcional idêntico ao *setPath()*, a diferença é que usamos ele quando queremos que as rotas tenham uma cerquilha (#).

### Exemplo

```Javascript

const int=new Interfy();

// Cria o router.

int.createRouter((req)=>{

alert(req.url) // Exibe a url requisitada.

//req.url == /paises/angola.

})

int.setPath("/paises/angola")


```

Isso que nós vimos é o básico da biblioteca.

### Varíaveis.

No Interfy variável é uma parte da routa que é dinámica.

Por exemplo temos a seguinte rota: /africa/pais a routa principal é /africa e sub routa(rota filha) e /pais só que essa sub routa
será variável(vai alternando). Ela pode ser:

* /africa/angola
* /africa/mozambique
* /africa/zambia

Então, para nós sabermos qual é a sub routa(rota filha) de uma determinada routa devemos usar a váriavel.



```Javascript

const int=new Interfy();

int.createRouter((req)=>{

const sub_routa=req.is("/africa/(pais)");

if(sub_routa){

const oPais=req.getVar("/africa/(pais)").pais.

alert(oPais) // Vai exibir o valor da variável pais.

// opais == angola

}

})

int.setPath("/paises/angola")


```


Tá tudo explicito né? Agora vamos conhecer profundamente o parametro **req** que está sendo muito usado aqui.

o req seria uma abreviação para requisição ou request, ele é um objecto que tem alguns métodos e propriedade que vão
nos nos fornecer mais informações sobre a url requisita.

### url 

É uma propriedade só de leitura, que nós permite obter a rota requisitada

### is() 

É um método que nós permite verificar a estrutura da rota(quando ela tem sub rotas váriaveis), se a estrutura for verdadeira retorna true caso o contraio retorna false.



```Javascript



int.createRouter((req)=>{

const id_do_usuario=req.is("/user/(id)");
// Se a rota for /user/38849 ou user/48894 ou qualquer mas que tenha  esssa estrutura(/user/qualquerValor) 
// o método vai retornar true.

})



```Javascrript

E nós podemos usar o asterístico para segnificar qualquer coisa.

int.createRouter((req)=>{

const rota=req.is("/info/*");

if(rota){

// A rota é /info/qualquercoisa por exemplo : info/2021/inter-o-framework-js-simples.

}


})
````

### getVar() 

É um método que nós permite ler a variável, ela recebe apenas um argumento, que deve ser a rota com a variável e esse método vai retornar um objecto em que as proprieades são os nomes das váriaveis e os valores são os valores das variáveis.


```Javascrit

const int=new Interfy()

int.createRouter((req)=>{

const id_do_usuario=req.is("/user/(id)");

if(id_do_usuario){

const id=req.getVar("/user/(id)").id;

alert(id) // vai imprimir o valor da variável id.

//id == 38849444

}

})

int.setPath("/user/38849444");

```

## Conclusão

Viu como o Interfy é simples, intuitivo, pequeno e divertido? Gostou? Então deixe-me saber estrelando esse repositório e você também pode dar uma olhada no [Inter](https://github.com/DenisPower1/inter).


## Seja feliz.
