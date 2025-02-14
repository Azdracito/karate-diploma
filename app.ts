import DefaultGenerateDiploma from './script/DefaultGenerateDiploma'

const defaultGenerateDiploma = new DefaultGenerateDiploma({
  date: new Date('2/19/2025'),
  clubName: 'SKC Voreppe',
  clubCity: 'Voreppe'
})
defaultGenerateDiploma.generateDiplomas(
  [
    {
      firstName: 'SINACER',
      lastName: 'Sahel',
      type: 'j'
    },
    {
      firstName: 'TRAN',
      lastName: 'Emma',
      type: 'bj'
    },
    {
      firstName: 'BARBIER SPEIGEL',
      lastName: 'Théo',
      type: 'bj'
    },
    {
      firstName: 'AZIRI',
      lastName: 'Hidaya',
      type: 'bj'
    },
    {
      firstName: 'FIALA',
      lastName: 'Asia',
      type: 'bj'
    },
    {
      firstName: 'BERCH',
      lastName: 'Anais',
      type: 'bj'
    },
    {
      firstName: 'TOURNIER',
      lastName: 'Sacha',
      type: 'j'
    },


    {
      firstName: 'GROS',
      lastName: 'Esteban',
      type: 'o'
    },
    {
      firstName: 'BRUANDET',
      lastName: 'Margaux',
      type: 'v'
    },
    {
      firstName: 'FAVIER',
      lastName: 'Miley',
      type: 'v'
    },

    {
      firstName: 'BERGERON',
      lastName: 'Leanne',
      type: 'o'
    },
    {
      firstName: 'DI BARTOLOMEO',
      lastName: 'Nathan',
      type: 'ov'
    },
    {
      firstName: 'MOURIER',
      lastName: 'Sacha',
      type: 'ov'
    },
    {
      firstName: 'SYAM',
      lastName: 'Vyshnav',
      type: 'ov'
    },

    {
      firstName: 'PESENTI',
      lastName: 'Emma',
      type: 'vb'
    },
    {
      firstName: 'ZRIDA',
      lastName: 'Elian',
      type: 'vb'
    }
  ],
)
