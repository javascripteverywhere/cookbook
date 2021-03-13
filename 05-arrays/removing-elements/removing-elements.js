function nonDestructiveRemove() {
  const animals = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
  console.log(animals);

  // Find where the 'walrus' item is
  const walrusIndex = animals.indexOf('walrus');
  
  // Join the portion before 'walrus' to the portion after 'walrus'
  const animalsSliced = [...animals.slice(0, walrusIndex), ...animals.slice(walrusIndex+1)];
  
  // now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']
  console.log(animalsSliced);
}

function inPlaceRemove() {
   const animals = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];

   // Find where the 'walrus' item is
   const walrusIndex = animals.indexOf('walrus');
   
   // Starting at walrusIndex, remove 1 element
   animals.splice(walrusIndex, 1);
   
   console.log(animals);
   // now animals = ['dog', 'cat', 'seal', 'lion', 'cat']
}

nonDestructiveRemove();
inPlaceRemove();