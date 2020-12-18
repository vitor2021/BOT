/ *
 * NÃO ALTERE A INFORMAÇÃO !!!
 * "NÃO MAIÚSCULA DOANG BRO !!!"
 * SCRIPT POR ARIS187 ID
 * NÃO MAIÚSCULAS DE BOSQ DOANG
 * PREÇOS QUE FAZEM ESTE SCRIPT BOSQ
 * NÃO ALTERE A INFORMAÇÃO !!!
 * ARIS187 ID
 * MUDE, MAS EXCETO AS INFORMAÇÕES !!!
 * /
 const qrcode = require ("qrcode-terminal")
 momento const = requer ("fuso horário do momento")
 const fs = require ("fs")

 const time = moment (). tz ('Asia / Jakarta'). format ("HH: mm: ss")
 const arrayMonth = ['Janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro  ']

 const mês = arrayBulan [momento (). formato ('MM') - 1]

 const config = {
     A187: '📍SARABOT📍'
     Instagram:'https://www.instagram.com/p/CI8KRPDFD_HH2fsJf3Y609hmZsCKn_F8gy5ebA0/?igshid=slke293i40hj',
     número: 'wa.me/82982036064',
     ativo: '24 HORAS
     data: `DATA: $ {momento (). formato ('DD')} $ {mês} $ {momento (). formato ('AAAA')}`,
     hora: hora
 }

 const {A187, data, hora, instagram, whatsapp, youtube, número, ativo, ontime} = config

 const
 {
    WAConnection,
    Tipo de mensagem,
    Presença,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
 } = require ("@ adiwajshing / baileys")

 const {
     MENU PRINCIPAL,
     menu1,
     menu2,
     menu3,
     informação,
     doar,
     sobre atuação,
     o significado do nome,
     corona,
     kbbi,
     downloadImage,
     igStalk,
     companheiro,
     oração,
     Letra da música,
     Escreva,
     readTextInImage,
     pantun,
     citações,
     searchYoutube,
     surata,
     tiktokdl,
     tweetdl,
     wiki,
     ytdl,
     bucin,
     cersex,
     história curta,
     poesia 1,
     poesia,
     receita,
     o nome dele,
     pouco,
     nekonime,
     cektanggal,
     acorde,
     Zodíaco,
     fb,
     simi,
     wikien,
     spamsms,
     spamcall,
     spamgmail,
     covidcountry,
     infoanime,
     gay,
     ytmp3,
     ssweb,
     informações sobre terremotos,
     indohot,
     loli,
     ttp,
     pasta,
     waifu
 } = requer ('./ lib')

 const {animPict, cewePict, cowoPict} = require ('./ lib / pict')

 const {exec} = requer ("child_process")

 const client = new WAConnection ()

 client.on ('qr', qr => {
    qrcode.generate (qr, (pequeno: verdadeiro})
    console.log (`[$ {time}] O código QR está pronto, inscreva-se no Aris187 ID`)
 })

 client.on ('credentials-updated', () => {
    const authInfo = client.base64EncodedAuthInfo ()
    console.log (`credenciais atualizadas!`)

    fs.writeFileSync ('./ session.json', JSON.stringify (authInfo, null, '\ t'))
 })

 fs.existsSync ('./ session.json') && client.loadAuthInfo ('./ session.json')

 client.connect ();

 // client.on ('usuário-presença-atualização', json => console.log (json.id + 'presença é =>' + json.type)) ||  console.log (`$ {time}: Bot por ig: @ aditiaalfians`)

 client.on ('message-status-update', json => {
    const participant = json.participant?  '(' + json.participant + ')': ''
    console.log (`[$ {time}] => bot por ig: @_ sadboy.ig`)
 })

 client.on ('mensagem-nova', assíncrono (m) => {
    const messageContent = m.message
    const text = m.message.conversation
    const messageType = Object.keys (messageContent) [0]

    const re = /[\#\!\@\/\?\%\$\.]/

    valor const = text.split ('') .splice (1) .join ('')

    let id = m.key.remoteJid
    let imageMessage = m.message.imageMessage

    const prefix = messageType === 'imageMessage'?  imageMessage.caption.split ('') [0] .split (re) [1]: text.split ('') [0] .split (re) [1] // prefixo múltiplo

    console.log (`[$ {time}] => Número: [$ {id.split (" @ s.whatsapp.net ") [0]}] => $ {text}`);

    switch (prefixo) {
        case 'help':
            client.sendMessage (id, help.help (id, A187, data, hora, whatsapp, youtube, instagram, active, number, ontime), MessageType.text)
            pausa
        case 'menu1':
            client.sendMessage (id, menu1.menu1 (id, A187, data, hora, whatsapp, youtube, instagram, ativo, número, ontime), MessageType.text)
            pausa
        case 'menu2':
            client.sendMessage (id, menu2.menu2 (id, A187, data, hora, whatsapp, youtube, instagram, ativo, número, ontime), MessageType.text)
            pausa
        case 'menu3':
            client.sendMessage (id, menu3.menu3 (id, A187, data, hora, whatsapp, youtube, instagram, ativo, número, ontime), MessageType.text)
            pausa
       caso 'doar':
            client.sendMessage (id, donate.donate (id, A187, data, hora, whatsapp, youtube, instagram, ativo, número, ontime), MessageType.text)
            pausa
       caso 'info':
            client.sendMessage (id, info.info (id, A187, data, hora, whatsapp, youtube, instagram, ativo, número, ontime), MessageType.text)
            pausa
        case 'nulis':
            escrever (valor)
                .então (dados => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, data, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'dizer':
            esperar client.sendMessage (id, value, MessageType.text)
            pausa
        case 'ytmp3':
            ytdl ('mp3', valor)
                .então (dados => {
                    const {título, tamanho, resultado: link} = dados
                    let results = `` OLA AQUI ESTA O LINK DE DOWNLOAD DA MSC \ nCLIQUE NO LINK ABAIXO: \ nMUSICA: $ {title} \ n \ nParkho Do audio: $ {size} \ n \ nLink: $ {link} `
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'ytmp4':
            ytdl ('mp4', valor)
                .então (dados => {
                    const {título, tamanho, resultado: link} = dados
                    let results = `` OLA AQUI ESTA O LINK DE DOWNLOAD DA MSC \ nCLIQUE NO LINK ABAIXO: \ nMUSICA: $ {title} \ n \ nParkho Do audio: $ {size} \ n \ nLink: $ {link} `
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'twt':
            tweet dl (valor)
                .então (dados => {
                     const {tamanho, resultado: link} = dados
                     deixe o resultado = `` ✄1�71 ￄ 1�77 Sucesso!  clique no link abaixo para baixar o resultado! \ nClique no link abaixo🗡️ \ n \ nTamanho: $ {tamanho} \ n \ nLink: $ {link} `
                     client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                     client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'tiktok':
            tiktokdl (valor)
                .então (dados => {
                     const {url, nome, duração, descrição} = dados
                     deixe o resultado = `` ✄1�71 ￄ 1/77 Sucesso !!!  Clique no link abaixo para baixar os resultados!  \ nClique nenhum link abaixo🗡️ \ n \ nTítulo: $ {descrição} \ n \ nDuração: $ {duração} \ n \ nNome: $ {nome} \ n \ nUrl: $ {url} `;
                     client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'wiki':
            wiki (valor)
                .então (dados => {
                     const {resultado: res} = dados
                     deixe o resultado = `` 📝De acordo com Wikipedia: \ n \ n $ {res} `
                     client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'oração':
            jsholat (valor)
                .então (dados => {
                    const {Imsyak, Subuh, Dzuhur, Asr, Maghrib, Isya, Dhuha} = dados
                    deixe resultados = `Momentos de oração em * $ {value} * hoje é \ n \ n⚡Imak: $ {Imsyak} \ n⚡Subuh: $ {Fajr} WIB \ n⚡Dzuhur: $ {Dzuhur} WIB \ n⚡  Asr: $ {Asr} WIB \ n⚡Maghrib: $ {Maghrib} \ n⚡Isya: $ {Isha} WIB \ n⚡Midnight: $ {Dhuha} WIB`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'quran':
            surata ()
                .então (dados => {
                    const re = /((.*?))/gi
                    const {random, letter} = data

                    descrição const = random.id.ayat.replace (re, '')
                    const arText = random.ar.text
                    const idText = random.id.text
                    const surata = letra .nome

                    let result = `[$ {description}] $ {arText} \ n \ n $ {idText} (QS. $ {surah}, Parágrafo $ {description})`;
                    client.sendMessage (id, resultado, MessageType.text);
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'pantun':
            pantun ()
                .então (dados => {
                    client.sendMessage (id, data, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'covid':
            corona ()
                .então (dados => {
                    const {morreu, recuperou, positivo} = dados
                    let result = `📌ÚLTIMOS DADOS DO DISTRITO COVID-19 DA INDONÉSIA \ n \ n📍Positivo ==> $ {positive} \ n📍Curado ==> $ {recover} \ n📍Morreu ==> $ {morreu}` `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'aspas':
            citações ()
                .então (dados => {
                    const {autor, citações} = dados
                    deixe o resultado = `_ $ {aspas} _ \ n \ n ~ $ {autor}`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'nome':
            significado (valor)
                .então (dados => {
                    const {resultado: significado} = dados
                    let result = `` \ nMean seu nome é \ n \ n ************************************ \ n  \ n _ $ {value} _ $ {meaning} \ n \ n *********************************  * `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'casal':
            combinar (valor)
                .então (dados => {
                    const {positivo, negativo} = dados
                    nome const = valor.split (/ [\ & \ - \ / \ +] /)
                    let result = `` \ n Corresponde a coincidências \ n \ n *********************************** \ n \  nPar 1: * $ {name [0] .trim ()} * \ nPar 2: * $ {name [1] .trim ()} * \ n \ lado positivo: $ {positivo} \ lado negativo: $ {negativo  } \ n \ n *************************************
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'pict':
            switch (valor) {
                caso 'garota':
                    cewePict ()
                        .então (buffer => {
                            client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                            client.sendMessage (id, buffer, MessageType.image)
                        })
                        .catch (err => {
                            console.log (err)
                        })
                    pausa
                caso 'menino':
                    cowoPict ()
                        .então (buffer => {
                            client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                            client.sendMessage (id, buffer, MessageType.image)
                        })
                        .catch (err => {
                            console.log (err)
                        })
                    pausa
                padrão:
                    client.sendMessage (id, 'repetir com! pict girl / boy \ n \ nExemplo :! pict boy', MessageType.text)
                    pausa
            }
            pausa
        caso 'animepict':
            animPict ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'lyrics':
            letras (valor)
                .então (dados => {
                    const {resultado: letras} = dados
                    deixe result = `` 📍Letra da música📍 * $ {value} * \ n \ n \ n $ {lyrics} `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
    case 'fb':
            fb (valor)
                .então (dados => {
                    const {resultHD, resultSD} = dados
                    let result = `` Escolha uma resolução querida😙 \ n \ n \ n HD $ {resultHD} \ n \ n \ n SD $ {resultSD} `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        case 'alay':
            alay (valor)
                .então (dados => {
                    const {resultado: alay} = dados
                    client.sendMessage (id, alay, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        estojo 'adesivo':
            const image = await client.downloadAndSaveMediaMessage (m)
            exec ('cwebp -q 50' + imagem + '-o temp /' + hora + '.webp', (erro, stdout, stderr) => {
                let result = fs.readFileSync ('temp /' + hora + '.webp')
                client.sendMessage (id, resultado, MessageType.sticker)
            })
            pausa
        case 'ocr':
            const media = await client.downloadAndSaveMediaMessage (m)
            readTextInImage (mídia)
                .então (dados => {
                    client.sendMessage (id, `* Ola amigo o texto da imagem esta aqui. * \ n \ nResultado :: \ n \ n $ {data}`, MessageType.text);
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
        caso 'igstalk':
            igStalk (valor)
                .então (dados => {
                    const {Username, Total_Followers, Total_Following, Name, Total_Post} = data
                    client.sendMessage (id, '[WAIT] Stalking ... ⏄1�71 ￄ 1�77', MessageType.text)
                    let results = `` ✨Bio do Instagram _ $ {value} _ \ n \ n 🧶 * Nome do usuário *: $ {Username} _ \ n 🌀 * Nome *: _ $ {Name} _ \ n 🌟 * Número de Seguidores  *: _ $ {Total_Followers} _ \ n 🌠 * Total_Following *: _ $ {Total_Following} _ \ n ⭄1�71 ￄ 1�77 * Total_Post *: _ $ {Total_Post} _ `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    client.sendMessage (id, err, MessageType.text)
                })
            pausa
            caso 'conto':
            história curta()
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `_ $ {resultado} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 caso 'poesia1':
            poesia1 ()
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `_ $ {resultado} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 case 'poesia2':
            poesia2 ()
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `_ $ {resultado} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  case 'infogempa':
            infogempa ()
                .então (dados => {
                    const {localização, profundidade, coordenadas, magnitude, tempo} = dados
                    let result = `* TERREMOTO INFO * \ n \ * Localização *: _ $ {location} _ \ n * Profundidade *: _ $ {depth} _ \ n * Coordenadas *: _ $ {coordinates} _ \ n * Magnitude *  : _ $ {magnitude} _ \ n * Tempo *: _ $ {tempo} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
    case 'chord':
            acorde (valor)
                .então (dados => {
                    const {resultado} = dados
                    let result = `` Aqui estão os acordes da música * $ {value} * querida ♥ ️ \ n \ n _ $ {result} _ `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
    caso 'kbbi':
            kbbi (valor)
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `* $ {valor} * de acordo com KBBI ️ \ n \ n _ $ {resultado} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
           
            case 'zodiac':
  zodíaco (valor)
                .então (dados => {
                    const {nascimento, aniversário, idade, zodíaco} = dados
                    let result = `* Nascimento *: _ $ {birth} _ n \ n * Aniversário *: _ $ {birthday} _ \ n * Idade *: _ $ {age} _: \ n * Zodíaco *: _ $ {zodiac  } _ `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'simi':
             simi (valor)
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `$ {resultado}`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  case 'wikien':
            wikien (valor)
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `` * ♻️De acordo com a Wikipedia🗿: * \ n \ n _ $ {resultado} _ `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 caso 'spamgmail':
            spamgmail ()
                .então (dados => {
                    const {logs} = dados
                    deixe o resultado = `_ $ {logs} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  caso 'spamcall':
            spamcall ()
                .então (dados => {
                    const {logs} = dados
                    deixe o resultado = `_ $ {logs} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   caso 'spamsms':
            spamsms ()
                .então (dados => {
                    const {logs} = dados
                    deixe o resultado = `_ $ {logs} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  case 'covidcountry':
            covidcountry (valor)
                .então (dados => {
                    const {país, ativo, casosPerOneMillion, crítico, mortes PerOneMillion, recuperado, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest} = dados
                    let result = `* Country *: _ $ {country} _ \ n \ n * Active *: _ $ {active} _ \ n * CasesPerOneMillion *: _ $ {casesPerOneMillion} _ \ n * Critical *: $ {critical}  \ n * DeathsPerOneMillion *: _ $ {mortesPerOneMillion} _ \ n * Recuperado *: _ $ {recovery} _ \ n * TestPerOneMillion *: _ $ {testPerOneMillion} _ \ n * TodayCases *: _ $ {todayCases} _ \ n  * TodayDeath: _ $ {todayDeath} \ n * TotalCases *: _ $ {totalCases} _ \ n * TotalTest *: _ $ {totalTest} _ `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'infoanime':
            infoanime (valor)
                .então (dados => {
                    const {resultado} = dados
                    deixe result = `* ANIME INFO $ {value}: * \ n \ n _ $ {result} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 caso 'gay':
            gay ()
                .então (dados => {
                    const {desc, percent} = dados
                    let result = `* $ {desc} \ n \ n * Porcentagem Gay Lo Su !!! * _ $ {percent} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'indohot':
            indohot ()
                .então (dados => {
                    const {título, gênero, duração, url} = dados
                    let result = `Arrependimento GOBLOK😳 * \ n \ n * Título * _ $ {title} _ \ n \ n * Status * _ $ {genre} _ \ n \ n * Duração * _ $ {duration} _ \ n \  n * link Bosq * _ $ {url} _ `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
 case 'filmanime':
            filmanime (valor)
                .então (dados => {
                    const {title, rating, synoptic, video} = data
                    let results = `* Anime Movie $ {value}: * \ n \ n * Title * _ $ {title} _ \ n \ n * Rating * _ $ {rating} _ \ n \ n * Info * _ $ {synopsis  } _ \ n \ n * Link de vídeo * _ $ {video} _ `
                    client.sendMessage (id, resultado, MessageType.txext)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
  o caso da 'receita':
            receita (valor)
                .então (dados => {
                    const {title, user, datePublished, dificuldade, times, servindo, material, tutor} = data
                    let result = `* Title: * $ {title} \ n * Autor: * $ {user} \ n * Lançamento: * $ {datePublished} \ n * Nível: * $ {dificuldade} \ n * Time: * $ {  times} \ n * Porções: * $ {porções} \ n \ n * Ingredientes: * \ n $ {ingrediente} \ n \ n * Passo a passo: * \ n $ {passo} `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'namaninja':
            nome (valor)
                .então (dados => {
                    const {ninja} = dados
                    deixe result = `Ninja name * $ {value} * 💡: \ n \ n _ $ {ninja} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
   case 'cektanggal':
            cektanggal (valor)
                .então (dados => {
                    const {data, descrição} = dados
                    deixe o resultado = `De acordo com a data $ {valor} é \ n \ n * Data *: _ $ {data} _ \ n * Descrição *: _ $ {descrição} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
    case 'bitly':
            pouco (valor)
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `` Aqui maninha ja terminou☣️ :) \ n \ n $ {resultado} `
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
      caso 'cersex':
            cersex ()
                .então (dados => {
                    const {resultado} = dados
                    deixe resultado = `CERSEX \ n \ n $ {resultado}`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
     case 'bucin':
            bucin ()
                .então (dados => {
                    const {desc} = dados
                    deixe o resultado = `_ $ {desc} _`
                    client.sendMessage (id, result, MessageType.text)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'map':
            pasta()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'waifu':
            waifu ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
       case 'loli':
            loli ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'ssweb':
            ssweb ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
      case 'cooltext':
            cooltext ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'ttp':
            ttp ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'nekonime':
            nekonime ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
            case 'ytmp3':
            mp3 ()
                .então (buffer => {
                    client.sendMessage (id, '(ESPERE UM POUCO ...', MessageType.text)
                    client.sendMessage (id, buffer, MessageType.image)
                })
                .catch (err => {
                    console.log (err)
                })
            pausa
           case 'criador':
             client.sendContact (de, '6285722553839@c.us')
             pausa
       case 'tts':
             if (args.length === 1) return client.reply (from, 'Send command *! tts [id, en, jp, ar] [text] *, exemplo *! tts id hello all *')
             const ttsId = require ('node-gtts') ('id')
             const ttsEn = require ('node-gtts') ('en')
 const ttsJp = require ('node-gtts') ('ja')
             const ttsAr = require ('node-gtts') ('ar')
             const dataText = body.slice (8)
             if (dataText === '') retorna client.reply (from, 'Baka?', id)
             if (dataText.length> 500) retorna client.reply (from, 'Texto muito longo!', id)
             var dataBhs = body.slice (5, 7)
 if (dataBhs == 'id') {
                 ttsId.save ('./ media / tts / resId.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resId.mp3', id)
                 })
             } else if (dataBhs == 'en') {
                 ttsEn.save ('./ media / tts / resEn.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resEn.mp3', id)
                 })
             } else if (dataBhs == 'jp') {
                 ttsJp.save ('./ media / tts / resJp.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resJp.mp3', id)
                 })
 } else if (dataBhs == 'ar') {
                 ttsAr.save ('./ media / tts / resAr.mp3', dataText, function () {
                     client.sendPtt (de, './media/tts/resAr.mp3', id)
                 })
             } outro {
                 client.reply (from, 'Enter language data: [id] para indonésio, [en] para inglês, [jp] para japonês e [ar] para árabe', id)
             }
             pausa
       case 'stickergif':
             if (isMedia) {
                 if (mimetype === 'video / mp4' && mensagem.duração <10 || mimetype === 'imagem / gif' && mensagem.duração <10) {
                     const mediaData = await decryptMedia (mensagem, uaOverride)
                     client.reply (from, '[WAIT] Em andamento 1�71 ￄ 1�77 aguarde ± 1 min!', id)
                     const filename = `./media/aswu. $ (mimetype.split ('/') [1]}`
                     esperar fs.writeFileSync (nome do arquivo, mediaData)
                     await exec (`gify $ {filename) ./media/output.gif --fps = 30 --scale = 240: 240`, função assíncrona (erro, stdout, stderr) {
                         const gif = await fs.readFileSync ('./ media / output.gif', {encoding: "base64"})
                         esperar client.sendImageAsSticker (de, `data: image / gif; base64, $ (gif.toString ('base64'))`)
                     })
                 } outro (
                     client.reply (from, '[❗] Send video with caption *! stickerGif * max 10 sec!', id)
                 )
             }
             pausa
      estojo 'adesivo':
             if (isMedia && type === 'imagem') {
                 const mediaData = await decryptMedia (mensagem, uaOverride)
                 const imageBase64 = `data: $ {mimetype}; base64, $ {mediaData.toString ('base64')}`
                 esperar client.sendImageAsSticker (de, imageBase64)
             } else if (quotedMsg && quotedMsg.type == 'image') {
                 const mediaData = await decryptMedia (quotedMsg, uaOverride)
                 const imageBase64 = `data: $ {quotedMsg.mimetype}; base64, $ {mediaData.toString ('base64')}` `
                 esperar client.sendImageAsSticker (de, imageBase64)
             } else if (args.length === 2) {
                 url const = args [1]
                 if (url.match (isUrl)) {
                     esperar client.sendStickerfromUrl (de, url, {método: 'get'})
                         .catch (err => console.log ('Exceção detectada:', err))
                 } outro {
                     client.reply (from, mess.error.Iv, id)
                 }
             } outro {
                     client.reply (from, mess.error.St, id)
             }
             pausa
        padrão:
            pausa
    }
 })
