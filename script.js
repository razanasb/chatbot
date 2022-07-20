const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang= "ar";

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (
        text.includes("السلام عليكم ورحمه الله وبركاته")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "وعليكم السلام ورحمة الله وبركاته";
      texts.appendChild(p);
    }
    if (
      text.includes("كيف حالك")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "بخير الحمدلله";
      texts.appendChild(p);
    }
    if (
        text.includes("ما هي الاساليب الذكيه")
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = " مؤسسة تجارية وطنية تأسست عام 2010 م مسجلة لدى وزارة التجارة ومتخصصة في المعدات الآلية والروبوت والذكاء الصناعي وتعتبر المنشأة التجارية الأولى من نوعها بالمملكة العربية السعودية في مجال الروبوت والذكاء الصناعي والتحكم الآلي ومصنفة لدى مجلة فوربس العالمية كأحد أكثر الشركات ابداعا في المملكة العربية السعودية في أخر تصنيف عام 2015 و مصنفة لدى الهيئة السعودية للمنشآت (منشآت) كواحدة من أكثر الشركات ابتكارا في 2021";
        texts.appendChild(p);
      }
}
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
