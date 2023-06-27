// Good Luck 💪🏾
function ZeroAndOne(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      var element = arr[i];
  
      if (element === 'Zero') {
        result.push(0);
      } else if (element === 'One') {
        result.push(1);
      }
    }
  
    return result;
  }
  
  var array1 = ['one', 'Zero', 'Zero', 'One'];
  var array2 = ['Zero', 'ONE', 'one', 'Zero'];
  
  console.log(ZeroAndOne(array1));
  console.log(ZeroAndOne(array2)); 