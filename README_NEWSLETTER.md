# Báo Cáo Thực Hành: Xây Dựng Khung Newsletter Bằng Bootstrap & Phối Màu Với Adobe Color

> **Học viên**: Vũ Đức Đạt (GitHub: [VuDucDat2006](https://github.com/VuDucDat2006))  
> **Repository GitHub nộp bài**: [https://github.com/VuDucDat2006/bootstrap-newsletter-colors](https://github.com/VuDucDat2006/bootstrap-newsletter-colors)  
> **Link Trực Tiếp (GitHub Pages Live Demo)**: [https://vuducdat2006.github.io/bootstrap-newsletter-colors/](https://vuducdat2006.github.io/bootstrap-newsletter-colors/)  
> **Công nghệ sử dụng**: HTML5, CSS3 Custom Properties (CSS Variables), Bootstrap v5.3.3, Adobe Color Wheel, Google Fonts (Plus Jakarta Sans).

---

## 1. Tổng Quan Bài Thực Hành

Bài tập yêu cầu xây dựng cấu trúc bản tin điện tử (**Newsletter**) chuẩn responsive với framework **Bootstrap 5**, sau đó ứng dụng lý thuyết phối màu hiện đại thông qua công cụ **Adobe Color** để tạo ra **2 phiên bản Newsletter hoàn chỉnh với 2 bộ màu sắc khác biệt**.

### Cấu Trúc Khung Newsletter (Bootstrap 5)
- **Header**: Logo nhận diện, huy hiệu số phát hành (Badge), tiêu đề chính `<h1>`, và lời dẫn nhập.
- **Intro / Hero Card**: Khối giới thiệu tiêu điểm với tiêu đề `<h2>`, văn bản mô tả và nút kêu gọi hành động CTA `.btn-primary-custom`.
- **Khối Tính Năng Nổi Bật (2 cột - Grid System)**:
  - Cột 1: Áp dụng lớp `.secondary-bg` với màu thứ cấp.
  - Cột 2: Áp dụng lớp `.accent-bg` với màu điểm nhấn.
- **Khối Đăng Ký Bản Tin (Interactive Subscribe Section)**: Form nhập email và nút đăng ký nhận tin `.btn-accent-custom`.
- **Footer**: Bản quyền tác giả, các icon mạng xã hội, liên kết Hủy đăng ký (Unsubscribe) và Chính sách bảo mật.
- **Thanh Điều Hướng (Version Switcher)**: Cho phép chuyển đổi xem trực tiếp giữa Phiên bản 1 và Phiên bản 2, cùng Modal tra cứu nhanh các thông số màu HEX/RGB.

---

## 2. Bảng Phối Màu Lần 1: Trello Oceanic Productivity (Phiên Bản 1)

* **Cảm hứng & Ngữ cảnh**: Lấy cảm hứng từ giao diện và logo của **Trello / Atlassian** ([https://trello.com](https://trello.com)) – thương hiệu quản lý công việc và năng suất hàng đầu thế giới.
* **Quy tắc phối màu trên Adobe Color**: **Tương đồng & Bổ túc (Analogous & Complementary)** kết hợp màu xanh dương nhận diện với xanh ngọc và điểm nhấn xanh lá cây tươi.
* **Tác động tâm lý**: Mang lại cảm giác tin cậy, sự rõ ràng, tính chuyên nghiệp, giúp người dùng tập trung cao độ khi làm việc.

### Bảng Mã Màu Chi Tiết (Phiên Bản 1 - `style1.css`)

| Thành phần CSS | Mã HEX | RGB | Tác dụng & Vị trí hiển thị | Tỷ lệ tương phản WCAG |
| :--- | :---: | :---: | :--- | :---: |
| `--primary-color` | `#0079BF` | `rgb(0, 121, 191)` | Màu chủ đạo Trello: Header banner, tiêu đề `.text-primary-color`, nút `.btn-primary-custom` | Tương phản **4.8:1** trên nền trắng |
| `--darker-primary-color` | `#055A8C` | `rgb(5, 90, 140)` | Màu hover khi tương tác vào nút chính | Đậm hơn 20% tạo chiều sâu |
| `--secondary-color` | `#00C2E0` | `rgb(0, 194, 224)` | Màu thứ cấp: Nền thẻ Tính năng 1 (`.secondary-bg`), icon công nghệ | Năng động, tươi trẻ |
| `--secondary-dark-color` | `#0098B0` | `rgb(0, 152, 176)` | Đổ bóng gradient cho thẻ tính năng thứ cấp | Tăng độ sắc nét |
| `--accent-color` | `#5AAC44` | `rgb(90, 172, 68)` | Điểm nhấn CTA: Nền thẻ Tính năng 2 (`.accent-bg`), nút Đăng ký | Nổi bật hành động thành công |
| `--accent-dark-color` | `#49852E` | `rgb(73, 133, 46)` | Màu hover cho nút CTA Đăng Ký | Tạo phản hồi xúc giác thị giác |
| `--light-bg-color` | `#F4F5F7` | `rgb(244, 245, 247)` | Nền toàn bộ trang web (Light Neutral Background) | Giảm mỏi mắt so với nền trắng chói |
| `--text-color` | `#172B4D` | `rgb(23, 43, 77)` | Màu chữ chính (Navy Charcoal) | **11.5:1 (Chuẩn AAA)** trên nền trắng |

---

## 3. Bảng Phối Màu Lần 2: Warm Sunset & Coral Inspiration (Phiên Bản 2)

* **Cảm hứng & Ngữ cảnh**: Xây dựng cho bản tin nghệ thuật, thiết kế sáng tạo **Creative Spark Studio**.
* **Quy tắc phối màu trên Adobe Color**: **Bộ ba tương phản ấm (Triad / Warm Contrast)** kết hợp tông cam san hô nhiệt huyết, vàng cam hổ phách và xanh ngọc bích đối trọng.
* **Tác động tâm lý**: Kích thích trí tưởng tượng, mang năng lượng ấm áp, thôi thúc hành động và tạo cảm xúc thân thiện, hào hứng.

### Bảng Mã Màu Chi Tiết (Phiên Bản 2 - `style2.css`)

| Thành phần CSS | Mã HEX | RGB | Tác dụng & Vị trí hiển thị | Tỷ lệ tương phản WCAG |
| :--- | :---: | :---: | :--- | :---: |
| `--primary-color` | `#E05638` | `rgb(224, 86, 56)` | Cam san hô rực rỡ: Header, tiêu đề chính, nút `.btn-primary-custom` | Thu hút ánh nhìn ngay từ giây đầu |
| `--darker-primary-color` | `#C43D20` | `rgb(196, 61, 32)` | Màu hover khi rê chuột vào nút chính | Tạo độ lún và chiều sâu tương tác |
| `--secondary-color` | `#FFB049` | `rgb(255, 176, 73)` | Vàng cam hổ phách: Nền thẻ Tính năng 1 (`.secondary-bg`) | Ấm áp, tích cực (Chữ đen `#2B1D19`) |
| `--accent-color` | `#2E7D5B` | `rgb(46, 125, 91)` | Xanh ngọc bích: Nền thẻ Tính năng 2 (`.accent-bg`), nút Nhận Ebook | Cân bằng lại sắc nóng của tông cam |
| `--accent-dark-color` | `#1E5C41` | `rgb(30, 92, 65)` | Màu hover nút Tải Ebook CTA | Tương phản sắc nét |
| `--light-bg-color` | `#FFF8F5` | `rgb(255, 248, 245)` | Nền kem đào ấm dịu (Warm Cream Background) | Tạo bầu không khí thư thái |
| `--text-color` | `#2B1D19` | `rgb(43, 29, 25)` | Nâu đen cà phê đậm (Espresso Charcoal) | **13.2:1 (Chuẩn AAA)** trên nền trắng |

---

## 4. So Sánh Hai Phiên Bản

| Tiêu chí | Phiên Bản 1: Trello Oceanic Blue | Phiên Bản 2: Warm Sunset Coral |
| :--- | :--- | :--- |
| **Tệp giao diện** | [`index.html`](./index.html) / [`newsletter_version1.html`](./newsletter_version1.html) | [`newsletter_version2.html`](./newsletter_version2.html) |
| **Tệp stylesheet** | [`style1.css`](./style1.css) | [`style2.css`](./style2.css) |
| **Tông màu chủ đạo** | Lạnh - Trung tính (Cool & Crisp) | Nóng - Ấm áp (Warm & Energetic) |
| **Cảm xúc mang lại** | Yên bình, tập trung, tin tưởng, logic | Hào hứng, sáng tạo, cảm xúc, nhiệt huyết |
| **Ngữ cảnh phù hợp** | Phần mềm SaaS, quản lý dự án, công nghệ | Studio sáng tạo, ẩm thực, nghệ thuật, du lịch |
| **Điểm nhấn tương phản** | Xanh ngọc `#00C2E0` & Xanh lá `#5AAC44` | Vàng hổ phách `#FFB049` & Ngọc bích `#2E7D5B` |

---

## 5. Cấu Trúc Mã Nguồn Trong Repository

```plaintext
bootstrap-newsletter-colors/
├── index.html                  # Giao diện Phiên bản 1 (Trello Oceanic Theme)
├── newsletter_version1.html    # Bản sao Phiên bản 1 (Tên theo gợi ý bài tập)
├── newsletter_version2.html    # Giao diện Phiên bản 2 (Warm Sunset Coral Theme)
├── style1.css                  # Toàn bộ biến màu CSS & định dạng cho Phiên bản 1
├── style2.css                  # Toàn bộ biến màu CSS & định dạng cho Phiên bản 2
└── README.md                   # Báo cáo chi tiết, phân tích phối màu & link nộp bài
```

---

## 6. Hướng Dẫn Xem Trực Tiếp & Kiểm Thử

1. **Xem trực tiếp trên GitHub Pages:**
   - [https://vuducdat2006.github.io/bootstrap-newsletter-colors/](https://vuducdat2006.github.io/bootstrap-newsletter-colors/)
2. **Xem trên máy tính (Offline):**
   - Mở trực tiếp tệp `index.html` hoặc `newsletter_version2.html` bằng trình duyệt web (Google Chrome, Microsoft Edge, Mozilla Firefox).
   - Trên đầu mỗi trang có sẵn **Thanh chuyển đổi phiên bản** giúp bạn bấm qua lại giữa 2 phiên bản chỉ bằng 1 cú nhấp chuột.
   - Bấm nút **"Tra Cứu Mã Màu"** để xem hộp thoại Popup hiển thị mã màu HEX và RGB thực tế.
3. **Kiểm tra Responsive:**
   - Nhấn phím `F12` trên trình duyệt để mở Developer Tools.
   - Chọn chế độ hiển thị trên Điện thoại (Mobile) hoặc Máy tính bảng (Tablet) để quan sát lưới Bootstrap tự động co giãn linh hoạt.
4. **Link nộp bài GitHub:**
   - Repository: [https://github.com/VuDucDat2006/bootstrap-newsletter-colors](https://github.com/VuDucDat2006/bootstrap-newsletter-colors)
