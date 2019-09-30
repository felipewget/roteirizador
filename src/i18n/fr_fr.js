export default {

    // Actual Language
    language: "fr-fr",

    // Home & Footer
    all_languages: [
      {
        name: "Portugais",
        cod: "pt-br"
      },
      {
        name: "Français",
        cod: "fr-fr"
      },
      {
        name: "Anglais",
        cod: "en-us"
      }
    ],

    // Rodape
    footer: {
      copy: "Roteirizador - © Développé avec beaucoup d'affection par Felipe Oliveira"
    },

    // Pagina Login
    page_login: {
      title: "Roteirizador",
      form: {
        email: {
          placeholder: "Tapez votre adresse e-mail ici"
        },
        password: {
          placeholder: "Tapez votre mot de passe ici"
        },
        button_submit:  {
          text: "Login"
        }
      },
      link_register: {
        text: "Créer mon compte"
      }
    },

    // Pagina Registro
    page_register: {
      title: "Roteirizador",
      form: {
        full_name: {
          placeholder: "Tapez votre nom complet ici"
        },
        email: {
          placeholder: "Tapez votre adresse e-mail ici"
        },
        password: {
          placeholder: "Tapez votre mot de passe ici"
        },
        button_submit:  {
          text: "Créer mon compte"
        }
      },
      link_login: {
        text: "Aller à la connexion"
      }
    },

    // Pagina 404
    page_404: {
      main_title: "Page non trouvée",
      main_description: "Bien... ce lien n'existe pas",
      suggestion_description: "Mais puisque c'est ici, pourquoi ne pas jeter un coup d'œil au référentiel de projet?",
      or: "OU",
      link_login: {
        text: "Retour à la connexion"
      }
    },

    // Pagina Roteirizador
    page_roteirizador: {
      title: "Roteirizador",
      form_roteirizador: {
        label_from: {
          label: "De",
          placeholder: "Tapez votre origine ici"
        },
        label_to: {
          label: "To",
          placeholder: "Tapez votre destionation ici"
        },
        label_stop: {
          label: "Arrêtez",
          placeholder: "Tapez votre arrêt ici"
        },
        button_submit: {
          text: "Créer un itinéraire"
        }
      },

      preview_roteirizador: {
        block_route: {
          from: "De: ",
          to: "To: ",
          duration: "Histoire de la route: ",
          distance: "Distance: "
        }
      },

      history_routes: {
        title: "Histoire de la route",
        block_route: {
          schedule: "Le temps: ",
          from: "De: ",
          to: "To: ",
          duration: "Histoire de la route: ",
          distance: "Distance: ",
          times_stop: "N. des arrêts:  ",
        },
        no_have_routes: "Aucun itinéraire pris pour le moment"
      },

    },

}
