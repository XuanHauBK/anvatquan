function submitForm() {
    // Get value from input
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    // Create a string of data to write to the file
    const data = `Tên: ${name}\nSố điện thoại: ${phone}\nĐịa chỉ: ${address}\nSản phẩm: ${product}\nSố lượng: ${quantity}\n`;

    // Create a Blob containing data
    const blob = new Blob([data], { type: 'text/plain' });

    // Create a link to download the file
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'data.txt';
    // document.body.appendChild(a);
    // a.click();

    // Remove temporary link
    // document.body.removeChild(a);
    // URL.revokeObjectURL(url);

    // Display a notification to the user
    // alert('Dữ liệu đã được lưu vào file data.txt');
    alert('Tính năng này sẽ được support trong tương lai. Vui lòng đặt đơn qua trang facebook của chúng tôi');
    window.open('https://www.facebook.com/hotgirlno1vn', '_blank');
}

// submitForm();