let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
  let fname = document.getElementById('interviewName').value;
  let lname = document.getElementById('condidateName').value;
  let results = document.getElementById('results').value;
  let date = document.getElementById('interviewDate').value;
  let feedback = document.getElementById('feedback').value;
  let p = document.getElementById('p');
  
  let data = {
    'interview_name':fname,
    'condidate_name':lname,
    'results':results,
    'date':date,
    'feedback':feedback
  }
  localStorage.setItem('res',JSON.stringify(data));
  let result = JSON.parse(localStorage.getItem('res'));
  console.log(result);
 p.innerHTML = JSON.stringify(result);

})
