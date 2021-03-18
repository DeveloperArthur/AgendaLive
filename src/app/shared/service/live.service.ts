import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable, of } from 'rxjs';
import { Live } from '../model/live.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';
  json: ResponsePageable;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, public sanitizer: DomSanitizer) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    //return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
    return this.getResultadoMocado(flag);
  }

  public getResultadoMocado(flag: string): Observable<ResponsePageable> {
    if (flag == 'previous') {
      this.json = {
        "content": [
          {
            "id": "1",
            "liveName": "SNYDERCUT: UM FÊNOMENO, UM MARCO NO CINEMA, mas e daí?",
            "channelName": "Thiago Romariz",
            "liveDate": "2021-05-15",
            "liveLink": "https://www.youtube.com/embed/F8_o71vM6Tg",
            "registrationDate": "2021-05-15"
          },
          {
            "id": "2",
            "liveName": "O NOVO TRAILER DE LIGA DA JUSTIÇA SNYDER CUT! ▶︎ AO VIVO",
            "channelName": "Nerd Rabugento",
            "liveDate": "2021-05-14",
            "liveLink": "https://www.youtube.com/embed/OUMsMA2UQfk",
            "registrationDate": "2021-05-14"
          },
          {
            "id": "3",
            "liveName": "WANDAVISION: ERA TUDO UMA PIADA DO PAUL BETTHANY ▶︎ NERD RABUGENTO AO VIVO",
            "channelName": "Nerd Rabugento",
            "liveDate": "2021-05-04",
            "liveLink": "https://www.youtube.com/embed/yGXeHcwSmFk",
            "registrationDate": "2021-05-04"
          },
          {
            "id": "4",
            "liveName": "QUAL A PRÓXIMA MELHOR SÉRIE DE TODOS OS TEMPOS DA ÚLTIMA SEMANA? ▶︎ NERD RABUGENTO AO VIVO",
            "channelName": "Nerd Rabugento",
            "liveDate": "2021-05-07",
            "liveLink": "https://www.youtube.com/embed/Q_rasPGLSxk",
            "registrationDate": "2021-05-07"
          },
          {
            "id": "5",
            "liveName": "AVATAR FOI RELANÇADO NA CHINA E BATEU ULTIMATO! ▷ AO VIVO 🤓",
            "channelName": "Nerd Rabugento",
            "liveDate": "2021-05-13",
            "liveLink": "https://www.youtube.com/embed/fkBS6gG6zpg",
            "registrationDate": "2021-05-13"
          },
          {
            "id": "6",
            "liveName": "SNYDERCUT é a pá de terra final sobre o SNYDERVERSE ??? - Boteco Nerd com Aine / Castrezana e Danilo",
            "channelName": "oQV by Aine",
            "liveDate": "2021-02-17",
            "liveLink": "https://www.youtube.com/embed/kMfhNBV4EBs",
            "registrationDate": "2021-02-17"
          },
          {
            "id": "7",
            "liveName": "WANDAVISON - O VEREDITO AO VIVO! #FiqueEmCasa​ #Comigo​",
            "channelName": "omeleteve",
            "liveDate": "2021-03-10",
            "liveLink": "https://www.youtube.com/embed/-NDwmfvSPlU",
            "registrationDate": "2021-03-10"
          },
          {
            "id": "8",
            "liveName": "LIGA DA JUSTIÇA SNYDER CUT VAZADO! CULPA DA WARNER? ▶︎ NERD RABUGENTO AO VIVO",
            "channelName": "Nerd Rabugento",
            "liveDate": "2021-03-10",
            "liveLink": "https://www.youtube.com/embed/D8MzGk6BaXw",
            "registrationDate": "2021-03-10"
          },
          {
            "id": "9",
            "liveName": "ZACK SNYDER REVELA FOTOS DO CORINGA DO SNYDERCUT // LIGA DA JUSTIÇA SNYDERCUT / Nerd Rabugento",
            "channelName": "Nerd Rabugento",
            "liveDate": "2021-02-09",
            "liveLink": "https://www.youtube.com/embed/rE0ZFRVMU7c",
            "registrationDate": "2021-02-09"
          },
          {
            "id": "10",
            "liveName": "O QUE ESPERAR DA FASE 4 DO MCU?",
            "channelName": "Nerd Fusão",
            "liveDate": "2021-02-12",
            "liveLink": "https://www.youtube.com/embed/N0OUQGHqsOU",
            "registrationDate": "2021-02-12"
          }
        ],
        "pageable": [],
        /*"sort": {
          "sorted": true,
          "unsorted": false,
          "empty": false
        },
        "offset": 0,
        "pageSize": 10,
        "pageNumber": 0,
        "unpaged": false,
        "paged": true
      },*/
        "last": true,
        "totalElements": 10,
        "totalPages": 1,
        "size": 10,
        "number": 0,
        "sort": 0,
        "numberOfElements": 10,
        "first": true
      }
    } else if (flag == 'next') {
      this.json = {
        "content": [
          {
            "id": "11",
            "liveName": "A CRÍTICA VIU O SNYDER CUT! O QUE ELES ACHARAM?",
            "channelName": "Ei Nerd",
            "liveDate": "2021-06-12",
            "liveLink": "https://www.youtube.com/embed/2VPOI0xOQNc",
            "registrationDate": "2021-03-16",
          },
          {
            "id": "12",
            "liveName": "O QUE ZACK SNYDER FALOU PRA ELE MUDAR DE IDEIA E TOPAR VOLTAR AO CORINGA?",
            "channelName": "Quatro Coisas",
            "liveDate": "2021-07-09",
            "liveLink": "https://www.youtube.com/embed/PUDEBdVOUyw",
            "registrationDate": "2021-03-16",
          },
          {
            "id": "13",
            "liveName": "Super Smash Bros: Modo Hard com Samus (Nintendo 64)",
            "channelName": "Arthur",
            "liveDate": "2021-07-25",
            "liveLink": "https://www.youtube.com/embed/74hr9UZ0Kog",
            "registrationDate": "2021-03-16",
          },
          {
            "id": "14",
            "liveName": "Mario Kart 64: 100cc Gold em todas as copas",
            "channelName": "Arthur",
            "liveDate": "2021-11-07",
            "liveLink": "https://www.youtube.com/embed/uzU_k3UHge4",
            "registrationDate": "2021-03-16",
          },
          {
            "id": "15",
            "liveName": "KingArthur98 - Primeira fase do Torneio Donkey Kong (SPEEDRUN) - Mania DK",
            "channelName": "Arthur",
            "liveDate": "2021-12-13",
            "liveLink": "https://www.youtube.com/embed/pIW-e_b4AJY",
            "registrationDate": "2021-03-16",
          }
        ],
        "pageable": [],
        /*"sort": {
          "sorted": true,
          "unsorted": false,
          "empty": false
        },
        "offset": 0,
        "pageSize": 10,
        "pageNumber": 0,
        "unpaged": false,
        "paged": true
      },*/
        "last": true,
        "totalElements": 10,
        "totalPages": 1,
        "size": 10,
        "number": 0,
        "sort": 0,
        "numberOfElements": 10,
        "first": true
      }
    }
    return of(this.json);
  }

  public postLives(live: any): Observable<Live> {
    console.log(live);
    //return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);
    return this.postLiveMock(live);
  }

  public postLiveMock(live: any){
    var proximoId = this.json.content.length + 1;
    live.id = proximoId;
    live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
    this.json.content.push(live);
    return of(live);
  }
}
