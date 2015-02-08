![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Local Storage

###Rohan Dhaimade

---


##Agenda

* Local Storage

---

## What is Local Storage?

Local Storage is a way of persisting data between sessions without a server. 

---

## Local Storage

Local Storage is very similiar to JSON!

```
localStorage['favoriteAnimal'] = 'Rhino'
console.log(localStorage['favoriteAnimal']) // prints out 'Rhino'
```

---

## Limitations

Unlike JSON, keys and values must both be strings! 

It will convert everything else into strings if you try to store it.

```
localStorage['favoriteAnimals'] = ['Rhino']
console.log(localStorage['favoriteAnimals']) // prints out 'Rhino'
```

There is also a limit of 5MB of data

---

## Viewing Local Storage

You can see, clear and modify local storage in the console or in the developer tools

Developer Tools -> Resources -> Local Storage

---

## Other Gotchas

Local storage works across "domains". So www.google.com will have its own local storage across all www.google.com

If you're working on finals locally. It means that all files worked on locally share the same domain. 

---

## Score Keeper

![GeneralAssemb.ly](../img/icons/code_along.png)
