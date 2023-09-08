function changeBtn() {
    // ①id「p1」の要素を取得
    let p1 = document.querySelector('#p1');
    // ②取得したp1に「display:none」が無かったら、「display:none」を付与する。
    // 取得したp1に「display:none」があったら、「display:block」を付与する。
    if (p1.style.display === 'block') {
        p1.style.display = 'none';
    }else{
        p1.style.display = 'block';
    }
}