import en from '../en';

export default {
  common: {
    date: "14 août 2024",
    location: "Lésigny, France",
    and: "et",
  },
  nav: {
    welcome: 'Accueil',
    schedule: 'Programme',
    questionnaire: 'Questionnaire',
    transport: 'Transport',
    accommodation: 'Hébergement',
    gifts: 'Cadeaux',
    photos: 'Photos',
  },
  hero: {
    title: "Réservez la date",
  },
  schedule: {
    weddingCeremony: {
      time: "14:00",
      title: "Cérémonie de mariage",
    },
    transferToWeddingVenue: {
      time: "15:30",
      title: "Départ vers la salle de réception",
    },
    groupPhotos: {
      time: "16:00",
      title: "Photos de groupe",
    },
    welcomeCocktail: {
      time: "17:00",
      title: "Vin d'honneur",
    },
    dinner: {
      time: "19:30",
      title: "Dîner",
    },
    cakeCutting: {
      time: "22:30",
      title: "Découpe du gâteau",
    },
    firstDance: {
      time: "23:00",
      title: "Première danse",
    }
  },
  questionnaire: {
    confirmAttendance: {
      title: 'Confirmez votre présence à notre mariage',
      yes: 'Bien sûr, je serai là!',
      no: 'Je suis désolé(e), je ne pourrai pas être avec vous ce jour-là'
    },
    transportToWeddingVenue: {
      title: 'Comment vous rendrez-vous au lieu de réception (Château de Lésigny)?',
      onMyOwn: 'Par mes propres moyens',
      needHelp: "J'ai besoin d'aide",
    },
    transportToHotel: {
      title: "Comment retournerez-vous à l'hôtel?",
      onMyOwn: 'Par mes propres moyens',
      needHelp: "J'ai besoin d'aide",
      notRelevant: 'Non applicable'
    },
    fullName: 'Nom complet',
    email: 'Email',
    phoneNumber: 'Numéro de téléphone',
    send: "Envoyer",
    success: "Vos réponses ont été envoyées à Gabriela et Francis",
    failure: "L'envoi de vos réponses a échoué. Réessayez ou contactez directement Gabriela et Francis",
    requiredField: "Ce champ est obligatoire"
  },
  photos: {
    intro: "Vos photos et souvenirs sont un trésor inestimable pour nous ! Pour capturer autant de moments merveilleux de notre mariage et de notre réception que possible, nous vous encourageons à utiliser l'application dédiée, qui vous permet de partager facilement des photos de ce jour spécial.",
    howItWorks: "Comment ça marche ?",
    step1: "Téléchargez l'application POV sur votre téléphone.",
    step2: "Connectez-vous ou créez un compte.",
    step3: "Rejoignez notre album de mariage en utilisant le code : [code de l'album].",
    step4: "Ajoutez vos photos et consultez les photos des autres invités !",
    conclusion: "Grâce à cette application, nous pouvons rassembler toutes les photos en un seul endroit et revivre ces beaux souvenirs ensemble. Qui sait, peut-être que votre photo deviendra notre préférée ? 😊",
    outro: "Merci d'avance pour chaque moment capturé !"
  }
} as typeof en;