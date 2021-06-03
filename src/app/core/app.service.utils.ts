import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ServicesUtils {
    public static user = JSON.parse(localStorage.getItem("currentUser"));
    public static  isAdmin : boolean = false;
    public static default_image : string = "assets/img/default.jpg";
    // public static apiUrl = 'http://127.0.0.1:8095';
    public static apiUrl = 'http://127.0.0.1:8000';
    // public static apiUrl = 'http://3.143.233.22:8095';
    // public static apiUrl = 'http://10.137.20.112:8095/';
    public static token = ServicesUtils.getToken();
//'Authorization':`Bearer ${AuthService.getToken()}`,
    public static headers = new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Credentials':'false',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        "Access-Control-Allow-Methods":" GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH",
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Request-Headers':'origin, x-requested-with, accept',
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length`Bearer ${user.}`
        //'Authorization':`Bearer ${ServicesUtils.user.currentUserValue.accessToken}`,
        // 'Authorization':`Bearer ${ServicesUtils.token}`,
        
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU4NzA1MDMyOCwiZXhwIjoxNTg3MTM2NzI4fQ.hlJirD7ZWRvcqPDt7EM58W55J1svzOsSiazXERPus3J1CDsF3Vf_rjCIV_N0qWllGFlQj6dUcQet-AxrqpVn0A' 
    });
//"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU4NzA1MDMyOCwiZXhwIjoxNTg3MTM2NzI4fQ.hlJirD7ZWRvcqPDt7EM58W55J1svzOsSiazXERPus3J1CDsF3Vf_rjCIV_N0qWllGFlQj6dUcQet-AxrqpVn0A
    public static options = { headers: ServicesUtils.headers };
    public static generateCode(length): string {
        let result           = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    public static getToken(): string{
        if(ServicesUtils.user == null) {
            return "none"
        }else{
            return ServicesUtils.user.accessToken
        }   
    }

    public static escapeHtml(text) {
        var map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };  
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }


    public static defaultOptions = {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart - X-Axis Filter'
        },
        scales: {
            yAxes: [{ ticks: { beginAtZero: true } }]
        }
    }

    public static getChartData = (tab, key) =>{
        let liste =[]
        liste = tab.map(a => {
            return a[key];
        });
        // tab.forEach(element => {
        //     console.log(element[key])
        //     liste.push(element[key])
        // });
        return liste;
    }

    public static mixedOptions =  {
        responsive: true,
        title: {
            display: true,
            text: 'KPI'
        },
        tooltips: {
            mode: 'index',
            intersect: true
        },
        scales: {
            y: {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'right',
    
                // grid line settings
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
    }
    

    public static listeOperateur=[
        '1_Canada Bell Mobility',
    '1_Canada Rogers',
    '1_Canada Telus',
    '1_USA ATT W Cingular',
    '1_USA Others',
    '1_USA TMOB',
    '1809_Rep_Dominicaine Altice',
    '20_Egypte Etisalat Mob',
    '20_Egypte Mobinil Mob',
    '20_Egypte Vodafone Mob',
    '212_Maroc Al Maghrib',
    '212_Maroc Medi Telecom',
    '212_Maroc Wana Corporate   ',
    '213_Algerie Optimum Orascom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ',
    '213_Algerie Others',
    '216_Tunisia Orange',
    '216_Tunisia Orascom',
    '216_Tunisia Tunisie_Telecom',
    '218_Libye Al Madar',
    '220_Gambie AFRICELL',
    '220_Gambie Comium',
    '220_Gambie GAMCEL',
    '220_Gambie QCELL',
    '221_Senegal Tigo',
    '222_Mauritanie Chinguitel',
    '222_Mauritanie Mattel',
    '222_Mauritanie Mauritel',
    '223_Mali Malitel',
    '223_Mali Orange',
    '224_Guinee Conakry Cellcom',
    '224_Guinee Conakry MTN',
    '224_Guinee Conakry Orange',
    '225_Cote Ivoire Moov',
    '225_Cote Ivoire MTN',
    '225_Cote Ivoire Orange',
    '226_Burkina Faso Orange',
    '226_Burkina Faso Telmob',
    '227_Niger Mobile Celtel',
    '227_Niger Mobile Orange',
    '227_Niger Mobile Telecel',
    '228_Togo Moov',
    '228_Togo TogoCell',
    '229_Benin Moov',
    '229_Benin MTN',
    '230_Maurice Others',
    '231_Liberia Cellcom',
    '232_Sierra Leone Africell',
    '232_Sierra Leone Orange',
    '233_Ghana MTN',
    '233_Ghana Tigo',
    '233_Ghana Vodafone',
    '234_Nigeria Celtel',
    '234_Nigeria EMTS',
    '234_Nigeria Globacom',
    '234_Nigeria Mobile MTN',
    '235_Tchad Millicom',
    '235_Tchad Zain',
    '236_Centre Afrique Orange',
    '237_Cameroun MTN',
    '237_Cameroun Orange',
    '238_Cap Vert CVMovel',
    '238_Cap Vert TSA',
    '239_Sao Tome CST',
    '240_Guinee Equatoriale Hits',
    '240_Guinee Equatoriale Orange',
    '241_Gabon Airtel',
    '241_Gabon Libertis',
    '242_Congo Celtel',
    '242_Congo Libertis',
    '243_RDC Celtel',
    '243_RDC Tigo',
    '243_RDC Vidacom',
    '244_Angola Unitel',
    '245_Guinee Bissau Orange',
    '245_Guinee Bissau Spacetel',
    '249_Soudan Zain',
    '250_Rwanda Airtel',
    '250_Rwanda MTN',
    '250_Rwanda Tigo',
    '251_Ethiopie ETC',
    '251_Ethiopie Others',
    '253_Djibouti Mobile',
    '254_Kenya Mobile Celtel',
    '254_Kenya TELKOM',
    '255_Tanzanie Zain (Celtel)',
    '256_Ouganda MTN',
    '256_Ouganda Orange',
    '256_Ouganda Telecom Ltd',
    '257_Burundi U-COM',
    '258_Mozambique Mcel',
    '258_Mozambique Vodacom',
    '261_Madagascar Orange',
    '262_Ocean indien Orange',
    '263_Zimbabwe  Telecel',
    '265_Malawi TNM',
    '265_Malawi Zain',
    '267_Botswana Mobile',
    '269_Comores Mobile',
    '27_AF SUD Cell',
    '27_AF SUD MTN',
    '27_AF SUD Tekom',
    '27_AF SUD Vodacom',
    '30_Grece Others',
    '30_Greece Cosmote',
    '30_Greece Vodafone',
    '30_Greece Wind',
    '31_Pays Bas KPN',
    '31_Pays Bas TMob',
    '31_Pays Bas Vodafone',
    '32_Belgique A2P Facebook',
    '32_Belgique Hub',
    '32_Belgique KPN Telenet',
    '32_Belgique Mobistar',
    '32_Belgique Proximus',
    '33_France BUYG',
    '33_France ORNG',
    '33_France SFR',
    '34_Espagne Movistar',
    '34_Espagne Orange',
    '34_Espagne Vodafone',
    '351_Portugal Optimus',
    '351_Portugal TMN',
    '351_Portugal Vodafone',
    '352_Luxembourg LuxGSM',
    '352_Luxembourg Others',
    '353_Ireland Vodafone',
    '355_Albanie Vodafone',
    '356_Malte GO Mobile',
    '356_Malte Vodafone',
    '356_Malte Vodafone',
    '359_Bulgarie MobilTel',
    '36_Hongrie T-Mobile',
    '36_Hongrie Vodafone',
    '373_Moldavie Moldcell',
    '373_Moldavie Orange',
    '374_Armenie Orange',
    '375_Belarus Velcom',
    '377_Monaco Monaco Telecom',
    '380_UKRAINE Kyivstar',
    '380_Ukraine MTS',
    '381_Serbie Telenor',
    '385_Croatie Vipnet',
    '386_Slovenie Si Mobil',
    '386_Slovenie Tusmobil',
    '387_Bosnie Herzegovine BH Mob',
    '39_Italie TIM',
    '39_Italie Vodafone',
    '39_Italie Wind',
    '40_Orange Roumanie',
    '40_Roumanie Vodafone',
    '41_Suisse Orange',
    '41_Suisse Swisscom',
    '420_Rep. Tcheque T-Mobile',
    '420_Reptcheque Others',
    '421_Slovakia Others',
    '43_Autriche T-Mobile',
    '44_Orange Royaume Uni',
    '44_Royaume Uni Jersey Telecom',
    '44_Royaume Uni O2',
    '44_Royaume Uni TMob',
    '44_Royaume Uni Vodafone',
    '44_RoyaumeUni Others',
    '46_Sweden Telenor',
    '46_Sweden Telia',
    '47_Norvege Telenor Mobil',
    '48_Pologne Others',
    '48_Pologne Polkomtel',
    '49_Allemagne DEU',
    '49_Allemagne Others',
    '49_Germany O2',
    '49_Germany VodafoneD2',
    '507_Panama Cable & Wireless',
    '55_Brazil Oi Brazil Brako',
    '590_Guadeloupe Orange Caraibe',
    '596_Martinique Orange Caraibe',
    '60_Malaisie Mobile Maxis',
    '60_Malaisie Umobile',
    '61_Australie Others',
    '63_Philipines Globe Telecom',
    '64_NouvelleZelande Vodafone',
    '65_Singapour MobileOne',
    '65_Singapour Singtel',
    '65_Singapour Starhub',
    '66_Thailande True_Move',
    '687_NouvelleCaledonie OPT',
    '7_Kazakhstan kcell',
    '7_Russie Megafon',
    '7_Russie Vimpelcom',
    '81_Japon NTT',
    '82_Coree du Sud SK',
    '852_HongKong Hutchison',
    '852_HongKong New World PCS',
    '852_HongKong Smartone',
    '853_MacaoChine CTM',
    '855_Cambodge Others',
    '86_CHINA MOBILE',
    '86_CHINA UNICOM',
    '882_Norvege Aeromobile',
    '886_Taiwan Chunghwa Telecom',
    '90_Turquie Avea',
    '90_Turquie Turkcell',
    '90_Turquie Vodafone',
    '91_BSNL',
    '91_Hutchison Essar',
    '91_Inde Bharti Delhi',
    '91_Inde Hexacom Orissa',
    '91_Inde Hexacom UP East',
    '91_Inde Hexacom West Bengal',
    '91_Inde Himachal Pradesh',
    '91_Inde Idea',
    '91_Inde Kolkata',
    '91_Inde Mahanagar',
    '91_Inde Mob',
    '91_Inde Vodafone',
    '91_MTNL Mumbai',
    '92_Pakistan Warid',
    '93_Afghanistan AWCC',
    '94_SriLanka Mobitel',
    '95_Myanmar MPT',
    '961_Liban Alfa',
    '961_Liban Touch',
    '962_Jordanie Orange',
    '962_Jordanie Zain',
    '963_Syrie MTN areeba',
    '964_Iraq Korek',
    '964_Iraq Zain',
    '965_Koweit Zain',
    '966_Arabie Saoud Etihad',
    '966_Arabie Saoud STelecom',
    '966_Arabie Saoud ZAIN',
    '968_Oman Oman Mobile',
    '970_Palestine Jawwal',
    '971_Emirats DU',
    '971_Emirats Etisalat',
    '972_Israel Cellcom',
    '972_Israel Orange',
    '973_Bahrein MTC Vodafone',
    '974_Qatar Qtel',
    '98_Iran Mobile',
    '998_Ouzbekistan Ucel',
    ];
}        
