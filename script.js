const lista = $("ul");
const achor = $(".anchor");

const width = $(document).width();

if (width < 767) {
  lista.on("click", function () {
    if (lista.hasClass("active")) {
      lista.removeClass("active");
    } else {
      lista.addClass("active");
    }
  });
}
