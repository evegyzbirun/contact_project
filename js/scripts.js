$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const name = $("#name-input").val();
    const email = $("#email-input").val();
    const dob = $("#dob-input").val();
    const address = $("#address-input").val();
    const phone = $("#phone-input").val();
    const status = $("#select-input").val();

    $("#name-input").val("");
    $("#email-input").val("");
    $("#dob-input").val("");
    $("#address-input").val("");
    $("#phone-input").val("");
    $("#select-input").val("Single");

    const element = document.createElement("div");
    element.classList.add("contact");

    $(element).prepend("<h3>" + name + "</h3>");
    $(element).append("<ul class='contact-info'></ul>");
    $(element)
      .children("ul")
      .append("<li><span class='highlight'>Email: </span>" + email + "</li>");
    $(element)
      .children("ul")
      .append(
        "<li><span class='highlight'>Date of Birth: </span>" + dob + "</li>"
      );
    $(element)
      .children("ul")
      .append(
        "<li><span class='highlight'>Address: </span>" + address + "</li>"
      );
    $(element)
      .children("ul")
      .append("<li><span class='highlight'>Phone: </span>" + phone + "</li>");
    $(element)
      .children("ul")
      .append("<li><span class='highlight'>Status: </span>" + status + "</li>");
    console.log(element);
    $("#output").append(element);

    $(element)
      .children("h3")
      .click(function () {
        $(this).siblings("ul").toggle();
        console.log(this);
      });
  });
});
