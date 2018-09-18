$(document).ready(function () {
    $("#add-item").on("click", function () {
        $.post("/api/burgers", { burger_name: $("#new-burger").val() }, function (data) {
            location.reload();
        });
    });
    $("body").on("click", ".eat", function () {
        $.ajax({
            url: "/api/burgers/" + this.dataset.eat,
            type: "PUT",
            success: function (data) {
                location.reload();
            }
        });
    });
    $("body").on("click", ".delete", function () {
        $.ajax({
            url: "/api/burgers/" + this.dataset.delete,
            type: "DELETE",
            success: function (data) {
                location.reload();
            }
        });
    });
});