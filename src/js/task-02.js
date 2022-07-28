const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ul = document.querySelector('#ingredients');
  
  
  const newArray = ingredients.map(element => {
  const ingredientRef  = document.createElement('li')
   ingredientRef.textContent = element;
   return ingredientRef
});

ul.append(...newArray)




 
