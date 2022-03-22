const reverseDateRepresentation = date => {
    let parts = date.split('/');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

const sortedDates = ['3/20/22', '02/01/2018', '01/01/2018']
    .map(reverseDateRepresentation)
    .sort()
    .map(reverseDateRepresentation);

console.log(sortedDates);


function converteDate(str) {
    if (str === null) {
        return null;
    }

    let dates = (str).split('/');

    // YYYYY-MM-DD
    // var dateString = new Date(dates);

    // let dateString = !isNaN(Date.parse(dates))


    // if (dateString === true) {
    //     return new Date(dates)
    // }

    var y = dates[2]

    // TODO: Converter data de 'M[0]/D[1]/YY[2]' para 'D/MM/YYYY'
    var dateStringTest = (dates[1] <= 9 ? '0' + dates[1] : dates[1]) + '/' + (dates[0] <= 9 ? '0' + dates[0] : dates[0]) + '/' + y;

    return dateStringTest
    //    return dateString
    // return new Date(Date.UTC(dates[2], parseInt(dates[1]) - 1, dates[0]));
}

let data = new Date("Jan 29 2020");
let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate()));
console.log(dataFormatada);

console.log(converteDate(str = "4/1/20"))

console.log(converteDate(str = '3/25/2020'))

console.log(converteDate(str = '2020/2/29'))

// var data = new Date('3/25/1900');
// console.log(data.toISOString().substr(0, 10).split('-').reverse().join('/'));

let stringsFromAPI = ["4/1/22"];

stringsFromAPI.forEach((d) => {
    if (!isNaN(Date.parse(d))) {
        console.log(new Date(d));
    }
})


function convertFromStringToDate(responseDate) {
    let dateComponents = responseDate.split('/');
    let datePieces = dateComponents;
    return (new Date(datePieces[2], (datePieces[1] - 1), datePieces[0],
    ))
}

console.log(convertFromStringToDate("21/03/2020"))

let dataTest = "10/11/1922"

let dataSemTime = dataTest.split("/");
let dataValidacaoDoRegistro = new Date(20 + dataSemTime[2].substr(-2), dataSemTime[1] - 1, dataSemTime[0]);

// .toLocaleDateString();

console.log("########## " + dataValidacaoDoRegistro)

let d = "12/12/2020 00:00:00 AM";

let dsT = d.split(" ")[0];

console.log(dsT);






_pin.log = _pin.log || [];

if (_pin.cliente && _pin.cliente.nome === "VIVO" && _pin.tipoDeImportacao === "Transmissão") {

    let estados = _location._state._search({
        "query": {
            "bool": {
                "must": []
            }
        },
        "size": 300,
    }).hits.hits.map(gr => gr._source);
    let cliente = com.ericsson.Cliente._search({
        "query": {
            "bool": {
                "must": [{
                    "term": {
                        "nome.keyword": "VIVO"
                    }
                }]
            }
        }
    }).hits.hits.map(gr => gr._source)[0];

    function returnEstadoId(estado) {
        if (estado == null || estado.trim().length == 0) {
            return null;
        }
        return estados.find(a => normalize(a.initials.toUpperCase()) === normalize(('' + estado.substring(0, 2)).toUpperCase()));
    }
    let regionais = []
    let municipios = []
    function returnRegionalId(str) {
        let map = [{ "label": "AC", "value": "RSU CO" },
        { "label": "AL", "value": "RSU NE" },
        { "label": "AM", "value": "RSU NO" },
        { "label": "AP", "value": "RSU NO" },
        { "label": "BA", "value": "RSU NE" },
        { "label": "CE", "value": "RSU NE" },
        { "label": "DF", "value": "RSU CO" },
        { "label": "NO", "value": "RSU NO" },
        { "label": "NE", "value": "RSU NE" },
        { "label": "BA/SE", "value": "RSU NE" },
        { "label": "CO", "value": "RSU CO" },
        { "label": "ES", "value": "RSU RJ/ES" },
        { "label": "GO", "value": "RSU CO" },
        { "label": "MA", "value": "RSU NO" },
        { "label": "MG", "value": "RSU MG" },
        { "label": "MS", "value": "RSU CO" },
        { "label": "MT", "value": "RSU CO" },
        { "label": "PA", "value": "RSU NO" },
        { "label": "PB", "value": "RSU NE" },
        { "label": "PE", "value": "RSU NE" },
        { "label": "PI", "value": "RSU NE" },
        { "label": "PR", "value": "RSU SUL" },
        { "label": "RJ", "value": "RSU RJ/ES" },
        { "label": "RN", "value": "RSU NE" },
        { "label": "RO", "value": "RSU CO" },
        { "label": "RR", "value": "RSU NO" },
        { "label": "RS", "value": "RSU SUL" },
        { "label": "SC", "value": "RSU SUL" },
        { "label": "SE", "value": "RSU NE" },
        { "label": "SP", "value": "RSU SPI" },
        { "label": "SP2", "value": "RSU SPI" },
        { "label": "SPC", "value": "RSU SPC" },
        { "label": "SPI", "value": "RSU SPI" },
        { "label": "SPM", "value": "RSU SPC" },
        { "label": "TO", "value": "RSU CO" }]

        let param = map.find(a => a.label === str);
        if (param == null) {
            return null
        }
        let redional = regionais.filter(a => a.nome == param.value)
        if (param && redional.length == 0) {
            let result = com.ericsson.common.Regional._search({
                "query": {
                    "bool": {
                        "must": [{
                            "term": {
                                "nome.keyword": param.value
                            }
                        }]
                    }
                }
            }).hits.hits.map(gr => gr._source);

            let r = result.length > 0 ? result[0] : null;
            regionais.push(r)
            return r;
        }
        return redional.length > 0 ? redional[0] : null;
    }

    function returnMunicipioId(municipio, estado) {
        var cidadeResult;
        if (municipio && estado && municipio.length > 0 && estado.length > 0) {

            let municipioRet = municipios.filter(a => a.chaveProc == (estado + decodeURIComponent(escape(municipio))).toUpperCase())
            if (municipioRet.length > 0) {
                return municipioRet[0]
            }
            cidadeResult = _location.municipio._search({
                "query": {
                    "bool": {
                        "must": [{
                            "match": {
                                "chaveProc": (estado + decodeURIComponent(escape(municipio))).toUpperCase()
                            }
                        }

                        ]
                    }
                },
                "size": 1,
            }).hits;
            if (cidadeResult.total > 0) {
                municipios.push(cidadeResult.hits.map(gr => gr._source)[0])
                return cidadeResult.hits.map(gr => gr._source)[0]

            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    function normalize(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function coordenadasValidas(lat, long) {
        if (!lat || (lat > 90 || lat < -90)) {
            return false
        }

        if (!lat || (long > 180 || long < -180)) {
            return false
        }
        return true;
    }

    function retornaCoordenadaValida(coordenada) {

        var t = 0;
        if (!coordenada) {
            return null
        }
        coordenada = coordenada.replace(/[^0-9,-]/g, function (match) {
            t++;
            return (t > 1) ? "" : ".";
        });

        let regex = /[^0-9,-]/g
        return ("" + coordenada).replace(regex, "").replace(',', ".").replace(/[,]/g, "")
    }




    function replaceValue(item, newValue) {
        let keys = Object.keys(newValue);
        keys.forEach(key => {
            item[key] = newValue[key] != null ? newValue[key] : item[key];
        });
    }

    function procuraProlog(prolog) {
        let returnProlog = com.ericsson.prolog._search({
            "query": {
                "bool": {
                    "must": [{
                        "term": {
                            "nome.keyword": prolog
                        }
                    }]
                }
            },
            "size": 1,
            "_source": false
        }).hits;

        if (returnProlog.total > 0) {
            return returnProlog.hits[0]._id;
        } else {
            return null;
        }

    }

    function criaPrologs(prologs) {
        var existeProlog;

        if (prologs) {
            existeProlog = procuraProlog(prologs);

            if (!existeProlog) {
                let prolog = {
                    "nome": prologs
                }
                let prologCreated = com.ericsson.prolog._create(prolog);
                return prologCreated;
            } else {
                return existeProlog;
            }
        } else {
            return null;
        }
    }

    function converteDate(str) {
        if (str == null || str.trim().length === 0) {
            return null;
        }
        let dates = (str).split('/');
        return new Date(Date.UTC(dates[2], parseInt(dates[1]) - 1, dates[0], 3, 0, 0));
    }

    function initcap(str) {
        if (str == null) {
            return null
        }
        return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
            return m.toUpperCase();
        });
    }

    function getRegistro(object, site) {
        let registro = {
            "nome": object["01.01 Enlace ID"],
            "site": site,
            "sigla": object["01.16.Sigla"],
            "activeID": object["01.11 Validação de Registro"],
            "prolog": object["01.06 Prolog"] ? criaPrologs(object["01.06 Prolog"]) : null,
            "tecnologia": object["01.04 Tecnologia"],
            "tipo": initcap(object["01.05 Categoria"]) != "A" ? null : initcap(object["01.05 Categoria"]),
            "ordemDeVenda": object["05.03 OV Definitiva HW + MI NÃºmero - Site A"],
            "ordemDeVendaB": object["05.04 OV Definitiva HW + MI NÃºmero - Site B"],
            "ppiRevisadoReal": object["03.11.PPIE Revisado"],
            "ppiEnviadoReal": object["03.10.PPIE Real"],
            "fimDeInstalacao": converteDate(object["08.08 Installation End Real"]),
            "frequencia": object["01.05.Frequencia"],
            "dataDaUltimaAtualizacao": new Date(),
            "transmissaoEntregaReal": converteDate(object["11.04.TX Real"]),
            "dataDaUltimaAtualizacaoErisite": new Date(),
            "siteA": object["01.15 Sigla A"],
            "siteB": object["01.16 Sigla B"],
        }
        if (object["16.02.Instalacao Real"]) {
            registro.fimDeInstalacao = converteDate(object["08.08 Installation End Real"]);
        }
        return registro;
    }

    function buildRegistro(object, registro) {
        let registros = com.ericsson.registro._search({
            "query": {
                "bool": {
                    "must": [{
                        "term": {
                            "nome.keyword": object["01.01 Enlace ID"]
                        }
                    }]
                }
            }
        }).hits.hits.map(gr => gr._source);
        registros.forEach(item => {
            replaceValue(item, registro)
            com.ericsson.registro._update(item);
        });

        if (registros.length === 0 && registro.site != null && registro.site._id != null) {
            com.ericsson.registro._create(registro);
        } else if (registro.site == null && registros.length === 0) {

            //   throw 'Não possui site para cadastrar o registro.'
        }
    }
    function returnmunicipioRefId(id) {
        var cidadeResult;
        if (id && id.length > 0) {
            cidadeResult = _location._city._search({
                "query": {
                    "bool": {
                        "must": [{
                            "match": {
                                "_id": id
                            }
                        },

                        ]
                    }
                },
                "size": 1,
                "_source": false
            }).hits;
            if (cidadeResult.total > 0) {
                return cidadeResult.hits[0]._id;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    function leftPad(value, totalWidth, paddingChar) {
        var length = totalWidth - value.toString().length + 1;
        return Array(length).join(paddingChar || '0') + value;
    };
    function getEndereco(cep) {
        if (cep == null) {
            return null
        }
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", 'https://viacep.com.br/ws/' + leftPad(cep, 8, '0') + '/json/unicode', false);
            xmlHttp.send(null);
            let ret = JSON.parse(xmlHttp.responseText);
            if (ret.erro) {
                return null
            }
            return JSON.parse(xmlHttp.responseText)
        } catch (e) {
            return null
        }
    }
    function processaResultados(object) {
        let longitude = object["Latitude Ponta B"] ? object["Latitude Ponta B"] : null;
        let latitude = object["Latitude Ponta A"] ? object["Latitude Ponta A"] : null;

        let endereco = getEndereco(object["CEP Ponta A"])
        let regional = object["01.00 Regional"]
        if (endereco != null && !endereco.erro && (object["01.00 Regional"] == null || object["01.00 Regional"].trim().length == 0)) {
            regional = endereco.uf
        }
        let estado = regional != null ? returnEstadoId(regional) : null;
        let municipio = regional != null ? returnMunicipioId(object["Cidade Ponta A"], regional) : null
        let estadoId = estado != null ? estado._id : returnEstadoId(endereco.uf) != null ? returnEstadoId(endereco.uf)._id : null;
        let municipioId = municipio != null ? municipio._id : null;
        let municipioRef = municipio != null && municipio.cidade != null ? returnmunicipioRefId(municipio.cidade._id) : null

        let site = {
            "nome": object["01.17 Enlace A-B"],
            "prolog": object["01.06 Prolog"] ? criaPrologs(object["01.06 Prolog"]) : null,
            "detentora": object["01.28.Detentora do Site"],
            "endereco": object["Endereço Ponta A"],
            "municipio": endereco != null && !endereco.erro ? endereco.localidade : object["Cidade Ponta A"],
            "cliente": cliente,
            "plano": object["01.07 Meta"],
            "regional": returnRegionalId(regional),
            "estado": estadoId,
            "localidade": municipioId,
            "municipioRef": municipioRef,
            "coordenadaGeografica": coordenadasValidas(retornaCoordenadaValida(longitude), retornaCoordenadaValida(latitude)) ? {
                "type": "point",
                "coordinates": ['' + retornaCoordenadaValida(longitude), '' + retornaCoordenadaValida(latitude)]
            } : null
        }


        if (object["01.17 Enlace A-B"] != null && object["01.17 Enlace A-B"].length > 0) {
            let sites = com.ericsson.siteCopia._search({
                "query": {
                    "bool": {
                        "must": [{
                            "term": {
                                "nome.keyword": object["01.17 Enlace A-B"]
                            }
                        }]
                    }
                }
            }).hits.hits.map(gr => gr._source);

            sites.forEach(item => {
                replaceValue(item, site)
                let registro = getRegistro(object, item)
                buildRegistro(object, registro)
                com.ericsson.siteCopia._update(item)
            })

            if (sites.length === 0) {
                com.ericsson.siteCopia._create(site)
                site = com.ericsson.siteCopia._search({
                    "query": {
                        "bool": {
                            "must": [{
                                "term": {
                                    "nome.keyword": object["01.17 Enlace A-B"]
                                }
                            }]
                        }
                    }
                }).hits.hits.map(gr => gr._source)[0];
                let registro = getRegistro(object, site)
                buildRegistro(object, registro)
            }
        } else {
            let registro = getRegistro(object, null)
            buildRegistro(object, registro)
        }

    }
    let data = JSON.parse(_pin.importacao.conteudoJSON);
    for (var i = 0; i < data.length; i++) {
        try {
            processaResultados(data[i]);
        } catch (e) {
            _pin.log.push(data[i])
            // throw _utils.stringifyAsJson(data[i]) 
        }
    }

}
