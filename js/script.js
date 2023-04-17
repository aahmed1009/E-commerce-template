// some scripts

// jquery ready start
$(document).ready(function () {
  // jQuery code

  /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////

  //////////////////////// Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  $(".js-check :radio").change(function () {
    var check_attr_name = $(this).attr("name");
    if ($(this).is(":checked")) {
      $("input[name=" + check_attr_name + "]")
        .closest(".js-check")
        .removeClass("active");
      $(this).closest(".js-check").addClass("active");
      // item.find('.radio').find('span').text('Add');
    } else {
      item.removeClass("active");
      // item.find('.radio').find('span').text('Unselect');
    }
  });

  $(".js-check :checkbox").change(function () {
    var check_attr_name = $(this).attr("name");
    if ($(this).is(":checked")) {
      $(this).closest(".js-check").addClass("active");
      // item.find('.radio').find('span').text('Add');
    } else {
      $(this).closest(".js-check").removeClass("active");
      // item.find('.radio').find('span').text('Unselect');
    }
  });

  //////////////////////// Bootstrap tooltip
  if ($('[data-toggle="tooltip"]').length > 0) {
    // check if element exists
    $('[data-toggle="tooltip"]').tooltip();
  } // end if
});

// jquery end
$(document).ready(function () {
  $(".carousel-item *").addClass("d-none");

  // Animate the first slide
  setTimeout(function () {
    $(".carousel-item.active *").removeClass("d-none").addClass("animated");
  }, 700);

  // Animate after the slider changes
  $("#mainBanner").on("slid.bs.carousel", function (e) {
    // Add .d-none to previous shown slide
    $(".carousel-item *").addClass("d-none");

    // Element for new slide
    var c = e["relatedTarget"];

    // After 0.7 sec slide changes, then make the animation for new slide
    setTimeout(function () {
      $(c).find("*").removeClass("d-none").addClass("animated");
      console.log("c");
    }, 700);
  });
});
