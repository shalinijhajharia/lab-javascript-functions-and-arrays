// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2)
{
  if(num1>num2){
    return num1
  }
  else if(num2>num1)
  {
    return num2
  }
  else
  {
    return num1
  }
}


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
var longestword=-1;
var value;
function findScaryWord(words)
{
  if(words.length==0)
  {
    return null;
  }
  else if(words.length==1)
  {
    return words[0];
  }
  else if(words[0].length==words[1].length)
  {
    return words[0];
  }
  else
  {
    for (var i=0;i<words.length;i++)
  {
    if(words[i].length>longestword)
    {
      longestword=words[i].length;
      value=words[i];
      
    }
   
  }
  
  }
  
  return value;
 
}

// Progression #3: Net Price

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(prices)
{
  let sum=0;
  for(let i=0;i<prices.length;i++)
  {
    sum=sum+prices[i];
  }
  return sum;
}





function add(prices)
{
  let sum=0;
  for(let i=0;i<prices.length;i++)
  {
    if(typeof(prices[i])==="number")
    {
      sum=sum+prices[i];
    }
    else if(typeof(prices[i])==="string")
    {
      sum=sum+prices[i].length;
    }
    else if((prices[i])===true)
    {
      sum=sum+1;
    }
    else if(prices[i]===false)
    {
      sum=sum+0;
    }
    else{
      throw new Error("Unsupported data type sir or ma'am");
    }
    
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function  midPointOfLevels(arr)
{
  var sum=netPrice(arr);
  if(arr.length===0)
  {
    return null;
  }
  else{
    var average=sum/arr.length;
    return average;
  }
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr)
{
  if(arr.length===0)
  {
    return null;
  }
  else
  {
    var sum=0;
    for(let i=0;i<arr.length;i++)
    {
      sum=sum+arr[i].length;
    }
    var average=sum/arr.length;
  return average;
  }
}

//progression 4.3
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(arr)
{

  if(arr.length===0)
  {
    return null;
  }
  else
  {
    var sum=0;

    for(let i=0;i<arr.length;i++)
    {
      if(typeof(arr[i])==="number")
      {
        sum=sum+arr[i];
      }
      else if(typeof(arr[i])==="string")
      {
        sum=sum+arr[i].length;
      }
      else if((arr[i])===true)
      {
        sum=sum+1;
      }
      else if(arr[i]===false)
      {
        sum=sum+0;
      }
      else{
        throw new Error("Unsupported data type sir or ma'am");
      }

    }
    var average=sum/arr.length;
    average=parseFloat(average.toFixed(2));
    return average;
    
  }
  
}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(arr)
{
  if(arr.length===0)
  {
    return null;
  }
  else{
    for(let i=0;i<arr.length;i++)
    {
      for(let j=i+1;j<arr.length;j++)
      {
        if(arr[i]===arr[j])
        {
          arr.splice(j,j);
        }
      }
    }
    return arr;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr,word)
{

  if(arr.length===0)
  {
    return null;
  }
else{
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]===word)
      {
        return true;
      }
  }
  return false;
}

}



// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arr,word)
{
  let Count=0;
  if(arr.length===0)
  {
    return 0;
  }
else{
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]===word)
      {
        Count=Count+1;
      }
  }
  return Count;
}
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix)
{
  let sum=0;
  for(let i=0;i<matrix.length;i++)
  {
    for(let j=0;j<matrix[i].length;j++)
    {
      let mmatrix=matrix[i];
      sum=sum+mmatrix[j];
    }
  }
  let len=matrix.length*matrix.length;
  if(sum==len)
  {
    return 1;
  }
  else if(sum==len*2)
  {
    return 0;
  }
}