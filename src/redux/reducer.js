const user = {
    name: '',
    email: '',
    points: 0,
    imageProfile: '',
    idCard: {
        type: '',
        source: ''
    },
    phoneNumber: '',
    benevid: {
        insurance: [
            {
                title: 'Asuransi',
                image: 'https://www.myceisonline.com/wp-content/uploads/2017/02/Jenis-jenis-asuransi.jpg',
                limitKredit: 15000000,
                periode: 'Oktober 2020',
                type: 'Insurance'
            }
        ]
    },
    catalogue: {
        health: [],
        life: [],
    },
    basket: [],
    birthday: '',
    gender: '',
    paySlip: [
        {
            file: { uri:'https://www.nyu.edu/content/dam/nyu/financialOperationsTreas/documents/ess/PeopleSyncTipSheet-ViewYourPayslips.pdf' },
            periode: 'Maret 2021'
        }
    ],
    historyTransaction: [],
    token: '',
    isSignIn: true,
};
const insurance = {
    life: [
        {
            title: 'Pasific Life Insurance',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/1123A68B-A782-4083-B1A4-C99A3B768104.png',
            price: {
                month: 1000000,
                year: 12000000,
            },
            benevid: 2000000,
            periode: 'Oktober 2020',
            category: 'life',
            noCash: false,
            noCheckHealth: false,
            doubleClaim: true
        },
        {
            title: 'Asuransi Sinar Mas',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/E0AD2667-9C66-48C9-9BAD-4A45BFAA4D24.png',
            price: {
                month: 12500000,
                year: 15000000,
            },
            benevid: 2500000,
            periode: 'Oktober 2020',
            category: 'life',
            noCash: true,
            noCheckHealth: false,
            doubleClaim: false
        },
        {
            title: 'Avrist Prime Protection',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/76CFA868-F97A-470E-9CAE-1379274FF0B0.png',
            price: {
                month: 1666666,
                year: 20000000,
            },
            benevid: 4000000,
            periode: 'Oktober 2020',
            category: 'life',
            noCash: false,
            noCheckHealth: true,
            doubleClaim: true
        },
        {
            title: 'Cigna Life Protection',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/9C458F3A-5FE0-489B-8F9E-977DED11DEF3.png',
            price: {
                month: 12500000,
                year: 15000000,
            },
            benevid: 2500000,
            periode: 'Oktober 2020',
            category: 'life',
            noCash: true,
            noCheckHealth: false,
            doubleClaim: true
        },
        {
            title: 'Allianz Life Family Secure',
            image: 'http://aaui.or.id/wp-content/uploads/2018/08/2PT-Asuransi-Allianz-Utama-Indonesia.png',
            price: {
                month: 833333,
                year: 10000000,
            },
            benevid: 1500000,
            periode: 'Oktober 2020',
            category: 'life',
            noCash: false,
            noCheckHealth: false,
            doubleClaim: false,
        }
    ],
    health: [
         {
            title: 'Simas Sehat Gold',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/E0AD2667-9C66-48C9-9BAD-4A45BFAA4D24.png',
            price: {
                month: 166000,
                year: 2000000,
            },
            benevid: 20000000,
            periode: 'Oktober 2020',
            category: 'health',
            noCash: true,
            noCheckHealth: false,
            doubleClaim: true
        },
        {
            title: 'Avrist Sehati',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/03118DA5-228A-4796-B405-6F72ECF42A70.png',
            price: {
                month: 83000,
                year: 1000000,
            },
            benevid: 2000000,
            periode: 'Oktober 2020',
            category: 'health',
            noCash: false,
            noCheckHealth: false,
            doubleClaim: false
        },
        {
            title: 'Smile Medical Plus',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/932F26C1-B534-41AE-A409-1E1E6B7B2720.png',
            price: {
                month: 20800,
                year: 250000,
            },
            benevid: 2000000,
            periode: 'Oktober 2020',
            category: 'health',
            noCash: false,
            noCheckHealth: true,
            doubleClaim: true
        },
        {
            title: 'Simply Healthcare',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/91BC2166-74A9-47E1-9456-6C62F4DF785A.png',
            price: {
                month: 166000,
                year: 2000000,
            },
            benevid: 20000000,
            periode: 'Oktober 2020',
            category: 'health',
            noCash: true,
            noCheckHealth: true,
            doubleClaim: true
        },
        {
            title: 'Smart Health Maxi Violet',
            image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/86DAC6B2-AA51-47E1-9089-F32B52D2E38A.png',
            price: {
                month: 20800,
                year: 250000,
            },
            benevid: 2000000,
            periode: 'Oktober 2020',
            category: 'health',
            noCash: true,
            noCheckHealth: true,
            doubleClaim: false
        },
    ],
}

const insuranceRecomended = [
    {
        title: 'Pasific Life Insurance',
        image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/1123A68B-A782-4083-B1A4-C99A3B768104.png',
        price: {
            month: 1000000,
            year: 12000000,
        },
        benevid: 2000000,
        periode: 'Oktober 2020',
    },
    {
        title: 'Asuransi Sinar Mas',
        image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/E0AD2667-9C66-48C9-9BAD-4A45BFAA4D24.png',
        price: {
            month: 12500000,
            year: 15000000,
        },
        benevid: 2500000,
        periode: 'Oktober 2020',
    },
    {
        title: 'Avrist Prime Protection',
        image: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/76CFA868-F97A-470E-9CAE-1379274FF0B0.png',
        price: {
            month: 1666666,
            year: 20000000,
        },
        benevid: 4000000,
        periode: 'Oktober 2020',
    },
];

const data = {
    user,
    insurance,
    insuranceRecomended
}

const reducer = (state = data, action) => {
    // if (action.type === 'SET_USER') {
    //     return {
    //         ...state,
    //         user: action.input
    //     }
    // }
    // return state;
    switch (action.type) {
     case  'SET_USER':
        return {
          ...state, // not needed here, but I add this since your production state will likely have more than just one key
          message: action.input
        };

      default:
        return state
   }
};
export default reducer;