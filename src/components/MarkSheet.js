import React, { useRef } from 'react'

function MarkSheet() {
     
  let NameInputRef =useRef();
  let RollInputRef =useRef();
  let telInputRef =useRef();
  let engInputRef =useRef();
  let hinInputRef =useRef();
  let sciInputRef =useRef();
  let socInputRef =useRef();
  let matInputRef =useRef();

  let telSpanRef =useRef();
  let engSpanRef =useRef();
  let hinSpanRef =useRef();
  let matSpanRef =useRef();
  let sciSpanRef =useRef();
  let socSpanRef =useRef();
  let resSpanRef =useRef();
  

  return (
    <div>
     <form>
      <div>
       <label>Name</label>
       <input ref={NameInputRef} onFocus={()=>{NameInputRef.current.style.backgroundColor="blue"}}
       onBlur={()=>{NameInputRef.current.style.backgroundColor=""}}></input>
       <span></span>
      </div>
      <div>
       <label>Roll number</label>
       <input ref={RollInputRef} onFocus={()=>{RollInputRef.current.style.backgroundColor="blue"}}
       onBlur={()=>{RollInputRef.current.style.backgroundColor=""}}></input>
       <span></span>
      </div>
      <div>
       <label>telugu</label>
       <input ref={telInputRef}
       onChange={()=>{
        if
       (telInputRef.current.value>=35){
        telSpanRef.current.innerHTML="pass";
       telSpanRef.current.style.backgroundColor="green"; }  
       else{telSpanRef.current.innerHTML="fail";
        telSpanRef.current.style.backgroundColor="red";
       }     
       }  
    }
    onFocus={()=>{
      telInputRef.current.style.backgroundColor= "blue";
    }}
    onBlur={()=>{telInputRef.current.style.backgroundColor="";}}
       ></input>
       <span ref={telSpanRef}></span>
      </div>
      <div>
       <label>English</label>
       <input ref={engInputRef}onChange={()=>{
        if(engInputRef.current.value>=35){
          engSpanRef.current.innerHTML="pass";
          engSpanRef.current.style.backgroundColor="green"
        }else{
          engSpanRef.current.innerHTML="fail";
          engSpanRef.current.style.backgroundColor="red"
        }
        }
       }onBlur={()=>{engInputRef.current.style.backgroundColor=""}} onFocus={()=>{engInputRef.current.style.backgroundColor="blue"}}></input>
       <span ref={engSpanRef}></span>
      </div><div>
       <label>Hindi</label>
       <input ref={hinInputRef} onChange={()=>{
        if(hinInputRef.current.value>=35){
          hinSpanRef.current.innerHTML="pass";
          hinSpanRef.current.style.backgroundColor="green"
        }
        else{hinSpanRef.current.innerHTML="fail"
         hinSpanRef.current.style.backgroundColor="red"
        }}} onFocus={()=>{hinInputRef.current.style.backgroundColor="blue"}} onBlur={()=>{hinInputRef.current.style.backgroundColor=""}}></input>
       <span ref={hinSpanRef}></span>
      </div><div>
       <label>science</label>
       <input ref={sciInputRef} onChange={()=>{
        if(sciInputRef.current.value>=35){
          sciSpanRef.current.innerHTML="pass";
          sciSpanRef.current.style.backgroundColor="green"
        }
        else{sciSpanRef.current.innerHTML="fail"
         sciSpanRef.current.style.backgroundColor="red"}}}
 onFocus={()=>{sciInputRef.current.style.backgroundColor="blue"}}
 onBlur={()=>{sciInputRef.current.style.backgroundColor=""}}
       ></input>
       <span ref={sciSpanRef}></span>
      </div><div>
       <label>Social</label>
       <input ref={socInputRef} onChange={()=>{
        if(socInputRef.current.value>=35){
         socSpanRef.current.innerHTML="pass";
          socSpanRef.current.style.backgroundColor="green"
        }
        else{socSpanRef.current.innerHTML="fail"
        socSpanRef.current.style.backgroundColor="red"}}} 
 onFocus={()=>{socInputRef.current.style.backgroundColor="blue"}} 
    onBlur={()=>{socInputRef.current.style.backgroundColor=""}}></input>
       <span ref={socSpanRef}></span>
      </div><div>
       <label>Maths</label>
       <input ref={matInputRef} onChange={()=>{
        if(matInputRef.current.value>=35){
          matSpanRef.current.innerHTML="pass";
          matSpanRef.current.style.backgroundColor="green"
        }
        else{matSpanRef.current.innerHTML="fail"
         matSpanRef.current.style.backgroundColor="red"}}}    onFocus={()=>{matInputRef.current.style.backgroundColor="blue"}} 
         onBlur={()=>{matInputRef.current.style.backgroundColor=""}}></input>
       <span ref={matSpanRef}></span>
      </div>
      <div>
        <button type='button'onClick={()=>{
          let Name =NameInputRef.current.value;
         
          let telMarks =Number(telInputRef.current.value);
          let engMarks=Number(engInputRef.current.value);
          let hinmarks=Number(hinInputRef.current.value);
          let sciMarks=Number(sciInputRef.current.value);
          let socMarks=Number(socInputRef.current.value);
          let matMarks=Number(matInputRef.current.value);
          
          let totalmarks=telMarks+engMarks+hinmarks+matMarks+sciMarks+socMarks;
          let per=totalmarks/6;
          alert(`${Name} got ${totalmarks} with ${per}%`);
          resSpanRef.current.innerHTML=(`${Name} got ${totalmarks} with ${per}%`)

        }}>click here</button>
      </div>
      <p ref={resSpanRef}>results</p>
     </form>
    </div>
  )
}

export default MarkSheet