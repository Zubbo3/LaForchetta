function search() {
    var textinput = (document.getElementById('search-input').value);
    var dayinput = document.getElementById('sdate').value;
    var timeinput = document.getElementById('time').value;
    var numinput = document.getElementById('pers').value;
    var search = {text: textinput, day: dayinput, time: timeinput, num: numinput};
    var searchJSON = JSON.stringify(search);
    sessionStorage.setItem('search', searchJSON);
    location.href = 'RestaurantPage.html';
}
