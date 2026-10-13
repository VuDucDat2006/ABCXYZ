# Báo Cáo Thực Hành: Xây Dựng Landing Page CodeGym Career Theo Phong Cách Bootstrap Material Design (MDBootstrap)

> **Học viên**: Vũ Đức Đạt (GitHub: [VuDucDat2006](https://github.com/VuDucDat2006))  
> **Repository GitHub**: [https://github.com/VuDucDat2006/ABCXYZ](https://github.com/VuDucDat2006/ABCXYZ)  
> **Branch**: `codegym-career-landing`  
> **Trang nguồn tham khảo**: [https://codegym.vn/codegym-career/](https://codegym.vn/codegym-career/)  
> **Thư viện UI chính**: Bootstrap Material Design (MDBootstrap v4.19.1), Bootstrap v4.5.0, Font Awesome v5.11.2, Google Fonts Roboto, jQuery v3.5.1.

---

## 1. Mục Tiêu & Yêu Cầu Dự Án

* **Luyện tập xây dựng Landing Page hoàn chỉnh**: Phân tích nội dung từ trang nguồn thực tế của CodeGym Career, sắp xếp bố cục thông minh và triển khai giao diện đáp ứng (Responsive Design).
* **Ứng dụng Bootstrap Material Design (MDBootstrap)**: Áp dụng triệt để các nguyên lý thiết kế Material Design của Google:
  - **Phân cấp độ cao (Elevation / z-depth)**: Bóng đổ đa tầng tạo cảm giác vật lý chân thực.
  - **Hiệu ứng gợn sóng (Ripple / Waves Effect)**: Tăng trải nghiệm xúc giác khi người dùng tương tác với nút bấm và thẻ.
  - **Màu sắc sống động & Tương phản chuẩn WCAG**: Tông màu chủ đạo là Xanh Deep Material (`#0d47a1`, `#1565c0`) kết hợp màu nhấn Hổ phách/Cam rực rỡ (`#ff6f00`, `#ffca28`).
  - **Typography Roboto**: Phông chữ chuẩn mực của hệ thống Material Design.
* **Đầy đủ các phần chức năng**: Navbar cố định, Hero Section, Triết lý đào tạo, Lộ trình Bootcamp, Dịch vụ việc làm, Khóa học, Doanh nghiệp đối tác, Cảm nhận học viên, Form thu thập thông tin tư vấn và Footer.

---

## 2. Phân Tích Nội Dung & Chuyển Đổi Sang Material Design ("Materialize")

| Thành phần Landing Page | Nội dung từ trang nguồn CodeGym Career | Component Material Design (MDBootstrap) đã áp dụng |
| :--- | :--- | :--- |
| **Header / Navbar** | Menu điều hướng, Logo CodeGym Career, Nút tư vấn | `.navbar.fixed-top.scrolling-navbar` tự động chuyển nền trong suốt sang màu nền đậm có bóng đổ `z-depth-2` khi cuộn. |
| **Hero Section** | "Trở thành Lập trình viên Full-Stack chỉ sau 5 tháng / 20 tuần", cam kết việc làm 100% | Hero Jumbotron với lớp phủ gradient chiều sâu, nút bấm bo góc tròn `.btn-rounded`, thẻ thống kê `.hero-card-stats` nổi với hiệu ứng kính mờ (Backdrop filter) và độ cao `z-depth-3`. |
| **Triết lý & Lợi ích đào tạo** | 6 giá trị cốt lõi: Sự nghiệp từ ngày đầu, Tương xứng công sức, Trải nghiệm thật, Thực chiến, Hỗ trợ 1-1, Công nghệ giáo dục | Hệ thống 6 thẻ `.material-card` với các vòng tròn biểu tượng màu sắc nổi bật, hiệu ứng nâng cao khi di chuột (`hoverable translateY(-6px)`). |
| **Lộ trình học (Roadmap)** | 4 giai đoạn đào tạo theo mô hình Coding Bootcamp thực chiến (20 tuần) | Thiết kế dạng thẻ tiến trình liên tục (Stepper Cards) có viền trái nhấn màu thương hiệu, nhãn thời lượng và danh sách checklist trực quan. |
| **Dịch vụ việc làm (Career Services)** | 5 bước chuyển giao việc làm: Tinh chỉnh kỹ năng, Tạo CV, Portfolio, Mock Interview, Nhận việc | 5 khối hộp dịch vụ tương tác có huy hiệu số tròn Material, đi kèm banner Cam kết hoàn tiền 100% học phí nếu không có việc làm. |
| **Khóa học tiêu biểu** | Khóa Java Web Full-stack, JavaScript React/Node, Python Data | Các thẻ khóa học `.course-card` có phần header gradient riêng biệt theo ngôn ngữ, huy hiệu nổi bật (Badge) và danh sách thẻ tag kỹ năng (`.skill-tag`). |
| **Doanh nghiệp đối tác** | FPT Software, Viettel, VNPT, Rikkeisoft, VTI, CMC, NashTech, MISA | Lưới 8 khối đối tác có viền tinh gọn và hiệu ứng đổ bóng phản hồi nhanh khi hover. |
| **Cảm nhận học viên** | Câu chuyện chuyển ngành từ Xây dựng, Kinh tế sang làm lập trình viên | Thẻ `.testimonial-card` kèm đánh giá 5 sao vàng, trích dẫn thực tế và ảnh đại diện học viên có viền nổi bật. |
| **Form Đăng Ký Tư Vấn (Lead Gen)** | Thu thập họ tên, số điện thoại, email, khóa học, cơ sở | Form Material Design với trường nhập liệu icon prefix (`.md-form`), hiệu ứng focus chuẩn Google, nút submit nổi bật và Popup Modal xác nhận tự động. |
| **Footer** | Thông tin cơ sở tại Hà Nội, Đà Nẵng, TP.HCM, Huế, hotline 098 953 44 58 | Component `.page-footer` màu tối thanh lịch, tích hợp nút mạng xã hội tròn Material và bản quyền. |

---

## 3. Cấu Trúc Thư Mục Trên Branch `codegym-career-landing`

```plaintext
ABCXYZ (Branch: codegym-career-landing)
├── index.html       # Cấu trúc HTML5 semantic hoàn chỉnh theo MDBootstrap 4
├── style.css        # Tùy chỉnh Material Design (Elevation shadows, transitions, gradients, responsive)
├── script.js       # Tương tác giao diện: Navbar cuộn, cuộn trang mượt, modal form, waves effect
└── README.md        # Tài liệu báo cáo phân tích thiết kế UI/UX và hướng dẫn nộp bài
```

---

## 4. Kiểm Thử Trải Nghiệm (Responsive & Accessibility)

* **Thiết bị di động & Tablet**: Hệ thống lưới Bootstrap Grid co giãn mượt mà, menu điều hướng tự động gom vào nút Hamburger, font chữ tự động điều chỉnh tỷ lệ đọc dễ dàng.
* **Tương tác Micro-interactions**:
  - Di chuột vào các thẻ card sẽ kích hoạt hiệu ứng nâng cao (Elevation lift).
  - Nút bấm có hiệu ứng gợn sóng Waves Effect lan tỏa đặc trưng của Material Design.
  - Nút **Floating Action Button** (ở góc dưới cùng bên phải) mượt mà xuất hiện khi cuộn qua 60px để đưa người dùng trở lại đầu trang tức thì.
  - Khi gửi form đăng ký tư vấn, hệ thống tự động kiểm tra dữ liệu và mở **Material Modal** xác nhận thông tin chi tiết.

---

## 5. Hướng Dẫn Xem Trực Tiếp Trên Trình Duyệt

* Mở trực tiếp tệp [`index.html`](file:///c:/Users/dvu56/OneDrive/M%C3%A1y%20t%C3%ADnh/ggggg/index.html) bằng trình duyệt (Google Chrome, Microsoft Edge, Firefox).
* Mọi tài nguyên thư viện CSS/JS đều được liên kết qua mạng CDN tốc độ cao, đảm bảo hiển thị sắc nét 100% mà không cần cài đặt thêm bất kỳ phần mềm nào.
