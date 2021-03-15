module.exports = function check(str, bracketsConfig) {
	str = str.split('');
	for (let a = 0; a < bracketsConfig.length; a++) {
		 let n = bracketsConfig[a][0];
		 let x = bracketsConfig[a][1];
			  for (let i=0; i < str.length; i++) {
					if (str[i] == n && str[i+1] == x) {
						 str.splice(i, 2);
						 i = -1;
						 a = -1;
					}
			  }
	}
	return !(str.length);
}
