// @ts-nocheck
$(document).ready(function () {
  function setActiveSection() {
    var scrollPos = $(document).scrollTop();
    $("section").each(function () {
      var currLink = $('a[href="#' + $(this).attr("id") + '"]');
      var sectionOffset = $(this).offset().top - 96; // Adjust the offset as needed

      if (sectionOffset <= scrollPos && sectionOffset + $(this).outerHeight() > scrollPos) {
        $(".eachOpt").removeClass("activeOpt");
        currLink.parent().addClass("activeOpt");
      }
    });
  }

  setActiveSection(); // Initial call to set active section on page load

  $(document).on("scroll", function () {
    setActiveSection();
  });
});
