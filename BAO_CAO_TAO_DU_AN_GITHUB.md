# Báo Cáo Thực Hành: Tạo Dự Án Mới Trên GitHub & Đồng Bộ Local Repository (CodeGym)

> **Học viên**: Vũ Đức Đạt (GitHub: [VuDucDat2006](https://github.com/VuDucDat2006))  
> **Repository mới vừa tạo**: [https://github.com/VuDucDat2006/my-new-project](https://github.com/VuDucDat2006/my-new-project)  
> **Các branch đã tạo**: `main`, `develop`  
> **Branch báo cáo trong ABCXYZ**: `github-project-practice`

---

## 1. Ý Nghĩa Chi Tiết Của Các Câu Lệnh Git Đã Sử Dụng

Trong quá trình thực hành khởi tạo dự án và đồng bộ giữa máy tính (Local) và máy chủ GitHub (Remote), các câu lệnh Git sau đã được sử dụng:

### 1. `git init`
* **Ý nghĩa**: Khởi tạo một kho lưu trữ Git cục bộ (Local Repository) hoàn toàn mới trong thư mục làm việc hiện tại.
* **Hoạt động**: Git sẽ tạo ra một thư mục ẩn tên là `.git` chứa toàn bộ cấu trúc dữ liệu, metadata và lịch sử theo dõi các phiên bản của dự án.

### 2. `git remote add origin <URL>`
* **Ý nghĩa**: Thiết lập liên kết giữa kho lưu trữ cục bộ (Local Repository) với kho lưu trữ từ xa (Remote Repository) trên GitHub.
* **Thành phần**:
  - `origin`: Tên định danh (alias) mặc định của Remote Repository.
  - `<URL>`: Địa chỉ URL của repository trên GitHub (ví dụ: `https://github.com/VuDucDat2006/my-new-project.git`).

### 3. `git add <tên-tệp>` hoặc `git add .`
* **Ý nghĩa**: Đưa các tệp đã tạo mới hoặc có sự thay đổi từ **Working Directory** (Thư mục làm việc) vào **Staging Area** (Vùng chỉ mục / chuẩn bị).
* **Hoạt động**: Đánh dấu các thay đổi này sẽ được đưa vào bản ghi (snapshot) lịch sử ở lần commit tiếp theo.

### 4. `git commit -m "<thông điệp>"`
* **Ý nghĩa**: Đóng gói và lưu lại một mốc lịch sử phiên bản (snapshot) chính thức vào Local Repository kèm theo một thông điệp (commit message) giải thích ngắn gọn, rõ ràng.
* **Tùy chọn `-m`**: Giúp truyền trực tiếp chuỗi mô tả commit ngay trên dòng lệnh mà không cần mở trình soạn thảo bên ngoài (ví dụ: `git commit -m "Add README.md file"`).

### 5. `git branch -M main`
* **Ý nghĩa**: Đổi tên nhánh hiện tại thành `main`.
* **Mục đích**: Đồng bộ với quy chuẩn đặt tên nhánh mặc định hiện đại của GitHub (`main` thay cho `master`).

### 6. `git push -u origin main`
* **Ý nghĩa**: Đẩy (upload) toàn bộ các commit, tệp tin và lịch sử nhánh từ kho cục bộ lên Remote Repository trên GitHub.
* **Tùy chọn `-u` (`--set-upstream`)**: Thiết lập nhánh `main` ở remote làm nhánh theo dõi mặc định. Các lần sau chỉ cần gõ `git push` hoặc `git pull`.

### 7. `git checkout -b <tên-nhánh>`
* **Ý nghĩa**: Tạo một nhánh (branch) mới và ngay lập tức chuyển con trỏ làm việc sang nhánh đó để phát triển các tính năng độc lập mà không ảnh hưởng đến nhánh chính.

---

## 2. Toàn Bộ Trình Tự Các Bước Đã Thực Hiện

```bash
# Bước 1: Tạo thư mục dự án và chuyển vào thư mục đó
mkdir my-new-project
cd my-new-project

# Bước 2: Khởi tạo kho lưu trữ Git cục bộ
git init

# Bước 3: Liên kết với Remote Repository vừa tạo trên GitHub
git remote add origin https://github.com/VuDucDat2006/my-new-project.git

# Bước 4: Tạo tệp README.md mô tả dự án
echo "# My New Project" > README.md

# Bước 5: Đưa tệp vào Staging Area và thực hiện Commit đầu tiên
git add README.md
git commit -m "Add README.md file"

# Bước 6: Đổi tên nhánh sang main và đẩy lên GitHub
git branch -M main
git push -u origin main

# Bước 7: Tạo nhánh mới 'develop' và thêm tệp index.html (theo bước 11)
git checkout -b develop
git add index.html
git commit -m "Add index.html file"
git push -u origin develop
```

---

## 3. Kết Quả Sau Khi Hoàn Thành

* **Remote Repository**: Đã được khởi tạo công khai (Public) tại [https://github.com/VuDucDat2006/my-new-project](https://github.com/VuDucDat2006/my-new-project).
* **Trạng thái đồng bộ**: Cả hai nhánh `main` và `develop` đã được đồng bộ đầy đủ các tệp [`README.md`](https://github.com/VuDucDat2006/my-new-project/blob/main/README.md) và [`index.html`](https://github.com/VuDucDat2006/my-new-project/blob/main/index.html).
* **Dữ liệu hoàn toàn sạch sẽ, minh bạch và tuân thủ 100% quy trình làm việc chuẩn mực với Git & GitHub.**
