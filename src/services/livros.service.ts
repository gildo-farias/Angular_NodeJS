import { Injectable } from '@angular/core';
import { Livro } from 'src/model/livro';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LivrosService {

  l1:Livro = {
    cod:101,
    ISBN: "454LH5487Q875",
    gen: "FANTASIA",
    tit:"O Senhor do Aneis",
    subTit:"O Retorno do Rei",
    autor: "J.R.R. TOLKIEN",
    ano:1998,
    img: "https://images-na.ssl-images-amazon.com/images/I/71SuFTR7OIL.jpg",
    locado:false,    
  }
  l2:Livro = {
    cod:102,
    ISBN: "123ASD5487Q987",
    gen: "FANTASIA",
    tit:"Harry Potter",
    subTit:"O Prisioneiro de Azkaban",
    autor: "J.K. Rowling",
    ano:2005,
    img:"https://images-na.ssl-images-amazon.com/images/I/513CEK-RP5L._SX329_BO1,204,203,200_.jpg",
    locado:false,    
  }
  l3:Livro = {
    cod:103,
    ISBN: "797R8YR1T32",
    gen: "ROMANCE",
    tit:"50 Tons de Cinza",
    subTit:"Tons Mais Escuros",
    autor: "EL James",
    ano:2015,
    img: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12103001/1006790814.jpg?v=637142225123270000",
    locado:true,    
  }  
  l4:Livro = {
    cod:104,
    ISBN: "647TR87U4Y8T5",
    gen: "FANTASIA",
    tit:"As Cronicas do Gelo e Fogo",
    subTit:"Dança dos Dragões",
    autor: "Georgie RR Martin",
    ano:2015,
    img: "https://gameofthronesmobile.files.wordpress.com/2012/03/430065_306631979400120_233632190033433_831347_1067265071_n.jpg",
    locado:true,         
  }
  l5:Livro = {
    cod:105,
    ISBN: "454LH5487Q875",
    gen: "MOTIVACIONAL",
    tit:"A Arte Da Guerra",
    subTit:"Os 13 Capitulos Originais",
    autor: "SUN TZU",
    ano:2015,
    img: "https://images-na.ssl-images-amazon.com/images/I/517GPriXSPL.jpg",
    locado:false,    
  }  
  l6:Livro = {
    cod:106,
    ISBN: "9788580575392",
    gen: "AVENTURA",
    tit:"Percy Jackson e Os Olimpianos",
    subTit:"O Ladrão de Raios",
    autor: "Riordan, Rick",
    ano:2014,
    img:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12104831/1006786396.jpg?v=637142231647830000",
    locado:true,    
  }  
  l7:Livro = {
    cod:107,
    ISBN: "9788598078175",
    gen: "DRAMA",
    tit:"A Menina que Roubava Livros",
    subTit:"",
    autor: "Zusak, Markus",
    ano:2013,
    img: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12100879/1006788139.jpg?v=637142218101470000",
    locado:false,    
  }
  l8:Livro = {
    cod:108,
    ISBN: "9788599296363",
    gen:"DRAMA",
    tit:"A Cabana",
    subTit:"",
    autor: "Young, William P.",
    ano:2015,
    img: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12101236/1006693036.jpg?v=637142219129100000",
    locado:true,        
  }

  constructor() { }

  getGeneros(){
    return["AVENTURA", "SUSPENSE", "DRAMA", "TERROR", "SCY-FI", "ROMANCE", "FANTASIA", "MOTIVACIONAL"];
  }

  getLivros(){    
    // return [this.l1, this.l2, this.l3, this.l4];    
    return [this.l1, this.l2, this.l3, this.l4, this.l5, this.l6, this.l7, this.l8];  
  }

  getLivro(cod: number){        
    for (const iterator of this.getLivros()) {
      if(iterator.cod == cod){
        return iterator;        
      }            
    }
    return null;
  }  

}
