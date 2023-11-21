function firstWord(s) {
  // your code here
	let res=[];
	if(s==='') return '';
	const str=s.split(' ');
	if(str[0]===''){
    return str[1];
  }else{
	return str[0];
  }
}






// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
