function ajax(src, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let cont = JSON.parse(xhr.responseText); // 將字串換成json物件
                callback(cont); // 將json物件當作參數丟進callfuntion中(此程式中為下方所寫的render(data))
            }
        }
    }
    xhr.open("GET",src);
    xhr.send();
}

function render(data) {
    for (let i = 0; i < data.length; i++) {
        // DOM
        let content = document.createElement('div');
        content.className = 'item';
        let name = document.createElement('h2');
        name.innerHTML = '名稱: ' + data[i]['name'];
        let price = document.createElement('h2');
        price.innerHTML = '價錢: ' + data[i]['price'] + ' 元';
        let description = document.createElement('h3');
        description.innerHTML = '詳細: ' + data[i]['description'];
        content.appendChild(name);
        content.appendChild(price);
        content.appendChild(description);
        document.querySelector('.put_here').appendChild(content);
    }
}

// arrow function用法
// ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data", (data) => {
//     render(data);
// });

ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data", function(data) {
    render(data);
});