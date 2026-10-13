# Bài Tập Thực Hành: Phối Màu Đơn Tông Trên Trang Web (CodeGym)

> **Mục tiêu**: Luyện tập sử dụng phối màu đơn tông (Monochromatic Color Palette) trên trang web, xác định màu chủ đạo và các cấp độ màu nhạt dần, kết hợp hài hòa với màu đen và trắng.

---

## 1. Bảng Phối Màu Đơn Tông Chính (Bước 1 - Bước 7: Tông Xanh Dương `#00ADEE`)

| Cấp độ màu | Mã HEX | Vị trí áp dụng trên website | Vai trò & Tác dụng thị giác |
| :--- | :---: | :--- | :--- |
| **Bậc 1** (Chính) | `#00ADEE` | Nút **Add to Cart**, nhãn **ON SALE**, nhãn **PREVIEW**, nút play tròn (`.circle`), icon, liên kết nav | **Màu chủ đạo (Primary)** lấy từ xanh logo; tạo điểm nhấn thị giác rõ ràng |
| **Bậc 2** | `#00B2EF` | Trạng thái `:hover` của nút bấm, viền và liên kết | Màu nhấn cấp phụ, phản hồi tương tác người dùng mượt mà |
| **Bậc 3** | `#00B8F0` | Tông màu trung gian kết nối | Chuyển tiếp màu sắc tự nhiên |
| **Bậc 4** | `#00BFF2` | **Màu nền phần Banner** (`#banner`) | **Bước 2**: Màu nền nổi bật, kết hợp màu chữ đen (`#000000`) tương phản sắc nét |
| **Bậc 5** | `#2DCBF5` | Tông sáng chuyển tiếp | Giảm dần độ đậm của màu chủ đạo |
| **Bậc 6** | `#5CD4F6` | Tông sáng chuyển tiếp | Tạo độ chuyển màu mịn màng |
| **Bậc 7** | `#8DD7F7` | **Màu nền phần nội dung Preview** (`#main .preview li a`) | **Bước 4**: Thay thế cho màu nền hồng cũ (`#fac7d2`), chữ giữ màu đen dễ đọc |
| **Bậc 8** | `#ACE2F9` | Tông pastel chuyển tiếp | Đệm màu dịu nhẹ |
| **Bậc 9** | `#C6E9FA` | **Màu nền phần Info & Footer** (`#info`, `footer`) | **Bước 5**: Tạo độ sáng sủa, tinh tế và đồng bộ phong cách tối giản |
| **Màu chữ** | `#000000` | Toàn bộ chữ trên trang web | **Bước 6**: Giữ màu đen để bảo đảm độ tương phản tối ưu (WCAG) |

---

## 2. Bảng Phối Màu Đơn Tông Mở Rộng (Bước 8: Tông Tím Quý Tộc `#8D0888` từ Adobe Color)

Thực hiện yêu cầu **Bước 8**: *"Hãy sử dụng bảng màu để tạo ra danh sách màu đơn tông khác, và thực hiện phối màu như trên để tạo ra được một trang web khác với màu sắc khác."*

Trang web thứ hai được xây dựng tại file [`theme-variant.html`](./theme-variant.html) và [`style-variant.css`](./style-variant.css) dựa trên chủ đề Adobe Color:

| Cấp độ | Mã HEX | Vị trí áp dụng |
| :--- | :---: | :--- |
| **Bậc 1** | `#8D0888` | Màu chủ đạo (Nút Add to Cart, badge ON SALE, PREVIEW badge, link hover) |
| **Bậc 2** | `#9F149A` | Màu hover, điểm nhấn phụ |
| **Bậc 4** | `#C642C1` | Nền banner (`#banner`), chữ màu đen |
| **Bậc 7** | `#EBB3E8` | Nền thẻ nội dung Preview (chữ màu đen) |
| **Bậc 9** | `#FAE8F9` | Nền Newsletter/Info và Footer |
| **Màu chữ** | `#000000` | Giữ nguyên chữ màu đen cho toàn bộ trang |

---

## 3. Cấu Trúc Dự Án

```plaintext
ggggg/
├── index.html              # Trang chính hoàn thành Bước 1-7, tích hợp thanh đổi theme & tra cứu
├── style.css               # File CSS chính với biến CSS cho bảng màu đơn tông
├── theme-variant.html      # Trang thứ 2 hoàn thành theo Bước 8 (Theme Tím Adobe Color)
├── style-variant.css       # File CSS độc lập cho trang biến thể Bước 8
├── fonts/                  # Phông chữ gốc (pacifico.woff, ptsans.woff)
├── images/                 # Tài nguyên hình ảnh, biểu tượng & đĩa nhạc
│   ├── logo-blue.png       # Logo tông xanh (#00ADEE) theo Bước 1
│   ├── logo.png            # Logo hiển thị
│   ├── disc-cover.png      # Bìa đĩa CD hiệu ứng 3D lật thẻ
│   └── ...
├── AdobeColor-My Color Theme.jpeg # Bảng màu tham khảo Adobe Color
└── README.md               # Tài liệu hướng dẫn & giải trình bài thực hành
```

---

## 4. Các Tính Năng Nổi Bật Đã Cài Đặt

1. **Tuân thủ 100% từng bước thực hành**:
   - Bước 1: Màu xanh logo `#00ADEE` làm màu bậc 1.
   - Bước 2: Màu nền banner đổi sang bậc 4 `#00BFF2`, chữ màu đen.
   - Bước 3: Nền ON SALE và PREVIEW đổi sang bậc 1 `#00ADEE`.
   - Bước 4: Nền hồng đổi sang bậc 7 `#8DD7F7`, chữ màu đen.
   - Bước 5: Nền footer/info đổi sang bậc 9 `#C6E9FA` tạo độ sáng.
   - Bước 6: Giữ nguyên màu chữ toàn bộ trang là màu đen.
   - Bước 7: Kiểm thử hiển thị hoàn chỉnh trên trình duyệt.
   - Bước 8: Tạo trang web riêng biệt `theme-variant.html` với bảng màu đơn tông mới.
2. **Thanh công cụ trực quan (Palette Toolbar)**:
   - Cho phép giáo viên / người chấm chuyển đổi xem trực tiếp các tông màu (Xanh dương, Tím Adobe Color, Xanh ngọc lục bảo).
   - Nút **"📋 Bảng Tra Cứu Bậc Màu"** mở hộp thoại popup liệt kê chi tiết từng mã màu HEX và vị trí tương ứng.
3. **Hiệu ứng mượt mà & Responsive**:
   - Giữ nguyên hiệu ứng xoay lật 3D bìa đĩa CD (`.trans .cover`).
   - Tương thích tốt trên cả máy tính lẫn thiết bị di động.

---

## 5. Hướng Dẫn Xem & Nộp Bài

- **Xem trực tiếp trên máy tính**: Nhấp đúp chuột mở file `index.html` hoặc `theme-variant.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox).
- **Mã nguồn đã sẵn sàng**: Có thể đẩy thẳng lên GitHub repository `https://github.com/VuDucDat2006/ABCXYZ.git`.
