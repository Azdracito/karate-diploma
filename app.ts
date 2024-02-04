import DefaultGenerateDiploma from './script/DefaultGenerateDiploma'

const defaultGenerateDiploma = new DefaultGenerateDiploma({
  date: new Date('2/4/2023'),
  clubName: 'SKC Voreppe',
  clubCity: 'Voreppe'
})
defaultGenerateDiploma.generateDiplomas(
  [
    {
      firstName: 'Ilan',
      lastName: 'Philipe',
      type: 'b'
    }
  ],
  (doc, err) => {
    if (err != null) {
      console.error(err)
      return
    }

    console.log(doc)
  }
)
/*
const voreppeGenerateDiploma = new VoreppeGenerateDiploma({
  date: new Date('2/4/2023')
})
voreppeGenerateDiploma.generateDiplomas([
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Ilan',
    lastName: 'Philipe',
    type: 'bleu'
  },
  // Band 1
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_1),
    firstName: 'Samuel',
    lastName: 'MARTINO',
    type: 'blanche-jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_1),
    firstName: 'Nathan',
    lastName: 'DI BARTOLOMEO',
    type: 'blanche-jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_1),
    firstName: 'Karell',
    lastName: 'LANGUILLE',
    type: 'jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_1),
    firstName: 'Kiara',
    lastName: 'DIONGUE',
    type: 'jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_1),
    firstName: 'Aissatou',
    lastName: 'DIONGUE',
    type: 'jaune'
  },

  // Band 2
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Miley',
    lastName: 'FAVIER',
    type: 'jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Margaux',
    lastName: 'BRUANDET',
    type: 'jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Elina',
    lastName: 'TEIXIERA',
    type: 'blanche-jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Sidney',
    lastName: 'BAWA GROSJEAN',
    type: 'blanche-jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_2),
    firstName: 'Iyed',
    lastName: 'YOUSSEF',
    type: 'blanche-jaune'
  },

  // Band 3

  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Valentin',
    lastName: 'COLLET-BEILLON',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Alix',
    lastName: 'BERGERON',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Diane',
    lastName: 'MAIGNE',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Stella',
    lastName: 'THERON',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Raphael',
    lastName: 'SNAIDERO',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'DURAND',
    lastName: 'BERGERON',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Elian',
    lastName: 'ZRIDA',
    type: 'orange'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Antonin',
    lastName: 'CHARRIER',
    type: 'orange'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Emma',
    lastName: 'PESENTI',
    type: 'jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Sophia',
    lastName: 'DICORATO',
    type: 'jaune'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_3),
    firstName: 'Morjana',
    lastName: 'DAHOUMANE',
    type: 'jaune'
  },

  // Band 4
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_4),
    firstName: 'Alexis',
    lastName: 'LOIODICE',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_4),
    firstName: 'Kenjy',
    lastName: 'SEIGLER',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_4),
    firstName: 'Adam',
    lastName: 'HOUMANI',
    type: 'bleu'
  },

  // Band 5
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_5),
    firstName: 'Baptiste',
    lastName: 'BRAND',
    type: 'vert'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_5),
    firstName: 'Ilan',
    lastName: 'EL YANDOUZI',
    type: 'bleu'
  },
  {
    ...voreppeGenerateDiploma.baseGroupMember(ISKCVoreppeGroup.GROUP_5),
    firstName: 'Etienne',
    lastName: 'CESAR',
    type: 'vert'
  }
])
*/
