var id = 0;
var data = [];

function saveText() {
  var inputText = document.getElementById("todoItem").value; // 입력된 텍스트 가져오기
  var object = {
    id: id,
    text: inputText,
    complete: false
  };
  data.push(object)
  localStorage.setItem("TextObject", JSON.stringify(data)); // 로컬 스토리지에 텍스트 저장
  id++; // ID 증가

  var newNode = document.createElement("div");
  var textNode = document.createTextNode(inputText);
  newNode.appendChild(textNode)
  newNode.setAttribute('data-id', id)
  newNode.setAttribute('onclick', '')
  newNode.classList.add("todo")

  document.getElementById("todo_list").appendChild(newNode)
  newNode.addEventListener('click', function() {
    newNode.remove()
  });
}