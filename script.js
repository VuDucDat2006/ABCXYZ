/**
 * ============================================================================
 * CODEGYM CAREER LANDING PAGE - JAVASCRIPT
 * Tương tác giao diện Material Design, cuộn trang mượt mà & xử lý Form
 * ============================================================================
 */

$(document).ready(function () {
  // 1. Khởi tạo hiệu ứng gợn sóng Waves Effect của MDBootstrap
  Waves.init();

  // 2. Xử lý Navbar khi cuộn trang (Sticky / Elevation transition)
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $('.navbar').addClass('top-nav-collapse');
      $('#btnScrollToTop').fadeIn(250).css('display', 'flex');
    } else {
      $('.navbar').removeClass('top-nav-collapse');
      $('#btnScrollToTop').fadeOut(250);
    }
  });

  // 3. Cuộn mượt mà (Smooth Scrolling) cho tất cả các liên kết neo #
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      var navHeight = $('.navbar').outerHeight() || 70;
      $('html, body').stop().animate({
        scrollTop: target.offset().top - navHeight + 5
      }, 700, 'easeInOutExpo');

      // Tự động đóng mobile menu sau khi click
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').click();
      }
    }
  });

  // 4. Nút Floating Action Button cuộn lên đầu trang
  $('#btnScrollToTop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600, 'easeInOutExpo');
  });

  // 5. Xử lý gửi Form Đăng Ký Tư Vấn (Lead Generation Form)
  $('#leadForm').on('submit', function (e) {
    e.preventDefault();

    var name = $('#formName').val().trim();
    var phone = $('#formPhone').val().trim();
    var email = $('#formEmail').val().trim();
    var course = $('#formCourse option:selected').text();
    var location = $('#formLocation option:selected').text();

    // Kiểm tra tính hợp lệ cơ bản
    if (!name || !phone || !email) {
      alert('Vui lòng nhập đầy đủ các trường thông tin bắt buộc (*).');
      return;
    }

    // Hiển thị dữ liệu lên Material Modal xác nhận
    $('#modalUserName').text('Cảm ơn bạn, ' + name + '!');
    $('#modalUserPhone').text(phone);
    $('#modalUserCourse').text(course);
    $('#modalUserLocation').text(location);

    // Kích hoạt Modal thành công
    $('#successModal').modal('show');

    // Reset Form và đưa label Material về trạng thái ban đầu
    $('#leadForm')[0].reset();
    $('#leadForm .form-control').removeClass('valid');
    $('#leadForm label').removeClass('active');
  });

  // 6. Hiệu ứng làm sáng các thẻ card khi di chuột (Micro-interaction)
  $('.material-card, .course-card, .testimonial-card').on('mouseenter', function () {
    $(this).addClass('z-depth-2');
  }).on('mouseleave', function () {
    $(this).removeClass('z-depth-2');
  });
});

// Polyfill hiệu ứng easing mượt mà cho jQuery animate
jQuery.extend(jQuery.easing, {
  easeInOutExpo: function (x, t, b, c, d) {
    if (t === 0) return b;
    if (t === d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
});
