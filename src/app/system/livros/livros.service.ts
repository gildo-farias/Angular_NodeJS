import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LivrosService {
  l1:any = {
    cod:1157,
    tit:"O Senhor do Aneis",
    subTit:"O Retorno do Rei",
    autor: "J.R.R. TOLKIEN",
    ano:1998,
    img: "https://images-na.ssl-images-amazon.com/images/I/71SuFTR7OIL.jpg",
    locado:true
  }
  l2:any = {
    cod:857,
    tit:"Harry Potter",
    subTit:"O Prisioneiro de Azkaban",
    autor: "J.K. Rowling",
    ano:2005,
    img:"https://images-na.ssl-images-amazon.com/images/I/513CEK-RP5L._SX329_BO1,204,203,200_.jpg",
    locado:false
  }
  l3:any = {
    cod:511,
    tit:"50 Tons de Cinza",
    subTit:"Tons Mais Escuros",
    autor: "EL James",
    ano:2015,
    img: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12103001/1006790814.jpg?v=637142225123270000",
    locado:true    
  }
  l4:any = {
    cod:9784,
    tit:"As Cronicas do Gelo e Fogo",
    subTit:"Dança dos Dragões",
    autor: "Georgie RR Martin",
    ano:2015,
    img: "https://gameofthronesmobile.files.wordpress.com/2012/03/430065_306631979400120_233632190033433_831347_1067265071_n.jpg",
    locado:true    
  }
  
  getLivros(){    
    return [this.l1, this.l2, this.l3, this.l4];    
  }
  getLivro(index: number){
    return this.getLivros[index];
  }
  getGeneros(){
    return["AVENTURA", "SUSPENSE", "DRAMA", "TERROR", "SCY-FI", "ROMANCE"];
  }

  constructor() { }
}
