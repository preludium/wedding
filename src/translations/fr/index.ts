import en from '../en';

export default {
  common: {
    date: "14 août 2024",
    location: "Lésigny, France",
    and: "et",
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    enterPassword: "Saisir le mot de passe:",
    wrongPassword: "Mot de passe erroné. Saisir le mot de passe:",
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
  welcome: {
    heading: "Chers invités,",
    p1: "Nous sommes ravis de partager ce moment spécial avec vous ! Très bientôt, nous célébrerons le début de notre voyage ensemble en tant que mari et femme. Ce site web a été créé pour vous aider à préparer cette journée spéciale et vous fournir toutes les informations nécessaires.",
    hereYouWillFind: "Vous trouverez ici :",
    bullet1:
      "<strong>Les détails de la cérémonie et de la réception</strong> - où et quand notre grand jour aura lieu.",
    bullet2:
      "<strong>Les indications</strong> - pour vous aider à rejoindre facilement le lieu.",
    bullet3:
      "<strong>Le programme de la journée</strong> - pour savoir à quoi vous attendre.",
    bullet4: "<strong>RSVP</strong> - merci de confirmer votre présence.",
    bullet5: "<strong>Et d'autres informations pratiques.</strong>",
    p2: "Nous sommes reconnaissants de partager ce jour exceptionnel avec les personnes les plus proches de nos cœurs. Votre présence rendra notre mariage encore plus beau !",
    greeting: "Nous avons hâte de célébrer ensemble !",
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
  transport: {
    ceremony: "Cérémonie",
    wedding: "Réception",
    info: "Nous proposons un service de transport pour les invités entre l'église et le château - nous demanderons une confirmation dans le questionnaire en raison du nombre limité de places."
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
    address: "Adresse à laquelle nous enverrons l'invitation",
    email: 'Email',
    phoneNumber: 'Numéro de téléphone',
    send: "Envoyer",
    sent: "Réponses envoyées",
    success: "Vos réponses ont été envoyées à Gabriela et Francis",
    failure: "L'envoi de vos réponses a échoué. Réessayez ou contactez directement Gabriela et Francis",
    requiredField: "Ce champ est obligatoire"
  },
  gifts: {
    p1: "Votre présence en ce jour spécial est le plus beau cadeau et une immense joie pour nous !",
    p2: "Cependant, si vous souhaitez célébrer davantage notre union, plutôt que des cadeaux traditionnels, nous serions reconnaissants de votre soutien à notre avenir commun sous la forme d'un virement bancaire symbolique.",
    p3: "Nous prévoyons d'utiliser ces fonds pour meubler notre nouvelle maison.",
    p4: "Merci d'avance pour chaque mot gentil, geste et bienveillance. Nous avons hâte de célébrer ce jour avec vous !"
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