//Bai 01: MinShop-v1

/**
 * hàm trả về  sách có giá cao nhất
 * @param {Array} mangSach mang can thao tac
 * @returns sach co gia cao nhat
 */
let giaSachCaoNhat = function(mangSach) {
    let caoNhat = mangSach[0];
    for (let i = 0; i < mangSach.length; i++) {
        if (mangSach[i].giaBan > caoNhat.giaBan) {
            caoNhat = mangSach[i];
        }
    }
    return caoNhat;
}

/**
 * hàm trả về sách có giá thấp nhất
 * @param {Array} mangSach mang can thao tac
 * @returns sach co gia thap nhat
 */
let giaSachThapNhat = function(mangSach) {
    let thapNhat = mangSach[0];
    for (let i = 0; i < mangSach.length; i++) {
        if (mangSach[i].giaBan < thapNhat.giaBan) {
            thapNhat = mangSach[i];
        }
    }
    return thapNhat;
}

/**
 * Hàm tìm sách trong khoảng giá
 * @param {Number} giaTu gia bat dau
 * @param {Number} denGia gia ket thuc
 * @param {Array} mangSach mang can thao tac
 * @returns mang sach co gia trong khoang tim kiem
 */
let timSachTrongKhoangGia = function(giaTu, denGia, mangSach) {
    let sachYeuCau = new Array();
    let a = 0;
    for (let i = 0; i < mangSach.length; i++) {
        if (mangSach[i].giaBan > giaTu && mangSach[i].giaBan < denGia) {
            sachYeuCau[a] = mangSach[i];
            a++;
        }
    }
    return sachYeuCau;
}

/**
 * hàm lấy danh sách có tên giống với từ khóa cho trước
 * @param {string} ten ki tu can tim
 * @param {Array} mangSach mang can tim
 * @returns mang co ten giong voi ki tu can tim (ten)
 */
let timSach = function(ten, mangSach) {
    let mangTimTen = new Array();
    let a = 0;
    for (let i = 0; i < mangSach.length; i++) {
        if (mangSach[i].tenSach == ten) {
            mangTimTen[a] = mangSach[i];
            a++
        }
    }
    return mangTimTen;
}

/**
 * hàm sắp sếp tên với thứ tự tăng dần
 * @param {Array} mangSach mang can thao tac
 * @returns mang sach duoc sap xep tang dan
 */
let sapXepSachTangDan = function(mangSach) {
    let mangSapXep = new Array();
    let a = 0;
    for (let i = 0; i < mangSach.length - 1; i++) {
        for (let j = i + 1; j < mangSach.length; j++) {
            if (mangSach[i].tenSach > mangSach[j].tenSach) {
                a = mangSach[i];
                mangSach[i] = mangSach[j];
                mangSach[j] = a;
            }
        }
    }
    return mangSach;
}
let mangSach = new Object();
let sach1 = {
    maSach: "s01",
    tenSach: "Nghi giau lam giau",
    giaBan: 120000
}
let sach2 = {
    maSach: "s02",
    tenSach: "Cha giau cha ngheo",
    giaBan: 150000
}
let sach3 = {
    maSach: "s03",
    tenSach: "Cafe cung Tony",
    giaBan: 170000
}
let sach4 = {
    maSach: "s04",
    tenSach: "Cach mang mot cong rom",
    giaBan: 160000
}
let sach5 = {
    maSach: "s05",
    tenSach: "Tieng Viet lop 3",
    giaBan: 70000
}



function minShop() {
    let sachGiaThap = giaSachThapNhat(mangSach);
    let sachGiaCao = giaSachCaoNhat(mangSach);
    let sachDatYeuCau = new Array();

    console.log("Danh sách các loại sách được bán tại MinShop!");
    for (let i = 0; i < mangSach.length; i++) {
        console.log(mangSach[i]);
    }
    //Tim sach
    let ten = prompt("Nhap ten sach ban muon tim: ");
    let mangSachTimTheoTen = timSach(ten, mangSach);
    console.log("Sach tim duoc theo ten: ", mangSachTimTheoTen);

    //Sap xep sach theo thu tu tang dan
    console.log("Sap xep tang dan")
    console.log(sapXepSachTangDan(mangSach));

    // Tim sach trong khoang gia
    let gia1 = Number(prompt("Tìm sách có giá từ: "));
    let gia2 = Number(prompt("Đến sách có giá : "));
    for (let i = 0; i < mangSach.length; i++) {
        if (gia1 < sachGiaThap.giaBan || gia2 > sachGiaCao.giaBan) {
            console.log("Yêu cầu của bạn nằm ngoài giá trị của danh sách!");
        } else {
            sachDatYeuCau = timSachTrongKhoangGia(gia1, gia2, mangSach);
            console.log(sachDatYeuCau);
        }
    }

    //Tra ve id sach co gia ban cao nhat
    console.log("ID sách có giá cao nhất là: ", sachGiaCao.maSach);
}

//MinShopv2
let don1 = {
    maDon: "dh1",
    tenKH: "Nguyen Van A",
    diaChi: {
        soNha: "so1",
        duong: "de tham",
        phuong: "cau ong lanh",
        quan: "quan 1"
    },
    gioSach: ["s03"]
}
let don2 = {
    maDon: "dh2",
    tenKH: "Thai Thi Bich",
    diaChi: {
        soNha: "so2",
        duong: "duong so 2",
        phuong: "cau sap",
        quan: "quan cam"
    },
    gioSach: ["s02", "s04"]
}
let don3 = {
    maDon: "dh3",
    tenKH: "Luu Thai Dau",
    diaChi: {
        soNha: "so3",
        duong: "duong doc dap",
        phuong: "pham ngu lao",
        quan: "quan 1",
    },
    gioSach: ["s01", "s02", "s05"]
};
//Mang other luu danh sach don hang
let other = [don1, don2, don3];
//sach.maSach
mangSach = [sach1, sach2, sach3, sach4, sach5];

//liet ke cac don hang co tham so x
let lietKeDonHang = function(gioHang) {
        for (let i = 0; i < other.length; i++) {
            if (other[i].gioSach.length >= gioHang) {
                console.log("Don hang ", other[i].maDon, "co ", other[i].gioSach.length, "sach");
            }
        }
    }
    //tinh tong so luong sach da ban
let tongSachBan = function() {
    let tong = 0;
    for (let i = 0; i < other.length; i++) {
        tong += other[i].gioSach.length;
    }
    return tong;
}
let sachDaBan = tongSachBan();
console.log("Tong sach da ban", sachDaBan);
//tinh tong doanh thu
let tongDoanhThu = function() {
    let doanhThu = 0;
    for (let i = 0; i < other.length; i++) {
        for (let j = 0; j < other[i].gioSach.length; j++) {
            for (let k = 0; k < mangSach.length; k++) {
                if ((other[i].gioSach[j]) == mangSach[k].maSach) {
                    doanhThu += mangSach[k].giaBan;
                }
            }
        }
    }
    return doanhThu;
}
let tongTien = tongDoanhThu();
console.log("Tong tien thu duoc: ", tongTien);
// minShop();