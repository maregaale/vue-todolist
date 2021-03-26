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
      // metodo che elmina elemento della lista
      deleteElement: function (generalIndex) {
        this.lista.splice(generalIndex, 1);
      },
      // metodo che aggiunge elemento della lista
      addElement: function () {
        this.lista.push(this.input);

        // pulisco il valore di input
        this.input = "";
      },
    },
  }
);
