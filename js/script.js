const app = new Vue (
  {
    el: "#root",
    data: {
      lista: [
        "html",
        "css",
        "bootstrap",
        "js",
        "jquery",
        "vuejs"
      ],
      input: "",
    },
    methods: {
      // elmina elemento della lista
      deleteElement: function (generalIndex) {
        this.lista.splice(generalIndex, 1);
      },
    },
  }
);
