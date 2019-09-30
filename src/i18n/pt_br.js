export default {

    // Actual Language
    language: "pt-br",

    // Home & Footer
    all_languages: [
      {
        name: "Português",
        cod: "pt-br"
      },
      {
        name: "Francês",
        cod: "fr-fr"
      },
      {
        name: "Inglês",
        cod: "en-us"
      }
    ],

    // Rodape
    footer: {
      copy: "Roteirizador - © Desenvolvido com muito carinho por Felipe Oliveira"
    },

    // Pagina Login
    page_login: {
      title: "Roteirizador",
      form: {
        email: {
          placeholder: "Digite seu e-mail aqui"
        },
        password: {
          placeholder: "Digite sua senha aqui"
        },
        button_submit:  {
          text: "Login"
        }
      },
      link_register: {
        text: "Criar minha conta"
      }
    },

    // Pagina Registro
    page_register: {
      title: "Roteirizador",
      form: {
        full_name: {
          placeholder: "Digite seu nome completo aqui"
        },
        email: {
          placeholder: "Digite seu e-mail aqui"
        },
        password: {
          placeholder: "Digite sua senha aqui"
        },
        button_submit:  {
          text: "Fazer meu Registro"
        }
      },
      link_login: {
        text: "Ir para o login"
      }
    },

    // Pagina 404
    page_404: {
      main_title: "Pagina não encontrada",
      main_description: "Vish, esse link não existe",
      suggestion_description: "Mas já que esta aqui, por que não aproveita pra dar uma olhada no repositório do projeto?",
      or: "OU",
      link_login: {
        text: "Voltar ao Login"
      }
    },

    // Pagina Roteirizador
    page_roteirizador: {
      title: "Roteirizador",
      form_roteirizador: {
        label_from: {
          label: "Origem",
          placeholder: "Digite sua origem aqui"
        },
        label_to: {
          label: "Destino",
          placeholder: "Digite seu destino aqui"
        },
        label_stop: {
          label: "Parada",
          placeholder: "Digite sua parada aqui"
        },
        button_submit: {
          text: "Gerar Rota"
        }
      },

      preview_roteirizador: {
        block_route: {
          from: "De: ",
          to: "Para: ",
          duration: "Duração: ",
          distance: "Ditancia: "
        }
      },

      history_routes: {
        title: "Histórico de Rotas",
        block_route: {
          schedule: "Horário: ",
          from: "De: ",
          to: "À: ",
          duration: "Duração: ",
          distance: "Distancia: ",
          times_stop: "N. Paradas ",
        },
        no_have_routes: "Ainda não há rotas realizadas"
      },

    },

}
