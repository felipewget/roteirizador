export default {

    // Actual Language
    language: "en-us",

    // Home & Footer
    all_languages: [
      {
        name: "Portuguese",
        cod: "pt-br"
      },
      {
        name: "French",
        cod: "fr-fr"
      },
      {
        name: "English",
        cod: "en-us"
      }
    ],

    // Rodape
    footer: {
      copy: "Roteirizador - © Developed with great affection by Felipe Oliveira"
    },

    // Pagina Login
    page_login: {
      title: "Roteirizador",
      form: {
        email: {
          placeholder: "Type your e-mail here"
        },
        password: {
          placeholder: "Type your password here"
        },
        button_submit:  {
          text: "Login"
        }
      },
      link_register: {
        text: "Create my account"
      }
    },

    // Pagina Registro
    page_register: {
      title: "Roteirizador",
      form: {
        full_name: {
          placeholder: "Type your full name here"
        },
        email: {
          placeholder: "Type your e-mail here"
        },
        password: {
          placeholder: "Type your password here"
        },
        button_submit:  {
          text: "Create my Account"
        }
      },
      link_login: {
        text: "Go to login"
      }
    },

    // Pagina 404
    page_404: {
      main_title: "Page not found",
      main_description: "Well... this link not exist",
      suggestion_description: "But since it's here, why not take a look at the project repository?",
      or: "OR",
      link_login: {
        text: "Back to Login"
      }
    },

    // Pagina Roteirizador
    page_roteirizador: {
      title: "Roteirizador",
      form_roteirizador: {
        label_from: {
          label: "From",
          placeholder: "Type your origin here"
        },
        label_to: {
          label: "To",
          placeholder: "Type your destionation here"
        },
        label_stop: {
          label: "Stop",
          placeholder: "Type your stop here"
        },
        button_submit: {
          text: "Create Route"
        }
      },

      preview_roteirizador: {
        block_route: {
          from: "From: ",
          to: "To: ",
          duration: "Duration: ",
          distance: "Distance: "
        }
      },

      history_routes: {
        title: "Route`s History",
        block_route: {
          schedule: "Schedule: ",
          from: "From: ",
          to: "To: ",
          duration: "Duration: ",
          distance: "Distance: ",
          times_stop: "N. of Stops ",
        },
        no_have_routes: "No routes taken yet"
      },

    },

}
